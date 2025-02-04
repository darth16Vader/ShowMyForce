import {
  faAws,
  faBootstrap,
  faCss3,
  faFacebookF,
  faFigma,
  faGitAlt,
  faGithub,
  faGoogle,
  faHtml5,
  faInstagram,
  faLinux,
  faMdb,
  faNode,
  faPhp,
  faReact,
  faSass,
  faSquareJs,
  faStackOverflow,
  faUbuntu,
  faViber,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faChevronRight,
  faCloudMoon,
  faCode,
  faGlobe,
  faMagnifyingGlass,
  faMobileScreenButton,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { projects } from "../src/data/projectsData";
import profilePic from "../src/assets/alvin.png";
import toolalgo from "../src/assets/toolalgo.png";
import myrecipe from "../src/assets/myrecipe.png";
import bottle from "../src/assets/bottle.png";
import psms from "../src/assets/psms.png";
import oven from "../src/assets/oven.png";

function App() {
  const [hovered, setHovered] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode === "true";
  });

  useEffect(() => {
    const classAction = darkMode ? "add" : "remove";
    document.documentElement.classList[classAction]("dark");
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const handleScroll = () => {
    const targetSection = document.getElementById("about");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark:bg-[#2C2D31] bg-[#D8D8D8]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#fff] text-[#404040] p-3 rounded-full shadow-lg hover:bg-gray-400 hover:text-[#f2f2f2] focus:outline-none focus:ring focus:ring-blue-300 transition-opacity duration-300 z-50"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <FontAwesomeIcon icon={faArrowUpLong} />
        </button>
      )}
      <section className="min-h-screen dark:bg-[#2C2D31] transition-colors duration-700 ease-out">
        <div className="min-h-screen bg-gradient-to-b from-[#fff] to-[#D8D8D8] to-90% dark:bg-none duration-700 ease-out">
          <div
            className="fixed top-[20px] right-4 rounded-full bg-[#fff] text-[#404040] w-10 h-10 flex items-center justify-center cursor-pointer z-50 shadow-lg"
            onClick={() => setDarkMode(!darkMode)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FontAwesomeIcon icon={darkMode ? faCloudMoon : faSun} />
            {hovered && (
              <div
                className="text-xs absolute left-[-140px] bg-[#F2F2F2] shadow-lg text-[#404040] rounded-md px-2 py-1 hidden sm:block"
                style={{ whiteSpace: "nowrap" }}
              >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </div>
            )}
          </div>

          <div className="flex items-center h-screen p-4 xl:px-40 2xl:px-96">
            <div className="container mx-auto">
              <div className="grid gap-4 xl:grid-cols-2 xl:grid-flow-col">
                <div>
                  <p className="font-black leading-[.7] text-[8rem] text-[#B921FF] opacity-10 dark:text-[#A3A3A3] hidden xl:block">
                    PORT
                    <br />
                    &nbsp;FOLIO
                  </p>
                  <div className="font-bold mb-3 text-[2.5rem] sm:text-[3rem] mt-[-2rem] text-[#404040] sm:ml-[2rem] dark:text-[#F2F2F2] text-center xl:text-left">
                    Alvin Paala
                    <span className="text-[#B921FF]">.</span>
                  </div>
                  <div className="sm:ml-[2rem] flex">
                    <div className="flex mx-auto xl:ml-0">
                      <a
                        href="https://www.facebook.com/Alvin.S16.Paala"
                        target="_blank"
                      >
                        <div className="rounded-full bg-neutral-200 w-8 h-8 flex items-center justify-center text-[#B921FF]">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                      </a>

                      <a
                        href="https://www.instagram.com/vnsmk.01/?igsh=Y3J6anFhN3Zod3Iy&utm_source=qr#"
                        target="_blank"
                      >
                        <div className="ml-[.5rem] rounded-full bg-neutral-200 w-8 h-8 flex items-center justify-center text-[#B921FF]">
                          <FontAwesomeIcon icon={faInstagram} />
                        </div>
                      </a>
                      <a
                        href="viber://chat?number=%2B639352838741"
                        target="_blank"
                      >
                        <div className="ml-[.5rem] rounded-full bg-neutral-200 w-8 h-8 flex items-center justify-center text-[#B921FF]">
                          <FontAwesomeIcon icon={faViber} />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-[140px] mx-auto rounded-[180px] overflow-hidden relative mb-10 xl:hidden">
                    <img
                      className="mx-auto object-cover h-[300px] mt-[1rem] filter brightness-110"
                      src={profilePic}
                      alt="Alvin"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#B921FF] to-transparent to-30%"></div>
                  </div>
                  <div className="sm:mt-[10rem] sm:ml-[2rem] md:mt-[5rem]">
                    <p className="text-center xl:text-left text-[2.5rem] text-[#404040] leading-[1.1] tracking-[-3px] dark:text-[#F2F2F2] font-normal">
                      Front-end
                      <br /> Web Developer
                    </p>
                    <hr className="mx-auto xl:ml-0 h-[.5px] my-4 bg-[#cbcbcb] border-0 dark:bg-[#cbcbcb]/25 w-52"></hr>
                    <div className="flex justify-center xl:justify-normal">
                      <div>
                        <a
                          href="https://drive.google.com/file/d/1z33VTBujtvUI8IZtJtlH84x3z2qdycP4/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="py-1.5 px-6 rounded-xl bg-gradient-to-r from-[#FF65D8] to-[#B921FF] text-[#f2f2f2] ease-out duration-300 shadow-lg shadow-violet text-sm">
                            VIEW RESUME
                          </button>
                        </a>
                        <button
                          className="py-1.5 px-6 ml-4 rounded-xl bg-[#F2F2F2] border-[#B921FF] border-[1px] text-[#B921FF] ease-out duration-300 shadow-lg shadow-violet text-sm"
                          onClick={handleScroll}
                        >
                          KNOW MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="circle-shadow absolute bottom-[2rem] left-[45%] hidden xl:block"></div>
                  <div className="circle-shadow absolute bottom-[6rem] left-[30%] hidden xl:block"></div>
                  <div className="w-[300px] mx-auto rounded-[180px] overflow-hidden relative hidden xl:block">
                    <img
                      className="object-cover h-[700px] mt-[-5rem] filter brightness-110"
                      src={profilePic}
                      alt="Alvin"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#B921FF] to-transparent to-30%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#D8D8D8] dark:bg-[#2C2D31] duration-700 ease-out"
        id="about"
      >
        <div className="relative xl:px-40 2xl:px-96 md:py-12 flex items-center bg-[#D8D8D8] dark:bg-[#2C2D31] duration-700 ease-out">
          <div className="circle-shadow absolute bottom-[20%] right-[20%] hidden xl:block z-0"></div>
          <div className="circle-shadow2 absolute bottom-[40%] right-[10%] hidden xl:block z-0"></div>
          <div className="container mx-auto">
            <p className="text-center text-[1.5rem] text-[#404040] dark:text-[#F2F2F2] mb-5 md:hidden font-semibold">
              What I Am Great At<span className="text-[#B921FF]">.</span>
            </p>
            <div className="grid gap-2 mb-8 lg:grid-cols-2 xl:grid-flow-col lg:gap-12 xl:gap-20 md:px-8 xl:px-0">
              <div className="grid grid-cols-2 gap-4 px-4 text-center">
                <div>
                  <div className="relative bg-slate-50/[.4] rounded-[35px] py-8 sm:py-4 px-6 lg:py-12 mb-4 dark:bg-gradient-to-r dark:from-[#212121]/[.9] dark:to-[#210031]/[.9] dark:border-[1px] dark:border-[#404040]">
                    <div className="circle-shadow absolute top-[1rem] left-[1rem] hidden xl:block z-0"></div>
                    <div className="mx-auto rounded-full bg-neutral-50 w-16 h-16 flex items-center justify-center text-[#B921FF] text-[1.3rem] dark:bg-[#000] z-10">
                      <FontAwesomeIcon icon={faPenNib} />
                    </div>
                    <hr className="mx-auto xl:ml-0 h-[.5px] my-4 bg-[#cbcbcb] border-0 dark:bg-[#cbcbcb]/25 w-full"></hr>
                    <p className="text-[#404040] text-[.8rem] dark:text-[#F2F2F2]">
                      UI/UX Design
                      <br />
                      <small>12 projects</small>
                    </p>
                  </div>
                  <div className="bg-slate-50/[.4] rounded-[35px] py-8 sm:py-4 px-6 lg:py-12 mb-4 dark:bg-gradient-to-r dark:from-[#212121]/[.9] dark:to-[#210031]/[.9] dark:border-[1px] dark:border-[#404040]">
                    <div className="mx-auto rounded-full bg-neutral-50 w-16 h-16 flex items-center justify-center text-[#B921FF] text-[1.3rem] dark:bg-[#000]">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <hr className="mx-auto xl:ml-0 h-[.5px] my-4 bg-[#cbcbcb] border-0 dark:bg-[#cbcbcb]/25 w-full"></hr>
                    <p className="text-[#404040] text-[.8rem] dark:text-[#F2F2F2]">
                      UI/UX Design
                      <br />
                      <small>12 projects</small>
                    </p>
                  </div>
                </div>
                <div className="xl:mt-[5rem]">
                  <div className="bg-slate-50/[.4] rounded-[35px] py-8 sm:py-4 px-6 lg:py-12 mb-4 dark:bg-gradient-to-r dark:from-[#212121]/[.9] dark:to-[#210031]/[.9] dark:border-[1px] dark:border-[#404040]">
                    <div className="mx-auto rounded-full bg-neutral-50 w-16 h-16 flex items-center justify-center text-[#B921FF] text-[1.3rem] dark:bg-[#000]">
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                    <hr className="mx-auto xl:ml-0 h-[.5px] my-4 bg-[#cbcbcb] border-0 dark:bg-[#cbcbcb]/25 w-full"></hr>
                    <p className="text-[#404040] text-[.8rem] dark:text-[#F2F2F2]">
                      Web Development
                      <br />
                      <small>12 projects</small>
                    </p>
                  </div>
                  <div className="bg-slate-50/[.4] rounded-[35px] py-8 sm:py-4 px-6 lg:py-12 mb-4 dark:bg-gradient-to-r dark:from-[#212121]/[.9] dark:to-[#210031]/[.9] dark:border-[1px] dark:border-[#404040]">
                    <div className="mx-auto rounded-full bg-neutral-50 w-16 h-16 flex items-center justify-center text-[#B921FF] text-[1.3rem] dark:bg-[#000]">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <hr className="mx-auto xl:ml-0 h-[.5px] my-4 bg-[#cbcbcb] border-0 dark:bg-[#cbcbcb]/25 w-full"></hr>
                    <p className="text-[#404040] text-[.8rem] dark:text-[#F2F2F2]">
                      UI/UX Design
                      <br />
                      <small>12 projects</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block place-content-center">
                <div className="font-black leading-[.7] text-[8rem] text-[#B921FF] opacity-10 dark:text-[#A3A3A3] hidden lg:block">
                  DES
                  <br />
                  <p className="ml-40">IGN</p>
                </div>
                <p className="text-[2.5rem] text-[#404040] leading-[1.1] tracking-[-2px] dark:text-[#F2F2F2] font-normal mt-[-4rem]">
                  What I Am
                  <br />
                  Great At<span className="text-[#B921FF]">.</span>
                </p>
                <p className="w-9/12 mt-5 text-[#404040] dark:text-[#F2F2F2] font-light dark:font-thin text-sm">
                  - My primary expertise is in front-end development, but I also
                  have a deep passion for back-end technologies. I believe that
                  having experience in both design and development not only
                  enhances my technical skills but also allows me to create more
                  seamless, efficient, and user-friendly experiences. By
                  understanding both aspects, I can bridge the gap between
                  functionality and aesthetics, ensuring a well-rounded approach
                  to web development.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 mb-5 text-center">
              <div className="col-span-2 my-5">
                <p className="text-[1.5rem] leading-[1.1] text-[#B921FF]">
                  6+
                  <br />
                  <small className="text-[.9rem] text-[#404040] dark:text-[#F2F2F2]">
                    Years of experience
                  </small>
                </p>
              </div>
              <div className="col-span-2 my-5">
                <p className="text-[1.5rem] leading-[1.1] text-[#B921FF]">
                  25+
                  <br />
                  <small className="text-[.9rem] text-[#404040] dark:text-[#F2F2F2]">
                    Satisfied Clients
                  </small>
                </p>
              </div>
              <div className="col-span-4 my-5">
                <p className="text-[1.5rem] leading-[1.1] text-[#B921FF]">
                  500+
                  <br />
                  <small className="text-[.9rem] text-[#404040] dark:text-[#F2F2F2]">
                    Design Tools
                  </small>
                </p>
              </div>
            </div>
            <div className="w-9/12 mx-auto mb-24 lg:w-7/12 xl:w-6/12">
              <ul className="flex flex-wrap leading-[1.8] items-center justify-center space-x-4 text-[1.5rem] sm:text-[2rem] text-[#404040] dark:text-[#F2F2F2]">
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faHtml5} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faCss3} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faSquareJs} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faSass} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faFigma} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faGithub} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faReact} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faPhp} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faBootstrap} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faMdb} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faWordpress} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faLinux} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faUbuntu} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faGithub} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faStackOverflow} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faAws} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faNode} />
                </li>
                <li className="hover:text-[#B921FF] duration-300 ease-out">
                  <FontAwesomeIcon icon={faGitAlt} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="xl:px-40 2xl:px-96 flex py-6 md:pb-20 bg-[#D8D8D8] dark:bg-[#2C2D31] duration-700 ease-out">
          <div className="container relative mx-auto">
            <div className="circle-shadow absolute top-[12%] right-[33%] hidden xl:block z-0"></div>
            <div className="mx-auto w-80 font-black leading-[.7] text-[8rem] text-[#B921FF] opacity-10 dark:text-[#A3A3A3] hidden lg:block">
              DEV
              <br />
              <p className="ml-44">ELOP</p>
            </div>
            <p className="text-center text-[1.5rem] md:text-[2.5rem] text-[#404040] dark:text-[#F2F2F2] mb-6 sm:mb-16 font-semibold sm:font-normal mt-[-4rem] md:tracking-[-2px]">
              Recent Works<span className="text-[#B921FF]">.</span>
            </p>
            {projects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-6 gap-8 px-4 mb-5 lg:mb-16"
              >
                <div className="hidden col-span-5 md:col-span-5 lg:col-span-4 lg:block">
                  <img
                    className={`object-cover h-full w-full filter brightness-110 rounded-[35px] shadow-violet transition ease-in-out duration-700 ${
                      hoveredProjectId === project.id
                        ? "shadow-violet-active"
                        : ""
                    }`}
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div
                  className="col-span-6 md:col-span-6 lg:col-span-2"
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                >
                  <div className="bg-slate-50/[.4] rounded-[35px] py-4 sm:py-4 px-4 lg:py-12 mb-4 dark:bg-gradient-to-r dark:from-[#212121]/[.9] dark:to-[#210031]/[.9] dark:border-[1px] dark:border-[#404040] text-[#404040] dark:text-[#F2F2F2] h-full place-content-center">
                    <img
                      className="object-cover lg:h-full w-full filter brightness-110 rounded-[20px] mb-4 lg:hidden"
                      src={project.image}
                      alt={project.name}
                    />
                    <h5 className="text-xl leading-3 font-extralight">
                      {project.name}
                      <span className="text-[#B921FF]">.</span>
                    </h5>
                    <small className="mb-4 text-xs italic text-gray-400 dark:text-gray-500">
                      {project.url ? project.url : ""}
                    </small>
                    <hr className="xl:ml-0 h-[.5px] my-4 bg-[#cbcbcb] border-0 dark:bg-[#cbcbcb]/25 w-full" />
                    <p className="mb-4 text-[.8rem] font-light dark:font-thin">
                      {project.description}
                    </p>
                    {project.url && !project.disabledBtn && (
                      <div>
                        <span className="items-center table ml-auto space-x-4 text-xs text-right group font-extralight hover:cursor-pointer">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 transition-all group-hover:underline"
                          >
                            <span>Visit site</span>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                          </a>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <p className="text-[1.5rem] md:text-[2.5rem] text-[#404040] dark:text-[#F2F2F2] ml-4 mb-6 sm:mb-4 mt-6 sm:mt-16 font-semibold sm:font-normal md:tracking-[-2px]">
              Other Projects<span className="text-[#B921FF]">.</span>
            </p>
            <div className="relative grid grid-cols-2 gap-4 px-4 mb-4 sm:mb-12">
              <div className="circle-shadow absolute bottom-[0] left-[50%] hidden xl:block z-0"></div>
              <div className="relative col-span-3 pb-5 md:col-span-1">
                <img
                  className="object-cover h-auto w-full filter brightness-110 rounded-[35px] shadow-violet transition ease-in-out duration-700 mb-4"
                  src={toolalgo}
                ></img>
                <p className="text-center text-xl font-extralight leading-3 text-[#404040] dark:text-[#F2F2F2]">
                  Tool Algo Monitoring System
                </p>
              </div>
              <div className="relative col-span-3 pb-5 md:col-span-1">
                <img
                  className="object-cover h-auto w-full filter brightness-110 rounded-[35px] shadow-violet transition ease-in-out duration-700 mb-4"
                  src={oven}
                ></img>
                <p className="text-center text-xl font-extralight leading-3 text-[#404040] dark:text-[#F2F2F2]">
                  Oven Monitoring System
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 ">
              <div className="relative col-span-3 pb-5 md:col-span-1">
                <img
                  className="object-cover h-auto w-full filter brightness-110 rounded-[35px] shadow-violet transition ease-in-out duration-700 mb-4"
                  src={psms}
                ></img>
                <p className="text-center text-xl font-extralight leading-3 text-[#404040] dark:text-[#F2F2F2]">
                  Project Services System
                </p>
              </div>
              <div className="relative col-span-3 pb-5 md:col-span-1">
                <img
                  className="object-cover h-auto w-full filter brightness-110 rounded-[35px] shadow-violet transition ease-in-out duration-700 mb-4"
                  src={myrecipe}
                ></img>
                <p className="text-center text-xl font-extralight leading-3 text-[#404040] dark:text-[#F2F2F2]">
                  MyRecipe
                </p>
              </div>
              <div className="relative col-span-3 pb-5 md:col-span-1">
                <img
                  className="object-cover h-auto w-full filter brightness-110 rounded-[35px] shadow-violet transition ease-in-out duration-700 mb-4"
                  src={bottle}
                ></img>
                <p className="text-center text-xl font-extralight leading-3 text-[#404040] dark:text-[#F2F2F2]">
                  Bottle Line Efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative flex px-4 py-6 xl:px-40 2xl:px-96 lg:px-0">
          <div className="circle-shadow absolute bottom-[50%] left-[5%] hidden xl:block z-0"></div>
          <div className="circle-shadow2 absolute bottom-[40%] right-[5%] hidden xl:block z-0"></div>
          <div className="container mx-auto">
            <div className="bg-slate-50/[.4] rounded-[35px] py-8 sm:py-4 px-6 lg:py-6 mb-4 dark:bg-gradient-to-r dark:from-[#212121]/[.9] dark:to-[#210031]/[.9] dark:border-[1px] dark:border-[#404040] text-[#404040] dark:text-[#F2F2F2]">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center justify-center col-span-4 text-xl lg:col-span-1 lg:justify-start">
                  Contact me<span className="text-[#B921FF]">.</span>
                </div>
                <div className="flex items-center col-span-4 space-x-2 text-sm font-light lg:col-span-1 dark:font-thin max-lg:mx-auto max-sm:mb-4">
                  <FontAwesomeIcon icon={faGoogle} className="mr-2 text-2xl" />
                  <p>
                    <span className="text-gray-400 dark:text-gray-500">
                      email
                    </span>
                    <br />
                    alvin16paala@gmail.com
                  </p>
                </div>
                <div className="col-span-4 text-sm font-light lg:col-span-1 dark:font-thin max-lg:mx-auto max-sm:mb-4">
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      className="mr-2 text-2xl"
                    />
                    <p>
                      <span className="text-gray-400 dark:text-gray-500">
                        phone no.
                      </span>
                      <br />
                      (+63) 935-283-8741
                    </p>
                  </div>
                </div>
                <div className="flex items-center col-span-4 space-x-2 text-sm font-light text-center lg:col-span-1 max-lg:justify-center xl:justify-end dark:font-thin">
                  <div>
                    © 2025 |
                    <span className="ml-1 font-medium"> Alvin Paala</span>
                    <br />
                    <div className="hidden w-full text-xs text-right text-gray-400 lg:block dark:text-gray-400">
                      Build with Tailwind
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
