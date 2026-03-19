/**
 * Endpoint /llms.txt — GEO (Generative Engine Optimization)
 *
 * Arquivo TypeScript puro (APIRoute do Astro). Serve um manifesto em texto
 * puro para guiar rastreadores de IA (ChatGPT, Perplexity, Gemini) sobre o
 * conteúdo do site.
 *
 * REGRA DA SKILL: sem frontmatter (---) — este é um .ts puro, não um .astro.
 */
import type { APIRoute } from 'astro';
import { getCMSDocument } from '../lib/firestore';

export const GET: APIRoute = async () => {
  const cms = await getCMSDocument();
  const { meta, hero, features, about } = cms;

  const lines: string[] = [
    `# ${meta.title}`,
    ``,
    `> ${meta.description}`,
    ``,
    `## Principais Tópicos`,
    ``,
    `- Proposta de Valor: ${meta.siteUrl}`,
    `- Sobre: ${meta.siteUrl}#sobre`,
    `- Contato: ${meta.siteUrl}#contato`,
    ``,
    `## Proposta Principal`,
    ``,
    hero.headline,
    ``,
    hero.subheadline,
    ``,
    `## Funcionalidades`,
    ``,
    ...features.items.map((f) => `- ${f.title}: ${f.description}`),
    ``,
    `## Sobre`,
    ``,
    ...about.paragraphs,
    ``,
    `Autor: ${meta.author} | URL: ${meta.siteUrl}`,
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
