(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{"025fe5ebb62ad79d77da":function(e,t,n){"use strict";var r=n("824071434fd2b4849dca");e.exports=function(e,t,n){var c=r.undo(t);if("spellcheck-change"!==t.getLastChangeType())e.preventDefault(),t.getNativelyRenderedContent()?(n(r.set(t,{nativelyRenderedContent:null})),setTimeout((function(){n(c)}),0)):n(c);else{var a=c.getCurrentContent();n(r.set(c,{nativelyRenderedContent:a}))}}},"1d616d86e23753ad134b":function(e,t,n){"use strict";var r=n("8d81b3047278fd9f21ce");e.exports=function(e){return!(!e||!e.ownerDocument)&&(r(e)&&"IMG"===e.nodeName)}},"1e654d00612592ff42c6":function(e,t,n){"use strict";var r=n("22c5837e0f260287e628"),c=n("824071434fd2b4849dca"),a=n("f8da1896dbc7de881f6a");e.exports=function(e){var t=e.getSelection();if(!t.isCollapsed())return e;var n=t.getAnchorOffset();if(0===n)return e;var o,f,i=t.getAnchorKey(),s=e.getCurrentContent(),u=s.getBlockForKey(i).getLength();if(u<=1)return e;n===u?(o=t.set("anchorOffset",n-1),f=t):f=(o=t.set("focusOffset",n+1)).set("anchorOffset",n+1);var g=a(s,o),d=r.removeRange(s,o,"backward"),l=d.getSelectionAfter(),b=l.getAnchorOffset()-1,h=l.merge({anchorOffset:b,focusOffset:b}),p=r.replaceWithFragment(d,h,g),v=c.push(e,p,"insert-fragment");return c.acceptSelection(v,f)}},"24de29feca9c4edd79a7":function(e,t,n){"use strict";e.exports=function(e){if(!e||!("ownerDocument"in e))return!1;if("ownerDocument"in e){var t=e;if(!t.ownerDocument.defaultView)return t instanceof Node;if(t instanceof t.ownerDocument.defaultView.Node)return!0}return!1}},"29dd2f17ae8895181e84":function(e,t,n){"use strict";e.exports=function(e){var t=e.getSelection(),n=t.getAnchorKey(),r=e.getBlockTree(n),c=t.getStartOffset(),a=!1;return r.some((function(e){return c===e.get("start")?(a=!0,!0):c<e.get("end")&&e.get("leaves").some((function(e){var t=e.get("start");return c===t&&(a=!0,!0)}))})),a}},"2a8fcbc931ad5ff3d930":function(e,t,n){"use strict";e.exports=function(e,t,n){var r=e;if(n===r.count())t.forEach((function(e){r=r.push(e)}));else if(0===n)t.reverse().forEach((function(e){r=r.unshift(e)}));else{var c=r.slice(0,n),a=r.slice(n);r=c.concat(t,a).toList()}return r}},"40bdd3c9045fc0ed33ec":function(e,t,n){"use strict";var r=n("8d81b3047278fd9f21ce");e.exports=function(e){return!(!e||!e.ownerDocument)&&(r(e)&&"A"===e.nodeName)}},"4c9ba30a24d6795a5532":function(e,t,n){"use strict";var r=n("8d81b3047278fd9f21ce");e.exports=function(e){return!(!e||!e.ownerDocument)&&(r(e)&&"BR"===e.nodeName)}},"4fa9acaa3a7754a53cb5":function(e,t,n){"use strict";var r=n("824071434fd2b4849dca");e.exports=function(e){var t=e.getSelection(),n=t.getStartKey();return r.set(e,{selection:t.merge({anchorKey:n,anchorOffset:0,focusKey:n,focusOffset:0,isBackward:!1}),forceSelection:!0})}},"630c865c13e9e409bb50":function(e,t,n){"use strict";var r=n("824071434fd2b4849dca");e.exports=function(e){var t=e.getSelection(),n=t.getEndKey(),c=e.getCurrentContent().getBlockForKey(n).getLength();return r.set(e,{selection:t.merge({anchorKey:n,anchorOffset:c,focusKey:n,focusOffset:c,isBackward:!1}),forceSelection:!0})}},"660d8010fbb8a3a90461":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.ownerDocument)&&(e.ownerDocument.defaultView?e instanceof e.ownerDocument.defaultView.HTMLElement:e instanceof HTMLElement)}},"6da94f2e570a99cc87fd":function(e,t,n){"use strict";var r=n("824071434fd2b4849dca"),c=n("ec8125525b88aed5df44"),a=n("64cca981a743348875f9"),o=n("7239de5fd500e1a516fb"),f=n("c643dcf6301216520977");e.exports=function(e,t){var n=f(e,(function(e){var n=e.getSelection();if(n.isCollapsed()&&0===n.getAnchorOffset())return o(e,1);var r=t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);return r=c(r),a(e,null,r.endContainer,r.endOffset,r.startContainer,r.startOffset).selectionState}),"backward");return n===e.getCurrentContent()?e:r.push(e,n,"remove-range")}},"732e0abaa8b17596214d":function(e,t,n){"use strict";var r=n("824071434fd2b4849dca"),c=n("d412bb215e6e5ba538c6"),a=n("2ebbff7ead1fc66d262e"),o=n("c643dcf6301216520977");e.exports=function(e){var t=o(e,(function(e){var t=e.getSelection(),n=e.getCurrentContent(),r=t.getAnchorKey(),o=t.getAnchorOffset(),f=n.getBlockForKey(r).getText()[o];return a(e,f?c.getUTF16Length(f,0):1)}),"forward");if(t===e.getCurrentContent())return e;var n=e.getSelection();return r.push(e,t.set("selectionBefore",n),n.isCollapsed()?"delete-character":"remove-range")}},"7a5950bcc4976bab4cff":function(e,t,n){"use strict";var r=n("76fa84d944d1f38f6e3b"),c=n("2a8fcbc931ad5ff3d930"),a=n("16249176c16d65581959"),o=r.Repeat;e.exports=function(e,t,n,r){t.isCollapsed()||a(!1);var f=null;if(null!=n&&(f=n.length),null==f||0===f)return e;var i=e.getBlockMap(),s=t.getStartKey(),u=t.getStartOffset(),g=i.get(s),d=g.getText(),l=g.merge({text:d.slice(0,u)+n+d.slice(u,g.getLength()),characterList:c(g.getCharacterList(),o(r,f).toList(),u)}),b=u+f;return e.merge({blockMap:i.set(s,l),selectionAfter:t.merge({anchorOffset:b,focusOffset:b})})}},"8d81b3047278fd9f21ce":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.ownerDocument)&&e.nodeType===Node.ELEMENT_NODE}},c1d92d81d6f5e55e95bd:function(e,t,n){"use strict";var r=n("82fdb2b02b8c353fbc5c");e.exports=function(e){return e.which===r.RETURN&&(e.getModifierState("Shift")||e.getModifierState("Alt")||e.getModifierState("Control"))}},c25327557f128f23aa1b:function(e,t,n){"use strict";var r=n("95dc2b2545c6a5e19729"),c=n("824071434fd2b4849dca"),a=n("2ebbff7ead1fc66d262e"),o=n("c643dcf6301216520977");e.exports=function(e){var t=o(e,(function(e){var t=e.getSelection(),n=t.getStartOffset(),c=t.getStartKey(),o=e.getCurrentContent().getBlockForKey(c).getText().slice(n),f=r.getForward(o);return a(e,f.length||1)}),"forward");return t===e.getCurrentContent()?e:c.push(e,t,"remove-range")}},c460fcb84632dc1703c2:function(e,t,n){"use strict";e.exports=function(e){return"handled"===e||!0===e}},d41f564615738d161539:function(e,t,n){"use strict";var r=n("95dc2b2545c6a5e19729"),c=n("824071434fd2b4849dca"),a=n("7239de5fd500e1a516fb"),o=n("c643dcf6301216520977");e.exports=function(e){var t=o(e,(function(e){var t=e.getSelection(),n=t.getStartOffset();if(0===n)return a(e,1);var c=t.getStartKey(),o=e.getCurrentContent().getBlockForKey(c).getText().slice(0,n),f=r.getBackward(o);return a(e,f.length||1)}),"backward");return t===e.getCurrentContent()?e:c.push(e,t,"remove-range")}},d7c37ad783ca949ccbe9:function(e,t,n){"use strict";var r=n("824071434fd2b4849dca"),c=n("d412bb215e6e5ba538c6"),a=n("7239de5fd500e1a516fb"),o=n("c643dcf6301216520977");e.exports=function(e){var t=o(e,(function(e){var t=e.getSelection(),n=e.getCurrentContent(),r=t.getAnchorKey(),o=t.getAnchorOffset(),f=n.getBlockForKey(r).getText()[o-1];return a(e,f?c.getUTF16Length(f,0):1)}),"backward");if(t===e.getCurrentContent())return e;var n=e.getSelection();return r.push(e,t.set("selectionBefore",n),n.isCollapsed()?"backspace-character":"remove-range")}},e5968e2e1cda992bb2ca:function(e,t,n){"use strict";var r=n("22c5837e0f260287e628"),c=n("824071434fd2b4849dca");e.exports=function(e){var t=r.splitBlock(e.getCurrentContent(),e.getSelection());return c.push(e,t,"split-block")}},ffea0a9e7c3b68db6e73:function(e,t,n){"use strict";var r=n("8ab7e946ac428b55f7f5"),c=n("fe3450770b86e34fc383"),a=n("76fa84d944d1f38f6e3b"),o=n("2a8fcbc931ad5ff3d930"),f=n("16249176c16d65581959"),i=n("91b01ed01f58079c7811"),s=a.List,u=function(e,t,n,r,c,a){var f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"REPLACE_WITH_NEW_DATA",i=n.get(c),s=i.getText(),u=i.getCharacterList(),g=c,d=a+r.getText().length,l=null;switch(f){case"MERGE_OLD_DATA_TO_NEW_DATA":l=r.getData().merge(i.getData());break;case"REPLACE_WITH_NEW_DATA":l=r.getData()}var b=i.getType();s&&"unstyled"===b&&(b=r.getType());var h=i.merge({text:s.slice(0,a)+r.getText()+s.slice(a),characterList:o(u,r.getCharacterList(),a),type:b,data:l});return e.merge({blockMap:n.set(c,h),selectionBefore:t,selectionAfter:t.merge({anchorKey:g,anchorOffset:d,focusKey:g,focusOffset:d,isBackward:!1})})},g=function(e,t,n,a,o,f){var i=n.first()instanceof c,u=[],g=a.size,d=n.get(o),l=a.first(),b=a.last(),h=b.getLength(),p=b.getKey(),v=i&&(!d.getChildKeys().isEmpty()||!l.getChildKeys().isEmpty());n.forEach((function(e,t){t===o?(v?u.push(e):u.push(function(e,t,n){var r=e.getText(),c=e.getCharacterList(),a=r.slice(0,t),o=c.slice(0,t),f=n.first();return e.merge({text:a+f.getText(),characterList:o.concat(f.getCharacterList()),type:a?e.getType():f.getType(),data:f.getData()})}(e,f,a)),a.slice(v?0:1,g-1).forEach((function(e){return u.push(e)})),u.push(function(e,t,n){var r=e.getText(),c=e.getCharacterList(),a=r.length,o=r.slice(t,a),f=c.slice(t,a),i=n.last();return i.merge({text:i.getText()+o,characterList:i.getCharacterList().concat(f),data:i.getData()})}(e,f,a))):u.push(e)}));var y=r.createFromArray(u);return i&&(y=function(e,t,n,r){return e.withMutations((function(t){var c=n.getKey(),a=r.getKey(),o=n.getNextSiblingKey(),f=n.getParentKey(),i=function(e,t){var n=e.getKey(),r=e,c=[];for(t.get(n)&&c.push(n);r&&r.getNextSiblingKey();){var a=r.getNextSiblingKey();if(!a)break;c.push(a),r=t.get(a)}return c}(r,e),u=i[i.length-1];if(t.get(a)?(t.setIn([c,"nextSibling"],a),t.setIn([a,"prevSibling"],c)):(t.setIn([c,"nextSibling"],r.getNextSiblingKey()),t.setIn([r.getNextSiblingKey(),"prevSibling"],c)),t.setIn([u,"nextSibling"],o),o&&t.setIn([o,"prevSibling"],u),i.forEach((function(e){return t.setIn([e,"parent"],f)})),f){var g=e.get(f).getChildKeys(),d=g.indexOf(c)+1,l=g.toArray();l.splice.apply(l,[d,0].concat(i)),t.setIn([f,"children"],s(l))}}))}(y,0,d,l)),e.merge({blockMap:y,selectionBefore:t,selectionAfter:t.merge({anchorKey:p,anchorOffset:h,focusKey:p,focusOffset:h,isBackward:!1})})};e.exports=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"REPLACE_WITH_NEW_DATA";t.isCollapsed()||f(!1);var a=e.getBlockMap(),o=i(n),s=t.getStartKey(),d=t.getStartOffset(),l=a.get(s);return l instanceof c&&(l.getChildKeys().isEmpty()||f(!1)),1===o.size?u(e,t,a,o.first(),s,d,r):g(e,t,a,o,s,d)}}}]);