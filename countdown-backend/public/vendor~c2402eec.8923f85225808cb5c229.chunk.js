(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{"0f4ccff55c5425eac8ca":function(e,t,n){"use strict";var r=n("fe3450770b86e34fc383"),i=n("7bf8af16efd59e12703f"),o=n("76fa84d944d1f38f6e3b"),f=n("16249176c16d65581959"),c=n("d623bd8113beee37b24a"),a=o.List,g=o.Map,u=function(e,t,n){if(e){var r=t.get(e);r&&t.set(e,n(r))}};e.exports=function(e,t){t.isCollapsed()||f(!1);var n=t.getAnchorKey(),o=e.getBlockMap(),l=o.get(n),s=l.getText();if(!s){var d=l.getType();if("unordered-list-item"===d||"ordered-list-item"===d)return c(e,t,(function(e){return e.merge({type:"unstyled",depth:0})}))}var y=t.getAnchorOffset(),b=l.getCharacterList(),v=i(),K=l instanceof r,p=l.merge({text:s.slice(0,y),characterList:b.slice(0,y)}),S=p.merge({key:v,text:s.slice(y),characterList:b.slice(y),data:g()}),x=o.toSeq().takeUntil((function(e){return e===l})),h=o.toSeq().skipUntil((function(e){return e===l})).rest(),m=x.concat([[n,p],[v,S]],h).toOrderedMap();return K&&(l.getChildKeys().isEmpty()||f(!1),m=function(e,t,n){return e.withMutations((function(e){var r=t.getKey(),i=n.getKey();u(t.getParentKey(),e,(function(e){var t=e.getChildKeys(),n=t.indexOf(r)+1,o=t.toArray();return o.splice(n,0,i),e.merge({children:a(o)})})),u(t.getNextSiblingKey(),e,(function(e){return e.merge({prevSibling:i})})),u(r,e,(function(e){return e.merge({nextSibling:i})})),u(i,e,(function(e){return e.merge({prevSibling:r})}))}))}(m,p,S)),e.merge({blockMap:m,selectionBefore:t,selectionAfter:t.merge({anchorKey:v,anchorOffset:0,focusKey:v,focusOffset:0,isBackward:!1})})}},"2278e878af2f3f4dff5b":function(e,t,n){"use strict";var r=n("fe3450770b86e34fc383"),i=n("ea1b88ded65dda34aea9"),o=n("76fa84d944d1f38f6e3b"),f=n("16249176c16d65581959"),c=o.OrderedMap,a=o.List,g=function(e,t,n){if(e){var r=t.get(e);r&&t.set(e,n(r))}},u=function(e,t,n,r,i){if(!i)return e;var o="after"===r,f=t.getKey(),c=n.getKey(),u=t.getParentKey(),l=t.getNextSiblingKey(),s=t.getPrevSiblingKey(),d=n.getParentKey(),y=o?n.getNextSiblingKey():c,b=o?c:n.getPrevSiblingKey();return e.withMutations((function(e){g(u,e,(function(e){var t=e.getChildKeys();return e.merge({children:t.delete(t.indexOf(f))})})),g(s,e,(function(e){return e.merge({nextSibling:l})})),g(l,e,(function(e){return e.merge({prevSibling:s})})),g(y,e,(function(e){return e.merge({prevSibling:f})})),g(b,e,(function(e){return e.merge({nextSibling:f})})),g(d,e,(function(e){var t=e.getChildKeys(),n=t.indexOf(c),r=o?n+1:0!==n?n-1:0,i=t.toArray();return i.splice(r,0,f),e.merge({children:a(i)})})),g(f,e,(function(e){return e.merge({nextSibling:y,prevSibling:b,parent:d})}))}))};e.exports=function(e,t,n,o){"replace"===o&&f(!1);var a=n.getKey(),g=t.getKey();g===a&&f(!1);var l=e.getBlockMap(),s=t instanceof r,d=[t],y=l.delete(g);s&&(d=[],y=l.withMutations((function(e){var n=t.getNextSiblingKey(),r=i(t,e);e.toSeq().skipUntil((function(e){return e.getKey()===g})).takeWhile((function(e){var t=e.getKey(),i=t===g,o=n&&t!==n,f=!n&&e.getParentKey()&&(!r||t!==r);return!!(i||o||f)})).forEach((function(t){d.push(t),e.delete(t.getKey())}))})));var b=y.toSeq().takeUntil((function(e){return e===n})),v=y.toSeq().skipUntil((function(e){return e===n})).skip(1),K=d.map((function(e){return[e.getKey(),e]})),p=c();if("before"===o){var S=e.getBlockBefore(a);S&&S.getKey()===t.getKey()&&f(!1),p=b.concat([].concat(K,[[a,n]]),v).toOrderedMap()}else if("after"===o){var x=e.getBlockAfter(a);x&&x.getKey()===g&&f(!1),p=b.concat([[a,n]].concat(K),v).toOrderedMap()}return e.merge({blockMap:u(p,t,n,o,s),selectionBefore:e.getSelectionAfter(),selectionAfter:e.getSelectionAfter().merge({anchorKey:g,focusKey:g})})}},"2c176b80ebd1a5bfe191":function(e,t,n){"use strict";var r=/\r\n?|\n/g;e.exports=function(e){return e.split(r)}},"2decf5aeaa636058d3a7":function(e,t,n){"use strict";var r=n("67c65225174d4d3c391f"),i=n("4e1b6a4d30083ffdfd0f"),o=n("69b09b35457c1368b65a"),f=n("8b14af80e40b65df7246"),c=n("3eb3cb7052de28af6965"),a=n("ef7d54975084cff28d9b"),g=n("16249176c16d65581959"),u=n("8d81b3047278fd9f21ce"),l=o.isBrowser("IE");function s(e,t){if(!e)return"[empty]";var n=function e(t,n){var r=void 0!==n?n(t):[];if(t.nodeType===Node.TEXT_NODE){var i=t.textContent.length;return a(t).createTextNode("[text "+i+(r.length?" | "+r.join(", "):"")+"]")}var o=t.cloneNode();1===o.nodeType&&r.length&&o.setAttribute("data-labels",r.join(", "));for(var f=t.childNodes,c=0;c<f.length;c++)o.appendChild(e(f[c],n));return o}(e,t);return n.nodeType===Node.TEXT_NODE?n.textContent:(u(n)||g(!1),n.outerHTML)}function d(e,t){for(var n=e,r=n;n;){if(u(n)&&r.hasAttribute("contenteditable"))return s(n,t);r=n=n.parentNode}return"Could not find contentEditable parent of node"}function y(e){return null===e.nodeValue?e.childNodes.length:e.nodeValue.length}function b(e,t,n,r){var o=c();if(e.extend&&null!=t&&f(o,t)){n>y(t)&&i.logSelectionStateFailure({anonymizedDom:d(t),extraParams:JSON.stringify({offset:n}),selectionState:JSON.stringify(r.toJS())});var a=t===e.focusNode;try{e.rangeCount>0&&e.extend&&e.extend(t,n)}catch(f){throw i.logSelectionStateFailure({anonymizedDom:d(t,(function(t){var n=[];return t===o&&n.push("active element"),t===e.anchorNode&&n.push("selection anchor node"),t===e.focusNode&&n.push("selection focus node"),n})),extraParams:JSON.stringify({activeElementName:o?o.nodeName:null,nodeIsFocus:t===e.focusNode,nodeWasFocus:a,selectionRangeCount:e.rangeCount,selectionAnchorNodeName:e.anchorNode?e.anchorNode.nodeName:null,selectionAnchorOffset:e.anchorOffset,selectionFocusNodeName:e.focusNode?e.focusNode.nodeName:null,selectionFocusOffset:e.focusOffset,message:f?""+f:null,offset:n},null,2),selectionState:JSON.stringify(r.toJS(),null,2)}),f}}else if(t&&e.rangeCount>0){var g=e.getRangeAt(0);g.setEnd(t,n),e.addRange(g.cloneRange())}}function v(e,t,n,o){var f=a(t).createRange();if(n>y(t)&&(i.logSelectionStateFailure({anonymizedDom:d(t),extraParams:JSON.stringify({offset:n}),selectionState:JSON.stringify(o.toJS())}),r.handleExtensionCausedError()),f.setStart(t,n),l)try{e.addRange(f)}catch(e){0}else e.addRange(f)}e.exports={setDraftEditorSelection:function(e,t,n,r,i){var o=a(t);if(f(o.documentElement,t)){var c=o.defaultView.getSelection(),g=e.getAnchorKey(),u=e.getAnchorOffset(),l=e.getFocusKey(),s=e.getFocusOffset(),d=e.getIsBackward();if(!c.extend&&d){var y=g,K=u;g=l,u=s,l=y,s=K,d=!1}var p=g===n&&r<=u&&i>=u,S=l===n&&r<=s&&i>=s;if(p&&S)return c.removeAllRanges(),v(c,t,u-r,e),void b(c,t,s-r,e);if(d){if(S&&(c.removeAllRanges(),v(c,t,s-r,e)),p){var x=c.focusNode,h=c.focusOffset;c.removeAllRanges(),v(c,t,u-r,e),b(c,x,h,e)}}else p&&(c.removeAllRanges(),v(c,t,u-r,e)),S&&b(c,t,s-r,e)}},addFocusToSelection:b}},"2ebbff7ead1fc66d262e":function(e,t,n){"use strict";n("66a7e2b7caa7499b2ddd");e.exports=function(e,t){var n,r=e.getSelection(),i=r.getStartKey(),o=r.getStartOffset(),f=e.getCurrentContent(),c=i;return t>f.getBlockForKey(i).getText().length-o?(c=f.getKeyAfter(i),n=0):n=o+t,r.merge({focusKey:c,focusOffset:n})}},"5dfe6bb34969f456572a":function(e,t,n){"use strict";var r=n("fe3450770b86e34fc383"),i=n("ea1b88ded65dda34aea9"),o=n("76fa84d944d1f38f6e3b"),f=(o.List,o.Map),c=function(e,t,n){if(e){var r=t.get(e);r&&t.set(e,n(r))}},a=function(e,t){var n=[];if(!e)return n;for(var r=t.get(e);r&&r.getParentKey();){var i=r.getParentKey();i&&n.push(i),r=i?t.get(i):null}return n},g=function(e,t,n){if(!e)return null;for(var r=n.get(e.getKey()).getNextSiblingKey();r&&!t.get(r);)r=n.get(r).getNextSiblingKey()||null;return r},u=function(e,t,n){if(!e)return null;for(var r=n.get(e.getKey()).getPrevSiblingKey();r&&!t.get(r);)r=n.get(r).getPrevSiblingKey()||null;return r},l=function(e,t,n,r){return e.withMutations((function(o){if(c(t.getKey(),o,(function(e){return e.merge({nextSibling:g(e,o,r),prevSibling:u(e,o,r)})})),c(n.getKey(),o,(function(e){return e.merge({nextSibling:g(e,o,r),prevSibling:u(e,o,r)})})),a(t.getKey(),r).forEach((function(e){return c(e,o,(function(e){return e.merge({children:e.getChildKeys().filter((function(e){return o.get(e)})),nextSibling:g(e,o,r),prevSibling:u(e,o,r)})}))})),c(t.getNextSiblingKey(),o,(function(e){return e.merge({prevSibling:t.getPrevSiblingKey()})})),c(t.getPrevSiblingKey(),o,(function(e){return e.merge({nextSibling:g(e,o,r)})})),c(n.getNextSiblingKey(),o,(function(e){return e.merge({prevSibling:u(e,o,r)})})),c(n.getPrevSiblingKey(),o,(function(e){return e.merge({nextSibling:n.getNextSiblingKey()})})),a(n.getKey(),r).forEach((function(e){c(e,o,(function(e){return e.merge({children:e.getChildKeys().filter((function(e){return o.get(e)})),nextSibling:g(e,o,r),prevSibling:u(e,o,r)})}))})),function(e,t){var n=[];if(!e)return n;for(var r=i(e,t);r&&t.get(r);){var o=t.get(r);n.push(r),r=o.getParentKey()?i(o,t):null}return n}(n,r).forEach((function(e){return c(e,o,(function(e){return e.merge({nextSibling:g(e,o,r),prevSibling:u(e,o,r)})}))})),null==e.get(t.getKey())&&null!=e.get(n.getKey())&&n.getParentKey()===t.getKey()&&null==n.getPrevSiblingKey()){var f=t.getPrevSiblingKey();c(n.getKey(),o,(function(e){return e.merge({prevSibling:f})})),c(f,o,(function(e){return e.merge({nextSibling:n.getKey()})}));var l=f?e.get(f):null,s=l?l.getParentKey():null;if(t.getChildKeys().forEach((function(e){c(e,o,(function(e){return e.merge({parent:s})}))})),null!=s){var d=e.get(s);c(s,o,(function(e){return e.merge({children:d.getChildKeys().concat(t.getChildKeys())})}))}c(t.getChildKeys().find((function(t){return null===e.get(t).getNextSiblingKey()})),o,(function(e){return e.merge({nextSibling:t.getNextSiblingKey()})}))}}))},s=function(e,t,n){if(0===t)for(;t<n;)e=e.shift(),t++;else if(n===e.count())for(;n>t;)e=e.pop(),n--;else{var r=e.slice(0,t),i=e.slice(n);e=r.concat(i).toList()}return e};e.exports=function(e,t){if(t.isCollapsed())return e;var n,o=e.getBlockMap(),c=t.getStartKey(),g=t.getStartOffset(),u=t.getEndKey(),d=t.getEndOffset(),y=o.get(c),b=o.get(u),v=y instanceof r,K=[];if(v){var p=b.getChildKeys(),S=a(u,o);b.getNextSiblingKey()&&(K=K.concat(S)),p.isEmpty()||(K=K.concat(S.concat([u]))),K=K.concat(a(i(b,o),o))}n=y===b?s(y.getCharacterList(),g,d):y.getCharacterList().slice(0,g).concat(b.getCharacterList().slice(d));var x=y.merge({text:y.getText().slice(0,g)+b.getText().slice(d),characterList:n}),h=v&&0===g&&0===d&&b.getParentKey()===c&&null==b.getPrevSiblingKey()?f([[c,null]]):o.toSeq().skipUntil((function(e,t){return t===c})).takeUntil((function(e,t){return t===u})).filter((function(e,t){return-1===K.indexOf(t)})).concat(f([[u,null]])).map((function(e,t){return t===c?x:null})),m=o.merge(h).filter((function(e){return!!e}));return v&&y!==b&&(m=l(m,y,b,o)),e.merge({blockMap:m,selectionBefore:t,selectionAfter:t.merge({anchorKey:c,anchorOffset:g,focusKey:c,focusOffset:g,isBackward:!1})})}},"7239de5fd500e1a516fb":function(e,t,n){"use strict";n("66a7e2b7caa7499b2ddd");e.exports=function(e,t){var n=e.getSelection(),r=e.getCurrentContent(),i=n.getStartKey(),o=n.getStartOffset(),f=i,c=0;if(t>o){var a=r.getKeyBefore(i);if(null==a)f=i;else f=a,c=r.getBlockForKey(a).getText().length}else c=o-t;return n.merge({focusKey:f,focusOffset:c,isBackward:!0})}},"85c81fa5580553d1aa00":function(e,t,n){"use strict";var r=new RegExp("\r","g");e.exports=function(e){return e.replace(r,"")}},"91b01ed01f58079c7811":function(e,t,n){"use strict";var r=n("fe3450770b86e34fc383"),i=n("7bf8af16efd59e12703f"),o=n("76fa84d944d1f38f6e3b").OrderedMap;e.exports=function(e){return e.first()instanceof r?function(e){var t,n={};return o(e.withMutations((function(e){e.forEach((function(r,o){var f=r.getKey(),c=r.getNextSiblingKey(),a=r.getPrevSiblingKey(),g=r.getChildKeys(),u=r.getParentKey(),l=i();(n[f]=l,c)&&(e.get(c)?e.setIn([c,"prevSibling"],l):e.setIn([f,"nextSibling"],null));a&&(e.get(a)?e.setIn([a,"nextSibling"],l):e.setIn([f,"prevSibling"],null));if(u&&e.get(u)){var s=e.get(u).getChildKeys();e.setIn([u,"children"],s.set(s.indexOf(r.getKey()),l))}else e.setIn([f,"parent"],null),t&&(e.setIn([t.getKey(),"nextSibling"],l),e.setIn([f,"prevSibling"],n[t.getKey()])),t=e.get(f);g.forEach((function(t){e.get(t)?e.setIn([t,"parent"],l):e.setIn([f,"children"],r.getChildKeys().filter((function(e){return e!==t})))}))}))})).toArray().map((function(e){return[n[e.getKey()],e.set("key",n[e.getKey()])]})))}(e):function(e){return o(e.toArray().map((function(e){var t=i();return[t,e.set("key",t)]})))}(e)}},a4f3e379d44a159aab28:function(e,t,n){"use strict";e.exports=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},b288027d2dcf5e515f71:function(e,t,n){"use strict";var r=n("45f1aa0cd92b6017793d"),i=n("aa60859ebbdd2e8a7101"),o=n("16249176c16d65581959");function f(e,t,n){var f=t.getCharacterList(),c=n>0?f.get(n-1):void 0,a=n<f.count()?f.get(n):void 0,g=c?c.getEntity():void 0,u=a?a.getEntity():void 0;if(u&&u===g&&"MUTABLE"!==e.__get(u).getMutability()){for(var l,s=function(e,t,n){var r;return i(e,(function(e,t){return e.getEntity()===t.getEntity()}),(function(e){return e.getEntity()===t}),(function(e,t){e<=n&&t>=n&&(r={start:e,end:t})})),"object"!==typeof r&&o(!1),r}(f,u,n),d=s.start,y=s.end;d<y;)l=f.get(d),f=f.set(d,r.applyEntity(l,null)),d++;return t.set("characterList",f)}return t}e.exports=function(e,t){var n=e.getBlockMap(),r=e.getEntityMap(),i={},o=t.getStartKey(),c=t.getStartOffset(),a=n.get(o),g=f(r,a,c);g!==a&&(i[o]=g);var u=t.getEndKey(),l=t.getEndOffset(),s=n.get(u);o===u&&(s=g);var d=f(r,s,l);return d!==s&&(i[u]=d),Object.keys(i).length?e.merge({blockMap:n.merge(i),selectionAfter:t}):e.set("selectionAfter",t)}},c643dcf6301216520977:function(e,t,n){"use strict";var r=n("22c5837e0f260287e628"),i=n("f0cb91ae7de7d58c8d11")("draft_tree_data_support");e.exports=function(e,t,n){var o=e.getSelection(),f=e.getCurrentContent(),c=o,a=o.getAnchorKey(),g=o.getFocusKey(),u=f.getBlockForKey(a);if(i&&"forward"===n&&a!==g)return f;if(o.isCollapsed()){if("forward"===n){if(e.isSelectionAtEndOfContent())return f;if(i)if(o.getAnchorOffset()===f.getBlockForKey(a).getLength()){var l=f.getBlockForKey(u.nextSibling);if(!l||0===l.getLength())return f}}else if(e.isSelectionAtStartOfContent())return f;if((c=t(e))===o)return f}return r.removeRange(f,c,n)}},d623bd8113beee37b24a:function(e,t,n){"use strict";var r=n("76fa84d944d1f38f6e3b").Map;e.exports=function(e,t,n){var i=t.getStartKey(),o=t.getEndKey(),f=e.getBlockMap(),c=f.toSeq().skipUntil((function(e,t){return t===i})).takeUntil((function(e,t){return t===o})).concat(r([[o,f.get(o)]])).map(n);return e.merge({blockMap:f.merge(c),selectionBefore:t,selectionAfter:t})}}}]);