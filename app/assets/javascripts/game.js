(function(global, factory) { function extractNS(){ var g = {}; return factory.call(g, global),g.jsnx;} if(typeof define === 'function' && define.amd){ /*AMD*/ define(extractNS); } else if (typeof module !== 'undefined' && module.exports){ /*node*/ module.exports = extractNS(); } else { factory.call(global, global); } }(this, function(window) {function h(a){throw a;}var aa=void 0,k=!0,l=null,p=!1;function ba(a){return function(){return a}}var q,ea=this;function fa(){}
    function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
    else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){return a!==aa}function ga(a){return"array"==r(a)}function t(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}function v(a){return"boolean"==typeof a}function ia(a){return"number"==typeof a}function ja(a){return"function"==r(a)}function ka(a){var b=typeof a;return"object"==b&&a!=l||"function"==b}var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;
    function na(a,b,c){return a.call.apply(a.bind,arguments)}function oa(a,b,c){a||h(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function pa(a,b,c){pa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return pa.apply(l,arguments)}
    function w(a,b){var c=a.split("."),d=ea;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&s(b)?d[e]=b:d=d[e]?d[e]:d[e]={}}function qa(a,b){function c(){}c.prototype=b.prototype;a.bb=b.prototype;a.prototype=new c;a.prototype.constructor=a};var z=Array.prototype,ra=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:0>c?Math.max(0,a.length+c):c;if(u(a))return!u(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=z.forEach?function(a,b,c){z.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},sa=z.filter?function(a,b,c){return z.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):
        a,m=0;m<d;m++)if(m in g){var n=g[m];b.call(c,n,m,a)&&(e[f++]=n)}return e},ta=z.map?function(a,b,c){return z.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};function ua(a,b){if(a.reduce)return a.reduce(b,0);var c=0;A(a,function(d,e){c=b.call(aa,c,d,e,a)});return c}
    var va=z.some?function(a,b,c){return z.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return k;return p};function wa(a,b){var c;a:{c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(aa,d[e],e,a)){c=e;break a}c=-1}return 0>c?l:u(a)?a.charAt(c):a[c]}function xa(a){if(!ga(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}function Aa(a,b){var c=ra(a,b);0<=c&&z.splice.call(a,c,1)}
    function Ba(a){return z.concat.apply(z,arguments)}function Fa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Ga(a,b,c,d){z.splice.apply(a,Ha(arguments,1))}function Ha(a,b,c){return 2>=arguments.length?z.slice.call(a,b):z.slice.call(a,b,c)}function Ia(a,b,c){if(!t(a)||!t(b)||a.length!=b.length)return p;var d=a.length;c=c||Na;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return p;return k}function Oa(a,b){return a>b?1:a<b?-1:0}function Na(a,b){return a===b}
    function Pa(a){for(var b=[],c=0;c<a;c++)b[c]=0;return b}function Qa(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}}function Ra(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}};var B="StopIteration"in ea?ea.StopIteration:Error("StopIteration");function D(){}D.prototype.next=function(){h(B)};D.prototype.M=function(){return this};function Ta(a){if(a instanceof D)return a;if("function"==typeof a.M)return a.M(p);if(t(a)){var b=0,c=new D;c.next=function(){for(;;){b>=a.length&&h(B);if(b in a)return a[b++];b++}};return c}h(Error("Not implemented"))}
    function E(a,b,c){if(t(a))try{A(a,b,c)}catch(d){d!==B&&h(d)}else{a=Ta(a);try{for(;;)b.call(c,a.next(),aa,a)}catch(e){e!==B&&h(e)}}}function Ua(a,b,c){var d=Ta(a);a=new D;a.next=function(){for(;;){var a=d.next();return b.call(c,a,aa,d)}};return a}function Va(a,b,c){var d=c;E(a,function(a){d=b.call(aa,d,a)});return d}function Wa(a){var b=arguments,c=b.length,d=0,e=new D;e.next=function(){try{return d>=c&&h(B),Ta(b[d]).next()}catch(a){return(a!==B||d>=c)&&h(a),d++,this.next()}};return e}
    function Xa(a){if(t(a))return Fa(a);a=Ta(a);var b=[];E(a,function(a){b.push(a)});return b}function Ya(a,b){try{return Ta(a).next()}catch(c){return c!=B&&h(c),b}};function F(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Za(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d}function G(a){var b=0,c;for(c in a)b++;return b}function $a(a){for(var b in a)return b}function ab(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function H(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function bb(a){for(var b in a)return p;return k}function cb(a){for(var b in a)delete a[b]}function I(a,b){b in a&&delete a[b]}function J(a,b,c){return b in a?a[b]:c}
    function db(a){var b={},c;for(c in a)b[c]=a[c];return b}var eb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function K(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<eb.length;f++)c=eb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
    function fb(a){var b=arguments.length;if(1==b&&ga(arguments[0]))return fb.apply(l,arguments[0]);b%2&&h(Error("Uneven number of arguments"));for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};var L={Xa:function(a){return Math.floor(Math.random()*a)},cb:function(a,b){return a+Math.random()*(b-a)},Ra:function(a,b,c){return Math.min(Math.max(a,b),c)},Ia:function(a,b){var c=a%b;return 0>c*b?c+b:c},Ua:function(a,b,c){return a+c*(b-a)},Wa:function(a,b,c){return Math.abs(a-b)<=(c||1E-6)},ha:function(a){return L.Ia(a,360)},ua:function(a){return a*Math.PI/180},Na:function(a){return 180*a/Math.PI},Pa:function(a,b){return b*Math.cos(L.ua(a))},Qa:function(a,b){return b*Math.sin(L.ua(a))},ka:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,c,d){return L.ha(L.Na(Math.atan2(d-b,c-a)))},Oa:function(a,b){var c=L.ha(b)-L.ha(a);180<c?c-=360:-180>=c&&(c=360+c);return c},$a:function(a){return 0==a?0:0>a?-1:1},Va:function(a,b,c,d){c=c||function(a,b){return a==b};d=d||function(b){return a[b]};for(var e=a.length,f=b.length,g=[],m=0;m<e+1;m++)g[m]=[],g[m][0]=0;for(var n=0;n<f+1;n++)g[0][n]=0;for(m=1;m<=e;m++)for(n=1;n<=e;n++)c(a[m-1],b[n-1])?g[m][n]=g[m-1][n-1]+1:g[m][n]=Math.max(g[m-1][n],g[m][n-1]);for(var x=[],m=e,n=f;0<m&&0<n;)c(a[m-1],b[n-
        1])?(x.unshift(d(m-1,n-1)),m--,n--):g[m-1][n]>g[m][n-1]?m--:n--;return x},v:function(a){return ua(arguments,function(a,c){return a+c})},Ba:function(a){return L.v.apply(l,arguments)/arguments.length},ab:function(a){var b=arguments.length;if(2>b)return 0;var c=L.Ba.apply(l,arguments),b=L.v.apply(l,ta(arguments,function(a){return Math.pow(a-c,2)}))/(b-1);return Math.sqrt(b)},Ta:function(a){return isFinite(a)&&0==a%1},Sa:function(a){return isFinite(a)&&!isNaN(a)},Za:function(a,b){return Math.floor(a+
        (b||2E-15))},Ya:function(a,b){return Math.ceil(a-(b||2E-15))}};w("jsnx.filter",function(a,b,c){var d=Ta(a);a=new D;a.next=function(){for(;;){var a=d.next();if(b.call(c,a,aa,d))return a}};return a});function gb(a){return Va(kb(a),function(a,c){a[c[0]]=c[1];return a},{})}function lb(a){var b=0;s(b)||(b=l);var c={};M(a,function(a){c[a]=b});return c}function mb(a){return a!=l&&(a instanceof D||ja(a.M))}function nb(a){if(a instanceof O)return a.Q();if(u(a)||t(a))return a.length;if(ob(a))return G(a);h(new TypeError)}
    function M(a,b,c,d){v(c)&&(d=c,c=l);if(d){var e=b;b=function(a){e.apply(this,a)}}a instanceof O?E(kb(a),b,c):mb(a)?E(a,b,c):t(a)||u(a)?A(a,b,c):ka(a)&&M(H(a),b,c)}w("jsnx.forEach",M);function P(a,b,c){if(a instanceof O)return P(kb(a),b,c);if(t(a))return ta(a,b,c);if(mb(a))return Ua(a,b,c);if(ka(a))return Za(a,b,c);h(new TypeError)}w("jsnx.map",P);
    function pb(a){var b=arguments,c=b[0];if(t(c))return Qa.apply(l,b);if(mb(c)){var c=new D,d=b.length;c.next=function(){for(var a=[],c=0;c<d;c++)a.push(b[c].next());return a};return c}if(ka(c))return Qa.apply(l,ta(b,H));h(new TypeError)}function qb(a,b){a=ja(b)?Q(P(a,function(){return b.apply(l,arguments)})):Q(a);return Math.max.apply(l,a)}
    function R(a,b,c){if(0===arguments.length)return Ta([]);1===arguments.length?(b=a,a=0,c=1):2===arguments.length?c=1:3===arguments.length&&0===arguments[2]&&h("range() step argument must not be zero");var d=new D,e=0>c,f=a,g;d.next=function(){(e&&f<=b||!e&&f>=b)&&h(B);g=f;f+=c;return g};return d}
    function rb(a){var b=Q(a),c=b.length;if(2>c)return new D;var d=Q(R(2));a=new D;a.next=function(){var a=ta(d,function(a){return b[a]});this.next=function(){var a=p,e;for(e=2;e--;)if(d[e]!=e+c-2){a=k;break}a||h(B);d[e]+=1;for(a=e+1;2>a;a++)d[a]=d[a-1]+1;return ta(d,function(a){return b[a]})};return a};return a}
    function sb(a){var b=Q(a),c=b.length,d=ia(2)?2:c;if(d>c)return new D;var e=Q(R(c)),f=Q(R(c,c-d,-1));a=new D;var g=new D,m,n=k;a.next=function(){this.next=m.next;return ta(e.slice(0,d),function(a){return b[a]})};g.next=function(){return n};m=S(g,function(a){a||h(B);n=p;return R(d-1,-1,-1)},function(a){if(!n)if(f[a]-=1,0===f[a])e.splice.apply(e,[a,e.length].concat(e.slice(a+1).concat([e[a]]))),f[a]=c-a;else{var g=f[a],m=e[a];e[a]=e[e.length-g];e[e.length-g]=m;n=k;return kb([ta(e.slice(0,d),function(a){return b[a]})])}},
        function(a){return a});return a}function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)!s(a[c])||"object"!==r(a[c])?a[c]=T(d[c]):"object"===r(a[c])&&"object"===r(d)&&tb(a[c],d[c]);for(var f=0;f<eb.length;f++)c=eb[f],Object.prototype.hasOwnProperty.call(d,c)&&(!s(a[c])||"object"!==r(a[c])?a[c]=T(d[c]):"object"===r(a[c])&&"object"===r(d)&&tb(a[c],d[c]))}}
    function Q(a){if(a instanceof O)return Q(kb(a));if(t(a))return Fa(a);if(mb(a))return Xa(a);if(ka(a))return H(a);h(new TypeError)}w("jsnx.toArray",Q);function ub(a){var b=[];F(a,function(a,d){b.push([d,a])});return b}function U(a){var b=new D,c=Ta(H(a));b.next=function(){var b=c.next();return[b,a[b]]};return b}function kb(a){if(a instanceof O)return kb(a.adj);"object"===r(a)&&(!t(a)&&!mb(a))&&(a=H(a));return Ta(a)}
    function S(a,b){var c=new D,d=Ha(arguments,1);if(0===d.length)return a;try{a=Ta(a)}catch(e){return c.next=function(){"Not implemented"===e.message&&h(new TypeError)},c}var f=0,g=d.length,m=[a];c.next=function(){do try{var a,b;do a=m[f].next(),s(a)&&(b=d[f](a));while(!s(a));if(mb(b)){if(f===g-1)return b;m.push(b);f+=1}else if(s(b))return b}catch(c){c!==B&&h(c),0<f?(m.pop(),f-=1):h(c)}while(1)};return c}w("jsnx.sentinelIterator",function(a,b){var c=new D;c.next=function(){return Ya(a,b)};return c});
    function ob(a){var b=Object.prototype.hasOwnProperty;if(!a||"object"!==r(a)||a.nodeType||a==a.window)return p;try{if(a.constructor&&!b.call(a,"constructor")&&!b.call(a.constructor.prototype,"isPrototypeOf"))return p}catch(c){return p}for(var d in a);return d===aa||b.call(a,d)}
    function T(a,b){b=b||[];var c=r(a);if("object"==c&&ob(a)||"array"==c){var d=wa(b,function(b){return a===b[0]});if(d!==l)return d[1];if(a.N)return d=[a,a.N()],b.push(d),d[1];c="array"==c?[]:{};d=[a,c];b.push(d);for(var e in a)c[e]=T(a[e],b);return c}return a}function vb(a){function b(){}var c={},d;b.prototype=a.constructor.prototype;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);c=T(c);a=new b;for(d in c)a[d]=c[d];return a}var xb=function wb(b,c){return 0===c?b:wb(c,b%c)};var yb,zb=l,Ab="add_node add_nodes_from add_edge add_edges_from remove_node remove_nodes_from remove_edge remove_edges_from clear".split(" ");
    w("jsnx.draw",function(a,b,c){function d(){ya.h.attr("transform",function(a){return["translate(",a.x,",",a.y,")scale(",ha,")"].join("")});hc()}v(b)&&(c=b,b=l);b=b||zb||{};var e=b.d3||window.d3,f={};tb(f,Bb,b);zb=b;e||h(Error("D3 requried for draw()"));f.element==l&&yb==l&&h(Error("Output element required for draw()"));yb=J(f,"element",yb);e.select(yb).select("svg.jsnx").remove();var g=e.select(yb),m=g.append("svg").classed("jsnx",k).attr("pointer-events","all"),n=m.append("g");b=n.append("g").classed("edges",
        k).selectAll("g.edge");var x=n.append("g").classed("nodes",k).selectAll("g.node"),y=e.layout.force(),C=f.width||parseInt(g.style("width"),10),N=f.height||parseInt(g.style("height"),10),Ja=f.layout_attr,g=f.nodelist||l,ca,da,Y,Ca=a.b(),za=f.weighted,ya={h:x,i:b};if(f.with_labels){var Da=f.labels;ca="object"===r(Da)?function(a){return J(Da,a.node,"")}:ja(Da)?Da:u(Da)?function(a){return a.data[Da]}:function(a){return a.node}}f.labels=ca;if(za){var Ka=f.weights;Y="object"===r(Ka)?function(a){return J(Ka,
        a.node,1)}:ja(Ka)?Ka:u(Ka)?function(a){return J(a.data,Ka,1)}:ba(1)}if(f.with_edge_labels){var La=f.edge_labels;da=za&&!s(La)?Y:"object"===r(La)?function(a){return J(Da,a.node,"")}:ja(La)?La:u(La)?function(a){return a.data[La]}:function(a){return a.edge};f.edge_labels=da}if(za&&f.weighted_stroke){var za=Va(a.e(l,k),function(a,b){b=Y({data:b[2]});return a>b?a:b},0),Nd=e.scale.linear().range([2,f.edge_style["stroke-width"]]).domain([0,za]);f.edge_style["stroke-width"]=function(a){return Nd(Y.call(this,
        a))}}m.select("svg.jsnx").remove();m.attr("width",C+"px").attr("height",N+"px").style("opacity",1E-6).transition().duration(1E3).style("opacity",1);var Od={size:k,nodes:k,links:k,start:k};M(Ja,function(a){if(!(a in Od))y[a](Ja[a])});y.nodes([]).links([]).size([C,N]);var Sa=1,ha=1;if(f.pan_zoom.enabled){var ic=f.pan_zoom.scale;(function(){var a=p,b=1,c=Sa;m.call(e.behavior.zoom().on("zoom",function(){var f=e.event.sourceEvent.shiftKey;(f=ic&&f||!(ic||f))&&!a?(b=e.event.scale,c=Sa,a=k):!f&&a&&(a=p);
        Sa=f?c*(e.event.scale/b):Sa;ha=!f?Sa/e.event.scale:ha;f=e.event.translate;n.attr("transform","translate("+f[0]+","+f[1]+")scale("+e.event.scale+")");d()}))})()}var hc=fa,Ea=f.edge_offset,hb=f.node_attr.r,ib=f.node_style["stroke-width"];"circle"===f.node_shape?(ja(hb)||(hb=function(){return f.node_attr.r}),ja(ib)||(ib=function(){return f.node_style["stroke-width"]}),Ea=function(a){return[hb(a.source)+ib(a.source),hb(a.target)+ib(a.target)]}):(ga(Ea)&&(Ea=function(){return f.edge_offset}),ia(Ea)&&(Ea=
        function(){return[f.edge_offset,f.edge_offset]}));var Ma=f.edge_style["stroke-width"];ja(Ma)||(Ma=function(){return f.edge_style["stroke-width"]});var jb=f.edge_label_offset,hc=Ca?function(){ya.i.each(function(a){if(a.source!==a.target){var b=e.select(this),c=a.source.x,d=a.source.y,f=a.target.x,g=a.target.y,m=L.ka(c,d,f,g),f=Math.sqrt(Math.pow(f-c,2)+Math.pow(g-d,2)),g=Ea(a),g=[g[0]*ha,g[1]*ha];b.attr("transform",["translate(",c,",",d,")rotate(",m,")"].join(""));c=Ma(a)*ha;d=f-g[1]-2*c;m=c/2;b.select(".line").attr("d",
        ["M",g[0],0,"L",g[0],-m,"L",d,-m,"L",d,-c,"L",f-g[1],0,"z"].join(" "));c=1/ha;b.select("text").attr("x",jb.x*c+g[0]+(f*c-g[0]-g[1])/2).attr("y",-Ma(a)/2+-jb.y*c).attr("transform","scale("+ha+")")}})}:function(){ya.i.each(function(a){if(a.source!==a.target){var b=e.select(this),c=a.source.x,d=a.source.y,g=a.target.x,m=a.target.y,n=L.ka(c,d,g,m),g=Math.sqrt(Math.pow(g-c,2)+Math.pow(m-d,2)),m=g/2,x=Ea(a),x=[x[0]*ha,x[1]*ha],y=1/ha,C=Ma(a)*ha,N=90<n&&279>n;b.attr("transform",["translate(",c,",",d,")rotate(",
        n,")"].join(""));b.select(".line").attr("d",["M",x[0],C/4,"L",x[0],-C/4,"L",g-x[1],-C/4,"L",g-x[1],C/4,"z"].join(" "));f.with_edge_labels&&b.select("text").attr("x",(N?1:-1)*jb.x*y+x[0]+(g*y-x[0]-x[1])/2).attr("y",-Ma(a)/4+-jb.y*y).attr("transform","scale("+ha+")"+(N?"rotate(180,"+m*(1/ha)+",0)":""))}})};y.on("tick",d);C=a.A();N=a.e();g&&(c=p,C=a.d(g),N=a.e(g));ya.h=Cb(a,C,y,x,f.node_shape,ca);ya.i=Db(a,N,y,b,da);Eb(ya.h,{attr:f.node_attr,style:f.node_style,X:f.label_style,W:f.label_attr},f.with_labels);
        Fb(ya.i,{attr:f.edge_attr,style:f.edge_style,X:f.edge_label_style,W:f.edge_label_attr},f.with_edge_labels,l,Ca);c?Gb(a,y,f,ya):a.bound?Hb(a):Ib(a);y.start();return y});function Cb(a,b,c,d,e,f){var g=c.nodes();M(b,function(b){var c=a.node[b];b={node:b,data:c,G:a};g.push(b);c.__d3datum__=b});d=d.data(g,Jb);b=d.enter().append("g").classed("node",k).call(c.drag);b.append(e).classed("node-shape",k);f&&b.append("text").text(f);return d}
    function Db(a,b,c,d,e){var f=c.links();M(b,function(b){var c=b[0],d=b[1];b=b[2]||a.T(c,d);c={edge:[c,d],redge:[d,c],source:a.node[c].__d3datum__,target:a.node[d].__d3datum__,data:b,G:a};f.push(c);b.__d3datum__=c});d=d.data(f,Kb);b=d.enter().append("g").classed("edge",k);b.append("path").classed("line",k);e&&b.append("text").text(e);return d}
    function Eb(a,b,c,d){if(d!=l){var e={};M(d,function(a){e[t(a)?a[0]:a]=k});a=a.filter(function(a){return a.node in e})}var f=a.selectAll(".node-shape");F(b.attr,function(a,b){f.attr(b,a)});F(b.style,function(a,b){f.style(b,a)});if(c){var g=a.selectAll("text");F(b.W,function(a,b){g.attr(b,a)});F(b.X,function(a,b){g.style(b,a)})}}
    function Fb(a,b,c,d,e){if(d!=l){var f={};M(d,function(a){f[[a[0],a[1]]]=k});a=a.filter(function(a){return a.edge in f||e||a.redge in f})}var g=a.selectAll(".line");F(b.attr,function(a,b){g.attr(b,a)});F(b.style,function(a,b){"stroke-width"!=b&&g.style(b,a)});g.style("stroke-width",0);if(c){var m=a.selectAll("text");F(b.W,function(a,b){m.attr(b,a)});F(b.X,function(a,b){m.style(b,a)})}}function Jb(a){return a.node}function Kb(a){return a.edge}
    function Lb(a,b,c,d){var e=c.nodes();M(a.d(b),function(b){Aa(e,a.node[b].__d3datum__)});d=d.data(e,Jb);d.exit().remove();return d}function Mb(a,b,c,d){var e=c.links();M(b,function(b){Aa(e,J(a.T(b[0],b[1],{}),"__d3datum__",l))});d=d.data(e,Kb);d.exit().remove();return d}
    function Gb(a,b,c,d){Hb(a,p);var e=a.constructor.prototype,f=c.node_shape,g={attr:c.node_attr,style:c.node_style,W:c.label_attr,X:c.label_style},m={attr:c.edge_attr,style:c.edge_style,W:c.edge_label_attr,X:c.edge_label_style},n=c.labels,x=c.edge_labels,y=c.with_labels,C=c.with_edge_labels,N=a.b();a.add_node=a.I=function(a){var c=!this.m(a);e.add_node.apply(this,arguments);c&&(d.h=Cb(this,[a],b,d.h,f,n));Eb(d.h,g,y,[a]);b.start()};a.add_nodes_from=a.j=function(a){var c=sa(Q(a),function(a){return!this.m(t(a)?
        a[0]:a)},this);e.add_nodes_from.apply(this,arguments);0<c.length&&(d.h=Cb(this,c,b,d.h,f,n));Eb(d.h,g,y,a);b.start()};a.add_edge=a.a=function(c,ca){var da=!this.O(c,ca),Y=[];da&&(Y=sa(c==ca?[c]:[c,ca],function(a){return!this.m(a)},this));e.add_edge.apply(a,arguments);0<Y.length&&(d.h=Cb(this,Y,b,d.h,f,n),Eb(d.h,g,y,Y));da&&(d.i=Db(this,[[c,ca]],b,d.i,x));Fb(d.i,m,C,[[c,ca]],N);b.start()};a.add_edges_from=a.c=function(c){var N=[],da=[],Y={},Ca={},za=this.b();M(c,function(a){var b=a[0];a=a[1];if(!this.O(b,
        a)&&!([b,a]in Y)&&(za||!([a,b]in Y)))N.push([b,a]),Y[[b,a]]=k,!this.m(b)&&!(b in Ca)&&(da.push(b),Ca[b]=k),!this.m(a)&&!(a in Ca)&&(da.push(a),Ca[a]=k)},this);e.add_edges_from.apply(a,arguments);0<da.length&&(d.h=Cb(this,da,b,d.h,f,n),Eb(d.h,g,y,da));0<N.length&&(d.i=Db(this,N,b,d.i,x));Fb(d.i,m,C,N,za);b.start()};a.remove_node=a.R=function(c){try{if(this.m(c)){d.h=Lb(this,[c],b,d.h);var f=this.e([c]);this.b()&&(f=Wa(f,this.J([c])));d.i=Mb(this,f,b,d.i);b.resume()}}catch(g){}e.remove_node.apply(a,
        arguments)};a.remove_nodes_from=a.$=function(c){try{d.h=Lb(this,c,b,d.h);var f=this.e(c);this.b()&&(f=Wa(f,this.J(c)));d.i=Mb(this,f,b,d.i);b.resume()}catch(g){}e.remove_nodes_from.apply(a,arguments)};a.remove_edge=a.w=function(c,f){try{d.i=Mb(this,[[c,f]],b,d.i),b.resume()}catch(g){}e.remove_edge.apply(a,arguments)};a.remove_edges_from=a.F=function(c){try{d.i=Mb(this,c,b,d.i),b.resume()}catch(f){}e.remove_edges_from.apply(a,arguments)};a.clear=a.clear=function(){d.h=d.h.data([],Jb);d.h.exit().remove();
        d.i=d.i.data([],Kb);d.i.exit().remove();b.nodes([]).links([]).resume();e.clear.apply(a,arguments)};a.bound=k}w("jsnx.is_bound",function(a){return a.bound});function Hb(a,b){if(a.bound){var c=a.constructor.prototype;A(Ab,function(b){a[b]=c[b]});delete a.bound;(!s(b)||b)&&Ib(a)}}w("jsnx.unbind",Hb);function Ib(a){M(a.A(k),function(a){I(a[1],"__d3datum__")});M(a.e(l,k),function(a){I(a[2],"__d3datum__")})}
    var Bb={layout_attr:{charge:-120,linkDistance:60},node_shape:"circle",node_attr:{r:10},node_style:{"stroke-width":2,stroke:"#333",fill:"#999",cursor:"pointer"},edge_attr:{},edge_style:{fill:"#000","stroke-width":3},label_attr:{},label_style:{"text-anchor":"middle","dominant-baseline":"central",cursor:"pointer","-webkit-user-select":"none",fill:"#000"},edge_label_attr:{},edge_label_style:{"font-size":"0.8em","text-anchor":"middle","-webkit-user-select":"none"},edge_label_offset:{x:0,y:0.5},with_labels:p,
        with_edge_labels:p,edge_offset:10,weighted:p,weights:"weight",weighted_stroke:k,pan_zoom:{enabled:k,scale:k}};function Nb(a){if("function"==typeof a.z)return a.z();if(u(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ab(a)};function Ob(a,b){this.l={};this.o=[];var c=arguments.length;if(1<c){c%2&&h(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.ea(a)}q=Ob.prototype;q.C=0;q.ba=0;q.f=function(){return this.C};q.z=function(){Pb(this);for(var a=[],b=0;b<this.o.length;b++)a.push(this.l[this.o[b]]);return a};q.fa=function(){Pb(this);return this.o.concat()};q.la=function(a){return Object.prototype.hasOwnProperty.call(this.l,a)};q.K=function(){return 0==this.C};
    q.clear=function(){this.l={};this.ba=this.C=this.o.length=0};q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.l,a)?(delete this.l[a],this.C--,this.ba++,this.o.length>2*this.C&&Pb(this),k):p};
    function Pb(a){if(a.C!=a.o.length){for(var b=0,c=0;b<a.o.length;){var d=a.o[b];Object.prototype.hasOwnProperty.call(a.l,d)&&(a.o[c++]=d);b++}a.o.length=c}if(a.C!=a.o.length){for(var e={},c=b=0;b<a.o.length;)d=a.o[b],Object.prototype.hasOwnProperty.call(e,d)||(a.o[c++]=d,e[d]=1),b++;a.o.length=c}}q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.l,a)||(this.C++,this.o.push(a),this.ba++);this.l[a]=b};
    q.ea=function(a){var b;a instanceof Ob?(b=a.fa(),a=a.z()):(b=H(a),a=ab(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};q.N=function(){return new Ob(this)};q.M=function(a){Pb(this);var b=0,c=this.o,d=this.l,e=this.ba,f=this,g=new D;g.next=function(){for(;;){e!=f.ba&&h(Error("The map has changed since the iterator was created"));b>=c.length&&h(B);var g=c[b++];return a?g:d[g]}};return g};function V(a){this.l=new Ob;a&&this.ea(a)}function Qb(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[la]||(a[la]=++ma)):b.substr(0,1)+a}q=V.prototype;q.f=function(){return this.l.f()};q.add=function(a){this.l.set(Qb(a),a)};q.ea=function(a){a=Nb(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])};q.remove=function(a){return this.l.remove(Qb(a))};q.clear=function(){this.l.clear()};q.K=function(){return this.l.K()};q.contains=function(a){return this.l.la(Qb(a))};
    function Rb(a,b){for(var c=new V,d=Nb(b),e=0;e<d.length;e++){var f=d[e];a.contains(f)&&c.add(f)}return c}function Sb(a,b){for(var c=a.N(),d=Nb(b),e=d.length,f=0;f<e;f++)c.remove(d[f]);return c}q.z=function(){return this.l.z()};q.N=function(){return new V(this)};q.M=function(){return this.l.M(p)};function Tb(a){if(a!=l)try{a.clear()}catch(b){h(Error("Input graph is not a jsnx graph type"))}else a=new O;return a}
    function Ub(a,b,c){var d=l;if(a.hasOwnProperty("adj"))try{return d=Vb(a.adj,b,a.n()),"graph"in a&&"object"===r(a.graph)&&(d.graph=db(a.graph)),"node"in a&&"object"===r(a.node)&&(d.node=Za(a.node,function(a){return db(a)})),d}catch(e){h(Error("Input is not a correct jsnx graph"))}if("object"===r(a))try{return Vb(a,b,c)}catch(f){try{return Wb(a,b)}catch(g){h(Error("Input is not known type."))}}if(t(a))try{return Xb(a,b)}catch(m){h(Error("Input is not valid edge list"))}return d}
    w("jsnx.convert.to_networkx_graph",Ub);w("jsnx.to_networkx_graph",Ub);function Yb(a){return a.S()}w("jsnx.convert.convert_to_undirected",Yb);w("jsnx.convert_to_undirected",Yb);function Zb(a){return a.H()}w("jsnx.convert.convert_to_directed",Zb);w("jsnx.convert_to_undirected",Zb);function $b(a,b){function c(a){return 0<=ra(b,a)}var d={};b!=l?b=Q(b):(b=a,c=function(a){return b.m(a)});M(b,function(b){d[b]=sa(a.L(b),c)});return d}w("jsnx.convert.to_dict_of_lists",$b);w("jsnx.to_dict_of_lists",$b);
    function Wb(a,b){var c=Tb(b);c.j(a);if(c.n()&&!c.b()){var d={};F(a,function(a,b){A(a,function(a){a in d||c.a(b,a)});d[b]=1})}else{var e=[];F(a,function(a,b){A(a,function(a){e.push([b,a])})});c.c(e)}return c}w("jsnx.convert.from_dict_of_lists",Wb);
    w("jsnx.convert.to_dict_of_dicts",function(a,b,c){var d={};b!=l?(b=Q(b),c!=l?A(b,function(e){d[e]={};F(a.g(e),function(a,g){0<=ra(b,g)&&(d[e][g]=c)})}):A(b,function(c){d[c]={};F(a.g(c),function(a,g){0<=ra(b,g)&&(d[c][g]=a)})})):c!=l?E(a.s(),function(a,b){d[b]=Za(a,function(){return c})}):E(a.s(),function(a,b){d[b]=db(a)});return d});
    function Vb(a,b,c){var d=Tb(b),e,f;d.j(a);c?d.b()?(d.n()?(e=[],F(a,function(a,b){t(a)&&h(Error());F(a,function(a,c){F(a,function(a,d){e.push([b,c,d,a])})})})):(e=[],F(a,function(a,b){t(a)&&h(Error());F(a,function(a,c){F(a,function(a){e.push([b,c,a])})})})),d.c(e)):d.n()?(f=new V,F(a,function(a,b){t(a)&&h(Error());F(a,function(a,c){f.contains([b,c].toString())||(e=[],F(a,function(a,d){e.push([b,c,d,a])}),d.c(e),f.add([c,b].toString()))})})):(f=new V,F(a,function(a,b){t(a)&&h(Error());F(a,function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         c){f.contains([b,c].toString())||(e=[],F(a,function(a){e.push([b,c,a])}),d.c(e),f.add([c,b].toString()))})})):d.n()&&!d.b()?(f=new V,F(a,function(a,b){t(a)&&h(Error());F(a,function(a,c){f.contains([b,c].toString())||(d.a(b,c,a),f.add([c,b].toString()))})})):(e=[],F(a,function(a,b){t(a)&&h(Error());F(a,function(a,c){e.push([b,c,a])})}),d.c(e));return d}w("jsnx.convert.from_dict_of_dicts",Vb);w("jsnx.convert.to_edgelist",function(a,b){return b!=l?a.p(b,k):a.p(l,k)});
    function Xb(a,b){var c=Tb(b);c.c(a);return c}w("jsnx.convert.from_edgelist",Xb);function ac(a){this.name="JSNetworkXException";this.message=a}w("jsnx.exception.JSNetworkXException",ac);ac.prototype=Error();ac.prototype.constructor=ac;w("jsnx.JSNetworkXException",ac);function W(a){ac.call(this,a);this.name="JSNetworkXError"}qa(W,ac);w("jsnx.exception.JSNetworkXError",W);w("jsnx.JSNetworkXError",W);function bc(a){ac.call(this,a);this.name="JSNetworkXPointlessConcept"}qa(bc,ac);w("jsnx.exception.JSNetworkXPointlessConcept",bc);w("jsnx.JSNetworkXPointlessConcept",bc);
    function cc(a){ac.call(this,a);this.name="JSNetworkXAlgorithmError"}qa(cc,ac);w("jsnx.exception.JSNetworkXAlgorithmError",cc);w("jsnx.JSNetworkXAlgorithmError",cc);function dc(a){cc.call(this,a);this.name="JSNetworkXUnfeasible"}qa(dc,cc);w("jsnx.exception.JSNetworkXUnfeasible",dc);w("jsnx.JSNetworkXUnfeasible",dc);function ec(a){dc.call(this,a);this.name="JSNetworkXNoPath"}qa(ec,dc);w("jsnx.exception.JSNetworkXNoPath",ec);w("jsnx.JSNetworkXNoPath",ec);
    function fc(a){cc.call(this,a);this.name="JSNetworkXUnbounded"}qa(fc,cc);w("jsnx.exception.JSNetworkXUnbounded",fc);w("jsnx.JSNetworkXUnbounded",fc);function gc(a){var b=[];jc(new kc,a,b);return b.join("")}function kc(){this.da=aa}
    function jc(a,b,c){switch(typeof b){case "string":lc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==l){c.push("null");break}if(ga(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],jc(a,a.da?a.da.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),lc(f,c),c.push(":"),
        jc(a,a.da?a.da.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:h(Error("Unknown type: "+typeof b))}}var mc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},nc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
    function lc(a,b){b.push('"',a.replace(nc,function(a){if(a in mc)return mc[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return mc[a]=e+b.toString(16)}),'"')};function O(a,b){if(!(this instanceof O))return new O(a,b);this.graph={};this.node={};this.adj={};a!=l&&Ub(a,this);K(this.graph,b||{});this.edge=this.adj}w("jsnx.classes.Graph",O);w("jsnx.Graph",O);O.__name__="Graph";O.prototype.Fa=l;O.prototype.graph=O.prototype.Fa;O.prototype.qa=l;O.prototype.node=O.prototype.qa;O.prototype.za=l;O.prototype.adj=O.prototype.za;O.prototype.Da=l;O.prototype.edge=O.prototype.Da;
    O.prototype.name=function(a){if(s(a))this.graph.name=a.toString();else return this.graph.name||""};O.prototype.name=O.prototype.name;O.prototype.toString=function(){return this.name()};O.prototype.toString=O.prototype.toString;O.prototype.g=function(a){a in this.adj||h({name:"KeyError",message:"Graph does not contain node "+a+"."});return this.adj[a]};O.prototype.get_node=O.prototype.g;
    O.prototype.I=function(a,b){b!=l||(b={});"object"!==r(b)&&h(new W("The attr_dict argument must be an object."));a in this.adj?K(this.node[a],b||{}):(this.adj[a]={},this.node[a]=b||{})};O.prototype.add_node=O.prototype.I;O.prototype.j=function(a,b){var c,d,e,f,g;b!=l||(b={});M(a,function(a){c=!(a in this.adj);ga(a)?(d=a[0],e=a[1],d in this.adj?(g=this.node[d],K(g,b,e)):(this.adj[d]={},f=db(b),K(f,e),this.node[d]=f)):c?(this.adj[a]={},this.node[a]=db(b)):K(this.node[a],b)},this)};
    O.prototype.add_nodes_from=O.prototype.j;O.prototype.R=function(a){var b=this.adj,c;a in this.node||h(new W("The node "+a+" is not in the graph"));c=H(b[a]);I(this.node,a);A(c,function(c){I(b[c],a)});I(b,a)};O.prototype.remove_node=O.prototype.R;O.prototype.$=function(a){var b=this.adj;M(a,function(a){try{I(this.node,a),F(b[a],function(d,f){I(b[f],a)}),I(b,a)}catch(d){}},this)};O.prototype.remove_nodes_from=O.prototype.$;O.prototype.A=function(a){return a?U(this.node):kb(H(this.adj))};
    O.prototype.nodes_iter=O.prototype.A;O.prototype.nodes=function(a){return Xa(this.A(a))};O.prototype.nodes=O.prototype.nodes;O.prototype.Q=function(){return G(this.adj)};O.prototype.number_of_nodes=O.prototype.Q;O.prototype.D=function(){return G(this.adj)};O.prototype.order=O.prototype.D;O.prototype.m=function(a){return!ga(a)&&a in this.adj};O.prototype.has_node=O.prototype.m;
    O.prototype.a=function(a,b,c){c=c||{};"object"!==r(c)&&h(new W("The attr_dict argument must be an object."));a in this.adj||(this.adj[a]={},this.node[a]={});b in this.adj||(this.adj[b]={},this.node[b]={});var d=J(this.adj[a],b+"",{});K(d,c);this.adj[a][b]=d;this.adj[b][a]=d};O.prototype.add_edge=O.prototype.a;
    O.prototype.c=function(a,b){b=b||{};"object"!==r(b)&&h(new W("The attr_dict argument must be an object."));M(a,function(a){var d=nb(a),e,f,g;3===d?(e=a[0],f=a[1],g=a[2]):2===d?(e=a[0],f=a[1],g={}):h(new W("Edge tuple "+a.toString()+" must be a 2-tuple or 3-tuple."));e in this.adj||(this.adj[e]={},this.node[e]={});f in this.adj||(this.adj[f]={},this.node[f]={});a=J(this.adj[e],f,{});K(a,b,g);this.adj[e][f]=a;this.adj[f][e]=a},this)};O.prototype.add_edges_from=O.prototype.c;
    O.prototype.ya=function(a,b,c){c=c||{};u(b)||(c=b,b="weight");this.c(P(a,function(a){var c={};c[b]=a[2];s(c[b])||h(new TypeError("Values must consist of three elements: "+gc(a)));return[a[0],a[1],c]}),c)};O.prototype.add_weighted_edges_from=O.prototype.ya;O.prototype.w=function(a,b){try{I(this.adj[a],b),a!=b&&I(this.adj[b],a)}catch(c){c instanceof TypeError&&h(new W("The edge "+a+"-"+b+" is not in the graph")),h(c)}};O.prototype.remove_edge=O.prototype.w;
    O.prototype.F=function(a){M(a,function(a){var c=a[0];a=a[1];c in this.adj&&a in this.adj[c]&&(I(this.adj[c],a),c!=a&&I(this.adj[a],c))},this)};O.prototype.remove_edges_from=O.prototype.F;O.prototype.O=function(a,b){return a in this.adj&&b in this.adj[a]};O.prototype.has_edge=O.prototype.O;O.prototype.L=function(a){a in this.adj||h(new W("The node "+a+" is not in the graph."));return Q(this.adj[a])};O.prototype.neighbors=O.prototype.L;
    O.prototype.Y=function(a){a in this.adj||h(new W("The node "+a+" is not in the graph."));return kb(this.adj[a])};O.prototype.neighbors_iter=O.prototype.Y;O.prototype.p=function(a,b){return Xa(this.e(a,b))};O.prototype.edges=O.prototype.p;
    O.prototype.e=function(a,b){v(a)&&(b=a,a=l);var c={},d,e;d=a!=l?P(this.d(a),function(a){return[a,this.adj[a]]},this):U(this.adj);return b?S(d,function(a){e=a[0];var b=new D,d=U(a[1]);b.next=function(){try{return d.next()}catch(a){a===B&&(c[e]=1),h(a)}};return b},function(a){if(!(a[0]in c))return[e,a[0],a[1]]}):S(d,function(a){e=a[0];var b=new D,d=kb(a[1]);b.next=function(){try{return d.next()}catch(a){a===B&&(c[e]=1),h(a)}};return b},function(a){if(!(a in c))return[e,a]})};
    O.prototype.edges_iter=O.prototype.e;O.prototype.T=function(a,b,c){s(c)||(c=l);return a in this.adj?J(this.adj[a],b.toString(),c):c};O.prototype.get_edge_data=O.prototype.T;O.prototype.Aa=function(){return Q(P(this.s(),function(a){return H(a[1])}))};O.prototype.adjacency_list=O.prototype.Aa;O.prototype.s=function(){return U(this.adj)};O.prototype.adjacency_iter=O.prototype.s;O.prototype.t=function(a,b){return a!=l&&this.m(a)?this.u(a,b).next()[1]:gb(Xa(this.u(a,b)))};O.prototype.degree=O.prototype.t;
    O.prototype.u=function(a,b){var c;c=a!=l?P(this.d(a),function(a){return[a,this.adj[a]]},this):U(this.adj);return b?P(c,function(a){var c=a[0];a=a[1];var f=0,g;for(g in a)f+=+J(a[g],b,1);f+=+(c in a&&J(a[c],b,1));return[c,f]}):P(c,function(a){return[a[0],G(a[1])+ +(a[0]in a[1])]})};O.prototype.degree_iter=O.prototype.u;O.prototype.clear=function(){this.name("");cb(this.adj);cb(this.node);cb(this.graph)};O.prototype.clear=O.prototype.clear;O.prototype.copy=function(){return vb(this)};
    O.prototype.copy=O.prototype.copy;O.prototype.n=ba(p);O.prototype.is_multigraph=O.prototype.n;O.prototype.b=ba(p);O.prototype.is_directed=O.prototype.b;O.prototype.H=function(){var a=new X;a.name(this.name());a.j(this);a.c(function(){var a;return S(this.s(),function(c){a=c[0];return U(c[1])},function(c){return[a,c[0],T(c[1])]})}.call(this));a.graph=T(this.graph);a.node=T(this.node);return a};O.prototype.to_directed=O.prototype.H;O.prototype.S=function(){return vb(this)};
    O.prototype.to_undirected=O.prototype.S;O.prototype.B=function(a){a=this.d(a);var b=new this.constructor,c=b.adj,d=this.adj;M(a,function(a){var b={};c[a]=b;F(d[a],function(d,m){m in c&&(b[m]=d,c[m][a]=d)})});M(b,function(a){b.node[a]=this.node[a]},this);b.graph=this.graph;return b};O.prototype.subgraph=O.prototype.B;O.prototype.Ka=function(){return ta(sa(ub(this.adj),function(a){return a[0]in a[1]}),function(a){return a[0]})};O.prototype.nodes_with_selfloops=O.prototype.Ka;
    O.prototype.aa=function(a){return a?ta(sa(ub(this.adj),function(a){return a[0]in a[1]}),function(a){var c=a[0];return[c,c,a[1][c]]}):ta(sa(ub(this.adj),function(a){return a[0]in a[1]}),function(a){return[a[0],a[0]]})};O.prototype.selfloop_edges=O.prototype.aa;O.prototype.La=function(){return this.aa().length};O.prototype.number_of_selfloops=O.prototype.La;O.prototype.size=function(a){var b=L.v.apply(l,ab(this.t(l,a)))/2;return a!=l?b:Math.floor(b)};O.prototype.size=O.prototype.size;
    O.prototype.P=function(a,b){return a==l?Math.floor(this.size()):b in this.adj[a]?1:0};O.prototype.number_of_edges=O.prototype.P;O.prototype.xa=function(a,b){var c=Q(a),d=c[0],c=P(Ha(c,1),function(a){return[d,a]});this.c(c,b)};O.prototype.add_star=O.prototype.xa;O.prototype.wa=function(a,b){var c=Q(a),c=Qa(Ha(c,0,c.length-1),Ha(c,1));this.c(c,b)};O.prototype.add_path=O.prototype.wa;O.prototype.va=function(a,b){var c=Q(a),c=Qa(c,Ba(Ha(c,1),[c[0]]));this.c(c,b)};O.prototype.add_cycle=O.prototype.va;
    O.prototype.d=function(a){return a!=l?this.m(a)?kb([a.toString()]):function(a,c){var d=new D,e=S(a,function(a){if(a in c)return a.toString()});d.next=function(){try{return e.next()}catch(a){a instanceof TypeError&&h(new W("nbunch is not a node or a sequence of nodes")),h(a)}};return d}(a,this.adj):kb(this.adj)};O.prototype.nbunch_iter=O.prototype.d;function X(a,b){if(!(this instanceof X))return new X(a,b);this.graph={};this.node={};this.adj={};this.pred={};this.succ=this.adj;a!=l&&Ub(a,this);K(this.graph,b||{});this.edge=this.adj}w("jsnx.classes.DiGraph",X);w("jsnx.DiGraph",X);qa(X,O);X.__name__="DiGraph";X.prototype.I=function(a,b){b!=l||(b={});"object"!==r(b)&&h(new W("The attr_dict argument must be an object."));a in this.succ?K(this.node[a],b):(this.succ[a]={},this.pred[a]={},this.node[a]=b)};X.prototype.add_node=X.prototype.I;
    X.prototype.j=function(a,b){var c,d,e,f,g;b!=l||(b={});M(kb(a),function(a){c=!(a in this.succ);ga(a)?(d=a[0],e=a[1],d in this.succ?(g=this.node[d],K(g,b,e)):(this.succ[d]={},this.pred[d]={},f=db(b),K(f,e),this.node[d]=f)):c?(this.succ[a]={},this.pred[a]={},this.node[a]=db(b)):K(this.node[a],b)},this)};X.prototype.add_nodes_from=X.prototype.j;
    X.prototype.R=function(a){a in this.node||h(new W("The node "+a+" is not in the graph"));var b=this.succ[a];I(this.node,a);F(b,function(b,d){I(this.pred[d],a)},this);I(this.succ,a);F(this.pred[a],function(b,d){I(this.succ[d],a)},this);I(this.pred,a)};X.prototype.remove_node=X.prototype.R;
    X.prototype.$=function(a){var b;M(a,function(a){a in this.succ&&(b=this.succ[a],I(this.node,a),F(b,function(b,e){I(this.pred[e],a)},this),I(this.succ,a),F(this.pred[a],function(b,e){I(this.succ[e],a)},this),I(this.pred,a))},this)};X.prototype.remove_nodes_from=X.prototype.$;
    X.prototype.a=function(a,b,c){c=c||{};"object"!==r(c)&&h(new W("The attr_dict argument must be an object."));a in this.succ||(this.succ[a]={},this.pred[a]={},this.node[a]={});b in this.succ||(this.succ[b]={},this.pred[b]={},this.node[b]={});var d=J(this.adj[a],""+b,{});K(d,c);this.succ[a][b]=d;this.pred[b][a]=d};X.prototype.add_edge=X.prototype.a;
    X.prototype.c=function(a,b){b=b||{};"object"!==r(b)&&h(new W("The attr_dict argument must be an object."));M(a,function(a){var d=nb(a),e,f,g;3===d?(e=a[0],f=a[1],g=a[2]):2===d?(e=a[0],f=a[1],g={}):h(new W("Edge tuple "+a.toString()+" must be a 2-tuple or 3-tuple."));e in this.succ||(this.succ[e]={},this.pred[e]={},this.node[e]={});f in this.succ||(this.succ[f]={},this.pred[f]={},this.node[f]={});a=J(this.adj[e],f,{});K(a,b,g);this.succ[e][f]=a;this.pred[f][e]=a},this)};
    X.prototype.add_edges_from=X.prototype.c;X.prototype.w=function(a,b){try{I(this.succ[a],b),I(this.pred[b],a)}catch(c){c instanceof TypeError&&h(new W("The edge "+a+"-"+b+" is not in the graph")),h(c)}};X.prototype.remove_edge=X.prototype.w;X.prototype.F=function(a){M(a,function(a){var c=a[0];a=a[1];c in this.succ&&a in this.succ[c]&&(I(this.succ[c],a),I(this.pred[a],c))},this)};X.prototype.remove_edges_from=X.prototype.F;X.prototype.Ha=function(a,b){return a in this.succ&&b in this.succ[a]};
    X.prototype.has_successor=X.prototype.Ha;X.prototype.Ga=function(a,b){return a in this.pred&&b in this.pred[a]};X.prototype.has_predecessor=X.prototype.Ga;X.prototype.ia=function(a){a in this.succ||h(new W("The node "+a+" is not in the digraph."));return kb(this.succ[a])};X.prototype.successors_iter=X.prototype.ia;X.prototype.sa=function(a){a in this.pred||h(new W("The node "+a+" is not in the digraph."));return kb(this.pred[a])};X.prototype.predecessors_iter=X.prototype.sa;
    X.prototype.ta=function(a){a in this.succ||h(new W("The node "+a+" is not in the digraph."));return Q(this.succ[a])};X.prototype.successors=X.prototype.ta;X.prototype.Ma=function(a){a in this.succ||h(new W("The node "+a+" is not in the digraph."));return Q(this.pred[a])};X.prototype.predecessors=X.prototype.Ma;X.prototype.L=X.prototype.ta;X.prototype.neighbors=X.prototype.L;X.prototype.Y=X.prototype.ia;X.prototype.neighbors_iter=X.prototype.Y;
    X.prototype.e=function(a,b){v(a)&&(b=a,a=l);var c,d,e;c=a!=l?P(this.d(a),function(a){return[a,this.adj[a]]},this):ub(this.adj);return b?S(c,function(a){d=a[0];e=a[1];return U(e)},function(a){return[d,a[0],a[1]]}):S(c,function(a){d=a[0];e=a[1];return U(e)},function(a){return[d,a[0]]})};X.prototype.edges_iter=X.prototype.e;X.prototype.ca=X.prototype.e;X.prototype.out_edges_iter=X.prototype.ca;X.prototype.ga=O.prototype.p;X.prototype.out_edges=X.prototype.ga;
    X.prototype.J=function(a,b){v(a)&&(b=a,a=l);var c,d;c=a!=l?P(this.d(a),function(a){return[a,this.pred[a]]},this):ub(this.pred);return b?S(c,function(a){d=a[0];return U(a[1])},function(a){return[a[0],d,a[1]]}):S(c,function(a){d=a[0];return U(a[1])},function(a){return[a[0],d]})};X.prototype.in_edges_iter=X.prototype.J;X.prototype.V=function(a,b){return Q(this.J(a,b))};X.prototype.in_edges=X.prototype.V;
    X.prototype.u=function(a,b){var c;c=a!=l?pb(P(this.d(a),function(a){return[a,this.succ[a]]},this),P(this.d(a),function(a){return[a,this.pred[a]]},this)):pb(U(this.succ),U(this.pred));return u(b)?P(c,function(a){var c=a[0][1],f=a[1][1],g=0,m;for(m in c)g+=+J(c[m],b,1);for(m in f)g+=+J(f[m],b,1);return[a[0][0],g]}):P(c,function(a){return[a[0][0],nb(a[0][1])+nb(a[1][1])]})};X.prototype.degree_iter=X.prototype.u;
    X.prototype.U=function(a,b){var c;c=a!=l?P(this.d(a),function(a){return[a,this.pred[a]]},this):U(this.pred);return b!=l?P(c,function(a){var c=0,f=a[1],g;for(g in f)c+=+J(f[g],b,1);return[a[0],c]}):P(c,function(a){return[a[0],G(a[1])]})};X.prototype.in_degree_iter=X.prototype.U;
    X.prototype.Z=function(a,b){var c;c=a!=l?P(this.d(a),function(a){return[a,this.succ[a]]},this):U(this.succ);return b!=l?P(c,function(a){var c=0,f=a[1],g;for(g in f)c+=+J(f[g],b,1);return[a[0],c]}):P(c,function(a){return[a[0],G(a[1])]})};X.prototype.out_degree_iter=X.prototype.Z;X.prototype.na=function(a,b){return a!=l&&this.m(a)?this.U(a,b).next()[1]:gb(this.U(a,b))};X.prototype.in_degree=X.prototype.na;X.prototype.ra=function(a,b){return a!=l&&this.m(a)?this.Z(a,b).next()[1]:gb(this.Z(a,b))};
    X.prototype.out_degree=X.prototype.ra;X.prototype.clear=function(){cb(this.succ);cb(this.pred);cb(this.node);cb(this.graph)};X.prototype.clear=X.prototype.clear;X.prototype.n=ba(p);X.prototype.is_multigraph=X.prototype.n;X.prototype.b=ba(k);X.prototype.is_directed=X.prototype.b;X.prototype.H=function(){return vb(this)};X.prototype.to_directed=X.prototype.H;
    X.prototype.S=function(a){var b=new O;b.name(this.name());b.j(this);var c=this.pred,d;a?b.c(S(this.s(),function(a){d=a[0];return U(a[1])},function(a){if(a[0]in c[d])return[d,a[0],T(a[1])]})):b.c(S(this.s(),function(a){d=a[0];return U(a[1])},function(a){return[d,a[0],T(a[1])]}));b.graph=T(this.graph);b.node=T(this.node);return b};X.prototype.to_undirected=X.prototype.S;
    X.prototype.reverse=function(a){(a=!s(a)||a)?(a=new this.constructor(l,{name:"Reverse of ("+this.name()+")"}),a.j(this),a.c(P(this.e(l,k),function(a){return[a[1],a[0],T(a[2])]})),a.graph=T(this.graph),a.node=T(this.node)):(a=this.succ,this.succ=this.pred,this.pred=a,this.adj=this.succ,a=this);return a};X.prototype.reverse=X.prototype.reverse;
    X.prototype.B=function(a){a=this.d(a);var b=new this.constructor,c=b.succ,d=b.pred,e=this.succ;M(a,function(a){c[a]={};d[a]={}});M(c,function(a){var b=c[a];F(e[a],function(e,n){n in c&&(b[n]=e,d[n][a]=e)})});M(b,function(a){b.node[a]=this.node[a]},this);b.graph=this.graph;return b};X.prototype.subgraph=X.prototype.B;function oc(a,b){var c=R(a),d,e,f=new D;try{e=[c.next()]}catch(g){return g!==B&&h(g),f}f.next=function(){0===e.length&&h(B);return e.splice(0,1)[0]};return S(f,function(a){d=a;return R(b)},function(){try{var a=c.next();e.push(a);return[d,a]}catch(b){b!==B&&h(b)}})}function pc(a,b,c){c=qc(b,c);c.c(oc(b,a));return c}w("jsnx.generators.classic.full_rary_tree",pc);w("jsnx.full_rary_tree",pc);function rc(a,b,c){b=1===a?2:Math.floor((1-Math.pow(a,b+1))/(1-a));c=qc(b,c);c.c(oc(b,a));return c}
    w("jsnx.generators.classic.balanced_tree",rc);w("jsnx.balanced_tree",rc);function sc(a,b){var c=qc(a,b);c.name("complete_graph("+a+")");1<a&&c.c(c.b()?sb(R(a)):rb(R(a)));return c}w("jsnx.generators.classic.complete_graph",sc);w("jsnx.complete_graph",sc);function tc(a,b){var c=uc(a,b);c.name("cycle_graph("+a+")");1<a&&c.a(a-1,0);return c}w("jsnx.generators.classic.cycle_graph",tc);w("jsnx.cycle_graph",tc);
    function qc(a,b){a instanceof O&&(b=a,a=l);a!=l||(a=0);var c;b!=l?(c=b,c.clear()):c=new O;c.j(R(a));c.name("empty_graph("+a+")");return c}w("jsnx.generators.classic.empty_graph",qc);w("jsnx.empty_graph",qc);
    function vc(a,b,c,d){var e=qc(0,d);e.name("grid_2d_graph");d=Xa(R(a));var f=Xa(R(b));A(d,function(a){A(f,function(b){e.I([a,b].toString())})});E(R(1,a),function(a){A(f,function(b){e.a([a,b].toString(),[a-1,b].toString())})});A(d,function(a){E(R(1,b),function(b){e.a([a,b].toString(),[a,b-1].toString())})});e.b()&&(E(R(0,a-1),function(a){A(f,function(b){e.a([a,b].toString(),[a+1,b].toString())})}),A(d,function(a){E(R(0,b-1),function(b){e.a([a,b].toString(),[a,b+1].toString())})}));c&&(2<b&&(A(d,function(a){e.a([a,
        0].toString(),[a,b-1].toString())}),e.b()&&A(d,function(a){e.a([a,b-1].toString(),[a,0].toString())})),2<a&&(A(f,function(b){e.a([0,b].toString(),[a-1,b].toString())}),e.b()&&A(f,function(b){e.a([a-1,b].toString(),[0,b].toString())})),e.name("periodic_grid_2d_graph("+a+","+b+")"));return e}w("jsnx.generators.classic.grid_2d_graph",vc);w("jsnx.grid_2d_graph",vc);function wc(a){a=qc(0,a);a.name("null_graph()");return a}w("jsnx.generators.classic.null_graph",wc);w("jsnx.null_graph",wc);
    function uc(a,b){var c=qc(a,b);c.name("path_graph("+a+")");c.c(Ua(R(a-1),function(a){return[a,a+1]}));return c}w("jsnx.generators.classic.path_graph",uc);w("jsnx.path_graph",uc);function xc(a){a=qc(1,a);a.name("null_graph()");return a}w("jsnx.generators.classic.trivial_graph",xc);w("jsnx.trivial_graph",xc);function yc(a,b,c){c!=l||(c=p);var d=qc(a);d.name("fast_gnp_random_graph("+a+","+b+")");if(0>=b||1<=b)return zc(a,b,c);var e=1,f=-1;b=Math.log(1-b);if(c)for(d=new X(d);e<a;){c=Math.log(1-Math.random());f=f+1+Math.floor(c/b);for(e===f&&(f+=1);f>=a&&e<a;)f-=a,e+=1,e==f&&(f+=1);e<a&&d.a(e,f)}else for(;e<a;){c=Math.log(1-Math.random());for(f=f+1+Math.floor(c/b);f>=e&&e<a;)f-=e,e+=1;e<a&&d.a(e,f)}return d}w("jsnx.generators.random_graphs.fast_gnp_random_graph",yc);w("jsnx.fast_gnp_random_graph",yc);
    function zc(a,b,c){var d;d=c?new X:new O;d.j(R(a));d.name("gnp_random_graph("+a+","+b+")");if(0>=b)return d;if(1<=b)return sc(a,d);a=d.b()?sb(R(a)):rb(R(a));E(a,function(a){Math.random()<b&&d.a(a[0],a[1])});return d}w("jsnx.generators.random_graphs.gnp_random_graph",zc);w("jsnx.gnp_random_graph",zc);w("jsnx.binomial_graph",zc);w("jsnx.erdos_renyi_graph",zc);function Ac(a,b){Bc(a)||h(new W("Invalid degree sequence"));b!=l&&(b.b()&&h(new W("Directed Graph not supported")),b.n()&&h(new W("Havel-Hakimi requires simple graph")));var c=a.length,d=qc(c,b);if(0===c||0===Math.max.apply(l,a))return d;for(c=Xa(P(d,function(b){return[a[b],b]}));0<c.length;){c.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:+a[1]-+b[1]});if(0>c[0][0])return p;var e=c.pop();if(0===e[0])break;if(e[0]>c.length)return p;for(var f=c.length,g=f-e[0];g<f;g++)d.a(e[1],c[g][1]),c[g][0]-=
        1}d.name("havel_hakimi_graph "+d.D()+" nodes "+d.size()+" edges");return d}w("jsnx.generators.degree_seq.havel_hakimi_graph",Ac);w("jsnx.havel_hakimi_graph",Ac);function Cc(){var a=new O;a.j(R(34));a.name("Zachary's Karate Club");var b=0;A("0 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 0 1 0 1 0 1 0 0 0 0 0 0 0 0 0 1 0 0;1 0 1 1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 0;1 1 0 1 0 0 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 1 0;1 1 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 1 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 1 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0 0 0 0 1 1;0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 1 0 0 0 1 1;0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 1 0 1 0 1 1 0 0 0 0 0 1 1 1 0 1;0 0 0 0 0 0 0 0 1 1 0 0 0 1 1 1 0 0 1 1 1 0 1 1 0 0 1 1 1 1 1 1 1 0".split(";"),
        function(c){M(c.split(" "),function(c,e){"1"===c&&a.a(b,e)});b+=1});return a}w("jsnx.generators.social.karate_club_graph",Cc);w("jsnx.karate_club_graph",Cc);
    function Dc(){var a=new O;a.j("Evelyn Jefferson;Laura Mandeville;Theresa Anderson;Brenda Rogers;Charlotte McDowd;Frances Anderson;Eleanor Nye;Pearl Oglethorpe;Ruth DeSand;Verne Sanderson;Myra Liddel;Katherina Rogers;Sylvia Avondale;Nora Fayette;Helen Lloyd;Dorothy Murchison;Olivia Carleton;Flora Price".split(";"),{Ca:0});a.j("E1 E2 E3 E4 E5 E6 E7 E8 E9 E10 E11 E12 E13 E14".split(" "),{Ca:1});a.c([["Evelyn Jefferson","E1"],["Evelyn Jefferson","E2"],["Evelyn Jefferson","E3"],["Evelyn Jefferson","E4"],
        ["Evelyn Jefferson","E5"],["Evelyn Jefferson","E6"],["Evelyn Jefferson","E8"],["Evelyn Jefferson","E9"],["Laura Mandeville","E1"],["Laura Mandeville","E2"],["Laura Mandeville","E3"],["Laura Mandeville","E5"],["Laura Mandeville","E6"],["Laura Mandeville","E7"],["Laura Mandeville","E8"],["Theresa Anderson","E2"],["Theresa Anderson","E3"],["Theresa Anderson","E4"],["Theresa Anderson","E5"],["Theresa Anderson","E6"],["Theresa Anderson","E7"],["Theresa Anderson","E8"],["Theresa Anderson","E9"],["Brenda Rogers",
            "E1"],["Brenda Rogers","E3"],["Brenda Rogers","E4"],["Brenda Rogers","E5"],["Brenda Rogers","E6"],["Brenda Rogers","E7"],["Brenda Rogers","E8"],["Charlotte McDowd","E3"],["Charlotte McDowd","E4"],["Charlotte McDowd","E5"],["Charlotte McDowd","E7"],["Frances Anderson","E3"],["Frances Anderson","E5"],["Frances Anderson","E6"],["Frances Anderson","E8"],["Eleanor Nye","E5"],["Eleanor Nye","E6"],["Eleanor Nye","E7"],["Eleanor Nye","E8"],["Pearl Oglethorpe","E6"],["Pearl Oglethorpe","E8"],["Pearl Oglethorpe",
            "E9"],["Ruth DeSand","E5"],["Ruth DeSand","E7"],["Ruth DeSand","E8"],["Ruth DeSand","E9"],["Verne Sanderson","E7"],["Verne Sanderson","E8"],["Verne Sanderson","E9"],["Verne Sanderson","E12"],["Myra Liddel","E8"],["Myra Liddel","E9"],["Myra Liddel","E10"],["Myra Liddel","E12"],["Katherina Rogers","E8"],["Katherina Rogers","E9"],["Katherina Rogers","E10"],["Katherina Rogers","E12"],["Katherina Rogers","E13"],["Katherina Rogers","E14"],["Sylvia Avondale","E7"],["Sylvia Avondale","E8"],["Sylvia Avondale",
            "E9"],["Sylvia Avondale","E10"],["Sylvia Avondale","E12"],["Sylvia Avondale","E13"],["Sylvia Avondale","E14"],["Nora Fayette","E6"],["Nora Fayette","E7"],["Nora Fayette","E9"],["Nora Fayette","E10"],["Nora Fayette","E11"],["Nora Fayette","E12"],["Nora Fayette","E13"],["Nora Fayette","E14"],["Helen Lloyd","E7"],["Helen Lloyd","E8"],["Helen Lloyd","E10"],["Helen Lloyd","E11"],["Helen Lloyd","E12"],["Dorothy Murchison","E8"],["Dorothy Murchison","E9"],["Olivia Carleton","E9"],["Olivia Carleton","E11"],
        ["Flora Price","E9"],["Flora Price","E11"]]);return a}w("jsnx.generators.social.davis_southern_women_graph",Dc);w("jsnx.davis_southern_women_graph",Dc);
    function Ec(){var a=new O;a.a("Acciaiuoli","Medici");a.a("Castellani","Peruzzi");a.a("Castellani","Strozzi");a.a("Castellani","Barbadori");a.a("Medici","Barbadori");a.a("Medici","Ridolfi");a.a("Medici","Tornabuoni");a.a("Medici","Albizzi");a.a("Medici","Salviati");a.a("Salviati","Pazzi");a.a("Peruzzi","Strozzi");a.a("Peruzzi","Bischeri");a.a("Strozzi","Ridolfi");a.a("Strozzi","Bischeri");a.a("Ridolfi","Tornabuoni");a.a("Tornabuoni","Guadagni");a.a("Albizzi","Ginori");a.a("Albizzi","Guadagni");a.a("Bischeri",
        "Guadagni");a.a("Guadagni","Lamberteschi");return a}w("jsnx.generators.social.florentine_families_graph",Ec);w("jsnx.florentine_families_graph",Ec);function Fc(a,b){b!=l&&b.b()&&h(new W("Directed Graph not supported"));return Gc(a,b)}function Gc(a,b){var c=a[0],d=a[1],e=a[2],f=qc(e,b),g=f.nodes();if("adjacencylist"==c){var m=a[3];m.length!=e&&h(new W("invalid graph_description"));M(g,function(a){M(m[a],function(b){f.a(b-1,a)})})}else"edgelist"==c&&M(a[3],function(a){var b=a[0]-1;a=a[1]-1;(0>b||b>e-1||0>a||a>e-1)&&h(new W("invalid graph_description"));f.a(b,a)});f.name=d;return f}w("jsnx.generators.small.make_small_graph",Gc);
    w("jsnx.make_small_graph",Gc);function Hc(a){return Fc(["adjacencylist","Bull Graph",5,[[2,3],[1,3,4],[1,2,5],[2],[3]]],a)}w("jsnx.generators.small.bull_graph",Hc);w("jsnx.bull_graph",Hc);function Ic(a){return Fc(["adjacencylist","Krackhardt Kite Social Network",10,[[2,3,4,6],[1,4,5,7],[1,4,6],[1,2,3,5,6,7],[2,4,7],[1,3,4,7,8],[2,4,5,6,8],[6,7,9],[8,10],[9]]],a)}w("jsnx.generators.small.krackhardt_kite_graph",Ic);w("jsnx.krackhardt_kite_graph",Ic);function Jc(a,b){a.b()&&h(new W("triangles() is not defined for directed graphs."));if(b!=l&&a.m(b))return Math.floor(Kc(a,b).next()[2]/2);var c={};E(Kc(a,b),function(a){c[a[0]]=Math.floor(a[2]/2)});return c}w("jsnx.algorithms.cluster.triangles",Jc);w("jsnx.triangles",Jc);
    function Kc(a,b){a.n()&&h(new W("Not defined for multigraphs."));var c;c=b!=l?S(a.d(b),function(b){return[b,a.g(b)]}):U(a.adj);return Ua(c,function(b){var c=new V(H(b[1])),f=0;c.remove(b[0]);E(c,function(b){var d=new V(H(a.g(b)));d.remove(b);f+=Rb(c,d).f()});return[b[0],c.f(),f]})}
    function Lc(a,b,c){a.n()&&h(new W("Not defined for multigraphs."));u(c)||(c="weight");var d;d=0===a.p().length?1:qb(a.p(k),function(a){return J(a[2],c,1)});b=b!=l?S(a.d(b),function(b){return[b,a.g(b)]}):U(a.adj);return Ua(b,function(b){var f=b[0],g=new V(H(b[1]));g.remove(f);var m=0,n=new V;E(g,function(b){var e=J(a.g(f)[b],c,1)/d;n.add(b);var C=Sb(new V(H(a.g(b))),n);E(Rb(g,C),function(g){var n=J(a.g(b)[g],c,1)/d;g=J(a.g(f)[g],c,1)/d;m+=Math.pow(e*n*g,1/3)})});return[f,g.f(),2*m]})}
    function Mc(a,b,c,d){2===arguments.length?u(b)?(c=b,b=l):v(b)&&(d=b,b=l):3===arguments.length&&v(c)&&(d=c,c=l);d!=l||(d=k);var e=ab(Nc(a,b,c));d||(e=sa(e,function(a){return 0<a}));return L.v.apply(L,e)/e.length}w("jsnx.algorithms.cluster.average_clustering",Mc);w("jsnx.average_clustering",Mc);
    function Nc(a,b,c){a.b()&&h(new W("Clustering algorithms are not defined for directed graphs."));c=c!=l?Lc(a,b,c):Kc(a,b);var d={};E(c,function(a){d[a[0]]=0===a[2]?0:a[2]/(a[1]*(a[1]-1))});return b!=l&&a.m(b)?ab(d)[0]:d}w("jsnx.algorithms.cluster.clustering",Nc);w("jsnx.clustering",Nc);function Oc(a){var b=0,c=0;E(Kc(a),function(a){c+=a[1]*(a[1]-1);b+=a[2]});return 0===b?0:b/c}w("jsnx.algorithms.cluster.transitivity",Oc);w("jsnx.transitivity",Oc);
    function Pc(a,b){var c=b==l?kb(a):a.d(b),d={};E(c,function(b){var c=d[b]=0;E(rb(H(a.g(b))),function(g){var m=g[0];g=g[1];var n=Rb(new V(H(a.g(m))),H(a.g(g)));n.remove(b);n=n.f();d[b]+=n;var x=n+1,y=a.g(m);g in y&&(x+=1);c+=(G(a.g(m))-x)*(G(a.g(g))-x)+n});0<c&&(d[b]/=c)});return b!=l&&a.m(b)?ab(d)[0]:d}w("jsnx.algorithms.cluster.square_clustering",Pc);w("jsnx.square_clustering",Pc);function Qc(a){var b=-1,c={},d=new V;E(a.s(),function(a){var e=new V(H(a[1]));e.remove(a[0]);var f=e.f();f>b?(c[a[0]]=d=e,b=f):c[a[0]]=e});var e=new V(H(c)),f=Sb(e,d),g=new V,m=[],n=[];a=new D;a.next=function(){0===f.f()&&0===m.length&&h(B);var a,y;if(0<f.f())a=Ta(f).next(),f.remove(a);else{var C=m.pop();e=C[0];g=C[1];f=C[2];n.pop();return this.next()}n.push(a);e.remove(a);g.add(a);var N=c[a],C=Rb(e,N),N=Rb(g,N);if(0===C.f()&&(0===N.f()&&(y=Fa(n)),n.pop(),y))return y;if(0===N.f()&&1===C.f())return y=
        Ba(n,C.z()),n.pop(),y;var Ja=C.f(),ca=-1,da,Y;for(y=Ta(N);(a=Ya(y,l))!==l&&!(a=Rb(C,c[a]),Y=a.f(),Y>ca&&(da=a,ca=Y,ca===Ja)););if(ca===Ja)return n.pop(),this.next();b=-1;for(y=Ta(C);(a=Ya(y,l))!==l&&!(a=Rb(C,c[a]),Y=a.f(),Y>b&&(d=a,b=Y,b===Ja-1)););ca>b&&(d=da);m.push([e,g,f]);e=C;g=N;f=Sb(e,d);return this.next()};return a}w("jsnx.algorithms.clique.find_cliques",Qc);w("jsnx.find_cliques",Qc);
    function Rc(a){var b={};E(a.s(),function(a){var c=new V(H(a[1]));c.remove(a[0]);b[a[0]]=c});if(bb(b))return[];a=new V(H(b));var c=new V,d=[];Sc(b,a,c,[],d);return d}w("jsnx.algorithms.clique.find_cliques_recursive",Rc);w("jsnx.find_cliques_recursive",Rc);
    function Sc(a,b,c,d,e){var f=-1,g=b.f(),m,n,x,y;for(n=Ta(c);(x=Ya(n,l))!==l;)if(x=Rb(b,a[x]),y=x.f(),y>f&&(m=x,f=y,y===g))return;E(b,function(c){c=Rb(b,a[c]);var d=c.f();d>f&&(m=c,f=d)});g=Sb(b,m);E(g,function(f){b.remove(f);d.push(f);var g=a[f];f=Rb(b,g);g=Rb(c,g);f.K()&&g.K()?e.push(Fa(d)):g.K()&&1===f.f()?e.push(Ba(d,f.z())):Sc(a,f,g,d,e);c.add(d.pop())})}function Tc(a,b){b!=l||(b=Qc(a));var c=0;M(b,function(a){c=a.length>c?a.length:c});return c}w("jsnx.algorithms.clique.graph_clique_number",Tc);
    w("jsnx.graph_clique_number",Tc);function Uc(a,b){b!=l||(b=Qc(a));return Q(b).length}w("jsnx.algorithms.clique.graph_number_of_cliques",Uc);w("jsnx.graph_number_of_cliques",Uc);function Vc(a,b,c){c=c!=l?Xa(c):Xa(Qc(a));b!=l||(b=a.nodes());var d;if(ga(b))d={},A(b,function(a){d[a]=sa(c,function(b){return 0<=ra(b,a)||0<=ra(b,a+"")}).length});else{var e=b;d=sa(c,function(a){return 0<=ra(a,e)||0<=ra(a,e+"")}).length}return d}w("jsnx.algorithms.clique.number_of_cliques",Vc);w("jsnx.number_of_cliques",Vc);function Wc(a,b){if(a.D()!=b.D())return p;var c,d=a.t(),e=Jc(a),f=Vc(a),g=[];for(c in d)g.push([d[c],e[c],f[c]]);g.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]!==b[1]?a[1]-b[1]:a[2]-b[2]});var d=b.t(),e=Jc(b),f=Vc(b),m=[];for(c in d)m.push([d[c],e[c],f[c]]);m.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]!==b[1]?a[1]-b[1]:a[2]-b[2]});return!Ia(g,m,function(a,b){return Ia(a,b)})?p:k}w("jsnx.algorithms.isomorphism.could_be_isomorphic",Wc);w("jsnx.could_be_isomorphic",Wc);
    function Xc(a,b){if(a.D()!=b.D())return p;var c,d=a.t(),e=Jc(a),f=[];for(c in d)f.push([d[c],e[c]]);f.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]-b[1]});var d=b.t(),e=Jc(b),g=[];for(c in d)g.push([d[c],e[c]]);g.sort(function(a,b){return a[0]!==b[0]?a[0]-b[0]:a[1]-b[1]});return!Ia(f,g,function(a,b){return Ia(a,b)})?p:k}w("jsnx.algorithms.isomorphism.fast_could_be_isomorphic",Xc);w("jsnx.fast_could_be_isomorphic",Xc);
    function Yc(a,b){if(a.D()!=b.D())return p;var c=ab(a.t());c.sort();var d=ab(b.t());d.sort();return!Ia(c,d)?p:k}w("jsnx.algorithms.isomorphism.faster_could_be_isomorphic",Yc);w("jsnx.faster_could_be_isomorphic",Yc);function Zc(){}Zc.ma=function(){return Zc.oa?Zc.oa:Zc.oa=new Zc};Zc.prototype.Ja=0;Zc.ma();function $c(a){if(!t(a))return p;for(var b=0,c=a.length;b<c;b++)if(window.isNaN(a[b]))return p;return k}w("jsnx.utils.misc.is_list_of_ints",$c);w("jsnx.utils.is_list_of_ints",$c);function ad(a){var b=0;return Ua(a,function(a){return b+=a})}w("jsnx.utils.misc.cumulative_sum",ad);w("jsnx.utils.cumulative_sum",ad);function bd(){return":"+(Zc.ma().Ja++).toString(36)}w("jsnx.utils.misc.generate_unique_node",bd);w("jsnx.utils.generate_unique_node",bd);function Bc(a,b){if("eg"===b)return cd(a);if(b==l||"hh"===b)return dd(a);h(new ac("`opt_method` must be 'eg' or 'hh'"))}w("jsnx.algorithms.graphical.is_valid_degree_sequence",Bc);w("jsnx.is_valid_degree_sequence",Bc);function dd(a){if(0===a.length)return k;if(!$c(a)||0>Math.min.apply(l,a)||0!==L.v.apply(l,a)%2)return p;for(a=Fa(a);0<a.length;){z.sort.call(a,Oa);if(0>a[0])break;var b=a.pop();if(0===b)return k;if(b>a.length)break;for(var c=a.length-1,b=a.length-(b+1);c>b;c--)a[c]-=1}return p}
    w("jsnx.algorithms.graphical.is_valid_degree_sequence_havel_hakimi",dd);w("jsnx.is_valid_degree_sequence_havel_hakimi",dd);
    function cd(a){if(0===a.length)return k;if(!$c(a)||0>Math.min.apply(l,a)||0!==L.v.apply(l,a)%2)return p;var b=a.length,c=Fa(a).sort(function(a,b){return b-a}),d=[],e;e=1;for(a=c.length;e<a;e++)c[e]<c[e-1]&&d.push(e);var f,g;e=0;for(a=d.length;e<a;e++)if(f=L.v.apply(l,c.slice(0,d[e])),g=d[e]*(d[e]-1)+L.v.apply(l,Xa(Ua(R(d[e],b),function(a){return Math.min(d[e],c[a])}))),f>g)return p;return k}w("jsnx.algorithms.graphical.is_valid_degree_sequence_erdos_gallai",cd);
    w("jsnx.is_valid_degree_sequence_erdos_gallai",cd);function ed(a){try{return fd(a),k}catch(b){if(b instanceof dc)return p;h(b)}}w("jsnx.algorithms.dag.is_directed_acyclic_graph",ed);w("jsnx.is_directed_acyclic_graph",ed);
    function fd(a,b){a.b()||h(new W("Topological sort not defined on undirected graphs."));var c={},d=[],e={};b!=l||(b=a.A());M(b,function(b){if(!(b in e))for(b=[b];0<b.length;){var g=b[b.length-1];if(g in e)b.pop();else{c[g]=k;var m=[];F(a.g(g),function(a,b){b in e||(b in c&&h(new dc("Graph contains a cycle")),m.push(b))});0<m.length?b.push.apply(b,m):(e[g]=k,Ga(d,aa,0,g.toString()))}}});return d}w("jsnx.algorithms.dag.topological_sort",fd);w("jsnx.topological_sort",fd);
    function gd(a,b){function c(a,b,d,e){b.add(e);F(a.g(e),function(e,n){if(b.contains(n))b.contains(n)&&!(0<=ra(d,n))&&h(new dc("Graph contains a cycle"));else if(!c(a,b,d,n))return p});Ga(d,aa,0,e.toString());return k}a.b()||h(new W("Topological sort not defined on undirected graphs."));var d=new V,e=[];b!=l||(b=a.A());M(b,function(b){!(0<=ra(e,b))&&!c(a,d,e,b)&&h(new dc("Graph contains a cycle"))});return e}w("jsnx.algorithms.dag.topological_sort_recursive",gd);
    w("jsnx.topological_sort_recursive",gd);var id=function hd(b){b.b()||h(new W("is_aperiodic not defined for undirected graphs."));var c=b.A().next(),d={};d[c]=0;for(var c=[c],e=0,f=1;0<c.length;){var g=[];A(c,function(c){F(b.g(c),function(b,x){x in d?e=xb(e,d[c]-d[x]+1):(g.push(x),d[x]=f)})});c=g;f+=1}return nb(d)===nb(b)?1===e:1===e&&hd(b.B(Sb(new V(b.nodes()),H(d))))};w("jsnx.algorithms.dag.is_aperiodic",id);w("jsnx.is_aperiodic",id);function jd(a,b){this.pa=a;this.ja=b}jd.prototype.getKey=function(){return this.pa};jd.prototype.N=function(){return new jd(this.pa,this.ja)};function kd(a){this.q=[];if(a)a:{var b,c;if(a instanceof kd){if(b=a.fa(),c=a.z(),0>=a.f()){a=this.q;for(var d=0;d<b.length;d++)a.push(new jd(b[d],c[d]));break a}}else b=H(a),c=ab(a);for(d=0;d<b.length;d++)ld(this,b[d],c[d])}}function ld(a,b,c){var d=a.q;d.push(new jd(b,c));b=d.length-1;a=a.q;for(c=a[b];0<b;)if(d=b-1>>1,a[d].getKey()>c.getKey())a[b]=a[d],b=d;else break;a[b]=c}q=kd.prototype;
    q.remove=function(){var a=this.q,b=a.length,c=a[0];if(!(0>=b)){if(1==b)xa(a);else{a[0]=a.pop();for(var a=0,b=this.q,d=b.length,e=b[a];a<d>>1;){var f=2*a+1,g=2*a+2,f=g<d&&b[g].getKey()<b[f].getKey()?g:f;if(b[f].getKey()>e.getKey())break;b[a]=b[f];a=f}b[a]=e}return c.ja}};q.z=function(){for(var a=this.q,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].ja);return b};q.fa=function(){for(var a=this.q,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getKey());return b};
    q.la=function(a){return va(this.q,function(b){return b.getKey()==a})};q.N=function(){return new kd(this)};q.f=function(){return this.q.length};q.K=function(){return 0==this.q.length};q.clear=function(){xa(this.q)};function md(){kd.call(this)}qa(md,kd);function nd(a,b){ld(a,0,b)};function od(a,b){b!=l||(b={});"object"!==r(b)&&h(new W("The arg_dict argument must be an object."));var c=lb(a),d=a.nodes();"k"in b&&(Ra(d),d=d.slice(0,b.k));M(d.sort(),function(d){var f=[],f=J(b,"weight",l)===l?pd(a,d):qd(a,d,b.weight),g=f[0],m=f[1],f=f[2];c=J(b,"endpoints",p)?rd(c,g,m,f,d):sd(c,g,m,f,d)});return c=td(c,nb(a),J(b,"normalized",k),a.b(),J(b,"k",l))}w("jsnx.algorithms.centrality.betweenness.betweenness_centrality",od);w("jsnx.betweenness_centrality",od);
    function ud(a,b){b!=l||(b={});"object"!==r(b)&&h(new W("The arg_dict argument must be an object."));var c=lb(a);tb(c,lb(a.p()));var d=a.nodes();M(d.sort(),function(d){var f=[],f=J(b,"weight",l)===l?pd(a,d):qd(a,d,b.weight);c=vd(c,f[0],f[1],f[2],d)});M(d.sort(),function(a){delete c[a]});return c=wd(c,nb(a),J(b,"normalized",k),a.b())}w("jsnx.algorithms.centrality.betweenness.edge_betweenness_centrality",ud);w("jsnx.edge_betweenness_centrality",ud);
    function pd(a,b){var c=[],d={};M(a.nodes(),function(a){d[a]=[]});var e=lb(a),f={};e[b]=1;f[b]=0;for(var g=[b];0<g.length;){var m=g.shift();c.push(m);var n=f[m],x=e[m];M(a.L(m),function(a){a in f||(g.push(a),f[a]=n+1);f[a]==n+1&&(e[a]+=x,d[a].push(m))})}return[c,d,e]}
    function qd(a,b,c){var d=[],e={};M(a.nodes(),function(a){e[a]=[]});var f=lb(a),g={};f[b]=1;var m={};m[b]=0;var n=new md;for(nd(n,[b,b]);!n.K();){var x=n.q[0]&&n.q[0].getKey();b=n.remove();var y=b[0],C=b[1];C in g||(f[C]+=f[y],d.push(C),g[C]=x,M(a.e(C,k),function(a){var b=a[1];a=x+J(a[2],c,1);!(b in g)&&(!(b in m)||a<m[b])?(m[b]=a,ld(n,a,[C,b]),f[b]=0,e[b]=[C]):a==m[b]&&(f[b]+=f[C],e[b].push(C))}))}return[d,e,f]}
    function sd(a,b,c,d,e){for(var f=lb(b);0<b.length;){var g=b.pop(),m=(1+f[g])/d[g];M(c[g],function(a){f[a]+=d[a]*m});g!=e&&(a[g]+=f[g])}return a}function rd(a,b,c,d,e){a[e]+=b.length-1;for(var f=lb(b);0<b.length;){var g=b.pop(),m=(1+f[g])/d[g];M(c[g],function(a){f[a]+=d[a]*m});g!=e&&(a[g]+=f[g]+1)}return a}function vd(a,b,c,d,e){for(var f=lb(b);0<b.length;){var g=b.pop(),m=(1+f[g])/d[g];M(c[g],function(b){var c=d[b]*m;[b,g]in a?a[[b,g]]+=c:a[[g,b]]+=c;f[b]+=c});g!=e&&(a[g]+=f[g])}return a}
    function td(a,b,c,d,e){var f;v(c)&&c?2<b&&(f=1/((b-1)*(b-2))):v(d)&&!d&&(f=0.5);if(s(f)){e!=l&&(f=f*b/e);for(var g in a)a[g]*=f}return a}function wd(a,b,c,d){var e;v(c)&&c?1<b&&(e=1/(b*(b-1))):v(d)&&!d&&(e=0.5);if(s(e))for(var f in a)a[f]*=e;return a};function xd(a,b,c){var d={},e=0,f={};for(f[b]=1;0<G(f);){b=f;f={};F(b,function(b,c){c in d||(d[c]=e,K(f,a.g(c)))});if(ia(c)&&c<=e)break;e+=1}return d}w("jsnx.algorithms.shortest_paths.unweighted.single_source_shortest_path_length",xd);w("jsnx.single_source_shortest_path_length",xd);function yd(a,b){var c={};M(a,function(d){c[d]=xd(a,d,b)});return c}w("jsnx.algorithms.shortest_paths.unweighted.all_pairs_shortest_path_length",yd);w("jsnx.all_pairs_shortest_path_length",yd);
    function zd(a,b,c){b=b.toString();c=c.toString();c=Ad(a,b,c);a=c[0];b=c[1];c=c[2];for(var d=[];c!=l;)d.push(c),c=b[c];for(c=a[d[0]];c!=l;)d.unshift(c),c=a[c];return d}w("jsnx.algorithms.shortest_paths.unweighted.bidirectional_shortest_path",zd);w("jsnx.bidirectional_shortest_path",zd);
    function Ad(a,b,c){(!s(b)||!s(c))&&h(new ac("Bidirectional shortest path called without source or target"));var d={},e={};if(c===b)return d[c]=l,e[b]=l,[d,e,b];var f,g;a.b()?(f=a.sa,g=a.ia):g=f=a.Y;d[b]=l;e[c]=l;for(var m=[b],n=[c],x,y;0<m.length&&0<n.length&&!y;)m.length<=n.length?(x=m,m=[],A(x,function(b){y||E(g.call(a,b),function(a){y||(a in d||(m.push(a),d[a]=b),a in e&&(y=[d,e,a]))})})):(x=n,n=[],A(x,function(b){y||E(f.call(a,b),function(a){y||(a in e||(e[a]=b,n.push(a)),a in d&&(y=[d,e,a]))})}));
        if(y)return y;h(new ec("No path between "+b+" and "+c+"."))}function Bd(a,b,c){b=b.toString();var d=0,e={};e[b]=1;var f={};f[b]=[b];if(0===c)return f;for(;0<G(e)&&!(b=e,e={},F(b,function(b,c){F(a.g(c),function(a,b){b in f||(f[b]=f[c].concat([b]),e[b]=1)})}),d+=1,s(c)&&c<=d););return f}w("jsnx.algorithms.shortest_paths.unweighted.single_source_shortest_path",Bd);w("jsnx.single_source_shortest_path",Bd);function Cd(a,b){var c={};M(a,function(d){c[d]=Bd(a,d,b)});return c}
    w("jsnx.algorithms.shortest_paths.unweighted.all_pairs_shortest_path",Cd);w("jsnx.all_pairs_shortest_path",Cd);function Dd(a,b,c,d,e){b=b.toString();var f=0,g=[b],m={};m[b]=f;var n={};for(n[b]=[];0<g.length&&!(f+=1,b=g,g=[],A(b,function(b){F(a.g(b),function(a,c){c in m?m[c]===f&&n[c].push(b):(n[c]=[b],m[c]=f,g.push(c))})}),d!=l&&d<=f););return c!=l?(c=c.toString(),e?!(c in n)?[[],-1]:[n[c],m[c]]:!(c in n)?[]:n[c]):e?[n,m]:n}w("jsnx.algorithms.shortest_paths.unweighted.predecessor",Dd);
    w("jsnx.predecessor",Dd);function Ed(a,b,c){var d=b;ja(b)&&(d={},E(a.A(),function(a){d[a]=b(a)}));return!s(c)||c?Fd(a,d):Gd(a,d)}w("jsnx.relabel.relabel_nodes",Ed);w("jsnx.relabel_nodes",Ed);
    function Gd(a,b){var c=new V(H(b)),d;if(0<Rb(c,b).f()){c=new X(ub(b));c.F(c.aa());try{d=fd(c)}catch(e){e instanceof dc&&h(new dc("The node label sets are overlapping and no ordering can resolve the mapping. Use copy=True."))}d.reverse()}else d=c;var f=a.n(),g=a.b(),m;E(d,function(c){var d;c in b&&(d=b[c],a.m(c)||h(new W("Node "+c+" is not in the graph.")),a.I(d,a.node[c]),f?(m=ta(a.p(c,k,k),function(a){return[d,a[1],a[2],a[3]]}),g&&(m=Ba(m,ta(a.V(c,k,k),function(a){return[a[0],d,a[2],a[3]]})))):(m=
        ta(a.p(c,k),function(a){return[d,a[1],a[2]]}),g&&(m=Ba(m,ta(a.V(c,k),function(a){return[a[0],d,a[2]]})))),a.R(c),a.c(m))});return a}
    function Fd(a,b){var c=new a.constructor;c.name("("+a.name()+")");a.n()?c.c(Ua(a.e(l,k,k),function(a){return[J(b,a[0],a[0]),J(b,a[1],a[1]),a[2],db(a[3])]})):c.c(Ua(a.e(l,k),function(a){return[J(b,a[0],a[0]),J(b,a[1],a[1]),db(a[2])]}));c.j(Ua(kb(a),function(a){return J(b,a,a)}));var d={},e;for(e in a.node)d[J(b,e,e)]=db(a.node[e]);K(c.node,d);K(c.graph,db(a.graph));return c}
    function Hd(a,b,c,d){3===arguments.length&&v(c)?(d=c,c=l):2===arguments.length&&(v(b)?(d=b,b=l):u(b)&&(c=b,b=l));b!=l||(b=0);c!=l||(c="default");d!=l||(d=k);var e={},f,g,m,n;if("default"===c){f=a.nodes();g=0;m=b;for(n=f.length;g<n;g++,m++)e[f[g]]=m}else if("sorted"===c){f=a.nodes();f.sort();g=0;m=b;for(n=f.length;g<n;g++,m++)e[f[g]]=m}else if("increasing degree"===c){f=Xa(a.u());f.sort(function(a,b){return a[1]-b[1]});g=0;m=b;for(n=f.length;g<n;g++,m++)e[f[g][0]]=m}else if("decreasing degree"===c){f=
        Xa(a.u());f.sort(function(a,b){return b[1]-a[1]});g=0;m=b;for(n=f.length;g<n;g++,m++)e[f[g][0]]=m}else h(new W("Unkown node ordering: "+c));g=Ed(a,e);g.name("("+a.name()+")_with_int_labels");d||(g.node_labels=e);return g}w("jsnx.relabel.convert_node_labels_to_integers",Hd);w("jsnx.convert_node_labels_to_integers",Hd);function Z(a,b){if(!(this instanceof Z))return new Z(a,b);O.call(this,a,b)}qa(Z,O);w("jsnx.classes.MultiGraph",Z);w("jsnx.MultiGraph",Z);Z.__name__="MultiGraph";
    Z.prototype.a=function(a,b,c,d){var e,f;c!=l&&(!u(c)&&!ia(c))&&(d=c,c=l);d=d||{};"object"!==r(d)&&h(new W("The attr_dict argument must be an object."));a in this.adj||(this.adj[a]={},this.node[a]={});b in this.adj||(this.adj[b]={},this.node[b]={});if(b in this.adj[a]){f=this.adj[a][b];if(c==l)for(c=G(f);c in f;)c+=1;e=J(f,""+c,{});K(e,d);f[c]=e}else c!=l||(c=0),e={},K(e,d),f=fb(c,e),this.adj[a][b]=f,this.adj[b][a]=f};Z.prototype.add_edge=Z.prototype.a;
    Z.prototype.c=function(a,b){b=b||{};"object"!==r(b)&&h(new W("The attr_dict argument must be an object."));M(a,function(a){var d=nb(a),e,f,g=l,m={};4===d?(e=a[0],f=a[1],g=a[2],m=a[3]):3===d?(e=a[0],f=a[1],m=a[2]):2===d?(e=a[0],f=a[1]):h(new W("Edge tuple "+gc(a)+" must be a 2-tuple, 3-tuple or 4-tuple."));a=e in this.adj?J(this.adj[e],f,{}):{};if(g==l)for(g=G(a);g in a;)g+=1;a=J(a,g,{});K(a,b,m);this.a(e,f,g,a)},this)};Z.prototype.add_edges_from=Z.prototype.c;
    Z.prototype.w=function(a,b,c){(!(a in this.adj)||!(b in this.adj[a]))&&h(new W("The edge "+a+"-"+b+" is not in the graph"));var d=this.adj[a][b];c!=l?(c in d||h(new W("The edge "+a+"-"+b+" with key "+c+" is not in the graph")),I(d,c)):I(d,$a(d));0===G(d)&&(I(this.adj[a],b),a!=b&&I(this.adj[b],a))};Z.prototype.remove_edge=Z.prototype.w;Z.prototype.F=function(a){M(a,function(a){try{this.w(a[0],a[1],a[2])}catch(c){c instanceof W||h(c)}},this)};Z.prototype.remove_edges_from=Z.prototype.F;
    Z.prototype.O=function(a,b,c){return c!=l?a in this.adj&&b in this.adj[a]&&c in this.adj[a][b]:a in this.adj&&b in this.adj[a]};Z.prototype.has_edge=Z.prototype.O;Z.prototype.p=function(a,b,c){return Xa(this.e(a,b,c))};Z.prototype.edges=Z.prototype.p;
    Z.prototype.e=function(a,b,c){v(a)&&(v(b)&&(c=b),b=a,a=l);var d={},e,f;a=a!=l?P(this.d(a),function(a){return[a,this.adj[a]]},this):U(this.adj);return b?S(a,function(a){e=a[0];var b=new D,c=U(a[1]);b.next=function(){try{return c.next()}catch(a){a===B&&(d[e]=1),h(a)}};return b},function(a){f=a[0];if(!(f in d))return U(a[1])},function(a){return c?[e,f,a[0],a[1]]:[e,f,a[1]]}):S(a,function(a){e=a[0];var b=new D,c=U(a[1]);b.next=function(){try{return c.next()}catch(a){a===B&&(d[e]=1),h(a)}};return b},function(a){f=
        a[0];if(!(f in d))return U(a[1])},function(a){return c?[e,f,a[0]]:[e,f]})};Z.prototype.edges_iter=Z.prototype.e;Z.prototype.T=function(a,b,c,d){s(d)||(d=l);return a in this.adj&&b in this.adj[a]?c!=l?J(this.adj[a][b],""+c,d):this.adj[a][b]:d};Z.prototype.get_edge_data=Z.prototype.T;
    Z.prototype.u=function(a,b){var c;c=a!=l?P(this.d(a),function(a){return[a,this.adj[a]]},this):U(this.adj);return b!=l?Ua(c,function(a){var c=a[0];a=a[1];var f=0;F(a,function(a){F(a,function(a){f+=J(a,b,1)})});c in a&&F(a[c],function(a){f+=J(a,b,1)});return[c,f]}):Ua(c,function(a){var b=a[0];a=a[1];var c=0;F(a,function(a){c+=G(a)});return[b,c+ +(b in a&&G(a[b]))]})};Z.prototype.degree_iter=Z.prototype.u;Z.prototype.n=ba(k);Z.prototype.is_multigraph=Z.prototype.n;Z.prototype.b=ba(p);
    Z.prototype.is_directed=Z.prototype.b;Z.prototype.H=function(){var a=new $;a.j(this);a.c(function(){var a,c;return S(this.s(),function(c){a=c[0];return U(c[1])},function(a){c=a[0];return U(a[1])},function(d){return[a,c,d[0],T(d[1])]})}.call(this));a.graph=T(this.graph);a.node=T(this.node);return a};Z.prototype.to_directed=Z.prototype.H;
    Z.prototype.aa=function(a,b){var c=[];a?b?F(this.adj,function(a,b){b in a&&F(a[b],function(a,d){c.push([b,b,d,a])})}):F(this.adj,function(a,b){b in a&&F(a[b],function(a){c.push([b,b,a])})}):b?F(this.adj,function(a,b){b in a&&F(a[b],function(a,d){c.push([b,b,d])})}):F(this.adj,function(a,b){b in a&&F(a[b],function(){c.push([b,b])})});return c};Z.prototype.selfloop_edges=Z.prototype.aa;Z.prototype.P=function(a,b){return a==l?this.size():a in this.adj&&b in this.adj[a]?G(this.adj[a][b]):0};
    Z.prototype.number_of_edges=Z.prototype.P;Z.prototype.B=function(a){a=this.d(a);var b=new this.constructor,c=b.adj,d=this.adj;E(a,function(a){var b={};c[a]=b;F(d[a],function(d,m){if(m in c){var n=db(d);b[m]=n;c[m][a]=n}})});F(this.node,function(a,c){b.node[c]=a});b.graph=this.graph;return b};Z.prototype.subgraph=Z.prototype.B;function $(a,b){if(!(this instanceof $))return new $(a,b);X.call(this,a,b)}qa($,X);var Id=$.prototype,Jd=Z.prototype,Kd;for(Kd in Jd)Jd.hasOwnProperty(Kd)&&"constructor"!==Kd&&(Id[Kd]=Jd[Kd]);w("jsnx.classes.MultiDiGraph",$);w("jsnx.MultiDiGraph",$);$.__name__="MultiDiGraph";
    $.prototype.a=function(a,b,c,d){var e,f;c!=l&&(!u(c)&&!ia(c))&&(d=c,c=l);d=d||{};"object"!==r(d)&&h(new W("The attr_dict argument must be an object."));a in this.succ||(this.succ[a]={},this.pred[a]={},this.node[a]={});b in this.succ||(this.succ[b]={},this.pred[b]={},this.node[b]={});if(b in this.succ[a]){f=this.adj[a][b];if(c==l)for(c=G(f);c in f;)c+=1;e=J(f,c.toString(),{});K(e,d);f[c]=e}else c!=l||(c=0),e={},K(e,d),f=fb(c,e),this.succ[a][b]=f,this.pred[b][a]=f};$.prototype.add_edge=$.prototype.a;
    $.prototype.w=function(a,b,c){(!(a in this.adj)||!(b in this.adj[a]))&&h(new W("The edge "+a+"-"+b+" is not in the graph"));var d=this.adj[a][b];c!=l?(c in d||h(new W("The edge "+a+"-"+b+" with key "+c+" is not in the graph")),I(d,c)):I(d,$a(d));0===G(d)&&(I(this.succ[a],b),I(this.pred[b],a))};$.prototype.remove_edge=$.prototype.w;
    $.prototype.e=function(a,b,c){v(a)&&(v(b)&&(c=b),b=a,a=l);var d,e;a=a!=l?P(this.d(a),function(a){return[a,this.adj[a]]},this):ub(this.adj);return b?S(a,function(a){d=a[0];return U(a[1])},function(a){e=a[0];return U(a[1])},function(a){return c?[d,e,a[0],a[1]]:[d,e,a[1]]}):S(a,function(a){d=a[0];return U(a[1])},function(a){e=a[0];return U(a[1])},function(a){return c?[d,e,a[0]]:[d,e]})};$.prototype.edges_iter=$.prototype.e;$.prototype.ca=$.prototype.e;$.prototype.out_edges_iter=$.prototype.ca;
    $.prototype.ga=function(a,b,c){return Xa(this.ca(a,b,c))};$.prototype.out_edges=$.prototype.ga;$.prototype.J=function(a,b,c){v(a)&&(b=a,a=l);var d,e;a=a!=l?P(this.d(a),function(a){return[a,this.pred[a]]},this):ub(this.pred);return b?S(a,function(a){d=a[0];return U(a[1])},function(a){e=a[0];return U(a[1])},function(a){return c?[e,d,a[0],a[1]]:[e,d,a[1]]}):S(a,function(a){d=a[0];return U(a[1])},function(a){e=a[0];return U(a[1])},function(a){return c?[e,d,a[0]]:[e,d]})};$.prototype.in_edges_iter=$.prototype.J;
    $.prototype.V=function(a,b,c){return Xa(this.J(a,b,c))};$.prototype.in_edges=$.prototype.V;
    $.prototype.u=function(a,b){var c;c=a!=l?pb(Ua(this.d(a),function(a){return[a,this.succ[a]]},this),Ua(this.d(a),function(a){return[a,this.pred[a]]},this)):pb(U(this.succ),U(this.pred));return b!=l?P(c,function(a){var c=a[0][1],f=0;F(a[1][1],function(a){F(a,function(a){f+=+J(a,b,1)})});F(c,function(a){F(a,function(a){f+=+J(a,b,1)})});return[a[0][0],f]}):P(c,function(a){var b=0,c=0;F(a[1][1],function(a){b+=nb(a)});F(a[0][1],function(a){c+=nb(a)});return[a[0][0],b+c]})};$.prototype.degree_iter=$.prototype.u;
    $.prototype.U=function(a,b){var c;c=a!=l?P(this.d(a),function(a){return[a,this.pred[a]]},this):U(this.pred);return b!=l?P(c,function(a){var c=0;F(a[1],function(a){F(a,function(a){c+=+J(a,b,1)})});return[a[0][0],c]}):P(c,function(a){var b=0;F(a[1],function(a){b+=G(a)});return[a[0],b]})};$.prototype.in_degree_iter=$.prototype.U;
    $.prototype.Z=function(a,b){var c;c=a!=l?P(this.d(a),function(a){return[a,this.succ[a]]},this):U(this.succ);return b!=l?P(c,function(a){var c=0;F(a[1],function(a){F(a,function(a){c+=+J(a,b,1)})});return[a[0][0],c]}):P(c,function(a){var b=0;F(a[1],function(a){b+=G(a)});return[a[0],b]})};$.prototype.out_degree_iter=$.prototype.Z;$.prototype.n=ba(k);$.prototype.is_multigraph=$.prototype.n;$.prototype.b=ba(k);$.prototype.is_directed=$.prototype.b;$.prototype.H=function(){return vb(this)};
    $.prototype.to_directed=$.prototype.H;$.prototype.S=function(a){var b=new Z;b.name(this.name());b.j(this);var c,d;a?b.c(S(this.s(),function(a){c=a[0];return U(a[1])},function(a){d=a[0];return U(a[1])},pa(function(a){if(this.O(d,c,a[0]))return[c,d,a[0],T(a[1])]},this))):b.c(S(this.s(),function(a){c=a[0];return U(a[1])},function(a){d=a[0];return U(a[1])},function(a){return[c,d,a[0],T(a[1])]}));b.graph=T(this.graph);b.node=T(this.node);return b};$.prototype.to_undirected=$.prototype.S;
    $.prototype.B=function(a){a=this.d(a);var b=new this.constructor,c=b.succ,d=b.pred,e=this.succ;E(a,function(a){c[a]={};d[a]={}});M(c,function(a){var b=c[a];F(e[a],function(e,n){if(n in c){var x=db(e);b[n]=x;d[n][a]=x}})});M(b,function(a){b.node[a]=this.node[a]},this);b.graph=this.graph;return b};$.prototype.subgraph=$.prototype.B;
    $.prototype.reverse=function(a){(a=!s(a)||a)?(a=new this.constructor(l,{name:"Reverse of ("+this.name()+")"}),a.j(this),a.c(Ua(this.e(l,k,k),function(a){return[a[1],a[0],a[2],T(a[3])]})),a.graph=T(this.graph),a.node=T(this.node)):(a=this.succ,this.succ=this.pred,this.pred=a,this.adj=this.succ,a=this);return a};$.prototype.reverse=$.prototype.reverse;function Ld(a){return a.nodes()}w("jsnx.classes.func.nodes",Ld);w("jsnx.nodes",Ld);function Md(a){return a.A()}w("jsnx.classes.func.nodes_iter",Md);w("jsnx.nodes_iter",Md);function Pd(a,b){return a.p(b)}w("jsnx.classes.func.edges",Pd);w("jsnx.edges",Pd);w("jsnx.edges_iter",function(a,b){return a.e(b)});w("jsnx.degree",function(a,b,c){return a.t(b,c)});function Qd(a,b){return a.L(b)}w("jsnx.classes.func.neighbors",Qd);w("jsnx.neighbors",Qd);w("jsnx.number_of_nodes",function(a){return a.Q()});
    function Rd(a){return a.P()}w("jsnx.classes.func.number_of_edges",Rd);w("jsnx.number_of_edges",Rd);function Sd(a){var b=a.Q(),c=a.P();return 0===c?0:a.b()?c/(b*(b-1)):2*c/(b*(b-1))}w("jsnx.classes.func.density",Sd);w("jsnx.density",Sd);function Td(a){a=ab(a.t());var b=Math.max.apply(Math,a)+1,c=Pa(b);A(a,function(a){c[a]+=1});return c}w("jsnx.classes.func.degree_histogram",Td);w("jsnx.degree_histogram",Td);function Ud(a){return a.b()}w("jsnx.classes.func.is_directed",Ud);w("jsnx.is_directed",Ud);
    function Vd(a){function b(){h(new W("Frozen graph can't be modified"))}a.add_node=a.I=b;a.add_nodes_from=a.j=b;a.remove_node=a.R=b;a.remove_nodes_from=a.$=b;a.add_edge=a.a=b;a.add_edges_from=a.c=b;a.remove_edge=a.w=b;a.remove_edges_from=a.F=b;a.clear=a.clear=b;a.frozen=a.Ea=k;return a}w("jsnx.classes.func.freeze",Vd);w("jsnx.freeze",Vd);function Wd(a){return!!a.Ea}w("jsnx.classes.func.is_frozen",Wd);w("jsnx.is_frozen",Wd);function Xd(a,b){return a.B(b)}w("jsnx.classes.func.subgraph",Xd);
    w("jsnx.subgraph",Xd);function Yd(a,b){s(b)||(b=k);var c=new a.constructor;b&&c.j(a);return c}w("jsnx.classes.func.create_empty_copy",Yd);w("jsnx.create_empty_copy",Yd);
    function Zd(a,b){var c="";if(b!=l)a.m(b)||h(new W("node "+b+" not in graph")),c=c+("Node "+b+" has the following properties:\n")+("Degree: "+a.t(b)+"\n"),c+="Neighbors: "+a.L(b).join(" ");else{var c=c+("Name: "+a.name()+"\n"),c=c+("Type: "+a.constructor.__name__+"\n"),c=c+("Number of nodes: "+a.Q()+"\n"),c=c+("Number of edges: "+a.P()+"\n"),d=a.Q();if(0<d)if(a.b())c+="Average in degree: "+(L.v.apply(l,ab(a.na()))/d).toFixed(4)+"\n",c+="Average out degree: "+(L.v.apply(l,ab(a.ra()))/d).toFixed(4);
    else var e=L.v.apply(l,ab(a.t())),c=c+("Average degree: "+(e/d).toFixed(4))}return c}w("jsnx.classes.func.info",Zd);w("jsnx.info",Zd);function $d(a,b,c){F(c,function(c,e){a.node[e][b]=c})}w("jsnx.classes.func.set_node_attributes",$d);w("jsnx.set_node_attributes",$d);function ae(a,b){var c={};F(a.qa,function(a,e){b in a&&(c[e]=a[b])});return c}w("jsnx.classes.func.get_node_attributes",ae);w("jsnx.get_node_attributes",ae);function be(a,b,c){F(c,function(b,c){c=c.split(",");a.g(c[0])[c[1]]=b})}
    w("jsnx.classes.func.set_edge_attributes",be);w("jsnx.set_edge_attributes",be);function ce(a,b){var c={};F(a.p(l,k),function(a){b in a[2]&&(c[[a[0],a[1]]]=a[2][b])});return c}w("jsnx.classes.func.get_edge_attributes",ce);w("jsnx.get_edge_attributes",ce);w("jsnx.version","0.1.2next");}));


