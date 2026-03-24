import profilePic from "../assets/images/temp_pfp.png"

function Introduction() {

    return (
        <div className="introduction-container">

            <div className="introduction-inner-container">
                <div className="introduction-profile-picture">
                    <img src={profilePic} alt="" />
                </div>

                <div className="profile-content-container">


                    <div className="introduction-title">
                        <h1>George Adrian Bobocea</h1>
                    </div>

                    <div className="introduction-sub-title">
                        <h2>
                            AI & Machine Learning
                            Student
                        </h2>
                    </div>

                    <div className="profile-links">
                        <a href="https://github.com/Gegewindis" target="_blank">
                            <i className="devicon-github-original"></i>
                        </a>
                        <a href="https://linkedin.com/in/george-bobocea-05576a3a8" target="_blank">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction