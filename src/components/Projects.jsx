import Card from "./Card.jsx"
import malicusImage from "../assets/images/malicus_project.png"
import simsimImage from "../assets/images/simsim_project.png"
import flodfillImage from "../assets/images/floodfill_project.png"
import editorImage from "../assets/images/editor_project.png"
import infinitelImage from "../assets/images/infinite_loldle_project.png"
import velodataImage from "../assets/images/velodata_project.png"


function Projects() {
    const veloDataInfo = {
        title: "VeloData",
        text: "A tool I made which lets you transfer up to +256TB encrypted files on the same network with the help using TCP and the QT framework.",
        image: velodataImage,
        _url: "/Personal-Portfolio-Website/velodata_project",
    }

    const infiniteLoldleInfo = {
        title: "Infinite Loldle",
        text: "A small website I created with a friend. It is very much like the popular game 'Loldle', the difference being that this one is infinite!",
        image: infinitelImage,
        _url: "/Personal-Portfolio-Website/infinite_loldle_project",
    }

    const editorInfo = {
        title: "Pygame Level Editor",
        text: "A well fledged tool I worked on in pygame. This tool helps developers when creating game maps using different assets and tilesets. I learned how to use git, notion and more!",
        image: editorImage,
        _url: "/Personal-Portfolio-Website/editor_project",
    }

    const floodfillInfo = {
        title: "FloodFill",
        text: "A project I worked on for one of my starting programming courses. This game is built with python using the library pygame!",
        image: flodfillImage,
        _url: "/Personal-Portfolio-Website/floodfill_project",
    }

    const simsimInfo = {
        title: "SimSim",
        text: "A project I worked on for another one of my programming courses. This simulation is built with python. My first project where I used object oriented programming.",
        image: simsimImage,
        _url: "/Personal-Portfolio-Website/floodfill_project",
    }

    const malicusInfo = {
        title: "Malicus",
        text: "A project of a lyrics website that I made using only HTML and CSS! This was my first try at making a website.",
        image: malicusImage,
        _url: "/Personal-Portfolio-Website/malicus_project",
    }

    const projectsInfo = [veloDataInfo, infiniteLoldleInfo, editorInfo, floodfillInfo, simsimInfo, malicusInfo]

    return(
        <div className="Projects-container">
            <div className="projects-header" id="projects">
                <h1>Personal Projects</h1>
            </div>
            <div className="personal-projects-container">
            {projectsInfo.map((project, index) => (
                <Card
                key={index}
                toLink={project._url}
                imageSrc={project.image}
                titleText={project.title}
                paragraphText={project.text}
                backgroundColor="var(--color-header)"
                margin="30px"
                lineColor="var(--color-text)"
                width="350px"
                height="425px"
                lineOn={false}
                titleMargin="5px"
                titleMarginLeft="0px"
                imageHeight="200px"
                cursor="pointer"
                imageOn={true}></Card>
            ))}
            </div>
        </div> 
    );
}

export default Projects