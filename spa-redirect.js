// GitHub Pages SPA Redirect
// Preserva a rota acessada e redireciona corretamente para o React Router

(function () {
  var path = window.location.pathname;

  // Remove a parte do repositório do caminho se existir
  var repo = "/site";

  if (path.startsWith(repo)) {
    path = path.substring(repo.length);
  }

  var redirect = repo + "/?redirect=" + encodeURIComponent(path);

  window.location.replace(redirect);
})();
