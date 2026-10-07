const URLS = {
  store: '/',
};

const URL_PATTERNS = {
  store: /store\.steampowered\.com/,
  community: /steamcommunity\.com\/?$/,
  login: /\/login\//,
  about: /store\.steampowered\.com\/about\//,
};

module.exports = { URLS, URL_PATTERNS };
