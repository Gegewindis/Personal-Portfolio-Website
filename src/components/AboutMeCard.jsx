
function AboutMeCard(props) {
    return(
        <div className="about-me">
            <i className={props.icon}></i>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default AboutMeCard