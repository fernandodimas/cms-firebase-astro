/**
 * DTR — Dynamic Text Replacement
 *
 * Script Vanilla JS ultraleve (< 1KB minificado) que lê parâmetros UTM da URL
 * e substitui elementos marcados com [data-dtr] para melhorar o Índice de
 * Qualidade das campanhas Google Ads sem prejudicar Core Web Vitals.
 *
 * Uso:
 *   No HTML: <h1 data-dtr="headline">Texto padrão</h1>
 *   Na URL:  ?utm_term=sua+palavra+chave
 *
 * Carregado com `async defer` no BaseLayout — não bloqueia renderização.
 */

(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);

  // Mapa de parâmetros → seletores DTR
  var mappings = [
    { param: 'utm_term',    selector: '[data-dtr="headline"]' },
    { param: 'utm_content', selector: '[data-dtr="subheadline"]' },
  ];

  mappings.forEach(function (mapping) {
    var value = params.get(mapping.param);
    if (!value) return;

    // Capitaliza a primeira letra para exibição natural
    var text = value.charAt(0).toUpperCase() + value.slice(1);

    var elements = document.querySelectorAll(mapping.selector);
    elements.forEach(function (el) {
      // Preserva o texto original como atributo para debug / testes A/B
      el.setAttribute('data-dtr-original', el.textContent || '');
      el.textContent = text;
    });
  });
})();
