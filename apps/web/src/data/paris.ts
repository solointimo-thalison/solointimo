const renda = 'Renda: 90% Poliamida | 10% Elastano.';

const diferenciaisCalcinhas = [
  'Cavas das pernas finalizadas com elástico macio para maior conforto',
  'Fundinho 100% algodão para mais higiene e bem-estar',
  'Veste todos os tipos de quadril com total conforto',
  'Toque ultra macio e tecido leve',
  'Sensação de frescor e secagem rápida',
];

export const calcinhas = [
  {
    ref: '80035',
    title: 'Calcinha Fio Em Renda Paris',
    description: 'Inspirada na elegância parisiense, a Calcinha Fio Em Renda Paris combina delicadeza e conforto em um modelo sofisticado. A renda macia e o corte minimalista valorizam o corpo com leveza e frescor, ideal para quem busca praticidade sem abrir mão do charme.',
    features: ['Cintura fina que garante ajuste discreto', ...diferenciaisCalcinhas],
    composition: [renda],
    photos: ['Preto — frente', 'Champagne — costas', 'Laranja — frente', 'Azul — costas'],
  },
  {
    ref: '80037',
    title: 'Calcinha Caleçon Em Renda Paris',
    description: 'Inspirada na sofisticação parisiense, a Calcinha Caleçon Em Renda Paris combina elegância e conforto em um design moderno. Sua modelagem proporciona cobertura ideal e valorização do corpo com leveza e frescor.',
    features: ['Cintura média para ajuste confortável e seguro', ...diferenciaisCalcinhas],
    composition: [renda],
    photos: ['Preto — frente', 'Preto — costas', 'Champagne — frente', 'Laranja — frente', 'Azul — frente'],
  },
  {
    ref: '80036',
    title: 'Calcinha Biquíni Em Renda Paris',
    description: 'Inspirada na elegância parisiense, a Calcinha Biquíni Em Renda Paris combina charme e conforto em um design delicado. Sua modelagem realça a silhueta com suavidade, trazendo leveza e frescor para o dia a dia.',
    features: ['Cintura fina para um visual moderno e delicado', ...diferenciaisCalcinhas],
    composition: [renda],
    photos: ['Preto — frente', 'Preto — costas', 'Champagne — frente', 'Laranja — frente', 'Azul — lateral'],
  },
];

export const soutiens = [
  {
    ref: '80039',
    title: 'Sutiã Balconet Renda Paris Preto',
    description: 'Elegante e delicado, o Sutiã Balconet Renda Paris combina inspiração parisiense, conforto e versatilidade. Com bojo removível e área do busto forrada em tule, oferece média sustentação e um caimento leve, perfeito para compor looks sofisticados ou usar no dia a dia.',
    features: [
      'Bojo removível para ajuste personalizado',
      'Top em renda com área do busto forrada em tule para mais conforto',
      'Laterais finas que garantem leveza',
      'Alças finas duplas na frente e com regulagem nas costas',
      'Ideal para média sustentação com toque elegante',
      'Toque ultra macio, tecido leve e sensação de frescor',
      'Secagem rápida para mais praticidade',
    ],
    composition: [renda, 'Tule: 82% Poliamida | 18% Elastano.'],
    photos: ['Preto — frente', 'Champagne — costas', 'Laranja — frente', 'Azul — lateral'],
  },
];

export type ParisProduct = (typeof calcinhas)[number];
