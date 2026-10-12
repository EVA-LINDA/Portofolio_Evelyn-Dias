import { perfil, contato, servicos } from '../data/portfolio'
import { ArrowUpRight } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <p className="hello">Olá, eu sou</p>
          <p className="eyebrow">{perfil.cargo}</p>
          <h1>{perfil.nome}</h1>
          <p className="hero-text">{perfil.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-red" href="#trabalhos">
              Ver projetos <ArrowUpRight />
            </a>
            <a className="btn btn-line" href="#contato">
              Vamos conversar
            </a>
            {contato.curriculoUrl && (
              <a className="btn btn-line" href={contato.curriculoUrl} download>
                Baixar currículo
              </a>
            )}
          </div>
        </div>

        <div className="hero-photo">
          <img src="/evelyn-dias.png" alt={`Foto de ${perfil.nome}`} width="408" height="612" />
          {perfil.disponivel && (
            <span className="badge">
              <i aria-hidden="true" /> Disponível
            </span>
          )}
        </div>

        <aside className="hero-right">
          <p className="eyebrow">O que eu faço</p>
          <h2 className="hero-h2">
            Design, código e <em>qualidade digital.</em>
          </h2>
          <ul className="servicos">
            {servicos.map((s) => (
              <li key={s}>
                <a href="#trabalhos">
                  <span>{s}</span>
                  <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
