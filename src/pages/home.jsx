import Header from "../components/Header.jsx"
import Introduction from "../components/Introduction.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import FamiliarTools from "../components/Familiartools.jsx"
import PlatesContainer from "../components/ReactivePlatesContainer.jsx"

import { useRef } from "react"

function Home() {
  const mouseRef = useRef(null)

  return (
    <>
      <Header />
      <Background />
      <PlatesContainer
        mouseRef={mouseRef}
        containerHeight="500px"
        containerYOffset="63px"
        plateColor="var(--color-header)"
        plateWidth="100x"
        plateHeight="100px"
        reactiveMult={5}
        plateBorderRadius="10px"
        plateBorderColor="hsl(300, 50%, 10%)"
        plateBorderWidth="3px"
      // containerPosition="relative"
      // containerZIndex="0"
      />
      <div ref={mouseRef}>
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