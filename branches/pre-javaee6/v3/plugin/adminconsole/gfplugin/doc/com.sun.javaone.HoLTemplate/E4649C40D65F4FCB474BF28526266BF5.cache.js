(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,yx='com.google.gwt.core.client.',zx='com.google.gwt.http.client.',Ax='com.google.gwt.lang.',Bx='com.google.gwt.user.client.',Cx='com.google.gwt.user.client.impl.',Dx='com.google.gwt.user.client.ui.',Ex='com.sun.javaone.client.',Fx='java.lang.',ay='java.util.';function xx(){}
function zr(a){return this===a;}
function Ar(){return xs(this);}
function xr(){}
_=xr.prototype={};_.eQ=zr;_.hC=Ar;_.tI=1;function o(){return u();}
var p=null;function s(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function u(){var b=$doc.location.href;var a=b.indexOf('#');if(a!= -1)b=b.substring(0,a);a=b.indexOf('?');if(a!= -1)b=b.substring(0,a);a=b.lastIndexOf('/');if(a!= -1)b=b.substring(0,a);return b.length>0?b+'/':'';}
function v(){return ++w;}
var w=0;function zs(b,a){a;return b;}
function Bs(b,a){if(b.a!==null){throw gr(new fr(),"Can't overwrite cause");}if(a===b){throw dr(new cr(),'Self-causation not permitted');}b.a=a;return b;}
function ys(){}
_=ys.prototype=new xr();_.tI=3;_.a=null;function ar(b,a){zs(b,a);return b;}
function Fq(){}
_=Fq.prototype=new ys();_.tI=4;function Cr(b,a){ar(b,a);return b;}
function Br(){}
_=Br.prototype=new Fq();_.tI=5;function y(c,b,a){Cr(c,'JavaScript '+b+' exception: '+a);return c;}
function x(){}
_=x.prototype=new Br();_.tI=6;function C(b,a){if(!kd(a,2)){return false;}return bb(b,jd(a,2));}
function D(a){return s(a);}
function E(){return [];}
function F(){return function(){};}
function ab(){return {};}
function cb(a){return C(this,a);}
function bb(a,b){return a===b;}
function db(){return D(this);}
function A(){}
_=A.prototype=new xr();_.eQ=cb;_.hC=db;_.tI=7;function ec(b,d,c,a){if(d===null){throw new qr();}if(a===null){throw new qr();}if(c<0){throw new cr();}b.a=c;b.c=d;if(c>0){b.b=lb(new kb(),b,a);eg(b.b,c);}else{b.b=null;}return b;}
function gc(a){var b;if(a.c!==null){b=a.c;a.c=null;vc(b);fc(a);}}
function fc(a){if(a.b!==null){bg(a.b);}}
function ic(e,a){var b,c,d,f;if(e.c===null){return;}fc(e);f=e.c;e.c=null;b=wc(f);if(b!==null){c=Cr(new Br(),b);a.C(e,c);}else{d=kc(f);a.F(e,d);}}
function jc(b,a){if(b.c===null){return;}gc(b);a.C(b,bc(new ac(),b,b.a));}
function kc(b){var a;a=gb(new fb(),b);return a;}
function lc(a){var b;b=p;{ic(this,a);}}
function eb(){}
_=eb.prototype=new xr();_.q=lc;_.tI=0;_.a=0;_.b=null;_.c=null;function mc(){}
_=mc.prototype=new xr();_.tI=0;function gb(a,b){a.a=b;return a;}
function ib(a){return yc(a.a);}
function jb(a){return xc(a.a);}
function fb(){}
_=fb.prototype=new mc();_.tI=0;function cg(){cg=xx;kg=ev(new cv());{jg();}}
function ag(a){cg();return a;}
function bg(a){if(a.c){fg(a.d);}else{gg(a.d);}nv(kg,a);}
function dg(a){if(!a.c){nv(kg,a);}a.hb();}
function eg(b,a){if(a<=0){throw dr(new cr(),'must be positive');}bg(b);b.c=false;b.d=hg(b,a);gv(kg,b);}
function fg(a){cg();$wnd.clearInterval(a);}
function gg(a){cg();$wnd.clearTimeout(a);}
function hg(b,a){cg();return $wnd.setTimeout(function(){b.r();},a);}
function ig(){var a;a=p;{dg(this);}}
function jg(){cg();pg(new Cf());}
function Bf(){}
_=Bf.prototype=new xr();_.r=ig;_.tI=8;_.c=false;_.d=0;var kg;function mb(){mb=xx;cg();}
function lb(b,a,c){mb();b.a=a;b.b=c;ag(b);return b;}
function nb(){jc(this.a,this.b);}
function kb(){}
_=kb.prototype=new Bf();_.hb=nb;_.tI=9;function ub(){ub=xx;xb=qb(new pb(),'GET');qb(new pb(),'POST');yb=ei(new di());}
function sb(b,a,c){ub();tb(b,a===null?null:a.a,c);return b;}
function tb(b,a,c){ub();qc('httpMethod',a);qc('url',c);b.a=a;b.c=c;return b;}
function vb(g,d,a){var b,c,e,f,h;h=gi(yb);{b=zc(h,g.a,g.c,true);}if(b!==null){e=Eb(new Db(),g.c);Bs(e,Bb(new Ab(),b));throw e;}wb(g,h);c=ec(new eb(),h,g.b,a);f=Ac(h,c,d,a);if(f!==null){throw Bb(new Ab(),f);}return c;}
function wb(a,b){{Bc(b,'Content-Type','text/plain; charset=utf-8');}}
function ob(){}
_=ob.prototype=new xr();_.tI=0;_.a=null;_.b=0;_.c=null;var xb,yb;function qb(b,a){b.a=a;return b;}
function pb(){}
_=pb.prototype=new xr();_.tI=0;_.a=null;function Bb(b,a){ar(b,a);return b;}
function Ab(){}
_=Ab.prototype=new Fq();_.tI=10;function Eb(a,b){Bb(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function Db(){}
_=Db.prototype=new Ab();_.tI=11;function bc(b,a,c){Bb(b,dc(c));return b;}
function dc(a){return 'A request timeout has expired after '+nr(a)+' ms';}
function ac(){}
_=ac.prototype=new Ab();_.tI=12;function qc(a,b){rc(a,b);if(0==hs(os(b))){throw dr(new cr(),a+' can not be empty');}}
function rc(a,b){if(null===b){throw rr(new qr(),a+' can not be null');}}
function vc(a){a.onreadystatechange=ii;a.abort();}
function wc(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function xc(a){return a.responseText;}
function yc(a){return a.status;}
function zc(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function Ac(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==uc){e.onreadystatechange=ii;c.q(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=ii;return a.message||a.toString();}}
function Bc(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var uc=4;function Dc(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function Fc(a,b,c){return a[b]=c;}
function ad(b,a){return b[a];}
function bd(a){return a.length;}
function dd(e,d,c,b,a){return cd(e,d,c,b,0,bd(b),a);}
function cd(j,i,g,c,e,a,b){var d,f,h;if((f=ad(c,e))<0){throw new or();}h=Dc(new Cc(),f,ad(i,e),ad(g,e),j);++e;if(e<a){j=ls(j,1);for(d=0;d<f;++d){Fc(h,d,cd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Fc(h,d,b);}}return h;}
function ed(a,b,c){if(c!==null&&a.b!=0&& !kd(c,a.b)){throw new vq();}return Fc(a,b,c);}
function Cc(){}
_=Cc.prototype=new xr();_.tI=0;function hd(b,a){return !(!(b&&nd[b][a]));}
function id(a){return String.fromCharCode(a);}
function jd(b,a){if(b!=null)hd(b.tI,a)||md();return b;}
function kd(b,a){return b!=null&&hd(b.tI,a);}
function md(){throw new Bq();}
function ld(a){if(a!==null){throw new Bq();}return a;}
function od(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var nd;function rd(a){if(kd(a,3)){return a;}return y(new x(),td(a),sd(a));}
function sd(a){return a.message;}
function td(a){return a.name;}
function xd(){if(wd===null||Ad()){wd=vw(new Bv());zd(wd);}return wd;}
function yd(b){var a;a=xd();return jd(Bw(a,b),1);}
function zd(e){var b=$doc.cookie;if(b&&b!=''){var a=b.split('; ');for(var d=0;d<a.length;++d){var f,g;var c=a[d].indexOf('=');if(c== -1){f=a[d];g='';}else{f=a[d].substring(0,c);g=a[d].substring(c+1);}f=decodeURIComponent(f);g=decodeURIComponent(g);e.eb(f,g);}}}
function Ad(){var a=$doc.cookie;if(a!=''&&a!=Bd){Bd=a;return true;}else{return false;}}
function Cd(a){$doc.cookie=a+"='';expires='Fri, 02-Jan-1970 00:00:00 GMT'";}
function Ed(a,b){Dd(a,b,0,null,null,false);}
function Dd(d,g,c,b,e,f){var a=encodeURIComponent(d)+'='+encodeURIComponent(g);if(c)a+=';expires='+new Date(c).toGMTString();if(b)a+=';domain='+b;if(e)a+=';path='+e;if(f)a+=';secure';$doc.cookie=a;}
var wd=null,Bd=null;function ae(){ae=xx;De=ev(new cv());{ye=new Fg();dh(ye);}}
function be(b,a){ae();ph(ye,b,a);}
function ce(a,b){ae();return bh(ye,a,b);}
function de(){ae();return rh(ye,'A');}
function ee(){ae();return rh(ye,'div');}
function fe(){ae();return rh(ye,'tbody');}
function ge(){ae();return rh(ye,'td');}
function he(){ae();return rh(ye,'tr');}
function ie(){ae();return rh(ye,'table');}
function le(b,a,d){ae();var c;c=p;{ke(b,a,d);}}
function ke(b,a,c){ae();var d;if(a===Ce){if(ne(b)==8192){Ce=null;}}d=je;je=b;try{c.B(b);}finally{je=d;}}
function me(b,a){ae();sh(ye,b,a);}
function ne(a){ae();return th(ye,a);}
function oe(a){ae();ih(ye,a);}
function pe(b,a){ae();return uh(ye,b,a);}
function qe(a){ae();return vh(ye,a);}
function se(a,b){ae();return xh(ye,a,b);}
function re(a,b){ae();return wh(ye,a,b);}
function te(a){ae();return yh(ye,a);}
function ue(a){ae();return jh(ye,a);}
function ve(a){ae();return zh(ye,a);}
function we(a){ae();return kh(ye,a);}
function xe(a){ae();return lh(ye,a);}
function ze(c,a,b){ae();nh(ye,c,a,b);}
function Ae(a){ae();var b,c;c=true;if(De.b>0){b=ld(jv(De,De.b-1));if(!(c=null.lb())){me(a,true);oe(a);}}return c;}
function Be(b,a){ae();Ah(ye,b,a);}
function Ee(a,b,c){ae();Bh(ye,a,b,c);}
function Fe(a,b){ae();Ch(ye,a,b);}
function af(a,b){ae();Dh(ye,a,b);}
function bf(a,b){ae();Eh(ye,a,b);}
function cf(b,a,c){ae();Fh(ye,b,a,c);}
function df(a,b){ae();fh(ye,a,b);}
function ef(){ae();return ai(ye);}
function ff(){ae();return bi(ye);}
var je=null,ye=null,Ce=null,De;function jf(a){if(kd(a,4)){return ce(this,jd(a,4));}return C(od(this,gf),a);}
function kf(){return D(od(this,gf));}
function gf(){}
_=gf.prototype=new A();_.eQ=jf;_.hC=kf;_.tI=13;function of(a){return C(od(this,lf),a);}
function pf(){return D(od(this,lf));}
function lf(){}
_=lf.prototype=new A();_.eQ=of;_.hC=pf;_.tI=14;function sf(){sf=xx;xf=ev(new cv());{yf=new ki();if(!pi(yf)){yf=null;}}}
function tf(a){sf();gv(xf,a);}
function uf(){sf();$wnd.history.back();}
function vf(a){sf();var b,c;for(b=pt(xf);it(b);){c=jd(jt(b),5);c.D(a);}}
function wf(){sf();return yf!==null?ri(yf):'';}
function zf(a){sf();if(yf!==null){mi(yf,a);}}
function Af(b){sf();var a;a=p;{vf(b);}}
var xf,yf=null;function Ef(){while((cg(),kg).b>0){bg(jd(jv((cg(),kg),0),6));}}
function Ff(){return null;}
function Cf(){}
_=Cf.prototype=new xr();_.bb=Ef;_.cb=Ff;_.tI=15;function og(){og=xx;rg=ev(new cv());Cg=ev(new cv());{yg();}}
function pg(a){og();gv(rg,a);}
function qg(a){og();gv(Cg,a);}
function sg(a){og();$doc.body.style.overflow=a?'auto':'hidden';}
function tg(){og();var a,b;for(a=pt(rg);it(a);){b=jd(jt(a),7);b.bb();}}
function ug(){og();var a,b,c,d;d=null;for(a=pt(rg);it(a);){b=jd(jt(a),7);c=b.cb();{d=c;}}return d;}
function vg(){og();var a,b;for(a=pt(Cg);it(a);){b=jd(jt(a),8);b.db(xg(),wg());}}
function wg(){og();return ef();}
function xg(){og();return ff();}
function yg(){og();__gwt_initHandlers(function(){Bg();},function(){return Ag();},function(){zg();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function zg(){og();var a;a=p;{tg();}}
function Ag(){og();var a;a=p;{return ug();}}
function Bg(){og();var a;a=p;{vg();}}
function Dg(a){og();$doc.title=a;}
var rg,Cg;function ph(c,b,a){b.appendChild(a);}
function rh(b,a){return $doc.createElement(a);}
function sh(c,b,a){b.cancelBubble=a;}
function th(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function uh(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function vh(c,b){var a=$doc.getElementById(b);return a||null;}
function xh(d,a,b){var c=a[b];return c==null?null:String(c);}
function wh(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function yh(b,a){return a.__eventBits||0;}
function zh(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.s(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function Ah(c,b,a){b.removeChild(a);}
function Bh(c,a,b,d){a[b]=d;}
function Ch(c,a,b){a.__listener=b;}
function Dh(c,a,b){if(!b){b='';}a.innerHTML=b;}
function Eh(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Fh(c,b,a,d){b.style[a]=d;}
function ai(a){return $doc.body.clientHeight;}
function bi(a){return $doc.body.clientWidth;}
function ci(a){return zh(this,a);}
function Eg(){}
_=Eg.prototype=new xr();_.s=ci;_.tI=0;function ih(b,a){a.preventDefault();}
function jh(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function kh(c,a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b||null;}
function lh(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function mh(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){le(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Ae(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)le(b,a,c);};$wnd.__captureElem=null;}
function nh(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function oh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function gh(){}
_=gh.prototype=new Eg();_.tI=0;function bh(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function dh(a){mh(a);ch(a);}
function ch(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function fh(c,b,a){oh(c,b,a);eh(c,b,a);}
function eh(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function Fg(){}
_=Fg.prototype=new gh();_.tI=0;function ei(a){ii=F();return a;}
function gi(a){return hi(a);}
function hi(a){return new XMLHttpRequest();}
function di(){}
_=di.prototype=new xr();_.tI=0;var ii=null;function ri(a){return $wnd.__gwt_historyToken;}
function si(a){Af(a);}
function ji(){}
_=ji.prototype=new xr();_.tI=0;function pi(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;si(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function ni(){}
_=ni.prototype=new ji();_.tI=0;function mi(d,a){if(a==null||a.length==0){var c=$wnd.location.href;var b=c.indexOf('#');if(b!= -1)c=c.substring(0,b);$wnd.location=c+'#';}else{$wnd.location.hash=encodeURIComponent(a);}}
function ki(){}
_=ki.prototype=new ni();_.tI=0;function hm(b,a){im(b,lm(b)+id(45)+a);}
function im(b,a){xm(b.i,a,true);}
function km(a){return re(a.i,'offsetWidth');}
function lm(a){return vm(a.i);}
function mm(b,a){nm(b,lm(b)+id(45)+a);}
function nm(b,a){xm(b.i,a,false);}
function om(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function pm(b,a){if(b.i!==null){om(b,b.i,a);}b.i=a;}
function qm(b,a){wm(b.i,a);}
function rm(b,a){ym(b.i,a);}
function sm(a,b){zm(a.i,b);}
function tm(b,a){df(b.i,a|te(b.i));}
function um(a){return se(a,'className');}
function vm(a){var b,c;b=um(a);c=es(b,32);if(c>=0){return ms(b,0,c);}return b;}
function wm(a,b){Ee(a,'className',b);}
function xm(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw Cr(new Br(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=os(j);if(hs(j)==0){throw dr(new cr(),'Style names cannot be empty');}i=um(c);e=fs(i,j);while(e!=(-1)){if(e==0||Fr(i,e-1)==32){f=e+hs(j);g=hs(i);if(f==g||f<g&&Fr(i,f)==32){break;}}e=gs(i,j,e+1);}if(a){if(e==(-1)){if(hs(i)>0){i+=' ';}Ee(c,'className',i+j);}}else{if(e!=(-1)){b=os(ms(i,0,e));d=os(ls(i,e+hs(j)));if(hs(b)==0){h=d;}else if(hs(d)==0){h=b;}else{h=b+' '+d;}Ee(c,'className',h);}}}
function ym(a,b){if(a===null){throw Cr(new Br(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}b=os(b);if(hs(b)==0){throw dr(new cr(),'Style names cannot be empty');}Am(a,b);}
function zm(a,b){a.style.display=b?'':'none';}
function Am(b,f){var a=b.className.split(/\s+/);if(!a){return;}var g=a[0];var h=g.length;a[0]=f;for(var c=1,d=a.length;c<d;c++){var e=a[c];if(e.length>h&&(e.charAt(h)=='-'&&e.indexOf(g)==0)){a[c]=f+e.substring(h);}}b.className=a.join(' ');}
function gm(){}
_=gm.prototype=new xr();_.tI=0;_.i=null;function vn(a){if(a.g){throw gr(new fr(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;Fe(a.i,a);a.n();a.E();}
function wn(a){if(!a.g){throw gr(new fr(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.ab();}finally{a.o();Fe(a.i,null);a.g=false;}}
function xn(a){if(a.h!==null){a.h.gb(a);}else if(a.h!==null){throw gr(new fr(),"This widget's parent does not implement HasWidgets");}}
function yn(b,a){if(b.g){Fe(b.i,null);}pm(b,a);if(b.g){Fe(a,b);}}
function zn(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){wn(c);}c.h=null;}else{if(a!==null){throw gr(new fr(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){vn(c);}}}
function An(){}
function Bn(){}
function Cn(a){}
function Dn(){}
function En(){}
function dn(){}
_=dn.prototype=new gm();_.n=An;_.o=Bn;_.B=Cn;_.E=Dn;_.ab=En;_.tI=16;_.g=false;_.h=null;function bl(b,a){zn(a,b);}
function dl(b,a){zn(a,null);}
function el(){var a,b;for(b=this.y();b.x();){a=jd(b.A(),9);vn(a);}}
function fl(){var a,b;for(b=this.y();b.x();){a=jd(b.A(),9);wn(a);}}
function gl(){}
function hl(){}
function al(){}
_=al.prototype=new dn();_.n=el;_.o=fl;_.E=gl;_.ab=hl;_.tI=17;function Fi(a){a.f=ln(new en(),a);}
function aj(a){Fi(a);return a;}
function bj(c,a,b){xn(a);mn(c.f,a);be(b,a.i);bl(c,a);}
function cj(d,b,a){var c;ej(d,a);if(b.h===d){c=gj(d,b);if(c<a){a--;}}return a;}
function dj(b,a){if(a<0||a>=b.f.b){throw new ir();}}
function ej(b,a){if(a<0||a>b.f.b){throw new ir();}}
function hj(b,a){return on(b.f,a);}
function gj(b,a){return pn(b.f,a);}
function ij(e,b,c,a,d){a=cj(e,b,a);xn(b);qn(e.f,b,a);if(d){ze(c,b.i,a);}else{be(c,b.i);}bl(e,b);}
function jj(b,a){return b.gb(hj(b,a));}
function kj(b,c){var a;if(c.h!==b){return false;}dl(b,c);a=c.i;Be(xe(a),a);tn(b.f,c);return true;}
function lj(){return rn(this.f);}
function mj(a){return kj(this,a);}
function Ei(){}
_=Ei.prototype=new al();_.y=lj;_.gb=mj;_.tI=18;function ui(a){aj(a);yn(a,ee());cf(a.i,'position','relative');cf(a.i,'overflow','hidden');return a;}
function vi(a,b){bj(a,b,a.i);}
function xi(a){cf(a,'left','');cf(a,'top','');cf(a,'position','');}
function yi(b){var a;a=kj(this,b);if(a){xi(b.i);}return a;}
function ti(){}
_=ti.prototype=new Ei();_.gb=yi;_.tI=19;function Ai(a){aj(a);a.e=ie();a.d=fe();be(a.e,a.d);yn(a,a.e);return a;}
function Ci(c,b,a){Ee(b,'align',a.a);}
function Di(c,b,a){cf(b,'verticalAlign',a.a);}
function zi(){}
_=zi.prototype=new Ei();_.tI=20;_.d=null;_.e=null;function oj(a){aj(a);yn(a,ee());return a;}
function pj(a,b){bj(a,b,a.i);rj(a,b);}
function rj(b,c){var a;a=c.i;cf(a,'width','100%');cf(a,'height','100%');sm(c,false);}
function sj(a,b){cf(b.i,'width','');cf(b.i,'height','');sm(b,true);}
function tj(b,a){dj(b,a);if(b.a!==null){sm(b.a,false);}b.a=hj(b,a);sm(b.a,true);}
function uj(b){var a;a=kj(this,b);if(a){sj(this,b);if(this.a===b){this.a=null;}}return a;}
function nj(){}
_=nj.prototype=new Ei();_.gb=uj;_.tI=21;_.a=null;function Dk(a){yn(a,ee());tm(a,131197);qm(a,'gwt-Label');return a;}
function Fk(a){switch(ne(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function Ck(){}
_=Ck.prototype=new dn();_.B=Fk;_.tI=22;function wj(a){Dk(a);yn(a,ee());tm(a,125);qm(a,'gwt-HTML');return a;}
function xj(b,a){wj(b);zj(b,a);return b;}
function zj(b,a){af(b.i,a);}
function vj(){}
_=vj.prototype=new Ck();_.tI=23;function Fj(){Fj=xx;Dj(new Cj(),'center');ak=Dj(new Cj(),'left');Dj(new Cj(),'right');}
var ak;function Dj(b,a){b.a=a;return b;}
function Cj(){}
_=Cj.prototype=new xr();_.tI=0;_.a=null;function fk(){fk=xx;gk=dk(new ck(),'bottom');dk(new ck(),'middle');hk=dk(new ck(),'top');}
var gk,hk;function dk(a,b){a.a=b;return a;}
function ck(){}
_=ck.prototype=new xr();_.tI=0;_.a=null;function lk(a){a.a=(Fj(),ak);a.c=(fk(),hk);}
function mk(a){Ai(a);lk(a);a.b=he();be(a.d,a.b);Ee(a.e,'cellSpacing','0');Ee(a.e,'cellPadding','0');return a;}
function nk(b,c){var a;a=pk(b);be(b.b,a);bj(b,c,a);}
function pk(b){var a;a=ge();Ci(b,a,b.a);Di(b,a,b.c);return a;}
function qk(c,d,a){var b;ej(c,a);b=pk(c);ze(c.b,b,a);ij(c,d,b,a,false);}
function rk(c,d){var a,b;b=xe(d.i);a=kj(c,d);if(a){Be(c.b,b);}return a;}
function sk(b,a){b.c=a;}
function tk(a){return rk(this,a);}
function kk(){}
_=kk.prototype=new zi();_.gb=tk;_.tI=24;_.b=null;function vk(a){yn(a,ee());be(a.i,a.a=de());tm(a,1);qm(a,'gwt-Hyperlink');return a;}
function wk(c,b,a){vk(c);zk(c,b);yk(c,a);return c;}
function yk(b,a){b.b=a;Ee(b.a,'href','#'+a);}
function zk(b,a){bf(b.a,a);}
function Ak(a){if(ne(a)==1){zf(this.b);oe(a);}}
function uk(){}
_=uk.prototype=new dn();_.B=Ak;_.tI=25;_.a=null;_.b=null;function ol(){ol=xx;tl=vw(new Bv());}
function nl(b,a){ol();ui(b);if(a===null){a=pl();}yn(b,a);vn(b);return b;}
function ql(){ol();return rl(null);}
function rl(c){ol();var a,b;b=jd(Bw(tl,c),10);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=qe(c))){return null;}}if(tl.c==0){sl();}Cw(tl,c,b=nl(new il(),a));return b;}
function pl(){ol();return $doc.body;}
function sl(){ol();pg(new jl());}
function il(){}
_=il.prototype=new ti();_.tI=26;var tl;function ll(){var a,b;for(b=iu(wu((ol(),tl)));pu(b);){a=jd(qu(b),10);if(a.g){wn(a);}}}
function ml(){return null;}
function jl(){}
_=jl.prototype=new xr();_.bb=ll;_.cb=ml;_.tI=27;function Bl(a){Cl(a,ee());return a;}
function Cl(b,a){yn(b,a);return b;}
function Dl(a,b){if(a.a!==null){throw gr(new fr(),'SimplePanel can only contain one child widget');}am(a,b);}
function Fl(a,b){if(a.a!==b){return false;}dl(a,b);Be(a.i,b.i);a.a=null;return true;}
function am(a,b){if(b===a.a){return;}if(b!==null){xn(b);}if(a.a!==null){Fl(a,a.a);}a.a=b;if(b!==null){be(a.i,a.a.i);bl(a,b);}}
function bm(){return xl(new vl(),this);}
function cm(a){return Fl(this,a);}
function ul(){}
_=ul.prototype=new al();_.y=bm;_.gb=cm;_.tI=28;_.a=null;function wl(a){a.a=a.b.a!==null;}
function xl(b,a){b.b=a;wl(b);return b;}
function zl(){return this.a;}
function Al(){if(!this.a||this.b.a===null){throw new tx();}this.a=false;return this.b.a;}
function vl(){}
_=vl.prototype=new xr();_.x=zl;_.A=Al;_.tI=0;function Cm(a){a.a=(Fj(),ak);a.b=(fk(),hk);}
function Dm(a){Ai(a);Cm(a);Ee(a.e,'cellSpacing','0');Ee(a.e,'cellPadding','0');return a;}
function Em(b,d){var a,c;c=he();a=an(b);be(c,a);be(b.d,c);bj(b,d,a);}
function an(b){var a;a=ge();Ci(b,a,b.a);Di(b,a,b.b);return a;}
function bn(c,e,a){var b,d;ej(c,a);d=he();b=an(c);be(d,b);ze(c.d,d,a);ij(c,e,b,a,false);}
function cn(c){var a,b;b=xe(c.i);a=kj(this,c);if(a){Be(this.d,xe(b));}return a;}
function Bm(){}
_=Bm.prototype=new zi();_.gb=cn;_.tI=29;function ln(b,a){b.a=dd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function mn(a,b){qn(a,b,a.b);}
function on(b,a){if(a<0||a>=b.b){throw new ir();}return b.a[a];}
function pn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function qn(d,e,a){var b,c;if(a<0||a>d.b){throw new ir();}if(d.b==d.a.a){c=dd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ed(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ed(d.a,b,d.a[b-1]);}ed(d.a,a,e);}
function rn(a){return gn(new fn(),a);}
function sn(c,b){var a;if(b<0||b>=c.b){throw new ir();}--c.b;for(a=b;a<c.b;++a){ed(c.a,a,c.a[a+1]);}ed(c.a,c.b,null);}
function tn(b,c){var a;a=pn(b,c);if(a==(-1)){throw new tx();}sn(b,a);}
function en(){}
_=en.prototype=new xr();_.tI=0;_.a=null;_.b=0;function gn(b,a){b.b=a;return b;}
function jn(){return this.a<this.b.b-1;}
function kn(){if(this.a>=this.b.b){throw new tx();}return this.b.a[++this.a];}
function fn(){}
_=fn.prototype=new xr();_.x=jn;_.A=kn;_.tI=0;_.a=(-1);function fp(){fp=xx;xp=ns('abcdefghijklmnopqrstuvwxyz');}
function dp(a){fp();return a;}
function ep(a){qg(bo(new ao(),a));}
function gp(a){if(!a.a.b){yp();}}
function hp(c,a){var b;b=jb(a);return (ib(a)==200||ib(a)==203||ib(a)<100)&&b!==null&& !ds(b,'');}
function ip(e,d){var a,c,f;f=o()+'/appendix'+id(xp[d])+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,Ao(new zo(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){}else throw a;}}
function jp(e,d){var a,c,f;f=o()+'/exercise'+d+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,go(new fo(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){a;mp(e);}else throw a;}}
function kp(d){var a,c,e;e=o()+'/intro.html';c=sb(new ob(),(ub(),xb),e);try{vb(c,null,qo(new po(),d,e));}catch(a){a=rd(a);if(kd(a,14)){a;jp(d,0);}else throw a;}}
function lp(e,d){var a,c,f;if(e.a.b){jp(e,d+1);}else{f=o()+'/solution'+d+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,lo(new ko(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){a;jp(e,d+1);}else throw a;}}}
function mp(d){var a,c,e;e=o()+'/summary.html';c=sb(new ob(),(ub(),xb),e);try{vb(c,null,vo(new uo(),d,e));}catch(a){a=rd(a);if(kd(a,14)){a;vp(d);ip(d,0);}else throw a;}}
function np(e,d,f){var a,c;c=sb(new ob(),(ub(),xb),f);try{vb(c,null,Fo(new Eo(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){}else throw a;}}
function op(d,c){var a,b,e,f;b=is(c,',');for(a=0;a<b.a;a++){if(!ds(b[a],'')){e=tp(d,b[a]);f=up(d,b[a]);fq(d.a,b[a],e,null);if(f!==null&& !ds(f,'')){np(d,b[a],f);}}}}
function pp(b,a){if(ds(a,'Clear')){rp(b);}nq(b.a,a);}
function qp(d){var a,b,c;b=rl('j1holframe');a=false;if(b===null){b=rl('j1holprintcontents');if(b===null){b=ql();}else{a=true;}}d.a=aq(new Bp(),a);if(!a){rm(d.a.g,'j1holtabbar');im(d.a.g,'d7v0');vi(b,d.a.g);vi(b,jq(d.a));}if(a){kp(d);}else{tf(d);c=null;if(ds(wf(),'Clear')){rp(d);}else{c=sp(d);}if(c!==null&& !ds(c,'')){op(d,c);vp(d);}else{kp(d);}ep(d);}}
function rp(d){var a,b,c;c=yd('j1holtablist');if(c!==null&& !ds(c,'')){b=is(c,',');for(a=0;a<b.a;a++){if(!ds(b[a],'')){Cd('j1holtab.'+b[a]);}}Cd('j1holtablist');}}
function sp(b){var a;a=yd('j1holtablist');return a;}
function tp(d,c){var a,b;a=yd('j1holtab.'+c);b=es(a,124);if(b==(-1)){b=hs(a);}return ms(a,0,b);}
function up(d,c){var a,b;a=yd('j1holtab.'+c);b=es(a,124)+1;if(b==(-1)){b=0;}return ls(a,b);}
function vp(a){var b;b=wf();if(hs(b)>0){pp(a,b);}else{mq(a.a,0);}gp(a);}
function wp(f,c,a){var b,d,e,g;e=yd('j1holtablist');d=null;if(e===null||ds(e,'')){d=','+c+',';}else if(fs(e,','+c+',')<0){d=e+c+',';}b=iq(f.a,c);g=c;if(b>=0){g=kq(f.a,b);}if(d!==null){Ed('j1holtablist',d);Ed('j1holtab.'+c,g+'|'+a);}}
function yp(){fp();var f=$doc.getElementsByTagName('span');for(var c=0;c<f.length;c++){var e=f[c];if(e.className=='collapsed'||e.classname=='uncollapsed'){var b=$doc.createElement('div');var a=$doc.createElement('div');var d=e.parentNode;if(e.className=='collapsed'){e.className='xcollapsed';}else{e.className='xuncollapsed';}b.spanElement=e;b.className='collapseboxclosed';b.onclick=function(){if(this.spanElement.className=='xcollapsed'){this.spanElement.className='xuncollapsed';this.className='collapseboxopen';}else if(this.spanElement.className=='xuncollapsed'){this.spanElement.className='xcollapsed';this.className='collapseboxclosed';}};a.className='collapsewidget';b.appendChild(a);d.insertBefore(b,e);}}}
function zp(a){pp(this,a);}
function Ap(){fp();var a,b,c,d,e;a=qe('j1holtitleid');if(a!==null){e=ve(a);if(e!==null&& !ds(e,'')){Dg(e);}c=qe('j1holcovernumberid');d=qe('j1holcovertitleid');if(c!==null||d!==null){b=es(e,58);if(b>=0){bf(c,os(ms(e,0,b)));bf(d,os(ls(e,b+1)));}}}}
function Fn(){}
_=Fn.prototype=new xr();_.D=zp;_.tI=30;_.a=null;_.b=0;var xp;function bo(b,a){b.a=a;return b;}
function eo(b,a){if(b!=this.a.b){lq(this.a.a,false);this.a.b=b;sg(false);sg(true);}}
function ao(){}
_=ao.prototype=new xr();_.db=eo;_.tI=31;function go(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function io(a,b){mp(this.a);}
function jo(a,b){if(hp(this.a,b)){cq(this.a.a,'Exercise_'+this.b,jb(b));wp(this.a,'Exercise_'+this.b,this.c);lp(this.a,this.b);}else{mp(this.a);}}
function fo(){}
_=fo.prototype=new xr();_.C=io;_.F=jo;_.tI=0;function lo(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function no(a,b){jp(this.a,this.b+1);}
function oo(a,b){if(hp(this.a,b)){cq(this.a.a,'Solution_'+this.b,jb(b));wp(this.a,'Solution_'+this.b,this.c);}jp(this.a,this.b+1);}
function ko(){}
_=ko.prototype=new xr();_.C=no;_.F=oo;_.tI=0;function qo(b,a,c){b.a=a;b.b=c;return b;}
function so(a,b){jp(this.a,0);}
function to(a,b){if(hp(this.a,b)){cq(this.a.a,'Intro',jb(b));wp(this.a,'Intro',this.b);Ap();}jp(this.a,0);}
function po(){}
_=po.prototype=new xr();_.C=so;_.F=to;_.tI=0;function vo(b,a,c){b.a=a;b.b=c;return b;}
function xo(a,b){vp(this.a);ip(this.a,0);}
function yo(a,b){if(hp(this.a,b)){cq(this.a.a,'Summary',jb(b));wp(this.a,'Summary',this.b);}vp(this.a);ip(this.a,0);}
function uo(){}
_=uo.prototype=new xr();_.C=xo;_.F=yo;_.tI=0;function Ao(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function Co(a,b){}
function Do(a,b){if(hp(this.a,b)){cq(this.a.a,'Appendix_'+id(Aq((fp(),xp)[this.b])),jb(b));wp(this.a,'Appendix_'+id(Aq((fp(),xp)[this.b])),this.c);}ip(this.a,this.b+1);}
function zo(){}
_=zo.prototype=new xr();_.C=Co;_.F=Do;_.tI=0;function Fo(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function bp(a,b){}
function cp(a,b){if(hp(this.a,b)){oq(this.a.a,this.b,jb(b));gp(this.a);if(bs(this.c,'/intro.html')){Ap();}}}
function Eo(){}
_=Eo.prototype=new xr();_.C=bp;_.F=cp;_.tI=0;function Fp(a){a.g=Dm(new Bm());a.a=oj(new nj());a.e=ev(new cv());a.f=ev(new cv());}
function aq(c,a){var b;Fp(c);c.b=a;if(!a){b=mk(new kk());sk(b,(fk(),gk));gv(c.f,b);Em(c.g,b);}else{c.c=rl('j1holprintcontents');}return c;}
function cq(c,b,a){dq(c,b,a,c.e.b);}
function fq(d,b,e,a){var c;c=a;if(c===null){c='<p class="xxbig j1holwarn centertext">LOADING...<\/p>';}gq(d,b,e,c,d.e.b);}
function dq(e,d,a,c){var b,f;b=pq(a);f=sq(b);if(f===null){f=tq(d);}eq(e,d,f,b,c);}
function gq(d,c,e,a,b){eq(d,c,e,pq(a),b);}
function eq(f,c,g,a,b){var d,e;d=qq(a);if(f.b){vi(f.c,d);}else{e=rq(g,c);bq(f,e);pj(f.a,d);fv(f.e,b,Dp(new Cp(),c,g,e,d,a,f));if(f.e.b==1){hm(e,'selected');tj(f.a,0);}else{mm(e,'selected');}}}
function bq(b,a){nk(jd(jv(b.f,b.f.b-1),15),a);lq(b,true);}
function iq(d,c){var a,b;b=(-1);for(a=0;a<d.e.b;a++){if(ds(jd(jv(d.e,a),16).b,c)){b=a;break;}else if(ks(c,jd(jv(d.e,a),16).b+'=')){b=a;break;}}return b;}
function jq(a){if(a.b){return a.c;}else{return a.a;}}
function kq(b,a){return jd(jv(b.e,a),16).d;}
function lq(f,c){var a,b,d,e,g;for(b=f.f.b-1;b>=0;b--){a=jd(jv(f.f,b),15);if(km(a)>xg()){e=null;if(b>0){e=jd(jv(f.f,b-1),15);}else if(a.f.b>1){e=mk(new kk());fv(f.f,0,e);bn(f.g,e,0);b++;}while(a.f.b>1&&km(a)>xg()){g=hj(a,0);jj(a,0);nk(e,g);}}else if(!c){e=null;d=b-1;if(d>=0){e=jd(jv(f.f,d),15);}else{break;}while(km(a)<xg()){if(e.f.b>0){g=hj(e,e.f.b-1);rk(e,g);qk(a,g,0);}else if(d>0){d--;e=jd(jv(f.f,d),15);}else{break;}}if(km(a)>xg()){g=hj(a,0);jj(a,0);nk(e,g);}}else{break;}}while(!c){if(jd(jv(f.f,0),15).f.b==0){mv(f.f,0);jj(f.g,0);}else{break;}}}
function nq(d,b){var a,c;a=iq(d,b);if(a>=0){mq(d,a);c=es(b,61);if(c>=1){uf();zf(ls(b,c+1));}}}
function mq(d,b){var a,c;if(d.d!=b){a=jd(jv(d.e,d.d),16);mm(a.c,'selected');d.d=b;c=jd(jv(d.e,b),16);hm(c.c,'selected');tj(d.a,b);}}
function oq(e,d,a){var b,c;c=iq(e,d);if(c>=0){b=jd(jv(e.e,c),16);zj(b.a,a);}}
function pq(a){var b;b=xj(new vj(),a);qm(b,'j1holpanel');return b;}
function qq(a){var b,c,d,e;d=Bl(new ul());e=Bl(new ul());b=Bl(new ul());c=Bl(new ul());qm(d,'d7');qm(e,'d7v4');qm(b,'cornerBL');qm(c,'cornerBR');Dl(c,a);Dl(b,c);Dl(e,b);Dl(d,e);return d;}
function rq(b,d){var a,c;c=Bl(new ul());a=wk(new uk(),b,d);qm(c,'j1holtab');Dl(c,a);qm(a,'j1holtablink');return c;}
function sq(d){var a,b,c,e;e=null;a=d.i;b=ue(a);while(b!==null){c=pe(b,'name');if(c!==null&&cs(c,'j1holtabname')){e=pe(b,'content');break;}else{b=we(b);}}return e;}
function tq(c){var a,b;b=c;a=(-1);while((a=es(b,95))>=0){if(a==0){b=ls(b,1);}else{b=ms(b,0,a)+id(32)+ls(b,a+1);}}return b;}
function Bp(){}
_=Bp.prototype=new xr();_.tI=0;_.b=false;_.c=null;_.d=0;function Dp(f,b,g,d,c,a,e){f.b=b;f.d=g;f.c=d;f.a=a;return f;}
function Cp(){}
_=Cp.prototype=new xr();_.tI=32;_.a=null;_.b=null;_.c=null;_.d=null;function vq(){}
_=vq.prototype=new Br();_.tI=33;function Aq(a){return String.fromCharCode(a).toUpperCase().charCodeAt(0);}
function Bq(){}
_=Bq.prototype=new Br();_.tI=34;function dr(b,a){Cr(b,a);return b;}
function cr(){}
_=cr.prototype=new Br();_.tI=35;function gr(b,a){Cr(b,a);return b;}
function fr(){}
_=fr.prototype=new Br();_.tI=36;function jr(b,a){Cr(b,a);return b;}
function ir(){}
_=ir.prototype=new Br();_.tI=37;function ur(){ur=xx;{wr();}}
function wr(){ur();vr=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var vr=null;function mr(){mr=xx;ur();}
function nr(a){mr();return us(a);}
function or(){}
_=or.prototype=new Br();_.tI=38;function rr(b,a){Cr(b,a);return b;}
function qr(){}
_=qr.prototype=new Br();_.tI=39;function Fr(b,a){return b.charCodeAt(a);}
function bs(b,a){return b.lastIndexOf(a)!= -1&&b.lastIndexOf(a)==b.length-a.length;}
function ds(b,a){if(!kd(a,1))return false;return qs(b,a);}
function cs(b,a){if(a==null)return false;return b==a||b.toLowerCase()==a.toLowerCase();}
function es(b,a){return b.indexOf(String.fromCharCode(a));}
function fs(b,a){return b.indexOf(a);}
function gs(c,b,a){return c.indexOf(b,a);}
function hs(a){return a.length;}
function is(b,a){return js(b,a,0);}
function js(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=ps(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function ks(b,a){return fs(b,a)==0;}
function ls(b,a){return b.substr(a,b.length-a);}
function ms(c,a,b){return c.substr(a,b-a);}
function ns(d){var a,b,c;c=hs(d);a=dd('[C',[0],[(-1)],[c],0);for(b=0;b<c;++b)a[b]=Fr(d,b);return a;}
function os(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function ps(a){return dd('[Ljava.lang.String;',[0],[1],[a],null);}
function qs(a,b){return String(a)==b;}
function rs(a){return ds(this,a);}
function ts(){var a=ss;if(!a){a=ss={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function us(a){return ''+a;}
_=String.prototype;_.eQ=rs;_.hC=ts;_.tI=2;var ss=null;function xs(a){return t(a);}
function Ds(b,a){Cr(b,a);return b;}
function Cs(){}
_=Cs.prototype=new Br();_.tI=40;function at(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function ct(a){throw Ds(new Cs(),'add');}
function dt(b){var a;a=at(this,this.y(),b);return a!==null;}
function Fs(){}
_=Fs.prototype=new xr();_.k=ct;_.m=dt;_.tI=0;function ot(b,a){throw jr(new ir(),'Index: '+a+', Size: '+b.b);}
function pt(a){return gt(new ft(),a);}
function qt(b,a){throw Ds(new Cs(),'add');}
function rt(a){this.j(this.jb(),a);return true;}
function st(e){var a,b,c,d,f;if(e===this){return true;}if(!kd(e,17)){return false;}f=jd(e,17);if(this.jb()!=f.jb()){return false;}c=pt(this);d=f.y();while(it(c)){a=jt(c);b=jt(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function tt(){var a,b,c,d;c=1;a=31;b=pt(this);while(it(b)){d=jt(b);c=31*c+(d===null?0:d.hC());}return c;}
function ut(){return pt(this);}
function vt(a){throw Ds(new Cs(),'remove');}
function et(){}
_=et.prototype=new Fs();_.j=qt;_.k=rt;_.eQ=st;_.hC=tt;_.y=ut;_.fb=vt;_.tI=41;function gt(b,a){b.c=a;return b;}
function it(a){return a.a<a.c.jb();}
function jt(a){if(!it(a)){throw new tx();}return a.c.v(a.b=a.a++);}
function kt(a){if(a.b<0){throw new fr();}a.c.fb(a.b);a.a=a.b;a.b=(-1);}
function lt(){return it(this);}
function mt(){return jt(this);}
function ft(){}
_=ft.prototype=new xr();_.x=lt;_.A=mt;_.tI=0;_.a=0;_.b=(-1);function uu(f,d,e){var a,b,c;for(b=qw(f.p());jw(b);){a=kw(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){lw(b);}return a;}}return null;}
function vu(b){var a;a=b.p();return yt(new xt(),b,a);}
function wu(b){var a;a=Aw(b);return gu(new fu(),b,a);}
function xu(a){return uu(this,a,false)!==null;}
function yu(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!kd(d,18)){return false;}f=jd(d,18);c=vu(this);e=f.z();if(!Fu(c,e)){return false;}for(a=At(c);bu(a);){b=cu(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function zu(b){var a;a=uu(this,b,false);return a===null?null:a.u();}
function Au(){var a,b,c;b=0;for(c=qw(this.p());jw(c);){a=kw(c);b+=a.hC();}return b;}
function Bu(){return vu(this);}
function Cu(a,b){throw Ds(new Cs(),'This map implementation does not support modification');}
function wt(){}
_=wt.prototype=new xr();_.l=xu;_.eQ=yu;_.w=zu;_.hC=Au;_.z=Bu;_.eb=Cu;_.tI=42;function Fu(e,b){var a,c,d;if(b===e){return true;}if(!kd(b,19)){return false;}c=jd(b,19);if(c.jb()!=e.jb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.m(d)){return false;}}return true;}
function av(a){return Fu(this,a);}
function bv(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function Du(){}
_=Du.prototype=new Fs();_.eQ=av;_.hC=bv;_.tI=43;function yt(b,a,c){b.a=a;b.b=c;return b;}
function At(b){var a;a=qw(b.b);return Ft(new Et(),b,a);}
function Bt(a){return this.a.l(a);}
function Ct(){return At(this);}
function Dt(){return this.b.a.c;}
function xt(){}
_=xt.prototype=new Du();_.m=Bt;_.y=Ct;_.jb=Dt;_.tI=44;function Ft(b,a,c){b.a=c;return b;}
function bu(a){return a.a.x();}
function cu(b){var a;a=b.a.A();return a.t();}
function du(){return bu(this);}
function eu(){return cu(this);}
function Et(){}
_=Et.prototype=new xr();_.x=du;_.A=eu;_.tI=0;function gu(b,a,c){b.a=a;b.b=c;return b;}
function iu(b){var a;a=qw(b.b);return nu(new mu(),b,a);}
function ju(a){return zw(this.a,a);}
function ku(){return iu(this);}
function lu(){return this.b.a.c;}
function fu(){}
_=fu.prototype=new Fs();_.m=ju;_.y=ku;_.jb=lu;_.tI=0;function nu(b,a,c){b.a=c;return b;}
function pu(a){return a.a.x();}
function qu(a){var b;b=a.a.A().u();return b;}
function ru(){return pu(this);}
function su(){return qu(this);}
function mu(){}
_=mu.prototype=new xr();_.x=ru;_.A=su;_.tI=0;function dv(a){{hv(a);}}
function ev(a){dv(a);return a;}
function fv(c,a,b){if(a<0||a>c.b){ot(c,a);}ov(c.a,a,b);++c.b;}
function gv(b,a){xv(b.a,b.b++,a);return true;}
function hv(a){a.a=E();a.b=0;}
function jv(b,a){if(a<0||a>=b.b){ot(b,a);}return tv(b.a,a);}
function kv(b,a){return lv(b,a,0);}
function lv(c,b,a){if(a<0){ot(c,a);}for(;a<c.b;++a){if(sv(b,tv(c.a,a))){return a;}}return (-1);}
function mv(c,a){var b;b=jv(c,a);vv(c.a,a,1);--c.b;return b;}
function nv(c,b){var a;a=kv(c,b);if(a==(-1)){return false;}mv(c,a);return true;}
function pv(a,b){fv(this,a,b);}
function qv(a){return gv(this,a);}
function ov(a,b,c){a.splice(b,0,c);}
function rv(a){return kv(this,a)!=(-1);}
function sv(a,b){return a===b||a!==null&&a.eQ(b);}
function uv(a){return jv(this,a);}
function tv(a,b){return a[b];}
function wv(a){return mv(this,a);}
function vv(a,c,b){a.splice(c,b);}
function xv(a,b,c){a[b]=c;}
function yv(){return this.b;}
function cv(){}
_=cv.prototype=new et();_.j=pv;_.k=qv;_.m=rv;_.v=uv;_.fb=wv;_.jb=yv;_.tI=45;_.a=null;_.b=0;function xw(){xw=xx;Ew=ex();}
function uw(a){{ww(a);}}
function vw(a){xw();uw(a);return a;}
function ww(a){a.a=E();a.d=ab();a.b=od(Ew,A);a.c=0;}
function yw(b,a){if(kd(a,1)){return ix(b.d,jd(a,1))!==Ew;}else if(a===null){return b.b!==Ew;}else{return hx(b.a,a,a.hC())!==Ew;}}
function zw(a,b){if(a.b!==Ew&&gx(a.b,b)){return true;}else if(dx(a.d,b)){return true;}else if(bx(a.a,b)){return true;}return false;}
function Aw(a){return ow(new fw(),a);}
function Bw(c,a){var b;if(kd(a,1)){b=ix(c.d,jd(a,1));}else if(a===null){b=c.b;}else{b=hx(c.a,a,a.hC());}return b===Ew?null:b;}
function Cw(c,a,d){var b;if(kd(a,1)){b=lx(c.d,jd(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=kx(c.a,a,d,a.hC());}if(b===Ew){++c.c;return null;}else{return b;}}
function Dw(c,a){var b;if(kd(a,1)){b=ox(c.d,jd(a,1));}else if(a===null){b=c.b;c.b=od(Ew,A);}else{b=nx(c.a,a,a.hC());}if(b===Ew){return null;}else{--c.c;return b;}}
function Fw(e,c){xw();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f]);}}}}
function ax(d,a){xw();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=Fv(c.substring(1),e);a.k(b);}}}
function bx(f,h){xw();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(gx(h,d)){return true;}}}}return false;}
function cx(a){return yw(this,a);}
function dx(c,d){xw();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(gx(d,a)){return true;}}}return false;}
function ex(){xw();}
function fx(){return Aw(this);}
function gx(a,b){xw();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function jx(a){return Bw(this,a);}
function hx(f,h,e){xw();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(gx(h,d)){return c.u();}}}}
function ix(b,a){xw();return b[':'+a];}
function mx(a,b){return Cw(this,a,b);}
function kx(f,h,j,e){xw();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(gx(h,d)){var i=c.u();c.ib(j);return i;}}}else{a=f[e]=[];}var c=Fv(h,j);a.push(c);}
function lx(c,a,d){xw();a=':'+a;var b=c[a];c[a]=d;return b;}
function nx(f,h,e){xw();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(gx(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function ox(c,a){xw();a=':'+a;var b=c[a];delete c[a];return b;}
function Bv(){}
_=Bv.prototype=new wt();_.l=cx;_.p=fx;_.w=jx;_.eb=mx;_.tI=46;_.a=null;_.b=null;_.c=0;_.d=null;var Ew;function Dv(b,a,c){b.a=a;b.b=c;return b;}
function Fv(a,b){return Dv(new Cv(),a,b);}
function aw(b){var a;if(kd(b,20)){a=jd(b,20);if(gx(this.a,a.t())&&gx(this.b,a.u())){return true;}}return false;}
function bw(){return this.a;}
function cw(){return this.b;}
function dw(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function ew(a){var b;b=this.b;this.b=a;return b;}
function Cv(){}
_=Cv.prototype=new xr();_.eQ=aw;_.t=bw;_.u=cw;_.hC=dw;_.ib=ew;_.tI=47;_.a=null;_.b=null;function ow(b,a){b.a=a;return b;}
function qw(a){return hw(new gw(),a.a);}
function rw(c){var a,b,d;if(kd(c,20)){a=jd(c,20);b=a.t();if(yw(this.a,b)){d=Bw(this.a,b);return gx(a.u(),d);}}return false;}
function sw(){return qw(this);}
function tw(){return this.a.c;}
function fw(){}
_=fw.prototype=new Du();_.m=rw;_.y=sw;_.jb=tw;_.tI=48;function hw(c,b){var a;c.c=b;a=ev(new cv());if(c.c.b!==(xw(),Ew)){gv(a,Dv(new Cv(),null,c.c.b));}ax(c.c.d,a);Fw(c.c.a,a);c.a=pt(a);return c;}
function jw(a){return it(a.a);}
function kw(a){return a.b=jd(jt(a.a),20);}
function lw(a){if(a.b===null){throw gr(new fr(),'Must call next() before remove().');}else{kt(a.a);Dw(a.c,a.b.t());a.b=null;}}
function mw(){return jw(this);}
function nw(){return kw(this);}
function gw(){}
_=gw.prototype=new xr();_.x=mw;_.A=nw;_.tI=0;_.a=null;_.b=null;function tx(){}
_=tx.prototype=new Br();_.tI=49;function uq(){qp(dp(new Fn()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{uq();}catch(a){b(d);}else{uq();}}
var nd=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{6:1},{6:1},{3:1,14:1},{3:1,14:1},{3:1,14:1},{2:1,4:1},{2:1},{7:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1,15:1},{9:1,11:1,12:1,13:1},{9:1,10:1,11:1,12:1,13:1},{7:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{5:1},{8:1},{16:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{17:1},{18:1},{19:1},{19:1},{17:1},{18:1},{20:1},{19:1},{3:1}];if (com_sun_javaone_HoLTemplate) {  var __gwt_initHandlers = com_sun_javaone_HoLTemplate.__gwt_initHandlers;  com_sun_javaone_HoLTemplate.onScriptLoad(gwtOnLoad);}})();