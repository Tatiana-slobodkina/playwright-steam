// Digits grouped by thousands separators, e.g. "34,999,092".
const STAT_FORMAT = /^\d{1,3}(,\d{3})*$/;

/** @param {string} text */
function parseStatNumber(text) {
  return Number(text.replace(/[^\d]/g, ''));
}

module.exports = { STAT_FORMAT, parseStatNumber };
