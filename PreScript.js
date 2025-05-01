
// Dia 22/03/2025

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
const  Inn_ = (e,Stg)=>$(e).innerHTML+= Stg
const   Src = (e,Stg)=>$(e).src = Stg
const   Txt = e=>e.innerText.trim()
const   Inn = (e,Stg=null)=> Stg===null ? $(e).innerHTML : $(e).innerHTML = Stg
const    $Name = (e,stg=null)=> stg===null ? e.getAttribute('name') : e.setAttribute('name',stg)
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
const Befor=(e,Stg,Stg2)=>typeof Stg === 'string' ? $(e).insertAdjacentHTML('beforeend',Stg):$(e).insertBefore(Stg,$(Stg2,$(e)))
const After=(e,Stg)=>$(e).insertAdjacentHTML('afterbegin',Stg)
const DltAll=e=>$$(e).forEach(e=>e.remove())
const InnAll=(Stg,e)=>$$(Stg).forEach(E=>E.innerHTML = e)
const NewTag = e=>document.createElement(e)
const NewImg=Src=>Object.assign(new Image(),{src:Src})
const NewDiv=Cls=>Object.assign(NewTag('div'),{className:Cls})
function InnTogg(e,Stg,Stg2){$(e).innerHTML = $(e).innerHTML===Stg?Stg2:Stg}
function ValTogg(e,Stg,Stg2){$(e).value = $(e).value===Stg?Stg2:Stg}
const Zindx=(div)=>div.forEach((e,x,obj) => e.style.zIndex = obj.length-x) // pelomenos pra MyPlan n funciona mais, fiz diferente

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
function TogNoSh(e){e.forEach(E=>TogShow(E))}
const ShowTime=(e,sec)=>{Show(e);setTimeout(()=>{None(e)},sec*1000)}
const NoneTime=(e,sec)=>{None(e);setTimeout(()=>{Show(e)},sec*1000)}
const TrcFih=e=>Filh(Pai(e)).forEach(f=>{if(f===e){None(f)}else{Show(f);f.focus()}}) // Oculta o Atual e exibe o Resto Funciona melhor com 2 Filhos

// Funções de CSS
const Add=(e,Stg)=>FazArry(e).forEach(E=>E.classList.add(Stg))
const Rmv=(e,Stg)=>FazArry(e).forEach(E=>E.classList.remove(Stg))
const Tog=(e,Stg)=>FazArry(e).forEach(E=>E.classList.toggle(Stg))
const TrcTog=(e,Stg1,Stg2)=>{FazArry(e).forEach(E=>{Tog(E,Stg1);Tog(E,Stg2)})}
const Trc=(e,Add,Rmv)=>{FazArry(e).forEach(E=>{console.log(E) ; Add(E,Add);Rmv(E,Rmv)})}
const DarkLite=e=>{TrcTog($(e),'Dark','Lite')}
const Extrat_Clss=(div,Stg)=>[...div.classList].find(e=>e.startsWith(Stg))?.replace(Stg,'')||null //Passo (Div Class="col-Nome",'col-') Return 'None'

const Add_N=e=>FazArry(e).forEach(el=>Add(el,'none'))
const Rmv_N=e=>FazArry(e).forEach(el=>Rmv(el,'none'))
const Tog_N=e=>FazArry(e).forEach(el=>Tog(el,'none'))

const Contem=(e,Stg)=>e.classList.contains(Stg) // NEXBEE
const Coten=(e,Clss)=>FazArry(Clss).some(E=>e.classList.contains(E))
const Notem=(e,Stg)=>!e.classList.contains(Stg) // NEXBEE

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
const SOMA_Obj=(ArrObj,Key)=>ArrObj.reduce((soma,obj)=>Number(soma)+Number(obj[Key]||0),0) // somar todos os valores de um determinado key
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
const Num=e=>{const value = typeof e === 'number' ? e : parseFloat(e.replace(',', '.').replace('R$', '').trim()) ; return isNaN(value) ? 0 : value}
const Pct =e=>`${(e*100).toFixed(2)}%`
const Virg=e=>e.replace('.',',')
const Zero=Num=>String(Num).padStart(3,'0')
const ParsMil=e=>parseFloat(Num($(e).value))*500

//Funções Conversor de Strings_________________________________________________________________________________________________
const LowCase=Arry=>Arry.filter(e=>e===e.toLowerCase())
const UppCase=Arry=>Arry.filter(e=>e===e.toUpperCase())
const CleaAsps=e=>e.replace(/\*.*\*/,'').replace("*",'')
const BrevData=Stg=> Stg.match(/\d{2}\/\d{2}\/\d{4}/) ? Stg.replace(/\/\d{4}$/,'') : Stg // Remover o ano 2024 de uma String Data
const DMY=e=>e.split('-').reverse().join('/') // Muda String YYYY-MM-DD para DD/MM/YYYY
const YMD=e=>e.split('/').reverse().join('-') // Muda String DD/MM/YYYY para YYYY-MM-DD

const a=e=>e.toLowerCase()
const A=e=>e.toUpperCase()

// Funções de Validações_______________________________________________________________________________________________________
const is=(e,stg)=> stg[0]==='.' ? Coten(e,stg.slice(1)) : stg[0]==='#' ? e.id===stg.slice(1) : e.tagName===stg.toUpperCase()
function is_Visivel(e){const r=e&&e.getBoundingClientRect();return!!(r&&r.bottom>=0&&r.right>=0&&r.top<=innerHeight&&r.left<=innerWidth)}
const View_Vid=(e)=>{FazArry(e).forEach(v=>{new IntersectionObserver(es=>v[es[0].isIntersecting?'play':'pause']()).observe(v)})}
const UndefNull=e=>e===undefined||e===null
const IsNum=e=>typeof e==='number'
const isCnvs=e=>e.tagName === 'CANVAS'
const KeyEnter=e=>(e.code === 'Enter' || e.keyCode === 13)
const KeyEntr=Call=>{if(event.code === 'Enter' || event.keyCode === 13){event.preventDefault();Call()}}
const Ctrl=e=>e.button === 0 && e.ctrlKey ? true : false

