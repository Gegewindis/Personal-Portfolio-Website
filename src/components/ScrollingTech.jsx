function ScrollingTech() {
    const techs = [
        ["devicon-python-plain", "Python"],
        ["devicon-react-original", "React"],
        ["devicon-qt-original", "Qt"],
        ["devicon-azuresqldatabase-plain", "MySQL"],
        ["devicon-c-original", "C"],
        ["devicon-javascript-plain", "JavaSript"]
    ]
    const boxLen = 350

    const row = []
    for (let i = 0; i < Math.ceil(window.innerWidth/boxLen) * 2; i++) {
        row.push(techs[i % techs.length])
    }



    return (
        <div style={{ overflow: "hidden" }}>
            <div className="tech-scroll-container">
                {row.map((tech, index) =>
                    <div key={index} className="tech-scroll-item">
                        <i className={tech[0]}></i>
                        <h1>{tech[1]}</h1>

                    </div>
                )}
            </div>
        </div>
    );
}

export default ScrollingTech