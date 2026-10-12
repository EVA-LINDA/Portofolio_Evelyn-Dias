import { experiencias, formacao } from '../data/portfolio'

function Linha({ titulo, itens }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <ol className="timeline">
        {itens.map((i) => (
          <li key={i.periodo + i.titulo}>
            <time>{i.periodo}</time>
            <h4>{i.titulo}</h4>
            <p>{i.local}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="section section-alt">
      <div className="wrap">
        <p className="eyebrow">Trajetória</p>
        <h2 className="title">
          Por onde <em>passei</em>
        </h2>
        <div className="trajetoria-grid">
          <Linha titulo="Experiência" itens={experiencias} />
          <Linha titulo="Formação" itens={formacao} />
        </div>
      </div>
    </section>
  )
}