// Funções de Templates________________________________________________________________________________________________________
const Div=(e,Class='')=>`<div class="${Class}">${e}</div>`
const MapDiv=(e,on)=>e.map(e=>`<div onclick="${on}">${e}</div>`).join('')
const Tm_th=(e,arr)=>e.innerHTML = arr.map(e=>`<th>${e}</th>`).join('')
const Tm_td=(e,arr)=>e.innerHTML = arr.map(e=>`<td>${e}</td>`).join('')
const load_Opts=(e,arry)=> $(e).innerHTML = arry.map(e=>`<option value="${e}">${e}</option>`).join('')
const Tm_Opts=(arry,Stg=null)=>arry.map((e,i)=>`<option value="${e}" ${i===0?'disabled':''} ${Stg===e?'selected':i===0?'selected':''}>${e}</option>`).join('')
const load_OptsFnt=(e,arry)=> $(e).innerHTML = arry.map(e=>`<option style="font-family:${e}" value="${e}">${e}</option>`).join('')
const SrcSVG=e=>`data:image/svg+xml,${encodeURIComponent(e)}`

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




function Tecla(key){
  const event = window.event
  const keys = {ctrl:event.ctrlKey,shift:event.shiftKey,alt:event.altKey}
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
function Promss_Imgs(files,div){
  const arry = []
  for (const file of files) {
      const reader = new FileReader()
      const promise = new Promise(r => {
          reader.onload = e => {
              const img = document.createElement('img')
              const Div = document.createElement('div')
              Div.classList.add('DivImgRsut')
              Div.classList.add('Ct')
              Div.classList.add('Rltv')
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




// Exibir Bandeija abaixo de uma Div Especifica
function ShowBndj(div,svg){ // div, é o clicado
  function PoseBndj(e){
      const parent = e.dataset.pai ? $(e.dataset.pai) : Pai(e) // Pai pode ser propprio Pai, ou um Pai externo, com 'dataset="#bandeja"'
      const rect = parent.getBoundingClientRect()
      const cor = window.getComputedStyle(e).backgroundColor
          if(!$('.Seta',e)){
              e.innerHTML += `<a class="Seta traz none" style="height:12px;z-index:0">${svg.replace('""',`"fill:#ff7300"`)}</a>`
              e.innerHTML += `<a class="Seta" style="height:10px;z-index:1">${svg.replace('""',`"fill:${cor}"`)}</a>`}
      e.style.top  = `${rect.bottom+window.scrollY+10}px`
      e.style.left = `${(rect.left+(rect.width/2))-(e.offsetWidth/2)+window.scrollX}px`
  }
  const e = $('.Bandj',div)
  if (e.contains(event.target)){if(Tecla('ctrl')){e}else{return}}else{TogShow(e);PoseBndj(e)}
  if(Tecla('ctrl')){Add(e,'Trav');Show($('.traz',e));ClickFora(div,()=>{Show(e)})}else{Rmv(e,'Trav');None($('.traz',e));ClickFora(div,()=>{None(e)})}
}

// Exibir Lista de Sugestões abaixo de uma Div Específica
function SuggAntigo(Val,Arry,Stg,list,Func){
  if(Val){Show(list);list.innerHTML = Arry.filter(e=>a(e[Stg]).includes(a(Val)) || String(e['ID']).includes(Val)).map(e=>`<a class="ppt w100 Ct" onclick="${Func}(this,'${e[Stg]}',${e['ID']});None(Pai(this))"><p>${e['ID']}</p><p>${e[Stg]}</p></a>`).join('')}
  else{None(list);Inn(list,'')}
}

function Sugg(Val, Arry, Stg, list, Func) {
  if (Val) {
    Show(list);
    const highlightedVal = Val; // Normaliza o valor de busca
    const regex = new RegExp(`(${a(highlightedVal)})`, 'gi'); // Cria um regex que ignora maiúsculas e minúsculas

    list.innerHTML = Arry
      .filter(e => a(e[Stg]).includes(a(highlightedVal)) || String(e['ID']).includes(highlightedVal))
      .map(e => {
        const highlightedID = String(e['ID']).replace(regex, '<span style="background: #8f007c;color:white">$1</span>'); // Destaca os caracteres no ID
        const highlightedText = a(e[Stg]).replace(regex, '<span style="background: #8f007c;color:white">$1</span>'); // Destaca os caracteres no texto

        return `<a class="ppt w100 Ct" onclick="${Func}(this,'${e[Stg]}',${e['ID']});None(Pai(this))">
                  <p>${highlightedID}</p>
                  <p>${highlightedText}</p>
                </a>`;
      })
      .join('');
  } else {
    None(list);
    Inn(list, '');
  }
}



function ClickSugg(eu,nome,id){$('input',Avo(eu)).value = nome ; Nm($('input',Avo(eu)),id)}
function ClickSugg2(eu,nome,id){$('input',Avo(eu)).value = nome ; Nm($('input',Avo(eu)),id) ; None(Bzv(eu)) ; DispClick($('.sppns',Pai(eu.closest('.Bandj'))))}


// Upei na parte da Infinity

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