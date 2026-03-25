import Header from "../components/Header.jsx"
import Gallery from "../components/Gallery.jsx"

function InfiniteLoldle() {

    const images = import.meta.glob(
        '/src/assets/images/infinite_loldle_images/*.png',
        { eager: true, import: 'default' }
    );

    const imageArray = Object.values(images);

    return (
        <>
            <Header />
            <div className="project-text">
                <div className="project-text-header-container">
                    <a href="https://github.com/Gegewindis/Infinite-Loldle-Website/" target="_blank"><h1>Infinite Loldle</h1></a>
                </div>
                <h2>The website</h2>
                <p>
                    Started off by first designing the whole system. Figuring out all pages
                    that I was supposed to create for the user to play <strong>gamemodes, authenticate
                        themselves and view a leaderboard</strong>. I chose some base colours for the game
                    and started mapping out the URLs for the different pages. I then started to
                    make the components necessary such as the guess entry, and the header. I implemented the
                    gamemodes, then the user authentication and lastly the leaderboard. After the design was
                    implemented, I had to go back and implement the <strong>API calls</strong> which was not that difficult since
                    I programmed with them in mind from the get-go.
                </p>
                <br />
                <h2>The backend</h2>
                <p>
                    Started off by creating the <strong>ER-diagram</strong> which afterwards was turned into <strong>schema</strong>.
                    The <strong>data</strong> was gathered from league-wikis. The server side was created with python
                    framework <strong>Django</strong>, and the queries were manually created by us. <strong>A tool</strong> was also created
                    which can help us interact with the database in an easier way.
                </p>
                <br />
                <p>
                    Currently only the website is public on github since I want to eventually deploy
                    the website so my friends will be able to play. The website repository can be found <a href="https://github.com/Gegewindis/Infinite-Loldle-Website/" target="_blank">here</a>
                </p>
            </div>
            <Gallery images={imageArray} />
        </>
    );
}

export default InfiniteLoldle