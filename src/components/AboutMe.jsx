import Card from "./Card.jsx"
import wrenchIcon from "../assets/images/Wrench.svg"
import leafIcon from "../assets/images/Leaf.svg"
import personIcon from "../assets/images/Person.svg"

function AboutMe() {
    const contents = [
        {
            icon: personIcon,
            title: "Who am I?",
            text: `My name is George and I am from Sweden.I 
            am currently studying computer science at Blekinge Tekniska Hösgskola 
            (BTH) in Karlskrona, Sweden where I will be getting my masters in AI 
            and machine learning!`},
        {
            icon: wrenchIcon,
            title: "My expertise",
            text: `I have a strong interest in software, with a primary focus on 
            backend development. I specialize in Python but I am also familiar with 
            several other languages. Additionally, I have personal experience with 
            fullstack development. I have been programming for approximately 5 years.`
        },
        {
            icon: leafIcon,
            title: "Free time",
            text: `In my spare time you can find me either playing videogames, 
            programing different projects or hanging out with friends and family.`
        }
    ]

    return (
        <div className="about-me-container" id="about-me">
            <div className="content-title">
                <h1>About Me</h1>
            </div>

            <div className="about-me-content">
                {contents.map((content, index) =>
                    <Card
                        key={index}
                        imageSrc={content.icon}
                        margin="50px"
                        padding="20px"
                        width="500px"
                        height="600px"
                        imageWidth="60px"
                        imageOn={true}
                        imageHeight="60px"
                        backgroundColor="var(--color-black-background)"
                        borderRadius="0px"
                        imageMargin="20px"
                        lineOn={false}
                        titleText={content.title}
                        titleColor=""
                        titleFontFamily="var(--font-normal)"
                        titleFontSize="29px"
                        paragraphFontFamily="var(--font-normal)"
                        paragraphFontSize="23px"
                        paragraphText={content.text}
                        hover={false}
                    />
                )}

            </div>
        </div>
    );
}

export default AboutMe