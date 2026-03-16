import Header from "../components/Header.jsx"
import Gallery from "../components/Gallery.jsx"

function VeloData() {

  const images = import.meta.glob(
    '/src/assets/images/velodata_images/*.png',
    { eager: true, import: 'default' }
  );

  const imageArray = Object.values(images);

  return(
    <>
        <Header/>
        <div className="project-text">
          <div className="project-text-header-container">
            <a href="https://github.com/Gegewindis/VeloData" target="_blank"><h1>VeloData</h1></a>
          </div>
            <p>
                Started off by getting acquainted with the <strong>PySide6</strong> designer tool, since 
                it was my very first time using it. I designed a <strong>simple and minimalistic </strong>
                design for the app and shortly afterwards started programming. I hooked up 
                the buttons and decided that the transferred that should be encrypted. 
            </p>
            <br />
            <p>
                I had some challenges with the <strong>QT framework</strong>. The implementation of different 
                <strong> threads</strong> for sending data and receiving data were a bit tricky. I quickly learned that 
                signals existed which let me safely communicate between threads and the UI. I also 
                implemented a custom label with a drag and drop event that can receive files. 
            </p>
            <br />
            <p>
                <strong>AES encryption</strong> was also a part that I wanted to implement. It was interesting to
                learn more about encryption since it was my first project where I implemented it.
            </p>
            <br />
            <p>
                I used <strong>TCP</strong> connection to transfer data between machines. I created different headers
                with the filename and file size, which is read by the receiver, so it knows how big
                different files are.
            </p>
            <br />
            <p>
                Overall it was a interesting project where I learned much about TCP, data encryption,
                transferring data, designing the application and the QT framework!
            </p>
            <br />
            <p>
                You can find this project along with my other projects on my GitHub <a href="https://github.com/Gegewindis/VeloData" target="_blank">here</a>.
            </p>
            
        </div>
        <Gallery images={imageArray}/>
    </>
  );
}

export default VeloData