var preVaccination  = true;
var sizeByDegree    = false;
var submitted       = false;
var sizeByBC        = false;
var twine = [];
var twineIndex = 0;
var numberOfCommunities = null;
var G = jsnx.Graph();
var bcScores = [];
var largestCommunity = null;
var vaccinesUsed = null;
var communities = [];
var targetEstimate = 8.5;
var worstCase = 0;
var completion = 0;
var n = 50;
var charge = n * -2;

var stars = 1;
var refusers = [];
var net_id = 0;

var game = angular.module('game', []);

game.controller('gameController', function($scope) {
    $scope.vaccinated = [];

    $scope.toggleDegree = function() {
        toggleSizeByDegree();
    }

    $scope.toggleBC = function() {
        toggleSizeByBC();
    }

    $scope.vaccinesUsed = 0;
    $scope.communityCompletion = 0;
    $scope.largestCompletion = 0;
    $scope.sim_size = estimateWorstCase();
    $scope.vaccinesToBeUsed = 0;
    $scope.numberOfCommunities = numberOfCommunities;
    $scope.largestCommunity = largestCommunity;
    $scope.targetWorstCase = targetEstimate;

    $scope.vaccinate = function() {
        vaccinate();
        combinedUpdate();
        $scope.vaccinesUsed = getNumberOfVaccinesUsed();
        $scope.completion = updateCompletions();
        $scope.numberOfCommunities = numberOfCommunities;
        $scope.largestCommunity = largestCommunity;
        $scope.sim_size = worstCase;
        $scope.targetWorstCase = targetEstimate;
    }

    $scope.finalize = function() {
        $scope.vax = finalize();
        $scope.sim_size = worstCase;
        $scope.stars = stars;
        $scope.refusers = refusers;
        $scope.net_id = net_id;
    }

})

