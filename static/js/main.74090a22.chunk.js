(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/preloader.d9224981.gif"},22:function(e,a,t){e.exports=t.p+"static/media/video.1175895b.mp4"},25:function(e,a,t){e.exports=t(36)},30:function(e,a,t){},31:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(20),i=t.n(l),c=(t(30),t(7)),r=t(8),o=t(10),m=t(9),u=t(11),d=t(6),p=t(21),h=t.n(p),v=(t(31),t(5)),E=t(22),f=t.n(E);function N(){return s.a.createElement("div",{className:"background"},s.a.createElement("div",{className:"gradient"}),s.a.createElement("div",{className:"noise"}))}var g=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"background"},s.a.createElement("video",{className:"fullscreen-bg__video",autoPlay:!0,muted:!0,loop:!0},s.a.createElement("source",{src:f.a,type:"video/mp4"})),s.a.createElement("div",{className:"overlay"}),s.a.createElement("div",{className:"gradient"}),s.a.createElement("div",{className:"noise"})))};var O=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{path:"/",exact:!0,component:g}),s.a.createElement(v.a,{path:"/services",component:N}))};var b=function(e){return e.isPageLoaded,s.a.createElement("h1",null,"Services")};function k(){return s.a.createElement(b,null)}function M(){return s.a.createElement("div",{className:"textlogo"},s.a.createElement("div",{className:"text"}))}var w=function(e){var a=e.isPageLoaded;return s.a.createElement("div",{id:"scene",className:a?"visible":"invisible"},s.a.createElement("div",{"data-depth":"0.2",className:"layer"},s.a.createElement(v.a,{path:"/",exact:!0,component:M}),s.a.createElement(v.a,{path:"/services",component:k})))},C=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).setupInterface=function(){t.props.isPageLoaded&&setTimeout(function(){t.setState({menuButtonLineClass:"hamburger-line",chatButtonClass:"chat-button",openMenuButtonClass:"open-menu-button"})},1e3)},t.state={menuButtonLineClass:"hamburger-line compressed",menuButtonClass:"menu-button",chatButtonClass:"chat-button hided",openMenuButtonClass:"open-menu-button hided",isMenuOpened:!1},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.setupInterface(),s.a.createElement("div",{className:this.state.menuButtonClass,onClick:this.props.handleMenuOpen},s.a.createElement("div",{className:this.state.menuButtonLineClass}),s.a.createElement("div",{className:this.state.menuButtonLineClass}),s.a.createElement("div",{className:this.state.menuButtonLineClass}),s.a.createElement("div",{className:this.state.menuButtonLineClass})),s.a.createElement("div",{className:this.state.chatButtonClass},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"envelope",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"svg-inline--fa fa-envelope fa-w-16 fa-3x"},s.a.createElement("path",{fill:"white",d:"M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z",className:""}))),s.a.createElement("div",{className:this.state.openMenuButtonClass},s.a.createElement("p",{className:"open-line"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"),s.a.createElement("div",{className:"vertical-line"})))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.menuPageClass;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:e},s.a.createElement("ul",{className:"menu-list"},s.a.createElement("li",{className:this.props.isMenuOpened?"menu-link showed":"menu-link hided"},s.a.createElement(d.b,{to:"/services"},"About")),s.a.createElement("li",{className:this.props.isMenuOpened?"menu-link showed":"menu-link hided"},s.a.createElement("a",{href:"javascript:void(0)"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f")),s.a.createElement("li",{className:this.props.isMenuOpened?"menu-link showed":"menu-link hided"},s.a.createElement("a",{href:"javascript:void(0)"},"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438")),s.a.createElement("li",{className:this.props.isMenuOpened?"menu-link showed":"menu-link hided"},s.a.createElement("a",{href:"javascript:void(0)"},"\u0413\u0430\u043b\u0435\u0440\u0435\u044f")),s.a.createElement("li",{className:this.props.isMenuOpened?"menu-link showed":"menu-link hided"},s.a.createElement("a",{href:"javascript:void(0)"},"\u0411\u043b\u043e\u0433")),s.a.createElement("li",{className:this.props.isMenuOpened?"menu-link showed":"menu-link hided"},s.a.createElement("a",{href:"javascript:void(0)"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))),s.a.createElement("div",{className:this.props.isMenuOpened?"menu-footer showed":"menu-footer hided"},s.a.createElement("div",{className:"lang"},s.a.createElement("span",{className:"ua"},"UA"),"/",s.a.createElement("span",{className:"en"},"EN"),"/",s.a.createElement("span",{className:"ru"},"RU")),s.a.createElement("div",{className:"info"},"IBAN BE94 3631 3792 1714 | TVA 0563 860 901"),s.a.createElement("div",{className:"social-links"},s.a.createElement("span",{className:"facebook"},"Facebook"),"/",s.a.createElement("span",{className:"span linkedin"},"LinkedIn"),"/",s.a.createElement("span",{className:"instagram"},"Instagram"))),s.a.createElement("div",{className:this.props.isMenuOpened?"close-button showed":"close-button hided",onClick:this.props.handleMenuOpen},s.a.createElement("div",{className:"close-button-line first"}),s.a.createElement("div",{className:"close-button-line second"})),s.a.createElement("div",{className:this.props.isMenuOpened?"menu-logo showed":"menu-logo hided"})))}}]),a}(n.Component),B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).checkPageLoading=function(){window.onload=function(){setTimeout(function(){t.setState({isLoaded:!0})},1e3)}},t.handleMenuOpen=function(){t.state.isMenuOpened?t.setState({menuPageClass:"menu-page hided",isMenuOpened:!t.state.isMenuOpened}):t.setState({menuPageClass:"menu-page opened",isMenuOpened:!t.state.isMenuOpened})},t.state={isLoaded:!1,isMenuOpened:!1,menuPageClass:"menu-page"},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="preloader-screen";return!0===this.state.isLoaded&&(e="preloader-screen loaded"),s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:e},s.a.createElement("img",{src:h.a,alt:"site preloader",className:"preloader"})),this.checkPageLoading(),s.a.createElement(d.a,null,s.a.createElement("div",{className:"main-page"},s.a.createElement(O,null)),s.a.createElement(w,{isPageLoaded:this.state.isLoaded}),s.a.createElement(C,{isPageLoaded:this.state.isLoaded,handleMenuOpen:this.handleMenuOpen}),s.a.createElement(j,{menuPageClass:this.state.menuPageClass,handleMenuOpen:this.handleMenuOpen,isMenuOpened:this.state.isMenuOpened})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.74090a22.chunk.js.map