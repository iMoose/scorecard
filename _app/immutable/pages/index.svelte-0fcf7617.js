import{S as ne,i as ae,s as ce,l as v,a as N,r as V,m as _,n as E,c as P,u as j,h as f,p as u,b as B,N as a,O as R,P as S,Q as ie,E as W,G as de,F as M,w as X,x as Y,q as H,y as Z,f as ee,t as te,B as re,R as fe,v as he}from"../chunks/index-a6d5c230.js";import{d as pe,w as z}from"../chunks/index-200eaca0.js";function me(n){let e,s,c,l,r,h,d,g,p,b,y,x,w,$;return{c(){e=v("div"),s=v("input"),l=N(),r=v("input"),h=N(),d=v("div"),g=v("button"),p=V("+"),b=N(),y=v("button"),x=V("-"),this.h()},l(i){e=_(i,"DIV",{class:!0});var t=E(e);s=_(t,"INPUT",{type:!0,class:!0,placeholder:!0}),l=P(t),r=_(t,"INPUT",{class:!0,type:!0,min:!0,step:!0}),h=P(t),d=_(t,"DIV",{class:!0});var I=E(d);g=_(I,"BUTTON",{class:!0});var k=E(g);p=j(k,"+"),k.forEach(f),b=P(I),y=_(I,"BUTTON",{class:!0});var T=E(y);x=j(T,"-"),T.forEach(f),I.forEach(f),t.forEach(f),this.h()},h(){u(s,"type","text"),u(s,"class","rounded text-center bg-inherit border-none outline-none text-4xl placeholder:italic"),u(s,"placeholder",c="Player "+n[2]),u(r,"class","text-center p-4 outline-none border-none bg-inherit appearance-none text-9xl w-full"),u(r,"type","number"),u(r,"min","0"),u(r,"step","1"),u(g,"class","btn-square text-green-800 bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2"),u(y,"class","btn-square text-red-800 bg-gray-700 rounded-lg shadow-md mx-4 active:border-gray-800 active:border-2"),u(d,"class","flex flex-row w-full place-content-evenly justify-center"),u(e,"class","flex flex-col place-items-center justify-start items-center ")},m(i,t){B(i,e,t),a(e,s),R(s,n[5]),a(e,l),a(e,r),R(r,n[6]),a(e,h),a(e,d),a(d,g),a(g,p),a(d,b),a(d,y),a(y,x),w||($=[S(s,"input",n[7]),S(r,"input",n[8]),S(g,"click",n[3]),S(y,"click",n[4])],w=!0)},p(i,[t]){t&4&&c!==(c="Player "+i[2])&&u(s,"placeholder",c),t&32&&s.value!==i[5]&&R(s,i[5]),t&64&&ie(r.value)!==i[6]&&R(r,i[6])},i:W,o:W,d(i){i&&f(e),w=!1,de($)}}}function be(n,e,s){let c,l=W,r=()=>(l(),l=M(p,t=>s(5,c=t)),p),h,d=W,g=()=>(d(),d=M(b,t=>s(6,h=t)),b);n.$$.on_destroy.push(()=>l()),n.$$.on_destroy.push(()=>d());let{name:p}=e;r();let{score:b}=e;g();let{placeholder:y}=e;function x(){b.update(t=>t>=0?t+1:t)}function w(){b.update(t=>t>0?t-1:t)}function $(){c=this.value,p.set(c)}function i(){h=ie(this.value),b.set(h)}return n.$$set=t=>{"name"in t&&r(s(0,p=t.name)),"score"in t&&g(s(1,b=t.score)),"placeholder"in t&&s(2,y=t.placeholder)},[p,b,y,x,w,c,h,$,i]}class se extends ne{constructor(e){super(),ae(this,e,be,me,ce,{name:0,score:1,placeholder:2,inc:3,dec:4})}get inc(){return this.$$.ctx[3]}get dec(){return this.$$.ctx[4]}}const oe=z(""),ue=z(""),C=z(0),F=z(0),ve=pe([C,F,oe,ue],([n,e,s,c])=>n>=21&&n-e>1?s.length>0?s:"Player A":e>=21&&e-n>1?c.length>0?c:"Player B":null);function le(n){let e,s,c;return{c(){e=v("h1"),s=V(n[1]),c=V(" WINS!!!"),this.h()},l(l){e=_(l,"H1",{class:!0});var r=E(e);s=j(r,n[1]),c=j(r," WINS!!!"),r.forEach(f),this.h()},h(){u(e,"class","card-title text-center p-6 object-center block text-6xl w-auto")},m(l,r){B(l,e,r),a(e,s),a(e,c)},p(l,r){r&2&&he(s,l[1])},d(l){l&&f(e)}}}function _e(n){let e,s,c,l,r,h,d,g,p,b,y,x,w,$,i,t,I,k,T,A,G;d=new se({props:{name:oe,score:C,placeholder:"A"}}),w=new se({props:{name:ue,score:F,placeholder:"B"}});let m=n[1]!=null&&le(n);return{c(){e=v("h1"),s=V("Scorecard"),c=N(),l=v("div"),r=v("div"),h=v("div"),X(d.$$.fragment),g=N(),p=v("div"),b=V("OR"),y=N(),x=v("div"),X(w.$$.fragment),$=N(),i=v("div"),m&&m.c(),t=N(),I=v("button"),k=V("reset"),this.h()},l(o){e=_(o,"H1",{class:!0});var D=E(e);s=j(D,"Scorecard"),D.forEach(f),c=P(o),l=_(o,"DIV",{class:!0,style:!0});var U=E(l);r=_(U,"DIV",{class:!0});var O=E(r);h=_(O,"DIV",{class:!0,style:!0});var Q=E(h);Y(d.$$.fragment,Q),Q.forEach(f),g=P(O),p=_(O,"DIV",{class:!0});var J=E(p);b=j(J,"OR"),J.forEach(f),y=P(O),x=_(O,"DIV",{class:!0,style:!0});var K=E(x);Y(w.$$.fragment,K),K.forEach(f),O.forEach(f),$=P(U),i=_(U,"DIV",{class:!0});var q=E(i);m&&m.l(q),t=P(q),I=_(q,"BUTTON",{class:!0});var L=E(I);k=j(L,"reset"),L.forEach(f),q.forEach(f),U.forEach(f),this.h()},h(){u(e,"class","card-title text-center w-screen object-center block text-6xl p-4 mt-4"),u(h,"class","grid flex-grow h-full card bg-base-300 rounded-box place-items-center"),H(h,"max-width","45vw"),u(p,"class","divider lg:divider-horizontal"),u(x,"class","grid flex-grow h-full card bg-base-300 rounded-box place-items-center"),H(x,"max-width","45vw"),u(r,"class","flex flex-col w-full lg:flex-row h-4/6 justify-center items-center"),u(I,"class","btn btn-error uppercase"),u(i,"class","h-fit justify-center flex flex-col items-center"),u(l,"class","flex flex-col place-items-center pb-8"),H(l,"height","90vh"),H(l,"justify-content","space-around")},m(o,D){B(o,e,D),a(e,s),B(o,c,D),B(o,l,D),a(l,r),a(r,h),Z(d,h,null),a(r,g),a(r,p),a(p,b),a(r,y),a(r,x),Z(w,x,null),a(l,$),a(l,i),m&&m.m(i,null),a(i,t),a(i,I),a(I,k),T=!0,A||(G=S(I,"click",n[0]),A=!0)},p(o,[D]){o[1]!=null?m?m.p(o,D):(m=le(o),m.c(),m.m(i,t)):m&&(m.d(1),m=null)},i(o){T||(ee(d.$$.fragment,o),ee(w.$$.fragment,o),T=!0)},o(o){te(d.$$.fragment,o),te(w.$$.fragment,o),T=!1},d(o){o&&f(e),o&&f(c),o&&f(l),re(d),re(w),m&&m.d(),A=!1,G()}}}function ge(n,e,s){let c;fe(n,ve,r=>s(1,c=r));function l(){C.set(0),F.set(0)}return[l,c]}class we extends ne{constructor(e){super(),ae(this,e,ge,_e,ce,{reset:0})}get reset(){return this.$$.ctx[0]}}export{we as default};