function finalize() {
    var vaccinated = [];
    for (var i = 0; i < originalGraph.nodes.length; i++) {
        var node = originalGraph.nodes[i];
        if (node.status == 1) vaccinated.push(node.id);
    }
    return vaccinated;
}

function updateCompletions() {
    worstCase = estimateWorstCase();
    completion = 100 * (1 - (worstCase - targetEstimate));
    return completion;

}
function toggleSizeByBC() {
    sizeByBC = !sizeByBC;
    updateNodeAttributes();
}

function getNumberOfVaccinesUsed() {
    vaccinesUsed = 0;
    for (var i = 0; i < originalGraph.nodes.length; i++) {
        if (originalGraph.nodes[i].status == 1) vaccinesUsed++;
    }
    return vaccinesUsed;
}

function estimateWorstCase() {
    var sumSquared = 0;
    var sum = 0;
    var worstCase = 0;
    for (var i = 0; i < communities.length; i++) {
        sumSquared += communities[i] * communities[i];
        sum += communities[i];
    }
    worstCase = sumSquared / sum;
    worstCase =  parseFloat(Math.round(worstCase * 100) / 100).toFixed(2)
    return worstCase;

}





// make graph object
// nodes are basic individuals with IDs from 0-19
// edges/links are in JSON format.  Note that prior node IDs must match link IDs


