(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"1e9a1c2fcc09594839f5":function(e,t,o){"use strict";var r=o("83406643bfb209d249f4");function n(){return(n=r||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var c=o("14da18b4f8f556411670"),s=o("e66ec0e5ac49cc5b681d"),l=o("8af190b70a6bc55c6f1b"),d=o("9119b5ea4b71630faccd"),p=o("b0774e8c8af65ae74634"),u=o("fee4dfaf98aa87c95d26"),f=o("5d11917a329b77be8e92"),b=o("c47fba97daa49e4c2ab3"),h=o("bec957daa8449c69af57"),y=o("6870192a13f257a10610"),v=o("79a7e20fd3bf662c2e75"),_=o("16249176c16d65581959"),g=o("660d8010fbb8a3a90461"),m=o("8d7ecee72ab74b12051d"),S=function(e,t){return e.getAnchorKey()===t||e.getFocusKey()===t},C=function(e){var t,o;function r(){for(var t,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return a(i(t=e.call.apply(e,[this].concat(r))||this),"_node",void 0),t}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var C=r.prototype;return C.shouldComponentUpdate=function(e){return this.props.block!==e.block||this.props.tree!==e.tree||this.props.direction!==e.direction||S(e.selection,e.block.getKey())&&e.forceSelection},C.componentDidMount=function(){if(!this.props.preventScroll){var e=this.props.selection,t=e.getEndKey();if(e.getHasFocus()&&t===this.props.block.getKey()){var o=this._node;if(null!=o){var r,n=p.getScrollParent(o),i=y(n);if(n===window){var a=h(o);(r=a.y+a.height-v().height)>0&&window.scrollTo(i.x,i.y+r+10)}else{g(o)||_(!1),(r=o.offsetHeight+o.offsetTop-(n.offsetTop+n.offsetHeight+i.y))>0&&d.setTop(n,d.getTop(n)+r+10)}}}}},C._renderChildren=function(){var e=this,t=this.props.block,o=t.getKey(),r=t.getText(),i=this.props.tree.size-1,a=S(this.props.selection,o);return this.props.tree.map((function(d,p){var b=d.get("leaves");if(0===b.size)return null;var h=b.size-1,y=b.map((function(n,d){var u=s.encode(o,p,d),f=n.get("start"),b=n.get("end");return l.createElement(c,{key:u,offsetKey:u,block:t,start:f,selection:a?e.props.selection:null,forceSelection:e.props.forceSelection,text:r.slice(f,b),styleSet:t.getInlineStyleAt(f),customStyleMap:e.props.customStyleMap,customStyleFn:e.props.customStyleFn,isLast:p===i&&d===h})})).toArray(),v=d.get("decoratorKey");if(null==v)return y;if(!e.props.decorator)return y;var _=m(e.props.decorator),g=_.getComponentForKey(v);if(!g)return y;var S=_.getPropsForKey(v),C=s.encode(o,p,0),D=b.first().get("start"),E=b.last().get("end"),w=r.slice(D,E),K=t.getEntityAt(d.get("start")),k=f.getHTMLDirIfDifferent(u.getDirection(w),e.props.direction),O={contentState:e.props.contentState,decoratedText:w,dir:k,start:D,end:E,blockKey:o,entityKey:K,offsetKey:C};return l.createElement(g,n({},S,O,{key:C}),y)})).toArray()},C.render=function(){var e=this,t=this.props,o=t.direction,r=t.offsetKey,n=b({"public/DraftStyleDefault/block":!0,"public/DraftStyleDefault/ltr":"LTR"===o,"public/DraftStyleDefault/rtl":"RTL"===o});return l.createElement("div",{"data-offset-key":r,className:n,ref:function(t){return e._node=t}},this._renderChildren())},r}(l.Component);e.exports=C},"4cf1c5db091c4bf7c716":function(e,t,o){"use strict";(function(t){var r=o("83406643bfb209d249f4");function n(){return(n=r||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){c(e,t,o[t])}))}return e}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l=o("fce1bfad62289753eb8e"),d=o("ce88af74c44ba944a79b"),p=o("f5b3e81ec6410ade92cf"),u=o("0c038af48ebf20c0d13e"),f=o("b697a7e575185d22dbd5"),b=o("5c9b0c049e50f60cd0b3"),h=o("e8175c27758fd352a401"),y=o("bce4bb15d9b8dcaabce2"),v=o("67c65225174d4d3c391f"),_=o("824071434fd2b4849dca"),g=o("8af190b70a6bc55c6f1b"),m=o("9119b5ea4b71630faccd"),S=o("b0774e8c8af65ae74634"),C=o("69b09b35457c1368b65a"),D=o("c47fba97daa49e4c2ab3"),E=o("7bf8af16efd59e12703f"),w=o("98e4f57c0f5dffa1712c"),K=o("6870192a13f257a10610"),k=o("f0cb91ae7de7d58c8d11"),O=o("16249176c16d65581959"),P=o("660d8010fbb8a3a90461"),M=o("8d7ecee72ab74b12051d"),x=C.isBrowser("IE"),F=!x,I={edit:b,composite:p,drag:f,cut:null,render:null},T=!1,H=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var o=t.prototype;return o.render=function(){return null},o.componentDidMount=function(){this._update()},o.componentDidUpdate=function(){this._update()},o._update=function(){var e=this.props.editor;e._latestEditorState=this.props.editorState,e._blockSelectEvents=!0},t}(g.Component),B=function(e){function o(t){var o;return c(a(o=e.call(this,t)||this),"_blockSelectEvents",void 0),c(a(o),"_clipboard",void 0),c(a(o),"_handler",void 0),c(a(o),"_dragCount",void 0),c(a(o),"_internalDrag",void 0),c(a(o),"_editorKey",void 0),c(a(o),"_placeholderAccessibilityID",void 0),c(a(o),"_latestEditorState",void 0),c(a(o),"_latestCommittedEditorState",void 0),c(a(o),"_pendingStateFromBeforeInput",void 0),c(a(o),"_onBeforeInput",void 0),c(a(o),"_onBlur",void 0),c(a(o),"_onCharacterData",void 0),c(a(o),"_onCompositionEnd",void 0),c(a(o),"_onCompositionStart",void 0),c(a(o),"_onCopy",void 0),c(a(o),"_onCut",void 0),c(a(o),"_onDragEnd",void 0),c(a(o),"_onDragOver",void 0),c(a(o),"_onDragStart",void 0),c(a(o),"_onDrop",void 0),c(a(o),"_onInput",void 0),c(a(o),"_onFocus",void 0),c(a(o),"_onKeyDown",void 0),c(a(o),"_onKeyPress",void 0),c(a(o),"_onKeyUp",void 0),c(a(o),"_onMouseDown",void 0),c(a(o),"_onMouseUp",void 0),c(a(o),"_onPaste",void 0),c(a(o),"_onSelect",void 0),c(a(o),"editor",void 0),c(a(o),"editorContainer",void 0),c(a(o),"focus",void 0),c(a(o),"blur",void 0),c(a(o),"setMode",void 0),c(a(o),"exitCurrentMode",void 0),c(a(o),"restoreEditorDOM",void 0),c(a(o),"setClipboard",void 0),c(a(o),"getClipboard",void 0),c(a(o),"getEditorKey",void 0),c(a(o),"update",void 0),c(a(o),"onDragEnter",void 0),c(a(o),"onDragLeave",void 0),c(a(o),"_handleEditorContainerRef",(function(e){o.editorContainer=e,o.editor=null!==e?e.firstChild:null})),c(a(o),"focus",(function(e){var t=o.props.editorState,r=t.getSelection().getHasFocus(),n=o.editor;if(n){var i=S.getScrollParent(n),a=e||K(i),c=a.x,s=a.y;P(n)||O(!1),n.focus(),i===window?window.scrollTo(c,s):m.setTop(i,s),r||o.update(_.forceSelection(t,t.getSelection()))}})),c(a(o),"blur",(function(){var e=o.editor;e&&(P(e)||O(!1),e.blur())})),c(a(o),"setMode",(function(e){var t=o.props,r=t.onPaste,n=t.onCut,a=t.onCopy,c=i({},I.edit);r&&(c.onPaste=r),n&&(c.onCut=n),a&&(c.onCopy=a);var s=i({},I,{edit:c});o._handler=s[e]})),c(a(o),"exitCurrentMode",(function(){o.setMode("edit")})),c(a(o),"restoreEditorDOM",(function(e){o.setState({contentsKey:o.state.contentsKey+1},(function(){o.focus(e)}))})),c(a(o),"setClipboard",(function(e){o._clipboard=e})),c(a(o),"getClipboard",(function(){return o._clipboard})),c(a(o),"update",(function(e){o._latestEditorState=e,o.props.onChange(e)})),c(a(o),"onDragEnter",(function(){o._dragCount++})),c(a(o),"onDragLeave",(function(){o._dragCount--,0===o._dragCount&&o.exitCurrentMode()})),o._blockSelectEvents=!1,o._clipboard=null,o._handler=null,o._dragCount=0,o._editorKey=t.editorKey||E(),o._placeholderAccessibilityID="placeholder-"+o._editorKey,o._latestEditorState=t.editorState,o._latestCommittedEditorState=t.editorState,o._onBeforeInput=o._buildHandler("onBeforeInput"),o._onBlur=o._buildHandler("onBlur"),o._onCharacterData=o._buildHandler("onCharacterData"),o._onCompositionEnd=o._buildHandler("onCompositionEnd"),o._onCompositionStart=o._buildHandler("onCompositionStart"),o._onCopy=o._buildHandler("onCopy"),o._onCut=o._buildHandler("onCut"),o._onDragEnd=o._buildHandler("onDragEnd"),o._onDragOver=o._buildHandler("onDragOver"),o._onDragStart=o._buildHandler("onDragStart"),o._onDrop=o._buildHandler("onDrop"),o._onInput=o._buildHandler("onInput"),o._onFocus=o._buildHandler("onFocus"),o._onKeyDown=o._buildHandler("onKeyDown"),o._onKeyPress=o._buildHandler("onKeyPress"),o._onKeyUp=o._buildHandler("onKeyUp"),o._onMouseDown=o._buildHandler("onMouseDown"),o._onMouseUp=o._buildHandler("onMouseUp"),o._onPaste=o._buildHandler("onPaste"),o._onSelect=o._buildHandler("onSelect"),o.getEditorKey=function(){return o._editorKey},o.state={contentsKey:0},o}s(o,e);var r=o.prototype;return r._buildHandler=function(e){var t=this;return function(o){if(!t.props.readOnly){var r=t._handler&&t._handler[e];r&&(h?h((function(){return r(t,o)})):r(t,o))}}},r._showPlaceholder=function(){return!!this.props.placeholder&&!this.props.editorState.isInCompositionMode()&&!this.props.editorState.getCurrentContent().hasText()},r._renderPlaceholder=function(){if(this._showPlaceholder()){var e={text:M(this.props.placeholder),editorState:this.props.editorState,textAlignment:this.props.textAlignment,accessibilityID:this._placeholderAccessibilityID};return g.createElement(y,e)}return null},r._renderARIADescribedBy=function(){var e=this.props.ariaDescribedBy||"",t=this._showPlaceholder()?this._placeholderAccessibilityID:"";return e.replace("{{editor_id_placeholder}}",t)||void 0},r.render=function(){var e=this.props,t=e.blockRenderMap,o=e.blockRendererFn,r=e.blockStyleFn,a=e.customStyleFn,c=e.customStyleMap,s=e.editorState,l=e.preventScroll,p=e.readOnly,f=e.textAlignment,b=e.textDirectionality,h=D({"DraftEditor/root":!0,"DraftEditor/alignLeft":"left"===f,"DraftEditor/alignRight":"right"===f,"DraftEditor/alignCenter":"center"===f}),y=this.props.role||"textbox",v="combobox"===y?!!this.props.ariaExpanded:null,_={blockRenderMap:t,blockRendererFn:o,blockStyleFn:r,customStyleMap:i({},d,c),customStyleFn:a,editorKey:this._editorKey,editorState:s,preventScroll:l,textDirectionality:b};return g.createElement("div",{className:h},this._renderPlaceholder(),g.createElement("div",{className:D("DraftEditor/editorContainer"),ref:this._handleEditorContainerRef},g.createElement("div",{"aria-activedescendant":p?null:this.props.ariaActiveDescendantID,"aria-autocomplete":p?null:this.props.ariaAutoComplete,"aria-controls":p?null:this.props.ariaControls,"aria-describedby":this._renderARIADescribedBy(),"aria-expanded":p?null:v,"aria-label":this.props.ariaLabel,"aria-labelledby":this.props.ariaLabelledBy,"aria-multiline":this.props.ariaMultiline,"aria-owns":p?null:this.props.ariaOwneeID,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,className:D({notranslate:!p,"public/DraftEditor/content":!0}),contentEditable:!p,"data-testid":this.props.webDriverTestID,onBeforeInput:this._onBeforeInput,onBlur:this._onBlur,onCompositionEnd:this._onCompositionEnd,onCompositionStart:this._onCompositionStart,onCopy:this._onCopy,onCut:this._onCut,onDragEnd:this._onDragEnd,onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave,onDragOver:this._onDragOver,onDragStart:this._onDragStart,onDrop:this._onDrop,onFocus:this._onFocus,onInput:this._onInput,onKeyDown:this._onKeyDown,onKeyPress:this._onKeyPress,onKeyUp:this._onKeyUp,onMouseUp:this._onMouseUp,onPaste:this._onPaste,onSelect:this._onSelect,ref:this.props.editorRef,role:p?null:y,spellCheck:F&&this.props.spellCheck,style:{outline:"none",userSelect:"text",WebkitUserSelect:"text",whiteSpace:"pre-wrap",wordWrap:"break-word"},suppressContentEditableWarning:!0,tabIndex:this.props.tabIndex},g.createElement(H,{editor:this,editorState:s}),g.createElement(u,n({},_,{key:"contents"+this.state.contentsKey})))))},r.componentDidMount=function(){this._blockSelectEvents=!1,!T&&k("draft_ods_enabled")&&(T=!0,v.initODS()),this.setMode("edit"),x&&(this.editor?this.editor.ownerDocument.execCommand("AutoUrlDetect",!1,!1):t.execCommand("AutoUrlDetect",!1,!1))},r.componentDidUpdate=function(){this._blockSelectEvents=!1,this._latestEditorState=this.props.editorState,this._latestCommittedEditorState=this.props.editorState},o}(g.Component);c(B,"defaultProps",{ariaDescribedBy:"{{editor_id_placeholder}}",blockRenderMap:l,blockRendererFn:function(){return null},blockStyleFn:function(){return""},keyBindingFn:w,readOnly:!1,spellCheck:!1,stripPastedStyles:!1}),e.exports=B}).call(this,o("698d75b157f24ae829cc"))},f5b3e81ec6410ade92cf:function(e,t,o){"use strict";var r=o("9eddd18c724340e5057d"),n=o("22c5837e0f260287e628"),i=o("e66ec0e5ac49cc5b681d"),a=o("824071434fd2b4849dca"),c=o("82fdb2b02b8c353fbc5c"),s=o("69b09b35457c1368b65a"),l=o("4cacbc5a5109a82c121d"),d=o("9d54e5288abaa199812a"),p=o("ec8dced76b79fd794eda"),u=o("e7b38b2c8440607e33df"),f=o("8d7ecee72ab74b12051d"),b=s.isBrowser("IE"),h=!1,y=!1,v=null;var _={onCompositionStart:function(e){y=!0,function(e){v||(v=new r(d(e))).start()}(e)},onCompositionEnd:function(e){h=!1,y=!1,setTimeout((function(){h||_.resolveComposition(e)}),20)},onSelect:l,onKeyDown:function(e,t){if(!y)return _.resolveComposition(e),void e._onKeyDown(t);t.which!==c.RIGHT&&t.which!==c.LEFT||t.preventDefault()},onKeyPress:function(e,t){t.which===c.RETURN&&t.preventDefault()},resolveComposition:function(e){if(!y){var t=f(v).stopAndFlushMutations();v=null,h=!0;var o=a.set(e._latestEditorState,{inCompositionMode:!1});if(e.exitCurrentMode(),t.size){var r=o.getCurrentContent();t.forEach((function(e,t){var c=i.decode(t),s=c.blockKey,l=c.decoratorKey,d=c.leafKey,p=o.getBlockTree(s).getIn([l,"leaves",d]),f=p.start,b=p.end,h=o.getSelection().merge({anchorKey:s,focusKey:s,anchorOffset:f,focusOffset:b,isBackward:!1}),y=u(r,h),v=r.getBlockForKey(s).getInlineStyleAt(f);r=n.replaceText(r,h,e,v,y),o=a.set(o,{currentContent:r})}));var c=p(o,d(e)).selectionState;e.restoreEditorDOM();var s=b?a.forceSelection(o,c):a.acceptSelection(o,c);e.update(a.push(s,r,"insert-characters"))}else e.update(o)}}};e.exports=_},f726403f931fdaa65521:function(e,t,o){"use strict";var r=o("83406643bfb209d249f4");function n(){return(n=r||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){c(e,t,o[t])}))}return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var s=o("0b4415a7f4c9615cac6e"),l=o("e66ec0e5ac49cc5b681d"),d=o("8af190b70a6bc55c6f1b"),p=o("9119b5ea4b71630faccd"),u=o("b0774e8c8af65ae74634"),f=o("bec957daa8449c69af57"),b=o("6870192a13f257a10610"),h=o("79a7e20fd3bf662c2e75"),y=o("76fa84d944d1f38f6e3b"),v=o("16249176c16d65581959"),_=o("660d8010fbb8a3a90461"),g=(y.List,function(e,t){return e.getAnchorKey()===t||e.getFocusKey()===t}),m=function(e,t){var o=t.get(e.getType())||t.get("unstyled"),r=o.wrapper;return{Element:o.element||t.get("unstyled").element,wrapperTemplate:r}},S=function(e,t){var o=t(e);return o?{CustomComponent:o.component,customProps:o.props,customEditable:o.editable}:{}},C=function(e,t,o,r,n,i){var c={"data-block":!0,"data-editor":t,"data-offset-key":o,key:e.getKey(),ref:i},s=r(e);return s&&(c.className=s),void 0!==n.customEditable&&(c=a({},c,{contentEditable:n.customEditable,suppressContentEditableWarning:!0})),c},D=function(e){var t,o;function r(){for(var t,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return c(i(t=e.call.apply(e,[this].concat(r))||this),"wrapperRef",d.createRef()),t}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var y=r.prototype;return y.shouldComponentUpdate=function(e){var t=this.props,o=t.block,r=t.direction,n=t.tree,i=!o.getChildKeys().isEmpty(),a=o!==e.block||n!==e.tree||r!==e.direction||g(e.selection,e.block.getKey())&&e.forceSelection;return i||a},y.componentDidMount=function(){var e=this.props.selection,t=e.getEndKey();if(e.getHasFocus()&&t===this.props.block.getKey()){var o=this.wrapperRef.current;if(o){var r,n=u.getScrollParent(o),i=b(n);if(n===window){var a=f(o);(r=a.y+a.height-h().height)>0&&window.scrollTo(i.x,i.y+r+10)}else{_(o)||v(!1);var c=o;(r=c.offsetHeight+c.offsetTop-(n.offsetHeight+i.y))>0&&p.setTop(n,p.getTop(n)+r+10)}}}},y.render=function(){var e=this,t=this.props,o=t.block,i=t.blockRenderMap,c=t.blockRendererFn,p=t.blockStyleFn,u=t.contentState,f=t.decorator,b=t.editorKey,h=t.editorState,y=t.customStyleFn,v=t.customStyleMap,_=t.direction,D=t.forceSelection,E=t.selection,w=t.tree,K=null;o.children.size&&(K=o.children.reduce((function(t,o){var n=l.encode(o,0,0),s=u.getBlockForKey(o),f=S(s,c),y=f.CustomComponent||r,v=m(s,i),_=v.Element,g=v.wrapperTemplate,D=C(s,b,n,p,f,null),E=a({},e.props,{tree:h.getBlockTree(o),blockProps:f.customProps,offsetKey:n,block:s});return t.push(d.createElement(_,D,d.createElement(y,E))),!g||function(e,t){var o=e.getNextSiblingKey();return!!o&&t.getBlockForKey(o).getType()===e.getType()}(s,u)||function(e,t,o){var r=[],n=!0,i=!1,a=void 0;try{for(var c,s=o.reverse()[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){var p=c.value;if(p.type!==t)break;r.push(p)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}o.splice(o.indexOf(r[0]),r.length+1);var u=r.reverse(),f=u[0].key;o.push(d.cloneElement(e,{key:"".concat(f,"-wrap"),"data-offset-key":l.encode(f,0,0)},u))}(g,_,t),t}),[]));var k=o.getKey(),O=l.encode(k,0,0),P=S(o,c),M=P.CustomComponent,x=null!=M?d.createElement(M,n({},this.props,{tree:h.getBlockTree(k),blockProps:P.customProps,offsetKey:O,block:o})):d.createElement(s,{block:o,children:K,contentState:u,customStyleFn:y,customStyleMap:v,decorator:f,direction:_,forceSelection:D,hasSelection:g(E,k),selection:E,tree:w});if(o.getParentKey())return x;var F=m(o,i).Element,I=C(o,b,O,p,P,this.wrapperRef);return d.createElement(F,I,x)},r}(d.Component);e.exports=D}}]);