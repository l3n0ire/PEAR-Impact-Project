(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"Cuy+":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("otPn"),c=n("ACV0"),s=(n("/SS/"),n("bWfx"),n("LK8F"),n("dZ+Y"),n("0mN4"),n("HAE/"),n("hHhE"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("eHHv")),p=n("S/3c"),d=n("+Wdg"),u=n("T1Te"),l=n("uLN3"),h=n("4LIN"),f=n("OzJR"),v=n("vOnD"),m=n("/Rk8"),g=Object(v.css)(["border:none;"]),y=v.default.input.withConfig({displayName:"StyledMaskedInput",componentId:"sc-99vkfa-0"})([""," width:100%;"," "," "," &::-moz-focus-inner{border:none;outline:none;}",";",";"],m.g,(function(e){return e.size&&function(e){var t=e.theme.text[e.size];return Object(v.css)(["font-size:",";line-height:",";"],t.size,t.height)}(e)}),(function(e){return e.plain&&g}),m.i,(function(e){return e.focus&&!e.plain&&m.e}),(function(e){return e.theme.maskedInput&&e.theme.maskedInput.extend})),b=v.default.div.withConfig({displayName:"StyledMaskedInput__StyledMaskedInputContainer",componentId:"sc-99vkfa-1"})(["position:relative;width:100%;"]);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e,t){for(var n=[],r=0,o=0;void 0!==t&&r<t.length&&o<e.length;){var a=e[o],i=void 0;if(a.fixed){var c=a.fixed.length;n.push({part:a.fixed,beginIndex:r,endIndex:r+c-1}),t.slice(r,r+c)===a.fixed&&(r+=c),o+=1,i=!0}else a.options&&(i=a.options.slice(0).reverse().some((function(e){var a=e.length,i=t.slice(r,r+a);return i===e&&(n.push({part:i,beginIndex:r,endIndex:r+a-1}),r+=a,o+=1,!0)})));if(!i)if(a.regexp){for(var s=Array.isArray(a.length)&&a.length[0]||a.length||1,p=Array.isArray(a.length)&&a.length[1]||a.length||t.length-r;!i&&p>=s;){var d=t.slice(r,r+p);a.regexp.test(d)&&(n.push({part:d,beginIndex:r,endIndex:r+p-1}),r+=p,o+=1,i=!0),p-=1}i||(r=t.length)}else{var u=Array.isArray(a.length)?a.length[1]:a.length||t.length-r,l=t.slice(r,r+u);n.push({part:l,beginIndex:r,endIndex:r+u-1}),r+=u,o+=1}}return n},k=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return O(w(t=e.call.apply(e,[this].concat(r))||this),"state",{}),O(w(t),"inputRef",o.a.createRef()),O(w(t),"dropRef",o.a.createRef()),O(w(t),"locateCaret",(function(){clearTimeout(t.caretTimeout),t.caretTimeout=setTimeout((function(){var e=t.props.mask,n=t.state,r=n.activeMaskIndex,o=n.valueParts;if(t.inputRef.current){var a,i=t.inputRef.current.selectionStart;o.some((function(e,t){return e.beginIndex<=i&&e.endIndex>=i&&(a=t,!0)})),void 0===a&&o.length<e.length&&(a=o.length),a&&e[a].fixed&&(a-=1),a!==r&&t.setState({activeMaskIndex:a,activeOptionIndex:-1,showDrop:a>=0&&e[a].options&&!0})}}),10)})),O(w(t),"onFocus",(function(e){var n=t.props.onFocus;t.locateCaret(),n&&n(e)})),O(w(t),"onBlur",(function(e){var n=t.props.onBlur;clearTimeout(t.blurTimeout),t.blurTimeout=setTimeout((function(){t.state.showDrop&&t.dropRef.current&&document.activeElement!==t.inputRef.current&&!t.dropRef.current.parentNode.contains(document.activeElement)&&t.setState({activeMaskIndex:void 0,showDrop:!1})}),10),n&&n(e)})),O(w(t),"setValue",(function(e){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set.call(t.inputRef.current,e);var n=new Event("input",{bubbles:!0});t.inputRef.current.dispatchEvent(n)})),O(w(t),"onChange",(function(e){var n=t.props,r=n.onChange,o=n.mask,a=e.target.value,i=I(o,a).map((function(e){return e.part})).join("");a===i?r&&r(e):t.setValue(i)})),O(w(t),"onOption",(function(e){return function(){var n=t.props.mask,r=t.state,o=r.activeMaskIndex,a=r.valueParts,i=[].concat(a);i[o]={part:e};for(var c=o+1;c<n.length&&!i[c]&&n[c].fixed;)i[c]={part:n[c].fixed},c+=1;var s=i.map((function(e){return e.part})).join("");t.setValue(s),t.inputRef.current.focus()}})),O(w(t),"onNextOption",(function(e){var n=t.props.mask,r=t.state,o=r.activeMaskIndex,a=r.activeOptionIndex,i=n[o];if(i&&i.options){e.preventDefault();var c=Math.min(a+1,i.options.length-1);t.setState({activeOptionIndex:c})}})),O(w(t),"onPreviousOption",(function(e){var n=t.props.mask,r=t.state,o=r.activeMaskIndex,a=r.activeOptionIndex;if(o>=0&&n[o].options){e.preventDefault();var i=Math.max(a-1,0);t.setState({activeOptionIndex:i})}})),O(w(t),"onSelectOption",(function(e){var n=t.props.mask,r=t.state,o=r.activeMaskIndex,a=r.activeOptionIndex;if(o>=0&&a>=0){e.preventDefault();var i=n[o].options[a];t.onOption(i)()}})),O(w(t),"onEsc",(function(e){t.state.showDrop&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),t.setState({showDrop:!1}))})),O(w(t),"renderPlaceholder",(function(){return t.props.mask.map((function(e){return e.placeholder||e.fixed})).join("")})),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){var n=e.mask,r=e.value,o=t.priorMask,a=t.priorValue;return o!==n||a!==r?{priorMask:n,priorValue:r,valueParts:I(n,r)}:null};var a=r.prototype;return a.componentDidUpdate=function(){this.props.focus&&this.locateCaret()},a.componentWillUnmount=function(){clearTimeout(this.caretTimeout),clearTimeout(this.blurTimeout)},a.render=function(){var e=this,t=this.props,n=t.defaultValue,r=t.forwardRef,a=t.id,c=t.placeholder,s=t.plain,p=t.mask,d=t.value,f=(t.onChange,t.onKeyDown),v=t.theme,m=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["defaultValue","forwardRef","id","placeholder","plain","mask","value","onChange","onKeyDown","theme"]),g=this.context||v,w=this.state,O=w.activeMaskIndex,I=w.activeOptionIndex,k=w.showDrop;return o.a.createElement(b,{plain:s},o.a.createElement(h.a,{onEsc:this.onEsc,onTab:this.onTab,onLeft:this.locateCaret,onRight:this.locateCaret,onUp:this.onPreviousOption,onDown:this.onNextOption,onEnter:this.onSelectOption,onKeyDown:f},o.a.createElement(y,x({id:a,ref:function(t){e.inputRef.current=t,r&&("object"==typeof r?r.current=t:r(t))},autoComplete:"off",plain:s,placeholder:c||this.renderPlaceholder()},m,{defaultValue:n,value:d,theme:g,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange}))),k&&o.a.createElement(l.a,{id:a?"masked-input-drop__"+a:void 0,align:{top:"bottom",left:"left"},responsive:!1,target:this.inputRef.current},o.a.createElement(i.a,{ref:this.dropRef},p[O].options.map((function(t,n){return o.a.createElement(i.a,{key:t,flex:!1},o.a.createElement(u.a,{tabIndex:"-1",onClick:e.onOption(t),onMouseOver:function(){return e.setState({activeOptionIndex:n})},onFocus:function(){},active:n===I,hoverIndicator:"background"},o.a.createElement(i.a,{pad:{horizontal:"small",vertical:"xsmall"}},t)))})))))},r}(r.Component);O(k,"contextType",p.a),O(k,"defaultProps",{mask:[]}),Object.setPrototypeOf(k.defaultProps,d.a);var E=Object(s.a)(Object(f.a)({focusWithMouse:!0}),f.b)(k),R=(n("2Spj"),n("17x9")),C=n.n(R);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(S(t)),t.handleErrored=t.handleErrored.bind(S(t)),t.handleChange=t.handleChange.bind(S(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(S(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},a.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},a.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},a.handleChange=function(e){this.props.onChange&&this.props.onChange(e)},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.a.createElement("div",_({},t,{ref:this.handleRecaptchaRef}))},r}(o.a.Component);L.displayName="ReCAPTCHA",L.propTypes={sitekey:C.a.string.isRequired,onChange:C.a.func,grecaptcha:C.a.object,theme:C.a.oneOf(["dark","light"]),type:C.a.oneOf(["image","audio"]),tabindex:C.a.number,onExpired:C.a.func,onErrored:C.a.func,size:C.a.oneOf(["compact","normal","invisible"]),stoken:C.a.string,hl:C.a.string,badge:C.a.oneOf(["bottomright","bottomleft","inline"])},L.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};n("f3/d");var j=n("2mql"),D=n.n(j);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M={},N=0;var P="onloadcallback";var A,U,V=(A=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+P+"&render=explicit"},U=(U={callbackName:P,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,o;function a(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}o=t,(n=a).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var i=a.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+N++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof A?A():A,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=M[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[U.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=U,o=r.globalName,a=r.callbackName,i=r.scriptId;if(o&&void 0!==window[o]&&(M[t]={loaded:!0,observers:{}}),M[t]){var c=M[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},M[t]={loaded:!1,observers:s};var p=document.createElement("script");p.src=t,p.async=!0,i&&(p.id=i);var d=function(e){if(M[t]){var n=M[t].observers;for(var r in n)e(n[r])&&delete n[r]}};a&&"undefined"!=typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),p.onload=function(){var e=M[t];e&&(e.loaded=!0,d((function(t){return!a&&(t(e),!0)})))},p.onerror=function(){var e=M[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(p)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===U.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=M[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===U.removeOnUnmount&&delete M[e])},i.render=function(){var t=U.globalName,n=this.props,o=(n.asyncScriptOnLoad,n.forwardedRef),a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(a[t]=void 0!==window[t]?window[t]:void 0),a.ref=o,Object(r.createElement)(e,a)},a}(r.Component),o=Object(r.forwardRef)((function(e,t){return Object(r.createElement)(n,T({},e,{forwardedRef:t}))}));return o.displayName="AsyncScriptLoader("+t+")",o.propTypes={asyncScriptOnLoad:C.a.func},D()(o,e)})(L);function z(e){console.log("Captcha value:",e)}t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{pad:"large"},o.a.createElement(c.a,null,"Contact"),o.a.createElement(V,{sitekey:"6LeVEcMUAAAAAKk65uTYiohQsEMrVdasRxiBkSQ4",onChange:z}),o.a.createElement(i.a,{pad:{top:"medium"}},o.a.createElement(E,{mask:[{regexp:/^[\w\-_.]+$/,placeholder:"example"},{fixed:"@"},{regexp:/^[\w]+$/,placeholder:"domain"},{fixed:"."},{regexp:/^[\w]+$/,placeholder:"com"}]}))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-fc674d6d9d22c867f561.js.map