var graph = generateSmallWorld(n,0.10,3);

//var graph = {};
//graph.nodes = [];
//graph.links = [];
//
//var json;
//json = d3.json("/networks/1.json");
//
//readJSON(json);

function readJSON(json) {
    for (var i = 0; i < json.graph.nodes; i++) {
        graph.nodes[i] = json.graph.nodes[i];
    }
    for (var ii = 0; ii < json.graph.links; ii++) {
        graph.links[ii] = json.graph.links[ii];
    }
}



var groupCounter = 0;
var originalGraph = owl.deepCopy(graph);

// select "body" section, and append an empty SVG with height and width values
var width = 700,
    height = 600,
    svg;

svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("weight", height)
    .attr("pointer-events", "all")
    .append('svg:g')
    .call(d3.behavior.zoom().on("zoom", redraw))


function redraw() {
    svg.attr("transform",
        "translate(" + d3.event.translate + ")"
            + " scale(" + d3.event.scale + ")");
}

// initialize force layout. point to nodes & links.  size based on prior height and width.  set particle charge. setup step-wise force settling.
var force = d3.layout.force()
    .nodes(graph.nodes)
    .links(graph.links)
    .size([width, height])
    .charge(charge)
    .on("tick", tick)
    .start();

// associate empty SVGs with link data. assign attributes.
var link = svg.selectAll(".link")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "link");

