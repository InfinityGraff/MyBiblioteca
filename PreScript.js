// Dia 22/03/2025
// Dia 28/06/2025 (HexRGB)
// Dia 13/07/2025 (UpperCase) (Novas Funcs) (ExtraClass)
// Dia 03/08/2025 (Trazendo o templates.js)

function CSS_Prop(e,Obj){
  Object.assign(e.style,{
      background: Obj.Bk,
      zIndex:     Obj.Z,
      height:     Obj.H,
      width:      Obj.W,
      top:        Obj.T,
      left:       Obj.L,
      bottom:     Obj.B,
      right:      Obj.R,
  })
}

function VV_CSS(Srg){
  const map = {H:'height', W:'width', T:'top', L:'left', B:'bottom', R:'right', Z:'zIndex', Bk:'background', O:'opacity', Fz:'font-size', Cor:'color'}
  Srg = Array.isArray(Srg) ? Srg : [Srg]
  return Srg.map(s=>{const [k,v] = s.split(":") ; return map[k] ? `${map[k]}:${v}`:''}).filter(Boolean).join(";")
}

// Tentar remover essas 2, estão Inúteis
//Retornos DOM Novos________________________________________________________________________________________________________________
function S(s,c=document){
  const E = typeof s==='string'? c.querySelector(s) : s
  return {E:[E],
    css(p,v){if(E) E.style[p]=v!==undefined?v:E.style[p];return this},
    CSS(Obj){if (E) CSS_Prop(E,Obj) ; return this},
    Val() { return E ? E.value : undefined },
    Inner() { return E ? E.innerHTML : undefined },
    Inn(Stg){E.innerHTML = Stg},
    None(){ if(E) E.style.display='none'; return this },
    Show(){ if(E) E.style.display='flex'; return this },
    EShow(){ return E&&window.getComputedStyle(E).display!=='none' },
    ENone(){ return E&&window.getComputedStyle(E).display==='none' },
    Coten(Stg){ return E&&E.classList.contains(Stg) },
    Notem(Stg){ return E&&!E.classList.contains(Stg) },
    Add(Stg){ if(E) E.classList.add(Stg); return this },
    Rmv(Stg){ if(E) E.classList.remove(Stg); return this },
    Tog(Stg){ if(E) E.classList.toggle(Stg); return this },
    Trc(R,A){ this.Rmv(R).Add(A); return this },
    Toc(R,A){ this.Tog(R).Tog(A); return this },
    Cll(){if(E) E.className=''; return this },
  }
}
function SS(s,c){
  const E=(c||document).querySelectorAll(s)
  return {E,
    css(p,v){E.forEach(el=>el.style[p]=v!==undefined?v:el.style[p]);return this},
    Val(){return Array.from(E).map(e => e.value)},
    Inn(){return Array.from(E).map(e => e.innerHTML)},
    None(){ return this.css('display','none') },
    Show(){ return this.css('display','flex') },
    EShow(){ return Array.from(E).every(e=>window.getComputedStyle(e).display!=='none') },
    ENone(){ return Array.from(E).every(e=>window.getComputedStyle(e).display==='none') },
    Coten(Stg){ return Array.from(E).some(e=>e.classList.contains(Stg)) },
    Notem(Stg){ return Array.from(E).every(e=>!e.classList.contains(Stg)) },
    Add(Stg){ E.forEach(el=>el.classList.add(Stg)); return this },
    Rmv(Stg){ E.forEach(el=>el.classList.remove(Stg)); return this },
    Tog(Stg){ E.forEach(el=>el.classList.toggle(Stg)); return this },
    Trc(R,A){ this.Rmv(R).Add(A); return this },
    Toc(R,A){ this.Tog(R).Tog(A); return this },
    Cll(){E.forEach(e=>e.className=''); return this } 

  }
}

// tem q da uma Ajeitadinha pra melhorar, e ter certeza se tudo Funciona
const Insert=e=>({ // Como Chamar a função: Insert('#onde botar').Befor ou .After('o que botar String ou Div','#depois de quem')
  Befor:(Stg,Stg2=null)=>{const r = $(Stg2,$(e)) ; typeof Stg === 'string'
    ? r ? $(e).insertBefore(document.createRange().createContextualFragment(Stg),r) : $(e).insertAdjacentHTML('beforeend',Stg)
    : r ? $(e).insertBefore(Stg,r) : $(e).appendChild(Stg)},
  After:(Stg,Stg2=null)=>{const r = $(Stg2,$(e)) ; typeof Stg === 'string'
    ? r ? r.insertAdjacentHTML('afterend',Stg) : $(e).insertAdjacentHTML('afterbegin',Stg)
    : r ? r.parentNode.insertBefore(Stg,r.nextSibling) : $(e).appendChild(Stg)}
})

const Chil = (e,x)=>{
  const E = $(e).children[x-1]
  return E ? {
      Rmv:()=>{E.remove()},
      Show:()=>Show(E),
      None:()=>None(E),
      Rtur:()=>E,
      Redd:()=>E.style.background = 'Red',
      Log:()=>{console.log(E)},
      Add:(stg)=>E.classList.add(stg)
  } : (alert('Índice inválido'), null)
}

//Retornos DOM________________________________________________________________________________________________________________
const     $ = (Stg,e=document)=>(typeof Stg==='string'?e.querySelector(Stg):Stg)
const    $$ = (Stg,e=document)=>(typeof Stg==='string'?Array.from(e.querySelectorAll(Stg)):Stg)
const   $Vl = (Stg,e=document)=>$(Stg,e).value
const   $Tx = (Stg,e=document)=>$(Stg,e).textContent
const  $Val = (Stg,e=document)=>$$(Stg,e).map(e=>e.value)
const  $$Vl = (Stg,e=document)=>$$(Stg,e).map(e=>e.value) // Obsoletar o de cima
const  $Inn = (Stg,e=document)=>$$(Stg,e).map(e=>e.innerHTML)
const Clear = e=>[e].flat().forEach(el=>$(el).value='')
const  Inn_ = (e,Stg)=>$(e).innerHTML+=Stg
const   Src = (e,Stg)=>$(e).src = Stg
const   Txt = e=>e.innerText.trim()
const   Inn = (e,Stg=null)=> Stg===null ? $(e).innerHTML : $(e).innerHTML = Stg
const    Nm = (e,stg=null)=> stg===null ? e.getAttribute('name') : e.setAttribute('name',stg)
const    Rx = arry=>FazArry(arry).map(e=>`[class*="${e}"]`).join('')
const    Vll= e=>e.tagName === 'INPUT' ? (e.type === 'checkbox' ? e.checked : e.value) : e.innerText.trim()
const    llv=(e,v)=>{if(e.tagName === 'INPUT' && e.type === 'checkbox'){e.checked = typeof v === 'string' ? JSON.parse(v) : v;} else {e.value = v}}

