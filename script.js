// Initialize Lucide icons
lucide.createIcons();

// Data
// Updated Programming Skills data with logos
const programmingSkills = [
    { 
        name: 'HTML5',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
        name: 'CSS3',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
        name: 'C',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    { 
        name: 'R',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg'
    }
];

const toolsFrameworks = [
    { 
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
    },
    { 
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
        name: 'Neo4j',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg'
    },
    { 
        name: 'TensorFlow',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    { 
        name: 'Scikit-learn',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
    },
    { 
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
        name: 'NLTK',
        logo: 'https://miro.medium.com/max/592/1*YM2HXc7f4v02pZBEO8h-qw.png'
    },
    { 
        name: 'PySpark',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'
    },
    { 
        name: 'AWS',
        logo: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/amazonwebservices/amazonwebservices-original.svg'
    },
    { 
        name: 'Flask',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
    },
    { 
        name: 'Tableau',
        logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg'
    }
];
const projects = [
    {
        title: "Rooftop Solar Potential Mapping Using Deep Learning",
        date: "Nov 2024",
        points: [
            "Developed a geospatial web application to estimate rooftop solar energy potential using computer vision algorithms",
            "Automated the extraction of building footprints & rooftop segmentation from satellite images with an accuracy of 82%",
            "Created a user-friendly, dynamic dashboard for real-time visualization of energy insights and analysis"
        ]
    },
    {
        title: "Cryptocurrency Flow & Investigation",
        date: "Nov 2023",
        points: [
            "Developed a Blockchain security toolkit using Python to enhance Ethereum transaction analysis",
            "Leveraged Data Analytics techniques to improved Fraud detection capabilities with an accuracy of 92%",
            "Built a robust ETL pipeline for collecting, storing, and managing transactions data in Neo4j database"
        ]
    },
    {
        title: "Face Recognition Attendance Management System",
        date: "April 2022",
        points: [
            "Designed and implemented a system leveraging facial recognition technology for seamless attendance tracking.",
            "Automated the process of attendance tracking to improved Accuracy by 90%",
            "Utilized MySQL to store and manage attendance data securely and efficiently."
        ]
    }
];

const certifications = [
    {
        title: "Machine Learning (Hon.)",
        issuer: "Coursera",
        date: "Jan 2024",
        credentialLink: "https://www.coursera.org/account/accomplishments/verify/4GF7XVM6Z2H6"
    },
    {
        title: "TensorFlow for AI, ML & DL ",
        issuer: "Coursera",
        date: "July 2023",
        credentialLink: "https://www.coursera.org/account/accomplishments/verify/2GEE4UXCYSYT?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
    },
    {
        title: "Programming in Java ",
        issuer: "NPTEL",
        date: "April 2023",
        credentialLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS49S5467004604274085"
    },
    {
        title: "Database Management ",
        issuer: "NPTEL",
        date: "Sep 2023",
        credentialLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS79S3509008710116622"
    },
    {
        title: "Python for Data Science & AI ",
        issuer: "Coursera",
        date: "Nov 2023",
        credentialLink: "https://coursera.org/verify/58GWMDD6BSNR"
    },
    {
        title: "Data Analysis with R Programming ",
        issuer: "Coursera",
        date: "Aug 2024",
        credentialLink: "https://www.coursera.org/account/accomplishments/verify/4AG68P51HDZG"
    },
];

const achievements = [
    {
        title: "Runner-Up position in CID Hackathon",
        description: "Secured second place in a hackathon organized by the Crime Investigation Department (CID), developing innovative solutions for law enforcement challenges.",
        image: "./images/achievements/CID.jpg", // Replace with your actual image path
        date: "2024",
        organizer: "Crime Investigation Department (CID)",
       
    },
    {
        title: "3rd Prize in HackXcelerate",
        description: "Won third prize at HackXcelerate Hackathon, showcasing technical excellence in solution development using Microsoft technologies.",
        image: "./images/achievements/Hackxcelerate.jpg", // Replace with your actual image path
        date: "2024",
        organizer: "CBIT College, Microsoft & Bytex",
       
    },
    {
        title: "Finalist at Rajasthan Police Hackathon 1.0",
        description: " Finalist at Rajasthan Police Hackathon 1.0",
        image: "./images/achievements/RJPH.jpg", // Replace with your actual image path
        date: "2024",
        organizer: " Rajasthan Police Department",  

    }
];
// Helper function to create elements with classes
function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
}
function populateProgrammingSkills() {
    const container = document.getElementById('programming-skills');
    programmingSkills.forEach(skill => {
        const skillCard = createElement('div', 'skill-card card');
        skillCard.innerHTML = `
            <img 
                src="${skill.logo}" 
                alt="${skill.name} logo" 
                class="skill-logo"
                onerror="this.onerror=null; this.src='/placeholder-logo.png';"
            >
            <span class="skill-name">${skill.name}</span>
        `;
        container.appendChild(skillCard);
    });
}

// Updated function to populate Tools & Frameworks with logos
function populateToolsFrameworks() {
    const container = document.getElementById('tools-frameworks');
    toolsFrameworks.forEach(tool => {
        const toolCard = createElement('div', 'skill-card card');
        toolCard.innerHTML = `
            <img 
                src="${tool.logo}" 
                alt="${tool.name} logo" 
                class="skill-logo"
                onerror="this.onerror=null; this.src='/placeholder-logo.png';"
            >
            <span class="skill-name">${tool.name}</span>
        `;
        container.appendChild(toolCard);
    });
}


// Populate Projects
function populateProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = createElement('div', 'project-card card');
        
        const header = createElement('div', 'project-header');
        header.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <span class="project-date">${project.date}</span>
        `;

        const pointsList = createElement('ul', 'project-points');
        project.points.forEach(point => {
            const listItem = createElement('li', 'project-point');
            listItem.innerHTML = `
                <div class="point-bullet"></div>
                <span>${point}</span>
            `;
            pointsList.appendChild(listItem);
        });

        projectCard.appendChild(header);
        projectCard.appendChild(pointsList);
        container.appendChild(projectCard);
    });
}

// Populate Certifications
function populateCertifications() {
    const container = document.getElementById('certifications-container');
    certifications.forEach(cert => {
        const certCard = createElement('div', 'certification-card card');
        certCard.innerHTML = `
            <div class="cert-header">
                <h3 class="cert-title">${cert.title}</h3>
                <span class="cert-date">${cert.date}</span>
            </div>
            <p class="cert-issuer">Issued by: ${cert.issuer}</p>
            ${cert.credentialLink ? `
                <a href="${cert.credentialLink}" target="_blank" rel="noopener noreferrer" class="cert-link">
                    View Credential
                    <i data-lucide="external-link" class="cert-link-icon"></i>
                </a>
            ` : ''}
        `;
        container.appendChild(certCard);
    });
    lucide.createIcons();
}

// Populate Achievements
function populateAchievements() {
    const container = document.getElementById('achievements-container');

    achievements.forEach(achievement => {
        // Create a card element
        const achievementCard = document.createElement('div');
        achievementCard.classList.add('achievement-card');

        // Populate the card's HTML content
        achievementCard.innerHTML = `
            <div class="achievement-image-container">
                <img 
                    src="${achievement.image}" 
                    alt="${achievement.title}" 
                    class="achievement-image"
                    onerror="this.onerror=null; this.src='/api/placeholder/400/300';"
                >
                <div class="achievement-overlay">
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <p class="achievement-description">${achievement.description}</p>
                </div>
            </div>
            <div class="achievement-details">
                <span class="achievement-date">
                    <i data-lucide="calendar" class="achievement-icon"></i>
                    ${achievement.date}
                </span>
                <span class="achievement-organizer">
                    <i data-lucide="building" class="achievement-icon"></i>
                    ${achievement.organizer}
                </span>
                ${achievement.certificate ? `
                    <a href="${achievement.certificate}" class="achievement-certificate-link" target="_blank" rel="noopener noreferrer">
                        <i data-lucide="award" class="achievement-icon"></i>
                        View Certificate
                    </a>
                ` : ''}
            </div>
        `;

        // Append the card to the container
        container.appendChild(achievementCard);
    });

    // Reinitialize Lucide icons for the newly added content
    lucide.createIcons();
}

// Add scroll animation
function addScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach(section => {
        section.classList.add('scroll-animation');
        observer.observe(section);
    });
}

// Add hover effects
function addHoverEffects() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize theme toggle
function initializeThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
}

// Handle mobile menu
function initializeMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProgrammingSkills();
    populateToolsFrameworks();
    populateProjects();
    populateCertifications();
    populateAchievements();
    addScrollAnimation();
    addHoverEffects();
    initializeThemeToggle();
    initializeMobileMenu();
    
    // Reinitialize Lucide icons after dynamic content is added
    lucide.createIcons();
});

// Handle window resize events
window.addEventListener('resize', () => {
    // Add any responsive adjustments here if needed
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});