(()=>{"use strict";var e,t={526:(e,t,r)=>{var a=r(294),n=r(935),i=r(372);const o=()=>(0,i.I0)(),l=i.v9,d=e=>({type:"SET_USERS",payload:{users:e}}),s=(e,t)=>({type:"ROOM_GRANTED",payload:{room:{id:e,users:t}}});var c=r(704),m=r(163);const p=m.default.div`
    min-height: 100%;
    width: 100%;
    margin: 0 auto;
    max-width: 1680px;
    height: 100%;
    border-top-width: 0;
    border-right-width: 1px;
    border-bottom-width: 0;
    border-left-width: 1px;
    border-style: solid;
    border-color: ${e=>e.theme.palette.divider};
    display: flex;
`,u=m.createGlobalStyle`
html,
body {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    color: ${e=>e.theme.palette.text.primary};
    background-color: ${e=>e.theme.palette.background.default};
    font-family: ${e=>e.theme.fonts.main};
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
    font-family: ${e=>e.theme.fonts.main};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
}
`,h=(m.default.div`
    width: 100%;
    border-top: 2px solid ${e=>e.theme.palette.divider};
`,m.default.div`
    font-family: ${e=>e.theme.fonts.main};
`,m.default.div`
    display: flex;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    flex: 1 0;
`),f=m.default.div`
    display: flex;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 12rem;
    max-width: calc(1680px / 6);
    @media ${e=>e.theme.breakpoints.md} {
        display: none;
    }
`,g=m.default.div`
    display: flex;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    flex: 3;
    &:before {
        box-sizing: inherit;
    }
`,x=m.default.div`
    min-width: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    background-color: ${e=>e.theme.palette.primary.dark};
    height: 100vh;
`,b=m.default.div`
    flex-direction: column;
    grid-row-start: 1;
    grid-column-start: 1;
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    display: flex;
`,y=m.default.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background-color: ${e=>e.theme.palette.background.paper};
    box-sizing: inherit;
`,v=m.default.div`
    background-image: ${e=>"light"===e.theme.type?"url(images/bg.jpeg)":"none"};
    opacity: 1;
    background-size: cover;
    background-position: center center;
    background-color: inherit;
    height: 100%;
`,E=m.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    min-height: 3.5rem;
    flex: 0 0 auto;
    user-select: none;
    z-index: 1;
    width: 100%;
    background-color: ${e=>e.theme.palette.primary.light};
`,w=m.default.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    margin-left: auto;
`,k=m.default.div`
    padding-right: 25px;
`,S=m.default.div`
    width: 100%;
    flex: 1 1 auto;
    position: relative;
    box-sizing: inherit;
`,T=m.default.div`
    overflow-y: auto;
    scrollbar-width: thin;
    height: auto;
    display: block;
    width: 100%;
    max-height: 100%;
    overflow-x: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
`,O=m.default.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100%;
    justify-content: flex-end;
    padding: 0 .8125rem;
    max-width: 728px;
`;function z(){const[e,t]=a.useState(""),r=o(),n=()=>{var a;""!==e.trim()?(r((a=e,(e,t)=>{t().app.MyWS?.send(JSON.stringify({type:"CHAT",payload:{type:"MESSAGE_SENT",payload:{text:a}}}))})),t("")):t("")};return a.createElement($,null,a.createElement(_,null,a.createElement(R,null,a.createElement(C,null,a.createElement(D,null,a.createElement(A,{value:e,onChange:e=>t(e.target.value),onKeyDown:e=>{!1===e.shiftKey&&"Enter"===e.key&&(e.preventDefault(),n())}}))))))}const $=m.default.div`
    width: 100%;
    padding-bottom: 0.5rem;
    display: flex;
    max-width: 100%;
    padding-top: .25rem;
    flex-direction: column;
    flex: 0 0 auto;
    position: relative;
`,_=m.default.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 728px;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    flex: 0 0 auto;
    position: relative;
    padding-bottom: 10px;
`,R=m.default.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    background-color: #fff;
    border-radius: 12px;
    border-bottom-right-radius: 0;
    box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, .18);
    max-height: 30rem;
    flex: 0 0 auto;
    position: relative;
    z-index: 3;
`,C=m.default.div`
    align-items: flex-end;
    min-height: 1rem;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    background-color: inherit;
    border-radius: .75rem;
`,D=m.default.div`
    width: 1%;
    max-height: inherit;
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
    align-self: center;
    min-height: 2rem;
    display: flex;
    align-items: center;
`,A=m.default.textarea`
    width: 100%;
    resize: none;
    border-radius: 8px;
    background-color: ${e=>e.theme.palette.primary.light};
    color: ${e=>e.theme.palette.text.primary};
    scrollbar-width: thin;
`;function j(e){return a.createElement(M,null,a.createElement(N,{checked:e.checked,type:"checkbox",onClick:e.onClick}),a.createElement(I,{className:"switch"}))}const M=m.default.label`
    cursor: pointer;
    background: #e3e3e3;
    padding: 5px;
    width: 60px;
    height: 35px; // height = width / 2 + padding
    border-radius: 17.5px; // border-radius = height / 2
`,N=m.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked {
    + .switch {
        grid-template-columns: 1fr 1fr 0fr; 
        &::after {
            background-color: rgb(135, 116, 225);
        }
    }
}
`,I=m.default.div`
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    transition: .2s;
    &::after {
        content: '';
        border-radius: 50%;
        background: #157ce1;
        grid-column: 2;
        transition: background .2s;
    }
`;function G(e){return a.createElement(L,null,a.createElement(H,null,a.createElement(F,null,a.createElement(K,null,e.message.sender.name),a.createElement(U,null,e.message.shortDate)),a.createElement(J,null,e.message.text)))}const L=m.default.div`
    width: 90%;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
`,H=m.default.div`
    margin-bottom: 20px;
    display: inline-block;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${e=>e.theme.palette.primary.main};
    color: ${e=>e.theme.palette.text.primary};
    padding: 10px 15px 15px;
    max-width: 25rem;
    word-wrap: break-word;
    white-space: break-spaces;
    width: auto;
    border-radius: 8px;
    min-width: 5rem;
`,F=m.default.div`
    display: inline-flex;
`,K=m.default.div`
    margin-right: 10px;
`,U=m.default.div`
    margin-left: 10px;
`,J=m.default.div`
    
`;function P(){const e=l((e=>e.app.messages)),t=a.createRef();return a.useEffect((()=>{t.current&&t.current.scrollTo(0,99999)}),[e]),a.createElement(S,null,a.createElement(T,{ref:t},a.createElement(O,null,e.map(((e,t)=>a.createElement(G,{key:t,message:e}))))))}function W(){const e=l((e=>e.app.users)),t=l((e=>e.app.roomId));return a.createElement(V,null,a.createElement(B,null,a.createElement(q,null,"Room: ",t)),a.createElement(X,null,"Currently online (",e.length,"):"),a.createElement(Y,null,e.map(((e,t)=>a.createElement(Z,{key:t},e.name)))))}const V=m.default.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${e=>e.theme.palette.divider};
    width: calc(1680px / 6);
    flex: 1 0;
    background-color: ${e=>e.theme.palette.primary.light};
    color: ${e=>e.theme.palette.primary.contrastText};
    min-height: 100vh;
`,B=m.default.div`
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    align-items: center;
    min-height: 3.5rem;
    flex: 0 0 auto;
    user-select: none;
    z-index: 1;
    width: 100%;
    background-color: ${e=>e.theme.palette.primary.light};
    border-bottom: 1px solid;
    border-color: ${e=>e.theme.palette.divider};
`,Y=m.default.div`

`,q=m.default.div`
    font-size: 24px;
    padding-left: 0.5rem;
`,X=m.default.div`
    font-size: 24px;
    padding-left: 0.5rem;
`,Z=m.default.div`
    font-size: 18px;
    padding-left: 0.5rem;
`;const Q=function(){const e=o(),t=l((e=>e.app.darkTheme));return a.createElement(h,null,a.createElement(f,null,a.createElement(W,null)),a.createElement(g,null,a.createElement(x,null,a.createElement(b,null,a.createElement(y,null,a.createElement(v,null)),a.createElement(E,null,a.createElement(w,null,a.createElement(k,null,"Toggle Dark Theme"),a.createElement(j,{onClick:()=>e({type:"TOGGLE_DARK"}),checked:t}))),a.createElement(P,null),a.createElement(z,null)))))};function ee(e){const[t,r]=a.useState(!1);return a.createElement(te,null,a.createElement(ae,{...e,onBlur:e=>(e=>{r(!!e.target.value)})(e),className:`${e.className&&e.className||""} ${t?"is-valid":""}`}),a.createElement(re,null,e.label))}const te=m.default.div`
  margin-bottom: 1rem;
  background-color: #f5f5f5;
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 56px;
  transition: background-color 500ms;
  &:hover {
    background-color: #ececec;
  };
  &:focus-within {
    background-color: #dcdcdc;
  };
`,re=m.default.label`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: rgba(0, 0, 0, 0.5);
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
  pointer-events: none;
`,ae=m.default.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: ${e=>"dark"===e.theme.type?"#6200ee":"#157ce1"};
  border: 1px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.87);
  transition: border 500ms;
  padding: 20px 16px 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: ${e=>"dark"===e.theme.type?"#6200ee":"#157ce1"};
  }
  &:focus + label {
    color: ${e=>"dark"===e.theme.type?"#6200ee":"#157ce1;"};
  }
  &:focus + label,
  &.is-valid + label {
  transform: translateY(-100%) scale(0.75);
}
`;function ne(e){return a.createElement(ie,{onClick:e.onClick},a.createElement(le,null,e.text),a.createElement(oe,null))}const ie=m.default.button`
    width: 100%;
    display: inline-flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: currentcolor none 0px;
    border: 0px none;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: ${e=>e.theme.palette.text.primary};
    background-color: ${e=>"dark"===e.theme.type?"#8774E1":"#FFF"};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    min-height: 3rem;
    &:hover{
        background-color: ${e=>"dark"===e.theme.type?"#FFF":"#e3e3e3"};
        color: ${e=>"dark"===e.theme.type?"#000":"#157ce1"};
    }
`,oe=m.default.div`
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    inset: 0px;
    border-radius: inherit;
    box-sizing: inherit;
    cursor: pointer;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    color: rgb(102, 114, 125);
`,le=m.default.span`
    
`;const de=function(e){const t=o(),[r,n]=a.useState(""),[i,d]=a.useState(""),[s,c]=a.useState(!1),m=l((e=>e.app.darkTheme));return document.querySelectorAll("input").forEach((e=>{e.addEventListener("blur",(t=>{t.target.value?e.classList.add("is-valid"):e.classList.remove("is-valid")}))})),a.createElement(a.Fragment,null,a.createElement(se,null,a.createElement(ce,null,a.createElement(me,null,"React Chat"),a.createElement(ee,{label:"Room Id",type:"text",id:"roomid",value:r,onChange:e=>n(e.target.value),maxLength:12}),a.createElement(ee,{type:"text",id:"username",label:"Username",value:i,onChange:e=>d(e.target.value),maxLength:18}),a.createElement(ne,{disabled:s,onClick:async()=>{if(!r||!i)return alert("Incorrect input");c(!0),e.onLogin(r,i)},text:"Join"}),a.createElement(pe,null,a.createElement(ue,null,"Toggle Dark Theme"),a.createElement(j,{onClick:()=>t({type:"TOGGLE_DARK"}),checked:m})))))},se=m.default.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ce=m.default.div`
  
`,me=m.default.h2`
  margin: 0px 0px 20px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  font-size: 3.75rem;
  line-height: 1.2;
  letter-spacing: -0.00833em;
`,pe=m.default.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
`,ue=m.default.div`
    font-size: 1.5rem;
`,he={type:"dark",palette:{primary:{light:"#212121",main:"#8774E1",dark:"#0f0f0f",contrastText:"#66727D"},divider:"#0f0f0f",background:{default:"#181818",paper:"#0f0f0f"},text:{primary:"#fff",secondary:"#66727D"}},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"},fonts:{title:'"Roboto", "Helvetica", "Arial", "sans-serif"',main:'"Roboto", "Helvetica", "Arial", "sans-serif"'}},fe={type:"light",palette:{primary:{light:"#fff",main:"#fff",dark:"#0f0f0f",contrastText:"#66727D"},divider:"#dfe1e5",background:{default:"#fff",paper:"#181818"},text:{primary:"#000",secondary:"#66727D"}},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"},fonts:{title:'"Roboto", "Helvetica", "Arial", "sans-serif"',main:'"Roboto", "Helvetica", "Arial", "sans-serif"'}};const ge=function(){const e=l((e=>e.app.joined)),t=o(),r=l((e=>e.app.darkTheme));return(0,a.useEffect)((()=>{t(((e,t)=>{const r=new WebSocket(`ws://${location.host}/`);r.addEventListener("message",(r=>{const a=JSON.parse(r.data);if("CHAT"===a.type)switch(a.payload.type){case"ROOM_GRANTED":e(s(a.payload.payload.room.id,a.payload.payload.room.users)),e(d(a.payload.payload.room.users));break;case"USER_JOINED":e(d([...t().app.users,a.payload.payload.user]));break;case"USER_DISCONECTED":const r=a.payload.payload.user.id;e(d(t().app.users.filter((e=>e.id!==r))));break;case"MESSAGE_RECIEVED":e({type:"MESSAGE_RECV",payload:{message:a.payload.payload.message}})}})),e({type:"SOCKET_INIT",payload:{socket:r}})}))}),[]),a.createElement(a.Fragment,null,a.createElement(m.ThemeProvider,{theme:r?he:fe},a.createElement(c.Bc,null),a.createElement(u,null),e?a.createElement(p,null,a.createElement(Q,null)):a.createElement(de,{onLogin:(e,r)=>{t(((e,t)=>(r,a)=>{a().app.MyWS?.send(JSON.stringify({type:"CHAT",payload:{type:"ROOM_JOIN",payload:{name:e,roomId:t}}}))})(r,e))}})))};var xe=r(857),be=r(894);const ye=class{joined;roomId;userName;MyWS;users;messages;darkTheme;constructor(){this.MyWS=void 0,this.joined=!1,this.roomId="",this.userName="",this.users=[],this.messages=[],this.darkTheme=!1}};const ve=class{id;name;constructor(e){this.id=e&&e.id||"",this.name=e&&e.name||""}};class Ee{sender;date;text;constructor(e){this.sender=new ve(e&&e.sender),this.date=e&&new Date(e.date)||new Date,this.text=e&&e.text||""}get shortDate(){const e=e=>e.toString().padStart(2,"0");return`${e(this.date.getHours())}:${e(this.date.getMinutes())}`}}const we=function(e=new ye,t){switch(t.type){case"SOCKET_INIT":return{...e,MyWS:t.payload.socket};case"ROOM_GRANTED":return{...e,roomId:t.payload.room.id,users:t.payload.room.users,joined:!0};case"SET_USERS":return{...e,users:t.payload.users};case"MESSAGE_RECV":return{...e,messages:[...e.messages,new Ee(t.payload.message)]};default:return e;case"TOGGLE_DARK":return{...e,darkTheme:!e.darkTheme}}},ke=(0,xe.UY)({app:we}),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.qC,Te=(0,xe.MT)(ke,Se((0,xe.md)(be.Z)));n.render(a.createElement(a.StrictMode,null,a.createElement(i.zt,{store:Te},a.createElement(ge,null))),document.getElementById("root"))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,r,n,i)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,n,i]=e[c],l=!0,d=0;d<r.length;d++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](r[d])))?r.splice(d--,1):(l=!1,i<o&&(o=i));if(l){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[o,l,d]=r,s=0;if(o.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(d)var c=d(a)}for(t&&t(r);s<o.length;s++)i=o[s],a.o(e,i)&&e[i]&&e[i][0](),e[o[s]]=0;return a.O(c)},r=self.webpackChunkreact_chat=self.webpackChunkreact_chat||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[554],(()=>a(526)));n=a.O(n)})();