//Retornos DOM Parentes_______________________________________________________________________________________________________
const Parent=(e,n)=>Array(n).fill(0).reduce(p=>p.parentNode,e)
const Pai=e=>Parent(e,1), Avo=e=>Parent(e,2), Bzv=e=>Parent(e,3), Ttv=e=>Parent(e,4), Vo5=e=>Parent(e,5)
// Retornos de Irmãos
const SibNxt = e=>e?.nextElementSibling || null
const SibPrv = e=>e?.previousElementSibling || null
const SibIdx = (e,x)=>[...e?.parentElement?.children || []][x] || null
const SibQSl = (e,Q)=> [...e?.parentElement?.children || []].find(s=>s.matches(Q)) || null
const SibAll = e=>[...e?.parentElement?.children || []].filter(s=>s!==e)

// Ações DOM___________________________________________________________________________________________________________________
//const Befor=(e,Stg)=>$(e).insertAdjacentHTML('beforeend' ,Stg)
const Befor  =(e,Stg,Stg2)=>typeof Stg === 'string' ? $(e).insertAdjacentHTML('beforeend',Stg):$(e).insertBefore(Stg,$(Stg2,$(e)))
const After  =(e,Stg)=>$(e).insertAdjacentHTML('afterbegin',Stg)
const DltAll =e=>$$(e).forEach(e=>e.remove())
const InnAll =(Stg,e)=>$$(Stg).forEach(E=>E.innerHTML = e)
const NewTag =e=>document.createElement(e)
const NewImg =Src=>Object.assign(new Image(),{src:Src})
const NewDiv =Cls=>Object.assign(NewTag('div'),{className:Cls})
const Zindx  =e=>e.forEach((e,x,obj) => e.style.zIndex = obj.length-x) // acho q n funciona mais
const InnTogg=(e,Stg,Stg2)=>$(e).innerHTML = $(e).innerHTML===Stg?Stg2:Stg
const ValTogg=(e,Stg,Stg2)=>$(e).value     = $(e).value    ===Stg?Stg2:Stg

//Display Show None________________________________________________________________________________________________________________
function FazArry(e){return Array.isArray(e)?e:e instanceof HTMLCollection||e instanceof NodeList?Array.from(e):/^\./.test(e)?$$(e):[e]}
function None(e,b){if(b){Show(b)};FazArry(e).forEach(E=>{if(typeof E==='string'){const EE=$(E);EE.style.display='none'}else{E.style.display='none'}})}
function Show(e,b){if(b){None(b)};FazArry(e).forEach(E=>{if(typeof E==='string'){const EE=$(E);EE.style.display='flex'}else{E.style.display='flex'}})}
function ShowTrue(e,Valid,b=null){if(Valid){Show(e);if(b!==null){None(b)}}else{None(e);if(b!==null){Show(b)}}}
function NoneTrue(e,Valid,b=null){if(Valid){None(e);if(b!==null){Show(b)}}else{Show(e);if(b!==null){None(b)}}}
function NoneTruE(e,Valid){if(Valid){None(e)}else{Show(e)}}
const ENone=e=>window.getComputedStyle($(e)).display==='none'
const EShow=e=>window.getComputedStyle($(e)).display!=='none'
function TogNone(e){ENone($(e))?Show($(e)):None($(e))}
function TogShow(e){EShow($(e))?None($(e)):Show($(e))}
const ShowTime=(e,sec)=>{Show(e);setTimeout(()=>{None(e)},sec*1000)}
const NoneTime=(e,sec)=>{None(e);setTimeout(()=>{Show(e)},sec*1000)}
const TrcFih=e=>Filh(Pai(e)).forEach(f=>{if(f===e){None(f)}else{Show(f);f.focus()}}) // Oculta o Atual e exibe o Resto Funciona melhor com 2 Filhos

// Funções de CSS ________________________________________________________________________________________________________________
const Add=(e,Stg)=>FazArry(e).forEach(E=>E.classList.add(Stg))
const Rmv=(e,Stg)=>FazArry(e).forEach(E=>E.classList.remove(Stg))
const Tog=(e,Stg)=>FazArry(e).forEach(E=>E.classList.toggle(Stg))
const TrcTog=(e,Stg1,Stg2)=>{FazArry(e).forEach(E=>{Tog(E,Stg1);Tog(E,Stg2)})}
const Trc=(e,Add,Rmv)=>{FazArry(e).forEach(E=>{console.log(E) ; Add(E,Add);Rmv(E,Rmv)})}
const Extrat_Clss=(div,Stg)=>[...div.classList].find(e=>e.startsWith(Stg))||null
const DarkLite=e=>{TrcTog($(e),'Dark','Lite')}
const Add_N=e=>FazArry(e).forEach(el=>Add(el,'none'))
const Rmv_N=e=>FazArry(e).forEach(el=>Rmv(el,'none'))
const Tog_N=e=>FazArry(e).forEach(el=>Tog(el,'none'))
const Contem=(e,Stg) =>e.classList.contains(Stg) // NEXBEE
const Coten =(e,Clss)=>FazArry(Clss).some(E=>e.classList.contains(E))
const Notem =(e,Stg) =>!e.classList.contains(Stg) // NEXBEE

//Funções de Objeto e Array____________________________________________________________________________________________________
const ObjKey =e=>Object.keys(e)                              // Converte todos Keys de Objetos em um array
const ObjVal =e=>Object.values(e)                            // Converte todos value de Objetos em um array
const ObjEtr =e=>Object.entries(e)                           // Converte um objeto em um array de pares [chave,valor]
const For    =e=>Array.from({length:e},(_,idx)=>idx)         // Converte 'number' em um array de 0 até 'number'
const Fbj    =obj=>For(ObjKey(obj).length)                   // Faz a Mesma coisa só que com a Chave do Objeto
const IdxDe  =e=>Array.from(Pai(e).children).indexOf(e)      // Passo (div) Retorna o Index dela
const Filh   =e=>Array.from($(e).children)                   
const FIdx   =(Arry,Stg)=>Arry.findIndex(e=>e===Stg)         // Retorna o Index de um item em um array baseado na String
const ObjOrdn=(obj,Arry)=>Arry.map(k=>obj[k]).filter(v=>v!==undefined) // Ordena key de Objeto de acordo com um array
const MAX=(arry,K)=>arry.reduce((max,e)=>Math.max(max,e[K]),0) // Retorna o Maior numero de uma determinada Posição de um Objeto
const UniqArry=(arr,chk)=>chk?arr.filter((e,x,eu)=>eu.findIndex(a=>a[0]===e[0])===x):Array.from(new Set(arr.map(JSON.stringify)),JSON.parse)
const Uniq=arr=>[...new Set(arr)]                            // cria um array com valores Unicos
const ObjTem=(obj,Stg)=>obj?obj[Stg]:null                    // se o Objeto Existir então Chama uma Propiredade dele
const OBJtem=obj=>obj?obj:null
const MaxNum=e=>e.reduce((a,b)=>(Number(a)>Number(b)?Number(a):Number(b)))
const SOMA=(Arry,Call)=>Arry.reduce((sum,e)=>sum+(Call?Number(Call(e)):Number(e)),0)
const SOMA_Obj=(ArrObj,Key)=>ArrObj.reduce((soma,obj)=>Number(soma)+Number(obj[Key]||0),0) // somar todos os valores de um determinado key [CRIEI UMA NOVA Q TÁ NO LIBGRAFF]
const Angrm=arr=>arr.length===0?[[]]:arr.flatMap((e,x)=>Angrm([...arr.slice(0,x),...arr.slice(x+1)]).map(i=>[e,...i]))
const ArrObj_ArrArr=(obj)=>{const keys = ObjKey(obj[0]);const sortedObj = obj.map(e=>ObjEtr(e).sort((a,b)=>keys.indexOf(a[0]) - keys.indexOf(b[0])).map(entry=>entry[1]));return [keys,...sortedObj]}

