import Header from "../components/Header.jsx"
import Introduction from "../components/Introduction.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import FamiliarTools from "../components/Familiartools.jsx"
import ReactivePlate from "../components/ReactivePlate.jsx"

import { useRef, useState, useEffect } from "react"

function Home() {
  const [mousePos, setMousePos] = useState([0, 0])
  const ref = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const plateMargin = 3
  const plateSize = (dimensions.width / 25) - plateMargin * 2
  const cols = Math.ceil(dimensions.width / (plateSize + plateMargin))
  const rows = Math.ceil(500 / (plateSize + plateMargin))
  const plateCount = cols * rows

  function handleMovement(event) {
    setMousePos([event.clientX, event.clientY])
  }

  useEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver(([entry]) => {
      setDimensions({ width: entry.contentRect.width, height: entry.contentRect.height })
    })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Background />
      <div className="reactive-bg-container" ref={ref} >
        {Array.from({ length: plateCount }, (_, i) =>
          <ReactivePlate
            key={i}
            height={`${plateSize}px`}
            width={`${plateSize}px`}
            margin={`${plateMargin}px`}
            mousePos={mousePos}
            backgroundColor="var(--color-header)"
            reactiveMult={5}
            dimensions={dimensions}
          />
        )}
      </div>
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