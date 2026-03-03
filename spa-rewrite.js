// SPA Rewrite Handler (GitHub Pages)
// Converte "?redirect=/rota" em uma navegação real via history.replaceState,
// antes do React carregar.

(function () {
  try {
    var url = new URL(window.location.href);
    var redirect = url.searchParams.get("redirect");

    if (!redirect) return;

    // Sanitiza: garante que é um caminho relativo (evita open-redirect / urls externas)
    if (redirect.startsWith("http://") || redirect.startsWith("https://") || redirect.startsWith("//")) {
      url.searchParams.delete("redirect");
      window.history.replaceState(null, "", url.pathname + (url.search ? url.search : "") + url.hash);
      return;
    }

    // Normaliza barra inicial
    if (!redirect.startsWith("/")) redirect = "/" + redirect;

    // Remove o parâmetro redirect da URL
    url.searchParams.delete("redirect");

    // Mantém outros params (se houver) e aplica a rota
    var newPath = redirect + (url.search ? url.search : "") + (url.hash ? url.hash : "");
    window.history.replaceState(null, "", newPath);
  } catch (e) {
    // Se der qualquer erro, não quebra o site
  }
})();
