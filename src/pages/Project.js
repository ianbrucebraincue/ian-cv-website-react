import { useOutletContext, useParams } from 'react-router-dom';

export default function Project () {
    const { id } = useParams()
    // const project = useOutletContext()
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

    return (
        <div>
            <h1>Project {id}</h1>
        </div>
    )
}