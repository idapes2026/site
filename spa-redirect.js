// GitHub Pages SPA Redirect (works for both root site and project subpath)
// - If hosted at https://user.github.io/ -> basePath = ""
// - If hosted at https://user.github.io/repo -> basePath = "/repo"
(function () {
  try {
    var pathname = window.location.pathname || "/";

    // Detect basePath:
    // If your Pages is a project site, the first segment is usually the repo name.
    // If it's a user/org site, it's served from root.
    var segments = pathname.split("/").filter(Boolean);

    // If the first segment looks like a repo name AND the request is not just "/",
    // we can treat it as basePath. Otherwise, basePath is root.
    // HOWEVER: on user-site, the first segment is a real route, so basePath must be "".
    // To support both safely, we ONLY set basePath if you explicitly are using a known subpath.
    // Here we auto-detect by checking if a 404.html is being served from a subpath:
    // If current pathname starts with "/site/" OR equals "/site", basePath="/site".
    // Otherwise basePath="" (root).
    var basePath = "";
    if (pathname === "/site" || pathname.startsWith("/site/")) {
      basePath = "/site";
      pathname = pathname.substring(basePath.length) || "/";
    }

    // Normalize to always start with "/"
    if (!pathname.startsWith("/")) pathname = "/" + pathname;

    var redirectUrl =
      (basePath ? basePath : "") + "/?redirect=" + encodeURIComponent(pathname);

    window.location.replace(redirectUrl);
  } catch (e) {
    // fail-safe: do nothing
  }
})();
