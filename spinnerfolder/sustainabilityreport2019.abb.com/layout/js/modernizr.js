/*!
 * modernizr v3.3.1
 * Custom Build https://modernizr.com/download?-touchevents-addtest-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(t,d,e){var r=[],l=[],n={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){l.push({name:e,fn:n,options:t})},addAsyncTest:function(e){l.push({name:null,fn:e})}},f=function(){};function c(e,n){return typeof e===n}f.prototype=n,f=new f;var p=d.documentElement,h="svg"===p.nodeName.toLowerCase();function i(e){var n=p.className,t=f._config.classPrefix||"";if(h&&(n=n.baseVal),f._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}f._config.enableClasses&&(n+=" "+t+e.join(" "+t),h?p.className.baseVal=n:p.className=n)}var o=n._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];function v(){return"function"!=typeof d.createElement?d.createElement(arguments[0]):h?d.createElementNS.call(d,"http://www.w3.org/2000/svg",arguments[0]):d.createElement.apply(d,arguments)}n._prefixes=o;var a,s,u=n.testStyles=function(e,n,t,o){var s,i,a,r,l,f="modernizr",c=v("div"),u=((l=d.body)||((l=v(h?"svg":"body")).fake=!0),l);if(parseInt(t,10))for(;t--;)(a=v("div")).id=o?o[t]:f+(t+1),c.appendChild(a);return(s=v("style")).type="text/css",s.id="s"+f,(u.fake?u:c).appendChild(s),u.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(d.createTextNode(e)),c.id=f,u.fake&&(u.style.background="",u.style.overflow="hidden",r=p.style.overflow,p.style.overflow="hidden",p.appendChild(u)),i=n(c,e),u.fake?(u.parentNode.removeChild(u),p.style.overflow=r,p.offsetHeight):c.parentNode.removeChild(c),!!i};
/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds � https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/function m(e,n){if("object"==typeof e)for(var t in e)a(e,t)&&m(t,e[t]);else{var o=(e=e.toLowerCase()).split("."),s=f[o[0]];if(2==o.length&&(s=s[o[1]]),void 0!==s)return f;n="function"==typeof n?n():n,1==o.length?f[o[0]]=n:(!f[o[0]]||f[o[0]]instanceof Boolean||(f[o[0]]=new Boolean(f[o[0]])),f[o[0]][o[1]]=n),i([(n&&0!=n?"":"no-")+o.join("-")]),f._trigger(e,n)}return f}f.addTest("touchevents",function(){var n;if("ontouchstart"in t||t.DocumentTouch&&d instanceof DocumentTouch)n=!0;else{var e=["@media (",o.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");u(e,function(e){n=9===e.offsetTop})}return n}),a=c(s={}.hasOwnProperty,"undefined")||c(s.call,"undefined")?function(e,n){return n in e&&c(e.constructor.prototype[n],"undefined")}:function(e,n){return s.call(e,n)},n._l={},n.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),f.hasOwnProperty(e)&&setTimeout(function(){f._trigger(e,f[e])},0)},n._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)},0),delete this._l[e]}},f._q.push(function(){n.addTest=m}),function(){var e,n,t,o,s,i;for(var a in l)if(l.hasOwnProperty(a)){if(e=[],(n=l[a]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=c(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?f[i[0]]=o:(!f[i[0]]||f[i[0]]instanceof Boolean||(f[i[0]]=new Boolean(f[i[0]])),f[i[0]][i[1]]=o),r.push((o?"":"no-")+i.join("-"))}}(),i(r),delete n.addTest,delete n.addAsyncTest;for(var g=0;g<f._q.length;g++)f._q[g]();t.Modernizr=f}(window,document);