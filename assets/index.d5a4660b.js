(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const c=()=>`
        <header class="py-6">
            <div class="flex flex-row items-center justify-between 
            w-4/5 sm:w-2/3 mx-auto gap-4">
                <section class="w-1/2 flex flex-row items-center justify-start">
                    <a href="https://chicho69-cesar.github.io/neto-house/" class="text-tahiti-800 dark:text-tahiti-100 text-3xl
                    font-sans font-medium hover:cursor-pointer hover:text-tahiti-600
                    hover:dark:text-tahiti-200 transition-colors" id="logo">
                        Neto's House
                    </a>
                </section>

                <section class="w-1/2 text-right flex flex-row items-center justify-end">
                    <button class="py-2 px-4 bg-tahiti-200 text-lg text-tahiti-900
                    rounded-full shadow-md hover:shadow-none shadow-tahiti-600 font-medium
                    dark:bg-tahiti-600 dark:text-gray-100 transform hover:-translate-y-[1.5px]
                    dark:shadow-zinc-900 hover:dark:shadow-none transition-all"
                    id="open-modal">
                        Que onda
                    </button>
                </section>
            </div>
        </header>
    `,m=()=>[{id:1,title:"Aseo de la Cocina",text:`Hacer el aseo de la cocina, barrer, trapear, 
            limpiar la estufa. Barrer el patio y sacar la 
            basura al contenedor.`},{id:2,title:"Aseo del ba\xF1o A",text:`Realizar el aseo del ba\xF1o de arriba, limpiar, 
            sacar los papeles, lavar la tasa y limpiar regadera
            y lavamanos.`},{id:3,title:"Aseo del ba\xF1o B",text:`Realizar el aseo del primer ba\xF1o de abajo, limpiar, 
            sacar los papeles, lavar la tasa y limpiar regadera
            y lavamanos.`},{id:4,title:"Aseo del ba\xF1o C",text:`Realizar el aseo del segundo ba\xF1o de abajo, limpiar, 
            sacar los papeles, lavar la tasa y limpiar regadera
            y lavamanos.`}],u=()=>`
        <main class="w-4/5 sm:w-2/3 mx-auto my-8 grid grid-cols-1 gap-8
        lg:grid-cols-2 pb-8">
            ${m().reduce((s,r)=>(s+=`
            <article class="${r.id} bg-tahiti-200 p-4 rounded-lg shadow-md
            shadow-tahiti-600 dark:bg-tahiti-600 dark:shadow-lg dark:shadow-zinc-900
            transform hover:-translate-y-1 hover:shadow-none dark:hover:shadow-none hover:cursor-pointer 
            transition-all flex flex-col gap-2 justify-between flex-nowrap items-start">
                <h2 class="${r.id} text-2xl font-medium font-sans text-tahiti-900
                dark:text-gray-100">
                    ${r.title}
                </h2>

                <p class="${r.id} text-base text-tahiti-700 dark:text-gray-300 italic">
                    Tareas a realizar: 
                </p>

                <p class="${r.id} text-base leading-5 md:text-lg md:leading-6
                text-tahiti-900 dark:text-gray-100 font-[450]">
                    ${r.text}
                </p>
            </article>
        `,s),"")}
        </main>
    `,n=()=>[{member:"Luis Ernesto",day:"22/Agosto/2022",limitDay:"23/Agosto/2022"},{member:"Gabriel",day:"24/Agosto/2022",limitDay:"25/Agosto/2022"},{member:"Diego",day:"26/Agosto/2022",limitDay:"27/Agosto/2022"},{member:"Francisco",day:"29/Agosto/2022",limitDay:"30/Agosto/2022"},{member:"Brian",day:"31/Agosto/2022",limitDay:"01/Sept/2022"},{member:"Oliver",day:"02/Sept/2022",limitDay:"03/Sept/2022"},{member:"Jose",day:"05/Sept/2022",limitDay:"06/Sept/2022"},{member:"Andres",day:"07/Sept/2022",limitDay:"08/Sept/2022"},{member:"Adrian",day:"09/Sept/2022",limitDay:"10/Sept/2022"},{member:"Cesar",day:"13/Sept/2022",limitDay:"14/Sept/2022"},{member:"Samuel",day:"15/Sept/2022",limitDay:"16/Sept/2022"}],f=()=>{const a=new Date(Date.now());let o=a.getDate(),s=a.getMonth(),r=a.getFullYear();const t=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Sept","Octubre","Nov","Dic"];let e="";e=o<10?`0${o}`:`${o}`,e=`${e}/${t[s]}`,e=`${e}/${r}`;for(let i of n())if(i.day===e||i.limitDay===e)return{title:"El aseo de hoy le toca a",person:i.member,band:!0};return{title:"El aseo de hoy no le toca a",person:"Nadie",band:!1}},p=()=>{let a=f();return`
        <div id="modal-component-container" class="fixed inset-0 hidden">
            <div class="modal-flex-container flex items-end justify-center 
            min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75"></div>
                
                <div class="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen"></div>

                <div class="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
                w-full mx-auto
                shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg" id="modal-container">
                    <div class="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="modal-wrapper-flex sm:flex sm:items-start">
                            <div class="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100
                            sm:mx-0 sm:h-12 sm:w-12 text-3xl overflow-hidden">
                                \u{1F975}
                            </div>
                            
                            <div class="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-3xl font-medium text-gray-900">El aseo de hoy</h3>
                                
                                <div class="modal-text mt-2">
                                    <p class="text-gray-600 text-lg">
                                        ${a.title} 
                                        <span class="italic ${a.band?"text-gray-700":"text-red-700"} 
                                        text-xl font-medium">
                                            ${a.person}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button class="bg-red-700 text-gray-100 hover:bg-red-600
                        mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 
                        shadow-gray-500 transition-all hover:shadow-none
                        font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto 
                        sm:text-base" id="close-modal">
                            Cerrar \u{1F97A}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `},x=()=>`
        ${c()} 
        ${u()} 
        ${p()}
    `,h=()=>{const a=document.querySelector("#close-modal"),o=document.querySelector("#modal-component-container"),s=document.querySelector("#modal-container");r(),a.addEventListener("click",()=>{t()});function r(){e(o,["block","animate-bg-fadeIn"],["hidden","animate-bg-fadeOut"]),e(s,["animate-modal-scaleIn"],["animate-modal-scaleOut"])}function t(){e(o,["animate-bg-fadeOut"],["animate-bg-fadeIn"]),e(s,["animate-modal-scaleOut"],["animate-modal-scaleIn"]),setTimeout(()=>{e(o,["hidden"],["block"])},500)}function e(i,l,d){i.classList.remove(...d),i.classList.add(...l)}},g=a=>a.reduce((o,s)=>o+`
            <article class="bg-tahiti-200 p-4 rounded-lg 
            dark:bg-tahiti-600 transform md:hover:scale-125 sm:hover:scale-110
            hover:scale-105 hover:shadow-lg hover:z-10 transition-all
            flex flex-col gap-2 justify-between flex-nowrap items-start">
                <h2 class="text-2xl font-medium font-sans w-full text-center
                text-tahiti-900 dark:text-gray-100">
                    ${s.member}
                </h2>

                <div class="w-full flex flex-row flex-nowrap justify-around
                items-center py-2 gap-3 md:gap-8 text-center">
                    <section>
                        <p class="text-lg md:text-xl font-[450] font-sans">
                            Fecha optima: \u{1F60E}
                        </p>

                        <p class="font-sans italic text-green-800 text-base md:text-lg">
                            ${s.day}
                        </p>
                    </section>

                    <section>
                        <p class="text-lg md:text-xl font-[450] font-sans">
                            Fecha limite: \u{1F636}
                        </p>

                        <p class="font-sans italic text-red-800 text-base md:text-lg">
                            ${s.limitDay}
                        </p>
                    </section>
                </div>
            </article>
        `,""),y=a=>{let o=+a.classList[0];const s=document.querySelector("main");o===1?s.innerHTML=g(n()):s.innerHTML=`
            <section class="col-start-1 col-end-3 w-full text-center py-8">
                <h1 class="text-3xl text-red-500">
                    A\xFAn no se que onda con los ba\xF1os \u{1F625}\u{1F919}
                </h1>
            </section>
        `};document.querySelector("#app").innerHTML=x();document.querySelector("#open-modal").addEventListener("click",()=>{h()});document.querySelectorAll("article").forEach(a=>{a.addEventListener("click",o=>{y(o.target)})});document.body.onload=function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.replace("light","dark")};