//FuncStorage________________________________________________________________________________________________________________
const StogeGet=e=>localStorage.getItem(e)
const StogeRmv=e=>localStorage.removeItem(e)
const StogeSet=(e,val)=>localStorage.setItem(e,val)

// Funções de Rects________________________________________________________________________________________________________________
const Rect=e=>e.getBoundingClientRect()
const RectL=e=>Rect(e).left
const RectT=e=>Rect(e).top
const RectW=e=>Rect(e).width
const RectH=e=>Rect(e).height
const RectB=e=>Rect(e).bottom
const RectR=e=>Rect(e).right

//Funções de Disparar Eventos__________________________________________________________________________________________________
const DisparoInpt = new Event('input',{bubbles:true})
const DispClick=e=>e.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}))

//Funções Conversor de Valores_________________________________________________________________________________________________
const Ared=e=>Math.floor(e)
const Cm =e=> parseFloat(e).toFixed(2).replace('.',',')
const Fxd=e=> parseFloat(e).toFixed(2)
const RS =e=> `R$ ${Cm(e)}`
const RS_HTML=e=>`<div class="Ct"><div>R$</div><div class="VVLR">${Cm(e)}</div></div>`
const Tm_RS=e=>`<div class="Ct"><p class="RS">R$</p><a>${Cm(e)}</a></div>`
const Porcent=(V1,V2)=>((V1-V2)/V1)*100
const Num= e=>{const value = typeof e === 'number' ? e : parseFloat(e.replace(',', '.').replace('R$', '').trim()) ; return isNaN(value) ? 0 : value}
const Num2=e=>isNaN(value = parseFloat(e.replace('R$ ','').replace(/\./g,'').replace(',','.'))) ? 0 : value
const Pct =e=>`${(e*100).toFixed(2)}%`
const Virg=e=>e.replace('.',',')
const Zero=Num=>String(Num).padStart(3,'0')
const ParsMil=e=>parseFloat(Num($(e).value))*500

//Funções Conversor de Strings_________________________________________________________________________________________________
const aa=Stg=>Stg.toLowerCase()
const AA=Stg=>Stg.toUpperCase()
const Aa=Str=>Str[0].toUpperCase()+Str.slice(1).toLowerCase()
const CleaAsps=e=>e.replace(/\*.*\*/,'').replace("*",'')
const BrevData=Stg=> Stg.match(/\d{2}\/\d{2}\/\d{4}/) ? Stg.replace(/\/\d{4}$/,'') : Stg // Remover o ano 2024 de uma String Data
const DMY=e=>e.split('-').reverse().join('/') // Muda String YYYY-MM-DD para DD/MM/YYYY
const YMD=e=>e.split('/').reverse().join('-') // Muda String DD/MM/YYYY para YYYY-MM-DD

// Funções de Validações_______________________________________________________________________________________________________
// Poderia ser um OBJ gigante is.view
const is        =(e,stg)=>stg[0]==='.' ? Coten(e,stg.slice(1)) : stg[0]==='#' ? e.id===stg.slice(1) : e.tagName===stg.toUpperCase()
const is_Visivel=e=>{const r=e&&e.getBoundingClientRect();return!!(r&&r.bottom>=0&&r.right>=0&&r.top<=innerHeight&&r.left<=innerWidth)}
const View_Vid  =e=>{FazArry(e).forEach(v=>{new IntersectionObserver(es=>v[es[0].isIntersecting?'play':'pause']()).observe(v)})}
const UndefNull =e=>e===undefined||e===null
const IsNum     =e=>typeof e==='number'
const isCnvs    =e=>e.tagName === 'CANVAS'
const KeyEnter  =e=>(e.code === 'Enter' || e.keyCode === 13)
const KeyEntr   =Call=>{if(event.code === 'Enter' || event.keyCode === 13){event.preventDefault();Call()}}
const Ctrl      =e=>e.button === 0 && e.ctrlKey ? true : false

