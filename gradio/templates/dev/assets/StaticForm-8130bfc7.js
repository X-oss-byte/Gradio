import{SvelteComponentDev as h,init as _,safe_not_equal as w,dispatch_dev as d,create_slot as v,validate_slots as b,element as g,attr_dev as p,toggle_class as f,set_style as m,add_location as S,insert_dev as F,update_slot_base as y,get_all_dirty_from_scope as E,get_slot_changes as j,transition_in as P,transition_out as k,detach_dev as C}from"../../../node/dev/svelte-internal.js";import"./index-168e7816.js";const O="Users/peterallen/Projects/gradio/js/form/static/StaticForm.svelte";function u(s){let e,i;const a=s[4].default,o=v(a,s,s[3],null),l={c:function(){e=g("div"),o&&o.c(),p(e,"class","form svelte-bhuik6"),f(e,"hidden",!s[0]),m(e,"flex-grow",s[1]),m(e,"min-width",`calc(min(${s[2]}px, 100%))`),S(e,O,6,0,107)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,r){F(t,e,r),o&&o.m(e,null),i=!0},p:function(t,[r]){o&&o.p&&(!i||r&8)&&y(o,a,t,t[3],i?j(a,t[3],r,null):E(t[3]),null),(!i||r&1)&&f(e,"hidden",!t[0]),r&2&&m(e,"flex-grow",t[1]),r&4&&m(e,"min-width",`calc(min(${t[2]}px, 100%))`)},i:function(t){i||(P(o,t),i=!0)},o:function(t){k(o,t),i=!1},d:function(t){t&&C(e),o&&o.d(t)}};return d("SvelteRegisterBlock",{block:l,id:u.name,type:"component",source:"",ctx:s}),l}function R(s,e,i){let{$$slots:a={},$$scope:o}=e;b("StaticForm",a,["default"]);let{visible:l=!0}=e,{scale:c=null}=e,{min_width:t=0}=e;const r=["visible","scale","min_width"];return Object.keys(e).forEach(n=>{!~r.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<StaticForm> was created with unknown prop '${n}'`)}),s.$$set=n=>{"visible"in n&&i(0,l=n.visible),"scale"in n&&i(1,c=n.scale),"min_width"in n&&i(2,t=n.min_width),"$$scope"in n&&i(3,o=n.$$scope)},s.$capture_state=()=>({visible:l,scale:c,min_width:t}),s.$inject_state=n=>{"visible"in n&&i(0,l=n.visible),"scale"in n&&i(1,c=n.scale),"min_width"in n&&i(2,t=n.min_width)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),[l,c,t,o,a]}class D extends h{constructor(e){super(e),_(this,e,R,u,w,{visible:0,scale:1,min_width:2}),d("SvelteRegisterComponent",{component:this,tagName:"StaticForm",options:e,id:u.name})}get visible(){throw new Error("<StaticForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(e){throw new Error("<StaticForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<StaticForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(e){throw new Error("<StaticForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<StaticForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(e){throw new Error("<StaticForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{D as S};
//# sourceMappingURL=StaticForm-8130bfc7.js.map