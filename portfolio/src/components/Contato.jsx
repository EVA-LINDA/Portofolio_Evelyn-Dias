import { contato, perfil } from '../data/portfolio'

export default function Contato() {
  // Sem backend: ao enviar, abre o aplicativo de e-mail com a mensagem pronta.
  function aoEnviar(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const assunto = `Contato pelo portfólio: ${f.get('nome')}`
    const corpo = `${f.get('mensagem')}\n\n${f.get('nome')}\n${f.get('email')}`
    window.location.href = `mailto:${contato.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`
  }

  return (
    <section id="contato" className="section">
      <div className="wrap contato-grid">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="title">
            Vamos <em>conversar?</em>
          </h2>
          <p className="contato-texto">{perfil.objetivo} Me escreva por e-mail ou chame no LinkedIn.</p>
          <ul className="contato-links">
            <li><a href={`mailto:${contato.email}`}>{contato.email}</a></li>
            <li><a href={contato.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={contato.github} target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>

        <form className="form" onSubmit={aoEnviar}>
          <label>
            Seu nome
            <input name="nome" type="text" required autoComplete="name" />
          </label>
          <label>
            Seu e-mail
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows="5" required />
          </label>
          <button type="submit" className="btn btn-red">Enviar por e-mail</button>
          <p className="form-nota">Ao enviar, seu aplicativo de e-mail abre com a mensagem pronta.</p>
        </form>
      </div>
    </section>
  )
}
