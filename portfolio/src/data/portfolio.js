
export const perfil = {
  nome: 'Evelyn Dias',
  cargo: 'Desenvolvedora Júnior',
  intro:
    'Crio e analiso experiências digitais que unem estratégia, tecnologia e IA para transformar boas ideias em produtos memoráveis.',
  objetivo: 'Procuro um estágio/trabalho em desenvolvimento para aprender em equipe e colocar ideias no ar.',
  disponivel: true, 
}


export const servicos = ['Direção criativa', 'Design de produto', 'Front-end']

export const contato = {
  email: 'evelynsieg1920@gmail.com',
  linkedin: 'https://www.linkedin.com/in/seu-perfil',
  github: 'https://github.com/EVA-LINDA',
  curriculoUrl: '', // coloque o link do PDF do currículo para exibir o botão "Baixar currículo"
}

export const sobre = {
  paragrafos: [
    'Estou no 4º semestre de Engenharia de Software na UniCatólica e sou técnica em informática pelo IFTO de Paraíso do Tocantins.',
    'Trabalho com JavaScript, TypeScript e bancos de dados. Também atuo com testes de software como testadora de QA júnior, e olhar para o que pode dar errado me ajuda a escrever código mais cuidadoso.',
    'Meu projeto mais importante até agora é o Tá na Hora, um app de apoio a idosos que ficou em 1º lugar na hackathon do IFTO e que sigo evoluindo aos poucos.',
  ],
  fatos: [
    { rotulo: 'Formação', valor: 'Engenharia de Software, UniCatólica' },
    { rotulo: 'Idiomas', valor: 'Inglês e espanhol, nível intermediário' },
    { rotulo: 'Busco', valor: 'Estágio/trabalho em desenvolvimento' },
  ],
}

export const experiencias = [
  {
    periodo: '2026 até hoje',
    titulo: 'Testadora de QA júnior',
    local: 'Black Contabilidade, Palmas - TO',
  },
  {
    periodo: '2025 a 2026',
    titulo: 'Estagiária',
    local: 'Advocacia previdenciária, Paraíso do Tocantins - TO (6 meses)',
  },
  {
    periodo: '2024',
    titulo: 'Estagiária, técnica de informática',
    local: 'Prefeitura de Paraíso do Tocantins - TO (4 meses)',
  },
]

export const formacao = [
  {
    periodo: '2025 a 2026',
    titulo: 'Engenharia de Software',
    local: 'UniCatólica, cursando o 4º semestre',
  },
  {
    periodo: '2022 a 2024',
    titulo: 'Técnico em Informática',
    local: 'IFTO, campus Paraíso do Tocantins',
  },
]

export const projetos = [
  {
    id: 'tanahora',
    destaque: true,
    selo: '1º lugar na hackathon do IFTO',
    nome: 'Tá na Hora',
    descricao:
      'App de apoio a idosos no cuidado com a saúde. Reúne lembretes de remédios com alarme, receitas médicas, lista de exercícios do dia, meta de água e um botão de SOS. Nasceu na hackathon e continua sendo melhorado.',
    stack: 'React Native, Expo, TypeScript e Firebase. Também tem um protótipo web em HTML, CSS e JavaScript.',
    links: [{ rotulo: 'Ver código no GitHub', url: 'https://github.com/EVA-LINDA/TanaHora_app-main.git' }],
  },
  {
    id: 'proposta',
    destaque: false,
    nome: 'Proposta comercial e contrato',
    descricao:
      'Sistema para montar proposta comercial e contrato, com painel administrativo, servidor e banco de dados.',
    stack: '',
    links: [{ rotulo: 'Ver código no GitHub', url: 'https://github.com/seu-usuario/proposta' }],
  },
]


export const pilha = [
  { sigla: 'HTML', nome: 'HTML5', descricao: 'Estrutura semântica' },
  { sigla: 'CSS', nome: 'CSS3', descricao: 'Interfaces responsivas' },
  { sigla: 'JS', nome: 'JavaScript', descricao: 'Lógica e interatividade' },
  { sigla: 'RE', nome: 'React', descricao: 'Biblioteca de interfaces' },
  { sigla: 'TW', nome: 'Tailwind CSS', descricao: 'Estrutura' },
  { sigla: 'BS', nome: 'Bootstrap', descricao: 'Componentes responsivos' },
  { sigla: 'JQ', nome: 'jQuery', descricao: 'Interações para web' },
  { sigla: 'FG', nome: 'Figma', descricao: 'Design de interfaces' },
  { sigla: 'GIT', nome: 'Git', descricao: 'Controle de versão' },
  { sigla: 'VS', nome: 'VS Code', descricao: 'Ambiente de desenvolvimento' },
]