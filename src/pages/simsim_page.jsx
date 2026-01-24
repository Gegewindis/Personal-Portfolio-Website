import Header from "../components/Header.jsx"
import Gallery from "../components/Gallery.jsx"

function SimSim() {

  const images = import.meta.glob(
    '/src/assets/images/simsim_images/*.png',
    { eager: true, import: 'default' }
  );

  const imageArray = Object.values(images);

  return(
    <>
        <Header/>
        <div className="project-text">
          <div className="project-text-header-container">
            <a href=""><h1>SimSim</h1></a>
          </div>
            <p>
              This project was an assignment from school where I had to learn to
              implement <strong>Object Oriented Programming</strong>. We had different stations, such
              as fields, barracks, farms, cafeterias, houses and factories. We were
              supposed to simulate a group of people with limited supply of resources
              and see how many days (turns) they would survive before being wiped out.
            </p>
            <br />
            <p>
              We were also allowed to choose from different fields to dive deeper on.
              As shown in the image below, I tried using a pre-existing <strong>GUI</strong> which I configured
              to my simulation. I also used some <strong>multithreading</strong> and some <strong>inheritance </strong>
              as well. <strong>Overall, a fun and very interesting project</strong>.
            </p>
        </div>
        <Gallery images={imageArray}/>
    </>
  );
}

export default SimSim