// Funções de Templates________________________________________________________________________________________________________
const SVG={
    Ponta:`<svg class="svg-Ponta" style="" viewBox="0 0 258 128"><path d="M161 15l98 113H0l98-113c17-20 46-20 63 0z"/></svg>`
    ,Lixo:`<svg class="svg-Lixo HOV ppt" viewBox="0 0 153 188"><path d="M23.79 58.73h105.45v104.31c0 7.2-4.5 12.71-11.59 12.71H35.39c-7.09 0-11.59-5.52-11.59-12.71V58.73zm114.05-35.52h-31.78c0-7.46 1.94-16.7-5.52-21.4-3.5-2.2-5.95-1.78-11.3-1.78H63.07c-5.39 0-7.6-.26-11.01 2.08-6.38 4.37-5.07 11.01-5.07 21.1H23.79c-8.38 0-15.77-.9-20.11 3.45-5.02 5.03-3.44 13.69-3.46 20.12-.02 6.66 5.04 11.95 11.61 11.95v96.84c0 17.45 3.04 32.52 23.34 32.31h88.8c16.48-5.1 17.23-16.74 17.23-31.37V58.73c4.29 0 7.53-2.29 9.42-4.79 2.51-3.33 2.18-6.8 2.18-12.4 0-5.48.63-8.95-1.71-12.5-3.31-5.03-7.86-5.83-13.25-5.82zm-38.14 65.8v68.42c0 9.57 11.97 8.38 11.97 1.87v-72.16c0-6.23-11.97-8.14-11.97 1.87zm-58.33-1.87v72.16c0 6.18 11.97 8.15 11.97-1.87v-68.42c0-9.91-11.97-8.13-11.97-1.87zm29.17.75v70.66c0 7.77 11.97 7.77 11.97 0v-70.66c0-7.88-11.97-7.88-11.97 0zm-51.23-52.72h114.42c9.88 0 8.72 11.59 1.12 11.59H22.49c-7.65 0-8.7-11.59 1.12-11.59zm45.62-23.18h23.18c6.74 0 5.98 6.88 5.98 11.22H63.12c0-4.61-.67-11.22 5.98-11.22z"/></svg>`
    ,Chek:`<svg viewBox="0 0 568 413"><path d="M207 265l-110-118c-63-67-129 13-81 64l187 201 342-319c60-56-15-128-71-76l-267 247z"/></svg>`
    ,Fexa:`<svg class="HOV ppt" viewBox="0 0 7899.71 7899.71"><path d="M7636.53 274.37c351.27,351.27 350.54,925.58 0,1276.12l-2396.94 2396.99 2389.65 2389.6c355.18,355.23 355.18,936.88 0,1292.1l0 0c-355.23,355.23 -936.88,355.23 -1292.1,0l-2389.65 -2389.6 -2396.99 2396.94c-351.22,351.27 -925.58,350.54 -1276.12,0 -351.22,-351.22 -350.54,-925.58 0,-1276.12l2396.99 -2396.94 -2404.9 -2404.96c-355.23,-355.23 -355.23,-936.88 0,-1292.1l0 0c355.23,-355.18 936.88,-355.18 1292.1,0l2404.9 2404.96 2396.94 -2396.99c351.27,-351.22 925.58,-350.54 1276.12,0z"/></svg>`
    ,Mais:`<svg class="HOV ppt" viewBox="0 0 110.89 110.89"><path d="M55.57 0c5.29,0 9.61,4.33 9.61,9.61l0 36.1 35.99 0c5.35,0 9.73,4.38 9.73,9.73l0 0c0,5.35 -4.38,9.73 -9.73,9.73l-35.99 0 0 36.1c0,5.29 -4.33,9.61 -9.61,9.61 -5.29,0 -9.61,-4.33 -9.61,-9.61l0 -36.1 -36.22 0c-5.35,0 -9.73,-4.38 -9.73,-9.73l0 -0c0,-5.35 4.38,-9.73 9.73,-9.73l36.22 0 0 -36.1c0,-5.29 4.33,-9.61 9.61,-9.61z"/></svg>`
    ,Cler:`<svg class="HOV ppt" viewBox="0 0 453.06 566.32"><path d="M336.56 534.94c0,-12.86 4.72,-45.31 7.22,-58.09 3.37,-17.19 8.05,-34.07 13.92,-49.97 5.95,-16.12 10.91,-31.05 18.12,-45.81l20.49 -43.58c-3.83,-4.8 -51.72,-31.07 -56.93,-34.24 -19.35,-11.81 -38.19,-21.81 -57.45,-33.5l-114.96 -66.94c-5.53,8.34 -10.46,16.49 -16.52,25.12 -9.02,12.84 -25.66,35.07 -36.85,46.5 -13.23,13.51 -28.58,28.68 -43.03,40.19 -7.78,6.19 -15.12,12.09 -23.21,18.48 -8.64,6.83 -15.08,11.65 -23.52,18.04 -7.84,5.93 -15.65,12.15 -23.85,17.75l45.61 49.38c2.73,2.55 28.72,25.46 30.76,25.37 5.84,-0.26 75.27,-76.16 86.73,-83.9 -1.23,5.33 -11.1,21.2 -14.24,27.47 -4.49,8.98 -9.79,17.46 -14.23,26.15 -2.34,4.58 -4.64,8.35 -7.35,13.51 -2.7,5.13 -4.65,8.46 -7.32,13.52 -3.42,6.46 -12.51,20.96 -13.81,26.58l38.52 23.87c54.48,31.83 131.58,61.01 193.19,75.51l-1.29 -31.38zm-152.75 -355.67c0,14.78 9.93,19.46 19.35,24.91l137.75 80.49c11.18,6.47 45.16,29.29 57.78,29.29 17.31,0 37.54,-43.36 37.54,-51 0,-9.35 -3.05,-15.99 -10.35,-20.94l-155.1 -90.45c-11.88,-7.24 -22.79,-12.95 -34.41,-20.16 -5.57,-3.46 -13.03,-4.75 -20.66,-2.38 -7.38,2.29 -10.63,6.69 -14.22,13.17 -5.09,9.21 -17.69,27.17 -17.69,37.08zm124.27 -28.77c4.83,3.27 10.32,6.11 15.46,9.23l47.97 27.39 52.03 -91.28c3.73,-6.28 6.6,-12.06 10.34,-18.32 7.02,-11.75 19.18,-28.13 19.18,-42.09 0,-15.67 -15.58,-21.86 -30.64,-30.51 -28.77,-16.51 -37.53,11.41 -54.01,40.49l-29.79 52.24c-1.35,2.27 -2.76,4.04 -4.11,6.31 -1.65,2.78 -2.03,3.94 -3.67,6.75l-22.75 39.78z"/></svg>`
   ,Tempo:`<svg class="HOV ppt" viewBox="0 0 6121.17 6121.95"><path class="fil0" d="M5496.46 3335.94c-46.14,352.73 -155.86,662.25 -292.31,920.64 -116.73,221.03 -355.09,513.98 -555.62,675.41 -433.38,348.91 -1090.47,668.54 -1857.96,563.08 -1277.26,-175.5 -2316.58,-1233.52 -2156.47,-2719.06 134.55,-1248.51 1278.98,-2308.86 2723.93,-2143.19 1221.6,140.06 2322.72,1294.47 2138.43,2703.12zm-2735.81 0c196.26,173.3 1347.75,865.1 1607.95,992.39l207.93 -358.87c-205.44,-211.81 -1143.17,-641.16 -1359.62,-844.7l-0.71 -1584.16 -455.44 -4.73 -0.11 1800.06zm-2749.06 0c136.73,1606.26 1529.83,2910.38 3320.29,2776.56 1610.56,-120.37 2927.63,-1562.46 2777.62,-3340.64 -133.51,-1582.67 -1559.4,-2907.78 -3320.07,-2760.67 -1592.89,133.08 -2928.24,1557.99 -2777.84,3324.75z"/></svg>`
}

