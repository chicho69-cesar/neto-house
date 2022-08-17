(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const l=()=>[{id:1,title:"Aseo de la Cocina",text:`Hacer el aseo de la cocina, barrer, trapear, 
            limpiar la estufa. Barrer el patio y sacar la 
            basura al contenedor.`},{id:2,title:"Aseo del ba\xF1o A",text:`Realizar el aseo del ba\xF1o de arriba, limpiar, 
            sacar los papeles, lavar la tasa y limpiar regadera
            y lavamanos.`},{id:3,title:"Aseo del ba\xF1o B",text:`Realizar el aseo del primer ba\xF1o de abajo, limpiar, 
            sacar los papeles, lavar la tasa y limpiar regadera
            y lavamanos.`},{id:4,title:"Aseo del ba\xF1o C",text:`Realizar el aseo del segundo ba\xF1o de abajo, limpiar, 
            sacar los papeles, lavar la tasa y limpiar regadera
            y lavamanos.`}],n=()=>`
        <main class="w-4/5 sm:w-2/3 mx-auto my-8 grid grid-cols-1 gap-8
        lg:grid-cols-2 pb-8">
            ${l().reduce((a,s)=>(a+=`
            <article class="${s.id} bg-tahiti-200 p-4 rounded-lg shadow-md
            shadow-tahiti-600 dark:bg-tahiti-600 dark:shadow-lg dark:shadow-zinc-900
            transform hover:-translate-y-1 hover:shadow-none dark:hover:shadow-none hover:cursor-pointer 
            transition-all flex flex-col gap-2 justify-between flex-nowrap items-start">
                <h2 class="${s.id} text-2xl font-medium font-sans text-tahiti-900
                dark:text-gray-100">
                    ${s.title}
                </h2>

                <p class="${s.id} text-base text-tahiti-700 dark:text-gray-300 italic">
                    Tareas a realizar: 
                </p>

                <p class="${s.id} text-base leading-5 md:text-lg md:leading-6
                text-tahiti-900 dark:text-gray-100 font-[450]">
                    ${s.text}
                </p>
            </article>
        `,a),"")}
        </main>
    `,d=()=>`
        <header class="py-6">
            <div class="flex flex-row items-center justify-between 
            w-4/5 sm:w-2/3 mx-auto gap-4">
                <section class="w-1/2 flex flex-row items-center justify-start">
                    <h1 class="text-tahiti-800 dark:text-tahiti-100 text-3xl
                    font-sans font-medium hover:cursor-pointer hover:text-tahiti-600
                    hover:dark:text-tahiti-200 transition-colors" id="logo">
                        Neto's House
                    </h1>
                </section>

                <section class="w-1/2 text-right flex flex-row items-center justify-end">
                    <button class="py-2 px-4 bg-tahiti-200 text-lg text-tahiti-900
                    rounded-full shadow-md hover:shadow-none shadow-tahiti-600 font-medium
                    dark:bg-tahiti-600 dark:text-gray-100 transform hover:-translate-y-[1.5px]
                    dark:shadow-zinc-900 hover:dark:shadow-none transition-all"
                    id="message">
                        Que onda
                    </button>
                </section>
            </div>
        </header>
    `,c=()=>`
        ${d()} 
        ${n()}
    `,m=t=>{console.log(t),console.log("Que onda"),alert("Aun no implemento esto \u{1F625}")},u=t=>t.reduce((o,a)=>o+`
            <article class="bg-tahiti-200 p-4 rounded-lg 
            dark:bg-tahiti-600 transform md:hover:scale-125 sm:hover:scale-110
            hover:scale-105 hover:shadow-lg hover:z-10 transition-all
            flex flex-col gap-2 justify-between flex-nowrap items-start">
                <h2 class="text-2xl font-medium font-sans w-full text-center
                text-tahiti-900 dark:text-gray-100">
                    ${a.member}
                </h2>

                <div class="w-full flex flex-row flex-nowrap justify-around
                items-center py-2 gap-3 md:gap-8 text-center">
                    <section>
                        <p class="text-lg md:text-xl font-[450] font-sans">
                            Fecha optima: \u{1F60E}
                        </p>

                        <p class="font-sans italic text-green-800 text-base md:text-lg">
                            ${a.day}
                        </p>
                    </section>

                    <section>
                        <p class="text-lg md:text-xl font-[450] font-sans">
                            Fecha limite: \u{1F636}
                        </p>

                        <p class="font-sans italic text-red-800 text-base md:text-lg">
                            ${a.limitDay}
                        </p>
                    </section>
                </div>
            </article>
        `,""),p=()=>[{member:"Luis Ernesto",day:"22/Agosto/2022",limitDay:"23/Agosto/2022"},{member:"Gabriel",day:"24/Agosto/2022",limitDay:"25/Agosto/2022"},{member:"Diego",day:"26/Agosto/2022",limitDay:"27/Agosto/2022"},{member:"Francisco",day:"29/Agosto/2022",limitDay:"30/Agosto/2022"},{member:"Brian",day:"31/Agosto/2022",limitDay:"01/Sept/2022"},{member:"Oliver",day:"02/Sept/2022",limitDay:"03/Sept/2022"},{member:"Jose",day:"05/Sept/2022",limitDay:"06/Sept/2022"},{member:"Andres",day:"07/Sept/2022",limitDay:"08/Sept/2022"},{member:"Adrian",day:"09/Sept/2022",limitDay:"10/Sept/2022"},{member:"Cesar",day:"13/Sept/2022",limitDay:"14/Sept/2022"},{member:"Samuel",day:"15/Sept/2022",limitDay:"16/Sept/2022"}],f=t=>{let o=+t.classList[0];const a=document.querySelector("main");o===1?a.innerHTML=u(p()):a.innerHTML=`
            <section class="col-start-1 col-end-3 w-full text-center py-8">
                <h1 class="text-3xl text-red-500">
                    A\xFAn no se que onda con los ba\xF1os \u{1F625}\u{1F919}
                </h1>
            </section>
        `};document.querySelector("#app").innerHTML=c();document.querySelector("#message").addEventListener("click",t=>{m(t.target)});document.querySelectorAll("article").forEach(t=>{t.addEventListener("click",o=>{f(o.target)})});document.body.onload=function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.classList.replace("light","dark"),document.querySelector("#logo").addEventListener("click",()=>{location.reload()})};