// associate empty SVGs with node data. assign attributes. call force.drag to make them moveable.
var node = svg.selectAll(".node")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", metric)
    .style("fill", color)
    .on("mouseover", function(d) {
        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html("NodeID:\t" + d.id + "<br/>" + "Neighbors:\t" +  degree(d) + "<br/>"  + "Centrality:\t" + parseFloat(Math.round(d.bcScore * 100) / 100).toFixed(2))
            .style("left", 500 + "px")
            .style("top", 200 + "px");
    })
    .on("mouseout", function(d) {
        div.transition()
            .duration(400)
            .style("opacity", 0)})
    .call(force.drag)
    .on("click", click);

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// tick function, which does the physics for each individual node & link.
function tick() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
}

function combinedUpdate() {
    updateCommunities();
    findLargestCommunity();
    updateCompletions();
    if (preVaccination) {
        updateNodeAttributes();
    }
    else {
        bcScores = computeBetweennessCentrality();
        updateFullGraph();
        updateNodeAttributes();
    }
    preVaccination  = true;

}
function updateFullGraph() {
    var nodes = filterSusceptibleNodes(0);
    var links = filterLinks(0);
    charge -= n;
    force
        .nodes(nodes)
        .charge(charge)
        .links(links)
        .start();

    // select all links, join them with new data, and save it to "link" variable
    link = svg.selectAll("line.link")
        .data(links, function(d) { return d.source.id + "-" + d.target.id; });

    // enter new links (unnecessary at the moment)
    link.enter().insert("svg:line", ".node")
        .attr("class", "link")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    // Exit any old links.
    link.exit().remove();

    // Update the nodes…
    node = svg.selectAll("circle.node")
        .data(nodes, function(d) { return d.id; })
        .style("fill", color);

    // Enter any new nodes.
    node.enter().append("svg:circle")
        .attr("class", "node")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", metric)
        .style("fill", color)
        .on("click", click)
        .call(force.drag);

    // Exit any old nodes.
    node.exit().remove();

    graph.nodes = nodes;
    graph.links = links;
}

