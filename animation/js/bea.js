!function(n){"undefined"!=typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd?define(n):this.bea=n()}(function(){function c(n,t){for(var e=0,o=n.length;e<o;++e)if(!t(n[e]))return a;return 1}function f(n,t){c(n,function(n){return t(n),1})}function d(n,t,e){function o(n){return n.call?n():b[n]}function i(){if(!--s)for(var n in b[a]=1,u&&u(),v)c(n.split("|"),o)&&!f(v[n],o)&&(v[n]=[])}n=n[h]?n:[n];var r=t&&t.call,u=r?t:e,a=r?n.join(""):t,s=n.length;return setTimeout(function(){f(n,function n(t,e){return null===t?i():(e||/^https?:\/\//.test(t)||!p||(t=-1===t.indexOf(".js")?p+t+".js":p+t),y[t]?(a&&(g[a]=1),2==y[t]?i():setTimeout(function(){n(t,!0)},0)):(y[t]=1,a&&(g[a]=1),void l(t,i)))})},0),d}function l(n,t){var e,o=r.createElement("script");o.onload=o.onerror=o[m]=function(){o[s]&&!/^c|loade/.test(o[s])||e||(o.onload=o[m]=null,e=1,y[n]=2,t())},o.async=1,o.setAttribute("crossorigin","anonymous"),o.setAttribute("data-permanent",1),o.src=i?n+(-1===n.indexOf("?")?"?":"&")+i:n,u.insertBefore(o,u.lastChild)}var p,i,r=document,u=r.getElementsByTagName("head")[0],a=!1,h="push",s="readyState",m="onreadystatechange",b={},g={},v={},y={};return d.get=l,d.order=function(e,o,i){!function n(t){t=e.shift(),e.length?d(t,n):d(t,o,i)}()},d.path=function(n){p=n},d.urlArgs=function(n){i=n},d.ready=function(n,t,e){n=n[h]?n:[n];var o=[];return f(n,function(n){b[n]||o[h](n)}),c(n,function(n){return b[n]})?t():(n=n.join("|"),v[n]=v[n]||[],v[n][h](t),e&&e(o)),d},d.done=function(n){d([null],n)},d});var beas,appSettings,execEl="";!function(){this.sbea=function(n){beas=n}}(),function(){this.Reactor=function(n){(appSettings=n).Base&&(beas=n.Base);n.App&&(execEl=n.App);var t=["latest"==n.Version?"https://s.beacdn.com/jsn/latest/":"https://s.beacdn.com/jsn/j.js?"+n.Version];bea(t,"reactor",function(){n.Additional&&bea(n.Additional,"ready",function(){})})}}();