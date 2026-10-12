import { pilha } from '../data/portfolio'

export default function Habilidades() {
  return (
    <section id="habilidades" className="section section-alt">
      <div className="wrap pilha-wide">
        <div className="pilha-head">
          <p className="eyebrow">Tecnologias que domino</p>
          <h2 className="title">
            Minha <em>pilha.</em>
          </h2>
        </div>

        <ul className="pilha-grid">
          {pilha.map((t) => (
            <li key={t.nome} className="pilha-card">
              <span className="pilha-sigla" aria-hidden="true">
                {t.sigla}
              </span>
              <h3>{t.nome}</h3>
              <p>{t.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
