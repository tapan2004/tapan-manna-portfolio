import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Experience   from './components/Experience'
import Projects     from './components/Projects'
import Achievements from './components/Achievements'
import Education    from './components/Education'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

function App() {
    return (
        <div className="site-wrapper">
            <Navbar />
            <main id="main-content">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Achievements />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
