(this.webpackJsonpbookent=this.webpackJsonpbookent||[]).push([[8],{103:function(e,_,n){e.exports={"App-logo":"All_App-logo__2fxD-","App-logo-spin":"All_App-logo-spin__2Une3",hide:"All_hide__2Sfja",LogoHolder:"All_LogoHolder__7qCez",logo:"All_logo__1ms8Z",introduction__container:"All_introduction__container__18lX7",readMore__div:"All_readMore__div__IWWts",readMore__header:"All_readMore__header__1rFu1",readeMore__span:"All_readeMore__span__1e5Bg",learnMore__span:"All_learnMore__span__38XpM",readMore__P1:"All_readMore__P1__2s94Y",readMore__P2:"All_readMore__P2__3EDo5",joinNow__btn__div:"All_joinNow__btn__div__2CWdw",wave:"All_wave__1DnQD",manWithChair__div__intro:"All_manWithChair__div__intro__3Qu_o",manWithChair__intro:"All_manWithChair__intro__2pfjM",Main__Container:"All_Main__Container__1Jxn1",headerLogin:"All_headerLogin__3Ttw2",Form__Container:"All_Form__Container__YuQQu",logIn__form:"All_logIn__form__paayQ",labelName:"All_labelName__3mFeu",labels:"All_labels__W4etc",formInputs:"All_formInputs__9QrdN",formSubmit:"All_formSubmit__1VJlF",signUp__div:"All_signUp__div__35Y4S",signUp__btn:"All_signUp__btn__2HK7A",dontHavean__spam:"All_dontHavean__spam__1ltkv",signUp__span:"All_signUp__span__1Hrc6",manWithChair__div:"All_manWithChair__div__2AE6F",manWithChair:"All_manWithChair__32GD5",Main__Container__SignUp:"All_Main__Container__SignUp__37jHn",headerSignUp:"All_headerSignUp__3jQTZ",Form__Container__SignUp:"All_Form__Container__SignUp__AM0w6",SignUp__form:"All_SignUp__form__2pFlV",pp:"All_pp__3Aq1D",ppp:"All_ppp__3HaNX",labels__SignUp:"All_labels__SignUp__-QWDE",formInputs__SignUp:"All_formInputs__SignUp__1RXXG",country:"All_country__26x0Z",formSubmit__SignUp:"All_formSubmit__SignUp__3yMRv",manWithChair__div__SignUp:"All_manWithChair__div__SignUp__2lvTD",manWithChair__SignUp:"All_manWithChair__SignUp__2gcIo",err:"All_err__1IJ_z"}},145:function(e,_,n){"use strict";n.r(_),n.d(_,"default",(function(){return f}));var t=n(98),a=n(99),r=n(10),l=n(1),o=n(4),i=n(25),c=n(26),s=n.n(c),p=n(103),u=n.n(p),d=n.p+"static/media/logoBlack.803b5047.svg",g=n.p+"static/media/wave.959121b5.svg",b=n(0),h=Object(l.lazy)((function(){return n.e(17).then(n.bind(null,141))})),j=Object(l.lazy)((function(){return n.e(18).then(n.bind(null,142))})),m=Object(l.lazy)((function(){return n.e(16).then(n.bind(null,143))}));function f(){var e=Object(l.useState)(),_=Object(r.a)(e,2),n=_[0],c=_[1],p=Object(l.useState)(),f=Object(r.a)(p,2),O=f[0],A=f[1],v=Object(l.useState)({username:"",pass:""}),S=Object(r.a)(v,2),U=S[0],C=S[1],y=Object(l.useState)({username:"",pass:"",phone:"",country:"Jordan",profileImg:""}),w=Object(r.a)(y,2),M=w[0],W=w[1],x=Object(o.g)(),D=Object(l.useContext)(i.a),P=D.login,k=D.logout;Object(l.useEffect)((function(){localStorage.setItem("theme","themelight"),k()}),[]);var I=Object(l.useState)(!1),N=Object(r.a)(I,2),F=N[0],H=N[1],E=Object(l.useState)(!0),Q=Object(r.a)(E,2),z=Q[0],J=Q[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:u.a.LogoHolder,children:Object(b.jsx)("img",{src:d,loading:"lazy",alt:"logo",className:u.a.logo})}),Object(b.jsx)("div",{className:z?"":"".concat(u.a.hide),children:Object(b.jsx)(m,{onShowClicked:function(e){J(!!e)}})}),Object(b.jsx)("div",{className:F||z?"".concat(u.a.hide):"",children:Object(b.jsx)(h,{onSignClicked:function(e){H(!!e)},logChange:function(e){C(Object(a.a)(Object(a.a)({},U),{},Object(t.a)({},e.target.name,e.target.value)))},logIn:function(e){e.preventDefault(),s.a.post("".concat("http://localhost:3001","/getUser"),{logUser:U}).then((function(e){var _,n;(null===e||void 0===e||null===(_=e.data)||void 0===_?void 0:_.token)&&(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.user)&&(P(e.data.token,e.data.user),x.push("/home"))})).catch((function(e){return c(e.response.data)}))},logErr:n})}),Object(b.jsx)("div",{className:F?"":"".concat(u.a.hide),children:Object(b.jsx)(j,{onSignClicked:function(e){H(!e)},signChange:function(e){W(Object(a.a)(Object(a.a)({},M),{},Object(t.a)({},e.target.name,e.target.value)))},signUp:function(e){e.preventDefault(),s.a.post("".concat("http://localhost:3001","/newUser"),{signUser:M}).then((function(e){return H(!H)})).catch((function(e){return A(e.response.data)}))},signErr:O})}),Object(b.jsx)("img",{src:g,loading:"lazy",alt:"wave",className:u.a.wave})]})}},98:function(e,_,n){"use strict";function t(e,_,n){return _ in e?Object.defineProperty(e,_,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[_]=n,e}n.d(_,"a",(function(){return t}))},99:function(e,_,n){"use strict";n.d(_,"a",(function(){return r}));var t=n(98);function a(e,_){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);_&&(t=t.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var _=1;_<arguments.length;_++){var n=null!=arguments[_]?arguments[_]:{};_%2?a(Object(n),!0).forEach((function(_){Object(t.a)(e,_,n[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(n,_))}))}return e}}}]);
//# sourceMappingURL=8.afefc2ce.chunk.js.map