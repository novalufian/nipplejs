var nipplejs=function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.distance=function(t,e){var i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)},e.angle=function(t,e){var i=e.x-t.x,n=e.y-t.y;return o(Math.atan2(n,i))},e.findCoord=function(t,e,i){var o={x:0,y:0};return i=n(i),o.x=t.x-e*Math.cos(i),o.y=t.y-e*Math.sin(i),o};var n=e.radians=function(t){return t*(Math.PI/180)},o=e.degrees=function(t){return t*(180/Math.PI)},r=(e.bindEvt=function(t,e,i){for(var n=e.split(/[ ,]+/g),o=void 0,r=0;r<n.length;r+=1)o=n[r],t.addEventListener?t.addEventListener(o,i,!1):t.attachEvent&&t.attachEvent(o,i)},e.unbindEvt=function(t,e,i){for(var n=e.split(/[ ,]+/g),o=void 0,r=0;r<n.length;r+=1)o=n[r],t.removeEventListener?t.removeEventListener(o,i):t.detachEvent&&t.detachEvent(o,i)},e.trigger=function(t,e,i){var n=new CustomEvent(e,i);t.dispatchEvent(n)},e.prepareEvent=function(t){return t.preventDefault(),t.type.match(/^touch/)?t.changedTouches:t},e.getScroll=function(){return{x:void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},e.applyPosition=function(t,e){e.x&&e.y?(t.style.left=e.x+"px",t.style.top=e.y+"px"):(e.top||e.right||e.bottom||e.left)&&(t.style.top=e.top,t.style.right=e.right,t.style.bottom=e.bottom,t.style.left=e.left)},e.getTransitionStyle=function(t,e,i){var n=r(t);for(var o in n)if(n.hasOwnProperty(o))if("string"==typeof e)n[o]=e+" "+i;else{for(var s="",d=0,a=e.length;d<a;d+=1)s+=e[d]+" "+i+", ";n[o]=s.slice(0,-2)}return n},e.getVendorStyle=function(t,e){var i=r(t);for(var n in i)i.hasOwnProperty(n)&&(i[n]=e);return i},e.configStylePropertyObject=function(t){var e={};e[t]="";return["webkit","Moz","o"].forEach(function(i){e[i+t.charAt(0).toUpperCase()+t.slice(1)]=""}),e});e.extend=function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},e.safeExtend=function(t,e){var i={};for(var n in t)t.hasOwnProperty(n)&&e.hasOwnProperty(n)?i[n]=e[n]:t.hasOwnProperty(n)&&(i[n]=t[n]);return i},e.map=function(t,e){if(t.length)for(var i=0,n=t.length;i<n;i+=1)e(t[i]);else e(t)}},function(t,e,i){"use strict";var n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(0));var o,r=!!("ontouchstart"in window),s=!!window.PointerEvent,d=!!window.MSPointerEvent,a={start:"mousedown",move:"mousemove",end:"mouseup"},p={};function l(){}s?o={start:"pointerdown",move:"pointermove",end:"pointerup"}:d?o={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:r?(o={start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},p=a):o=a,l.prototype.on=function(t,e){var i,n=t.split(/[ ,]+/g);this._handlers_=this._handlers_||{};for(var o=0;o<n.length;o+=1)i=n[o],this._handlers_[i]=this._handlers_[i]||[],this._handlers_[i].push(e);return this},l.prototype.off=function(t,e){return this._handlers_=this._handlers_||{},void 0===t?this._handlers_={}:void 0===e?this._handlers_[t]=null:this._handlers_[t]&&this._handlers_[t].indexOf(e)>=0&&this._handlers_[t].splice(this._handlers_[t].indexOf(e),1),this},l.prototype.trigger=function(t,e){var i,n=this,o=t.split(/[ ,]+/g);n._handlers_=n._handlers_||{};for(var r=0;r<o.length;r+=1)i=o[r],n._handlers_[i]&&n._handlers_[i].length&&n._handlers_[i].forEach(function(t){t.call(n,{type:i,target:n},e)})},l.prototype.config=function(t){this.options=this.defaults||{},t&&(this.options=n.safeExtend(this.options,t))},l.prototype.bindEvt=function(t,e){var i=this;return i._domHandlers_=i._domHandlers_||{},i._domHandlers_[e]=function(){"function"==typeof i["on"+e]?i["on"+e].apply(i,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},n.bindEvt(t,o[e],i._domHandlers_[e]),p[e]&&n.bindEvt(t,p[e],i._domHandlers_[e]),i},l.prototype.unbindEvt=function(t,e){return this._domHandlers_=this._domHandlers_||{},n.unbindEvt(t,o[e],this._domHandlers_[e]),p[e]&&n.unbindEvt(t,p[e],this._domHandlers_[e]),delete this._domHandlers_[e],this}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i(1),r=(n=o)&&n.__esModule?n:{default:n},s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(0));function d(t,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=t,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body},this.config(e),"dynamic"===this.options.mode&&(this.options.restOpacity=0),this.id=d.id,d.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}d.prototype=new r.default,d.constructor=d,d.id=0,d.prototype.buildEl=function(t){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)},d.prototype.stylize=function(){if(this.options.dataOnly)return this;var t=this.options.fadeTime+"ms",e=s.getVendorStyle("borderRadius","50%"),i=s.getTransitionStyle("transition","opacity",t),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5"},s.extend(n.el,i),s.extend(n.back,e),s.extend(n.front,e),this.applyStyles(n),this},d.prototype.applyStyles=function(t){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var i in t[e])this.ui[e].style[i]=t[e][i];return this},d.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)},d.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)},d.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},d.prototype.show=function(t){var e=this;return e.options.dataOnly?e:(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),"function"==typeof t&&t.call(this)},e.options.fadeTime),e)},d.prototype.hide=function(t){var e=this;return e.options.dataOnly?e:(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var i="dynamic"===e.options.mode?"none":"block";e.ui.el.style.display=i,"function"==typeof t&&t.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick&&e.restPosition(),e)},d.prototype.restPosition=function(t){var e=this;e.frontPosition={x:0,y:0};var i=e.options.fadeTime+"ms",n={};n.front=s.getTransitionStyle("transition",["top","left"],i);var o={front:{}};o.front={left:e.frontPosition.x+"px",top:e.frontPosition.y+"px"},e.applyStyles(n),e.applyStyles(o),e.restTimeout=setTimeout(function(){"function"==typeof t&&t.call(e),e.restCallback()},e.options.fadeTime)},d.prototype.restCallback=function(){var t={};t.front=s.getTransitionStyle("transition","none",""),this.applyStyles(t),this.trigger("rested",this.instance)},d.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},d.prototype.computeDirection=function(t){var e,i,n,o=t.angle.radian,r=Math.PI/4,s=Math.PI/2;if(e=o>r&&o<3*r?"up":o>-r&&o<=r?"left":o>3*-r&&o<=-r?"down":"right",i=o>-s&&o<s?"left":"right",n=o>0?"up":"down",t.force>this.options.threshold){var d,a={};for(d in this.direction)this.direction.hasOwnProperty(d)&&(a[d]=this.direction[d]);var p={};for(d in this.direction={x:i,y:n,angle:e},t.direction=this.direction,a)a[d]===this.direction[d]&&(p[d]=!0);if(p.x&&p.y&&p.angle)return t;p.x&&p.y||this.trigger("plain",t),p.x||this.trigger("plain:"+i,t),p.y||this.trigger("plain:"+n,t),p.angle||this.trigger("dir dir:"+e,t)}return t},e.default=d},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(i(2)),o=s(i(1)),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(0));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){return this.nipples=[],this.idles=[],this.actives=[],this.ids=[],this.pressureIntervals={},this.manager=t,this.id=d.id,d.id+=1,this.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5},this.config(e),"static"!==this.options.mode&&"semi"!==this.options.mode||(this.options.multitouch=!1),this.options.multitouch||(this.options.maxNumberOfNipples=1),this.updateBox(),this.prepareNipples(),this.bindings(),this.begin(),this.nipples}d.prototype=new o.default,d.constructor=d,d.id=0,d.prototype.prepareNipples=function(){var t=this.nipples;t.on=this.on.bind(this),t.off=this.off.bind(this),t.options=this.options,t.destroy=this.destroy.bind(this),t.ids=this.ids,t.id=this.id,t.processOnMove=this.processOnMove.bind(this),t.processOnEnd=this.processOnEnd.bind(this),t.get=function(e){if(void 0===e)return t[0];for(var i=0,n=t.length;i<n;i+=1)if(t[i].identifier===e)return t[i];return!1}},d.prototype.bindings=function(){this.bindEvt(this.options.zone,"start"),this.options.zone.style.touchAction="none",this.options.zone.style.msTouchAction="none"},d.prototype.begin=function(){var t=this.options;if("static"===t.mode){var e=this.createNipple(t.position,this.manager.getIdentifier());e.add(),this.idles.push(e)}},d.prototype.createNipple=function(t,e){var i=r.getScroll(),o={},s=this.options;if(t.x&&t.y)o={x:t.x-(i.x+this.box.left),y:t.y-(i.y+this.box.top)};else if(t.top||t.right||t.bottom||t.left){var d=document.createElement("DIV");d.style.display="hidden",d.style.top=t.top,d.style.right=t.right,d.style.bottom=t.bottom,d.style.left=t.left,d.style.position="absolute",s.zone.appendChild(d);var a=d.getBoundingClientRect();s.zone.removeChild(d),o=t,t={x:a.left+i.x,y:a.top+i.y}}var p=new n.default(this,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:t,zone:s.zone,frontPosition:{x:0,y:0}});return s.dataOnly||(r.applyPosition(p.ui.el,o),r.applyPosition(p.ui.front,p.frontPosition)),this.nipples.push(p),this.trigger("added "+p.identifier+":added",p),this.manager.trigger("added "+p.identifier+":added",p),this.bindNipple(p),p},d.prototype.updateBox=function(){this.box=this.options.zone.getBoundingClientRect()},d.prototype.bindNipple=function(t){var e,i=this,n=function(t,n){e=t.type+" "+n.id+":"+t.type,i.trigger(e,n)};t.on("destroyed",i.onDestroyed.bind(i)),t.on("shown hidden rested dir plain",n),t.on("dir:up dir:right dir:down dir:left",n),t.on("plain:up plain:right plain:down plain:left",n)},d.prototype.pressureFn=function(t,e,i){var n=this,o=0;clearInterval(n.pressureIntervals[i]),n.pressureIntervals[i]=setInterval(function(){var i=t.force||t.pressure||t.webkitForce||0;i!==o&&(e.trigger("pressure",i),n.trigger("pressure "+e.identifier+":pressure",i),o=i)}.bind(n),100)},d.prototype.onstart=function(t){var e=this,i=e.options;t=r.prepareEvent(t),e.updateBox();return r.map(t,function(t){e.actives.length<i.maxNumberOfNipples&&e.processOnStart(t)}),e.manager.bindDocument(),!1},d.prototype.processOnStart=function(t){var e,i=this,n=i.options,o=i.manager.getIdentifier(t),s=t.force||t.pressure||t.webkitForce||0,d={x:t.pageX,y:t.pageY},a=i.getOrCreate(o,d);a.identifier!==o&&i.manager.removeIdentifier(a.identifier),a.identifier=o;var p=function(e){e.trigger("start",e),i.trigger("start "+e.id+":start",e),e.show(),s>0&&i.pressureFn(t,e,e.identifier),i.processOnMove(t)};if((e=i.idles.indexOf(a))>=0&&i.idles.splice(e,1),i.actives.push(a),i.ids.push(a.identifier),"semi"!==n.mode)p(a);else{if(!(r.distance(d,a.position)<=n.catchDistance))return a.destroy(),void i.processOnStart(t);p(a)}return a},d.prototype.getOrCreate=function(t,e){var i,n=this.options;return/(semi|static)/.test(n.mode)?(i=this.idles[0])?(this.idles.splice(0,1),i):"semi"===n.mode?this.createNipple(e,t):(console.warn("Coudln't find the needed nipple."),!1):i=this.createNipple(e,t)},d.prototype.processOnMove=function(t){var e=this.options,i=this.manager.getIdentifier(t),n=this.nipples.get(i);if(!n)return console.error("Found zombie joystick with ID "+i),void this.manager.removeIdentifier(i);n.identifier=i;var o=n.options.size/2,s={x:t.pageX,y:t.pageY},d=r.distance(s,n.position),a=r.angle(s,n.position),p=r.radians(a),l=d/o;d>o&&(d=o,s=r.findCoord(n.position,d,a)),n.frontPosition={x:s.x-n.position.x,y:s.y-n.position.y},e.dataOnly||r.applyPosition(n.ui.front,n.frontPosition);var c={identifier:n.identifier,position:s,force:l,pressure:t.force||t.pressure||t.webkitForce||0,distance:d,angle:{radian:p,degree:a},instance:n};(c=n.computeDirection(c)).angle={radian:r.radians(180-a),degree:180-a},n.trigger("move",c),this.trigger("move "+n.id+":move",c)},d.prototype.processOnEnd=function(t){var e=this,i=e.options,n=e.manager.getIdentifier(t),o=e.nipples.get(n),r=e.manager.removeIdentifier(o.identifier);o&&(i.dataOnly||o.hide(function(){"dynamic"===i.mode&&(o.trigger("removed",o),e.trigger("removed "+o.id+":removed",o),e.manager.trigger("removed "+o.id+":removed",o),o.destroy())}),clearInterval(e.pressureIntervals[o.identifier]),o.resetDirection(),o.trigger("end",o),e.trigger("end "+o.id+":end",o),e.ids.indexOf(o.identifier)>=0&&e.ids.splice(e.ids.indexOf(o.identifier),1),e.actives.indexOf(o)>=0&&e.actives.splice(e.actives.indexOf(o),1),/(semi|static)/.test(i.mode)?e.idles.push(o):e.nipples.indexOf(o)>=0&&e.nipples.splice(e.nipples.indexOf(o),1),e.manager.unbindDocument(),/(semi|static)/.test(i.mode)&&(e.manager.ids[r.id]=r.identifier))},d.prototype.onDestroyed=function(t,e){this.nipples.indexOf(e)>=0&&this.nipples.splice(this.nipples.indexOf(e),1),this.actives.indexOf(e)>=0&&this.actives.splice(this.actives.indexOf(e),1),this.idles.indexOf(e)>=0&&this.idles.splice(this.idles.indexOf(e),1),this.ids.indexOf(e.identifier)>=0&&this.ids.splice(this.ids.indexOf(e.identifier),1),this.manager.removeIdentifier(e.identifier),this.manager.unbindDocument()},d.prototype.destroy=function(){for(var t in this.unbindEvt(this.options.zone,"start"),this.nipples.forEach(function(t){t.destroy()}),this.pressureIntervals)this.pressureIntervals.hasOwnProperty(t)&&clearInterval(this.pressureIntervals[t]);this.trigger("destroyed",this.nipples),this.manager.unbindDocument(),this.off()},e.default=d},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(i(3)),o=s(i(1)),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i(0));function s(t){return t&&t.__esModule?t:{default:t}}function d(t){var e,i=this;return i.ids={},i.index=0,i.collections=[],i.config(t),i.prepareCollections(),r.bindEvt(window,"resize",function(t){clearTimeout(e),e=setTimeout(function(){var t,e=r.getScroll();i.collections.forEach(function(i){i.forEach(function(i){t=i.el.getBoundingClientRect(),i.position={x:e.x+t.left,y:e.y+t.top}})})},100)}),i.collections}d.prototype=new o.default,d.constructor=d,d.prototype.prepareCollections=function(){var t=this;t.collections.create=t.create.bind(t),t.collections.on=t.on.bind(t),t.collections.off=t.off.bind(t),t.collections.destroy=t.destroy.bind(t),t.collections.get=function(e){var i;return t.collections.every(function(t){return!(i=t.get(e))}),i}},d.prototype.create=function(t){return this.createCollection(t)},d.prototype.createCollection=function(t){var e=new n.default(this,t);return this.bindCollection(e),this.collections.push(e),e},d.prototype.bindCollection=function(t){var e,i=this,n=function(t,n){e=t.type+" "+n.id+":"+t.type,i.trigger(e,n)};t.on("destroyed",i.onDestroyed.bind(i)),t.on("shown hidden rested dir plain",n),t.on("dir:up dir:right dir:down dir:left",n),t.on("plain:up plain:right plain:down plain:left",n)},d.prototype.bindDocument=function(){this.binded||(this.bindEvt(document,"move").bindEvt(document,"end"),this.binded=!0)},d.prototype.unbindDocument=function(t){Object.keys(this.ids).length&&!0!==t||(this.unbindEvt(document,"move").unbindEvt(document,"end"),this.binded=!1)},d.prototype.getIdentifier=function(t){var e;return t?void 0===(e=void 0===t.identifier?t.pointerId:t.identifier)&&(e=this.latest||0):e=this.index,void 0===this.ids[e]&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]},d.prototype.removeIdentifier=function(t){var e={};for(var i in this.ids)if(this.ids[i]===t){e.id=i,e.identifier=this.ids[i],delete this.ids[i];break}return e},d.prototype.onmove=function(t){return this.onAny("move",t),!1},d.prototype.onend=function(t){return this.onAny("end",t),!1},d.prototype.onAny=function(t,e){var i,n=this,o="processOn"+t.charAt(0).toUpperCase()+t.slice(1);e=r.prepareEvent(e);return r.map(e,function(t){i=n.getIdentifier(t),r.map(n.collections,function(t,e,i){i.ids.indexOf(e)>=0&&(i[o](t),t._found_=!0)}.bind(null,t,i)),t._found_||n.removeIdentifier(i)}),!1},d.prototype.destroy=function(){this.unbindDocument(!0),this.ids={},this.index=0,this.collections.forEach(function(t){t.destroy()}),this.off()},d.prototype.onDestroyed=function(t,e){if(this.collections.indexOf(e)<0)return!1;this.collections.splice(this.collections.indexOf(e),1)};var a=new d;e.default={create:function(t){return a.create(t)},factory:a}}]);
