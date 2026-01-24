import Header from "../components/Header.jsx"
import Gallery from "../components/Gallery.jsx"

function SimSim() {

  const images = import.meta.glob(
    '/src/assets/images/floodfill_images/*.png',
    { eager: true, import: 'default' }
  );

  const imageArray = Object.values(images);

  return(
    <>
        <Header/>
        <div className="project-text">
          <div className="project-text-header-container">
            <a href="https://github.com/Gegewindis/FloodFIll" target="_blank"><h1>FloodFill</h1></a>
          </div>
            <p>
              My very first school assignment turned into something much bigger than
              I expected. I was supposed to make a simple old-school <strong>floodfill</strong> game
              using a graphical interface, but I enjoyed it so much that I ended up
              creating a full game! :)
            </p>
            <br />
            <p>
              I added <strong>multiple settings, themes, and video options</strong>, along with <strong> game
              presets </strong> thatsave <strong>high scores</strong>, and even an option to create your own <strong>custom
              preset</strong>. I included <strong>credits</strong> to give a shoutout to friends who inspired me,
              and added <strong>achievements with fun pop-ups and helpful tips for reaching them.</strong>
            </p>
            <br />
            <p>
              On the technical side, the game is built with <strong>Pygame</strong>, a Python library that
              gives you the basic building blocks for a game, like rectangles and
              collision <strong>pixel-art</strong> detection. Game data is stored in <strong>JSON files</strong>, the 
              graphics are my own creations, and I used a compiler called <strong>PyInstaller</strong> to make
              a version anyone can download and play. I lastly had to use a floodfill algorithm to create the
              game, which is baes on a <strong>Depth First Search</strong> algorithm.
            </p>
            <br />
            <p>
              Creating this game was a blast, and I learned a bunch along the way. If you want
              to try it, download it <a href="https://drive.google.com/uc?export=download&id=1kQkYxePJidwR-XL46pxpRDlbmoybk14P" download target="_blank">here</a> and see if you can unlock the secret theme by unlocking
              the achievement!
            </p>
        </div>
        <Gallery images={imageArray}/>
    </>
  );
}

export default SimSim