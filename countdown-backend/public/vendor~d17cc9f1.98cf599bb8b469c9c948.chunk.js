(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{"22b0a7c4c50bb7582032":function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i=r("5ef06d4e52487e9de330"),c=r("fe3450770b86e34fc383"),o=r("6b8dd703b48cf3030551"),a=r("efb31340a10d16791a67"),s=r("907af5e3b8e943076909"),u=r("16249176c16d65581959"),f=function(t,e){return{key:t.getKey(),text:t.getText(),type:t.getType(),depth:t.getDepth(),inlineStyleRanges:s(t),entityRanges:a(t,e),data:t.getData().toObject()}},l=function(t,e,r,o){if(t instanceof i)r.push(f(t,e));else{t instanceof c||u(!1);var a=t.getParentKey(),s=o[t.getKey()]=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){n(t,e,r[e])}))}return t}({},f(t,e),{children:[]});a?o[a].children.push(s):r.push(s)}};t.exports=function(t){var e={entityMap:{},blocks:[]};return e=function(t,e){var r=e.entityMap,n=[],i={},c={},a=0;return t.getBlockMap().forEach((function(t){t.findEntityRanges((function(t){return null!==t.getEntity()}),(function(e){var n=t.getEntityAt(e),i=o.stringify(n);c[i]||(c[i]=n,r[i]="".concat(a),a++)})),l(t,r,n,i)})),{blocks:n,entityMap:r}}(t,e),e=function(t,e){var r=e.blocks,n=e.entityMap,i={};return Object.keys(n).forEach((function(e,r){var n=t.getEntity(o.unstringify(e));i[r]={type:n.getType(),mutability:n.getMutability(),data:n.getData()}})),{blocks:r,entityMap:i}}(t,e)}},"38003a0b557a53e3d87d":function(t,e,r){"use strict";var n=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.serialize=function(){return"Anchor: "+this.getAnchorKey()+":"+this.getAnchorOffset()+", Focus: "+this.getFocusKey()+":"+this.getFocusOffset()+", Is Backward: "+String(this.getIsBackward())+", Has Focus: "+String(this.getHasFocus())},i.getAnchorKey=function(){return this.get("anchorKey")},i.getAnchorOffset=function(){return this.get("anchorOffset")},i.getFocusKey=function(){return this.get("focusKey")},i.getFocusOffset=function(){return this.get("focusOffset")},i.getIsBackward=function(){return this.get("isBackward")},i.getHasFocus=function(){return this.get("hasFocus")},i.hasEdgeWithin=function(t,e,r){var n=this.getAnchorKey(),i=this.getFocusKey();if(n===i&&n===t){var c=this.getStartOffset(),o=this.getEndOffset();return e<=c&&c<=r||e<=o&&o<=r}if(t!==n&&t!==i)return!1;var a=t===n?this.getAnchorOffset():this.getFocusOffset();return e<=a&&r>=a},i.isCollapsed=function(){return this.getAnchorKey()===this.getFocusKey()&&this.getAnchorOffset()===this.getFocusOffset()},i.getStartKey=function(){return this.getIsBackward()?this.getFocusKey():this.getAnchorKey()},i.getStartOffset=function(){return this.getIsBackward()?this.getFocusOffset():this.getAnchorOffset()},i.getEndKey=function(){return this.getIsBackward()?this.getAnchorKey():this.getFocusKey()},i.getEndOffset=function(){return this.getIsBackward()?this.getAnchorOffset():this.getFocusOffset()},n.createEmpty=function(t){return new n({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0,isBackward:!1,hasFocus:!1})},n}((0,r("76fa84d944d1f38f6e3b").Record)({anchorKey:"",anchorOffset:0,focusKey:"",focusOffset:0,isBackward:!1,hasFocus:!1}));t.exports=n},"4b61c706d8ad823c167a":function(t,e,r){"use strict";var n=r("8a22ee059489be810850"),i=r("76fa84d944d1f38f6e3b");t.exports=function(t,e,r){var c=t.getBlockMap(),o=e.getStartKey(),a=e.getStartOffset(),s=e.getEndKey(),u=e.getEndOffset(),f=c.skipUntil((function(t,e){return e===o})).takeUntil((function(t,e){return e===s})).toOrderedMap().merge(i.OrderedMap([[s,c.get(s)]])).map((function(t,e){var i=e===o?a:0,c=e===s?u:t.getLength();return n(t,i,c,r)}));return t.merge({blockMap:c.merge(f),selectionBefore:e,selectionAfter:e})}},"520443a019bebb391131":function(t,e,r){"use strict";var n=r("69b09b35457c1368b65a"),i=r("c1d92d81d6f5e55e95bd"),c=n.isPlatform("Mac OS X"),o={isCtrlKeyCommand:function(t){return!!t.ctrlKey&&!t.altKey},isOptionKeyCommand:function(t){return c&&t.altKey},usesMacOSHeuristics:function(){return c},hasCommandModifier:function(t){return c?!!t.metaKey&&!t.altKey:o.isCtrlKeyCommand(t)},isSoftNewlineEvent:i};t.exports=o},"720a1e9de7260c20f560":function(t,e,r){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){i(t,e,r[e])}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=r("5ef06d4e52487e9de330"),o=r("fe3450770b86e34fc383"),a=r("36edb88168cd6caea791"),s=r("62dfa4b3f51d43b7bcfc"),u=r("d63142bffd73f4fd8175"),f=(r("2017217d0d6c5cd64a4c"),r("38003a0b557a53e3d87d")),l=r("b92d82f1932581e3f4d8"),h=r("bed1b188d8ceab53ce3f"),g=r("3900e122c7ca66b7cda6"),d=r("7bf8af16efd59e12703f"),p=r("f0cb91ae7de7d58c8d11"),y=r("76fa84d944d1f38f6e3b"),b=r("16249176c16d65581959"),k=p("draft_tree_data_support"),v=y.List,m=y.Map,C=y.OrderedMap,O=function(t,e){var r=t.key,n=t.type,i=t.data;return{text:t.text,depth:t.depth||0,type:n||"unstyled",key:r||d(),data:m(i),characterList:B(t,e)}},B=function(t,e){var r=t.text,i=t.entityRanges,c=t.inlineStyleRanges,o=i||[];return l(g(r,c||[]),h(r,o.filter((function(t){return e.hasOwnProperty(t.key)})).map((function(t){return n({},t,{key:e[t.key]})}))))},S=function(t){return n({},t,{key:t.key||d()})},K=function(t,e,r){var i=e.map((function(t){return n({},t,{parentRef:r})}));return t.concat(i.reverse())},T=function(t,e){var r=t.blocks.find((function(t){return Array.isArray(t.children)&&t.children.length>0})),i=k&&!r?u.fromRawStateToRawTreeState(t).blocks:t.blocks;return k?function(t,e){return t.map(S).reduce((function(r,i,c){Array.isArray(i.children)||b(!1);var a=i.children.map(S),s=new o(n({},O(i,e),{prevSibling:0===c?null:t[c-1].key,nextSibling:c===t.length-1?null:t[c+1].key,children:v(a.map((function(t){return t.key})))}));r=r.set(s.getKey(),s);for(var u=K([],a,s);u.length>0;){var f=u.pop(),l=f.parentRef,h=l.getChildKeys(),g=h.indexOf(f.key),d=Array.isArray(f.children);if(!d){d||b(!1);break}var p=f.children.map(S),y=new o(n({},O(f,e),{parent:l.getKey(),children:v(p.map((function(t){return t.key}))),prevSibling:0===g?null:h.get(g-1),nextSibling:g===h.size-1?null:h.get(g+1)}));r=r.set(y.getKey(),y),u=K(u,p,y)}return r}),C())}(i,e):function(t,e){return C(t.map((function(t){var r=new c(O(t,e));return[r.getKey(),r]})))}(r?u.fromRawTreeStateToRawState(t).blocks:i,e)};t.exports=function(t){Array.isArray(t.blocks)||b(!1);var e=function(t){var e=t.entityMap,r={};return Object.keys(e).forEach((function(t){var n=e[t],i=n.type,c=n.mutability,o=n.data;r[t]=s.__create(i,c,o||{})})),r}(t),r=T(t,e),n=r.isEmpty()?new f:f.createEmpty(r.first().getKey());return new a({blockMap:r,entityMap:e,selectionBefore:n,selectionAfter:n})}},"730f3e4c6b8c14577c03":function(t,e,r){},"8a22ee059489be810850":function(t,e,r){"use strict";var n=r("45f1aa0cd92b6017793d");t.exports=function(t,e,r,i){for(var c=e,o=t.getCharacterList();c<r;)o=o.set(c,n.applyEntity(o.get(c),i)),c++;return t.set("characterList",o)}},bddee11b929aa7df4383:function(t,e,r){"use strict";t.exports=function(t,e,r,n){var i=e.getStartKey(),c=e.getEndKey(),o=t.getBlockMap(),a=o.toSeq().skipUntil((function(t,e){return e===i})).takeUntil((function(t,e){return e===c})).concat([[c,o.get(c)]]).map((function(t){var e=t.getDepth()+r;return e=Math.max(0,Math.min(e,n)),t.set("depth",e)}));return o=o.merge(a),t.merge({blockMap:o,selectionBefore:e,selectionAfter:e})}},c10fcef28e07fad4e5ef:function(t,e,r){"use strict";var n;function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){c(t,e,r[e])}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=r("45f1aa0cd92b6017793d"),a=r("5ef06d4e52487e9de330"),s=r("fe3450770b86e34fc383"),u=r("fce1bfad62289753eb8e"),f=r("62dfa4b3f51d43b7bcfc"),l=r("7afc6b02fc3d6f085e19"),h=r("c47fba97daa49e4c2ab3"),g=r("7bf8af16efd59e12703f"),d=r("18294529337b2f3e8ca5"),p=r("f0cb91ae7de7d58c8d11"),y=r("76fa84d944d1f38f6e3b"),b=y.List,k=y.Map,v=y.OrderedSet,m=r("40bdd3c9045fc0ed33ec"),C=r("4c9ba30a24d6795a5532"),O=r("660d8010fbb8a3a90461"),B=r("1d616d86e23753ad134b"),S=p("draft_tree_data_support"),K=new RegExp("\r","g"),T=new RegExp("\n","g"),x=new RegExp("^\n","g"),w=new RegExp("&nbsp;","g"),E=new RegExp("&#13;?","g"),_=new RegExp("&#8203;?","g"),L=["bold","bolder","500","600","700","800","900"],A=["light","lighter","normal","100","200","300","400"],I=["className","href","rel","target","title"],D=["alt","className","height","src","width"],M=(c(n={},h("public/DraftStyleDefault/depth0"),0),c(n,h("public/DraftStyleDefault/depth1"),1),c(n,h("public/DraftStyleDefault/depth2"),2),c(n,h("public/DraftStyleDefault/depth3"),3),c(n,h("public/DraftStyleDefault/depth4"),4),n),R=k({b:"BOLD",code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",i:"ITALIC",s:"STRIKETHROUGH",strike:"STRIKETHROUGH",strong:"BOLD",u:"UNDERLINE",mark:"HIGHLIGHT"}),F=function(t){var e={};return t.mapKeys((function(t,r){var n=[r.element];void 0!==r.aliasedElements&&n.push.apply(n,r.aliasedElements),n.forEach((function(r){void 0===e[r]?e[r]=t:"string"===typeof e[r]?e[r]=[e[r],t]:e[r].push(t)}))})),k(e)},N=function(t){if(O(t)&&t.style.fontFamily.includes("monospace"))return"CODE";return null},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object.keys(M).some((function(r){t.classList.contains(r)&&(e=M[r])})),e},H=function(t){if(!m(t))return!1;var e=t;if(!e.href||"http:"!==e.protocol&&"https:"!==e.protocol&&"mailto:"!==e.protocol&&"tel:"!==e.protocol)return!1;try{new l(e.href);return!0}catch(t){return!1}},U=function(t){if(!B(t))return!1;var e=t;return!(!e.attributes.getNamedItem("src")||!e.attributes.getNamedItem("src").value)},P=function(t,e){if(!O(t))return e;var r=t,n=r.style.fontWeight,i=r.style.fontStyle,c=r.style.textDecoration;return e.withMutations((function(t){L.indexOf(n)>=0?t.add("BOLD"):A.indexOf(n)>=0&&t.remove("BOLD"),"italic"===i?t.add("ITALIC"):"normal"===i&&t.remove("ITALIC"),"underline"===c&&t.add("UNDERLINE"),"line-through"===c&&t.add("STRIKETHROUGH"),"none"===c&&(t.remove("UNDERLINE"),t.remove("STRIKETHROUGH"))}))},G=function(t){return"ul"===t||"ol"===t},W=function(){function t(t,e){c(this,"characterList",b()),c(this,"currentBlockType","unstyled"),c(this,"currentDepth",0),c(this,"currentEntity",null),c(this,"currentText",""),c(this,"wrapper",null),c(this,"blockConfigs",[]),c(this,"contentBlocks",[]),c(this,"entityMap",f),c(this,"blockTypeMap",void 0),c(this,"disambiguate",void 0),this.clear(),this.blockTypeMap=t,this.disambiguate=e}var e=t.prototype;return e.clear=function(){this.characterList=b(),this.blockConfigs=[],this.currentBlockType="unstyled",this.currentDepth=0,this.currentEntity=null,this.currentText="",this.entityMap=f,this.wrapper=null,this.contentBlocks=[]},e.addDOMNode=function(t){var e;return this.contentBlocks=[],this.currentDepth=0,(e=this.blockConfigs).push.apply(e,this._toBlockConfigs([t],v())),this._trimCurrentText(),""!==this.currentText&&this.blockConfigs.push(this._makeBlockConfig()),this},e.getContentBlocks=function(){return 0===this.contentBlocks.length&&(S?this._toContentBlocks(this.blockConfigs):this._toFlatContentBlocks(this.blockConfigs)),{contentBlocks:this.contentBlocks,entityMap:this.entityMap}},e._makeBlockConfig=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key||g(),r=i({key:e,type:this.currentBlockType,text:this.currentText,characterList:this.characterList,depth:this.currentDepth,parent:null,children:b(),prevSibling:null,nextSibling:null,childConfigs:[]},t);return this.characterList=b(),this.currentBlockType="unstyled",this.currentText="",r},e._toBlockConfigs=function(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n],c=i.nodeName.toLowerCase();if("body"===c||G(c)){this._trimCurrentText(),""!==this.currentText&&r.push(this._makeBlockConfig());var o=this.currentDepth,a=this.wrapper;G(c)&&(this.wrapper=c,G(a)&&this.currentDepth++),r.push.apply(r,this._toBlockConfigs(Array.from(i.childNodes),e)),this.currentDepth=o,this.wrapper=a}else{var s=this.blockTypeMap.get(c);if(void 0===s)if("#text"!==c)if("br"!==c)if(U(i))this._addImgNode(i,e);else if(H(i))this._addAnchorNode(i,r,e);else{var u=e;R.has(c)&&(u=u.add(R.get(c))),u=P(i,u);var f=N(i);null!=f&&(u=u.add(f)),r.push.apply(r,this._toBlockConfigs(Array.from(i.childNodes),u))}else this._addBreakNode(i,e);else this._addTextNode(i,e);else{this._trimCurrentText(),""!==this.currentText&&r.push(this._makeBlockConfig());var l=this.currentDepth,h=this.wrapper;if(this.wrapper="pre"===c?"pre":this.wrapper,"string"!==typeof s&&(s=this.disambiguate(c,this.wrapper)||s[0]||"unstyled"),!S&&O(i)&&("unordered-list-item"===s||"ordered-list-item"===s)){var d=i;this.currentDepth=j(d,this.currentDepth)}var p=g(),y=this._toBlockConfigs(Array.from(i.childNodes),e);this._trimCurrentText(),r.push(this._makeBlockConfig({key:p,childConfigs:y,type:s})),this.currentDepth=l,this.wrapper=h}}}return r},e._appendText=function(t,e){var r;this.currentText+=t;var n=o.create({style:e,entity:this.currentEntity});this.characterList=(r=this.characterList).push.apply(r,Array(t.length).fill(n))},e._trimCurrentText=function(){var t=this.currentText.length,e=t-this.currentText.trimLeft().length,r=this.currentText.trimRight().length,n=this.characterList.findEntry((function(t){return null!==t.getEntity()}));(e=void 0!==n?Math.min(e,n[0]):e)>(r=void 0!==(n=this.characterList.reverse().findEntry((function(t){return null!==t.getEntity()})))?Math.max(r,t-n[0]):r)?(this.currentText="",this.characterList=b()):(this.currentText=this.currentText.slice(e,r),this.characterList=this.characterList.slice(e,r))},e._addTextNode=function(t,e){var r=t.textContent;""===r.trim()&&"pre"!==this.wrapper&&(r=" "),"pre"!==this.wrapper&&(r=(r=r.replace(x,"")).replace(T," ")),this._appendText(r,e)},e._addBreakNode=function(t,e){C(t)&&this._appendText("\n",e)},e._addImgNode=function(t,e){if(B(t)){var r=t,n={};D.forEach((function(t){var e=r.getAttribute(t);e&&(n[t]=e)})),this.currentEntity=this.entityMap.__create("IMAGE","IMMUTABLE",n),p("draftjs_fix_paste_for_img")?"presentation"!==r.getAttribute("role")&&this._appendText("\ud83d\udcf7",e):this._appendText("\ud83d\udcf7",e),this.currentEntity=null}},e._addAnchorNode=function(t,e,r){if(m(t)){var n=t,i={};I.forEach((function(t){var e=n.getAttribute(t);e&&(i[t]=e)})),i.url=new l(n.href).toString(),this.currentEntity=this.entityMap.__create("LINK","MUTABLE",i||{}),e.push.apply(e,this._toBlockConfigs(Array.from(t.childNodes),r)),this.currentEntity=null}},e._toContentBlocks=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t.length-1,n=0;n<=r;n++){var c=t[n];c.parent=e,c.prevSibling=n>0?t[n-1].key:null,c.nextSibling=n<r?t[n+1].key:null,c.children=b(c.childConfigs.map((function(t){return t.key}))),this.contentBlocks.push(new s(i({},c))),this._toContentBlocks(c.childConfigs,c.key)}},e._hoistContainersInBlockConfigs=function(t){var e=this;return b(t).flatMap((function(t){return"unstyled"!==t.type||""!==t.text?[t]:e._hoistContainersInBlockConfigs(t.childConfigs)}))},e._toFlatContentBlocks=function(t){var e=this;this._hoistContainersInBlockConfigs(t).forEach((function(t){var r=e._extractTextFromBlockConfigs(t.childConfigs),n=r.text,c=r.characterList;e.contentBlocks.push(new a(i({},t,{text:t.text+n,characterList:t.characterList.concat(c)})))}))},e._extractTextFromBlockConfigs=function(t){for(var e=t.length-1,r="",n=b(),i=0;i<=e;i++){var c=t[i];r+=c.text,n=n.concat(c.characterList),""!==r&&"unstyled"!==c.type&&(r+="\n",n=n.push(n.last()));var o=this._extractTextFromBlockConfigs(c.childConfigs);r+=o.text,n=n.concat(o.characterList)}return{text:r,characterList:n}},t}();t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,n=e(t=t.trim().replace(K,"").replace(w," ").replace(E,"").replace(_,""));if(!n)return null;var i=F(r),c=function(t,e){return"li"===t?"ol"===e?"ordered-list-item":"unordered-list-item":null};return new W(i,c).addDOMNode(n).getContentBlocks()}},de4caaf9e83ca02f8e95:function(t,e,r){"use strict";var n=r("22c5837e0f260287e628"),i=r("824071434fd2b4849dca"),c=r("bddee11b929aa7df4383"),o=r("8d7ecee72ab74b12051d"),a={currentBlockContainsLink:function(t){var e=t.getSelection(),r=t.getCurrentContent(),n=r.getEntityMap();return r.getBlockForKey(e.getAnchorKey()).getCharacterList().slice(e.getStartOffset(),e.getEndOffset()).some((function(t){var e=t.getEntity();return!!e&&"LINK"===n.__get(e).getType()}))},getCurrentBlockType:function(t){var e=t.getSelection();return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType()},getDataObjectForLinkURL:function(t){return{url:t.toString()}},handleKeyCommand:function(t,e,r){switch(e){case"bold":return a.toggleInlineStyle(t,"BOLD");case"italic":return a.toggleInlineStyle(t,"ITALIC");case"underline":return a.toggleInlineStyle(t,"UNDERLINE");case"code":return a.toggleCode(t);case"backspace":case"backspace-word":case"backspace-to-start-of-line":return a.onBackspace(t);case"delete":case"delete-word":case"delete-to-end-of-block":return a.onDelete(t);default:return null}},insertSoftNewline:function(t){var e=n.insertText(t.getCurrentContent(),t.getSelection(),"\n",t.getCurrentInlineStyle(),null),r=i.push(t,e,"insert-characters");return i.forceSelection(r,e.getSelectionAfter())},onBackspace:function(t){var e=t.getSelection();if(!e.isCollapsed()||e.getAnchorOffset()||e.getFocusOffset())return null;var r=t.getCurrentContent(),n=e.getStartKey(),c=r.getBlockBefore(n);if(c&&"atomic"===c.getType()){var o=r.getBlockMap().delete(c.getKey()),s=r.merge({blockMap:o,selectionAfter:e});if(s!==r)return i.push(t,s,"remove-range")}var u=a.tryToRemoveBlockStyle(t);return u?i.push(t,u,"change-block-type"):null},onDelete:function(t){var e=t.getSelection();if(!e.isCollapsed())return null;var r=t.getCurrentContent(),c=e.getStartKey(),o=r.getBlockForKey(c).getLength();if(e.getStartOffset()<o)return null;var a=r.getBlockAfter(c);if(!a||"atomic"!==a.getType())return null;var s=e.merge({focusKey:a.getKey(),focusOffset:a.getLength()}),u=n.removeRange(r,s,"forward");return u!==r?i.push(t,u,"remove-range"):null},onTab:function(t,e,r){var n=e.getSelection(),o=n.getAnchorKey();if(o!==n.getFocusKey())return e;var a=e.getCurrentContent(),s=a.getBlockForKey(o),u=s.getType();if("unordered-list-item"!==u&&"ordered-list-item"!==u)return e;t.preventDefault();var f=s.getDepth();if(!t.shiftKey&&f===r)return e;var l=c(a,n,t.shiftKey?-1:1,r);return i.push(e,l,"adjust-depth")},toggleBlockType:function(t,e){var r=t.getSelection(),c=r.getStartKey(),a=r.getEndKey(),s=t.getCurrentContent(),u=r;if(c!==a&&0===r.getEndOffset()){var f=o(s.getBlockBefore(a));a=f.getKey(),u=u.merge({anchorKey:c,anchorOffset:r.getStartOffset(),focusKey:a,focusOffset:f.getLength(),isBackward:!1})}if(s.getBlockMap().skipWhile((function(t,e){return e!==c})).reverse().skipWhile((function(t,e){return e!==a})).some((function(t){return"atomic"===t.getType()})))return t;var l=s.getBlockForKey(c).getType()===e?"unstyled":e;return i.push(t,n.setBlockType(s,u,l),"change-block-type")},toggleCode:function(t){var e=t.getSelection(),r=e.getAnchorKey(),n=e.getFocusKey();return e.isCollapsed()||r!==n?a.toggleBlockType(t,"code-block"):a.toggleInlineStyle(t,"CODE")},toggleInlineStyle:function(t,e){var r=t.getSelection(),c=t.getCurrentInlineStyle();if(r.isCollapsed())return i.setInlineStyleOverride(t,c.has(e)?c.remove(e):c.add(e));var o,a=t.getCurrentContent();return o=c.has(e)?n.removeInlineStyle(a,r,e):n.applyInlineStyle(a,r,e),i.push(t,o,"change-inline-style")},toggleLink:function(t,e,r){var c=n.applyEntity(t.getCurrentContent(),e,r);return i.push(t,c,"apply-entity")},tryToRemoveBlockStyle:function(t){var e=t.getSelection(),r=e.getAnchorOffset();if(e.isCollapsed()&&0===r){var i=e.getAnchorKey(),c=t.getCurrentContent(),o=c.getBlockForKey(i).getType(),a=c.getBlockBefore(i);if("code-block"===o&&a&&"code-block"===a.getType()&&0!==a.getLength())return null;if("unstyled"!==o)return n.setBlockType(c,e,"unstyled")}return null}};t.exports=a},e16c9516321a0266d30e:function(t,e,r){"use strict";var n=r("22c5837e0f260287e628"),i=r("824071434fd2b4849dca"),c=r("f8da1896dbc7de881f6a"),o=r("8d7ecee72ab74b12051d"),a=null,s={cut:function(t){var e=t.getCurrentContent(),r=t.getSelection(),s=null;if(r.isCollapsed()){var u=r.getAnchorKey(),f=e.getBlockForKey(u).getLength();if(f===r.getAnchorOffset()){var l=e.getKeyAfter(u);if(null==l)return t;s=r.set("focusKey",l).set("focusOffset",0)}else s=r.set("focusOffset",f)}else s=r;s=o(s),a=c(e,s);var h=n.removeRange(e,s,"forward");return h===e?t:i.push(t,h,"remove-range")},paste:function(t){if(!a)return t;var e=n.replaceWithFragment(t.getCurrentContent(),t.getSelection(),a);return i.push(t,e,"insert-fragment")}};t.exports=s}}]);