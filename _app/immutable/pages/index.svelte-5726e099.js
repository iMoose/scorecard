import{S as ie,i as ce,s as oe,l as y,a as D,O as H,m as E,n as b,c as N,P as M,h as d,p as r,b as S,N as n,Q as W,R as O,T as ue,E as C,G as fe,F as Y,r as U,w as Z,u as q,x as ee,q as A,y as te,f as re,t as se,B as le,U as ve,v as pe}from"../chunks/index-34414953.js";import{d as me,w as F}from"../chunks/index-8285cf3a.js";function _e(a){let e,s,c,l,t,g,h,I,u,m,j,_,f,$,x,i;return{c(){e=y("div"),s=y("input"),l=D(),t=y("input"),g=D(),h=y("div"),I=y("button"),u=H("svg"),m=H("path"),j=D(),_=y("button"),f=H("svg"),$=H("path"),this.h()},l(v){e=E(v,"DIV",{class:!0});var w=b(e);s=E(w,"INPUT",{type:!0,class:!0,placeholder:!0}),l=N(w),t=E(w,"INPUT",{class:!0,type:!0,min:!0,step:!0}),g=N(w),h=E(w,"DIV",{class:!0});var B=b(h);I=E(B,"BUTTON",{class:!0});var P=b(I);u=M(P,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var k=b(u);m=M(k,"path",{fill:!0,d:!0}),b(m).forEach(d),k.forEach(d),P.forEach(d),j=N(B),_=E(B,"BUTTON",{class:!0});var p=b(_);f=M(p,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var o=b(f);$=M(o,"path",{fill:!0,d:!0}),b($).forEach(d),o.forEach(d),p.forEach(d),B.forEach(d),w.forEach(d),this.h()},h(){r(s,"type","text"),r(s,"class","rounded text-center bg-inherit border-none outline-none text-4xl placeholder:italic p-4"),r(s,"placeholder",c="Player "+a[2]),r(t,"class","text-center p-4 outline-none border-none bg-inherit appearance-none text-9xl w-full"),r(t,"type","number"),r(t,"min","0"),r(t,"step","1"),r(m,"fill","#4ade80"),r(m,"d","M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"),r(u,"xmlns","http://www.w3.org/2000/svg"),r(u,"width","24"),r(u,"height","24"),r(u,"viewBox","0 0 24 24"),r(I,"class","btn-square btn-lg bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2 flex items-center justify-center"),r($,"fill","#f87171"),r($,"d","M0 10h24v4h-24z"),r(f,"xmlns","http://www.w3.org/2000/svg"),r(f,"width","24"),r(f,"height","24"),r(f,"viewBox","0 0 24 24"),r(_,"class","btn-square btn-lg bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2 flex items-center justify-center"),r(h,"class","flex flex-row w-full place-content-evenly justify-center align-middle text-5xl p-4"),r(e,"class","flex flex-col place-items-center justify-start items-center")},m(v,w){S(v,e,w),n(e,s),W(s,a[5]),n(e,l),n(e,t),W(t,a[6]),n(e,g),n(e,h),n(h,I),n(I,u),n(u,m),n(h,j),n(h,_),n(_,f),n(f,$),x||(i=[O(s,"input",a[7]),O(t,"input",a[8]),O(I,"click",a[3]),O(_,"click",a[4])],x=!0)},p(v,[w]){w&4&&c!==(c="Player "+v[2])&&r(s,"placeholder",c),w&32&&s.value!==v[5]&&W(s,v[5]),w&64&&ue(t.value)!==v[6]&&W(t,v[6])},i:C,o:C,d(v){v&&d(e),x=!1,fe(i)}}}function be(a,e,s){let c,l=C,t=()=>(l(),l=Y(u,i=>s(5,c=i)),u),g,h=C,I=()=>(h(),h=Y(m,i=>s(6,g=i)),m);a.$$.on_destroy.push(()=>l()),a.$$.on_destroy.push(()=>h());let{name:u}=e;t();let{score:m}=e;I();let{placeholder:j}=e;function _(){m.update(i=>i>=0?i+1:i)}function f(){m.update(i=>i>0?i-1:i)}function $(){c=this.value,u.set(c)}function x(){g=ue(this.value),m.set(g)}return a.$$set=i=>{"name"in i&&t(s(0,u=i.name)),"score"in i&&I(s(1,m=i.score)),"placeholder"in i&&s(2,j=i.placeholder)},[u,m,j,_,f,c,g,$,x]}class ne extends ie{constructor(e){super(),ce(this,e,be,_e,oe,{name:0,score:1,placeholder:2,inc:3,dec:4})}get inc(){return this.$$.ctx[3]}get dec(){return this.$$.ctx[4]}}const de=F(""),he=F(""),G=F(0),Q=F(0),ge=me([G,Q,de,he],([a,e,s,c])=>a>=21&&a-e>1?s.length>0?s:"Player A":e>=21&&e-a>1?c.length>0?c:"Player B":null);function ae(a){let e,s,c;return{c(){e=y("h1"),s=U(a[1]),c=U(" WINS!!!"),this.h()},l(l){e=E(l,"H1",{class:!0});var t=b(e);s=q(t,a[1]),c=q(t," WINS!!!"),t.forEach(d),this.h()},h(){r(e,"class","card-title text-center p-6 object-center block text-6xl w-auto")},m(l,t){S(l,e,t),n(e,s),n(e,c)},p(l,t){t&2&&pe(s,l[1])},d(l){l&&d(e)}}}function we(a){let e,s,c,l,t,g,h,I,u,m,j,_,f,$,x,i,v,w,B,P,k;h=new ne({props:{name:de,score:G,placeholder:"A"}}),f=new ne({props:{name:he,score:Q,placeholder:"B"}});let p=a[1]!=null&&ae(a);return{c(){e=y("h1"),s=U("Scorecard"),c=D(),l=y("div"),t=y("div"),g=y("div"),Z(h.$$.fragment),I=D(),u=y("div"),m=U("OR"),j=D(),_=y("div"),Z(f.$$.fragment),$=D(),x=y("div"),p&&p.c(),i=D(),v=y("button"),w=U("reset"),this.h()},l(o){e=E(o,"H1",{class:!0});var T=b(e);s=q(T,"Scorecard"),T.forEach(d),c=N(o),l=E(o,"DIV",{class:!0,style:!0});var R=b(l);t=E(R,"DIV",{class:!0});var V=b(t);g=E(V,"DIV",{class:!0,style:!0});var J=b(g);ee(h.$$.fragment,J),J.forEach(d),I=N(V),u=E(V,"DIV",{class:!0});var K=b(u);m=q(K,"OR"),K.forEach(d),j=N(V),_=E(V,"DIV",{class:!0,style:!0});var L=b(_);ee(f.$$.fragment,L),L.forEach(d),V.forEach(d),$=N(R),x=E(R,"DIV",{class:!0});var z=b(x);p&&p.l(z),i=N(z),v=E(z,"BUTTON",{class:!0});var X=b(v);w=q(X,"reset"),X.forEach(d),z.forEach(d),R.forEach(d),this.h()},h(){r(e,"class","card-title text-center w-screen object-center block text-6xl mt-4"),r(g,"class","grid flex-grow h-full card bg-base-300 rounded-box place-items-center"),A(g,"max-width","45vw"),r(u,"class","divider lg:divider-horizontal"),r(_,"class","grid flex-grow h-full card bg-base-300 rounded-box place-items-center"),A(_,"max-width","45vw"),r(t,"class","flex flex-col w-full lg:flex-row h-4/6 justify-center items-center"),r(v,"class","btn btn-error uppercase"),r(x,"class","h-fit justify-center flex flex-col items-center"),r(l,"class","flex flex-col place-items-center pb-8"),A(l,"height","90vh"),A(l,"justify-content","space-around")},m(o,T){S(o,e,T),n(e,s),S(o,c,T),S(o,l,T),n(l,t),n(t,g),te(h,g,null),n(t,I),n(t,u),n(u,m),n(t,j),n(t,_),te(f,_,null),n(l,$),n(l,x),p&&p.m(x,null),n(x,i),n(x,v),n(v,w),B=!0,P||(k=O(v,"click",a[0]),P=!0)},p(o,[T]){o[1]!=null?p?p.p(o,T):(p=ae(o),p.c(),p.m(x,i)):p&&(p.d(1),p=null)},i(o){B||(re(h.$$.fragment,o),re(f.$$.fragment,o),B=!0)},o(o){se(h.$$.fragment,o),se(f.$$.fragment,o),B=!1},d(o){o&&d(e),o&&d(c),o&&d(l),le(h),le(f),p&&p.d(),P=!1,k()}}}function xe(a,e,s){let c;ve(a,ge,t=>s(1,c=t));function l(){G.set(0),Q.set(0)}return[l,c]}class Ie extends ie{constructor(e){super(),ce(this,e,xe,we,oe,{reset:0})}get reset(){return this.$$.ctx[0]}}export{Ie as default};
