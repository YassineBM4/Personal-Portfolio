import React, { useState, useRef, useEffect } from 'react';

export function AvatarChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Yassine's AI avatar. Ask me anything about my background, projects, or technical skills!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  const chatFeedRef = useRef(null);
  const audioContextRef = useRef(null);
  const animFrameRef = useRef(null);

  const audioRef = useRef(null);
  const audioUrlRef = useRef(null);

  // Smoothly scroll ONLY the internal chat container to the bottom
  const scrollChatToBottom = () => {
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTo({
        top: chatFeedRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollChatToBottom();
  }, [messages, isLoading]);

  // Cleanup Web Audio context and animation frames on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
      if (audioRef.current) audioRef.current.pause(); // add this line
    };
  }, []);

  // Handle Speech Synthesis & Voice Dynamics
  // Stop any audio (cloned voice or browser voice) that is currently playing
  const stopAllSpeech = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    setIsSpeaking(false);
    stopVoiceVisualizer();
  };

  // Speak with the cloned voice from /api/tts, fall back to the browser voice
  const speakText = async (text) => {
    if (!text) return;
    stopAllSpeech();

    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const type = res.headers.get('content-type') || '';
      if (!res.ok || !type.includes('audio')) {
        fallbackBrowserSpeech(text);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audioUrlRef.current = url;

      audio.onplay = () => {
        setIsSpeaking(true);
        startVoiceVisualizer();
      };
      audio.onended = () => stopAllSpeech();
      audio.onerror = () => stopAllSpeech();

      await audio.play();
    } catch (err) {
      console.warn('Cloned voice failed, using browser voice:', err);
      fallbackBrowserSpeech(text);
    }
  };

  const fallbackBrowserSpeech = (text) => {
    if (!('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 0.95;
    utterance.onstart = () => { setIsSpeaking(true); startVoiceVisualizer(); };
    utterance.onend = () => { setIsSpeaking(false); stopVoiceVisualizer(); };
    utterance.onerror = () => { setIsSpeaking(false); stopVoiceVisualizer(); };
    window.speechSynthesis.speak(utterance);
  };

  // Web Audio Visualizer modulation
  const startVoiceVisualizer = () => {
    try {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      let phase = 0;
      const updateLevel = () => {
        phase += 0.15;
        const simulatedVolume = Math.abs(Math.sin(phase) * 0.6 + Math.cos(phase * 2.3) * 0.4);
        setAudioLevel(simulatedVolume);
        animFrameRef.current = requestAnimationFrame(updateLevel);
      };

      updateLevel();
    } catch (e) {
      console.warn('Audio visualizer fallback enabled:', e);
    }
  };

  const stopVoiceVisualizer = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setAudioLevel(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedResponse += chunk;

        setMessages((prev) => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1] = {
            role: 'assistant',
            content: accumulatedResponse,
          };
          return newMsgs;
        });
      }

      speakText(accumulatedResponse);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Sorry, I'm having trouble connecting right now. Please feel free to send an email instead.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Dynamic box-shadow and scaling calculated from current speech volume
  const dynamicGlow = isSpeaking
    ? {
      boxShadow: `
          0 0 ${12 + audioLevel * 25}px rgba(0, 82, 212, ${0.4 + audioLevel * 0.5}),
          0 0 ${25 + audioLevel * 45}px rgba(0, 62, 171, ${0.2 + audioLevel * 0.4}),
          inset 0 0 ${10 + audioLevel * 20}px rgba(255, 255, 255, 0.3)
        `,
      borderColor: `rgba(0, 82, 212, ${0.6 + audioLevel * 0.4})`,
      transform: `scale(${1 + audioLevel * 0.04})`,
    }
    : {};

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-card text-card-foreground border border-border rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[500px]">

        {/* LEFT COLUMN: Avatar Container */}
        <div className="md:col-span-5 bg-muted/40 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border relative">
          <div
            className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg flex items-center justify-center bg-background transition-all duration-100 ease-out"
            style={dynamicGlow}
          >
            <img
              src="Image/YassineBM.jpg"
              alt="Yassine Avatar"
              className="w-full h-full object-cover transition-transform duration-200"
            />
          </div>

          <div className="mt-6 text-center">
            <h3 className="font-bold text-lg gradient-text">Yassine's AI Avatar</h3>
            <p className="text-muted-foreground text-xs mt-1 font-medium">
              {isSpeaking ? "🗣️ Speaking..." : isLoading ? "Thinking..." : "Ready to chat"}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Chat Area with Internal Scroll Container */}
        <div className="md:col-span-7 flex flex-col h-[480px] bg-card">

          {/* Internal Scroll Feed */}
          <div
            ref={chatFeedRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none shadow-md'
                    : 'bg-muted text-foreground border border-border rounded-bl-none'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1].role === 'user' && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-2xl rounded-bl-none px-4 py-3 text-sm animate-pulse border border-border">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Form Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 sm:p-4 border-t border-border bg-muted/20 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects, skills, or background..."
              className="flex-1 bg-background border border-input rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-primary-foreground font-medium px-5 rounded-xl text-sm transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
            >
              Send
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}