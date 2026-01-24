import AboutMeCard from "./AboutMeCard.jsx"

function AboutMe() {
    return(
        <div className="about-me-container" id="about-me">
            <div className="about-me-header">
                    <h1>About Me</h1>
            </div>

            <div className="about-me-content">
                <AboutMeCard icon="fa-solid fa-user fa-3x" title="Who am I?" 
                    text="                                          
                        My name is George and I
                        am from Sweden. I am currently
                        studying computer science at Blekinges
                        Tekniska Högskola (BTH) in Karlskrona
                        Sweden, where I will get my masters in
                        AI & Machine learning."/>

                <AboutMeCard icon="fa-brands fa-python fa-3x" title="My expertise" 
                    text="                                          
                        I have a strong interest in programming,
                        with a primary focus on backend development.
                        I specialize in Python but am also familiar with
                        several other languages. Additionally,
                        I have personal experience with frontend development.
                        I have been programming for approximately 4 years."/>

                <AboutMeCard icon="fa-brands fa-pagelines fa-3x" title="Free time" 
                    text="                                          
                        In my free time you can find me either playing videogames,
                        programing different side-projects or
                        hanging out with my friends and family."/>

            </div>
        </div>
    );
}

export default AboutMe