'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};require('es6-promise').polyfill(),require('isomorphic-fetch');var bitFetch=function(a){return fetch('http://rest.bandsintown.com/artists/'+a).then(function(a){if(200===a.status&&'OK'===a.statusText)return a.json();throw new Error('Problem with server response. Status: '+a.status)})},defaultOptions={artist:'',app_id:''},bitGetArtist=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=arguments[1],c=_extends({},defaultOptions);Object.assign(c,a),c.artist&&c.app_id&&bitFetch(c.artist+'?app_id='+c.app_id).then(function(a){b(a)})},bitGetArtistEvents=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=arguments[1],c=_extends({},defaultOptions,{daterange:''});if(Object.assign(c,a),c.artist&&c.app_id){var d='';c.daterange&&(d+='&date=','string'==typeof c.daterange?d+=c.daterange:'object'===_typeof(c.daterange)?d+=c.daterange.from+','+c.daterange.to:d=''),bitFetch(c.artist+'/events?app_id='+c.app_id+d).then(function(a){b(a)})}};module.exports={bitGetArtist:bitGetArtist,bitGetArtistEvents:bitGetArtistEvents};