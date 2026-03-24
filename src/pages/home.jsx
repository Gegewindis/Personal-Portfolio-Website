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
      <Header
        backgroundColor="var(--color-grey-dark-background)"
        menus={[
          { to: "/Personal-Portfolio-Website/#about-me", text: "About Me" },
          { to: "/Personal-Portfolio-Website/#projects", text: "Projects" }
        ]} />

      <PlatesContainer
        containerHeight="900px"
        containerYOffset="75px"
        plateWidth="77px"
        plateHeight="77px"
        plateColor="var(--color-black-background)"
        plateBorderColor="var(--color-wine-red)"
        plateBorderWidth="3px"
        plateBorderRadius="10px"
      />

      <Introduction ref={mouseRef} />

      {/* <Background /> */}
      {/* <PlatesContainer
        mouseRef={mouseRef}
        containerHeight="500px"
        containerYOffset="63px"
        plateColor="var(--color-header)"
        plateWidth="75px"
        plateHeight="75spx"
        reactiveMult={5}
        plateBorderRadius="0px"
        plateBorderColor="hsl(300, 50%, 10%)"
        plateBorderWidth="3px"
      /> */}

      {/* <div ref={mouseRef}>
        
        <FamiliarTools />
      </div> */}
      {/* <AboutMe />
      <Projects />
      <Footer /> */}
    </>
  );
}

export default Home