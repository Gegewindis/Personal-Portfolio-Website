import Card from "./Card.jsx"
import malicusImage from "../assets/images/malicus_project.png"
import simsimImage from "../assets/images/simsim_project.png"
import flodfillImage from "../assets/images/floodfill_project.png"
import editorImage from "../assets/images/editor_project.png"
import infinitelImage from "../assets/images/infinite_loldle_project.png"
import velodataImage from "../assets/images/velodata_project.png"


function Projects() {

    const info = [
        {
            title: "VeloData",
            text: "A tool I made which lets you transfer up to +256TB encrypted files on the same network with the help using TCP and the QT framework.",
            image: velodataImage,
            _url: "/Personal-Portfolio-Website/velodata_project",
        },
        {
            title: "Infinite Loldle",
            text: "A small website I created with a friend. It is very much like the popular game 'Loldle', the difference being that this one is infinite!",
            image: infinitelImage,
            _url: "/Personal-Portfolio-Website/infinite_loldle_project",
        },
        {
            title: "Pygame Level Editor",
            text: "A well fledged tool I worked on in pygame. This tool helps developers when creating game maps using different assets and tilesets. I learned how to use git, notion and more!",
            image: editorImage,
            _url: "/Personal-Portfolio-Website/editor_project",
        },
        {
            title: "FloodFill",
            text: "A project I worked on for one of my starting programming courses. This game is built with python using the library pygame!",
            image: flodfillImage,
            _url: "/Personal-Portfolio-Website/floodfill_project",
        },
        {
            title: "SimSim",
            text: "A project I worked on for another one of my programming courses. This simulation is built with python. My first project where I used object oriented programming.",
            image: simsimImage,
            _url: "/Personal-Portfolio-Website/floodfill_project",
        },
        {
            title: "Malicus",
            text: "A project of a lyrics website that I made using only HTML and CSS! This was my first try at making a website.",
            image: malicusImage,
            _url: "/Personal-Portfolio-Website/malicus_project",
        }]



    return (
        <div className="Projects-container">
            <div className="content-title" id="projects">
                <h1>Personal Projects</h1>
            </div>
            <div className="personal-projects-container">
                {info.map((project, index) => (
                    <Card
                        key={index}
                        toLink={project._url}
                        imageSrc={project.image}
                        titleText={project.title}
                        titleFontSize="35px"
                        paragraphText={project.text}
                        paragraphFontFamily="var(--font-normal)"
                        paragraphFontSize="25px"
                        backgroundColor="var(--color-black-background)"
                        marginLeft="100px"
                        marginRight="100px"
                        marginBottom="100px"
                        marginTop={index % 2 == 0 ? "100px" : "300px"}
                        lineColor="var(--color-text)"
                        width="550px"
                        height="700px"
                        lineOn={false}
                        titleMargin="5px"
                        titleMarginLeft="0px"
                        imageHeight="300px"
                        cursor="pointer"
                        imageOn={true}
                        transform="scale(1.1)"
                    >
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Projects