(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{d121a80e39910b75e4b0:function(e,t,n){"use strict";var i=n("33596fab0438f9d2c0cc"),r=n("b71ea345d7260abdcc02");Object.defineProperty(t,"__esModule",{value:!0}),t.getDomTreeShapes=m,t.findNativeHandler=L,t.default=t.SwipeableViewsContext=void 0;var o=r(n("80aa86a6abe70f7bb2b8")),a=r(n("1c5c92e11ebf383b6380")),s=r(n("335bc2d81d25ea18fb1b")),l=r(n("5f9fb2b94757257f2098")),d=r(n("c2e04f40aa7d02e4ac66")),c=r(n("524aa61f5387e79f6128")),h=r(n("c3d7165a682b015550d5")),p=i(n("8af190b70a6bc55c6f1b")),u=(r(n("8a2d1b95e05b6a321e74")),r(n("49a47d064cfbf2949ee5")),n("8d11c065e50ea2e9d02f"));function g(e,t,n,i){return e.addEventListener(t,n,i),{remove:function(){e.removeEventListener(t,n,i)}}}var f={direction:"ltr",display:"flex",willChange:"transform"},v={width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"},x={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(e){return"translate(".concat(-e,"%, 0)")},"x-reverse":function(e){return"translate(".concat(e,"%, 0)")},y:function(e){return"translate(0, ".concat(-e,"%)")},"y-reverse":function(e){return"translate(0, ".concat(e,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function S(e,t){var n=t.duration,i=t.easeFunction,r=t.delay;return"".concat(e," ").concat(n," ").concat(i," ").concat(r)}function y(e,t){var n=x.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function w(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function m(e,t){for(var n=[];e&&e!==t&&e!==document.body&&!e.hasAttribute("data-swipeable");){var i=window.getComputedStyle(e);"absolute"===i.getPropertyValue("position")||"hidden"===i.getPropertyValue("overflow-x")?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var b=null;function L(e){var t=e.domTreeShapes,n=e.pageX,i=e.startX,r=e.axis;return t.some((function(e){var t=n>=i;"x"!==r&&"y"!==r||(t=!t);var o=Math.round(e[x.scrollPosition[r]]),a=o>0,s=o+e[x.clientLength[r]]<e[x.scrollLength[r]];return!!(t&&s||!t&&a)&&(b=e.element,!0)}))}var M=p.createContext();t.SwipeableViewsContext=M;var T=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,d.default)(this,(0,c.default)(t).call(this,e))).rootNode=null,n.containerNode=null,n.ignoreNextScrollEvents=!1,n.viewLength=0,n.startX=0,n.lastX=0,n.vx=0,n.startY=0,n.isSwiping=void 0,n.started=!1,n.startIndex=0,n.transitionListener=null,n.touchMoveListener=null,n.activeSlide=null,n.indexCurrent=null,n.firstRenderTimeout=null,n.setRootNode=function(e){n.rootNode=e},n.setContainerNode=function(e){n.containerNode=e},n.setActiveSlide=function(e){n.activeSlide=e,n.updateHeight()},n.handleSwipeStart=function(e){var t=n.props.axis,i=y(e.touches[0],t);n.viewLength=n.rootNode.getBoundingClientRect()[x.length[t]],n.startX=i.pageX,n.lastX=i.pageX,n.vx=0,n.startY=i.pageY,n.isSwiping=void 0,n.started=!0;var r=window.getComputedStyle(n.containerNode),o=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform");if(o&&"none"!==o){var a=o.split("(")[1].split(")")[0].split(","),s=window.getComputedStyle(n.rootNode),l=y({pageX:parseInt(a[4],10),pageY:parseInt(a[5],10)},t);n.startIndex=-l.pageX/(n.viewLength-parseInt(s.paddingLeft,10)-parseInt(s.paddingRight,10))||0}},n.handleSwipeMove=function(e){if(n.started){if(null===b||b===n.rootNode){var t=n.props,i=t.axis,r=t.children,o=t.ignoreNativeScroll,a=t.onSwitching,s=t.resistance,l=y(e.touches[0],i);if(void 0===n.isSwiping){var d=Math.abs(l.pageX-n.startX),c=Math.abs(l.pageY-n.startY),h=d>c&&d>u.constant.UNCERTAINTY_THRESHOLD;if(!s&&("y"===i||"y-reverse"===i)&&(0===n.indexCurrent&&n.startX<l.pageX||n.indexCurrent===p.Children.count(n.props.children)-1&&n.startX>l.pageX))return void(n.isSwiping=!1);if(d>c&&e.preventDefault(),!0===h||c>u.constant.UNCERTAINTY_THRESHOLD)return n.isSwiping=h,void(n.startX=l.pageX)}if(!0===n.isSwiping){e.preventDefault(),n.vx=.5*n.vx+.5*(l.pageX-n.lastX),n.lastX=l.pageX;var g=(0,u.computeIndex)({children:r,resistance:s,pageX:l.pageX,startIndex:n.startIndex,startX:n.startX,viewLength:n.viewLength}),f=g.index,v=g.startX;if(null===b&&!o)if(L({domTreeShapes:m(e.target,n.rootNode),startX:n.startX,pageX:l.pageX,axis:i}))return;v?n.startX=v:null===b&&(b=n.rootNode),n.setIndexCurrent(f);var x=function(){a&&a(f,"move")};!n.state.displaySameSlide&&n.state.isDragging||n.setState({displaySameSlide:!1,isDragging:!0},x),x()}}}else n.handleTouchStart(e)},n.handleSwipeEnd=function(){if(b=null,n.started&&(n.started=!1,!0===n.isSwiping)){var e,t=n.state.indexLatest,i=n.indexCurrent,r=t-i;e=Math.abs(n.vx)>n.props.threshold?n.vx>0?Math.floor(i):Math.ceil(i):Math.abs(r)>n.props.hysteresis?r>0?Math.floor(i):Math.ceil(i):t;var o=p.Children.count(n.props.children)-1;e<0?e=0:e>o&&(e=o),n.setIndexCurrent(e),n.setState({indexLatest:e,isDragging:!1},(function(){n.props.onSwitching&&n.props.onSwitching(e,"end"),n.props.onChangeIndex&&e!==t&&n.props.onChangeIndex(e,t,{reason:"swipe"}),i===t&&n.handleTransitionEnd()}))}},n.handleTouchStart=function(e){n.props.onTouchStart&&n.props.onTouchStart(e),n.handleSwipeStart(e)},n.handleTouchEnd=function(e){n.props.onTouchEnd&&n.props.onTouchEnd(e),n.handleSwipeEnd(e)},n.handleMouseDown=function(e){n.props.onMouseDown&&n.props.onMouseDown(e),e.persist(),n.handleSwipeStart(w(e))},n.handleMouseUp=function(e){n.props.onMouseUp&&n.props.onMouseUp(e),n.handleSwipeEnd(w(e))},n.handleMouseLeave=function(e){n.props.onMouseLeave&&n.props.onMouseLeave(e),n.started&&n.handleSwipeEnd(w(e))},n.handleMouseMove=function(e){n.props.onMouseMove&&n.props.onMouseMove(e),n.started&&n.handleSwipeMove(w(e))},n.handleScroll=function(e){if(n.props.onScroll&&n.props.onScroll(e),e.target===n.rootNode)if(n.ignoreNextScrollEvents)n.ignoreNextScrollEvents=!1;else{var t=n.state.indexLatest,i=Math.ceil(e.target.scrollLeft/e.target.clientWidth)+t;n.ignoreNextScrollEvents=!0,e.target.scrollLeft=0,n.props.onChangeIndex&&i!==t&&n.props.onChangeIndex(i,t,{reason:"focus"})}},n.updateHeight=function(){if(null!==n.activeSlide){var e=n.activeSlide.children[0];void 0!==e&&void 0!==e.offsetHeight&&n.state.heightLatest!==e.offsetHeight&&n.setState({heightLatest:e.offsetHeight})}},n.state={indexLatest:e.index,isDragging:!1,renderOnlyActive:!e.disableLazyLoading,heightLatest:0,displaySameSlide:!0},n.setIndexCurrent(e.index),n}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.transitionListener=g(this.containerNode,"transitionend",(function(t){t.target===e.containerNode&&e.handleTransitionEnd()})),this.touchMoveListener=g(this.rootNode,"touchmove",(function(t){e.props.disabled||e.handleSwipeMove(t)}),{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout((function(){e.setState({renderOnlyActive:!1})}),0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.index;"number"===typeof t&&t!==this.props.index&&(this.setIndexCurrent(t),this.setState({displaySameSlide:(0,u.getDisplaySameSlide)(this.props,e),indexLatest:t}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var e=this;return{slideUpdateHeight:function(){e.updateHeight()}}}},{key:"setIndexCurrent",value:function(e){if(this.props.animateTransitions||this.indexCurrent===e||this.handleTransitionEnd(),this.indexCurrent=e,this.containerNode){var t=this.props.axis,n=x.transform[t](100*e);this.containerNode.style.WebkitTransform=n,this.containerNode.style.transform=n}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var e,t,n=this,i=this.props,r=(i.action,i.animateHeight),s=i.animateTransitions,l=i.axis,d=i.children,c=i.containerStyle,h=i.disabled,u=(i.disableLazyLoading,i.enableMouseEvents),g=(i.hysteresis,i.ignoreNativeScroll,i.index,i.onChangeIndex,i.onSwitching,i.onTransitionEnd,i.resistance,i.slideStyle),y=i.slideClassName,w=i.springConfig,m=i.style,b=(i.threshold,(0,a.default)(i,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"])),L=this.state,T=L.displaySameSlide,C=L.heightLatest,N=L.indexLatest,X=L.isDragging,E=L.renderOnlyActive,H=h?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},D=!h&&u?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},I=(0,o.default)({},v,g);if(X||!s||T)e="all 0s ease 0s",t="all 0s ease 0s";else if(e=S("transform",w),t=S("-webkit-transform",w),0!==C){var W=", ".concat(S("height",w));e+=W,t+=W}var k={height:null,WebkitFlexDirection:x.flexDirection[l],flexDirection:x.flexDirection[l],WebkitTransition:t,transition:e};if(!E){var Y=x.transform[l](100*this.indexCurrent);k.WebkitTransform=Y,k.transform=Y}return r&&(k.height=C),p.createElement(M.Provider,{value:this.getSwipeableViewsContext()},p.createElement("div",(0,o.default)({ref:this.setRootNode,style:(0,o.default)({},x.root[l],m)},b,H,D,{onScroll:this.handleScroll}),p.createElement("div",{ref:this.setContainerNode,style:(0,o.default)({},k,f,c),className:"react-swipeable-view-container"},p.Children.map(d,(function(e,t){if(E&&t!==N)return null;var i,o=!0;return t===N&&(o=!1,r&&(i=n.setActiveSlide,I.overflowY="hidden")),p.createElement("div",{ref:i,style:I,className:y,"aria-hidden":o,"data-swipeable":"true"},e)})))))}}]),t}(p.Component);T.displayName="ReactSwipableView",T.propTypes={},T.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var C=T;t.default=C}}]);