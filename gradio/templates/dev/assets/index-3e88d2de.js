import{SvelteComponentDev as b,init as g,safe_not_equal as G,dispatch_dev as w,create_slot as y,validate_slots as j,element as f,attr_dev as m,set_style as d,add_location as p,toggle_class as h,insert_dev as E,append_dev as P,update_slot_base as k,get_all_dirty_from_scope as S,get_slot_changes as C,transition_in as O,transition_out as R,detach_dev as q}from"../../../node/dev/svelte-internal.js";import"./index-168e7816.js";const v="Users/peterallen/Projects/gradio/js/group/static/Group.svelte";function _(n){let t,s,c,i;const l=n[4].default,o=y(l,n,n[3],null),a={c:function(){t=f("div"),s=f("div"),o&&o.c(),m(s,"class","styler svelte-11xc5rw"),d(s,"--block-radius","0px"),d(s,"--block-border-width","0px"),d(s,"--layout-gap","1px"),d(s,"--form-gap-width","1px"),d(s,"--button-border-width","0px"),d(s,"--button-large-radius","0px"),d(s,"--button-small-radius","0px"),p(s,v,11,1,199),m(t,"id",n[0]),m(t,"class",c="gr-group "+n[1].join(" ")+" svelte-11xc5rw"),h(t,"hide",!n[2]),p(t,v,6,0,111)},l:function(e){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(e,u){E(e,t,u),P(t,s),o&&o.m(s,null),i=!0},p:function(e,[u]){o&&o.p&&(!i||u&8)&&k(o,l,e,e[3],i?C(l,e[3],u,null):S(e[3]),null),(!i||u&1)&&m(t,"id",e[0]),(!i||u&2&&c!==(c="gr-group "+e[1].join(" ")+" svelte-11xc5rw"))&&m(t,"class",c),(!i||u&6)&&h(t,"hide",!e[2])},i:function(e){i||(O(o,e),i=!0)},o:function(e){R(o,e),i=!1},d:function(e){e&&q(t),o&&o.d(e)}};return w("SvelteRegisterBlock",{block:a,id:_.name,type:"component",source:"",ctx:n}),a}function x(n,t,s){let{$$slots:c={},$$scope:i}=t;j("Group",c,["default"]);let{elem_id:l=""}=t,{elem_classes:o=[]}=t,{visible:a=!0}=t;const r=["elem_id","elem_classes","visible"];return Object.keys(t).forEach(e=>{!~r.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Group> was created with unknown prop '${e}'`)}),n.$$set=e=>{"elem_id"in e&&s(0,l=e.elem_id),"elem_classes"in e&&s(1,o=e.elem_classes),"visible"in e&&s(2,a=e.visible),"$$scope"in e&&s(3,i=e.$$scope)},n.$capture_state=()=>({elem_id:l,elem_classes:o,visible:a}),n.$inject_state=e=>{"elem_id"in e&&s(0,l=e.elem_id),"elem_classes"in e&&s(1,o=e.elem_classes),"visible"in e&&s(2,a=e.visible)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[l,o,a,i,c]}class B extends b{constructor(t){super(t),g(this,t,x,_,G,{elem_id:0,elem_classes:1,visible:2}),w("SvelteRegisterComponent",{component:this,tagName:"Group",options:t,id:_.name})}get elem_id(){throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(t){throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(t){throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(t){throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const U=B;export{U as default};
//# sourceMappingURL=index-3e88d2de.js.map