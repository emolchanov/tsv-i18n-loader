/*   
 *  tsv-i18n-loader:
 *  loader for webpack built 
 *  by Eugene Molchanov
 */

var tsvi18n = new (require("tsv-i18n"));

module.exports = function (text) {
    return 'module.exports = ' + tsvi18n.tsv2obj(text);
};
