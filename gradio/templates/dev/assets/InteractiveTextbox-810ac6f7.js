import{SvelteComponentDev as ee,init as te,safe_not_equal as ne,dispatch_dev as D,flush as _,validate_slots as ie,createEventDispatcher as F,binding_callbacks as G,bind as H,create_component as q,mount_component as z,transition_in as w,transition_out as k,destroy_component as A,assign as le,space as se,insert_dev as ue,group_outros as oe,check_outros as ae,add_flush_callback as J,detach_dev as _e,get_spread_update as ce,get_spread_object as fe}from"../../../node/dev/svelte-internal.js";import{S as K}from"./index-0c627992.js";import{T as L}from"./Textbox-b6a3e7f8.js";import{B as M}from"./Button-9bfe2272.js";function N(i){let e,n;const r=[i[17]];let f={};for(let l=0;l<r.length;l+=1)f=le(f,r[l]);e=new K({props:f,$$inline:!0});const u={c:function(){q(e.$$.fragment)},m:function(a,m){z(e,a,m),n=!0},p:function(a,m){const b=m&131072?ce(r,[fe(a[17])]):{};e.$set(b)},i:function(a){n||(w(e.$$.fragment,a),n=!0)},o:function(a){k(e.$$.fragment,a),n=!1},d:function(a){A(e,a)}};return D("SvelteRegisterBlock",{block:u,id:N.name,type:"if",source:"(42:1) {#if loading_status}",ctx:i}),u}function P(i){let e,n,r,f,u,l=i[17]&&N(i);function a(h){i[21](h)}function m(h){i[22](h)}let b={label:i[3],info:i[4],show_label:i[10],lines:i[8],type:i[12],rtl:i[18],text_align:i[19],max_lines:i[11]?i[11]:i[8]+1,placeholder:i[9],show_copy_button:i[16],autofocus:i[20],container:i[13]};i[0]!==void 0&&(b.value=i[0]),i[1]!==void 0&&(b.value_is_output=i[1]),n=new L({props:b,$$inline:!0}),G.push(()=>H(n,"value",a)),G.push(()=>H(n,"value_is_output",m)),n.$on("change",i[23]),n.$on("input",i[24]),n.$on("submit",i[25]),n.$on("blur",i[26]),n.$on("select",i[27]),n.$on("focus",i[28]);const g={c:function(){l&&l.c(),e=se(),q(n.$$.fragment)},m:function(s,o){l&&l.m(s,o),ue(s,e,o),z(n,s,o),u=!0},p:function(s,o){s[17]?l?(l.p(s,o),o&131072&&w(l,1)):(l=N(s),l.c(),w(l,1),l.m(e.parentNode,e)):l&&(oe(),k(l,1,1,()=>{l=null}),ae());const c={};o&8&&(c.label=s[3]),o&16&&(c.info=s[4]),o&1024&&(c.show_label=s[10]),o&256&&(c.lines=s[8]),o&4096&&(c.type=s[12]),o&262144&&(c.rtl=s[18]),o&524288&&(c.text_align=s[19]),o&2304&&(c.max_lines=s[11]?s[11]:s[8]+1),o&512&&(c.placeholder=s[9]),o&65536&&(c.show_copy_button=s[16]),o&1048576&&(c.autofocus=s[20]),o&8192&&(c.container=s[13]),!r&&o&1&&(r=!0,c.value=s[0],J(()=>r=!1)),!f&&o&2&&(f=!0,c.value_is_output=s[1],J(()=>f=!1)),n.$set(c)},i:function(s){u||(w(l),w(n.$$.fragment,s),u=!0)},o:function(s){k(l),k(n.$$.fragment,s),u=!1},d:function(s){s&&_e(e),l&&l.d(s),A(n,s)}};return D("SvelteRegisterBlock",{block:g,id:P.name,type:"slot",source:"(33:0) <Block  {visible}  {elem_id}  {elem_classes}  {scale}  {min_width}  allow_overflow={false}  padding={container} >",ctx:i}),g}function O(i){let e,n;e=new M({props:{visible:i[7],elem_id:i[5],elem_classes:i[6],scale:i[14],min_width:i[15],allow_overflow:!1,padding:i[13],$$slots:{default:[P]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){q(e.$$.fragment)},l:function(u){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(u,l){z(e,u,l),n=!0},p:function(u,[l]){const a={};l&128&&(a.visible=u[7]),l&32&&(a.elem_id=u[5]),l&64&&(a.elem_classes=u[6]),l&16384&&(a.scale=u[14]),l&32768&&(a.min_width=u[15]),l&8192&&(a.padding=u[13]),l&1075789599&&(a.$$scope={dirty:l,ctx:u}),e.$set(a)},i:function(u){n||(w(e.$$.fragment,u),n=!0)},o:function(u){k(e.$$.fragment,u),n=!1},d:function(u){A(e,u)}};return D("SvelteRegisterBlock",{block:r,id:O.name,type:"component",source:"",ctx:i}),r}function he(i,e,n){let{$$slots:r={},$$scope:f}=e;ie("InteractiveTextbox",r,[]);const u=F();let{gradio:l={dispatch:u}}=e,{label:a="Textbox"}=e,{info:m=void 0}=e,{elem_id:b=""}=e,{elem_classes:g=[]}=e,{visible:h=!0}=e,{value:s=""}=e,{lines:o}=e,{placeholder:c=""}=e,{show_label:x}=e,{max_lines:v}=e,{type:T="text"}=e,{container:y=!0}=e,{scale:I=null}=e,{min_width:S=void 0}=e,{show_copy_button:B=!1}=e,{loading_status:j=void 0}=e,{value_is_output:d=!1}=e,{rtl:R=!1}=e,{text_align:E=void 0}=e,{autofocus:C=!1}=e;i.$$.on_mount.push(function(){o===void 0&&!("lines"in e||i.$$.bound[i.$$.props.lines])&&console.warn("<InteractiveTextbox> was created without expected prop 'lines'"),x===void 0&&!("show_label"in e||i.$$.bound[i.$$.props.show_label])&&console.warn("<InteractiveTextbox> was created without expected prop 'show_label'"),v===void 0&&!("max_lines"in e||i.$$.bound[i.$$.props.max_lines])&&console.warn("<InteractiveTextbox> was created without expected prop 'max_lines'")});const Q=["gradio","label","info","elem_id","elem_classes","visible","value","lines","placeholder","show_label","max_lines","type","container","scale","min_width","show_copy_button","loading_status","value_is_output","rtl","text_align","autofocus"];Object.keys(e).forEach(t=>{!~Q.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<InteractiveTextbox> was created with unknown prop '${t}'`)});function U(t){s=t,n(0,s)}function V(t){d=t,n(1,d)}const W=()=>l.dispatch("change",s),X=()=>l.dispatch("input"),Y=()=>l.dispatch("submit"),Z=()=>l.dispatch("blur"),p=t=>l.dispatch("select",t.detail),$=()=>l.dispatch("focus");return i.$$set=t=>{"gradio"in t&&n(2,l=t.gradio),"label"in t&&n(3,a=t.label),"info"in t&&n(4,m=t.info),"elem_id"in t&&n(5,b=t.elem_id),"elem_classes"in t&&n(6,g=t.elem_classes),"visible"in t&&n(7,h=t.visible),"value"in t&&n(0,s=t.value),"lines"in t&&n(8,o=t.lines),"placeholder"in t&&n(9,c=t.placeholder),"show_label"in t&&n(10,x=t.show_label),"max_lines"in t&&n(11,v=t.max_lines),"type"in t&&n(12,T=t.type),"container"in t&&n(13,y=t.container),"scale"in t&&n(14,I=t.scale),"min_width"in t&&n(15,S=t.min_width),"show_copy_button"in t&&n(16,B=t.show_copy_button),"loading_status"in t&&n(17,j=t.loading_status),"value_is_output"in t&&n(1,d=t.value_is_output),"rtl"in t&&n(18,R=t.rtl),"text_align"in t&&n(19,E=t.text_align),"autofocus"in t&&n(20,C=t.autofocus)},i.$capture_state=()=>({createEventDispatcher:F,TextBox:L,Block:M,StatusTracker:K,dispatch:u,gradio:l,label:a,info:m,elem_id:b,elem_classes:g,visible:h,value:s,lines:o,placeholder:c,show_label:x,max_lines:v,type:T,container:y,scale:I,min_width:S,show_copy_button:B,loading_status:j,value_is_output:d,rtl:R,text_align:E,autofocus:C}),i.$inject_state=t=>{"gradio"in t&&n(2,l=t.gradio),"label"in t&&n(3,a=t.label),"info"in t&&n(4,m=t.info),"elem_id"in t&&n(5,b=t.elem_id),"elem_classes"in t&&n(6,g=t.elem_classes),"visible"in t&&n(7,h=t.visible),"value"in t&&n(0,s=t.value),"lines"in t&&n(8,o=t.lines),"placeholder"in t&&n(9,c=t.placeholder),"show_label"in t&&n(10,x=t.show_label),"max_lines"in t&&n(11,v=t.max_lines),"type"in t&&n(12,T=t.type),"container"in t&&n(13,y=t.container),"scale"in t&&n(14,I=t.scale),"min_width"in t&&n(15,S=t.min_width),"show_copy_button"in t&&n(16,B=t.show_copy_button),"loading_status"in t&&n(17,j=t.loading_status),"value_is_output"in t&&n(1,d=t.value_is_output),"rtl"in t&&n(18,R=t.rtl),"text_align"in t&&n(19,E=t.text_align),"autofocus"in t&&n(20,C=t.autofocus)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[s,d,l,a,m,b,g,h,o,c,x,v,T,y,I,S,B,j,R,E,C,U,V,W,X,Y,Z,p,$]}class de extends ee{constructor(e){super(e),te(this,e,he,O,ne,{gradio:2,label:3,info:4,elem_id:5,elem_classes:6,visible:7,value:0,lines:8,placeholder:9,show_label:10,max_lines:11,type:12,container:13,scale:14,min_width:15,show_copy_button:16,loading_status:17,value_is_output:1,rtl:18,text_align:19,autofocus:20}),D("SvelteRegisterComponent",{component:this,tagName:"InteractiveTextbox",options:e,id:O.name})}get gradio(){return this.$$.ctx[2]}set gradio(e){this.$$set({gradio:e}),_()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),_()}get info(){return this.$$.ctx[4]}set info(e){this.$$set({info:e}),_()}get elem_id(){return this.$$.ctx[5]}set elem_id(e){this.$$set({elem_id:e}),_()}get elem_classes(){return this.$$.ctx[6]}set elem_classes(e){this.$$set({elem_classes:e}),_()}get visible(){return this.$$.ctx[7]}set visible(e){this.$$set({visible:e}),_()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),_()}get lines(){return this.$$.ctx[8]}set lines(e){this.$$set({lines:e}),_()}get placeholder(){return this.$$.ctx[9]}set placeholder(e){this.$$set({placeholder:e}),_()}get show_label(){return this.$$.ctx[10]}set show_label(e){this.$$set({show_label:e}),_()}get max_lines(){return this.$$.ctx[11]}set max_lines(e){this.$$set({max_lines:e}),_()}get type(){return this.$$.ctx[12]}set type(e){this.$$set({type:e}),_()}get container(){return this.$$.ctx[13]}set container(e){this.$$set({container:e}),_()}get scale(){return this.$$.ctx[14]}set scale(e){this.$$set({scale:e}),_()}get min_width(){return this.$$.ctx[15]}set min_width(e){this.$$set({min_width:e}),_()}get show_copy_button(){return this.$$.ctx[16]}set show_copy_button(e){this.$$set({show_copy_button:e}),_()}get loading_status(){return this.$$.ctx[17]}set loading_status(e){this.$$set({loading_status:e}),_()}get value_is_output(){return this.$$.ctx[1]}set value_is_output(e){this.$$set({value_is_output:e}),_()}get rtl(){return this.$$.ctx[18]}set rtl(e){this.$$set({rtl:e}),_()}get text_align(){return this.$$.ctx[19]}set text_align(e){this.$$set({text_align:e}),_()}get autofocus(){return this.$$.ctx[20]}set autofocus(e){this.$$set({autofocus:e}),_()}}export{de as I};
//# sourceMappingURL=InteractiveTextbox-810ac6f7.js.map