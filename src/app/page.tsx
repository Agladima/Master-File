import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="App bg-[#260101] min-h-screen text-[#d9b991] ">
      <header className="flex justify-center items-center ">
        <h1 className="name">
          <span>Agladima</span>
        </h1>{" "}
        <nav className="navigation">
          <a href="#">About</a>

          <a href="#">Work</a>

          <a href="#">Contact</a>

          <a href="https://flowcv.com/resume/qec81kgjr4" className="button">
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
    </div>
  );
}
