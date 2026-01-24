import Header from "../components/Header.jsx"
import Gallery from "../components/Gallery.jsx"

function Editor() {

  const images = import.meta.glob(
    '/src/assets/images/editor_images/*.png',
    { eager: true, import: 'default' }
  );

  const imageArray = Object.values(images);

  return(
    <>
        <Header/>
        <div className="project-text">
          <div className="project-text-header-container">
            <a href="https://github.com/Gegewindis/Pygame-Level-Editor" target="_blank"><h1>Pygame Level Editor</h1></a>
          </div>
            <p>
                I wanted to make more complex games using Pygame, but I quickly realized that without
                proper tools, development would become painful. Because of that, I decided to create my
                own <strong>game engine</strong> for Python game development using Pygame. Like any proper game engine, a
                <strong>level editor</strong> felt like an essential part of the project.
            </p>
            <br />
            <p>
                It became clear early on that this would take much more time than anticipated, especially when the only
                tools available were <strong>basic shapes and collision detection</strong>. In the end, however, I managed to build a fairly
                solid level editor, at least by Pygame standards. I also created a <strong>README</strong> explaining how to use the tool and
                <strong> documented</strong> the more technical aspects on a <strong>Notion</strong> page dedicated to this project.
            </p>
            <br />
            <p>
                The editor supports features such as <strong>custom assets, saving and loading levels, zooming, on-grid and off-grid
                placement, a layer system, and more</strong>.
            </p>
            <br />
            <p>
                For storing map data, I used <strong>JSON files</strong>. Unlike many 2D level editors, mine does not rely on a grid-based system.
                Instead, it uses a <strong>hash map</strong>, which provides performance benefits when handling collision checks. For the save and
                load system, I used <strong>Tkinter</strong>, allowing access to the Windows file system when choosing files.
            </p>
            <br />
            <p>
                This project was a lot of fun to work on and taught me a great deal, not only about game development but also about
                how much math and vector logic goes into rendering. I also learned how to document a project properly, organize my
                code and workflow, and use Notion to make the project accessible to others. This was my first time creating documentation
                intended for users who wouldn’t need my direct help.
            </p>
            <br />
            <p>
                Throughout the development process, I also learned how to use <strong>Git and version control effectively</strong>, and used it consistently
                during the project to manage changes and track progress.
            </p>
            <br />
            <p>
                If you’d like to use the editor or explore the code, you can find it on my <a href="https://github.com/Gegewindis/Pygame-Level-Editor" target="_blank">GitHub</a>. I’ve also included a link to the Notion
                page used for <a href="https://www.notion.so/Documentation-2894f48fbfc180189475e53e0dff06f4?source=copy_link" target="_blank">documentation</a> and <a href="https://www.notion.so/Read-Me-2894f48fbfc180a2a996e223a0d76ee5?source=copy_link" target="_blank">README</a>. Feedback is greatly appreciated.
            </p>
        </div>
        <Gallery images={imageArray}/>
    </>
  );
}

export default Editor