import Nav from './components/Nav'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Achievements />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
