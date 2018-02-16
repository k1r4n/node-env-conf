'use strict';

/**
  * converts plain text environment values to json object
  * @param {string array} config
  * @return {object}
 **/


module.exports = function(config) {

    const confValues = {};
    const camelCase = function (str) {
        const value = str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
            return match.charAt(match.length-1).toUpperCase();
        });
        return value.charAt(0).toLowerCase()+value.slice(1);
    }

    config.map((conf) => {
        var confTrim = conf.trim();
        var confLength = confTrim.length;
        if (confTrim) {
            if (confTrim[0] === '=' || confTrim[confTrim.length - 1] === '=' || !confTrim.slice(1, confLength - 1).search('=')) {
                throw new Error('Configuration not in valid format');
            }
            const confTemp = confTrim.split(/=(.+)/);
            if (!(/^[a-zA-Z0-9 ]*$/.test(confTemp[0]))) {
                throw new Error('Only character, numbers and white space allowed');
            }
            confValues[camelCase(confTemp[0].trim())] = confTemp[1].trim();
        }
    });
    return confValues;
}
