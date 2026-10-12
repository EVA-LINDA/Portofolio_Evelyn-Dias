import { perfil } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          © {new Date().getFullYear()} {perfil.nome}. Feito com React.
        </p>
        <a href="#inicio">Voltar ao topo</a>
      </div>
    </footer>
  )
}
