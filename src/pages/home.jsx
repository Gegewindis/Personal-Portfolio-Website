import Header from "../components/Header.jsx"
import Introduction from "../components/Introduction.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Footer from "../components/Footer.jsx"
import LatestProjects from "../components/LatestProjects.jsx"
import ScrollingTech from "../components/ScrollingTech.jsx"
import PlatesContainer from "../components/ReactivePlatesContainer.jsx"

import { useRef } from "react"

function Home() {
  const mouseRef = useRef(null)

  return (
    <>
      <Header
        menuContainerWidth="var(--header-menu-container)"
        logoContainerWidth="var(--header-logo-container)"
        backgroundColor="var(--color-grey-dark-background)"
        menus={[
          { to: "/Personal-Portfolio-Website/#about-me", text: "About Me", offset: 80 },
          { to: "/Personal-Portfolio-Website/#latest", text: "Projects", offset: 80 }
        ]} />

      <div ref={mouseRef} ><Introduction /></div>
      <PlatesContainer
        mouseRef={mouseRef}
        containerHeight="800px"
        containerYOffset="78px"
        plateWidth="77px"
        plateHeight="77px"
        plateColor="var(--color-black-background)"
        plateBorderColor="var(--color-grey-lighter) "// hsl(345, 55%, 8%)
        plateBorderWidth="2px"
        plateBorderRadius="10px"
        reactiveMult={4}
      />
      <ScrollingTech />
      <AboutMe />
      <LatestProjects />
      <Projects />
      <Footer />
    </>
  );
}

export default Home