// Miniatura decorativa da tela inicial do app Tá na Hora (apenas visual).
const itens = [
  { cor: '#E1F5FE', texto: 'MEUS REMÉDIOS' },
  { cor: '#E8F5E9', texto: 'MINHAS RECEITAS' },
  { cor: '#FFF9C4', texto: 'CALENDÁRIO' },
  { cor: '#F3E5F5', texto: 'FALAR COM ATENDENTE' },
]

export default function TaNaHoraPhone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-top">
        <span className="sos">SOS</span>
        <span className="hi">
          Bom dia,
          <b>Eva!</b>
        </span>
      </div>
      <div className="phone-list">
        {itens.map((i) => (
          <div className="phone-item" key={i.texto}>
            <span className="ico" style={{ background: i.cor }} />
            <span className="txt">{i.texto}</span>
          </div>
        ))}
      </div>
      <div className="phone-foot" />
    </div>
  )
}