// AINDA EM USO
const IcoMais=(Clss)=>`<svg class="${Clss}" xmlns="http://www.w3.org/2000/svg" width="20mm" height="20mm" viewBox="0 0 110.89 110.89">
<path d="M55.57 0c5.29,0 9.61,4.33 9.61,9.61l0 36.1 35.99 0c5.35,0 9.73,4.38 9.73,9.73l0 0c0,5.35 -4.38,9.73 -9.73,9.73l-35.99 0 0 36.1c0,5.29 -4.33,9.61 -9.61,9.61 -5.29,0 -9.61,-4.33 -9.61,-9.61l0 -36.1 -36.22 0c-5.35,0 -9.73,-4.38 -9.73,-9.73l0 -0c0,-5.35 4.38,-9.73 9.73,-9.73l36.22 0 0 -36.1c0,-5.29 4.33,-9.61 9.61,-9.61z"/>
</svg>`
const IcoClen=(Clss)=>`<svg class="${Clss}" xmlns="http://www.w3.org/2000/svg" width="16mm" height="20mm" viewBox="0 0 453.06 566.32">
<path d="M336.56 534.94c0,-12.86 4.72,-45.31 7.22,-58.09 3.37,-17.19 8.05,-34.07 13.92,-49.97 5.95,-16.12 10.91,-31.05 18.12,-45.81l20.49 -43.58c-3.83,-4.8 -51.72,-31.07 -56.93,-34.24 -19.35,-11.81 -38.19,-21.81 -57.45,-33.5l-114.96 -66.94c-5.53,8.34 -10.46,16.49 -16.52,25.12 -9.02,12.84 -25.66,35.07 -36.85,46.5 -13.23,13.51 -28.58,28.68 -43.03,40.19 -7.78,6.19 -15.12,12.09 -23.21,18.48 -8.64,6.83 -15.08,11.65 -23.52,18.04 -7.84,5.93 -15.65,12.15 -23.85,17.75l45.61 49.38c2.73,2.55 28.72,25.46 30.76,25.37 5.84,-0.26 75.27,-76.16 86.73,-83.9 -1.23,5.33 -11.1,21.2 -14.24,27.47 -4.49,8.98 -9.79,17.46 -14.23,26.15 -2.34,4.58 -4.64,8.35 -7.35,13.51 -2.7,5.13 -4.65,8.46 -7.32,13.52 -3.42,6.46 -12.51,20.96 -13.81,26.58l38.52 23.87c54.48,31.83 131.58,61.01 193.19,75.51l-1.29 -31.38zm-152.75 -355.67c0,14.78 9.93,19.46 19.35,24.91l137.75 80.49c11.18,6.47 45.16,29.29 57.78,29.29 17.31,0 37.54,-43.36 37.54,-51 0,-9.35 -3.05,-15.99 -10.35,-20.94l-155.1 -90.45c-11.88,-7.24 -22.79,-12.95 -34.41,-20.16 -5.57,-3.46 -13.03,-4.75 -20.66,-2.38 -7.38,2.29 -10.63,6.69 -14.22,13.17 -5.09,9.21 -17.69,27.17 -17.69,37.08zm124.27 -28.77c4.83,3.27 10.32,6.11 15.46,9.23l47.97 27.39 52.03 -91.28c3.73,-6.28 6.6,-12.06 10.34,-18.32 7.02,-11.75 19.18,-28.13 19.18,-42.09 0,-15.67 -15.58,-21.86 -30.64,-30.51 -28.77,-16.51 -37.53,11.41 -54.01,40.49l-29.79 52.24c-1.35,2.27 -2.76,4.04 -4.11,6.31 -1.65,2.78 -2.03,3.94 -3.67,6.75l-22.75 39.78z"/>
</svg>`
const IconAling=(Clss,Cor1,Cor2)=>`<svg class="${Clss}" xmlns="http://www.w3.org/2000/svg" width="20mm" height="19.9999mm" viewBox="0 0 1115.04 1115.03"
    <g id="Camada_x0020_1">
    <rect style="fill:white" transform="matrix(1.78337E-14 -0.131706 0.673364 3.48817E-15 518.703 658.109)" width="1527.55" height="115.29"/>
    <circle style="fill:${Cor1}" cx="557.52" cy="238.6" r="161.42"/>
    <circle style="fill:${Cor2}" cx="557.52" cy="876.43" r="161.42"/>
    <rect x="0" y="-0" width="1115.04" height="1115.04"/>
    </g>
</svg>`
const IcoCrop=(Clss,tog)=>`<svg class="${Clss}" xmlns="http://www.w3.org/2000/svg" width="20mm" height="20mm" viewBox="0 0 152.96 152.96">
    <g>
    <path d="M152.96 126.63l-22.5 0 0 -14.4 22.5 0 0 14.4zm-152.96 -100.31l22.5 0 0 14.4 -22.5 0 0 -14.4zm42.2 -26.32l0 112.23 63.07 0 0 14.4 -77.29 0 0 -126.63 14.21 0zm68.56 152.96l0 -112.23 -63.07 0 0 -14.4 77.29 0 0 126.63 -14.21 0z"/>
    <polygon class="Croped ${tog}" points="47.68,106.62 105.17,106.62 105.17,46.34 47.68,46.34 "/>
    </g>
</svg>`


const Tm_th    =(e,arr)=>Inn(e,arr.map(a=>`<th>${a}</th>`).join(''))
const Tm_td    =(e,arr)=>Inn(e,arr.map(a=>`<td>${a}</td>`).join(''))
const Tm_Opt   =(arr,Stg=null)=>arr.map((a,i)=>`<option value="${a}" ${i===0?'disabled':''} ${Stg===a?'selected':i===0?'selected':''}>${a}</option>`).join('')
const Tm_OptFnt=(e,arr)=>Inn(e,arr.map(a=>`<option style="font-family:${a}" value="${a}">${a}</option>`).join(''))
const load_Opts=(e,arr)=>Inn(e,arr.map(a=>`<option value="${a}">${a}</option>`).join(''))
const SrcSVG   =e=>`data:image/svg+xml,${encodeURIComponent(e)}`

// Funções de Eventos__________________________________________________________________________________________________________
const EvtChng=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('change',Call))
const EvtInpt=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('input' ,Call))
const EvtClik=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('click' ,Call))
const EvtFocs=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('focus' ,Call))
const EvtBlur=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('blur'  ,Call))
const RmvChng=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('change',Call))
const RmvInpt=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('input' ,Call))
const RmvClik=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('click' ,Call))
const ClickFora=(e,Call)=>{const H=(E)=>!e.contains(E.target) && (Call(),RmvClik(document,H));EvtClik(document,H)}
const Copy=(area,stg)=>{area.value = stg ; area.select() ; document.execCommand('copy') ; console.log('Copiado')}

