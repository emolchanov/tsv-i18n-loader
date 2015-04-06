/*   
 *  locales-loader:
 *  a locales loader from tsv for webpack built 
 *  by Eugene Molchanov
 */

var tsvi18n = require("./parsers/tsv-i18n");

module.exports = function (text) {
    return 'module.exports = ' + tsvi18n.tsv2obj(text);
};
