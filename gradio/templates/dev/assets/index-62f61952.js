import{SvelteComponentDev as je,init as Be,safe_not_equal as Re,dispatch_dev as z,add_render_callback as De,validate_store as ct,component_subscribe as at,validate_slots as ze,createEventDispatcher as ye,tick as pe,space as L,empty as ut,insert_dev as O,listen_dev as Y,transition_in as P,group_outros as Z,transition_out as j,check_outros as x,detach_dev as V,binding_callbacks as Ge,bubble as ke,globals as ft,create_component as A,mount_component as F,destroy_component as M,ensure_array_like_dev as te,element as I,attr_dev as y,set_style as T,toggle_class as X,add_location as C,append_dev as D,add_iframe_resize_listener as wt,destroy_each as Ie,src_url_equal as W,run_all as ht,text as Ce,set_data_dev as Ne,assign as _t,get_spread_update as mt,get_spread_object as dt}from"../../../node/dev/svelte-internal.js";import{X as le,S as He}from"./index-168e7816.js";import{n as Ee,B as Oe}from"./Button-e33227ec.js";import{B as Ve}from"./BlockLabel-2ee7f826.js";import{I as Le}from"./IconButton-f58f3320.js";import{E as Te}from"./Empty-fa07e7fd.js";import{S as Xe}from"./ShareButton-c782b318.js";import{M as qe}from"./ModifyUpload-ddf21bcf.js";import{D as Ae}from"./Download-39664f40.js";import{I as de}from"./Image-51aa0ec9.js";import{u as gt}from"./utils-c3e3db58.js";async function Fe(o){return o?`<div style="display: flex; flex-wrap: wrap; gap: 16px">${(await Promise.all(o.map(async([t,r])=>t===null?"":await gt(t.data,"url")))).map(t=>`<img src="${t}" style="height: 400px" />`).join("")}</div>`:""}const{window:Me}=ft,N="Users/peterallen/Projects/gradio/js/gallery/static/Gallery.svelte";function Se(o,e,t){const r=o.slice();return r[39]=e[t],r[41]=t,r}function Pe(o,e,t){const r=o.slice();return r[42]=e[t],r[43]=e,r[41]=t,r}function se(o){let e,t;e=new Ve({props:{show_label:o[0],Icon:de,label:o[1]||"Gallery"},$$inline:!0});const r={c:function(){A(e.$$.fragment)},m:function(i,l){F(e,i,l),t=!0},p:function(i,l){const c={};l[0]&1&&(c.show_label=i[0]),l[0]&2&&(c.label=i[1]||"Gallery"),e.$set(c)},i:function(i){t||(P(e.$$.fragment,i),t=!0)},o:function(i){j(e.$$.fragment,i),t=!1},d:function(i){M(e,i)}};return z("SvelteRegisterBlock",{block:r,id:se.name,type:"if",source:"(141:0) {#if show_label}",ctx:o}),r}function Ue(o){let e,t,r,a,i,l,c=o[11]!==null&&o[6]&&re(o),u=o[8]&&ue(o),f=te(o[10]),_=[];for(let h=0;h<f.length;h+=1)_[h]=we(Se(o,f,h));const p={c:function(){c&&c.c(),e=L(),t=I("div"),r=I("div"),u&&u.c(),a=L();for(let w=0;w<_.length;w+=1)_[w].c();y(r,"class","grid-container svelte-1wmsvjm"),T(r,"--grid-cols",o[3]),T(r,"--grid-rows",o[4]),T(r,"--object-fit",o[7]),T(r,"height",o[5]),X(r,"pt-6",o[0]),C(r,N,240,2,6231),y(t,"class","grid-wrap svelte-1wmsvjm"),De(()=>o[34].call(t)),X(t,"fixed-height",!o[5]||o[5]=="auto"),C(t,N,235,1,6114)},m:function(w,m){c&&c.m(w,m),O(w,e,m),O(w,t,m),D(t,r),u&&u.m(r,null),D(r,a);for(let d=0;d<_.length;d+=1)_[d]&&_[d].m(r,null);i=wt(t,o[34].bind(t)),l=!0},p:function(w,m){if(w[11]!==null&&w[6]?c?(c.p(w,m),m[0]&2112&&P(c,1)):(c=re(w),c.c(),P(c,1),c.m(e.parentNode,e)):c&&(Z(),j(c,1,1,()=>{c=null}),x()),w[8]?u?(u.p(w,m),m[0]&256&&P(u,1)):(u=ue(w),u.c(),P(u,1),u.m(r,a)):u&&(Z(),j(u,1,1,()=>{u=null}),x()),m[0]&3072){f=te(w[10]);let d;for(d=0;d<f.length;d+=1){const g=Se(w,f,d);_[d]?_[d].p(g,m):(_[d]=we(g),_[d].c(),_[d].m(r,null))}for(;d<_.length;d+=1)_[d].d(1);_.length=f.length}(!l||m[0]&8)&&T(r,"--grid-cols",w[3]),(!l||m[0]&16)&&T(r,"--grid-rows",w[4]),(!l||m[0]&128)&&T(r,"--object-fit",w[7]),(!l||m[0]&32)&&T(r,"height",w[5]),(!l||m[0]&1)&&X(r,"pt-6",w[0]),(!l||m[0]&32)&&X(t,"fixed-height",!w[5]||w[5]=="auto")},i:function(w){l||(P(c),P(u),l=!0)},o:function(w){j(c),j(u),l=!1},d:function(w){w&&(V(e),V(t)),c&&c.d(w),u&&u.d(),Ie(_,w),i()}};return z("SvelteRegisterBlock",{block:p,id:Ue.name,type:"else",source:"(146:0) {:else}",ctx:o}),p}function We(o){let e,t;e=new Te({props:{unpadded_box:!0,size:"large",$$slots:{default:[Je]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){A(e.$$.fragment)},m:function(i,l){F(e,i,l),t=!0},p:function(i,l){const c={};l[1]&8192&&(c.$$scope={dirty:l,ctx:i}),e.$set(c)},i:function(i){t||(P(e.$$.fragment,i),t=!0)},o:function(i){j(e.$$.fragment,i),t=!1},d:function(i){M(e,i)}};return z("SvelteRegisterBlock",{block:r,id:We.name,type:"if",source:"(144:0) {#if value === null || _value === null || _value.length === 0}",ctx:o}),r}function re(o){let e,t,r,a,i,l,c,u,f,_,p,h,w,m,d,g=o[9]&&ie(o);a=new qe({props:{absolute:!1},$$inline:!0}),a.$on("clear",o[26]);let E=o[10][o[11]].caption&&ce(o),R=te(o[10]),S=[];for(let B=0;B<R.length;B+=1)S[B]=ae(Pe(o,R,B));const H={c:function(){e=I("div"),t=I("div"),g&&g.c(),r=L(),A(a.$$.fragment),i=L(),l=I("img"),_=L(),E&&E.c(),p=L(),h=I("div");for(let b=0;b<S.length;b+=1)S[b].c();y(t,"class","icon-buttons svelte-1wmsvjm"),C(t,N,178,3,4577),y(l,"data-testid","detailed-image"),W(l.src,c=o[10][o[11]].image.data)||y(l,"src",c),y(l,"alt",u=o[10][o[11]].caption||""),y(l,"title",f=o[10][o[11]].caption||null),T(l,"height","calc(100% - "+o[10][o[11]].caption+" ? '80px' : '60px'})"),y(l,"class","svelte-1wmsvjm"),X(l,"with-caption",!!o[10][o[11]].caption),C(l,N,196,3,5099),y(h,"class","thumbnails scroll-hide svelte-1wmsvjm"),y(h,"data-testid","container_el"),C(h,N,212,3,5619),y(e,"class","preview svelte-1wmsvjm"),C(e,N,177,2,4528)},m:function(b,k){O(b,e,k),D(e,t),g&&g.m(t,null),D(t,r),F(a,t,null),D(e,i),D(e,l),D(e,_),E&&E.m(e,null),D(e,p),D(e,h);for(let G=0;G<S.length;G+=1)S[G]&&S[G].m(h,null);o[30](h),w=!0,m||(d=[Y(l,"click",o[27],!1,!1,!1,!1),Y(e,"keydown",o[18],!1,!1,!1,!1)],m=!0)},p:function(b,k){if(b[9]?g?(g.p(b,k),k[0]&512&&P(g,1)):(g=ie(b),g.c(),P(g,1),g.m(t,r)):g&&(Z(),j(g,1,1,()=>{g=null}),x()),(!w||k[0]&3072&&!W(l.src,c=b[10][b[11]].image.data))&&y(l,"src",c),(!w||k[0]&3072&&u!==(u=b[10][b[11]].caption||""))&&y(l,"alt",u),(!w||k[0]&3072&&f!==(f=b[10][b[11]].caption||null))&&y(l,"title",f),(!w||k[0]&3072)&&T(l,"height","calc(100% - "+b[10][b[11]].caption+" ? '80px' : '60px'})"),(!w||k[0]&3072)&&X(l,"with-caption",!!b[10][b[11]].caption),b[10][b[11]].caption?E?E.p(b,k):(E=ce(b),E.c(),E.m(e,p)):E&&(E.d(1),E=null),k[0]&7168){R=te(b[10]);let G;for(G=0;G<R.length;G+=1){const v=Pe(b,R,G);S[G]?S[G].p(v,k):(S[G]=ae(v),S[G].c(),S[G].m(h,null))}for(;G<S.length;G+=1)S[G].d(1);S.length=R.length}},i:function(b){w||(P(g),P(a.$$.fragment,b),w=!0)},o:function(b){j(g),j(a.$$.fragment,b),w=!1},d:function(b){b&&V(e),g&&g.d(),M(a),E&&E.d(),Ie(S,b),o[30](null),m=!1,ht(d)}};return z("SvelteRegisterBlock",{block:H,id:re.name,type:"if",source:"(147:1) {#if selected_image !== null && allow_preview}",ctx:o}),H}function ie(o){let e,t,r,a;t=new Le({props:{Icon:Ae,label:o[16]("common.download")},$$inline:!0});const i={c:function(){e=I("a"),A(t.$$.fragment),y(e,"href",r=_e(o[2][o[11]])),y(e,"target",window.__is_colab__?"_blank":null),y(e,"download","image"),y(e,"class","svelte-1wmsvjm"),C(e,N,180,5,4640)},m:function(c,u){O(c,e,u),F(t,e,null),a=!0},p:function(c,u){const f={};u[0]&65536&&(f.label=c[16]("common.download")),t.$set(f),(!a||u[0]&2052&&r!==(r=_e(c[2][c[11]])))&&y(e,"href",r)},i:function(c){a||(P(t.$$.fragment,c),a=!0)},o:function(c){j(t.$$.fragment,c),a=!1},d:function(c){c&&V(e),M(t)}};return z("SvelteRegisterBlock",{block:i,id:ie.name,type:"if",source:"(151:4) {#if show_download_button}",ctx:o}),i}function ce(o){let e,t=o[10][o[11]].caption+"",r;const a={c:function(){e=I("div"),r=Ce(t),y(e,"class","caption svelte-1wmsvjm"),C(e,N,208,4,5536)},m:function(l,c){O(l,e,c),D(e,r)},p:function(l,c){c[0]&3072&&t!==(t=l[10][l[11]].caption+"")&&Ne(r,t)},d:function(l){l&&V(e)}};return z("SvelteRegisterBlock",{block:a,id:ce.name,type:"if",source:"(179:3) {#if _value[selected_image].caption}",ctx:o}),a}function ae(o){let e,t,r,a,i,l,c=o[41],u,f;const _=()=>o[28](e,c),p=()=>o[28](null,c);function h(){return o[29](o[41])}const w={c:function(){e=I("button"),t=I("img"),l=L(),W(t.src,r=o[42].image.data)||y(t,"src",r),y(t,"title",a=o[42].caption||null),y(t,"alt",i=o[42].caption||null),y(t,"class","svelte-1wmsvjm"),C(t,N,224,6,5943),y(e,"class","thumbnail-item thumbnail-small svelte-1wmsvjm"),X(e,"selected",o[11]===o[41]),C(e,N,218,5,5765)},m:function(d,g){O(d,e,g),D(e,t),D(e,l),_(),u||(f=Y(e,"click",h,!1,!1,!1,!1),u=!0)},p:function(d,g){o=d,g[0]&1024&&!W(t.src,r=o[42].image.data)&&y(t,"src",r),g[0]&1024&&a!==(a=o[42].caption||null)&&y(t,"title",a),g[0]&1024&&i!==(i=o[42].caption||null)&&y(t,"alt",i),c!==o[41]&&(p(),c=o[41],_()),g[0]&2048&&X(e,"selected",o[11]===o[41])},d:function(d){d&&V(e),p(),u=!1,f()}};return z("SvelteRegisterBlock",{block:w,id:ae.name,type:"each",source:"(189:4) {#each _value as image, i}",ctx:o}),w}function ue(o){let e,t,r;t=new Xe({props:{value:o[10],formatter:Fe},$$inline:!0}),t.$on("share",o[31]),t.$on("error",o[32]);const a={c:function(){e=I("div"),A(t.$$.fragment),y(e,"class","icon-button svelte-1wmsvjm"),C(e,N,246,4,6431)},m:function(l,c){O(l,e,c),F(t,e,null),r=!0},p:function(l,c){const u={};c[0]&1024&&(u.value=l[10]),t.$set(u)},i:function(l){r||(P(t.$$.fragment,l),r=!0)},o:function(l){j(t.$$.fragment,l),r=!1},d:function(l){l&&V(e),M(t)}};return z("SvelteRegisterBlock",{block:a,id:ue.name,type:"if",source:"(217:3) {#if show_share_button}",ctx:o}),a}function fe(o){let e,t=o[39].caption+"",r;const a={c:function(){e=I("div"),r=Ce(t),y(e,"class","caption-label svelte-1wmsvjm"),C(e,N,266,6,6932)},m:function(l,c){O(l,e,c),D(e,r)},p:function(l,c){c[0]&1024&&t!==(t=l[39].caption+"")&&Ne(r,t)},d:function(l){l&&V(e)}};return z("SvelteRegisterBlock",{block:a,id:fe.name,type:"if",source:"(237:5) {#if entry.caption}",ctx:o}),a}function we(o){let e,t,r,a,i,l,c,u,f=o[39].caption&&fe(o);function _(){return o[33](o[41])}const p={c:function(){e=I("button"),t=I("img"),i=L(),f&&f.c(),l=L(),y(t,"alt",r=o[39].caption||""),W(t.src,a=typeof o[39].image=="string"?o[39].image:o[39].image.data)||y(t,"src",a),y(t,"class","svelte-1wmsvjm"),C(t,N,261,5,6779),y(e,"class","thumbnail-item thumbnail-lg svelte-1wmsvjm"),X(e,"selected",o[11]===o[41]),C(e,N,256,4,6633)},m:function(w,m){O(w,e,m),D(e,t),D(e,i),f&&f.m(e,null),D(e,l),c||(u=Y(e,"click",_,!1,!1,!1,!1),c=!0)},p:function(w,m){o=w,m[0]&1024&&r!==(r=o[39].caption||"")&&y(t,"alt",r),m[0]&1024&&!W(t.src,a=typeof o[39].image=="string"?o[39].image:o[39].image.data)&&y(t,"src",a),o[39].caption?f?f.p(o,m):(f=fe(o),f.c(),f.m(e,l)):f&&(f.d(1),f=null),m[0]&2048&&X(e,"selected",o[11]===o[41])},d:function(w){w&&V(e),f&&f.d(),c=!1,u()}};return z("SvelteRegisterBlock",{block:p,id:we.name,type:"each",source:"(227:3) {#each _value as entry, i}",ctx:o}),p}function Je(o){let e,t;e=new de({$$inline:!0});const r={c:function(){A(e.$$.fragment)},m:function(i,l){F(e,i,l),t=!0},i:function(i){t||(P(e.$$.fragment,i),t=!0)},o:function(i){j(e.$$.fragment,i),t=!1},d:function(i){M(e,i)}};return z("SvelteRegisterBlock",{block:r,id:Je.name,type:"slot",source:'(145:1) <Empty unpadded_box={true} size=\\"large\\">',ctx:o}),r}function he(o){let e,t,r,a,i,l,c;De(o[25]);let u=o[0]&&se(o);const f=[We,Ue],_=[];function p(w,m){return w[2]===null||w[10]===null||w[10].length===0?0:1}t=p(o),r=_[t]=f[t](o);const h={c:function(){u&&u.c(),e=L(),r.c(),a=ut()},l:function(m){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(m,d){u&&u.m(m,d),O(m,e,d),_[t].m(m,d),O(m,a,d),i=!0,l||(c=Y(Me,"resize",o[25]),l=!0)},p:function(m,d){m[0]?u?(u.p(m,d),d[0]&1&&P(u,1)):(u=se(m),u.c(),P(u,1),u.m(e.parentNode,e)):u&&(Z(),j(u,1,1,()=>{u=null}),x());let g=t;t=p(m),t===g?_[t].p(m,d):(Z(),j(_[g],1,1,()=>{_[g]=null}),x(),r=_[t],r?r.p(m,d):(r=_[t]=f[t](m),r.c()),P(r,1),r.m(a.parentNode,a))},i:function(m){i||(P(u),P(r),i=!0)},o:function(m){j(u),j(r),i=!1},d:function(m){m&&(V(e),V(a)),u&&u.d(m),_[t].d(m),l=!1,c()}};return z("SvelteRegisterBlock",{block:h,id:he.name,type:"component",source:"",ctx:o}),h}function Ke(o){return typeof o=="object"&&o!==null&&"data"in o}function _e(o){return Ke(o)?o.data:typeof o=="string"?o:""}function bt(o,e,t){let r,a,i;ct(le,"_"),at(o,le,n=>t(16,i=n));let{$$slots:l={},$$scope:c}=e;ze("Gallery",l,[]);let{show_label:u=!0}=e,{label:f}=e,{root:_=""}=e,{root_url:p=null}=e,{value:h=null}=e,{grid_cols:w=[2]}=e,{grid_rows:m=void 0}=e,{height:d="auto"}=e,{preview:g}=e,{allow_preview:E=!0}=e,{object_fit:R="cover"}=e,{show_share_button:S=!1}=e,{show_download_button:H=!1}=e;const B=ye();let b=!0,k=null,G=h,v=g&&h?.length?0:null,U=v;function J(n){const Q=n.target,oe=n.clientX,ne=Q.offsetWidth/2;oe<ne?t(11,v=r):t(11,v=a)}function $(n){switch(n.code){case"Escape":n.preventDefault(),t(11,v=null);break;case"ArrowLeft":n.preventDefault(),t(11,v=r);break;case"ArrowRight":n.preventDefault(),t(11,v=a);break}}let q=[],s;async function ge(n){if(typeof n!="number")return;await pe(),q[n].focus();const{left:Q,width:oe}=s.getBoundingClientRect(),{left:be,width:ne}=q[n].getBoundingClientRect(),ve=be-Q+ne/2-oe/2+s.scrollLeft;s?.scrollTo({left:ve<0?0:ve,behavior:"smooth"})}let K=0,ee=0;o.$$.on_mount.push(function(){f===void 0&&!("label"in e||o.$$.bound[o.$$.props.label])&&console.warn("<Gallery> was created without expected prop 'label'"),g===void 0&&!("preview"in e||o.$$.bound[o.$$.props.preview])&&console.warn("<Gallery> was created without expected prop 'preview'")});const Ze=["show_label","label","root","root_url","value","grid_cols","grid_rows","height","preview","allow_preview","object_fit","show_share_button","show_download_button"];Object.keys(e).forEach(n=>{!~Ze.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Gallery> was created with unknown prop '${n}'`)});function xe(){t(15,ee=Me.innerHeight)}const $e=()=>t(11,v=null),et=n=>J(n);function tt(n,Q){Ge[n?"unshift":"push"](()=>{q[Q]=n,t(12,q)})}const ot=n=>t(11,v=n);function nt(n){Ge[n?"unshift":"push"](()=>{s=n,t(13,s)})}function lt(n){ke.call(this,o,n)}function st(n){ke.call(this,o,n)}const rt=n=>t(11,v=n);function it(){K=this.clientHeight,t(14,K)}return o.$$set=n=>{"show_label"in n&&t(0,u=n.show_label),"label"in n&&t(1,f=n.label),"root"in n&&t(19,_=n.root),"root_url"in n&&t(20,p=n.root_url),"value"in n&&t(2,h=n.value),"grid_cols"in n&&t(3,w=n.grid_cols),"grid_rows"in n&&t(4,m=n.grid_rows),"height"in n&&t(5,d=n.height),"preview"in n&&t(21,g=n.preview),"allow_preview"in n&&t(6,E=n.allow_preview),"object_fit"in n&&t(7,R=n.object_fit),"show_share_button"in n&&t(8,S=n.show_share_button),"show_download_button"in n&&t(9,H=n.show_download_button)},o.$capture_state=()=>({BlockLabel:Ve,Empty:Te,ShareButton:Xe,ModifyUpload:qe,createEventDispatcher:ye,tick:pe,_:le,Download:Ae,Image:de,normalise_file:Ee,format_gallery_for_sharing:Fe,IconButton:Le,show_label:u,label:f,root:_,root_url:p,value:h,grid_cols:w,grid_rows:m,height:d,preview:g,allow_preview:E,object_fit:R,show_share_button:S,show_download_button:H,dispatch:B,was_reset:b,_value:k,prevValue:G,selected_image:v,old_selected_image:U,handle_preview_click:J,on_keydown:$,isFileData:Ke,getHrefValue:_e,el:q,container_element:s,scroll_to_img:ge,client_height:K,window_height:ee,next:a,previous:r,$_:i}),o.$inject_state=n=>{"show_label"in n&&t(0,u=n.show_label),"label"in n&&t(1,f=n.label),"root"in n&&t(19,_=n.root),"root_url"in n&&t(20,p=n.root_url),"value"in n&&t(2,h=n.value),"grid_cols"in n&&t(3,w=n.grid_cols),"grid_rows"in n&&t(4,m=n.grid_rows),"height"in n&&t(5,d=n.height),"preview"in n&&t(21,g=n.preview),"allow_preview"in n&&t(6,E=n.allow_preview),"object_fit"in n&&t(7,R=n.object_fit),"show_share_button"in n&&t(8,S=n.show_share_button),"show_download_button"in n&&t(9,H=n.show_download_button),"was_reset"in n&&t(22,b=n.was_reset),"_value"in n&&t(10,k=n._value),"prevValue"in n&&t(23,G=n.prevValue),"selected_image"in n&&t(11,v=n.selected_image),"old_selected_image"in n&&t(24,U=n.old_selected_image),"el"in n&&t(12,q=n.el),"container_element"in n&&t(13,s=n.container_element),"client_height"in n&&t(14,K=n.client_height),"window_height"in n&&t(15,ee=n.window_height),"next"in n&&(a=n.next),"previous"in n&&(r=n.previous)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty[0]&4194308&&t(22,b=h==null||h.length==0?!0:b),o.$$.dirty[0]&1572868&&t(10,k=h===null?null:h.map(n=>({image:Ee(n.image,_,p),caption:n.caption}))),o.$$.dirty[0]&14682116&&G!==h&&(b?(t(11,v=g&&h?.length?0:null),t(22,b=!1)):t(11,v=v!==null&&h!==null&&v<h.length?v:null),t(23,G=h)),o.$$.dirty[0]&3072&&(r=((v??0)+(k?.length??0)-1)%(k?.length??0)),o.$$.dirty[0]&3072&&(a=((v??0)+1)%(k?.length??0)),o.$$.dirty[0]&16780288&&v!==U&&(t(24,U=v),v!==null&&B("select",{index:v,value:k?.[v].caption})),o.$$.dirty[0]&2112&&E&&ge(v)},[u,f,h,w,m,d,E,R,S,H,k,v,q,s,K,ee,i,J,$,_,p,g,b,G,U,xe,$e,et,tt,ot,nt,lt,st,rt,it]}class Qe extends je{constructor(e){super(e),Be(this,e,bt,he,Re,{show_label:0,label:1,root:19,root_url:20,value:2,grid_cols:3,grid_rows:4,height:5,preview:21,allow_preview:6,object_fit:7,show_share_button:8,show_download_button:9},null,[-1,-1]),z("SvelteRegisterComponent",{component:this,tagName:"Gallery",options:e,id:he.name})}get show_label(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root_url(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root_url(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get grid_cols(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set grid_cols(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get grid_rows(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set grid_rows(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get height(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set height(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get preview(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set preview(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get allow_preview(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set allow_preview(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get object_fit(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set object_fit(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_share_button(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_share_button(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_download_button(){throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_download_button(e){throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function Ye(o){let e,t,r,a;const i=[o[0]];let l={};for(let u=0;u<i.length;u+=1)l=_t(l,i[u]);e=new He({props:l,$$inline:!0}),r=new Qe({props:{label:o[2],value:o[8],show_label:o[1],root:o[3],root_url:o[4],grid_cols:o[12],grid_rows:o[13],height:o[14],preview:o[15],object_fit:o[17],allow_preview:o[16],show_share_button:o[18],show_download_button:o[19]},$$inline:!0}),r.$on("select",o[21]),r.$on("share",o[22]),r.$on("error",o[23]);const c={c:function(){A(e.$$.fragment),t=L(),A(r.$$.fragment)},m:function(f,_){F(e,f,_),O(f,t,_),F(r,f,_),a=!0},p:function(f,_){const p=_&1?mt(i,[dt(f[0])]):{};e.$set(p);const h={};_&4&&(h.label=f[2]),_&256&&(h.value=f[8]),_&2&&(h.show_label=f[1]),_&8&&(h.root=f[3]),_&16&&(h.root_url=f[4]),_&4096&&(h.grid_cols=f[12]),_&8192&&(h.grid_rows=f[13]),_&16384&&(h.height=f[14]),_&32768&&(h.preview=f[15]),_&131072&&(h.object_fit=f[17]),_&65536&&(h.allow_preview=f[16]),_&262144&&(h.show_share_button=f[18]),_&524288&&(h.show_download_button=f[19]),r.$set(h)},i:function(f){a||(P(e.$$.fragment,f),P(r.$$.fragment,f),a=!0)},o:function(f){j(e.$$.fragment,f),j(r.$$.fragment,f),a=!1},d:function(f){f&&V(t),M(e,f),M(r,f)}};return z("SvelteRegisterBlock",{block:c,id:Ye.name,type:"slot",source:'(27:0) <Block  {visible}  variant=\\"solid\\"  padding={false}  {elem_id}  {elem_classes}  {container}  {scale}  {min_width}  allow_overflow={false}  height={typeof height === \\"number\\" ? height : undefined} >',ctx:o}),c}function me(o){let e,t;e=new Oe({props:{visible:o[7],variant:"solid",padding:!1,elem_id:o[5],elem_classes:o[6],container:o[9],scale:o[10],min_width:o[11],allow_overflow:!1,height:typeof o[14]=="number"?o[14]:void 0,$$slots:{default:[Ye]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){A(e.$$.fragment)},l:function(i){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(i,l){F(e,i,l),t=!0},p:function(i,[l]){const c={};l&128&&(c.visible=i[7]),l&32&&(c.elem_id=i[5]),l&64&&(c.elem_classes=i[6]),l&512&&(c.container=i[9]),l&1024&&(c.scale=i[10]),l&2048&&(c.min_width=i[11]),l&16384&&(c.height=typeof i[14]=="number"?i[14]:void 0),l&18870559&&(c.$$scope={dirty:l,ctx:i}),e.$set(c)},i:function(i){t||(P(e.$$.fragment,i),t=!0)},o:function(i){j(e.$$.fragment,i),t=!1},d:function(i){M(e,i)}};return z("SvelteRegisterBlock",{block:r,id:me.name,type:"component",source:"",ctx:o}),r}function vt(o,e,t){let{$$slots:r={},$$scope:a}=e;ze("StaticGallery",r,[]);let{loading_status:i}=e,{show_label:l}=e,{label:c}=e,{root:u}=e,{root_url:f}=e,{elem_id:_=""}=e,{elem_classes:p=[]}=e,{visible:h=!0}=e,{value:w=null}=e,{container:m=!0}=e,{scale:d=null}=e,{min_width:g=void 0}=e,{grid_cols:E=[2]}=e,{grid_rows:R=void 0}=e,{height:S="auto"}=e,{preview:H}=e,{allow_preview:B=!0}=e,{object_fit:b="cover"}=e,{show_share_button:k=!1}=e,{show_download_button:G=!1}=e,{gradio:v}=e;o.$$.on_mount.push(function(){i===void 0&&!("loading_status"in e||o.$$.bound[o.$$.props.loading_status])&&console.warn("<StaticGallery> was created without expected prop 'loading_status'"),l===void 0&&!("show_label"in e||o.$$.bound[o.$$.props.show_label])&&console.warn("<StaticGallery> was created without expected prop 'show_label'"),c===void 0&&!("label"in e||o.$$.bound[o.$$.props.label])&&console.warn("<StaticGallery> was created without expected prop 'label'"),u===void 0&&!("root"in e||o.$$.bound[o.$$.props.root])&&console.warn("<StaticGallery> was created without expected prop 'root'"),f===void 0&&!("root_url"in e||o.$$.bound[o.$$.props.root_url])&&console.warn("<StaticGallery> was created without expected prop 'root_url'"),H===void 0&&!("preview"in e||o.$$.bound[o.$$.props.preview])&&console.warn("<StaticGallery> was created without expected prop 'preview'"),v===void 0&&!("gradio"in e||o.$$.bound[o.$$.props.gradio])&&console.warn("<StaticGallery> was created without expected prop 'gradio'")});const U=["loading_status","show_label","label","root","root_url","elem_id","elem_classes","visible","value","container","scale","min_width","grid_cols","grid_rows","height","preview","allow_preview","object_fit","show_share_button","show_download_button","gradio"];Object.keys(e).forEach(s=>{!~U.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<StaticGallery> was created with unknown prop '${s}'`)});const J=s=>v.dispatch("select",s.detail),$=s=>v.dispatch("share",s.detail),q=s=>v.dispatch("error",s.detail);return o.$$set=s=>{"loading_status"in s&&t(0,i=s.loading_status),"show_label"in s&&t(1,l=s.show_label),"label"in s&&t(2,c=s.label),"root"in s&&t(3,u=s.root),"root_url"in s&&t(4,f=s.root_url),"elem_id"in s&&t(5,_=s.elem_id),"elem_classes"in s&&t(6,p=s.elem_classes),"visible"in s&&t(7,h=s.visible),"value"in s&&t(8,w=s.value),"container"in s&&t(9,m=s.container),"scale"in s&&t(10,d=s.scale),"min_width"in s&&t(11,g=s.min_width),"grid_cols"in s&&t(12,E=s.grid_cols),"grid_rows"in s&&t(13,R=s.grid_rows),"height"in s&&t(14,S=s.height),"preview"in s&&t(15,H=s.preview),"allow_preview"in s&&t(16,B=s.allow_preview),"object_fit"in s&&t(17,b=s.object_fit),"show_share_button"in s&&t(18,k=s.show_share_button),"show_download_button"in s&&t(19,G=s.show_download_button),"gradio"in s&&t(20,v=s.gradio)},o.$capture_state=()=>({Block:Oe,Gallery:Qe,StatusTracker:He,loading_status:i,show_label:l,label:c,root:u,root_url:f,elem_id:_,elem_classes:p,visible:h,value:w,container:m,scale:d,min_width:g,grid_cols:E,grid_rows:R,height:S,preview:H,allow_preview:B,object_fit:b,show_share_button:k,show_download_button:G,gradio:v}),o.$inject_state=s=>{"loading_status"in s&&t(0,i=s.loading_status),"show_label"in s&&t(1,l=s.show_label),"label"in s&&t(2,c=s.label),"root"in s&&t(3,u=s.root),"root_url"in s&&t(4,f=s.root_url),"elem_id"in s&&t(5,_=s.elem_id),"elem_classes"in s&&t(6,p=s.elem_classes),"visible"in s&&t(7,h=s.visible),"value"in s&&t(8,w=s.value),"container"in s&&t(9,m=s.container),"scale"in s&&t(10,d=s.scale),"min_width"in s&&t(11,g=s.min_width),"grid_cols"in s&&t(12,E=s.grid_cols),"grid_rows"in s&&t(13,R=s.grid_rows),"height"in s&&t(14,S=s.height),"preview"in s&&t(15,H=s.preview),"allow_preview"in s&&t(16,B=s.allow_preview),"object_fit"in s&&t(17,b=s.object_fit),"show_share_button"in s&&t(18,k=s.show_share_button),"show_download_button"in s&&t(19,G=s.show_download_button),"gradio"in s&&t(20,v=s.gradio)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[i,l,c,u,f,_,p,h,w,m,d,g,E,R,S,H,B,b,k,G,v,J,$,q]}class yt extends je{constructor(e){super(e),Be(this,e,vt,me,Re,{loading_status:0,show_label:1,label:2,root:3,root_url:4,elem_id:5,elem_classes:6,visible:7,value:8,container:9,scale:10,min_width:11,grid_cols:12,grid_rows:13,height:14,preview:15,allow_preview:16,object_fit:17,show_share_button:18,show_download_button:19,gradio:20}),z("SvelteRegisterComponent",{component:this,tagName:"StaticGallery",options:e,id:me.name})}get loading_status(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set loading_status(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root_url(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root_url(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_id(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get container(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set container(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get grid_cols(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set grid_cols(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get grid_rows(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set grid_rows(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get height(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set height(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get preview(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set preview(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get allow_preview(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set allow_preview(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get object_fit(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set object_fit(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_share_button(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_share_button(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_download_button(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_download_button(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gradio(){throw new Error("<StaticGallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gradio(e){throw new Error("<StaticGallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Ct=yt;export{Ct as default};
//# sourceMappingURL=index-62f61952.js.map