//Controlador de Cursor__________________________________________________________________________________________________________
const AplyRng = r=>(getSelection().removeAllRanges(),getSelection().addRange(r))
const CurAll  = e=>AplyRng((r=document.createRange(),r.selectNodeContents(e),r)) // Seleciona Tudo
const CurEnd  = e=>AplyRng((r=document.createRange(),r.selectNodeContents(e),r.collapse(false),r)) // vai pra o Fim da Linha

function Tecla(key){
  const event = window.event
  const keys  = {ctrl:event.ctrlKey,shift:event.shiftKey,alt:event.altKey}
  return keys[key]
}

//Funções Geradores____________________________________________________________________________________________________________
const Rndn=e=>Math.floor(Math.random()*e)
const Randomm=(min,max)=>Rndn((max-min+1))+min
const GerarID=()=>`ID-${Rndn(900)+100}`
const GerarIT=()=>`IT-${Rndn(900)+100}`
const HOJE = ()=>new Date().toLocaleDateString('pt-BR')
const AGORA =()=>`${HOJE()} ${new Date().toLocaleTimeString('pt-BR')}`

//Funções Check________________________________________________________________________________________________________________
const IsChkTru=e=>e.checked===true
const IsChkFal=e=>e.checked===false
const ChkTru=e=>e.checked=true
const ChkFal=e=>e.checked=false
const ChkTru_Clik=e=>{e.checked=true ; DispClick(e)}
const ChkFal_Clik=e=>{e.checked=false ; DispClick(e)}
const AddRequired=e=>e.forEach(e=>{$(e).required = true})
const EscRequired=e=>e.forEach(e=>{$(e).required = false})

// Funções de Replace_____________________________________________________
const RxRepeti = e=>e.replace(/(.)\1+/g,'$1')
const RxEspaco = e=>e.trim().replace(/\s+/g,' ')
const RxAcento = e=>e.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
const RxPlural = e=>e.replace(/ão$|ões$|ao$|oes*$/,'ao').replace(/s*$/i,'')
const NewRegex = e=>new RegExp(e.split('').map(e=>e+'.{0,3}').join(''),'i') // Transforma String num Regex Conciderando esse Criterio de .{0,3}
const RxClear  = e=>RxPlural(RxAcento(RxRepeti(RxEspaco(e.toLowerCase())))) // Chama todas as fuções alterando Plural Acento e outros.

// Funções de Ações e Simulações
function Foco(e){$(e).focus()}
function FocoCh0(e){$(e).children[0].focus()}
function FocoIn(e){e.focus()}
function FocoOut(e){e.focus();e.setSelectionRange(e.value.length,e.value.length)}

// Outros

const CalcMB=e=>Num((new Blob([JSON.stringify(e)]).size/1024).toFixed(2))

function FocoFilho(Pai,Filho){Array.from(Pai.children).forEach(e=>{None(e)});Show([Pai,Filho]);SairModal(Pai)} /*Manter isso aqui só pelo App da Infinity até trocar Tudo*/

// MODAL________________________________________________
function ShowModal(Pai,Filho){Array.from(Pai.children).forEach(e=>{None(e)});Show([Pai,Filho]);SairModal(Pai)}
function SairModal(Fundo){document.addEventListener('keyup',e=>{if(e.key==='Escape'){None(Fundo)}})
  Fundo.addEventListener('click',e=>{if(e.target===Fundo){None(Fundo)}})
}
function ShowBrother(e,pai){
  var Fi = Filh(pai) ; var x = e===0?0:IdxDe(e)
  Fi.forEach(e=>None(e)) ; if(x<Fi.length-1){Show(Fi[x+1])}else{Show(Fi[0])}
}

//NEXBEE
function EscThis(){if(event.target===event.currentTarget){None(event.target)}} //NEXBEE
function EscModal(){} //NEXBEE
function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})} //NEXBEE

