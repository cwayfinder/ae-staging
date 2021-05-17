function e(e,n){return new CustomEvent(e,{detail:n,bubbles:!0,composed:!0})}function n(e,n){return e.reduce(((e,t)=>e.then((()=>n(t)))),Promise.resolve())}export{e as c,n as s};
