import './App.css';
import { useState } from 'react';

// 예시: react-icons 패키지 설치 필요 (yarn add react-icons)
import { FaPython, FaJava, FaJs, FaNodeJs, FaReact, FaDocker, FaGitAlt, FaLinux, FaDatabase, FaCuttlefish as FaCpp, FaMicrosoft, FaCloud, FaGithub, FaEnvelope, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiFastapi, SiNextdotjs, SiFlask, SiMongodb, SiPostgresql, SiMysql, SiAzuredevops, SiOpencv, SiNumpy, SiPandas, SiKeras, SiScikitlearn, SiUbuntu, SiC, SiCplusplus } from 'react-icons/si';

function App() {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  // 기술별 아이콘 매핑
  const skillIcons = {
    Python: <FaPython color="#3776AB" />,
    C: <SiC color="#A8B9CC" />,
    'C++': <SiCplusplus color="#00599C" />,
    JavaScript: <FaJs color="#F7DF1E" />,
    Java: <FaJava color="#007396" />,
    TensorFlow: <SiTensorflow color="#FF6F00" />,
    PyTorch: <SiPytorch color="#EE4C2C" />,
    FastAPI: <SiFastapi color="#009688" />,
    'Node.js': <FaNodeJs color="#339933" />,
    'Next.js': <SiNextdotjs color="#000" />,
    React: <FaReact color="#61DAFB" />,
    Flask: <SiFlask color="#000" />,
    'React Native': <FaReact color="#61DAFB" />,
    'Socket.IO': <FaCloud color="#010101" />,
    Keras: <SiKeras color="#D00000" />,
    Pandas: <SiPandas color="#150458" />,
    NumPy: <SiNumpy color="#013243" />,
    OpenCV: <SiOpencv color="#5C3EE8" />,
    Docker: <FaDocker color="#2496ED" />,
    Git: <FaGitAlt color="#F05032" />,
    MongoDB: <SiMongodb color="#47A248" />,
    Linux: <FaLinux color="#FCC624" />,
    PostgreSQL: <SiPostgresql color="#336791" />,
    MySQL: <SiMysql color="#4479A1" />,
    'Microsoft Azure': <FaMicrosoft color="#0078D4" />,
    CUDA: <FaCloud color="#76B900" />,
    'Scikit-Learn': <SiScikitlearn color="#F7931E" />,
    SQLite: <FaDatabase color="#003B57" />,
    Ubuntu: <SiUbuntu color="#E95420" />,
    DeepLearning: <FaCloud color="#6E4AFF" />,
    'Computer Vision': <FaCloud color="#6E4AFF" />,
    'Image Processing': <FaCloud color="#6E4AFF" />,
    'Speech Recognition': <FaCloud color="#6E4AFF" />,
    'Autonomous Driving': <FaCloud color="#6E4AFF" />,
  };

  const skills = {
    Languages: ['Python', 'C', 'C++', 'JavaScript', 'Java'],
    Frameworks: [
      'TensorFlow', 'PyTorch', 'FastAPI', 'Node.js', 'Next.js', 'React', 'Flask', 'React Native', 'Socket.IO', 'Keras'
    ],
    Tools: [
      'Pandas', 'NumPy', 'OpenCV', 'Docker', 'Git', 'MongoDB', 'Linux', 'PostgreSQL', 'MySQL',
      'Microsoft Azure', 'CUDA', 'Scikit-Learn', 'SQLite', 'Ubuntu'
    ],
    Concepts: [
      'DeepLearning', 'Computer Vision', 
      'Image Processing', 'Speech Recognition', 'Autonomous Driving'
    ]
  };

  const certificates = [
    {
      title: 'Certificate in Computer Utilization Level 2',
      date: 'Feb 2024',
      issuer: 'Korea Chamber of Commerce and Industry'
    },
    {
      title: 'SQLD (SQL Developer)',
      date: 'Jun 2025',
      issuer: 'Korea Data Agency'
    },
    {
      title: 'Engineer Information Processing',
      date: 'Jun 2025',
      issuer: 'Human Resources Development Service of Korea'
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      date: 'Jul 2025',
      issuer: 'Microsoft'
    }
  ];

  const contacts = [
    { type: 'Email', value: 'ljwyjs@gmail.com', link: 'mailto:ljwyjs@gmail.com', icon: <FaEnvelope /> },
    { type: 'GitHub', value: 'asdzxc123T', link: 'https://github.com/asdzxc123T', icon: <FaGithub /> }
  ];

  const projects = [
    {
      name: '2021 Indoor People Counting Projects',
      urls: [
        { label: 'SKKU-AUTOSEMANTICS-SANHAK', link: 'https://github.com/2021-SKKU-AUTOSEMANTICS-SANHAK' },
        { label: 'Coursera-Deep-Learning-Specialization', link: 'https://github.com/asdzxc123T/Coursera-Deep-Learning-Specialization' },
        { label: 'CameraObjectsDetection', link: 'https://github.com/asdzxc123T/CameraObjectsDetection' }
      ],
      description: 'A project in 2021 that use object detection to count people in indoor spaces, focusing on real-time monitoring and analysis.'
    },
    {
      name: '2024 Carbon Emission Reduction Project',
      url: 'https://github.com/skkuse/2024spring_41class_team2',
      description: 'A 2024 initiative to optimize inefficient code and reduce its carbon footprint through smarter algorithms and refactoring.'
    },
    {
      name: '2025 AWS DeepRacer Reward Functions',
      url: 'https://github.com/asdzxc123T/DeepRacer',
      description: 'Custom reward functions and experiments for AWS DeepRacer, aimed at improving autonomous racing performance.'
    },
    {
      name: 'Ainuri: Public Facility Damage Reporting Service (Ongoing)',
      url: 'https://github.com/bamby33/MS_Project_Ainuri',
      description: 'A current project building an AI-powered service for reporting damaged public facilities using both image and voice recognition.'
    }
  ];

  const handleMouseOver = (e, description) => {
    setTooltip({
      visible: true,
      text: description,
      x: e.clientX + 10,
      y: e.clientY + 10
    });
  };

  const handleMouseOut = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <img
          src="/IMG_0057.jpg"
          alt="Profile"
          className="profile-photo"
        />
        <h1>Jaewon Lee</h1>
        <p>Full-stack Developer</p>
        <div className="contact-row">
          {contacts.map(contact => (
            <a
              key={contact.type}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              title={contact.type}
            >
              {contact.icon} <span>{contact.value}</span>
            </a>
          ))}
        </div>
      </header>
      <section className="portfolio-section">
        <h2>Education</h2>
        <ul>
          <li>Sungkyunkwan University, Department of Software (2020~) Currently on leave of absence, 4th year</li>
        </ul>
      </section>
      <section className="portfolio-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm Jaewon Lee, a developer who values user experience.<br />
          I am passionate about React, FastAPI, and Deep Learning, and have experience in various projects.
        </p>
      </section>
      <section className="portfolio-section">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, idx) => (
            <li
              key={project.name}
              onMouseOver={e => handleMouseOver(e, project.description)}
              onMouseMove={e => handleMouseOver(e, project.description)}
              onMouseOut={handleMouseOut}
              style={{ position: 'relative', cursor: 'pointer', marginBottom: '16px' }}
            >
              <strong>{project.name}</strong>
              {project.urls ? (
                <ul style={{ marginTop: 6, marginBottom: 6 }}>
                  {project.urls.map(u => (
                    <li key={u.link} style={{ marginLeft: 16, marginBottom: 2 }}>
                      <a href={u.link} target="_blank" rel="noopener noreferrer">{u.label}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  {' - '}
                  <a href={project.url} target="_blank" rel="noopener noreferrer">GitHub</a>
                </>
              )}
            </li>
          ))}
        </ul>
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{
              position: 'fixed',
              top: tooltip.y,
              left: tooltip.x,
              background: '#222',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '0.95rem',
              pointerEvents: 'none',
              zIndex: 1000,
              whiteSpace: 'nowrap'
            }}
          >
            {tooltip.text}
          </div>
        )}
      </section>
      <section className="portfolio-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <strong>{category}</strong>
              <ul>
                {skillList.map(skill => (
                  <li key={skill}>
                    <span className="skill-icon">{skillIcons[skill] || null}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="portfolio-section">
        <h2>Certificates & Awards</h2>
        <ul>
          {certificates.map(cert => (
            <li key={cert.title}>
              <strong>{cert.title}</strong> ({cert.date}, {cert.issuer})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;