import { sobre } from '../data/portfolio'

export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="wrap sobre-grid">
        <div>
          <p className="eyebrow">Sobre</p>
          <h2 className="title">
            Um pouco <em>sobre mim</em>
          </h2>
        </div>
        <div>
          <div className="sobre-texto">
            {sobre.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="fatos">
            {sobre.fatos.map((f) => (
              <div key={f.rotulo} className="fato">
                <dt>{f.rotulo}</dt>
                <dd>{f.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
