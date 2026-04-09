import{d as e,p as t,u as n}from"./createLucideIcon-C5DqQxtk.js";import{t as r}from"./chevron-down-Wnz0i8t1.js";var i=t(e(),1),a=n(),o=(0,i.forwardRef)(({label:e,error:t,icon:n,helperText:r,className:i=``,id:o,...s},c)=>{let l=o||`input-${e?.toLowerCase().replace(/\s+/g,`-`)}`;return(0,a.jsxs)(`div`,{className:`space-y-1.5 ${i}`,children:[e&&(0,a.jsx)(`label`,{htmlFor:l,className:`block text-sm font-semibold text-slate-700`,children:e}),(0,a.jsxs)(`div`,{className:`relative`,children:[n&&(0,a.jsx)(`div`,{className:`absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`,children:(0,a.jsx)(n,{className:`w-4 h-4`})}),(0,a.jsx)(`input`,{ref:c,id:l,className:`
            w-full px-4 py-3 rounded-xl border bg-white text-slate-800
            placeholder:text-slate-400
            transition-all duration-200
            focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none
            ${n?`pl-10`:``}
            ${t?`border-rose-300 focus:ring-rose-500/20 focus:border-rose-500`:`border-slate-200 hover:border-slate-300`}
          `,...s})]}),t&&(0,a.jsx)(`p`,{className:`text-xs text-rose-500 font-medium`,children:t}),r&&!t&&(0,a.jsx)(`p`,{className:`text-xs text-slate-400`,children:r})]})});o.displayName=`Input`;var s=(0,i.forwardRef)(({label:e,error:t,icon:n,options:i=[],placeholder:o=`Select an option`,className:s=``,id:c,...l},u)=>{let d=c||`select-${e?.toLowerCase().replace(/\s+/g,`-`)}`;return(0,a.jsxs)(`div`,{className:`space-y-1.5 ${s}`,children:[e&&(0,a.jsx)(`label`,{htmlFor:d,className:`block text-sm font-semibold text-slate-700`,children:e}),(0,a.jsxs)(`div`,{className:`relative`,children:[n&&(0,a.jsx)(`div`,{className:`absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`,children:(0,a.jsx)(n,{className:`w-4 h-4`})}),(0,a.jsxs)(`select`,{ref:u,id:d,className:`
            w-full px-4 py-3 rounded-xl border bg-white text-slate-800
            appearance-none cursor-pointer
            transition-all duration-200
            focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none
            ${n?`pl-10`:``}
            ${t?`border-rose-300 focus:ring-rose-500/20 focus:border-rose-500`:`border-slate-200 hover:border-slate-300`}
          `,...l,children:[(0,a.jsx)(`option`,{value:``,disabled:!0,children:o}),i.map(e=>typeof e==`string`?(0,a.jsx)(`option`,{value:e,children:e},e):(0,a.jsx)(`option`,{value:e.value,children:e.label},e.value))]}),(0,a.jsx)(`div`,{className:`absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`,children:(0,a.jsx)(r,{className:`w-4 h-4`})})]}),t&&(0,a.jsx)(`p`,{className:`text-xs text-rose-500 font-medium`,children:t})]})});s.displayName=`Select`;export{o as n,s as t};