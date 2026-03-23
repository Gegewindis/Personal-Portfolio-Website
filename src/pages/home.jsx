import Header from "../components/Header.jsx"
import Introduction from "../components/Introduction.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import FamiliarTools from "../components/Familiartools.jsx"
import PlatesContainer from "../components/ReactivePlatesContainer.jsx"

import { useState } from "react"

function Home() {
  const [mousePos, setMousePos] = useState([0, 0])

  function handleMovement(event) {
    setMousePos([event.clientX, event.clientY])
  }

  return (
    <>
      <Header />
      <Background />
      <PlatesContainer
        mousePos={mousePos}
        containerHeight="500px"
        containerYOffset="63px"
        plateColor="var(--color-header)"
        reactiveMult={5}
        plateBorderRadius="10px"
        plateBorderColor="hsl(300, 50%, 15%)"
        plateBorderWidth="3px"
        containerXOffset="30px"
      />
      <div onMouseMove={handleMovement} onMouseLeave={() => { setMousePos([0, 0]) }}>
        <Introduction />
        <FamiliarTools />
      </div>

      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default Home