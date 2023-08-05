import { Link } from 'react-router-dom';
import { useOutletContext, useParams } from 'react-router-dom';

import '../styles/project.scss'

export default function Project () {
    const { id } = useParams();
    const projects = useOutletContext();
    const project = getProjectById(id);

    function getProjectById(id) {
        let tempProject = null;

        for (let i = 0; i < projects.length; i++) {
            // Assuming the objects in the array have a key named 'path'
            if (projects[i].path === id) {
                tempProject = projects[i];
            }
        }
        return tempProject;
    }

    if (projects.length > 0) {
        // Conditional rendering based on useOutletContext having loaded
        if (project) {
            // Render your HTML for a projects path match
            return (
                <div className="project">
                   <div>
                        <h1>{ project.title }</h1>
                        <div className="x-close">
                            <span className="stroke"></span>
                            <span className="stroke"></span>
                        </div>
                    </div>
                    <div>
                        { project.description }
                    </div>
                    <div>
                        <h4>
                            Techs
                        </h4>
                        <ul>
                        {project.techs.map((tech, index) => (
                            <li key={ tech + index }>
                                <p>{ tech }</p>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h4>
                            Designer
                        </h4>
                        <p>{ project.designer.name }</p>
                    </div>
                    <div>
                        <h4>
                            Link
                        </h4>
                        <Link to={ project.url.path }>
                            <p>{ project.url.name }</p>
                        </Link>
                    </div>
                </div>
            );
        } else {
            // Render a 404 page if there is no match to projects path
            return (
                <div>
                    <h1>404 Page Not Found</h1>
                </div>
            );
        }
    } else {
        // Wait for useOutletContext to load
        return (
            <div>
                <h1>Loading . . .</h1>
            </div>
        );
    }
}