function updateNodeAttributes() {
    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    // Update the nodes…
    node = svg.selectAll("circle.node")
        .data(graph.nodes, function(d) { return d.id; })
        .attr("r", metric)
        .style("fill", color);
}


function vaccinate() {
    preVaccination  = false;
    getNumberOfVaccinesUsed();
    combinedUpdate();
    updateCommunities();
    convertGraphForNetX();
}


function toggleSizeByDegree() {
    sizeByDegree = !sizeByDegree;
    updateNodeAttributes();
}

function metric(node) {
    node.degree = degree(node);
    var sizeByMetric = 8;
    if (sizeByBC == true && sizeByDegree == false) sizeByMetric = (node.bcScore / 0.025) + 6;
    if (sizeByBC == false && sizeByDegree == true) sizeByMetric = (node.degree + 2) * 2;
    if (sizeByBC == true && sizeByDegree == true) sizeByMetric = ((node.bcScore / 0.01) + 1) + ((node.degree + 2) * 2) / 2;
    return sizeByMetric;
}

function color(d) {
    var color = null;
    if (d.status == 0) color = "#ff0000";
    if (d.status == 1) color = "#c6dbef";
    return color;
}

function click(node) {
    if (node.status == 1) node.status = 0;
    else node.status = 1;
    for (var i = 0; i < originalGraph.nodes.length; i++) {
        if (originalGraph.nodes[i] == node) originalGraph.nodes[i].status = node.status;
    }
    combinedUpdate();
}


updateCommunities();
convertGraphForNetX();
bcScores = computeBetweennessCentrality();
findLargestCommunity();

