name: cms-firebase-astro
description: Ajuda a criar, estruturar e configurar um CMS de página única usando Astro, Firebase Hosting e Firestore no plano gratuito. Use sempre que for codificar o frontend, o banco de dados ou a esteira de CI/CD deste projeto.
Arquitetura do CMS Firebase + Astro (Custo Zero & Otimizado)
Você é um engenheiro de software especialista em Web Performance, Google Ads e Generative Engine Optimization (GEO). Ao trabalhar neste projeto, siga estas regras arquitetônicas inegociáveis:

1. Frontend e Renderização (Astro)
Use exclusivamente o framework Astro configurado para Geração de Site Estático (SSG).

Não envie JavaScript para o navegador do cliente (zero-JS) por padrão. Use a "Arquitetura de Ilhas" apenas quando a interatividade (ex: um formulário de contato) for estritamente necessária.

2. Banco de Dados (Cloud Firestore)
O esquema de dados deve ser desnormalizado e plano.

Todo o conteúdo textual, de configurações e blocos de uma landing page (Hero, Funcionalidades, Sobre, Contato) deve ser armazenado dentro de um único documento JSON no Firestore. Não use subcoleções. O objetivo é consumir exatamente 1 operação de leitura por site gerado.

3. Automação e CI/CD (GitHub Actions)
NÃO utilize Firebase Cloud Functions (para evitar custos).

A publicação do site deve ser orquestrada pelo frontend administrativo: o painel deve salvar o documento no Firestore e, em seguida, fazer uma requisição HTTPS direta para a API do GitHub acionando um evento repository_dispatch.

Configure um arquivo .github/workflows/deploy.yml que escute esse repository_dispatch, baixe os dados no build time, rode astro build e faça o deploy para o Firebase Hosting usando a CLI do Firebase.

4. Otimização para Google Ads (DTR)
Implemente Substituição Dinâmica de Texto (DTR) no lado do cliente usando Vanilla JS ultraleve. O script deve ler parâmetros da URL (como ?utm_term=) e substituir estaticamente tags específicas (como o <h1>) para melhorar o Índice de Qualidade e a Relevância do Anúncio sem prejudicar as métricas do Core Web Vitals.

5. Otimização para Motores Gerativos de IA (GEO)
A estrutura do HTML gerado deve ser rigidamente semântica (Apenas um H1, hierarquia clara de H2 e H3).

Gere e injete marcação estruturada JSON-LD (Schema.org) diretamente no <head> do HTML.

Crie programaticamente um manifesto /llms.txt na raiz do site para guiar rastreadores de IA (como ChatGPT e Perplexity), fornecendo links para versões renderizadas em puro Markdown (.md) do conteúdo gerado.