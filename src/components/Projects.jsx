import ProjectsCard from "./ProjectsCard.jsx"
import malicusImage from "../assets/images/malicus_project.png"
import simsimImage from "../assets/images/simsim_project.png"
import flodfillImage from "../assets/images/floodfill_project.png"
import editorImage from "../assets/images/editor_project.png"

function Projects() {
    return(
        <div className="Projects-container">
            <div className="projects-header" id="projects">
                <h1>Personal Projects</h1>
            </div>
            <div className="personal-projects-container">
            <ProjectsCard image={malicusImage} title="Malicus" _url="/Personal-Portfolio-Website/malicus_project"
                text="A project of a lyrics website
                    that I made using only HTML and CSS!
                    This was my first try at making a
                    website."/>

            <ProjectsCard image={simsimImage} title="SimSim" _url="/Personal-Portfolio-Website/simsim_project"
                text="A project I worked on for another 
                    one of my programming courses. 
                    This simulation is built with python. My
                    first project where I used object oriented 
                    programming."/>

            <ProjectsCard image={flodfillImage} title="FloodFill" _url="/Personal-Portfolio-Website/floodfill_project"
                text="A project I worked on for one 
                    of my starting programming courses. 
                    This game is built with python using 
                    the library pygame!"/>

            <ProjectsCard image={editorImage} title="Pygame Level Editor" _url="/Personal-Portfolio-Website/editor_project"
                text="A well fledged tool I worked
                on in pygame. This tool helps developers when
                creating game maps using different assets
                and tilesets. I learned how to use git, notion and more!"/>
            </div>
        </div> 
    );
}

export default Projects