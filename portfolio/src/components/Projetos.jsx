import { projetos } from '../data/portfolio'
import TaNaHoraPhone from './TaNaHoraPhone'
import { ArrowUpRight } from './Icons'

function Links({ links }) {
  return (
    <div className="projeto-links">
      {links
        .filter((l) => l.url)
        .map((l) => (
          <a key={l.url} className="btn btn-line" href={l.url} target="_blank" rel="noreferrer">
            {l.rotulo} <ArrowUpRight />
          </a>
        ))}
    </div>
  )
}

export default function Projetos() {
  const destaque = projetos.find((p) => p.destaque)
  const outros = projetos.filter((p) => !p.destaque)

  return (
    <section id="trabalhos" className="section">
      <div className="wrap">
        <p className="eyebrow">Trabalhos</p>
        <h2 className="title">
          Projetos <em>selecionados</em>
        </h2>

        {destaque && (
          <article className="projeto-destaque">
            <div>
              <p className="selo">{destaque.selo}</p>
              <h3>{destaque.nome}</h3>
              <p className="projeto-desc">{destaque.descricao}</p>
              {destaque.stack && <p className="projeto-stack">{destaque.stack}</p>}
              <Links links={destaque.links} />
            </div>
            <div className="projeto-visual">
              <TaNaHoraPhone />
            </div>
          </article>
        )}

        <ul className="projetos-outros">
          {outros.map((p) => (
            <li key={p.id}>
              <div>
                <h3>{p.nome}</h3>
                <p className="projeto-desc">{p.descricao}</p>
              </div>
              <Links links={p.links} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
