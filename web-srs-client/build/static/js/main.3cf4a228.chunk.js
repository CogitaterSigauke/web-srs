(this["webpackJsonpweb-srs-client"]=this["webpackJsonpweb-srs-client"]||[]).push([[0],{119:function(e,t,a){e.exports=a(172)},146:function(e,t,a){},167:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(10),i=a(11),s=a(12),u=a(13),d=a(21),m=a(15),p=a(197),h=a(199),E=a(204),g=a(19),f=a(39),b=a(101),v=a(25),C={authenticated:!1},A={selectedCards:[],selectedModules:[]},O={loading:!1,errors:null},k=[b.a],x=Object(f.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(v.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return C;case"SET_USER":return Object(v.a)({authenticated:!0},t.payload);default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_FLUSHCARD":return e.selectedCards.push(t.cardId),Object(v.a)({},e);case"DESELECT_FLUSHCARD":return e.selectedCards.includes(t.cardId)&&e.selectedCards.splice(e.selectedCards.indexOf(t.cardId),1),Object(v.a)({},e);case"SELECT_MODULE":return e.selectedModules.push(t.module),console.log("SELECT_MODULE_",t.module),Object(v.a)({},e);case"DESELECT_MODULE":return e.selectedModules.includes(t.module)&&(e.selectedModules.splice(e.selectedModules.indexOf(t.module),1),console.log("DESELECT_MODULE_",t.module)),console.log(e.selectedModules),Object(v.a)({},e);default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(v.a)({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(v.a)({},e,{loading:!1,errors:null});case"LOADING_UI":return Object(v.a)({},e,{loading:!0});default:return e}}}),y=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):f.d)(f.a.apply(void 0,k)),T=Object(f.e)(x,{},y),S=a(16),I=a.n(S),M=function(){return function(e){localStorage.removeItem("tokenId"),delete I.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}},j=function(e){var t="Bearer ".concat(e);localStorage.setItem("tokenId",t),I.a.defaults.headers.common.Authorization=t},N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(e){T.dispatch(M()),window.location.href="/login"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(p.a,null,r.a.createElement(h.a,{className:"nav-container"},r.a.createElement(E.a,{color:"inherit",component:d.b,to:"/"}," Home   "),r.a.createElement(E.a,{color:"inherit",component:d.b,to:"/login"}," Login  "),r.a.createElement(E.a,{color:"inherit",component:d.b,to:"/addCard"}," AddCard"),r.a.createElement(E.a,{color:"inherit",component:d.b,to:"/signup"}," Signup "),r.a.createElement(E.a,{color:"inherit",component:d.b,to:"/review"}," Review "),r.a.createElement(E.a,{color:"inherit",component:d.b,to:"/topics"}," Topics "),r.a.createElement(E.a,{color:"inherit",onClick:this.handleClick}," logout"),r.a.createElement(E.a,{color:"inherit"}," ",e.name," ")))}}]),a}(n.Component),w=Object(g.b)((function(e){return{user:e.user}}))(N),R=(a(146),a(20)),U=a.n(R),D=a(62),G=a.n(D),L=a(63),z=a.n(L),V=a(200),B=a(202),Q=a(201),F=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleGoogleFailure=function(e){console.log("Error ",e.data)},e.handleGoogleResponse=function(t){var a=t.profileObj,n={name:a.name,email:a.email,familyName:a.familyName,profileUrl:a.imageUrl};e.props.loginUser(n,e.props.history,t.tokenId)},e.setState({authenticated:!1}),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes;e.UI.loading;return r.a.createElement(V.a,{container:!0},r.a.createElement(V.a,{item:!0,sm:!0}),r.a.createElement(V.a,{item:!0,sm:!0},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Q.a,null,r.a.createElement("img",{src:G.a,alt:"RealiseApp icon",className:t.image}),r.a.createElement(B.a,{variant:"h3",className:t.pageTitle},"Sign In"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(z.a,{clientId:"181796502496-jop5gvuieb2kkc0mijivmnocegukl17c.apps.googleusercontent.com",buttonText:"Sign in with Google",scope:"profile email",width:"240",height:"50",longtitle:"true",theme:"dark",onSuccess:this.handleGoogleResponse,onFailure:this.handleGoogleFailure,cookiePolicy:"single_host_origin"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("small",null,"dont have an account ? ",r.a.createElement("br",null),"sign up ",r.a.createElement(d.b,{to:"/signup"},"here"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))),r.a.createElement(V.a,{item:!0,sm:!0}))}}]),a}(n.Component),H={loginUser:function(e,t,a){return function(n){n({type:"LOADING_UI"}),I.a.post("/signup",e).then((function(e){j(a),n({type:"SET_USER",payload:e.data}),n({type:"CLEAR_ERRORS"}),t.push("/")})).catch((function(e){n({type:"SET_ERRORS",payload:e.response.data})}))}}},Z=Object(g.b)((function(e){return{user:e.user,UI:e.UI}}),H)(U()({typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"}})(F)),P=a(56),X=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isClicked:!1},e.handleClick=function(t){console.log("State ===BEFORE===> ",e.state),e.state.isClicked?e.props.deselectCard(e.props.card.id):e.props.selectCard(e.props.card.id),e.setState({isClicked:!e.state.isClicked}),console.log("State ===AFTER===> ",e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){this.props.classes;return r.a.createElement("div",null,this.state.isClicked&&r.a.createElement(Q.a,null,r.a.createElement("div",{onClick:this.handleClick,className:"card-clicked"},"Question: ",this.props.card.front,"  ",r.a.createElement("br",null),"Answer: ",this.props.card.back," ",r.a.createElement("br",null))),!this.state.isClicked&&r.a.createElement(Q.a,null,r.a.createElement("div",{onClick:this.handleClick,className:"card-unclicked"},"Question: ",this.props.card.front,"  ",r.a.createElement("br",null),"Answer: ",this.props.card.back,"  ",r.a.createElement("br",null))))}}]),a}(n.Component),Y={selectCard:function(e){return function(t){t({type:"SELECT_FLUSHCARD",cardId:e})}},deselectCard:function(e){return function(t){t({type:"DESELECT_FLUSHCARD",cardId:e})}}},J=Object(g.b)((function(e){return{user:e.user}}),Y)(U()({image:{margin:"20px auto 20px auto"}})(X)),q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isClicked:!1},e.handleClick=function(t){console.log("State ===BEFORE===M> ",e.state),e.state.isClicked?e.props.deselectModule(e.props.module):e.props.selectModule(e.props.module),e.setState({isClicked:!e.state.isClicked}),console.log("State ===AFTER===M> ",e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){this.props.classes;return r.a.createElement("div",null,this.state.isClicked&&r.a.createElement(Q.a,null,r.a.createElement("div",{onClick:this.handleClick,className:"module-clicked"},"ModuleID:  ",this.props.module.id,r.a.createElement("br",null),"Topic: ",this.props.module.topic)),!this.state.isClicked&&r.a.createElement(Q.a,null,r.a.createElement("div",{onClick:this.handleClick,className:"module-unclicked"},"ModuleID:  ",this.props.module.id,r.a.createElement("br",null),"Topic: ",this.props.module.topic)))}}]),a}(n.Component),K={selectModule:function(e){return function(t){t({type:"SELECT_MODULE",module:e})}},deselectModule:function(e){return function(t){t({type:"DESELECT_MODULE",module:e})}}},W=Object(g.b)((function(e){return{user:e.user}}),K)(U()({image:{margin:"20px auto 20px auto"}})(q)),_=a(203),$=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getModules=function(){var t=e.props.userId;console.log("MuserId ",t),I.a.get("/module/user/".concat(t)).then((function(t){e.setState({modules:t.data})})).catch((function(e){console.log("Module Error",e)}))},e.getCards=function(){var t=e.props.userId;console.log("CuserId ",t),I.a.get("/card/user/".concat(t)).then((function(t){e.setState({cards:t.data}),console.log("state: ",e.state)})).catch((function(e){console.log("Cards Error",e)}))},e.handleCardSubmit=function(){var t=e.state,a=t.front,n=t.back,r=t.userId;I.a.post("/card",{front:a,back:n,userId:r}).then((function(t){console.log("Card Added",t.data),e.setState({front:"",back:""}),e.getCards()})).catch((function(e){console.log("Card Error",e)}))},e.handleModuleSubmit=function(){console.log("state: ",e.state);var t=e.state,a=t.topic,n=t.userId,r=e.props.selectedCards;I.a.post("/module",{topic:a,userId:n,cardIds:r}).then((function(t){console.log("Module Added",t.data),e.setState({topic:"",cardIds:[]}),e.getModules()})).catch((function(e){console.log("Card Error",e)}))},e.handleChange=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.handleSelectedModule=function(t){e.setState({moduleSelected:!0,moduleIndex:t.target.key}),console.log("State ",e.state)},e.handleSelectedCard=function(t){console.log("selectedCards  ==> ",e.props.selectedCards)},e.state={front:"",back:"",cardIds:[],topic:"",userId:"",modules:[],cards:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.authenticated&&this.props.userId||this.props.history.push("/login"),this.setState({userId:this.props.userId}),this.getModules(),this.getCards()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(V.a,{container:!0,className:t.form},r.a.createElement(V.a,{item:!0,sm:!0,className:"sm-grid-right"},r.a.createElement(B.a,{variant:"h2",className:t.pageTitle},"MyModules"),this.state.modules.map((function(t,a){return r.a.createElement("div",{key:a,onClick:e.handleSelectedModule},r.a.createElement(W,{module:t}))}))),r.a.createElement(V.a,{item:!0,sm:!0,className:"sm-grid-left"},r.a.createElement(B.a,{variant:"h2",className:t.pageTitle},"MyFlashCards"),this.state.cards.map((function(t,a){return r.a.createElement("div",{onClick:e.handleSelectedCard},r.a.createElement(J,{card:t,key:a}))}))),r.a.createElement(V.a,{item:!0,sm:!0,className:"sm-grid-md"},r.a.createElement(B.a,{variant:"h2",className:t.pageTitle},"FlashCard"),r.a.createElement("form",{noValidate:!0},r.a.createElement(_.a,{id:"front",name:"front",type:"text",label:"Question",className:t.textField,value:this.state.front,onChange:this.handleChange,multiline:!0,fullWidth:!0}),r.a.createElement(_.a,{id:"back",name:"back",type:"text",label:"Answer",className:t.textField,value:this.state.back,onChange:this.handleChange,multiline:!0,fullWidth:!0}),r.a.createElement(E.a,{variant:"contained",color:"primary",className:t.button,onClick:this.handleCardSubmit},"Create New Card"),r.a.createElement("br",null)),r.a.createElement("form",{noValidate:!0},r.a.createElement(E.a,{variant:"contained",color:"primary",className:t.button,onClick:this.handleModuleSubmit},"Add Module With Selected Flushcards"),r.a.createElement("br",null))))}}]),a}(n.Component),ee=Object(g.b)((function(e){return{authenticated:e.user.authenticated,userId:e.user.id,selectedCards:e.data.selectedCards}}))(U()({typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"100px auto 10px auto"},pageTitle2:{margin:"30px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"}})($)),te=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleGoogleFailure=function(e){console.log("Error ",e.data)},e.handleGoogleResponse=function(t){var a=t.profileObj,n={name:a.name,email:a.email,familyName:a.familyName,profileUrl:a.imageUrl};e.props.loginUser(n,e.props.history,t.tokenId)},e.setState({authenticated:!1}),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(V.a,{container:!0,className:e.form},r.a.createElement(V.a,{item:!0,sm:!0}),r.a.createElement(V.a,{item:!0,sm:!0},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Q.a,null,r.a.createElement("img",{src:G.a,alt:"RealiseApp icon",className:e.image}),r.a.createElement(B.a,{variant:"h3",className:e.pageTitle},"Sign Up"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(z.a,{clientId:"181796502496-jop5gvuieb2kkc0mijivmnocegukl17c.apps.googleusercontent.com",buttonText:"Sign up with Google",scope:"profile email",width:"240",height:"50",longtitle:"true",theme:"dark",onSuccess:this.handleGoogleResponse,onFailure:this.handleGoogleFailure,cookiePolicy:"single_host_origin"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("small",{className:e.small},"already have an account ? ",r.a.createElement("br",null),"sign in ",r.a.createElement(d.b,{to:"/login"},"here"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))),r.a.createElement(V.a,{item:!0,sm:!0}))}}]),a}(n.Component),ae=U()({typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"}})(te),ne=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"topics"))}}]),a}(n.Component),re=a(109),oe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isFront:!0},e.handleClick=function(t){e.setState({isFront:!e.state.isFront}),"Again"==t.target.innerHTML?console.log("AGAIN"):"Good"==t.target.innerHTML?console.log("GOOD"):"Easy"==t.target.innerHTML&&console.log("EASY")},e}return Object(i.a)(a,[{key:"render",value:function(){this.props.classes;return r.a.createElement("div",null,this.state.isFront&&r.a.createElement(Q.a,{className:"card-front"},r.a.createElement("div",{className:"card-front-inner"},this.props.card.front,r.a.createElement("hr",null)),r.a.createElement(E.a,{onClick:this.handleClick,variant:"contained",color:"primary",className:"card-button-f"},"Show Answer")),!this.state.isFront&&r.a.createElement(Q.a,{className:"card-front"},r.a.createElement("div",{className:"card-front-inner"},this.props.card.front,r.a.createElement("hr",null),this.props.card.back,r.a.createElement("br",null)),r.a.createElement(E.a,{onClick:this.handleClick,value:"tata",variant:"contained",color:"primary",className:"card-button-b"},"Again"),r.a.createElement(E.a,{onClick:this.handleClick,variant:"contained",color:"primary",className:"card-button-b"},"Good"),r.a.createElement(E.a,{onClick:this.handleClick,variant:"contained",color:"primary",className:"card-button-b"},"Easy")),r.a.createElement("br",null))}}]),a}(n.Component),le=U()({image:{margin:"20px auto 20px auto"}})(oe),ce=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getModules=function(){var t=e.props.userId;console.log("MuserId ",t),I.a.get("/module/user/".concat(t)).then((function(t){e.setState({modules:t.data})})).catch((function(e){console.log("Module Error",e)}))},e.handleSelectedModule=function(t){console.log("selected Modules <>",e.props.selectedModules);var a,n,r=[],o=Object(re.a)(e.props.selectedModules);try{for(o.s();!(n=o.n()).done;)a=n.value,console.log("cardIds ==> ",r),r=r.concat(a.cardIds),console.log("mod.cardIds ==> ",a.cardIds),console.log("cardIds ==> ",r)}catch(l){o.e(l)}finally{o.f()}console.log("cardIds: ",r),I.a.post("/card/cardIds",{cardIds:r}).then((function(t){console.log("cards fetched",t.data),e.setState({cards:t.data})})).catch((function(e){console.log("Card Error",e)}))},e.handleSelectedCard=function(t){console.log("selectedCards  ==> ",e.props.selectedCards)},e.state={front:"",back:"",cardIds:[],userId:"",modules:[],cards:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.authenticated&&this.props.userId||this.props.history.push("/login"),this.setState({userId:this.props.userId}),this.getModules()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(V.a,{container:!0,className:t.form},r.a.createElement(V.a,{item:!0,sm:!0,className:"sm-grid-right"},r.a.createElement(B.a,{variant:"h2",className:t.pageTitle},"Modules"),this.state.modules.map((function(t,a){return r.a.createElement("div",{key:a,onClick:e.handleSelectedModule},r.a.createElement(W,{module:t}))}))),r.a.createElement(V.a,{item:!0,sm:!0,className:"sm-grid-left"},r.a.createElement(B.a,{variant:"h2",className:t.pageTitle},"FlashCards"),this.state.cards.map((function(t,a){return r.a.createElement("div",{onClick:e.handleSelectedCard},r.a.createElement(le,{card:t,key:a}),r.a.createElement("br",null))}))))}}]),a}(n.Component),ie=Object(g.b)((function(e){return{authenticated:e.user.authenticated,userId:e.user.id,selectedModules:e.data.selectedModules}}))(U()({typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"100px auto 10px auto"},pageTitle2:{margin:"30px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"}})(ce)),se=(a(167),a(105)),ue=a.n(se),de=a(106),me=a.n(de),pe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={cards:[],name:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.location.state&&this.setState({name:this.props.location.state.name}),I.a.get("/cards").then((function(t){e.setState({cards:t.data})})).catch((function(e){console.log("Error == ",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,this.state.name),r.a.createElement(V.a,{container:!0,className:"card-container"},r.a.createElement(V.a,{item:!0,sm:!0},r.a.createElement(ue.a,{className:"arrow-a"})),r.a.createElement(V.a,{item:!0,sm:!0},r.a.createElement("div",{className:"module-sticker"},r.a.createElement("div",{className:"module-positioner"},r.a.createElement("div",{className:"module-fixed"},"Module"))),this.state.cards.map((function(e,t){return r.a.createElement(le,{card:e,key:t})}))),r.a.createElement(V.a,{item:!0,sm:!0},r.a.createElement(me.a,{className:"arrow-b"}))))}}]),a}(n.Component),he=a(110),Ee=Object(g.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(he.a)(e,["component","authenticated"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(m.a,{to:"/"}):r.a.createElement(t,e)}}))})),ge=a(108),fe=a.n(ge),be=a(73),ve=a.n(be),Ce=a(107),Ae=a.n(Ce);I.a.defaults.baseURL="http://localhost:8080/api";var Oe,ke=ve()({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}},typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"},invisibleSeparator:{border:"none",margin:4},visibleSeparator:{width:"100%",borderBottom:"1px solid rgba(0,0,0,0.1)",marginBottom:20},paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},buttons:{textAlign:"center","& a":{margin:"20px 10px"}}}),xe=localStorage.tokenId;if(xe){var ye=Ae()(xe);if(1e3*ye.exp<Date.now())T.dispatch(M()),window.location.href="/login";else{T.dispatch({type:"SET_AUTHENTICATED"}),I.a.defaults.headers.common.Authorization=xe;var Te={name:ye.name,email:ye.email,familyName:ye.family_name};T.dispatch((Oe=Te,function(e){e({type:"LOADING_UI"}),I.a.post("/signup",Oe).then((function(t){e({type:"SET_USER",payload:t.data}),e({type:"CLEAR_ERRORS"})})).catch((function(t){e({type:"SET_ERRORS",payload:t.response.data})}))}))}}var Se=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(fe.a,{theme:ke},r.a.createElement(g.a,{store:T},r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(w,{history:this.props.history}),r.a.createElement("div",{className:"container"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:pe}),r.a.createElement(Ee,{exact:!0,path:"/login",component:Z}),r.a.createElement(Ee,{exact:!0,path:"/signup",component:ae}),r.a.createElement(m.b,{exact:!0,path:"/addCard",component:ee}),r.a.createElement(m.b,{exact:!0,path:"/review",component:ie}),r.a.createElement(m.b,{exact:!0,path:"/topics",component:ne})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t){e.exports="data:image/png;base64,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"}},[[119,1,2]]]);
//# sourceMappingURL=main.3cf4a228.chunk.js.map