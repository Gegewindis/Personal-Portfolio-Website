import Header from "../components/Header.jsx"
import Gallery from "../components/Gallery.jsx"

function Melicus() {

  const images = import.meta.glob(
    '/src/assets/images/melicus_images/*.png',
    { eager: true, import: 'default' }
  );

  const imageArray = Object.values(images);

  return(
    <>
        <Header/>
        <div className="project-text">
          <div className="project-text-header-container">
            <a href="https://github.com/Gegewindis/Melicus" target="_blank"><h1>Melicus</h1></a>
          </div>
            <p>
              This was my very <strong>first website</strong>, created using only <strong>HTML</strong> and <strong>CSS</strong>.
              I wanted to get into web development since my goal is to become a
              full-stack developer, and I had to start somewhere.
            </p>
            <br />
            <p>
              I really enjoy creating and optimizing systems, so I challenged
              myself to build something a bit more creative. It’s not the most
              complicated website, but it was an important first stepping stone
              in my journey.
            </p>
            <br />
            <p>
              If you'd like to check it out, the source code is available on my
              GitHub, which you can find <a href="https://github.com/Gegewindis/Melicus" target="_blank">here</a>.
            </p>
        </div>
        <Gallery images={imageArray}/>
    </>
  );
}

export default Melicus