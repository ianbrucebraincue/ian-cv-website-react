import { useState, useEffect } from 'react';
import { Link, Outlet  } from 'react-router-dom';
import Navigation from './components/Navigation';
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as ArrowRight } from './assets/icon-arrow-right.svg';
import { ReactComponent as ChevronRight } from './assets/icon-chevron-right.svg';

import './styles/projects.scss'

export default function ProjectLayout() {
    const [projects, setProjects] = useState([]);
    const [hoverProject, setHoverProject] = useState({ image: "", hover: false });

    useEffect(() => {
        fetch('../projects.json'
        ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          .then(response => response.json())
          .then(data => setProjects(data.projects));
      }, []);

      const arrowMotion = {
        rest: { transform: "translateX(-30px)", ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {
            transform: "translateX(0px)",
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn"
            }
        }
      }
      
      const chevronMotion = {
        rest: { x: 0, ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {
            x: 20,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn"
            }
        }
      }

    return (
        <main role="main" id="wrap" className="main">  
           <Navigation />  
           <div className="projects-index">
            <div className="project-hover-image">
            <AnimatePresence>
                {hoverProject.hover && 
                    <motion.img
                        key={require(`./assets/${hoverProject.image}`)}
                        src={require(`./assets/${hoverProject.image}`)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                }
            </AnimatePresence>
            </div>
            <div className="projects-list">
                <div className="page-title">
                    <h1 className="">Projects</h1>
                </div>
                <ul>
                    {projects.map((project, index) => (
                        <motion.li key={project.id}
                            whileHover="hover"
                            className="project-title">
                            <Link to={project.path}
                            onMouseEnter={() => setHoverProject({image: project.images[0], hover: true})}
                            onMouseLeave={() => setHoverProject({image: "", hover: false})}
                            className="project-link">
                                <motion.div 
                                variants={arrowMotion}
                                className="arrow-title">
                                    <div
                                    className="arrow-right">
                                        <ArrowRight/>
                                    </div>
                                    <h4>{project.title}</h4> 
                                </motion.div>
                                <motion.div 
                                variants={chevronMotion}
                                className="chevron-right">
                                    <ChevronRight/>
                                </motion.div>
                            </Link> 
                        </motion.li>

                    ))}
                </ul>
            </div>
           </div>

           <Outlet context={ projects }/>
           
        </main>
    )
}