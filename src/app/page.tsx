import Link from "next/link";

import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="App bg-[#260101] min-h-screen text-[#d9b991] ">
      <header className="flex justify-center items-center fixed  left-0 w-full z-50 bg-[#260101]">
        <h1 className="name">
          <span>Agladima</span>
        </h1>{" "}
        <nav className="navigation">
          <Link href="#experience">
            {" "}
            <a>Experience</a>
          </Link>
          <Link href="#project">
            {" "}
            <a>Projects</a>
          </Link>
          <Link href="#">
            {" "}
            <a>Contact</a>
          </Link>

          <a
            href="https://flowcv.com/resume/qec81kgjr4"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </nav>
      </header>{" "}
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
                <h3> Full-Stack Development</h3>{" "}
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
        <div>
          <div className="tech-category">
            <h3>Languages</h3>
            <div className="tech-items">
              <div className="tech-item">
                <Image
                  src="/Images/javascript.gif"
                  width={48}
                  height={45}
                  alt="Javascript"
                />
                <p>JavaScript</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/typescript.png"
                  width={48}
                  height={45}
                  alt="Typescript"
                />
                <p>TypeScript</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/python.gif"
                  width={48}
                  height={45}
                  alt="Python"
                />
                <p>Python</p>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Frontend Frameworks</h3>
            <div className="tech-items">
              <div className="tech-item">
                <Image
                  src="/Images/react.gif"
                  width={48}
                  height={45}
                  alt="React.js"
                />
                <p>React.js</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/next.png"
                  width={48}
                  height={45}
                  alt="Next.js"
                />
                <p>Next.js</p>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Backend Frameworks</h3>
            <div className="tech-items">
              <div className="tech-item">
                <Image
                  src="/Images/node.png"
                  width={48}
                  height={45}
                  alt="Node.js"
                />
                <p>Node.js</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/django.png"
                  width={48}
                  height={45}
                  alt="Django"
                />
                <p>Django(Python)</p>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Web Development</h3>
            <div className="tech-items">
              <div className="tech-item">
                <Image
                  src="/Images/html.png"
                  width={48}
                  height={45}
                  alt="HTML"
                />
                <p>HTML</p>
              </div>
              <div className="tech-item">
                <Image src="/Images/css.png" width={48} height={45} alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/tailwind.png"
                  width={48}
                  height={45}
                  alt="Tailwind"
                />
                <p>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Version Control</h3>
            <div className="tech-items">
              <div className="tech-item">
                <Image src="/Images/git.png" width={48} height={45} alt="Git" />
                <p>Git</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/github.png"
                  width={48}
                  height={45}
                  alt="Github"
                />
                <p>GitHub</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/gitlab.png"
                  width={48}
                  height={45}
                  alt="Gitlab"
                />
                <p>Gitlab</p>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Development Tools</h3>
            <div className="tech-items">
              <div className="tech-item">
                <Image
                  src="/Images/vs.png"
                  width={48}
                  height={45}
                  alt="VS Code"
                />
                <p>Visual Studio Code</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/sublime.png"
                  width={48}
                  height={45}
                  alt="Sublime Text"
                />
                <p>Sublime Text</p>
              </div>
              <div className="tech-item">
                <Image
                  src="/Images/pycharm.png"
                  width={48}
                  height={45}
                  alt="PyCharm"
                />
                <p>PyCharm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project" className="projects">
        <div className="project-header">
          <h2>Featured Projects</h2>
          <p>
            Explore my portfolio of software development projects. As a software
            engineer, I specialize in building scalable and efficient solutions
            that solve real-world problems. My work spans full-stack
            development, system design, and data-driven applications, showcasing
            my ability to design, develop, and deploy innovative technologies.
            From crafting robust backend systems to creating seamless user
            experiences, each project reflects my commitment to excellence and
            my passion for delivering high-quality software solutions.
          </p>
        </div>
        <div className="project-items">
          <div className="project-item">
            <div className="project-image">
              <Image
                src="/Images/todo.jpg"
                width={300}
                height={200}
                alt="Todo App"
                className="de-image"
              />
            </div>
            <a
              href="https://github.com/Agloo7/todo-app-with-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              ToDo List App
            </a>
            <p>
              A to-do list app that allows users to efficiently manage tasks by
              adding, editing, and deleting to-do items. This project highlights
              my ability to create functional, user-friendly applications with
              essential features like task prioritization and completion
              tracking.
            </p>
          </div>
          <div className="project-item">
            <div className="project-image">
              <Image
                src="/Images/viyo.jpg"
                width={300}
                height={200}
                alt="Viyo"
                className="de-image"
              />
            </div>
            <a
              href="https://github.com/Agloo7/Viyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viyo
            </a>
            <p>
              The rental property site is a dynamic platform that streamlines
              the process of searching for and renting properties. It features
              an intuitive interface with advanced search filters, property
              listings, and detailed property pages, ensuring an easy and
              seamless user experience.
            </p>
          </div>

          <div className="project-item">
            <div className="project-image">
              <Image
                src="/Images/weather.jpg"
                width={300}
                height={200}
                alt="Weather"
                className="de-image"
              />
            </div>
            <a
              href="https://github.com/Agloo7/Weather-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather App
            </a>
            <p>
              {" "}
              The weather app is another project where I utilized JavaScript and
              external APIs to provide real-time weather information. Users can
              view current conditions, forecasts, and weather tips based on
              their location, all within a clean and responsive design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
