(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(e,a,t){e.exports=t(354)},244:function(e,a,t){},245:function(e,a,t){},354:function(e,a,t){"use strict";t.r(a);var n=t(17),i=t(0),r=t.n(i),c=t(21),o=t.n(c),l=(t(244),t(31)),m=t(33),s=(t(245),t(46)),u=t(2),d=t(364),p=t(409),g=t(410),f=t(197),b=t(405),E=t(226),h=t.n(E),y=t(227),x=t.n(y),v=t(85),S=t(69),w=t(398);function O(){return r.a.createElement(s.a,{variant:"body2",color:"textSecondary",align:"center"},"Built with ",r.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a"),", ",r.a.createElement("span",{role:"img","aria-label":"coffee"},"\u2615"),", and ",r.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc97")," by ",r.a.createElement(w.a,{color:"inherit",href:"https://linkedin.com/in/martzcodes/"},"martzcodes"),".")}var C=t(406),N=t(97),j=t(26),F=function(e,a,t){var n=JSON.stringify({content:t,username:a}),i={headers:{"Content-Type":"application/json"},method:"POST",body:n};console.log(n),fetch(e,i)},D=t(66),R=function(e,a,t,n,i,r,c){var o=ia.getState().discord,l=ia.getState().expanse;return o.apiKey&&F(o.apiKey,l.name,c),{type:"SET_EXPANSE_ROLL",roll:e,dice:a,modifier:t,target:n,sp:i,description:r}},T=function(e){return function(a){return function(e){return fetch(e).then(function(e){return e.json()})}(e).then(function(t){a(L(e,t))})}},L=function(e,a){return{type:"SET_EXPANSE_DATA",dataLocation:e,data:a}},P=t(399),I=t(400),A=t(401),_=t(216),K=t(403),k=t(191),B=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},description:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),z=Object(j.b)()(function(e){var a=e.dispatch,t=B(),i=r.a.useState({name:"",character:"",description:"",roll:""}),c=Object(l.a)(i,2),o=c[0],s=c[1],u=function(e){return function(a){console.log(e),s(Object(n.a)({},o,Object(m.a)({},e,a.target.value)))}};return r.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){var t;e.preventDefault(),o.name.trim()&&(a({type:"ADD_ROLL",name:(t={name:o.name.trim(),roll:o.roll.trim(),character:o.character.trim(),description:o.description.trim()}).name,roll:t.roll,character:t.character,description:t.description}),s(Object(n.a)({},o,{name:"",description:"",roll:""})))}},r.a.createElement(I.a,{className:t.card},r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"name",label:"Name",className:t.textField,value:o.name,onChange:u("name"),margin:"normal"}),r.a.createElement(_.a,{id:"character",label:"Character",className:t.textField,value:o.character,onChange:u("character"),margin:"normal"}),r.a.createElement(_.a,{id:"roll",label:"Roll",className:t.textField,value:o.roll,onChange:u("roll"),margin:"normal"}),r.a.createElement(_.a,{id:"description",label:"Description",className:t.description,value:o.description,onChange:u("description"),margin:"normal"})),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit"},"Add Roll"))))}),M=t(370),G=t(192),X=t(404),W=t(162),U=t(218),V=t.n(U),H=function(e){var a=e.onClick,t=e.name,n=e.roll,i=e.character,c=e.description,o=e.onRemove;return r.a.createElement(M.a,{button:!0,onClick:a},r.a.createElement(G.a,{primary:"".concat(t,": ").concat(n),secondary:"".concat(i,": ").concat(c)}),r.a.createElement(X.a,null,r.a.createElement(W.a,{edge:"end","aria-label":"Delete",onClick:o},r.a.createElement(V.a,null))))},J=t(369),q=function(e){var a=e.rolls,t=e.sendRoll,n=e.removeRoll;return console.log(a),r.a.createElement(J.a,null,a.map(function(e){return r.a.createElement(H,Object.assign({key:e.id},e,{onClick:function(){return t(e.id)},onRemove:function(){return n(e.id)}}))}))},$=Object(j.b)(function(e){return{rolls:(a=e.rolls,a)};var a},function(e){return{sendRoll:function(a){return e(function(e){console.log(ia.getState());var a=ia.getState().discord,t=ia.getState().rolls.findIndex(function(a){return a.id===e});if(a.apiKey&&-1!==t){var n=ia.getState().rolls[t],i="".concat(n.description);if(n.roll){var r=(new D.Dice).roll(n.roll);i="".concat(n.description,": (").concat(n.roll,") ").concat(r.renderedExpression," = ").concat(r.total)}F(a.apiKey,n.character,i)}return{type:"SEND_ROLL",id:e}}(a))},removeRoll:function(a){return e(function(e){return{type:"REMOVE_ROLL",id:e}}(a))}}})(q),Q=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},description:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),Y=function(){var e=Q(),a=r.a.useState({target:"",character:"",description:"",roll:""}),t=Object(l.a)(a,2),i=t[0],c=t[1],o=function(e){return function(a){console.log(e),c(Object(n.a)({},i,Object(m.a)({},e,a.target.value)))}};return r.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),i.character.trim()){var a=ia.getState().discord;if(a.apiKey){var t="".concat(i.description);if(i.roll){var n=(new D.Dice).roll(i.roll);t="".concat(i.description,": (").concat(i.roll,") ").concat(n.renderedExpression," = ").concat(n.total),i.target.trim()&&(t+=" against ".concat(i.target.trim()))}F(a.apiKey,i.character,t)}}}},r.a.createElement(I.a,{className:e.card},r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"character",label:"Character",className:e.textField,value:i.character,onChange:o("character"),margin:"normal"}),r.a.createElement(_.a,{id:"roll",label:"Roll",className:e.textField,value:i.roll,onChange:o("roll"),margin:"normal"}),r.a.createElement(_.a,{id:"description",label:"Description",className:e.description,value:i.description,onChange:o("description"),margin:"normal"}),r.a.createElement(_.a,{id:"target",label:"Target",className:e.textField,value:i.target,onChange:o("target"),margin:"normal"})),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit"},"Send to Discord"))))},Z=Object(d.a)(function(e){return{}});function ee(){var e=Z();return r.a.createElement(b.a,{maxWidth:"lg",className:e.container},r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(Y,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(z,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(N.a,{className:e.paper},r.a.createElement($,null)))))}var ae=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),te=function(e){var a,t=e.onSave,i=e.apiKey,c=ae(),o=r.a.useState({apiKey:i}),s=Object(l.a)(o,2),u=s[0],d=s[1];return r.a.createElement("form",{className:c.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t(u.apiKey)}},r.a.createElement(I.a,{className:c.card},r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"apiKey",label:"Discord API Key (full URL)",className:c.textField,value:u.apiKey,onChange:(a="apiKey",function(e){console.log(a),d(Object(n.a)({},u,Object(m.a)({},a,e.target.value)))}),margin:"normal"})),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit"},"Save"))))},ne=Object(j.b)(function(e){return{apiKey:e.discord.apiKey?e.discord.apiKey:""}},function(e){return{onSave:function(a){return e(function(e){return{type:"SET_DISCORD",apiKey:e}}(a))}}})(te),ie=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),re=function(e){var a,t=e.onSave,i=e.dataLocation,c=ie(),o=r.a.useState({dataLocation:i}),s=Object(l.a)(o,2),u=s[0],d=s[1];return r.a.createElement("form",{className:c.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t(u.dataLocation)}},r.a.createElement(I.a,{className:c.card},r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"dataLocation",label:"Expanse Data Location (possibly a github gist)",className:c.textField,value:u.dataLocation,onChange:(a="dataLocation",function(e){console.log(a),d(Object(n.a)({},u,Object(m.a)({},a,e.target.value)))}),margin:"normal"})),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit"},"Save"))))},ce=Object(j.b)(function(e){return{dataLocation:e.expanse.dataLocation?e.expanse.dataLocation:"",data:e.expanse.data?e.expanse.data:{}}},function(e){return{onSave:function(a){e(T(a))}}})(re),oe=Object(d.a)(function(e){return{}});function le(){var e=oe();return r.a.createElement(b.a,{maxWidth:"lg",className:e.container},r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(ne,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(ce,null))))}var me=t(124),se=t.n(me),ue=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},description:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),de=function(e){var a=e.onSave,t=e.name,i=e.accuracy,c=e.communication,o=e.constitution,s=e.dexterity,u=e.fighting,d=e.intelligence,p=e.perception,g=e.strength,f=e.willpower,b=ue(),E=r.a.useState({name:t,accuracy:i,communication:c,constitution:o,dexterity:s,fighting:u,intelligence:d,perception:p,strength:g,willpower:f}),h=Object(l.a)(E,2),y=h[0],x=h[1],v=function(e){return function(a){console.log(e),x(Object(n.a)({},y,Object(m.a)({},e,a.target.value)))}};return r.a.createElement("form",{className:b.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),a({name:y.name,accuracy:y.accuracy,communication:y.communication,constitution:y.constitution,dexterity:y.dexterity,fighting:y.fighting,intelligence:y.intelligence,perception:y.perception,strength:y.strength,willpower:y.willpower})}},r.a.createElement(I.a,{className:b.card},r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"name",label:"Character Name",className:b.textField,value:y.name,onChange:v("name"),margin:"normal"}),r.a.createElement(_.a,{id:"accuracy",label:"Character Accuracy",className:b.textField,value:y.accuracy,onChange:v("accuracy"),margin:"normal"}),r.a.createElement(_.a,{id:"communication",label:"Character Communication",className:b.textField,value:y.communication,onChange:v("communication"),margin:"normal"}),r.a.createElement(_.a,{id:"constitution",label:"Character Constitution",className:b.textField,value:y.constitution,onChange:v("constitution"),margin:"normal"}),r.a.createElement(_.a,{id:"dexterity",label:"Character Dexterity",className:b.textField,value:y.dexterity,onChange:v("dexterity"),margin:"normal"}),r.a.createElement(_.a,{id:"fighting",label:"Character Fighting",className:b.textField,value:y.fighting,onChange:v("fighting"),margin:"normal"}),r.a.createElement(_.a,{id:"intelligence",label:"Character Intelligence",className:b.textField,value:y.intelligence,onChange:v("intelligence"),margin:"normal"}),r.a.createElement(_.a,{id:"perception",label:"Character Perception",className:b.textField,value:y.perception,onChange:v("perception"),margin:"normal"}),r.a.createElement(_.a,{id:"strength",label:"Character Strength",className:b.textField,value:y.strength,onChange:v("strength"),margin:"normal"}),r.a.createElement(_.a,{id:"willpower",label:"Character Willpower",className:b.textField,value:y.willpower,onChange:v("willpower"),margin:"normal"})),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit"},"Save"))))},pe=Object(j.b)(function(e){return{name:e.expanse.name?e.expanse.name:"",accuracy:e.expanse.accuracy?e.expanse.accuracy:0,communication:e.expanse.communication?e.expanse.communication:0,constitution:e.expanse.constitution?e.expanse.constitution:0,dexterity:e.expanse.dexterity?e.expanse.dexterity:0,fighting:e.expanse.fighting?e.expanse.fighting:0,intelligence:e.expanse.intelligence?e.expanse.intelligence:0,perception:e.expanse.perception?e.expanse.perception:0,strength:e.expanse.strength?e.expanse.strength:0,willpower:e.expanse.willpower?e.expanse.willpower:0}},function(e){return{onSave:function(a){return e(function(e){return{type:"SET_EXPANSE_CHARACTER",character:e}}(a))}}})(de),ge=t(408),fe=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},description:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),be=function(e){var a=e.onSave,t=e.name,i=e.modifier,c=e.target,o=e.description,s=fe(),u=r.a.useState({name:t,modifier:i,target:c,description:o}),d=Object(l.a)(u,2),p=d[0],g=d[1];t===p.name&&o===p.description||g({name:t,modifier:i,target:c,description:o});var f=function(e){return function(a){console.log(e),g(Object(n.a)({},p,Object(m.a)({},e,a.target.value)))}};return r.a.createElement("form",{className:s.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),a(p.name,p.modifier,p.target,p.description)}},r.a.createElement(I.a,{className:s.card},r.a.createElement(ge.a,{title:"Manual Roll"}),r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"modifier",label:"Modifier",className:s.textField,value:p.modifier,onChange:f("modifier"),margin:"normal"}),r.a.createElement(_.a,{id:"description",label:"Action Description",className:s.textField,value:p.description,onChange:f("description"),margin:"normal"}),r.a.createElement(_.a,{id:"target",label:"Target",className:s.textField,value:p.target,onChange:f("target"),margin:"normal"})),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit"},"Roll and Send"))))},Ee=Object(j.b)(function(e){return{name:e.expanse.name?e.expanse.name:"",roll:e.expanse.roll?e.expanse.roll:0,dice:e.expanse.dice?e.expanse.dice:[],modifier:e.expanse.modifier?e.expanse.modifier:0,target:e.expanse.target?e.expanse.target:0,sp:e.expanse.sp?e.expanse.sp:0,description:e.expanse.description?e.expanse.description:""}},function(e){return{onSave:function(a,t,n,i){if(a.trim()){var r=(new D.Dice).roll("3d6"),c=r.reducedExpression.children.map(function(e){return e.attributes.value}),o=new Set(c),l=Number.parseInt("".concat(t),10);isNaN(l)&&(l=0);var m="FAIL";r.total+l>=n&&(m="SUCCESS");var s=l<0?" - ":" + ",u="".concat(m," ([").concat(c.join(", "),"]").concat(s).concat(Math.abs(l)," vs ").concat(n,") Rolled a ").concat(r.total+l).concat(i.trim().length>0?" for "+i.trim():"").concat(o.size<=2&&"SUCCESS"===m?". "+c[2]+" stunt points available":""),d=0;o.size<=2&&"SUCCESS"===m&&(d=c[2]),console.log(u),e(R(r.total,c,t,n,d,i,u))}}}})(be),he=t(86),ye=t(189),xe=t(365),ve=t(415),Se=t(212),we=t(413),Oe=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},description:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{},target:Object(n.a)({},e.typography.button,{backgroundColor:e.palette.background.paper,padding:e.spacing(1)})})}),Ce=function(e){var a=e.onSave,t=e.name,i=e.modifier,c=e.dice,o=e.target,m=e.currentFortune,s=e.maxFortune,u=Oe(),d=r.a.useState({name:t,modifier:i,dice:c,newDice:Object(he.a)(c),spendTotal:0,target:o,currentFortune:m,maxFortune:s}),p=Object(l.a)(d,2),g=p[0],f=p[1],b=function(e){return function(a){var t=Object(he.a)(g.newDice),i=Number.parseInt("".concat(a.target.value),10);t[e]=i;var r=0;t.forEach(function(e,a){e!==g.dice[a]&&(r+=e,2===a&&(r+=e))}),f(Object(n.a)({},g,{newDice:t,spendTotal:r}))}},E=function(){return new Set(g.newDice).size<=2?g.newDice[2]:0};return r.a.createElement("form",{className:u.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),a(g.name,g.modifier,g.target,g.newDice,g.spendTotal,g.currentFortune,g.maxFortune,E())}},r.a.createElement(I.a,{className:u.card},r.a.createElement(ge.a,{title:"Fortune Spender"}),r.a.createElement(A.a,null,r.a.createElement(ye.a,{component:"fieldset"},r.a.createElement(xe.a,{component:"legend"},"Dice 1"),r.a.createElement(ve.a,{"aria-label":"position",name:"position",value:"".concat(g.newDice[0]),onChange:b(0),row:!0},r.a.createElement(Se.a,{value:"1",control:r.a.createElement(we.a,{color:"primary",disabled:c[0]>1}),label:"1",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"2",control:r.a.createElement(we.a,{color:"primary",disabled:c[0]>2}),label:"2",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"3",control:r.a.createElement(we.a,{color:"primary",disabled:c[0]>3}),label:"3",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"4",control:r.a.createElement(we.a,{color:"primary",disabled:c[0]>4}),label:"4",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"5",control:r.a.createElement(we.a,{color:"primary",disabled:c[0]>5}),label:"5",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"6",control:r.a.createElement(we.a,{color:"primary",disabled:c[0]>6}),label:"6",labelPlacement:"bottom"}))),r.a.createElement(ye.a,{component:"fieldset"},r.a.createElement(xe.a,{component:"legend"},"Dice 2"),r.a.createElement(ve.a,{"aria-label":"position",name:"position",value:"".concat(g.newDice[1]),onChange:b(1),row:!0},r.a.createElement(Se.a,{value:"1",control:r.a.createElement(we.a,{color:"primary",disabled:c[1]>1}),label:"1",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"2",control:r.a.createElement(we.a,{color:"primary",disabled:c[1]>2}),label:"2",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"3",control:r.a.createElement(we.a,{color:"primary",disabled:c[1]>3}),label:"3",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"4",control:r.a.createElement(we.a,{color:"primary",disabled:c[1]>4}),label:"4",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"5",control:r.a.createElement(we.a,{color:"primary",disabled:c[1]>5}),label:"5",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"6",control:r.a.createElement(we.a,{color:"primary",disabled:c[1]>6}),label:"6",labelPlacement:"bottom"}))),r.a.createElement(ye.a,{component:"fieldset"},r.a.createElement(xe.a,{component:"legend"},"Drama"),r.a.createElement(ve.a,{"aria-label":"position",name:"position",value:"".concat(g.newDice[2]),onChange:b(2),row:!0},r.a.createElement(Se.a,{value:"1",control:r.a.createElement(we.a,{color:"primary",disabled:c[2]>1}),label:"1",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"2",control:r.a.createElement(we.a,{color:"primary",disabled:c[2]>2}),label:"2",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"3",control:r.a.createElement(we.a,{color:"primary",disabled:c[2]>3}),label:"3",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"4",control:r.a.createElement(we.a,{color:"primary",disabled:c[2]>4}),label:"4",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"5",control:r.a.createElement(we.a,{color:"primary",disabled:c[2]>5}),label:"5",labelPlacement:"bottom"}),r.a.createElement(Se.a,{value:"6",control:r.a.createElement(we.a,{color:"primary",disabled:c[2]>6}),label:"6",labelPlacement:"bottom"}))),r.a.createElement("div",{className:u.target},"".concat(g.spendTotal>0?"New ":" ","Total ").concat(function(){var e=Number.parseInt("".concat(g.modifier),10);return g.newDice.forEach(function(a){e+=a}),e}()," vs Target ").concat(g.target,": ").concat(E()," Stunt Points"))),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit",disabled:0===g.spendTotal||g.currentFortune-g.spendTotal<=0},"Spend ","".concat(g.spendTotal)," Fortune"))))},Ne=Object(j.b)(function(e){return{name:e.expanse.name?e.expanse.name:"",roll:e.expanse.roll?e.expanse.roll:0,dice:e.expanse.dice?e.expanse.dice:[1,1,1],modifier:e.expanse.modifier?e.expanse.modifier:0,target:e.expanse.target?e.expanse.target:0,currentFortune:e.expanse.currentFortune?e.expanse.currentFortune:0,maxFortune:e.expanse.maxFortune?e.expanse.maxFortune:0}},function(e){return{onSave:function(a,t,n,i,r,c,o,l){if(a.trim()){var m=0;i.forEach(function(e){m+=e});var s=Number.parseInt("".concat(t),10)<0?" - ":" + ",u="".concat(a," spent ").concat(r," fortune to bring the roll total to [").concat(i.join(", "),"] ").concat(s," ").concat(Math.abs(t)," = ").concat(m+Number.parseInt("".concat(t),10)," vs ").concat(n,".  Current Fortune: ").concat(c-r," / ").concat(o).concat(l>0?". "+l+" stunt points available":"");console.log(u),e(function(e,a,t,n,i){var r=ia.getState().discord,c=ia.getState().expanse;return r.apiKey&&F(r.apiKey,c.name,i),{type:"SET_EXPANSE_FORTUNE_SPENT",roll:e,dice:a,sp:t,currentFortune:n}}(m+Number.parseInt("".concat(t),10),i,l,c-r,u))}}}})(Ce),je=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},description:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{},current:Object(n.a)({},e.typography.button,{backgroundColor:e.palette.background.paper,padding:e.spacing(1)})})}),Fe=function(e){var a=e.onSave,t=e.maxFortune,i=e.currentFortune,c=je(),o=r.a.useState({maxFortune:t}),m=Object(l.a)(o,2),s=m[0],u=m[1];return r.a.createElement("form",{className:c.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),a(s.maxFortune)}},r.a.createElement(I.a,{className:c.card},r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"maxFortune",label:"Character Max Fortune",className:c.textField,value:s.maxFortune,onChange:function(e){u(Object(n.a)({},s,{maxFortune:Number.parseInt(e.target.value,10)}))},margin:"normal"}),r.a.createElement("div",{className:c.current},"Current Fortune: ".concat(i))),r.a.createElement(K.a,null,r.a.createElement(k.a,{size:"small",color:"primary",type:"submit"},"Save"))))},De=Object(j.b)(function(e){return{currentFortune:e.expanse.currentFortune?e.expanse.currentFortune:0,maxFortune:e.expanse.maxFortune?e.expanse.maxFortune:0}},function(e){return{onSave:function(a){return e(function(e){return{type:"SET_EXPANSE_MAX_FORTUNE",maxFortune:e}}(a))}}})(Fe),Re=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},description:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),Te=function(e){var a=e.onSave,t=e.name,i=e.accuracy,c=e.communication,o=e.constitution,s=e.dexterity,u=e.fighting,d=e.intelligence,p=e.perception,g=e.strength,f=e.willpower,b=Re(),E=r.a.useState({name:t,accuracy:i,communication:c,constitution:o,dexterity:s,fighting:u,intelligence:d,perception:p,strength:g,willpower:f,target:10}),h=Object(l.a)(E,2),y=h[0],x=h[1];return r.a.createElement("div",null,r.a.createElement(I.a,{className:b.card},r.a.createElement(ge.a,{title:"Manual Roll"}),r.a.createElement(A.a,null,r.a.createElement(_.a,{id:"target",label:"Target",className:b.textField,value:y.target,onChange:function(e){return function(a){console.log(e),x(Object(n.a)({},y,Object(m.a)({},e,a.target.value)))}}("target"),margin:"normal"}),r.a.createElement(se.a,{actions:[{icon:"send",tooltip:"Roll",onClick:function(e,t){var n=t;a(y.name,Number.parseInt("".concat(n.modifier),10),y.target,"(".concat(n.ability,") ").concat(n.focus))}},{icon:"favorite",tooltip:"Roll with Focus",onClick:function(e,t){var n=t;a(y.name,Number.parseInt("".concat(n.modifier),10)+2,y.target,"(".concat(n.ability,") ").concat(n.focus))}}],columns:[{title:"Ability",field:"ability"},{title:"Focus",field:"focus"},{title:"Modifier",field:"modifier",type:"numeric"}],data:[{ability:"Accuracy",focus:"Generic",modifier:i},{ability:"Accuracy",focus:"Bows",modifier:i},{ability:"Accuracy",focus:"Gunnery",modifier:i},{ability:"Accuracy",focus:"Pistols",modifier:i},{ability:"Accuracy",focus:"Rifles",modifier:i},{ability:"Accuracy",focus:"Throwing",modifier:i},{ability:"Communication",focus:"Generic",modifier:c},{ability:"Communication",focus:"Bargaining",modifier:c},{ability:"Communication",focus:"Deception",modifier:c},{ability:"Communication",focus:"Disguise",modifier:c},{ability:"Communication",focus:"Etiquette",modifier:c},{ability:"Communication",focus:"Expression",modifier:c},{ability:"Communication",focus:"Gambling",modifier:c},{ability:"Communication",focus:"Investigation",modifier:c},{ability:"Communication",focus:"Leadership",modifier:c},{ability:"Communication",focus:"Performing",modifier:c},{ability:"Communication",focus:"Persuasion",modifier:c},{ability:"Communication",focus:"Seduction",modifier:c},{ability:"Constitution",focus:"Generic",modifier:o},{ability:"Constitution",focus:"Running",modifier:o},{ability:"Constitution",focus:"Stamina",modifier:o},{ability:"Constitution",focus:"Swimming",modifier:o},{ability:"Constitution",focus:"Tolerance",modifier:o},{ability:"Dexterity",focus:"Generic",modifier:s},{ability:"Dexterity",focus:"Crafting",modifier:s},{ability:"Dexterity",focus:"Driving",modifier:s},{ability:"Dexterity",focus:"Free-fall",modifier:s},{ability:"Dexterity",focus:"Initiative",modifier:s},{ability:"Dexterity",focus:"Piloting",modifier:s},{ability:"Dexterity",focus:"Sleight of Hand",modifier:s},{ability:"Dexterity",focus:"Stealth",modifier:s},{ability:"Fighting",focus:"Generic",modifier:u},{ability:"Fighting",focus:"Brawling",modifier:u},{ability:"Fighting",focus:"Grappling",modifier:u},{ability:"Fighting",focus:"Heavy Weapons",modifier:u},{ability:"Fighting",focus:"Light Weapons",modifier:u},{ability:"Intelligence",focus:"Generic",modifier:d},{ability:"Intelligence",focus:"Art",modifier:d},{ability:"Intelligence",focus:"Business",modifier:d},{ability:"Intelligence",focus:"Cryptography",modifier:d},{ability:"Intelligence",focus:"Current Affairs",modifier:d},{ability:"Intelligence",focus:"Demolitions",modifier:d},{ability:"Intelligence",focus:"Engineering",modifier:d},{ability:"Intelligence",focus:"Evaluation",modifier:d},{ability:"Intelligence",focus:"Law",modifier:d},{ability:"Intelligence",focus:"Medicine",modifier:d},{ability:"Intelligence",focus:"Navigation",modifier:d},{ability:"Intelligence",focus:"Research",modifier:d},{ability:"Intelligence",focus:"Science",modifier:d},{ability:"Intelligence",focus:"Security",modifier:d},{ability:"Intelligence",focus:"Tactics",modifier:d},{ability:"Intelligence",focus:"Technology",modifier:d},{ability:"Perception",focus:"Generic",modifier:p},{ability:"Perception",focus:"Empathy",modifier:p},{ability:"Perception",focus:"Hearing",modifier:p},{ability:"Perception",focus:"Intuition",modifier:p},{ability:"Perception",focus:"Searching",modifier:p},{ability:"Perception",focus:"Seeing",modifier:p},{ability:"Perception",focus:"Smelling",modifier:p},{ability:"Perception",focus:"Survival",modifier:p},{ability:"Perception",focus:"Tasting",modifier:p},{ability:"Perception",focus:"Touching",modifier:p},{ability:"Perception",focus:"Tracking",modifier:p},{ability:"Strength",focus:"Generic",modifier:g},{ability:"Strength",focus:"Climbing",modifier:g},{ability:"Strength",focus:"Intimidation",modifier:g},{ability:"Strength",focus:"Jumping",modifier:g},{ability:"Strength",focus:"Might",modifier:g},{ability:"Willpower",focus:"Generic",modifier:f},{ability:"Willpower",focus:"Courage",modifier:f},{ability:"Willpower",focus:"Faith",modifier:f},{ability:"Willpower",focus:"Self-Discipline",modifier:f}],title:"Stat Rolls"}))))},Le=Object(j.b)(function(e){return{name:e.expanse.name?e.expanse.name:"",accuracy:e.expanse.accuracy?e.expanse.accuracy:0,communication:e.expanse.communication?e.expanse.communication:0,constitution:e.expanse.constitution?e.expanse.constitution:0,dexterity:e.expanse.dexterity?e.expanse.dexterity:0,fighting:e.expanse.fighting?e.expanse.fighting:0,intelligence:e.expanse.intelligence?e.expanse.intelligence:0,perception:e.expanse.perception?e.expanse.perception:0,strength:e.expanse.strength?e.expanse.strength:0,willpower:e.expanse.willpower?e.expanse.willpower:0}},function(e){return{onSave:function(a,t,n,i){if(a.trim()){var r=(new D.Dice).roll("3d6"),c=r.reducedExpression.children.map(function(e){return e.attributes.value}),o=new Set(c),l=Number.parseInt("".concat(t),10);isNaN(l)&&(l=0);var m="FAIL";r.total+l>=n&&(m="SUCCESS");var s=l<0?" - ":" + ",u="".concat(m," ([").concat(c.join(", "),"]").concat(s).concat(Math.abs(l)," vs ").concat(n,") Rolled a ").concat(r.total+l).concat(i.trim().length>0?" for "+i.trim():"").concat(o.size<=2&&"SUCCESS"===m?". "+c[2]+" stunt points available":""),d=0;o.size<=2&&"SUCCESS"===m&&(d=c[2]),console.log(u),e(R(r.total,c,t,n,d,i,u))}}}})(Te),Pe=Object(d.a)(function(e){return Object(P.a)({container:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},dense:{marginTop:19},menu:{width:200},card:{}})}),Ie=function(e){e.onSave;var a=e.name,t=e.dataLocation,n=e.data,i=e.discordApiKey,c=Pe(),o=r.a.useState({name:a,dataLocation:t,data:n,discordApiKey:i}),m=Object(l.a)(o,2);m[0],m[1];return r.a.createElement(b.a,{maxWidth:"lg",className:c.container},r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(pe,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(De,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(Le,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(Ee,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(Ne,null)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(se.a,{actions:[{icon:"send",tooltip:"Roll",onClick:function(e,t){var n=t,r="[".concat(n.type,"] ").concat(a," spends ").concat(n.cost," stunt points to ").concat(n.name,": ").concat(n.description,".");F(i,a,r)}}],columns:[{title:"Type",field:"type"},{title:"Cost",field:"cost",type:"numeric"},{title:"Name",field:"name"},{title:"Description",field:"description"}],data:n.stunts,title:"Stunts"}))))},Ae=Object(j.b)(function(e){return{name:e.expanse.name?e.expanse.name:"",dataLocation:e.expanse.dataLocation?e.expanse.dataLocation:"",data:e.expanse.data?e.expanse.data:{},discordApiKey:e.discord.apiKey?e.discord.apiKey:""}},function(e){return{onSave:function(a){return e(T(a))}}})(Ie),_e=t(229),Ke=t.n(_e),ke=t(228),Be=t.n(ke),ze=t(230),Me=t.n(ze),Ge=t(416),Xe=t(411),We=t(368),Ue=t(196),Ve=t(412),He=Object(d.a)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(n.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(m.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}),Je=function(){var e=He(),a=r.a.useState(!1),t=Object(l.a)(a,2),n=t[0],i=t[1];return r.a.createElement(v.a,{basename:"/rpg"},r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(g.a,{position:"absolute",className:Object(u.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(f.a,{className:e.toolbar},r.a.createElement(W.a,{edge:"start",color:"inherit","aria-label":"Open drawer",onClick:function(){i(!0)},className:Object(u.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(h.a,null)),r.a.createElement(s.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"RPG Discord Tools"))),r.a.createElement(Ge.a,{variant:"permanent",classes:{paper:Object(u.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(W.a,{onClick:function(){i(!1)}},r.a.createElement(x.a,null))),r.a.createElement(Xe.a,null),r.a.createElement(We.a,null,r.a.createElement(v.b,{to:"/",style:{textDecoration:"none"},key:"expanse"},r.a.createElement(Ue.a,null,r.a.createElement(Ve.a,null,r.a.createElement(Be.a,null)),r.a.createElement(G.a,{primary:"Expanse"}))),r.a.createElement(v.b,{to:"/dnd",style:{textDecoration:"none"},key:"dnd"},r.a.createElement(Ue.a,null,r.a.createElement(Ve.a,null,r.a.createElement(Ke.a,null)),r.a.createElement(G.a,{primary:"DND"}))),r.a.createElement(v.b,{to:"/settings",style:{textDecoration:"none"},key:"settings"},r.a.createElement(Ue.a,null,r.a.createElement(Ve.a,null,r.a.createElement(Me.a,null)),r.a.createElement(G.a,{primary:"Settings"}))))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(b.a,{maxWidth:"lg",className:e.container},r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:Ae}),r.a.createElement(S.a,{exact:!0,path:"/dnd",component:ee}),r.a.createElement(S.a,{exact:!0,path:"/expanse",component:Ae}),r.a.createElement(S.a,{exact:!0,path:"/settings",component:le})))),r.a.createElement("footer",null,r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe,$e=t(42),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_ROLL":return[].concat(Object(he.a)(e),[{id:0===e.length?0:Math.max.apply(Math,Object(he.a)(e.map(function(e){return console.log(e),e.id})))+1,name:a.name,roll:a.roll,description:a.description,character:a.character}]);case"SEND_ROLL":return e;case"REMOVE_ROLL":var t=Object.assign([],e);return t.splice(t.findIndex(function(e){return e.id===a.id}),1),t;default:return e}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_DISCORD":return{apiKey:a.apiKey};default:return e}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_EXPANSE_CHARACTER":return Object(n.a)({},e,{name:a.character.name,accuracy:a.character.accuracy,communication:a.character.communication,constitution:a.character.constitution,dexterity:a.character.dexterity,fighting:a.character.fighting,intelligence:a.character.intelligence,perception:a.character.perception,strength:a.character.strength,willpower:a.character.willpower});case"SET_EXPANSE_MAX_FORTUNE":return e.maxFortune!==a.maxFortune?Object(n.a)({},e,{maxFortune:a.maxFortune,currentFortune:a.maxFortune}):Object(n.a)({},e);case"SET_EXPANSE_CURRENT_FORTUNE":return Object(n.a)({},e,{currentFortune:a.currentFortune});case"SET_EXPANSE_ROLL":return Object(n.a)({},e,{roll:a.roll,dice:a.dice,modifier:a.modifier,target:a.target,sp:a.sp,description:a.description});case"SET_EXPANSE_FORTUNE_SPENT":return Object(n.a)({},e,{roll:a.roll,dice:a.dice,sp:a.sp,currentFortune:a.currentFortune});case"SET_EXPANSE_DATA_LOCATION":return Object(n.a)({},e,{dataLocation:a.dataLocation});case"SET_EXPANSE_DATA":return Object(n.a)({},e,{dataLocation:a.dataLocation,data:a.data});default:return e}},ea=Object($e.c)({rolls:Qe,discord:Ye,expanse:Ze}),aa=t(231),ta=t(168),na=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(a){return}}();(qe=na?Object($e.e)(ea,na,Object($e.a)(ta.a)):Object($e.e)(ea,Object($e.a)(ta.a))).subscribe(Object(aa.throttle)(function(){!function(e){try{var a=JSON.stringify(e);localStorage.setItem("state",a)}catch(t){}}(Object(n.a)({},qe.getState()))},1e3)),o.a.render(r.a.createElement(j.a,{store:qe},r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});var ia=a.default=qe}},[[239,1,2]]]);
//# sourceMappingURL=main.a5944071.chunk.js.map