const RxgOnFun=e=>e?e.toString().match(/\{([^}]*)\}/)[1]:'' // serve pra pegar o texto da função 'myfunction(gg)' onclick, onkeyup e todos
function Delay(sec){return new Promise(r => setTimeout(r, sec*1000))} //NEXBEE
async function Dellay(Sec,Call){await new Promise(r=>setTimeout(r, Sec* 1000));Call()} //NEXBEE
function texte(){console.log('Texte')} //NEXBEE
function Texte(){console.log('Texte')} //NEXBEE
const WinH = window.innerHeight //NEXBEE
const WinW = window.innerWidth //NEXBEE
const WHXY=(W,H,X,Y)=>`style="width:${W}px;height:${H}px;left:${X}px;top:${Y}px"` //NEXBEE
function Top_Lef(e,T,L){e.style.top=`${T}px`;e.style.left=`${L}px`}
const Requed=(Inpt)=>Inpt.name.trim()==='Rqued' && Inpt.value===''
const TestPass=e=>((e!==""?1:0)+(e.length>= 8)?1:0)+((/[A-Z]/.test(e)&&e.length>1)?1:0)+((/[!@#$%^&*(),.?":{}|<>]/.test(e)&&e.length>1)?1:0) // Retorna de 1 a 3
const TestEmail=e=>ValidEmail.some(E=>e.endsWith(E))

const CriaKina=(W,H,S)=>`polygon(${S}px 0%, ${W-S}px 0%, ${W}px ${S}px, ${W}px ${H-S}px, ${W-S}px ${H}px, ${S}px ${H}px, 0% ${H-S}px, 0% ${S}px)`
function Read_Kina(){$$('.Kina').forEach(E=>{E.style.clipPath = CriaKina(E.offsetWidth,E.offsetHeight,Nm(E))})}
function Rfresh(){ console.log('Funções Atualizadas') ;Read_Kina()}

//GABARITO
function ResizeArea(e){e.style.height = e.scrollHeight + 'px';e.style.width = e.scrollWidth + 'px'}


//conferir pra ver se realmente precisa
function TrocaClass(Clas1,Clas2){
  const Add = $All('.'+Clas1).length===0?Clas1:Clas2
  const Rmv = $All('.'+Clas1).length!==0?Clas1:Clas2
  $All('.'+Rmv).forEach(e=>{e.classList.remove(Rmv);e.classList.add(Add)})
}



function Clen_Ipts(e){$$('input', e).forEach(I=>I.value='')}
function Clen_Slct(e){$$('select',e).forEach(S=>S.selectedIndex=0)}
function Clen_Alls(e){Clen_Ipts(e);Clen_Slct(e)}

function InptsVazio(e){$$(e).forEach(e=>{if(e.value.trim()===""){Add(e,'Error') ; return true}else{Rmv(e,'Error') ; return false}})}

function CssFont(e,Stg){$(e).style.fontFamily=Stg}

// Quando eu Upo Várias Imagens dentro de um input
function Promss_Imgs2(files,div){
  const arry = []
  for (const file of files) {
      const reader = new FileReader()
      const promise = new Promise(r => {
          reader.onload = e => {
              const Div = document.createElement('div')
              const img = document.createElement('img')
              Div.classList.add('DivImgRsut','Ct','Rltv')
              img.src = e.target.result
              img.name = file.name
              Div.appendChild(img)
              $(div).appendChild(Div)
              r()
          };reader.readAsDataURL(file)
      });arry.push(promise)
  };return Promise.all(arry)
}




// Templates NEXBEE

// Pega todas 'Div' com Onload de uma Div especifica, pra cada uma Rodar o Onload
const Onloads=e=>{$$('[onload]',$(e)).forEach(E=>{const on=E.getAttribute('onload').replace(/this/g,`$(E)`);eval(on)})}


function LoadOnloads(e){const onLoad = $(e).getAttribute('onload');if(onLoad){eval(onLoad)}}
function execOnloads(e,Def=null){if(Def!==null){$(e).innerHTML=Def} ; $$('[onload]',$(e)).forEach(e=>LoadOnloads(e))}

// Animação_____________________________________________________________________________________
function AnimeProp(Div,CSS,Sec,Esperar=false){
  const inicio = {}
  const startTime = performance.now()
  for (let prop in CSS){inicio[prop]=parseFloat(getComputedStyle(Div)[prop]) || 0}
  if(Esperar){
      return new Promise((resolve)=>{
          const animar = (Time) => {
              const Prog = Math.min((Time-startTime)/(Sec*1000),1)
              for (let prop in CSS) {
                  const valorFinal = CSS[prop]
                  if (prop === 'opacity'){Div.style[prop] = valorFinal * Prog + (1 - Prog) * inicio[prop]}
                  else{Div.style[prop] = `${inicio[prop] + (valorFinal - inicio[prop]) * Prog}px`}
              }
              if (Prog < 1) {requestAnimationFrame(animar)}
              else {resolve();}
          }
          requestAnimationFrame(animar);
      });
  } else {
      const animar = (Time) => {
          const Prog = Math.min((Time - startTime) / (Sec * 1000), 1);

          for (let prop in CSS) {
              const valorFinal = CSS[prop];
              if (prop === 'opacity') {
                  Div.style[prop] = valorFinal * Prog + (1 - Prog) * inicio[prop];
              } else {
                  Div.style[prop] = `${inicio[prop] + (valorFinal - inicio[prop]) * Prog}px`;
              }
          }
          if (Prog < 1) {
              requestAnimationFrame(animar);
          }
      }
      requestAnimationFrame(animar);
  }
}

function Anime(Div,Direct,Time,Effects,wid,hei,top,lef){ // Efeitos podem ser [Opacy,Pose,Hidd]
  const div = $(Div)
  if(Effects.includes('Hidd')){
  const Pai = div.parentNode
  Pai.classList.add('Anime')
  Pai.style.width =  `${wid}px`
  Pai.style.height = `${hei}px`
  Pai.style.top =  `${70}px`
  Pai.style.right = `${0}px`
  }
  if(Effects.includes('Opacy')){div.classList.add('Opacy')}
  div.classList.add(Direct)
  div.style.width = `${wid}px`
  div.style.height = `${hei}px`
  div.style.top =  `${top}px`
  div.style.left = `${lef}px`
}

function Animar(Div,btn){
  if(btn.id==='H_Lgin'){Tog(btn,'AnimeExibido')}
  const div = $(Div)
  if(btn.classList.contains('AnimeExibido')){Add(div,'Animar')
    if(div.classList.contains('Opacy')){div.style.opacity='1'}}else{
      Rmv(div,'Animar');None($('#mmdal'))
      if(div.classList.contains('Opacy')){div.style.opacity='0'}
    }
}

function RmvAnime(){$$('.AnimeExibido').forEach(e=>Rmv(e,'AnimeExibido'))}



//Projeto Advogado______________________________

  function estaVisivel(e) {
    const rect = e.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
  function verificarDiv(e,Call){if(estaVisivel(e)){ Call() ; window.removeEventListener('scroll',verificarDiv)}}



// Funções de Fetch
function FetchPOST(link,Conteudo,ALERT=null){
  fetch(link,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Conteudo)})
  .then(r=>{return r.text()}).then(m=>{ALERT?ALERT(m):null}).catch(rr=>{console.error('Erro no POST:',rr)})
}
function FetchGET(Link,CallBack){
  fetch(Link).then(r=>r.json()).then(dados=>{CallBack(dados)})
  .catch(err=>console.error('Erro no GET:',err))
}


// Funções de Mask
const Mask = {
  cpf:   i=>{if (i.value.length > 14) i.value = i.value.substring(0,14); i.value = i.value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{2})$/,'$1-$2')},
  fone:  i=>{if (i.value.length > 15) i.value = i.value.substring(0,15); i.value = i.value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2')},
  data:  i=>{if (i.value.length > 10) i.value = i.value.substring(0,10); i.value = i.value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'$1/$2').replace(/(\d{2})(\d{4})$/,'$1/$2')},
  cep:   i=>{if (i.value.length > 10) i.value = i.value.substring(0,10); i.value = i.value.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2')},
  cartao:i=>{if (i.value.length > 19) i.value = i.value.substring(0,19); i.value = i.value.replace(/\D/g,'').replace(/(\d{4})(\d)/g,'$1 $2').trim()},
  rs:    i=>{if (i.value.length > 10) i.value = i.value.substring(0,10); i.value = i.value.replace(/\D/g,'').replace(/(\d)(\d{2})$/,'$1,$2').replace(/(\d)(\d{3})(\d)/,'$1.$2$3').replace(/(\d)(\d{3})$/,'$1.$2').replace(/^(?!\b0\b)\d/,'R$ $&')},
}



const OBS=(e,Call,p=null)=>new MutationObserver(()=>Call()).observe(e,{attributes: true,attributeFilter: p && Array.isArray(p) ? p : undefined})





//FUNÇÕES CRIADAS PARA A MYPLAN_________________________________________________
//FUNÇÕES CRIADAS PARA A MYPLAN_________________________________________________
//FUNÇÕES CRIADAS PARA A MYPLAN_________________________________________________





// Reordenar Rows de Tabela por Ordem Crecente ou Decrecente
function OrdenarRows(e,x,Cntd=null,order=null){ // se tiver 'Cntd' é conteudo, é por que o texto a ser coletado esta dentro de alguma tag especifica dentro do td, se não tiver ta no próprio td
    function AtualizaSetas(e,asc){
      $$('th',e.closest('table')).forEach(th=>{const seta = $('i',th);if(seta){seta.style.opacity=0.5;seta.textContent='▼'}})
        const Atual = SibQSl(e,'i') ; if(Atual){Atual.style.opacity=1;Atual.textContent=asc?'▼':'▲'}
    }
    const table = e.closest('table')
    const tbody = $('tbody',table)
    const asc = order ? order === 'asc' : table.dataset.sortOrder !== "asc"
    const Txxt=e=> Cntd ? Txt($(Cntd,e.children[x])) : Txt(e.children[x])

    // Verifica se o valor é uma data no formato DD/MM/YYYY
    const isDate=(val)=>/^\d{2}\/\d{2}\/\d{4}$/.test(val)

    const convertDate=(val)=>{ // Não ta resolvendo NADA
        if (isDate(val)) {
            const [day, month, year] = val.split('/')
            return `${year}-${month}-${day}`
        }
        return val
    }

    const Ordn = [...tbody.rows].sort((a, b) => {
      const valA = parseFloat(Txxt(a).replace('R$',''))
      const valB = parseFloat(Txxt(b).replace('R$',''))
  
      if (!isNaN(valA) && !isNaN(valB)){return asc ? valA - valB : valB - valA}
  
      // Ordena como texto se não forem números
      const txtA = convertDate(`${Txxt(a)}`.replace('R$',''))
      const txtB = convertDate(`${Txxt(b)}`.replace('R$',''))

      return asc ? txtA.localeCompare(txtB) : txtB.localeCompare(txtA)
  })
    table.dataset.sortOrder = asc ? "asc" : "desc"
    Ordn.forEach(r=>tbody.appendChild(r))
    AtualizaSetas(e,asc)
}







// Upados de OrçamentoGRAFF_______________________________________________________________________

const _td=e=>e.tagName==='TD'?e:e.closest('td')
const _tr=e=>e.tagName==='TR'?e:e.closest('tr')
const _th=e=>e.tagName==='TH'?e:e.closest('th')
const _table=e=>e.tagName==='TABLE'?e:e.closest('table')
const _tbody=e=>e.tagName==='TBODY'?e:e.closest('tbody')

function MaskNum(input){ // Funciona Muito bem e não pretendo me Livrar dela tão Fácil
    var Vlr = input.value.replace(/\D/g, '').replace(/^0+(?=[1-9])/, '')
    var Mask = '' ; const VLR = Vlr.length
    var Mask = VLR === 1 ? '0,0'+Vlr :
                VLR === 2 ? '0,'+Vlr :
                VLR === 3 ? Vlr.charAt(0)+','+Vlr.substring(1) :
                VLR === 4 ? Vlr.substring(0, 2)+','+Vlr.substring(2) :
                VLR > 4 ? Vlr.substring(0, 2)+','+Vlr.substring(2, 4) : ''
        if (VLR > 5) {Mask = Mask.substring(0, 5)}
        input.value = Mask
}

function MaskNum2(e){ // Funciona Muito bem e não pretendo me Livrar dela tão Fácil
  var Vlr = e.innerHTML.replace(/\D/g, '').replace(/^0+(?=[1-9])/, '')
  var Mask = '' ; const VLR = Vlr.length
  var Mask = VLR === 1 ? '0,0'+Vlr :
              VLR === 2 ? '0,'+Vlr :
              VLR === 3 ? Vlr.charAt(0)+','+Vlr.substring(1) :
              VLR === 4 ? Vlr.substring(0, 2)+','+Vlr.substring(2) :
              VLR > 4 ? Vlr.substring(0, 2)+','+Vlr.substring(2, 4) : ''
      if (VLR > 5) {Mask = Mask.substring(0, 5)}
      e.innerHTML = 'R$ '+Mask

        // Move o cursor para o final
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(e);
      range.collapse(false); // false = final do conteúdo
      sel.removeAllRanges();
      sel.addRange(range);
}

function MaskR$(el){
  let v = el.innerText.replace(/\D/g,'').padStart(3,'0')
  let r = v.slice(0,-2), c = v.slice(-2)
  el.innerText = `R$ ${parseInt(r).toLocaleString('pt-BR')},${c}`
  CurEnd(el)
}

const RgbToHex =rgb=>`#${rgb.replace(/^rgb\(|\s+|\)$/g,'').split(',').map(x=>parseInt(x).toString(16).padStart(2,'0')).join('')}`
const hexToRGB =hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `rgb(${r},${g},${b})`}
const hexToRGB2=hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `${r},${g},${b}`}

