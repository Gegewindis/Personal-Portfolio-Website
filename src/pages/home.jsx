import Header from "../components/Header.jsx"
import Introduction from "../components/Introduction.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import FamiliarTools from "../components/Familiartools.jsx"
import ReactivePlate from "../components/ReactivePlate.jsx"

import { useRef, useState } from "react"




function Home() {
  // initialiaze outside area
  const [mousePos, setMousePos] = useState([0, 0])
  const ref = useRef(null)

  const plateMargin = 3
  const plateSize = (window.innerWidth / 25) - plateMargin * 2
  const cols = Math.floor(window.innerWidth / (plateSize + plateMargin))
  const rows = Math.floor(400 / (plateSize + plateMargin)) + 2
  const plateCount = cols * rows

  console.log((window.innerWidth - (plateMargin * 4)))

  function handleMovement(event) {
    const rect = ref.current.getBoundingClientRect()
    setMousePos([event.clientX - rect.left, event.clientY - rect.top])
    //console.log(mousePos)
  }

  return (
    <>
      <div className="reactive-bg-container" ref={ref} onMouseMove={handleMovement}>
        {Array.from({ length: plateCount }, (_, i) =>
          <ReactivePlate
            key={i}
            height={`${plateSize}px`}
            width={`${plateSize}px`}
            margin={`${plateMargin}px`}
            relateiveMousePos={mousePos}
            backgroundColor="var(--color-header)"
            reactiveMult={5}
          />
        )}
      </div>
      <Background />
      <Header />
      <Introduction />
      <FamiliarTools />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default Home