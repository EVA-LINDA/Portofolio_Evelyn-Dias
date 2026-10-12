import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Trajetoria from './components/Trajetoria'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#sobre">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Trajetoria />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
