(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{"307cb80cb199da272147":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=n("0d7f0986bcd2f33d8a2a"),i=n("1037a6e0d5914309f74c"),c=n.n(i),u=n("4dd2a92e69dcbe1bab10"),l=n("ab039aecd4a1d4fedc0e"),s="boilerplate.containers.Countdown",d=Object(l.defineMessages)({title:{id:"".concat(s,".title"),defaultMessage:"Comments on Countdowns"},paperTitle:{id:"".concat(s,".paper.title"),defaultMessage:"Comments"},paperSubtitle:{id:"".concat(s,".paper.subtitle"),defaultMessage:"You can fake comments, and edit / remove comments on countdowns here."},content:{id:"".concat(s,".paper.content"),defaultMessage:"Content"}}),f=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),b=n("b912ecc4473ae8a2ff0b"),m=n.n(b),p=n("2abb2ecfab271efcf057"),v=n.n(p),g=n("e799c547a20a503b338f"),y=n.n(g),h=n("f466c6fac21e2bd173f8"),w=n.n(h),O=n("f0d76769f542545382df"),P=n.n(O),S=n("98b41f971f7301538e8d"),j=n.n(S),x=n("a289f12938702445a8e7"),k=n.n(x),C=n("17a826745d7905c7f263"),A=n("306baaacab16ab087b14"),D=n("ea6e455a48985292da38"),T=n("07460803b00a50e0385f"),M=n("e9cb1a74b44c7bf473df"),E=n.n(M),R=n("e68eb59aa96fc65ab714"),_=n.n(R),I=n("4cad7676f6ad23a52c95");var Y,N=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id="",this.time=Object(I.default)().format("DD/MM/YYYY HH:mm:ss"),this.countdown="",this.comment="",this.likes=0,this.dislikes=0,this.comments=0};function B(e,t,n,r){Y||(Y="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:Y,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=B(_.a,{}),q=B(E.a,{}),U=B(P.a,{colSpan:8}),F=B(C.a,{});function G(e){var t=e.classes,n=e.title,o=e.onAdd,i=e.onEdit,c=e.onRemove,l=e.data,s=e.loading,d=e.users,f=e.countdowns,b=$(Object(r.useState)({order:"asc",orderBy:"time",selected:[],columnData:[{id:"text",numeric:!1,disablePadding:!1,label:"Comment"},{id:"user",numeric:!1,disablePadding:!1,label:"Written By"},{id:"countdown",numeric:!1,disablePadding:!1,label:"Countdown"},{id:"likes",numeric:!0,disablePadding:!1,label:"Likes"},{id:"dislikes",numeric:!0,disablePadding:!1,label:"Dislikes"},{id:"createdAt",numeric:!1,disablePadding:!1,label:"Written At"},{id:"action",numeric:!1,disablePadding:!1,label:"Action"}],comments:[],page:0,rowsPerPage:10,defaultPerPage:10,filterText:""}),2),p=b[0],g=b[1],h=$(a.a.useState(!1),2),O=h[0],S=h[1],x=$(a.a.useState(new N),2),C=x[0],T=x[1],M=p.order,E=p.orderBy,R=p.selected,_=p.rowsPerPage,Y=p.page,W=p.filterText,V=p.columnData,G=_-Math.min(_,l.length-Y*_),J=function(e,n){return n.map((function(n,r){return B(P.a,{align:n.numeric?"right":"left"},r.toString(),"action"===n.id?B("div",{},void 0,B(y.a,{className:t.button,"aria-label":"Delete",color:"primary",onClick:function(){return i(e)}},void 0,H),B(y.a,{className:t.button,"aria-label":"Delete",color:"default",onClick:function(){return t=e,S(!0),void T(t);var t}},void 0,q)):"createdAt"===n.id?Object(I.default)(e[n.id]).format("DD/MM/YYYY hh:mm:ss"):"user"===n.id?d.length>0&&d.find((function(t){return t._id===e[n.id]}))?d.find((function(t){return t._id===e[n.id]})).name:"":"countdown"===n.id?f.length>0&&f.find((function(t){return t._id===e[n.id]}))?f.find((function(t){return t._id===e[n.id]})).name:"":e[n.id])}))};return B(r.Fragment,{},void 0,B(D.a,{numSelected:R.length,filterText:W,onUserInput:function(e){return t=e,n=p.comments,r=p.defaultPerPage,g(L({},p,""!==t?{rowsPerPage:n}:{rowsPerPage:r})),void g(L({},p,{filterText:t.toLowerCase()}));var t,n,r},title:n,placeholder:"Search",onAddItem:function(){o()}}),B("div",{className:t.rootTable},void 0,B(v.a,{className:m()(t.table,t.stripped)},void 0,B(A.a,{numSelected:R.length,order:M,orderBy:E,onRequestSort:function(e,t){return function(e,t){var n=t,r="desc";E===t&&"desc"===M&&(r="asc");var a="desc"===r?l.sort((function(e,t){return t[n]<e[n]?-1:1})):l.sort((function(e,t){return e[n]<t[n]?-1:1}));g(L({},p,{data:a,order:r,orderBy:n}))}(0,t)},rowCount:l.length,columnData:V}),B(w.a,{},void 0,l.slice(Y*_,Y*_+_).map((function(e){return-1!==e.text.toLowerCase().indexOf(W)&&B(k.a,{role:"checkbox",tabIndex:-1},e._id,J(e,V))})),G>0&&B(k.a,{style:{height:49*G}},void 0,U)))),B(j.a,{component:"div",count:l.length,rowsPerPage:_,page:Y,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){g(L({},p,{page:t}))},onChangeRowsPerPage:function(e){g(L({},p,{rowsPerPage:e.target.value}))}}),B(u.a,{visible:O,text:"Do you really want to remove this comment?",onConfirm:function(){S(!1),c(C)},onCancel:function(){S(!1)}}),s?F:"")}G.defaultProps={loading:!1};var J,K=Object(f.withStyles)(T.a)(G),z=n("2aea235afd5c55b8b19b"),Q=n.n(z),X=n("e727e731a9bed8ec3c2a"),Z=n.n(X),ee=n("10e4c616cb3b01bafafd"),te=n.n(ee),ne=n("1551459233b95bf53af9"),re=n.n(ne),ae=n("eb6b79030a47f0b10efc"),oe=n.n(ae),ie=n("c7fd554010f79f6c0ef8"),ce=n.n(ie),ue=n("435859b6b76fb67a754a"),le=n.n(ue),se=n("4fdf735211a231ee9d85"),de=n.n(se),fe=n("7c3fe2cb581dd1babffa"),be=n("3dfd612761b1dd8d2fc3"),me=n.n(be);function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ve(e,t,n,r){J||(J="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:J,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ye=ve(Q.a,{type:"submit",color:"primary"},void 0,"Save");var he,we=Object(f.withStyles)((function(){return{dialogTitleRoot:{marginBottom:15},user:{"& .MuiFormControl-root label + div > div":{paddingTop:0},"& > span":{marginRight:10},'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]':{padding:10}}}}))((function(e){var t=ge(Object(r.useState)(!1),2),n=t[0],o=t[1],i=ge(Object(r.useState)(!1),2),c=i[0],u=i[1],l=ge(Object(r.useState)(new N),2),s=l[0],d=l[1],f=ge(a.a.useState(Object(I.default)()),2),b=f[0],m=f[1],p=ge(a.a.useState(""),2),v=p[0],g=p[1],y=ge(a.a.useState(""),2),h=y[0],w=y[1],O=e.classes,P=e.visible,S=e.isNew,j=e.onClose,x=e.data,k=e.onSave,C=e.users,A=e.countdowns;function D(){o(!1),j()}return Object(r.useEffect)((function(){o(P),u(S),d(x),g(x.user),w(x.countdown),m(Object(I.default)(s.createdAt))}),[P,S,s]),ve(Z.a,{disableBackdropClick:!0,maxWidth:"md",open:n,onClose:D,className:O.paper},void 0,ve(oe.a,{className:O.dialogTitleRoot},void 0,c?"New Comment":"Edit Comment"),ve("form",{onSubmit:function(e){e.preventDefault(),k({_id:s._id,countdown:h,user:v,text:e.target.text.value,likes:e.target.likes.value,dislikes:e.target.dislikes.value,createdAt:b}),D()}},void 0,ve(re.a,{},void 0,ve(le.a,{container:!0,spacing:2},void 0,ve(le.a,{item:!0,xs:12},void 0,ve(me.a,{options:A,className:O.user,defaultValue:A.find((function(e){return e._id===s.countdown})),getOptionLabel:function(e){return e.name},onChange:function(e,t){w(t._id)},renderInput:function(e){return a.a.createElement(ce.a,pe({},e,{label:"Countdown",variant:"outlined",margin:"dense",required:!0}))}})),ve(le.a,{item:!0,xs:12},void 0,ve(me.a,{options:C,className:O.user,defaultValue:C.find((function(e){return e._id===s.user})),getOptionLabel:function(e){return e.name},onChange:function(e,t){g(t._id)},renderInput:function(e){return a.a.createElement(ce.a,pe({},e,{label:"Username",variant:"outlined",margin:"dense",required:!0}))}})),ve(le.a,{item:!0,xs:12},void 0,ve(ce.a,{margin:"dense",name:"text",label:"Comment",type:"text",fullWidth:!0,multiline:!0,rows:3,required:!0,variant:"outlined",defaultValue:s.text})),ve(le.a,{item:!0,xs:6},void 0,ve(ce.a,{margin:"dense",name:"likes",label:"Likes",type:"number",fullWidth:!0,variant:"outlined",defaultValue:s.likes})),ve(le.a,{item:!0,xs:6},void 0,ve(ce.a,{margin:"dense",name:"dislikes",label:"Dislikes",type:"number",fullWidth:!0,variant:"outlined",defaultValue:s.dislikes})),ve(le.a,{item:!0,xs:12},void 0,ve(fe.MuiPickersUtilsProvider,{utils:de.a},void 0,ve(fe.KeyboardDateTimePicker,{margin:"normal",label:"Written At",format:"DD/MM/YYYY HH:mm:ss",value:b,inputVariant:"outlined",fullWidth:!0,onChange:function(e){m(e)}}))))),ve(te.a,{},void 0,ve(Q.a,{onClick:D,color:"primary",autoFocus:!0},void 0,"Cancel"),ye)))})),Oe=n("c92fa770b7e6df01a131"),Pe=n("8995e5a1013c173e2a86");function Se(e,t,n,r){he||(he="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:he,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function je(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function xe(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){je(o,r,a,i,c,"next",e)}function c(e){je(o,r,a,i,c,"throw",e)}i(void 0)}))}}function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=Object(l.injectIntl)((function(e){var t=c.a.name+" - Comments on Countdowns",n=c.a.desc,r=e.intl,i=ke(a.a.useState(!1),2),l=i[0],s=i[1],f=ke(a.a.useState(!1),2),b=f[0],m=f[1],p=ke(a.a.useState(new N),2),v=p[0],g=p[1],y=ke(a.a.useState([]),2),h=y[0],w=y[1],O=ke(a.a.useState([]),2),P=O[0],S=O[1],j=ke(a.a.useState(!1),2),x=j[0],k=j[1],C=ke(a.a.useState([]),2),A=C[0],D=C[1],T=function(){var e=xe(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,Object(Oe.a)("".concat(Pe.e).concat(Pe.c).concat(Pe.a),"GET");case 3:(t=e.sent).success&&(""===t.data?w([]):w(t.data)),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=xe(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,Object(Oe.a)(Pe.e,"GET");case 3:(t=e.sent).success&&D(t.data),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=xe(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,Object(Oe.a)(Pe.r,"GET");case 3:(t=e.sent).success&&S(t.data),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.a.useEffect((function(){T(),E(),M()}),[]);var R=function(){var e=xe(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.a)("".concat(Pe.e,"/").concat(t.countdown).concat(Pe.c,"/").concat(t._id),"DELETE");case 2:n=e.sent,Object(Oe.b)(n),T();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=xe(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,!b){e.next=9;break}return delete n._id,e.next=5,Object(Oe.a)("".concat(Pe.e,"/").concat(n.countdown).concat(Pe.c),"POST",n);case 5:r=e.sent,Object(Oe.b)(r),e.next=13;break;case 9:return e.next=11,Object(Oe.a)("".concat(Pe.e,"/").concat(n.countdown).concat(Pe.c,"/").concat(n._id),"PUT",n);case 11:a=e.sent,Object(Oe.b)(a);case 13:T();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Se("div",{},void 0,Se(o.Helmet,{},void 0,Se("title",{},void 0,t),Se("meta",{name:"description",content:n}),Se("meta",{property:"og:title",content:t}),Se("meta",{property:"og:description",content:n}),Se("meta",{property:"twitter:title",content:t}),Se("meta",{property:"twitter:description",content:n})),Se(u.i,{whiteBg:!0,title:r.formatMessage(d.title),icon:"timer",desc:r.formatMessage(d.paperSubtitle)},void 0,Se(K,{title:r.formatMessage(d.paperTitle),onAdd:function(){m(!0),g(new N),s(!0)},onEdit:function(e){g(e),m(!1),s(!0)},onRemove:R,loading:x,users:P,countdowns:A,data:h})),Se(we,{visible:l,isNew:b,onClose:function(){s(!1)},data:v,users:P,countdowns:A,onSave:_}))}))}}]);