import { Link } from "react-router-dom"

function ProjectsCard (props) {
    return(
        <Link to={props._url}>
            <div className="project">
                    <div className="project-img-container">
                        <img src={props.image} alt=""/>
                    </div>
                    <div className="project-content">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </div>
            </div>
        </Link>
    );
}

export default ProjectsCard