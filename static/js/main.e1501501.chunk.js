(this["webpackJsonphear-draw-ts"]=this["webpackJsonphear-draw-ts"]||[]).push([[0],{107:function(e,n,t){},108:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(27),a=t.n(i),u=t(8),l=t(31),c=t.n(l),s=t(46),f=t(15),d=t(18),h=t(56),v=function(e){return{x:e.offsetX,y:e.offsetY}},g=function(e,n){if(console.log("core change ",n),function(e){return!!e.type}(n)){var t=e.bounds,r=t.width,o=t.height,i=t.x,a=t.y,u={stops:n.points.map((function(e){return new c.a.GradientStop(new c.a.Color(e.red/255,e.green/255,e.blue/255,e.alpha),e.left/100)})),radial:"linear"!==n.type};"linear"==n.type?e.fillColor={gradient:u,origin:[i,a],destination:[i+r,a+o]}:e.fillColor={gradient:u,destination:[i,a],origin:[i+Math.round(r/2),a+Math.round(o/2)]}}else e.fillColor=new c.a.Color(n.red/255,n.green/255,n.blue/255,n.alpha)},b=["left","diagonal-rt-lb","diagonal-rb-lt"],m=["top","diagonal-lb-rt","diagonal-rb-lt"],p=["left","right","diagonal-lt-rb","diagonal-rb-lt","diagonal-lb-rt","diagonal-rt-lb"],y=["down","top","diagonal-lt-rb","diagonal-rb-lt","diagonal-lb-rt","diagonal-rt-lb"],O={down:"ns-resize",top:"ns-resize",left:"ew-resize",right:"ew-resize","diagonal-lb-rt":"nesw-resize","diagonal-rb-lt":"nwse-resize","diagonal-lt-rb":"nwse-resize","diagonal-rt-lb":"nesw-resize"},w={right:{down:"diagonal-lt-rb",top:"diagonal-lb-rt"},left:{down:"diagonal-rt-lb",top:"diagonal-rb-lt"}},j=function(){function e(n,t){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;Object(f.a)(this,e),this.paperScope=n,this.expandSize=o,this.onResize=null,this._resizeHoverRectangle=void 0,this._resizeVisibleRectangle=void 0,this._cursorBeforeModify=null,this._isShow=!1,this._onDocumentMouseUp=null,this._onDocumentMouseMove=null,this.unbindMouseHoverHandlers=function(){r._resizeHoverRectangle.onMouseMove=null,r._resizeHoverRectangle.onMouseLeave=null},this.bindMouseHoverHandlers=function(){r._resizeHoverRectangle.onMouseMove=function(e){r.handleMouseMove(e)},r._resizeHoverRectangle.onMouseLeave=function(){r.handleBlur()}},this.handleMouseDown=function(e){r.unbindMouseHoverHandlers();var n=function(){return r.handleMouseUp()};window.addEventListener("mouseup",n),r._onDocumentMouseUp=n;var t=r.resizeHandlerCreator(e);window.addEventListener("mousemove",t),r._onDocumentMouseMove=t},this.handleMouseUp=function(){r._onDocumentMouseUp&&window.removeEventListener("mouseup",r._onDocumentMouseUp),r._onDocumentMouseMove&&window.removeEventListener("mousemove",r._onDocumentMouseMove),r.bindMouseHoverHandlers()},this.handleMouseMove=function(e){var n=r.calculateDirection(e),t=O[n];null===r._cursorBeforeModify&&(r._cursorBeforeModify=document.body.style.cursor),document.body.style.cursor=t},this.handleBlur=function(){null!=r._cursorBeforeModify&&(document.body.style.cursor=r._cursorBeforeModify,r._cursorBeforeModify=null)},this.calculateDirection=function(e){var n=r._resizeHoverRectangle.bounds,t=n.height,o=n.width,i=n.x,a=n.y,u=(o+10)/100,l=(t+10)/100,c=20/u,s=20/l,f=(100-2*c)/2,d=(100-2*c)/2,h=(e.point.x-i)/u,v=(e.point.y-a)/l,g=h-50,b=v-50;return Math.abs(g)>=f&&Math.abs(b)>=d?w[g>0?"right":"left"][b>0?"down":"top"]:h<s?"left":h>100-s?"right":v<c?"top":"down"};var i=this.self.expandRectangle(t,this.expandSize),a=new this.paperScope.Color(0,0,0,.2);this._resizeVisibleRectangle=new this.paperScope.Path.Rectangle(i),this._resizeVisibleRectangle.strokeColor=a,this._resizeVisibleRectangle.strokeWidth=2,this._resizeVisibleRectangle.visible=!1;var u=this.self.expandRectangle(t,this.expandSize),l=new this.paperScope.Color(0,0,0,Number.EPSILON);this._resizeHoverRectangle=new this.paperScope.Path.Rectangle(u),this._resizeHoverRectangle.strokeColor=l,this._resizeHoverRectangle.strokeWidth=20,this._resizeHoverRectangle.visible=!1,this.bindMouseHoverHandlers(),this._resizeHoverRectangle.onMouseDown=function(e){r.handleMouseDown(e)}}return Object(d.a)(e,[{key:"updateSize",value:function(e){var n=this.self.expandRectangle(e,this.expandSize);this._resizeVisibleRectangle.bounds=n.clone(),this._resizeHoverRectangle.bounds=n}},{key:"shift",value:function(e,n){this._resizeHoverRectangle.position.x+=e,this._resizeHoverRectangle.position.y+=n,this._resizeVisibleRectangle.position.x+=e,this._resizeVisibleRectangle.position.y+=n}},{key:"bringToFront",value:function(){this._resizeVisibleRectangle.bringToFront(),this._resizeHoverRectangle.bringToFront()}},{key:"remove",value:function(){this._resizeVisibleRectangle.remove(),this._resizeHoverRectangle.remove()}},{key:"resizeHandlerCreator",value:function(e){var n=this,t=this.calculateDirection(e),r=b.includes(t),o=m.includes(t),i=this._resizeHoverRectangle.bounds.clone(),a=e.point;return console.log(t),function(e){console.clear(),console.log(e);var u=a.x,l=a.y,c=e.offsetX,s=e.offsetY,f=p.includes(t)?c-u:0,d=y.includes(t)?s-l:0;f=r?-f:f,d=o?-d:d;var h=i.clone(),v=h.width+f,g=h.height+d;if(v>10?(h.width=v,h.x+=r?-f:0):(h.width=n._resizeHoverRectangle.bounds.width,h.x=n._resizeHoverRectangle.bounds.x),g>10?(h.height=g,h.y+=o?-d:0):(h.height=n._resizeHoverRectangle.bounds.height,h.y=n._resizeHoverRectangle.bounds.y),n._resizeVisibleRectangle.bounds=h.clone(),n._resizeHoverRectangle.bounds=h,n.onResize){var b=n.self.unExpandRectangle(h,n.expandSize),m={width:b.width,height:b.height},O={x:b.x,y:b.y};n.onResize(m,O)}}}},{key:"isShow",get:function(){return this._isShow},set:function(e){this._isShow!==e&&(this._resizeVisibleRectangle.visible=e,this._resizeHoverRectangle.visible=e,this._isShow=e)}},{key:"self",get:function(){return e}}],[{key:"expandRectangle",value:function(e,n){var t=e.clone();return t.x-=n,t.y-=n,t.width+=2*n,t.height+=2*n,t}},{key:"unExpandRectangle",value:function(e,n){var t=e.clone();return t.x+=n,t.y+=n,t.width-=2*n,t.height-=2*n,t}}]),e}(),R={segments:!0,stroke:!0,fill:!0,tolerance:5},E=function(){function e(n,t,r,o){Object(f.a)(this,e),this.paperScope=n,this.isPlayRef=t,this.playRef=r,this.id=o,this.coreFigure=void 0,this._isActive=!1,this._ResizeArea=null,this._lastMovePosition=null,this._isSegmentMove=!0,this._moveFigureHandler=null,this._moveSegmentHandler=null,this.onClick=null}return Object(d.a)(e,[{key:"bringToFront",value:function(){var e;this.coreFigure.bringToFront(),null===(e=this._ResizeArea)||void 0===e||e.bringToFront()}},{key:"remove",value:function(){this._moveFigureHandler&&window.removeEventListener("mousemove",this._moveFigureHandler),this._ResizeArea&&this._ResizeArea.remove(),this.coreFigure.remove()}},{key:"getColor",value:function(){return this.coreFigure.fillColor}},{key:"setColor",value:function(e){g(this.coreFigure,e)}},{key:"isSmoothFigure",value:function(){return!1}},{key:"isCanChangePoints",value:function(){return!1}},{key:"bindHandlers",value:function(){var e=this;this.coreFigure.strokeColor=new this.paperScope.Color(0,0,0,Number.EPSILON),this.coreFigure.strokeWidth=5,this.coreFigure.selectedColor=new this.paperScope.Color(0,1,0),this.paperScope.project.view.on("mouseup",(function(n){var t;console.log("local mouseup"),e.unbindSegmentMoveHandler();var r=n.modifiers.shift;if(e.isActive&&r){var o=e.paperScope.project.hitTest(n.point,R);o&&o.item===e.coreFigure&&"segment"===o.type&&(o.segment.remove(),null===(t=e._ResizeArea)||void 0===t||t.updateSize(e.coreFigure.bounds),n.stopPropagation())}})),this.coreFigure.onMouseUp=function(n){e.unbindFigureMoveHandler()},this.coreFigure.onMouseDown=function(n){if(e.isPlayRef.current)e.playRef.current(e);else{var t=!0;if(e.isActive){if(e.isCanChangePoints()){var r=e.paperScope.project.hitTest(n.point,R);if(r){var o,i=n.modifiers.shift;if(i&&"segment"===r.type)r.segment.remove(),null===(o=e._ResizeArea)||void 0===o||o.updateSize(e.coreFigure.bounds),n.stopPropagation(),t=!1;else if("segment"!==r.type||i){if("stroke"===r.type){var a,u=r.location.index+1,l=e.coreFigure.insert(u,n.point);e.isSmoothFigure()&&e.coreFigure.smooth(),null===(a=e._ResizeArea)||void 0===a||a.updateSize(e.coreFigure.bounds),e.bindSegmentMoveHandler(l),t=!1}}else e.bindSegmentMoveHandler(r.segment),t=!1}}}else e.paperScope.project.activeLayer.selected=!1,e.isActive=!0;if(t){var c=n.point,s=c.x,f=c.y;e.bindFigureMoveHandler({x:s,y:f})}e.onClick&&e.onClick()}}}},{key:"bindSegmentMoveHandler",value:function(e){var n=this;this._isSegmentMove=!0,this._moveSegmentHandler=Object(h.throttle)((function(t){var r,o=v(t);e.point.x=o.x,e.point.y=o.y,null===(r=n._ResizeArea)||void 0===r||r.updateSize(n.coreFigure.bounds)}),20),window.addEventListener("mousemove",this._moveSegmentHandler)}},{key:"unbindSegmentMoveHandler",value:function(){this._isSegmentMove=!1,this._moveSegmentHandler&&(window.removeEventListener("mousemove",this._moveSegmentHandler),this._moveSegmentHandler=null)}},{key:"bindFigureMoveHandler",value:function(e){var n=this;this._lastMovePosition=e,this._moveFigureHandler=Object(h.throttle)((function(e){return n.moveFigure(e)}),20),window.addEventListener("mousemove",this._moveFigureHandler)}},{key:"unbindFigureMoveHandler",value:function(){this._moveFigureHandler&&(window.removeEventListener("mousemove",this._moveFigureHandler),this._lastMovePosition=null)}},{key:"moveFigure",value:function(e){if(this._lastMovePosition){var n=v(e),t=n.x-this._lastMovePosition.x,r=n.y-this._lastMovePosition.y;this.coreFigure.position.x+=t,this.coreFigure.position.y+=r,this._ResizeArea&&this._ResizeArea.shift(t,r),this._lastMovePosition=n}}},{key:"resizeFigure",value:function(e,n){this.coreFigure.bounds.width=e.width,this.coreFigure.bounds.height=e.height,this.coreFigure.bounds.x=n.x,this.coreFigure.bounds.y=n.y}},{key:"scope",get:function(){return this.paperScope}},{key:"isActive",get:function(){return this._isActive},set:function(e){var n=this;this._isActive!==e&&(this._ResizeArea||(this._ResizeArea=new j(this.paperScope,this.coreFigure.bounds),this._ResizeArea.onResize=function(e,t){n.resizeFigure(e,t)}),this.isCanChangePoints()&&(this.coreFigure.selected=e),this._ResizeArea.isShow=e,this._isActive=e)}},{key:"isResizing",get:function(){return!!this._ResizeArea&&this._ResizeArea.isShow},set:function(e){var n=this;this._ResizeArea||(this._ResizeArea=new j(this.paperScope,this.coreFigure.bounds),this._ResizeArea.onResize=function(e,t){n.resizeFigure(e,t)}),this._ResizeArea.isShow=e}}]),e}(),k=t(26),x=t(25),C=function(e){Object(k.a)(t,e);var n=Object(x.a)(t);function t(e,r,o,i,a,u){var l;return Object(f.a)(this,t),(l=n.call(this,e,r,o,u)).coreFigure=void 0,l.coreFigure=new e.Path.Ellipse(i),l.coreFigure.fillColor=a,l.bindHandlers(),l}return t}(E),_=function(e){Object(k.a)(t,e);var n=Object(x.a)(t);function t(e,r,o,i,a,u){var l;return Object(f.a)(this,t),(l=n.call(this,e,r,o,u)).coreFigure=void 0,l.coreFigure=new e.Path.Rectangle(i),l.coreFigure.fillColor=a,l.bindHandlers(),l}return t}(E),M=function(e){Object(k.a)(t,e);var n=Object(x.a)(t);function t(e,r,o,i,a,u){var l;return Object(f.a)(this,t),(l=n.call(this,e,r,o,u)).coreFigure=void 0,l.coreFigure=l.createBlobPath(i),l.coreFigure.fillColor=a,l.bindHandlers(),l}return Object(d.a)(t,[{key:"isCanChangePoints",value:function(){return!0}},{key:"createBlobPath",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=1,r=new this.paperScope.Path;r.closed=!0;var o=e.point.clone();o.x+=Math.round(e.width/2),o.y+=Math.round(e.height/2);for(var i=0;i<n;i++){var a=new this.paperScope.Point({length:.5*t+Math.random()*t*.25,angle:360/n*i});r.add(o.multiply(a))}return r.position.x=o.x+Math.round(e.width/2),r.position.y=o.y+Math.round(e.height/2),this.isSmoothFigure()&&r.smooth(),r}}]),t}(E),z=function(e){Object(k.a)(t,e);var n=Object(x.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"isSmoothFigure",value:function(){return!0}}]),t}(M),S=t(10),F=t(12);function H(){var e=Object(S.a)(["\n  width: 100%;\n  height: 100%;\n"]);return H=function(){return e},e}function P(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n"]);return P=function(){return e},e}var N=F.a.div(P()),A=F.a.div(H()),B=Object(r.memo)((function(e){var n=e.canvasRef;return console.log("test"),o.a.createElement(A,null,o.a.createElement("canvas",{ref:n,style:{width:"100%",height:"100%"}}))})),D=t(48),L={ellipse:C,rectangle:_,polygon:M,blob:z},T=Object(r.memo)((function(e){var n=e.setSelectFigure,t=e.setCanvasReady,i=e.createFigureRef,a=e.removeFigureRef,u=e.rootBackgroundRef,c=e.isPlayRef,f=Object(r.useMemo)((function(){return new s.a(D.a)}),[]),d=Object(r.useRef)(null),h=Object(r.useRef)(null),v=Object(r.useRef)(new l.PaperScope),g=Object(r.useRef)([]),b=Object(r.useRef)((function(e){var n=g.current.find((function(n){return n.figure===e}));n&&f.playSong(n.track.map((function(e){return e.sound})))}));Object(r.useEffect)((function(){if(!d.current)throw new Error("Expected canvas element missing");var e=v.current;e.setup(d.current);var r=new e.Path.Rectangle(e.view.bounds);r.fillColor=new e.Color(1,1,1,1),r.onClick=function(){n(null),g.current.forEach((function(e){e.figure.isActive=!1}))},h.current=r,u.current=r,e.project.view.on("mouseup",(function(t){e.project.hitTest(t.point,{segments:!0,stroke:!0,fill:!0,tolerance:5})||(n(null),g.current.forEach((function(e){e.figure.isActive=!1})))})),t()}),[n,t]);var m=Object(r.useCallback)((function(e){e.bringToFront(),g.current.forEach((function(t){e===t.figure?n(t):t.figure.isActive=!1}))}),[n]),p=Object(r.useCallback)((function(e){var n=v.current;if(n){var t=L[e],r=new l.Color(Math.random(),Math.random(),Math.random()),o=new n.Point(80,80),i=new n.Size(200,200),a=new n.Rectangle(o,i),u=new t(n,c,b,a,r,"test");u.onClick=function(){return m(u)};var s={figure:u,track:[]};g.current.push(s)}}),[m]),y=Object(r.useCallback)((function(e){var n=g.current.findIndex((function(n){return n===e}));if(-1!==n){var t=g.current[n];g.current.splice(n,1),t.figure.remove()}}),[]);return Object(r.useEffect)((function(){i.current=p,a.current=y}),[p,y,i,a]),o.a.createElement(N,null,o.a.createElement(B,{canvasRef:d}))})),V=t(144),I=t(142),U=(t(66),t(73)),W=t(136),G=t(139);function Z(){var e=Object(S.a)(["\n  width: 100%;\n"]);return Z=function(){return e},e}function J(){var e=Object(S.a)(["\n  width: 100%;\n"]);return J=function(){return e},e}function X(){var e=Object(S.a)(["\n  & MuiButtonBase-root {\n    border-radius: 0;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(S.a)(["\n  height: 100%;\n  width: 260px;\n  padding: 15px 10px;\n  border-left: 1px solid #c1c1c1;\n  box-shadow: 0 0 5px #00000075;\n  &:after {\n    content: '';\n    display: block;\n    width: 260px;\n  }\n"]);return Y=function(){return e},e}var q=F.a.div(Y()),K=(F.a.div(X()),Object(F.a)(G.a)(J()),Object(F.a)(W.a)(Z()),t(50)),Q=t(143),$=t(141),ee=t(75);function ne(){var e=Object(S.a)(["\n  .ui-color-picker {\n    width: 100%;\n    margin: 0;\n    padding-top: 10px;\n    background-color: transparent;\n    .input-group {\n      display: none;\n    }\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(S.a)(["\n  padding: 0 5px 5px;\n"]);return te=function(){return e},e}var re=F.a.div(te()),oe=F.a.div(ne()),ie={kind:"rgb",red:255,green:0,blue:0,alpha:1},ae=function(e){var n=e.color,t=e.onColorChange,i=Object(r.useState)(null!==n&&void 0!==n?n:ie),a=Object(u.a)(i,2),l=a[0],c=a[1],s=Object(r.useState)(0),f=Object(u.a)(s,2),d=f[0],h=f[1],v=Object(r.useState)(!1),g=Object(u.a)(v,2),b=g[0],m=g[1];Object(r.useEffect)((function(){if(n){var e=Number("gradient"===n.kind);console.log("updatePikerType ",e),h(e),c(Object(K.a)({},n))}m(!0)}),[n,c,h,m]),Object(r.useLayoutEffect)((function(){m(!1)}),[b,m]);var p=function(e){c(e),t(e)},y=Object(r.useMemo)((function(){var e={};return l?(d&&"gradient"===l.kind&&(e.gradient=Object(K.a)({},l),delete e.gradient.kind),d||"rgb"!==l.kind||(e.color=Object(K.a)({},l),delete e.color.kind),e):e}),[l,d]);return b?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(re,null,o.a.createElement($.a,{value:d,onChange:function(e){return h(e.target.value)},fullWidth:!0},o.a.createElement(Q.a,{value:0},"Fill"),o.a.createElement(Q.a,{value:1},"Gradient"))),o.a.createElement(oe,null,o.a.createElement(ee.ColorPicker,Object.assign({onStartChange:p,onChange:p,onEndChange:p,isGradient:d},y))))},ue=function(e){if("rgb"===e.type)return{kind:"rgb",alpha:e.alpha,red:Math.round(255*e.red),blue:Math.round(255*e.blue),green:Math.round(255*e.green)};var n=e.gradient;return{kind:"gradient",points:n.stops.map((function(e){return{alpha:e.color.alpha,red:Math.round(255*e.color.red),blue:Math.round(255*e.color.blue),green:Math.round(255*e.color.green),left:100*e.offset}})),type:n.radial?"radial":"linear"}},le=function(e){var n=e.figureData,t=e.rootBackgroundRef,i=Object(r.useCallback)((function(e,n){if(n)n.figure.setColor(e);else{var r=t.current;if(!r)return;g(r,e)}}),[]),a=Object(r.useCallback)((function(e,n){n&&(n.track=e)}),[]),u=Object(r.useMemo)((function(){if(!n){var e=t.current;return e&&e.fillColor?ue(e.fillColor):null}var r=n.figure.getColor();return r&&ue(r)}),[n]);return o.a.createElement(q,null,o.a.createElement(I.a,{mb:5},o.a.createElement(I.a,{mb:1},o.a.createElement(V.a,null,"Color")),o.a.createElement(ae,{onColorChange:function(e){return i(e,n)},color:u})),!!n&&o.a.createElement(I.a,null,o.a.createElement(I.a,{mb:1},o.a.createElement(I.a,{mb:1},o.a.createElement(V.a,null,"Sound"))),o.a.createElement(U.default,{onMusicChange:function(e){return a(e,n)},track:null===n||void 0===n?void 0:n.track})))},ce=t(140),se=t(76),fe=t.n(se),de=t(68),he=t(77),ve=t.n(he),ge=t(78),be=t.n(ge);function me(){return(me=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function pe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ye=o.a.createElement("path",{d:"M31.5 15.5C31.5 23.7694 24.5755 30.5 16 30.5C7.4245 30.5 0.5 23.7694 0.5 15.5C0.5 7.23057 7.4245 0.5 16 0.5C24.5755 0.5 31.5 7.23057 31.5 15.5Z",stroke:"black"}),Oe=function(e){var n=e.svgRef,t=e.title,r=pe(e,["svgRef","title"]);return o.a.createElement("svg",me({width:32,height:31,viewBox:"0 0 32 31",fill:"none",ref:n},r),t?o.a.createElement("title",null,t):null,ye)},we=o.a.forwardRef((function(e,n){return o.a.createElement(Oe,me({svgRef:n},e))}));t.p;function je(){return(je=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Re(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Ee=o.a.createElement("path",{d:"M26.3388 2L17.6612 14.4091L2.04132 4.48182L11.0661 20.7909L1 23.2727L12.4545 25.7545L8.63636 41L20.438 27.1727L33.6281 36.0364L25.2975 23.2727L43 14.4091L25.2975 15.4727L26.3388 2Z",stroke:"black"}),ke=function(e){var n=e.svgRef,t=e.title,r=Re(e,["svgRef","title"]);return o.a.createElement("svg",je({width:44,height:42,viewBox:"0 0 44 42",fill:"none",ref:n},r),t?o.a.createElement("title",null,t):null,Ee)},xe=o.a.forwardRef((function(e,n){return o.a.createElement(ke,je({svgRef:n},e))}));t.p;function Ce(){return(Ce=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _e(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Me=o.a.createElement("rect",{x:.5,y:.5,width:27,height:27,stroke:"black"}),ze=function(e){var n=e.svgRef,t=e.title,r=_e(e,["svgRef","title"]);return o.a.createElement("svg",Ce({width:28,height:28,viewBox:"0 0 28 28",fill:"none",ref:n},r),t?o.a.createElement("title",null,t):null,Me)},Se=o.a.forwardRef((function(e,n){return o.a.createElement(ze,Ce({svgRef:n},e))}));t.p;function Fe(){return(Fe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function He(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Pe=o.a.createElement("path",{d:"M15.1726 10.98C12.265 13.0386 11.376 11.0544 9.84031 7.24901C8.5856 4.13987 3.88061 5.07261 2.62603 6.31627C0.772506 8.15367 0.164671 13.8435 2.62603 17.1983C5.13532 20.6183 7.95832 17.8201 7.95832 21.862C7.95832 24.0384 -0.510648 28.3912 4.82167 34.9205C10.154 41.4497 14.2316 28.3912 18.6229 27.4585C23.0142 26.5257 15.8 43.1127 27.4056 38.0296C40.8932 32.1222 27.5388 27.1049 29.6012 24.0384C30.8559 22.1729 42.2149 26.1542 40.8932 19.9965C37.7565 5.38349 27.4056 14.0891 26.1509 14.0891C24.6539 14.0891 23.3279 11.1665 24.5826 8.18173C26.1509 4.45073 27.4056 1.65252 19.5639 1.03069C11.7223 0.408858 17.3683 9.42542 15.1726 10.98Z",stroke:"black"}),Ne=function(e){var n=e.svgRef,t=e.title,r=He(e,["svgRef","title"]);return o.a.createElement("svg",Fe({width:42,height:40,viewBox:"0 0 42 40",fill:"none",ref:n},r),t?o.a.createElement("title",null,t):null,Pe)},Ae=o.a.forwardRef((function(e,n){return o.a.createElement(Ne,Fe({svgRef:n},e))}));t.p;function Be(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n  \n"]);return Be=function(){return e},e}function De(){var e=Object(S.a)(["\n  position: absolute;\n  left: 15px;\n  bottom: 50%;\n  margin-bottom: -166px;\n"]);return De=function(){return e},e}function Le(){var e=Object(S.a)(["\n  position: absolute;\n  left: 15px;\n  bottom: 50%;\n  margin-bottom: -126px;\n"]);return Le=function(){return e},e}function Te(){var e=Object(S.a)(["\n  &.MuiIconButton-root {\n    margin-bottom: ",";\n    background: ",";\n    color: #fff;\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return Te=function(){return e},e}var Ve=Object(F.a)(ce.a)(Te(),(function(e){return e.isDelete?"20px":"15px"}),(function(e){return e.isDelete?"#f44336":"#3f51b5"}),(function(e){return e.isDelete?"#d32f2f":"#303f9f"})),Ie=F.a.div(Le()),Ue=(F.a.div(De()),F.a.div(Be(),(function(e){return e.hasButtonOffset?"10px":"0"}))),We=function(e){var n=e.selectFigure,t=e.isPlay,r=e.playToggle,i=e.createFigure,a=e.removeFigure;return o.a.createElement(Ie,null,!!n&&o.a.createElement(Ue,{hasButtonOffset:!0,onClick:function(){return a(n)}},o.a.createElement(Ve,{isDelete:!0},o.a.createElement(fe.a,null))),o.a.createElement(Ue,null,o.a.createElement(Ve,{onClick:function(){return i("rectangle")}},o.a.createElement(de.a,{component:Se,viewBox:"0 0 34 34"})),o.a.createElement(Ve,{onClick:function(){return i("ellipse")}},o.a.createElement(de.a,{component:we,viewBox:"0 0 36 36"})),o.a.createElement(Ve,{onClick:function(){return i("blob")}},o.a.createElement(de.a,{component:Ae,viewBox:"0 0 36 36"})),o.a.createElement(Ve,{onClick:function(){return i("polygon")}},o.a.createElement(de.a,{component:xe,viewBox:"0 0 36 36"}))),o.a.createElement(Ue,null,o.a.createElement(Ve,{onClick:r},!t&&o.a.createElement(ve.a,null),t&&o.a.createElement(be.a,null))))},Ge=function(){var e=Object(r.useState)(null),n=Object(u.a)(e,2),t=n[0],i=n[1],a=Object(r.useState)(!1),l=Object(u.a)(a,2),c=l[0],s=l[1],f=Object(r.useRef)(null),d=Object(r.useRef)(null),h=Object(r.useRef)(null),v=Object(r.useRef)(!1),g=Object(r.useState)(!1),b=Object(u.a)(g,2),m=b[0],p=b[1];v.current=m;var y=Object(r.useCallback)((function(e){f.current&&f.current(e)}),[]),O=Object(r.useCallback)((function(){d.current&&t&&(d.current(t),i(null))}),[t,i]),w=Object(r.useCallback)((function(){s(!0)}),[s]),j=Object(r.useCallback)((function(){t&&(t.figure.isActive=!1),p(!m)}),[m,t,p]);return o.a.createElement(N,null,c&&o.a.createElement(We,{isPlay:m,selectFigure:t,createFigure:y,removeFigure:O,playToggle:j}),o.a.createElement(T,{setSelectFigure:i,setCanvasReady:w,createFigureRef:f,removeFigureRef:d,rootBackgroundRef:h,isPlayRef:v}),!m&&o.a.createElement(le,{figureData:t,rootBackgroundRef:h}))},Ze=(t(106),t(107),function(){return o.a.createElement(Ge,null)}),Je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,145)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),i(e),a(e)}))};a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ze,null)),document.getElementById("root")),Je()},46:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(15),o=t(18),i=t(72);var a=function(){function e(n){var t=this;Object(r.a)(this,e),this.soundMap=void 0,this.soundMap={},Object.keys(n).forEach((function(e){var r=n[e];t.soundMap[e]=new i.Howl({src:[r]})}))}return Object(o.a)(e,[{key:"playSong",value:function(e){var n=this,t=e.find((function(e){return!n.soundMap[e]}));if(t)throw new Error("Unexpended sound ".concat(t));var r=this.soundMap;console.log(e),function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=t[r];if(o){var i=n[o];i.once("end",(function(){e(n,t,r+1)})),i.play()}}(r,e)}}]),e}()},48:function(e,n,t){"use strict";n.a={moon:"./sounds/moon.mp3",corona:"./sounds/corona.mp3",confetti:"./sounds/confetti.mp3",bubbles:"./sounds/bubbles.mp3"}},67:function(e,n){},69:function(e,n,t){"use strict";var r=t(6),o=t(8),i=t(0),a=t.n(i),u=t(46),l=t(10),c=t(12);function s(){var e=Object(l.a)(["\n  width: 240px;\n  height: 240px;\n"]);return s=function(){return e},e}var f=c.a.div(s()),d=t(44);function h(){var e=Object(l.a)(["background: red"]);return h=function(){return e},e}function v(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    /* margin: 0 10px; */\n    box-sizing: border-box;\n    background-color: ",";\n    text-align: center;\n    cursor: pointer;\n    font-size: 12px;\n    ","\n    * {\n        font-size: 12px;\n    }\n"]);return v=function(){return e},e}function g(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    /* margin: 10px 0; */\n"]);return g=function(){return e},e}function b(){var e=Object(l.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n"]);return b=function(){return e},e}var m=c.a.div(b()),p=c.a.div(g()),y=c.a.div(v(),(function(e){var n;return null!==(n=e.color)&&void 0!==n?n:"#eee"}),(function(e){return e.isSelect&&Object(d.a)(h())})),O=function(e){var n=e.matrix,t=e.track,r=e.onToggleCell,o=Object(i.useMemo)((function(){var e=new Array(n.length).fill(null).map((function(e,n){return[n,{}]})),r=Object.fromEntries(e);return t.reduce((function(e,n,t){var r=n.position,o=r.x;return e[r.y][o]=t+1,e}),r)}),[t,n]),u=Object(i.useCallback)((function(e,n){return!!o[n][e]}),[o]),l=Object(i.useCallback)((function(e,n){r({x:e,y:n})}),[r]);return a.a.createElement(m,null,n.map((function(e,n){return a.a.createElement(p,{key:n},e.map((function(e,t){return a.a.createElement(y,{key:t,isSelect:u(t,n),color:e.color,onClick:function(){return l(t,n)}},e.nodeName)})))})))},w=[[{nodeName:"A1",sound:"moon",color:"#eee"},{nodeName:"A2",sound:"corona",color:"#eee"},{nodeName:"A3",sound:"moon",color:"#eee"},{nodeName:"A4",sound:"bubbles",color:"#eee"},{nodeName:"A5",sound:"moon",color:"#eee"},{nodeName:"D5",sound:"bubbles",color:"#eee"}],[{nodeName:"B1",sound:"moon",color:"#eee"},{nodeName:"B2",sound:"corona",color:"#eee"},{nodeName:"B3",sound:"confetti",color:"#eee"},{nodeName:"B4",sound:"bubbles",color:"#eee"},{nodeName:"B5",sound:"corona",color:"#eee"},{nodeName:"D5",sound:"bubbles",color:"#eee"}],[{nodeName:"C1",sound:"moon",color:"#eee"},{nodeName:"C2",sound:"corona",color:"#eee"},{nodeName:"C3",sound:"confetti",color:"#eee"},{nodeName:"C4",sound:"bubbles",color:"#eee"},{nodeName:"C5",sound:"confetti",color:"#eee"},{nodeName:"D5",sound:"bubbles",color:"#eee"}],[{nodeName:"D1",sound:"moon",color:"green"},{nodeName:"D2",sound:"corona",color:"#eee"},{nodeName:"D3",sound:"confetti",color:"#eee"},{nodeName:"D4",sound:"bubbles",color:"#eee"},{nodeName:"D5",sound:"bubbles",color:"#eee"},{nodeName:"D5",sound:"bubbles",color:"#eee"}],[{nodeName:"E1",sound:"moon",color:"#eee"},{nodeName:"E2",sound:"corona",color:"#eee"},{nodeName:"E3",sound:"moon",color:"#eee"},{nodeName:"E4",sound:"bubbles",color:"#eee"},{nodeName:"E5",sound:"moon",color:"#eee"},{nodeName:"E5",sound:"moon",color:"#eee"}],[{nodeName:"E1",sound:"moon",color:"#eee"},{nodeName:"E2",sound:"corona",color:"#eee"},{nodeName:"E3",sound:"moon",color:"#eee"},{nodeName:"E4",sound:"bubbles",color:"#eee"},{nodeName:"E5",sound:"moon",color:"#eee"},{nodeName:"E5",sound:"moon",color:"#eee"}]],j=t(48),R=t(136);n.a=function(e){var n=e.track,t=e.onMusicChange,l=Object(i.useState)([]),c=Object(o.a)(l,2),s=c[0],d=c[1];Object(i.useEffect)((function(){d((function(){return null!==n&&void 0!==n?n:[]}))}),[n,d]),Object(i.useEffect)((function(){t&&t(s)}),[s,t]);var h=Object(i.useMemo)((function(){return new u.a(j.a)}),[]),v=Object(i.useCallback)((function(){var e=s.map((function(e){return e.sound}));h.playSong(e)}),[h,s]),g=Object(i.useCallback)((function(e){d((function(n){var t=n.findIndex((function(n){return function(e,n){var t=e.position;return n.x===t.x&&n.y===t.y}(n,e)}));if(t>-1)return[].concat(Object(r.a)(n.slice(0,t)),Object(r.a)(n.slice(t+1)));var o=w[e.y][e.x].sound;return[].concat(Object(r.a)(n),[{position:e,sound:o}])}))}),[d]);return a.a.createElement(f,null,a.a.createElement(O,{matrix:w,track:s,onToggleCell:g}),a.a.createElement(R.a,{onClick:v,color:"primary",variant:"contained",fullWidth:!0},"Play"))}},73:function(e,n,t){"use strict";t(67);var r=t(69);t.d(n,"default",(function(){return r.a}))},89:function(e,n,t){e.exports=t(108)},94:function(e,n){},96:function(e,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.e1501501.chunk.js.map