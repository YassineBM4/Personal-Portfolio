export const profile = {
    name: 'Yassine Ben Mabrouk',
    title: 'Software Engineering Student',
    country: 'Tunisia',
    location: 'Tunis, Tunisia',
    email: 'benmabroukyassine399@gmail.com',
    phone: '+216 22 312 044',
    github: 'https://github.com/YassineBM4',
    linkedin: 'https://www.linkedin.com/in/yassine-ben-mabrouk-b7b071220/',
    photo: '/Image/YassineBM.jpg',
    cvUrl: '/Resume/YassineBenMabrouk_CV.pdf',
    // TODO (optional, visitors will ask): languages spoken, availability,
    // what kind of role you are looking for.
    languages: [],
    availability: '',
    lookingFor: '',
};

export const sections = {
    about: {
        title: 'About Me',
        subtitle:
            "I'm a mobile developer creating digital solutions that make a difference. My journey started with curiosity and has evolved into a passion dedicated to building exceptional app experiences.",
    },
    projects: {
        title: 'Featured Projects',
        subtitle:
            'Here are some of my recent projects that showcase my skills and passion for creating innovative digital solutions.',
    },
    activities: {
        title: 'Extracurricular Activities',
        subtitle:
            "Beyond coding, I'm actively involved in the tech community, contributing to meaningful causes and helping others grow in their development journey.",
    },
    certifications: {
        title: 'Certifications',
        subtitle:
            'Continuous learning is key to staying current in technology. Here are my professional certifications that validate my expertise across various platforms and technologies.',
    },
    skills: {
        title: 'Skills & Technologies',
        subtitle:
            'A comprehensive overview of various technologies and frameworks and developing environments that i worked with.',
    },
    contact: {
        title: 'Get In Touch',
        subtitle:
            "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's connect!",
    },
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
    name: 'Yassine Ben Mabrouk',
    title: 'Software Engineering Student',
    bio: 'Passionate mobile engineering student from Tunisia. I’m eager to expand my knowledge and explore how emerging technologies such as Artificial Intelligence can be integrated into mobile development to create innovative solutions that enhance and simplify everyday life.',
    photo: '/Image/YassineBM.jpg',
    photoAlt: 'Photo',
    cvUrl: '/Resume/YassineBenMabrouk_CV.pdf',
    cvLabel: 'Download CV',
    // Hero social buttons. The Mail button currently has no link; point it to mailto.
    socials: [
        { id: 'github', icon: 'Github', href: 'https://github.com/YassineBM4' },
        {
            id: 'linkedin',
            icon: 'Linkedin',
            href: 'https://www.linkedin.com/in/yassine-ben-mabrouk-b7b071220/',
        },
        { id: 'mail', icon: 'Mail', href: 'mailto:benmabroukyassine399@gmail.com' },
    ],
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
    storyTitle: 'My Story',
    story: [
        "Started my journey as a student in a university of IT, driven by curiosity and a love for problem-solving. Over the years, I've had the privilege of working with amazing teams, building everything from scratch to real web and mobile applications.",
        // TODO: make sure this paragraph is true, the chatbot will repeat it as fact
        "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of the curve in this ever-evolving field.",
    ],
    techStack: ['NestJS', 'Node.js', 'TypeScript', 'Flutter', 'Kotlin', 'Git'],
    image: '/Image/aboutMe.jpg',
    imageAlt: 'Developer working on code in modern office setup',
};

