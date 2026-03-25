import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import Elipse from "../components/Elipse.jsx";
import Gallery from "../components/Gallery.jsx"
import projects from "../data/projects.js";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const { name } = useParams();
    const project = projects[name];

    project.folderName

    const allImages = import.meta.glob('/src/assets/images/**/*', { eager: true, import: 'default' });

    const imageArray = Object.entries(allImages)
        .filter(([path]) => path.includes(`/images/${project.folderName}/`))
        .map(([, src]) => src);

    return (
        <>
            <Header
                menuContainerWidth="var(--header-menu-container)"
                logoContainerWidth="var(--header-logo-container)"
                backgroundColor="var(--color-grey-dark-background)"
                menus={[
                    { to: "/Personal-Portfolio-Website/#about-me", text: "About Me", offset: 80 },
                    { to: "/Personal-Portfolio-Website/#latest", text: "Projects", offset: 80 }
                ]} />
            <div className="project-text">
                <Elipse
                    backgroundColor="var(--color-wine-red)"
                    width="650px"
                    height="650px"
                    top="200px"
                    left="-250px"
                />

                <Elipse
                    backgroundColor="var(--color-wine-red)"
                    width="400px"
                    height="400px"
                    top="600px"
                    left="1680px"
                />

                <div className="project-text-header-container">
                    <a href={project.repoUrl} target="_blank"><h1>{project.title}</h1></a>
                </div>
                <ReactMarkdown>{project.text}</ReactMarkdown>
            </div>
            <Gallery images={imageArray} />
            <Footer />
        </>
    );
}

export default ProjectPage