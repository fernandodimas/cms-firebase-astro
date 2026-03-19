/**
 * Tipos TypeScript que espelham o documento único do Firestore.
 *
 * REGRA DA SKILL: Todo o conteúdo da landing page vive em um único documento
 * JSON no Firestore. Não há subcoleções. Uma leitura = um site gerado.
 */

// ---------------------------------------------------------------------------
// Seções do Documento
// ---------------------------------------------------------------------------

export interface MetaSection {
  /** Título da aba do navegador e SEO */
  title: string;
  /** Descrição para meta description e OG */
  description: string;
  /** URL canônica do site */
  siteUrl: string;
  /** URL da imagem para Open Graph */
  ogImage: string;
  /** Idioma do site, ex: "pt-BR" */
  lang: string;
  /** Nome do autor / marca */
  author: string;
}

export interface HeroSection {
  /** Título principal — usado também como alvo do DTR */
  headline: string;
  /** Subtítulo ou copy de suporte */
  subheadline: string;
  /** Texto do botão de CTA primário */
  ctaText: string;
  /** Link do botão de CTA */
  ctaUrl: string;
  /** URL da imagem hero (opcional) */
  imageUrl?: string;
  /** Alt text da imagem hero */
  imageAlt?: string;
}

export interface Feature {
  /** Identificador único do item (usado como key) */
  id: string;
  /** Emoji ou nome do ícone */
  icon: string;
  /** Título do benefício */
  title: string;
  /** Descrição curta */
  description: string;
}

export interface FeaturesSection {
  /** Título da seção de funcionalidades */
  heading: string;
  /** Lista de funcionalidades/benefícios */
  items: Feature[];
}

export interface AboutSection {
  /** Título da seção "Sobre" */
  heading: string;
  /** Parágrafos (array para facilitar múltiplos blocos) */
  paragraphs: string[];
  /** URL da imagem ilustrativa (opcional) */
  imageUrl?: string;
  /** Alt text */
  imageAlt?: string;
}

export interface ContactSection {
  /** Título da seção de contato */
  heading: string;
  /** Subtítulo / instrução */
  subheading: string;
  /** Email de destino do formulário */
  email: string;
  /** Número de WhatsApp (formato internacional, ex: "5511999999999") */
  whatsapp?: string;
  /** Texto do botão de envio */
  submitText: string;
}

export interface SchemaOrgConfig {
  /** Tipo do Schema.org, ex: "LocalBusiness", "Organization", "Product" */
  type: string;
  /** Nome da entidade */
  name: string;
  /** Descrição */
  description: string;
  /** URL */
  url: string;
  /** Logo URL */
  logo?: string;
  /** Telefone (formato E.164) */
  telephone?: string;
  /** Endereço */
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

// ---------------------------------------------------------------------------
// Documento Raiz — o que é armazenado no Firestore
// ---------------------------------------------------------------------------

/**
 * Representa o documento único do Firestore.
 *
 * Caminho sugerido: `sites/{siteId}`
 *
 * Uso no build time:
 * ```ts
 * import { getCMSDocument } from '@/lib/firestore';
 * const cms = await getCMSDocument();
 * ```
 */
export interface CMSDocument {
  meta: MetaSection;
  hero: HeroSection;
  features: FeaturesSection;
  about: AboutSection;
  contact: ContactSection;
  schemaOrg: SchemaOrgConfig;
  /** Timestamp da última publicação (gerado pelo painel admin) */
  lastPublishedAt?: string;
}
