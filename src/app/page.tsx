import React from "react";
import Link from "next/link";
import { FaCode, FaLaptopCode, FaJsSquare } from "react-icons/fa";
import Image from "next/image";
import "./page.css";

// Define the project data directly in the component
const projects = [
  {
    id: 1,
    title: "Jakisa",
    description:
      "A multifaceted digital platform offering a wide array of content and services, including news, technology updates, science articles, business insights, sports coverage, and entertainment. ",
    image: "/Images/jakisa.jpg",
    link: "https://jackisa.com",
  },
  {
    id: 2,
    title: "SabiRoad",
    description:
      "SabiRoad is an innovative platform that leverages artificial intelligence, geospatial data, and architectural expertise to facilitate the discovery and analysis of buildings with exceptional precision.",
    image: "/Images/sabiroad.jpg",
    link: "https://ssabiroad.vercel.app",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "This is a simple yet efficient task management application built with React. It allows users to add, edit, mark as complete, and delete tasks effortlessly.",
    image: "/Images/todo.jpg",
    link: "https://github.com/Agladima/todo-app-with-react",
  },
  {
    id: 4,
    title: "Viyo",
    description:
      "Viyo is a streamlined rental platform that makes finding and securing properties easy. Users can browse listings and connect directly with landlords through an integrated chat system.",
    image: "/Images/viyo.jpg",
    link: "https://viyo-three.vercel.app/",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather app that provides real-time weather updates using a third-party API.",
    image: "/Images/weda.jpg",
    link: "https://github.com/Agladima/Weather-App",
  },
];

export default function Home() {
  return (
    <div className="App bg-[#260101] min-h-screen text-[#d9b991]">
      <header className="flex justify-center items-center fixed left-0 w-full z-50 bg-[#260101]">
        <h1 className="name">
          <span>Agladima</span>
        </h1>
        <nav className="navigation">
          <Link href="#experience">Experience</Link>
          <Link href="#project">Projects</Link>
          <Link href="#">Contact</Link>
          <a
            href="https://flowcv.com/resume/qec81kgjr4"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </nav>
      </header>
      <section className="hero">
        <div className="ping-container">
          <span className="ping-text">Available For Projects</span>
          <span className="ping-dot"></span>
        </div>
        <div className="hero-top">
          <div className="hero-left">
            <h1>Crafting Digital Excellence</h1>
            <p>
              Transforming intricate problems into seamless solutions by
              blending cutting-edge <br />
              technology with a creative and analytical mindset.
            </p>
            <div className="hero-services">
              <div className="service">
                <FaCode className="icon" />
                <h3> Full-Stack Development</h3>
                <p>
                  Crafting responsive, accessible, and performant web
                  applications with the latest technologies.
                </p>
              </div>
              <div className="service">
                <FaLaptopCode className="icon" />
                <h3> Responsive Web Development</h3>
                <p>
                  Creating fast, mobile-friendly, and accessible websites that
                  provide a seamless experience across all devices.
                </p>
              </div>
              <div className="service">
                <FaJsSquare className="icon" />
                <h3> JavaScript & Modern Frameworks</h3>
                <p>
                  Building dynamic and interactive web applications using
                  JavaScript, React, and Next.js.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/Images/owner.jpg"
              width={500}
              height={300}
              alt="My Image"
              className="image"
            />
          </div>
        </div>
      </section>
      <section id="experience" className="experience-overall">
        <div className="experience-section">
          <h2>Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="date">2023 - Present</div>
              <div className="job-title">Software Engineer</div>
              <div className="company">Self-Employed</div>
              <div className="description">
                Developed scalable web applications using React and Node.js.
                <br />
                Collaborated with cross-functional teams to deliver projects on
                time. <br />
                Kept abreast of tech trends for innovative solutions.
              </div>
            </div>
            <div className="timeline-item">
              <div className="date">2024 - 2025</div>
              <div className="job-title">Frontend Developer</div>
              <div className="company">Techy Jaunt</div>
              <div className="description">
                Worked on frontend projects and collaborated with designers.
                <br />
                Built responsive user interfaces for client projects. <br />
                Optimized website performance for better user experience.
              </div>
            </div>
            <div className="timeline-item">
              <div className="date">2023 - 2024</div>
              <div className="job-title">Web Developer</div>
              <div className="company">Arvys Technologies</div>
              <div className="description">
                Contributed to meetings and code reviews. <br />
                Developed responsive UI with HTML, CSS, JavaScript. <br />
                Used Git for code management.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="tech-stack-header">
          <p>Technologies</p>
          <h2>Tech Stack</h2>
        </div>
        <div className="tech-grid">
          <div className="tech-item">
            <Image
              src="/Images/javascript.gif"
              width={48}
              height={45}
              alt="JavaScript"
            />
            <h3>JavaScript</h3>
            <p>Language</p>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/typescript.png"
              width={48}
              height={45}
              alt="TypeScript"
            />
            <h3>TypeScript</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/python.gif"
              width={48}
              height={45}
              alt="Python"
            />
            <h3>Python</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/react.gif"
              width={48}
              height={45}
              alt="React.js"
            />
            <h3>React.js</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/next.png"
              width={48}
              height={45}
              alt="Next.js"
            />
            <h3>Next.js</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/node.png"
              width={48}
              height={45}
              alt="Node.js"
            />
            <h3>Node.js</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/django.png"
              width={48}
              height={45}
              alt="Django"
            />
            <h3>Django</h3>
          </div>
          <div className="tech-item">
            <Image src="/Images/html.png" width={48} height={45} alt="HTML" />
            <h3>HTML</h3>
          </div>
          <div className="tech-item">
            <Image src="/Images/css.png" width={48} height={45} alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/tailwind.png"
              width={48}
              height={45}
              alt="Tailwind"
            />
            <h3>Tailwind</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/github.png"
              width={48}
              height={45}
              alt="GitHub"
            />
            <h3>GitHub</h3>
          </div>
          <div className="tech-item">
            <Image src="/Images/git.png" width={48} height={45} alt="Git" />
            <h3>Git</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/gitlab.png"
              width={48}
              height={45}
              alt="GitLab"
            />
            <h3>GitLab</h3>
          </div>
          <div className="tech-item">
            <Image src="/Images/vs.png" width={48} height={45} alt="VS Code" />
            <h3>VS Code</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/sublime.png"
              width={48}
              height={45}
              alt="Sublime Text"
            />
            <h3>Sublime Text</h3>
          </div>
          <div className="tech-item">
            <Image
              src="/Images/pycharm.png"
              width={48}
              height={45}
              alt="PyCharm"
            />
            <h3>PyCharm</h3>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="project" className="portfolio">
        <h2>My Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="image"
              />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="links">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
