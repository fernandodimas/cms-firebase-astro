import type { CMSDocument } from '@/types/cms';

/**
 * Dado de exemplo que simula o documento único do Firestore.
 *
 * Usado como fallback durante desenvolvimento local e em testes,
 * eliminando a necessidade de credenciais do Firebase no ambiente dev.
 */
export const sampleData: CMSDocument = {
  meta: {
    title: 'Minha Empresa — Soluções que Transformam',
    description:
      'Ajudamos pequenas e médias empresas a crescer com tecnologia acessível e resultados mensuráveis.',
    siteUrl: 'https://minhaempresa.com.br',
    ogImage: 'https://minhaempresa.com.br/og-image.jpg',
    lang: 'pt-BR',
    author: 'Minha Empresa',
  },

  hero: {
    headline: 'Transforme seu negócio com soluções digitais',
    subheadline:
      'Do diagnóstico ao resultado: criamos presença online que gera leads e converte clientes reais.',
    ctaText: 'Falar com um especialista',
    ctaUrl: '#contato',
    imageUrl: '/images/hero.webp',
    imageAlt: 'Equipe trabalhando em soluções digitais modernas',
  },

  features: {
    heading: 'Por que escolher a Minha Empresa?',
    items: [
      {
        id: 'velocidade',
        icon: '⚡',
        title: 'Sites Ultra-Rápidos',
        description:
          'Pontuação 100 no PageSpeed. Seu cliente não espera, e o Google também não.',
      },
      {
        id: 'seo',
        icon: '🎯',
        title: 'SEO e Google Ads',
        description:
          'Apareça no topo das buscas e maximize o Índice de Qualidade das suas campanhas.',
      },
      {
        id: 'custo',
        icon: '💰',
        title: 'Custo Previsível',
        description:
          'Infraestrutura no plano gratuito do Firebase. Pague apenas quando crescer.',
      },
      {
        id: 'ia',
        icon: '🤖',
        title: 'Otimizado para IA',
        description:
          'Seu conteúdo aparece nas respostas do ChatGPT, Perplexity e Gemini.',
      },
    ],
  },

  about: {
    heading: 'Nossa história',
    paragraphs: [
      'Nascemos da frustração de ver pequenos negócios pagando caro por sites lentos e resultados invisíveis.',
      'Combinamos tecnologia de ponta — a mesma usada por grandes empresas globais — com foco total em resultados para o mercado brasileiro.',
      'Cada projeto é tratado como um produto, não como um serviço pontual.',
    ],
    imageUrl: '/images/about.webp',
    imageAlt: 'Nosso escritório em São Paulo',
  },

  contact: {
    heading: 'Vamos conversar?',
    subheading:
      'Preencha o formulário e entraremos em contato em até 24 horas úteis.',
    email: 'contato@minhaempresa.com.br',
    whatsapp: '5511999999999',
    submitText: 'Enviar mensagem',
  },

  schemaOrg: {
    type: 'LocalBusiness',
    name: 'Minha Empresa',
    description:
      'Agência digital especializada em sites rápidos, SEO e integração com Google Ads para pequenas e médias empresas.',
    url: 'https://minhaempresa.com.br',
    logo: 'https://minhaempresa.com.br/logo.png',
    telephone: '+55-11-99999-9999',
    address: {
      street: 'Av. Paulista, 1000',
      city: 'São Paulo',
      state: 'SP',
      postalCode: '01310-100',
      country: 'BR',
    },
  },

  lastPublishedAt: new Date().toISOString(),
};
