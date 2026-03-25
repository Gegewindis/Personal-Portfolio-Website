import Elipse from "./Elipse.jsx"
import infiniteLoldleImg from "../assets/images/infinite_loldle_project.png"
import veloDataImg from "../assets/images/velodata_project.png"

function LatestProjects() {
    const latest = {
        image: infiniteLoldleImg,
        title: "Infinite Loldle",
    }

    const current = {
        image: veloDataImg,
        title: "VeloData",
    }

    return (
        <div className="latest-current-container">
            <Elipse
                backgroundColor="var(--color-wine-red)"
                width="500px"
                height="500px"
                top="350px"
                left="-150px"
            />

            <Elipse
                backgroundColor="var(--color-wine-red)"
                width="220px"
                height="220px"
                top="100px"
                left="700px"
            />

            <Elipse
                backgroundColor="var(--color-wine-red)"
                width="650px"
                height="650px"
                top="-50px"
                left="1500px"
            />

            <div className="latest-current-sub-container" id="latest">
                <div className="content-title">
                    <h1>Latest Project</h1>
                </div>

                <div className="latest-current-img-container">
                    <div className="latest-current-img-overlay"> <h2>{latest.title}</h2> </div>
                    <img src={latest.image} alt={latest.title} />
                </div>

            </div>
            <div className="latest-current-sub-container" id="current">
                <div className="content-title-reversed">
                    <h1>Current Project</h1>
                </div>
                <div className="latest-current-img-container">
                    <div className="latest-current-img-overlay" style={{ top: "0" }}> <h2>{current.title}</h2> </div>
                    <img src={current.image} alt={current.title} />
                </div>

            </div>
        </div>
    )
}

export default LatestProjects