export const features = [
    {
        id: 'clean-code',
        icon: 'Code',
        title: 'Clean Code',
        description:
            'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
        id: 'creative-design',
        icon: 'Palette',
        title: 'Creative Design',
        description:
            'Crafting beautiful user interfaces that provide exceptional user experiences.',
    },
    {
        id: 'fast-performance',
        icon: 'Zap',
        title: 'Fast Performance',
        description:
            'Optimizing applications for speed and performance across all devices.',
    },
    {
        id: 'passion-driven',
        icon: 'Heart',
        title: 'Passion Driven',
        description:
            'Bringing enthusiasm and dedication to every project I work on.',
    },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects = [
    {
        id: 'MyBiat',
        title: 'Modernisation de l\'application myBIAT & Intégration de solutions IA',
        period: 'Jan 2026 - Aug 2026',
        description:
            'Executed a graduation engineering project modernizing the myBIAT mobile application across five major releases, integrating advanced features such as an RAG chatbot, a real-time voice callbot via WebSockets, online appointment/ticket booking, personal financial management (PFM), and a partner marketplace.',
        image: '/Image/myBiat.jpg',
        technologies: ['Backbase', 'Kotlin', 'XML', 'NestJS', 'FastAPI', 'PostgreSQL', 'OpenAI Realtime API', 'Jenkins']
    },
    {
        id: 'signify',
        title: 'Signify Academic Project',
        period: 'Oct 2025 - Jan 2026',
        description:
            'Developed Signify, a gamified mobile app that teaches you the hand sign language in a funny and engaging way. It offers innovative, interactive features to help users stay motivated and enjoy the learning process without ever feeling bored.',
        image: '/Image/signLanguage.jpg',
        technologies: ['NestJS', 'Jetpack compose', 'SwiftUI', 'Typescript', 'MongoDB'],
        liveUrl: 'https://github.com/YassineBM4/Signify/tree/master#readme',
        githubUrl: 'https://github.com/YassineBM4/Signify',
    },
    {
        id: 'msaware',
        title: 'MSAware Academic Project',
        period: 'Feb 2025 - Jun 2025',
        description:
            'Created MSAware, a cross-platform AI-driven mobile app connected to smartwatch to support individuals with Multiple Sclerosis to predict MS attacks with probabilistic accuracy.',
        image: '/Image/MSaware.jpg',
        technologies: ['NestJS', 'Flutter', 'Typescript', 'Python', 'MongoDB', 'Firebase'],
        liveUrl:
            'https://www.linkedin.com/posts/yassine-ben-mabrouk-b7b071220_msaware-multiplesclerosis-ai-activity-7331102589335269376-6xf3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeJxE8Bg5LK8QxgknAhvn89_Q7f93pK3I4',
        githubUrl: '#',
    },
    {
        id: 'abshore',
        title: 'Abshore Internship Project',
        period: 'Jul 2024 - Aug 2024',
        description:
            'Built the frontend of a financial verification platform for Abshore, allowing users to check if a check issuer has sufficient funds. Focused on creating a clean, user-friendly interface with secure integration to backend verification services.',
        image: '/Image/abshore.jpeg',
        technologies: ['React', 'React Bootstrap'],
        liveUrl: '#',
        githubUrl: 'https://github.com/YassineBM4/React-Abshore',
    },
    {
        id: 'swapcraze',
        title: 'Swapcraze Academic Project',
        period: 'Feb 2024 - May 2024',
        description:
            'Built 3 bartering applications for web, desktop, and mobile for product and service exchanges.',
        image: '/Image/bartering.jpg',
        technologies: [
            'Java For Desktop',
            'Symfony For Web',
            'PhpMyAdmin',
            'Flutterflow For Mobile App',
        ],
        liveUrl: '#',
        githubUrl: 'https://github.com/YassineBM4/Jeagers',
    },
    {
        id: 'health-app',
        title: 'Health Mobile App Professional Project',
        period: 'Jan 2024 - Mar 2024',
        description:
            'Designed a health mobile app that helps users locate nearby medical facilities, make reservations, and directly contact doctors.',
        image: '/Image/DRkhaled.jpg',
        technologies: ['Figma'],
        liveUrl: '#',
        githubUrl: '#',
    },
];

/* ------------------------------------------------------------------ */
/* Extracurricular activities                                          */
/* ------------------------------------------------------------------ */

export const activities = [
    {
        id: 'sim-vs-slim-hackathon',
        icon: 'Trophy',
        // TODO: title doesn't match the description, consider "Hackathon Winner"
        title: 'Tech Community Leader',
        organization: '1st place SIM vs SLIM Hackathon',
        period: '2024',
        description:
            'We won 1st place with a mobile app that gives plants a voice using AI and sensors. The plant could express if it’s too hot, thirsty, or lacking oxygen. It created a unique, interactive care experience through real-time data and natural-language messages.',
        image: '/Image/hackathon.jpg',
    },
    {
        id: 'cement-mob-hackathon',
        icon: 'Trophy',
        title: 'Hackathon Winner',
        organization: '3rd place Cement Mob Challenge Hackathon',
        period: '2024',
        description:
            'We won 3rd place by building a mobile app for a cement company to monitor the national market. It tracked competitors and collected product data across the country. An interactive map gave the sales team real-time insights and a strategic edge.',
        image: '/Image/cement.jpeg',
    },
    {
        id: 'blockchain-training',
        icon: 'Lightbulb',
        title: 'Training',
        organization: 'Blockchain training',
        period: '2024',
        description:
            'This training explored blockchain fundamentals—NFTs, cryptocurrencies, and wallets. We did a live demo by creating and funding a crypto wallet. It offered hands-on insight into how blockchain transactions work.',
        image: '/Image/hedera.jpg',
    },
    {
        id: 'innovation-training',
        icon: 'Lightbulb',
        title: 'Training',
        organization: 'Innovation management training',
        period: '2025',
        description:
            'This training focused on fostering innovation through structured strategies. We learned how to turn ideas into impactful projects and manage innovation processes effectively.',
        image: '/Image/innovation.jpg',
    },
];

/* ------------------------------------------------------------------ */
/* Certifications                                                      */
/* ------------------------------------------------------------------ */

export const certifications = [
    {
        id: 'ibm-data-science-orientation',
        title: 'Data Science Orientation Certificate',
        issuer: 'IBM from Coursera',
        date: '2024',
        // The old `image` field held alt-text copied from a template ("AWS certification
        // badge..."), and the card actually shows this placeholder Unsplash photo.
        // Replace with your own certificate image when you have one.
        image: 'https://images.unsplash.com/photo-1702306257239-52fac9e29b79',
        imageAlt: 'Data Science Orientation certificate',
        description: '', // the component reads cert.description, so it was blank before
        verifyUrl:
            'https://www.credly.com/badges/effc3902-5aa6-4fd9-842f-0576e75882d0/linked_in_profile',
    },
    {
        id: 'ibm-what-is-data-science',
        title: '"What is Data Science?" Certificate',
        issuer: 'IBM from Coursera',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1702306257239-52fac9e29b79',
        imageAlt: '"What is Data Science?" certificate',
        description: '',
        verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/97UGP3PYTLFA',
    },
    {
        id: 'learnquest-intro-java',
        title: 'Introduction to Java Certificate',
        issuer: 'LearnQuest from Coursera',
        date: '2024',
        image: 'https://images.unsplash.com/photo-1702306257239-52fac9e29b79',
        imageAlt: 'Introduction to Java certificate',
        description: '',
        verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/9LEZAJLTM24H',
    },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skills = [
    'TypeScript',
    'Javascript',
    'Kotlin',
    'Flutter',
    'NestJS',
    'NodeJS',
    'Symfony',
    '.Net',
    'SpringBoot',
    'C#',
    'Java',
    'C++',
    'MongoDB',
    'PhpMyAdmin',
    'Oracle',
    'Git',
    'Android Studio',
    'Vs Code',
    'Visual Studio',
    'Figma',
    'IntelliJ IDEA',
    'Postman',
    'Docker',
];

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contactInfo = [
    {
        id: 'email',
        icon: 'Mail',
        label: 'Email',
        value: 'benmabroukyassine399@gmail.com',
        href: 'mailto:benmabroukyassine399@gmail.com',
    },
    {
        id: 'phone',
        icon: 'Phone',
        label: 'Phone',
        value: '+216 22 312 044',
        href: '',
    },
    {
        id: 'location',
        icon: 'MapPin',
        label: 'Location',
        value: 'Tunis, Tunisia',
        href: '',
    },
];

export const socialLinks = [
    {
        id: 'github',
        icon: 'Github',
        label: 'GitHub',
        href: 'https://github.com/YassineBM4',
        color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
        id: 'linkedin',
        icon: 'Linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yassine-ben-mabrouk-b7b071220/',
        color: 'hover:text-blue-600',
    },
];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
    text: '© 2025 Yassine Ben Mabrouk Developer. Built with React',
};