const Dat=e=>new Date(e)
const cRepet  =arr=>arr.reduce((acc,e)=>{acc[e]=(acc[e] || 0) + 1 ; return acc},{}) // Conta quantas vezes cada item aparece no array
const cRepetID=arr=>arr.reduce((acc,e)=>{const k=e.Id ; acc[k] = (acc[k] || 0) + 1 ; return acc;},{}) // Conta quantas vezes cada Id aparece no array de objetos
const OrdnCol=(arar,ord)=>arar.map(row=>ord.map(col=>row[arar[0].indexOf(col)])) // Reordena as Colunas de uma Tabela (a Ordem das colunas futuramente vai ser Definida pelo Usuário)
const getClas=(e,Stg)=>[...e.classList].find(c=>c.includes(Stg)) || null // pegar uma Class q contem uma String especifica
const LocPcnt=(parte,total)=>(parte/total)
const RGBa=(e,op=0.2)=>{const [r,g,b]=getComputedStyle(e).backgroundColor.match(/\d+/g) ; e.style.backgroundColor = `rgba(${r},${g},${b},${op})`}
const zipObj=(Key,Val)=>Object.fromEntries(Key.map((k,x)=>[k,Val[x]])) // Cria um obj a partir de dois array: um de chaves (keys) e outro de valores (values). // Exemplo: zipObj(['a','b'], [1,2]) => { a: 1, b: 2 }
const EscpRgx=Stg=>Stg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapa símbolos de regex (.+*?^$()[] etc.) para uso literal em uma RegExp
const EntBlr=e=>KeyEntr(()=>e.blur()) // fazer Blur caso enter seja pressionado
const isImageLoaded=img=>img.complete && img.naturalWidth !== 0 // conferir se ta OK mesmo
const RandoCor=()=>'#'+Rndn(16777215).toString(16).padStart(6,'0')
const isArr=e=>Array.isArray(e)
const NULL__=a=>a.map(o=>Object.fromEntries(Object.entries(o).map(([k,v])=>[k,v??""])))
const l0=e=>e.length===0
const ATV=e=>Add($(e),'Atv')
const DTV=e=>Rmv($(e),'Atv')
const TOV=e=>Tog($(e),'Atv') // Modificar todos os Tog:Atv pra mudar pra TOV
const Trc2=(e,add,rmv)=>{Add($(e),add);Rmv($(e),rmv)}


// Templates_________________________________________________________________

