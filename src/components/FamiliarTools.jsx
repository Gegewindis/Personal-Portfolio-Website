
function FamiliarTools() {
    const techs = [
        ["devicon-python-plain", "Python"],
        ["devicon-react-original", "React"],
        ["devicon-qt-original", "Qt"],
        ["devicon-azuresqldatabase-plain", "MySQL"],
        ["devicon-c-original", "C"],
        ["devicon-javascript-plain", "JavaSript"]
    ]


    return (
        <div style={{ overflow: "hidden" }}>
            <div className="tech-scroll-container">
                {techs.map((tech, index) =>
                    <div key={index} className="tech-scroll-item">
                        <i className={tech[0]}></i>
                        <h1>{tech[1]}</h1>

                    </div>
                )}
                {techs.map((tech, index) =>
                    <div key={index} className="tech-scroll-item">
                        <i className={tech[0]}></i>
                        <h1>{tech[1]}</h1>

                    </div>
                )}

            </div>
        </div>
    );
}

export default FamiliarTools