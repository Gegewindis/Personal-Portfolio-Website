import profilePic from "../assets/images/temp_pfp.png"

function Introduction() {
    return(
        <div className="introduction-container">

            <div className="introduction-info-container">
                <div className="profile-picture">
                    <img src={profilePic} alt="" />
                </div>

                <div className="profile-content-container">
                    <div className="profile-links">
                            <a href="https://github.com/Gegewindis" target="_blank">
                                <i className="fa-brands fa-github fa-2x"></i>
                            </a>
                            <i className="fa-brands fa-linkedin fa-2x"></i>
                    </div>

                    <div className="title">
                        <h1>George Adrian Bobocea</h1>
                    </div>
                    
                    <div className="sub-title">
                        <h2>
                            AI & Machine Learning
                            Engineering Student
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Introduction