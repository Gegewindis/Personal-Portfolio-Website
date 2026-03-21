import Header from "../components/Header.jsx"
import Introduction from "../components/Introduction.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import FamiliarTools from "../components/Familiartools.jsx"

import ReactivePlate from "../components/ReactivePlate.jsx"

function Home() {
  return (
    <>

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