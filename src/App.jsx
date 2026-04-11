import './index.css'
import Navbar        from './components/Navbar'
import ParticleCanvas from './components/Particlecanvas'
import Cursor        from './components/Cursor'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Experience    from './components/Experience'
import Projects      from './components/Projects'
import Achievements  from './components/Achievements'
import Education     from './components/Education'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

function App() {
    return (
        <>
            <Navbar />
            <ParticleCanvas />
            <Cursor />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Education />
            <Contact />
            <Footer />
        </>
    )
}

export default App