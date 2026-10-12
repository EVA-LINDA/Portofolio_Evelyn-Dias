import { useEffect, useState } from 'react'
import { perfil, contato } from '../data/portfolio'
import { CloseIcon, MenuIcon } from './Icons'

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'trabalhos', label: 'Trabalhos' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'contato', label: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState('inicio')

  // Destaca no menu a seção que está na tela
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setAtivo(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Fecha o menu com a tecla Esc
  useEffect(() => {
    if (!aberto) return
    const onKey = (e) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberto])

  return (
    <>
      <header className="site-header">
        <div className="bar">
          <a className="brand" href="#inicio" onClick={() => setAberto(false)}>
            {perfil.nome}
          </a>
          <nav className="nav-pill" aria-label="Principal">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} aria-current={ativo === l.id ? 'true' : undefined}>
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="menu-btn"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            aria-controls="menu-overlay"
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <div id="menu-overlay" className={`overlay${aberto ? ' is-open' : ''}`}>
        <nav aria-label="Menu completo">
          {links.map((l) => (
            <a key={l.id} className="overlay-link" href={`#${l.id}`} onClick={() => setAberto(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <ul className="overlay-contato">
          <li><a href={`mailto:${contato.email}`}>{contato.email}</a></li>
          <li><a href={contato.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={contato.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </>
  )
}
