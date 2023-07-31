import { useOutletContext, useParams } from 'react-router-dom';

export default function Project () {
    const { id } = useParams();
    const projects = useOutletContext();

    const pageExist = checkDoesPathExist();

    function checkDoesPathExist() {
        // if returning json of all projects successfully
        let doesPathExist = false;

        for (let i = 0; i < projects.length; i++) {
            // Assuming the objects in the array have a key named 'path'
            if (projects[i].path === id) {

                doesPathExist = true;
            }
        }
        return doesPathExist;
    }

    // const project = {
    //     title: "Auxly Website",
    //     description: "Auxly is a group of cannabis enthusiasts, entrepreneurs, CPG professionals, researchers and scientists with a shared belief in quality, executional excellence, continual innovation and building authentic connections with consumers. The objective was to give an overview of their inhouse brands, while providing a place their investor relations team a platform to easily update the latest PR documents and accouncements for the public.",
    //     year: "2020",
    //     designer: "Ian Rapsey",
    //     techs: [
    //         "HTML/CSS/JavaScript",
    //         "WordPress",
    //         "PHP",
    //         "AWS EC2",
    //         "AWS CodeDeploy"
    //     ],
    //     url: {
    //         name: "auxly.com",
    //         address: "https://auxly.com/"
    //     }
        
    // }
    
    if (projects.length > 0) {
        // Conditional rendering based on useOutletContext having loaded
        if (pageExist) {
            // Render your HTML for a projects path match
            return (
            <div>
                <h1>{ id }</h1>
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