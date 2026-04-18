// Dia 22/03/2025
// Dia 28/06/2025 (HexRGB)
// Dia 13/07/2025 (UpperCase) (Novas Funcs) (ExtraClass)
// Dia 03/08/2025 (Trazendo o templates.js) (SVG's)
// Dia 16/10/2025 (Inner Correção)
// Mask
// Dia 31/12/2025

// tem q da uma Ajeitadinha pra melhorar, e ter certeza se tudo Funciona
const Insert=e=>({ // Como Chamar a função: Insert('#onde botar').Befor ou .After('o que botar String ou Div','#depois de quem')
  Befor:(Stg,Stg2=null)=>{const r = $(Stg2,$(e)) ; typeof Stg === 'string'
    ? r ? $(e).insertBefore(document.createRange().createContextualFragment(Stg),r) : $(e).insertAdjacentHTML('beforeend',Stg)
    : r ? $(e).insertBefore(Stg,r) : $(e).appendChild(Stg)},
  After:(Stg,Stg2=null)=>{const r = $(Stg2,$(e)) ; typeof Stg === 'string'
    ? r ? r.insertAdjacentHTML('afterend',Stg) : $(e).insertAdjacentHTML('afterbegin',Stg)
    : r ? r.parentNode.insertBefore(Stg,r.nextSibling) : $(e).appendChild(Stg)}
})
const LOG=(...stg)=>console.log(...stg)
const ERR=(...stg)=>console.error(...stg)
const MS=IN=>{const ms = (performance.now()-IN) ; if(ms<0.5) ; if(ms<1000){return ms.toFixed(2)+'ms'} ; return (ms/1000).toFixed(2)+'s'}

//Retornos DOM________________________________________________________________________________________________________________
const     $ = (Stg,e=document)=>(typeof Stg==='string'?e.querySelector(Stg):Stg)
const    $$ = (Stg,e=document)=>(typeof Stg==='string'?Array.from(e.querySelectorAll(Stg)):Stg)
const   Inn = (e,Stg=null)=>{const el=$(e);return el?(Stg===null?el.innerHTML:(el.innerHTML=Stg)):undefined}
const   Vll = (e,Stg=null)=>{const el=$(e);return el?(Stg===null?el.value    :(el.value    =Stg)):undefined}
const    Nm = (e,stg=null)=>e?stg===null?e.getAttribute('name'):e.setAttribute('name',stg):undefined
const   $Tx = (Stg,e=document)=>$(Stg,e).textContent
const   $Vl = (Stg,e=document)=>$(Stg,e).value
const   VLl = e=>e.tagName === 'INPUT' ? (e.type === 'checkbox' ? e.checked : e.value) : e.innerText.trim()
const   llv =(e,v)=>{if(e.tagName === 'INPUT' && e.type === 'checkbox'){e.checked = typeof v === 'string' ? JSON.parse(v) : v;} else {e.value = v}}
const Clear = e=>[e].flat().forEach(el=>$(el).value='')
const  Inn_ = (e,Stg)=>$(e).innerHTML+=Stg
const   Src = (e,Stg)=>$(e).src = Stg
const   Txt = e=>e.innerText.trim()
const    Rx = arry=>FazArry(arry).map(e=>`[class*="${e}"]`).join('')
const   _td =e=>e.tagName==='TD'?e:e.closest('td')
const   _tr =e=>e.tagName==='TR'?e:e.closest('tr')
const   _th =e=>e.tagName==='TH'?e:e.closest('th')
const _table=e=>e.tagName==='TABLE'?e:e.closest('table')
const _tbody=e=>e.tagName==='TBODY'?e:e.closest('tbody')
const getClss   =(e,Stg)=>[...e.classList].find(c=>c.includes(Stg))   || null // pegar uma Element q a Class contem a String
const getClssIN =(e,Stg)=>[...e.classList].find(e=>e.startsWith(Stg)) || null // pegar uma Element q a Class inicia com a String

//Retornos DOM Parentes_______________________________________________________________________________________________________
const Parent=(e,n)=>Array(n).fill(0).reduce(p=>p.parentNode,e)
const Pai=e=>Parent(e,1), Avo=e=>Parent(e,2), Bzv=e=>Parent(e,3), Ttv=e=>Parent(e,4), Vo5=e=>Parent(e,5)
const SibNxt = e=>e?.nextElementSibling || null                                             // Retorna o próximo elemento irmão de 'e' (ou null se não houver)
const SibPrv = e=>e?.previousElementSibling || null                                         // Retorna o elemento irmão anterior de 'e' (ou null se não houver)
const SibIdx = (e,x)=>[...e?.parentElement?.children || []][x] || null                      // Retorna o irmão na posição 'x' dentro do mesmo pai de 'e' (ou null se não existir)
const SibQSl = (e,Q)=> [...e?.parentElement?.children || []].find(s=>s.matches(Q)) || null  // Retorna o primeiro irmão de 'e' que corresponde ao seletor CSS 'Q' (ou null se nenhum corresponder)
const SibAll = e=>[...e?.parentElement?.children || []].filter(s=>s!==e)                    // Retorna todos os irmãos de 'e', exceto o próprio 'e'

// Ações DOM___________________________________________________________________________________________________________________
const Onloads=e=>{$$('[onload]',$(e)).forEach(E=>{const on=E.getAttribute('onload').replace(/this/g,`$(E)`);eval(on)})} // Pega todas '*' com Onload de uma Div especifica, e Roda o Onload de cada
const Befor  =(e,Stg,Stg2)=>typeof Stg === 'string' ? $(e).insertAdjacentHTML('beforeend',Stg):$(e).insertBefore(Stg,$(Stg2,$(e)))
const After  =(e,Stg)=>$(e).insertAdjacentHTML('afterbegin',Stg)
const Dlt    =e=>FazArry(e).forEach(E=>E.remove())
const DltAll =e=>$$(e).forEach(e=>e.remove())
const InnAll =(Stg,e)=>$$(Stg).forEach(E=>E.innerHTML = e)
const NewTag =e=>document.createElement(e)
const NewImg =Src=>Object.assign(new Image(),{src:Src})
const NewDiv =Cls=>Object.assign(NewTag('div'),{className:Cls})
const Zindx  =e=>e.forEach((e,x,obj) => e.style.zIndex = obj.length-x) // acho q n funciona mais
const InnTogg=(e,Stg,Stg2)=>$(e).innerHTML = $(e).innerHTML===Stg?Stg2:Stg
const ValTogg=(e,Stg,Stg2)=>$(e).value     = $(e).value    ===Stg?Stg2:Stg
const Clen_Ipts=e=>$$('input', e).forEach(I=>I.value='')
const Clen_Slct=e=>$$('select',e).forEach(S=>S.selectedIndex=0)
const Clen_Alls=e=>{Clen_Ipts(e);Clen_Slct(e)}
const Foco   =e=>$(e).focus()
const FocoCh0=e=>$(e).children[0].focus()
const FocoIn =e=>e.focus()
const FocoOut=e=>{e.focus();e.setSelectionRange(e.value.length,e.value.length)}
const EntBlr=e=>KeyEntr(()=>e.blur()) // fazer Blur caso enter seja pressionado
const Prvn=()=>event.preventDefault()
const Prvn2 = ev=>(ev||event).preventDefault() // Acho q esse é melhor q o de cima


// Funções de Validações_______________________________________________________________________________________________________
const isDOM   = v => v instanceof Element;
const Is      =(e,stg)=>stg[0]==='.' ? Coten(e,stg.slice(1)) : stg[0]==='#' ? e.id===stg.slice(1) : e.tagName===stg.toUpperCase()
const Is_View = (e,total=false)=>{if(!e) return false;const r = e.getBoundingClientRect();return total ? (r.top >= 0 && r.left >= 0 && r.bottom <= innerHeight && r.right <= innerWidth) : (r.bottom >= 0 && r.right >= 0 && r.top <= innerHeight && r.left <= innerWidth)}
const View_Vid=e=>{FazArry(e).forEach(v=>{new IntersectionObserver(es=>v[es[0].isIntersecting?'play':'pause']()).observe(v)})}
const IsImgLod=img=>img.complete && img.naturalWidth !== 0
const UndfNull=e=>e===undefined||e===null
const NoVazi  =v=>v!=='' && v!==false && v!==undefined && v!==null // Não está vazio
const IsInp   =e=>'value' in e
const IsNum   =e=>typeof e==='number'
const IsCnv   =e=>e.tagName === 'CANVAS'
const KeyEntr =Call=>{if(event.code === 'Enter' || event.keyCode === 13){event.preventDefault();Call()}}
const KeyCtrl =e=>e.button == 0 && e.ctrlKey ? true : false
const Tecla   =k=>{const event = window.event;const keys  = {ctrl:event.ctrlKey,shift:event.shiftKey,alt:event.altKey};return keys[k]}
const isArr   =e=>Array.isArray(e)
const l0      =e=>e.length===0
const Bool    =e=>typeof e === 'boolean' ? e : e=='true'
const IsObj=e=>(typeof e === "object" && e !== null && !Array.isArray(e) && e.constructor === Object)
//Funções Check
const IsChkTru   =e=>e.checked==true
const IsChkFal   =e=>e.checked==false
const ChkTru     =e=>e.checked=true
const ChkFal     =e=>e.checked=false
const ChkTru_Clik=e=>{ChkTru(e) ; DispClick(e)}
const ChkFal_Clik=e=>{ChkFal(e) ; DispClick(e)}
const AddReqr=e=>e.forEach(e=>{$(e).required = true })
const EscReqr=e=>e.forEach(e=>{$(e).required = false})
const Coten =(e,Clss)=> FazArry(Clss).some(E=>e.classList.contains(E)) // NEXBEE
const Noten =(e,Clss)=>!FazArry(Clss).some(E=>e.classList.contains(E)) // NEXBEE
const TestPass = (e,ignore=[]) => ["Não pode estar vazio","Ter pelo menos 8 caracteres","Ter pelo menos uma letra maiúscula","Ter pelo menos um caractere especial"].map((l,i)=>(!ignore.includes(i) && ![+!!e,+!!(e.length>=8),+(/[A-Z]/.test(e)&&e.length>1),+(/[!@#$%^&*(),.?":{}|<>]/.test(e)&&e.length>1)][i] ? l : null)).filter(Boolean) // no segundo argumento posso iguinorar alguma condição
const TestEmail=e=>["@gmail.com","@yahoo.com","@yahoo.co.uk","@outlook.com","@hotmail.com","@live.com","@icloud.com","@me.com","@aol.com","@protonmail.com","@zoho.com","@mail.com","@gmx.com","@yandex.com"].some(E=>e.endsWith(E))

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
const TrcFih  =(e,Chi)=>Filh(Pai(e)).forEach(f=>(f==e?None(f):(Chi?(f==Chi?Show(f):None(f)):Show(f))))||(Chi&&Chi.focus()); // Oculta o Atual e exibe o Resto Funciona melhor com 2 Filhos

// Funções de CSS ________________________________________________________________________________________________________________
const Add=(e,Stg)=>FazArry(e).forEach(E=>E.classList.add(Stg))
const Rmv=(e,Stg)=>FazArry(e).forEach(E=>E.classList.remove(Stg))
const Tog=(e,Stg)=>FazArry(e).forEach(E=>E.classList.toggle(Stg))
const TrcTog=(e,s1,s2)=>{FazArry(e).forEach(E=>{Tog(E,s1) ;Tog(E,s2 )})}
const Trc =(e,add,rmv)=>{FazArry(e).forEach(E=>{Add(E,add);Rmv(E,rmv)})}
const Trc2=(e,add,rmv)=>{Add($(e),add);Rmv($(e),rmv)}
const TrcCls=(c1,c2)=>{const add = $$(c1).length === 0 ? c1 : c2;const rmv = add === c1 ? c2 : c1;Trc($$(rmv), add, rmv)}
const ATV=(a,b)=>{if(b){Rmv($(b),'Atv')} ; Add($(a),'Atv')}
const DTV=(a,b)=>{if(b){Add($(b),'Atv')} ; Rmv($(a),'Atv')}
const TOV=(a  )=>Tog($(a),'Atv')
const DarkLite=e=>{TrcTog($(e),'Dark','Lite')}
const Add_N=e=>FazArry(e).forEach(el=>Add(el,'none'))
const Rmv_N=e=>FazArry(e).forEach(el=>Rmv(el,'none'))
const Tog_N=e=>FazArry(e).forEach(el=>Tog(el,'none'))
const AddTrue=(Div,Stg,Valid)=>Valid ? Add(Div,Stg) : Rmv(Div,Stg)
const RmvTrue=(Div,Stg,Valid)=>Valid ? Add(Div,Stg) : Rmv(Div,Stg)
const ATVtrue=(Div    ,Valid)=>Valid ? ATV(Div)     : DTV(Div)
const N_Tru=(e,Tru)=>Tru ? Rmv_N(e) : Add_N(e)
const N_Fal=(e,Fal)=>Fal ? Add_N(e) : Rmv_N(e)


//Funções de Objeto e Array____________________________________________________________________________________________________
const ObjKey =e=>Object.keys(e)                              // Converte todos Keys de Objetos em um array
const ObjVal =e=>Object.values(e)                            // Converte todos value de Objetos em um array
const ObjEtr =e=>Object.entries(e)                           // Converte um objeto em um array de pares [key,val]
const For    =e=>Array.from({length:e},(_,x)=>x)             // Converte 'number' em um array de 0 até 'number'
const Fbj    =obj=>For(ObjKey(obj).length)                   // Faz a Mesma coisa só que com a Chave do Objeto
const IdxDe  =e=>Array.from(Pai(e).children).indexOf(e)      // Passo (div) Retorna o Index dela
const Filh   =e=>Array.from($(e).children)                   
const FIdx   =(Arr,Stg)=>Arr.findIndex(e=>e===Stg)           // Retorna o Index de um item em um array baseado na String
const ObjOrdn=(obj,Arr)=>Arr.map(k=>obj[k]).filter(v=>v!==undefined) // Ordena key de Objeto de acordo com um array
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
const cRepet  =arr=>arr.reduce((acc,e)=>{acc[e]=(acc[e] || 0) + 1 ; return acc},{}) // Conta quantas vezes cada item aparece no array
const cRepetID=arr=>arr.reduce((acc,e)=>{const k=e.Id ; acc[k] = (acc[k] || 0) + 1 ; return acc;},{}) // Conta quantas vezes cada Id aparece no array de objetos
const OrdnCol=(arar,ord)=>arar.map(row=>ord.map(col=>row[arar[0].indexOf(col)])) // Reordena as Colunas de uma Tabela (a Ordem das colunas futuramente vai ser Definida pelo Usuário)
const zipObj=(Key,Val)=>Object.fromEntries(Key.map((k,x)=>[k,Val[x]])) // Cria um obj a partir de dois array: um de chaves (keys) e outro de valores (values). // Exemplo: zipObj(['a','b'], [1,2]) => { a: 1, b: 2 }
const NULL__=a=>a.map(o=>Object.fromEntries(Object.entries(o).map(([k,v])=>[k,v??""])))
const SOMA_Obj2 = (ArrObj, Key) => Array.isArray(ArrObj) ? ArrObj.reduce((soma, obj) => Number(soma) + Number(obj[Key] || 0), 0) : 0;  // ESSA JÁ TAVA LÁ ANTES
const ContFreq = (ArrObj,k)=>ArrObj.reduce((a,e)=>(e[k]?.trim()&&(a[e[k].trim()]=(a[e[k].trim()]||0)+1),a),{}) // Contagem de frequência só recebe um array de Objetos

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
const Dispinput=e=>e.dispatchEvent(new Event('input',{bubbles:true}))

//Funções Conversor de Valores_________________________________________________________________________________________________
const    Ared = e=> Math.floor(e)
const      Cm = e=> parseFloat(e).toFixed(2).replace('.',',')
const      RS_= e=>'R$ '+e.toLocaleString('pt-BR',{minimumFractionDigits:2})
const      RS = e=> `R$ ${Cm(e)}`
const   Tm_RS = e=>`<div class="Ct"><p class="RS">R$</p><a>${Cm(e)}</a></div>`
const  Tm_RS2 = e=>`<div class="RS Ct"><i class="rs">R$</i><b class="rs">${Cm(e).split(',')[0]}</b><i class="rs">,${Cm(e).split(',')[1]}</i></div>`
const     Num = e=>e==null?0:typeof e==='number'?isNaN(e)?0:e:typeof e!=='string'?0:((t=e.trim())==''?'':t=='--'?0:((n=parseFloat(t.replace(/R\$\s?/gi,'').replace(/\./g,'').replace(',','.'))),isNaN(n)?0:n))
const  CalcMB = e=>Num((new Blob([JSON.stringify(e)]).size/1024).toFixed(2)) // Calcula quantos MB o arquivo tem
const    _0_1 = e=>Number(Math.min(Math.max(e,0),1)) // Converte valores pra ficar Entre 0 e 1
const     Pct = e=>`${(e*100).toFixed(2)}%`   // Sem USO
const    Virg = e=>e.replace('.',',')         // Sem USO
const    Zero = e=>String(e).padStart(3,'0')  // Sem USO
const Porcent = (V1,V2)=>((V1-V2)/V1)*100     // Sem USO
const LocPcnt = (parte,total)=>(parte/total)  // Sem USO

//Funções Conversor de Strings_________________________________________________________________________________________________
const aa=Stg=>Stg.toLowerCase()
const AA=Stg=>Stg.toUpperCase()
const Aa=Str=>Str[0].toUpperCase()+Str.slice(1).toLowerCase()
const CleaAsps=e=>e.replace(/\*.*\*/,'').replace("*",'')
const BrevData=Stg=> Stg.match(/\d{2}\/\d{2}\/\d{4}/) ? Stg.replace(/\/\d{4}$/,'') : Stg // Remover o ano 2024 de uma String Data
const DMY=e=>e.split('-').reverse().join('/') // Muda String YYYY-MM-DD para DD/MM/YYYY
const YMD=e=>e.split('/').reverse().join('-') // Muda String DD/MM/YYYY para YYYY-MM-DD
const RgbToHex =rgb=>`#${rgb.replace(/^rgb\(|\s+|\)$/g,'').split(',').map(x=>parseInt(x).toString(16).padStart(2,'0')).join('')}`
const hexToRGB =hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `rgb(${r},${g},${b})`}
const hexToRGB2=hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `${r},${g},${b}`}
const RGBa=(e,op=0.2)=>{const [r,g,b]=getComputedStyle(e).backgroundColor.match(/\d+/g) ; e.style.backgroundColor = `rgba(${r},${g},${b},${op})`}
// Funções de Replace
const RxRepeti = e=>e.replace(/(.)\1+/g,'$1')                               // Remove letras repetidas seguidas (ex: "booom" → "bom")
const RxEspaco = e=>e.trim().replace(/\s+/g,' ')                            // Remove espaços extras (início/fim e múltiplos espaços internos)
const RxAcento = e=>e.normalize('NFD').replace(/[\u0300-\u036f]/g,'')       // Remove acentos (ex: "ação" → "acao")
const RxPlural = e=>e.replace(/ão$|ões$|ao$|oes*$/,'ao').replace(/s*$/i,'') // Converte plurais para singular genérico (ex: "ações" → "acao")
const NewRegex = e=>new RegExp(e.split('').map(e=>e+'.{0,3}').join(''),'i') // Transforma String num Regex Conciderando esse Criterio de .{0,3}
const RxClear  = s=>RxPlural(RxAcento(RxRepeti(RxEspaco(aa(s)))))           // chama todos os Replaces
const EscpRgx  = s=>s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')               // Escapa símbolos de regex (.+*?^$()[] etc.) para uso literal em uma RegExp
const RmvPlural= s=>s.endsWith('ões')?s.slice(0,-3)+'ão':s.endsWith('ães')?s.slice(0,-3)+'ão':s.endsWith('is')?s.slice(0,-2)+'l':s.endsWith('res')?s.slice(0,-1):s.endsWith('s')&&s.length>2?s.slice(0,-1):s
const QntTempo = data => {
  const d = new Date(data), ms = Date.now() - d, m = 6e4, h = 36e5, d1 = 864e5;
  if (isNaN(d)) return '-';
  if (ms < m) return 'agora mesmo';
  const n = (v,u,s) => `há ${v} ${u}${v>1?s||'s':''}`;
  if (ms < h)   return n(Math.floor(ms/m),'minuto');
  if (ms < d1)  return n(Math.floor(ms/h),'hora');
  const dias = Math.floor(ms/d1);
  if (dias === 1) return 'ontem';
  if (dias < 7)   return n(dias,'dia');
  if (dias < 30)  return n(Math.floor(dias/7),'semana');
  if (dias < 365) return n(Math.floor(dias/30),'mês','es');
  return n(Math.floor(dias/365),'ano');
}

// Funções de Eventos__________________________________________________________________________________________________________
const EvtChng=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('change',Call))
const EvtInpt=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('input' ,Call))
const EvtClik=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('click' ,Call))
const EvtFocs=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('focus' ,Call))
const EvtBlur=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('blur'  ,Call))
const RmvChng=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('change',Call))
const RmvInpt=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('input' ,Call))
const RmvClik=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('click' ,Call))
const Copy   =(area,stg)=>{area.value = stg ; area.select() ; document.execCommand('copy') ; console.log('Copiado')}
const ClickFora=(e,Call)=>{const H=(E)=>!e.contains(E.target) && (Call(),RmvClik(document,H));EvtClik(document,H)}
const OBS    =(e,Call,p=null)=>new MutationObserver(()=>Call()).observe(e,{attributes: true,attributeFilter: p && Array.isArray(p) ? p : undefined})

//Funções Geradores____________________________________________________________________________________________________________
const Rndn    =e=>Math.floor(Math.random()*e)
const Randomm =(min,max)=>Rndn((max-min+1))+min
const RandoCor=()=>'#'+Rndn(16777215).toString(16).padStart(6,'0')
const GerarID =()=>`ID-${Rndn(900)+100}`
const GerarIT =()=>`IT-${Rndn(900)+100}`
const Dat     =e =>new Date(e)
const HOJE    =()=>new Date().toLocaleDateString('pt-BR')
const AGORA   =()=>`${HOJE()} ${new Date().toLocaleTimeString('pt-BR')}`

//Controlador de Cursor__________________________________________________________________________________________________________
const AplyRng = r=>(getSelection().removeAllRanges(),getSelection().addRange(r))
const CurAll  = e=>AplyRng((r=document.createRange(),r.selectNodeContents(e),r)) // Seleciona Tudo
const CurEnd  = e=>AplyRng((r=document.createRange(),r.selectNodeContents(e),r.collapse(false),r)) // vai pra o Fim da Linha

// Mask________________________________________________________________________________________________
const Mask = {
  cpf   :i=>{if(i.value.length > 14) i.value = i.value.substring(0,14); i.value = i.value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{2})$/,'$1-$2')},
  fone  :i=>{if(i.value.length > 15) i.value = i.value.substring(0,15); i.value = i.value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2')},
  data  :i=>{if(i.value.length > 10) i.value = i.value.substring(0,10); i.value = i.value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'$1/$2').replace(/(\d{2})(\d{4})$/,'$1/$2')},
  cep   :i=>{if(i.value.length > 10) i.value = i.value.substring(0,10); i.value = i.value.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2')},
  RS    :e=>{let v=(IsInp(e)?Vll(e):Inn(e)).replace(/\D/g,'').padStart(3,'0');let r=v.slice(0,-2),c=v.slice(-2);let m=`R$ ${parseInt(r).toLocaleString('pt-BR')},${c}`;if(IsInp(e))Vll(e,m);else Inn(e,m);if(!IsInp(e)){CurEnd(e)}},
  Num   :e=>{
    const I = IsInp(e)
    let v = ( I ? Vll(e) : Inn(e)).replace(/\D/g,'').replace(/^0+(?=[1-9])/,'')
    if (!v) { I ? Vll(e,'') : Inn(e,'') ; if (!I) CurEnd(e); return }
    const n = v.length
    let m = n < 3 ? '0,' + v.padStart(2,'0'):v.slice(0,Math.min(2,n-2))+','+v.slice(-2)
    if (n > 5) m = m.slice(0,5)
      I ? Vll(e,m) : Inn(e,m)
    if (!I) CurEnd(e)
  }
}
const Mask2 = {fone:i=>{if(i.innerHTML.length > 15) i.innerHTML = i.innerHTML.substring(0,15); i.innerHTML = i.innerHTML.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2') ; CurEnd(i)}} 

// Funções de Templates________________________________________________________________________________________________________
// Daqui pra Baixo são Funções Gerais que Possuem Class, Id, e CSS particulares, tem que ter cuidado ao Usar algo Daqui!
// Mas só de Importar este PreScript pode dar conflito no HTML q estiver usando isso.
// então Logo Abaixo Listarei as Class e Id que já estarão em USO
const SVG={
    Ponta:`<svg class="svg-Ponta" style="" viewBox="0 0 258 128"><path d="M161 15l98 113H0l98-113c17-20 46-20 63 0z"/></svg>`
    ,Lixo:`<svg class="svg-Lixo HOV PT" viewBox="0 0 153 188"><path d="M23.79 58.73h105.45v104.31c0 7.2-4.5 12.71-11.59 12.71H35.39c-7.09 0-11.59-5.52-11.59-12.71V58.73zm114.05-35.52h-31.78c0-7.46 1.94-16.7-5.52-21.4-3.5-2.2-5.95-1.78-11.3-1.78H63.07c-5.39 0-7.6-.26-11.01 2.08-6.38 4.37-5.07 11.01-5.07 21.1H23.79c-8.38 0-15.77-.9-20.11 3.45-5.02 5.03-3.44 13.69-3.46 20.12-.02 6.66 5.04 11.95 11.61 11.95v96.84c0 17.45 3.04 32.52 23.34 32.31h88.8c16.48-5.1 17.23-16.74 17.23-31.37V58.73c4.29 0 7.53-2.29 9.42-4.79 2.51-3.33 2.18-6.8 2.18-12.4 0-5.48.63-8.95-1.71-12.5-3.31-5.03-7.86-5.83-13.25-5.82zm-38.14 65.8v68.42c0 9.57 11.97 8.38 11.97 1.87v-72.16c0-6.23-11.97-8.14-11.97 1.87zm-58.33-1.87v72.16c0 6.18 11.97 8.15 11.97-1.87v-68.42c0-9.91-11.97-8.13-11.97-1.87zm29.17.75v70.66c0 7.77 11.97 7.77 11.97 0v-70.66c0-7.88-11.97-7.88-11.97 0zm-51.23-52.72h114.42c9.88 0 8.72 11.59 1.12 11.59H22.49c-7.65 0-8.7-11.59 1.12-11.59zm45.62-23.18h23.18c6.74 0 5.98 6.88 5.98 11.22H63.12c0-4.61-.67-11.22 5.98-11.22z"/></svg>`
    ,Chek:`<svg viewBox="0 0 568 413"><path d="M207 265l-110-118c-63-67-129 13-81 64l187 201 342-319c60-56-15-128-71-76l-267 247z"/></svg>`
    ,Fexa:`<svg class="HOV PT" viewBox="0 0 7899.71 7899.71"><path d="M7636.53 274.37c351.27,351.27 350.54,925.58 0,1276.12l-2396.94 2396.99 2389.65 2389.6c355.18,355.23 355.18,936.88 0,1292.1l0 0c-355.23,355.23 -936.88,355.23 -1292.1,0l-2389.65 -2389.6 -2396.99 2396.94c-351.22,351.27 -925.58,350.54 -1276.12,0 -351.22,-351.22 -350.54,-925.58 0,-1276.12l2396.99 -2396.94 -2404.9 -2404.96c-355.23,-355.23 -355.23,-936.88 0,-1292.1l0 0c355.23,-355.18 936.88,-355.18 1292.1,0l2404.9 2404.96 2396.94 -2396.99c351.27,-351.22 925.58,-350.54 1276.12,0z"/></svg>`
    ,Mais:`<svg class="HOV PT" viewBox="0 0 110.89 110.89"><path d="M55.57 0c5.29,0 9.61,4.33 9.61,9.61l0 36.1 35.99 0c5.35,0 9.73,4.38 9.73,9.73l0 0c0,5.35 -4.38,9.73 -9.73,9.73l-35.99 0 0 36.1c0,5.29 -4.33,9.61 -9.61,9.61 -5.29,0 -9.61,-4.33 -9.61,-9.61l0 -36.1 -36.22 0c-5.35,0 -9.73,-4.38 -9.73,-9.73l0 -0c0,-5.35 4.38,-9.73 9.73,-9.73l36.22 0 0 -36.1c0,-5.29 4.33,-9.61 9.61,-9.61z"/></svg>`
    ,Cler:`<svg class="HOV PT" viewBox="0 0 453.06 566.32"><path d="M336.56 534.94c0,-12.86 4.72,-45.31 7.22,-58.09 3.37,-17.19 8.05,-34.07 13.92,-49.97 5.95,-16.12 10.91,-31.05 18.12,-45.81l20.49 -43.58c-3.83,-4.8 -51.72,-31.07 -56.93,-34.24 -19.35,-11.81 -38.19,-21.81 -57.45,-33.5l-114.96 -66.94c-5.53,8.34 -10.46,16.49 -16.52,25.12 -9.02,12.84 -25.66,35.07 -36.85,46.5 -13.23,13.51 -28.58,28.68 -43.03,40.19 -7.78,6.19 -15.12,12.09 -23.21,18.48 -8.64,6.83 -15.08,11.65 -23.52,18.04 -7.84,5.93 -15.65,12.15 -23.85,17.75l45.61 49.38c2.73,2.55 28.72,25.46 30.76,25.37 5.84,-0.26 75.27,-76.16 86.73,-83.9 -1.23,5.33 -11.1,21.2 -14.24,27.47 -4.49,8.98 -9.79,17.46 -14.23,26.15 -2.34,4.58 -4.64,8.35 -7.35,13.51 -2.7,5.13 -4.65,8.46 -7.32,13.52 -3.42,6.46 -12.51,20.96 -13.81,26.58l38.52 23.87c54.48,31.83 131.58,61.01 193.19,75.51l-1.29 -31.38zm-152.75 -355.67c0,14.78 9.93,19.46 19.35,24.91l137.75 80.49c11.18,6.47 45.16,29.29 57.78,29.29 17.31,0 37.54,-43.36 37.54,-51 0,-9.35 -3.05,-15.99 -10.35,-20.94l-155.1 -90.45c-11.88,-7.24 -22.79,-12.95 -34.41,-20.16 -5.57,-3.46 -13.03,-4.75 -20.66,-2.38 -7.38,2.29 -10.63,6.69 -14.22,13.17 -5.09,9.21 -17.69,27.17 -17.69,37.08zm124.27 -28.77c4.83,3.27 10.32,6.11 15.46,9.23l47.97 27.39 52.03 -91.28c3.73,-6.28 6.6,-12.06 10.34,-18.32 7.02,-11.75 19.18,-28.13 19.18,-42.09 0,-15.67 -15.58,-21.86 -30.64,-30.51 -28.77,-16.51 -37.53,11.41 -54.01,40.49l-29.79 52.24c-1.35,2.27 -2.76,4.04 -4.11,6.31 -1.65,2.78 -2.03,3.94 -3.67,6.75l-22.75 39.78z"/></svg>`
   ,Tempo:`<svg class="HOV PT" viewBox="0 0 6121.17 6121.95"><path d="M5496.46 3335.94c-46.14,352.73 -155.86,662.25 -292.31,920.64 -116.73,221.03 -355.09,513.98 -555.62,675.41 -433.38,348.91 -1090.47,668.54 -1857.96,563.08 -1277.26,-175.5 -2316.58,-1233.52 -2156.47,-2719.06 134.55,-1248.51 1278.98,-2308.86 2723.93,-2143.19 1221.6,140.06 2322.72,1294.47 2138.43,2703.12zm-2735.81 0c196.26,173.3 1347.75,865.1 1607.95,992.39l207.93 -358.87c-205.44,-211.81 -1143.17,-641.16 -1359.62,-844.7l-0.71 -1584.16 -455.44 -4.73 -0.11 1800.06zm-2749.06 0c136.73,1606.26 1529.83,2910.38 3320.29,2776.56 1610.56,-120.37 2927.63,-1562.46 2777.62,-3340.64 -133.51,-1582.67 -1559.4,-2907.78 -3320.07,-2760.67 -1592.89,133.08 -2928.24,1557.99 -2777.84,3324.75z"/></svg>`
    ,Crop:(Clss,tog)      =>`<svg class="${Clss}" viewBox="0 0 152.96 152.96  "><g><path d="M152.96 126.63l-22.5 0 0 -14.4 22.5 0 0 14.4zm-152.96 -100.31l22.5 0 0 14.4 -22.5 0 0 -14.4zm42.2 -26.32l0 112.23 63.07 0 0 14.4 -77.29 0 0 -126.63 14.21 0zm68.56 152.96l0 -112.23 -63.07 0 0 -14.4 77.29 0 0 126.63 -14.21 0z"/><polygon class="Croped ${tog}" points="47.68,106.62 105.17,106.62 105.17,46.34 47.68,46.34 "/></g></svg>`
   ,Aling:(Clss,Cor1,Cor2)=>`<svg class="${Clss}" viewBox="0 0 1115.04 1115.03"<g><rect style="fill:white" transform="matrix(1.78337E-14 -0.131706 0.673364 3.48817E-15 518.703 658.109)" width="1527.55" height="115.29"/><circle style="fill:${Cor1}" cx="557.52" cy="238.6" r="161.42"/><circle style="fill:${Cor2}" cx="557.52" cy="876.43" r="161.42"/><rect x="0" y="-0" width="1115.04" height="1115.04"/></g></svg>`
    ,RszH:`<svg class="HOV PT" viewBox="0 0 2.62 4.56"><path d="M1.02 1.67l0 1.23 0 0.63 -0.64 -0.63c-0.07,0.05 -0.35,0.32 -0.39,0.37l1.31 1.3 1.3 -1.3 -0.37 -0.38c-0.11,0.08 -0.51,0.5 -0.64,0.63l0 -0.62 0 -1.23 0 -0.62c0.13,0.13 0.53,0.56 0.64,0.63l0.37 -0.38 -1.3 -1.3 -1.31 1.3c0.04,0.05 0.31,0.32 0.39,0.37l0.64 -0.63 0 0.63z"/></svg>`
    ,RszW:`<svg class="HOV PT" viewBox="0 0 8.33 4.78"><path d="M3.04 2.92l2.25 0 1.14 0 -1.15 1.16c0.09,0.13 0.58,0.64 0.68,0.7l2.38 -2.4 -2.37 -2.38 -0.69 0.68c0.14,0.21 0.92,0.94 1.16,1.17l-1.14 0 -2.25 0 -1.14 0c0.24,-0.23 1.01,-0.96 1.16,-1.17l-0.69 -0.68 -2.37 2.38 2.38 2.4c0.1,-0.06 0.59,-0.57 0.68,-0.7l-1.15 -1.16 1.14 0z"/></svg>`
    ,List:`<svg class="HOV PT" viewBox="0 0 6.69 4.74"><path d="M1.58 4.48l5.11 0 0 -0.53 -5.11 0 0 0.53zm-1.58 -0.56l0 0.59c0,0.1 0.13,0.23 0.23,0.23l0.59 0c0.1,0 0.23,-0.13 0.23,-0.23l0 -0.59c0,-0.1 -0.13,-0.23 -0.23,-0.23l-0.59 0c-0.1,0 -0.23,0.13 -0.23,0.23zm0 -1.84l0 0.59c0,0.1 0.13,0.23 0.23,0.23l0.59 0c0.1,0 0.23,-0.13 0.23,-0.23l0 -0.59c0,-0.1 -0.13,-0.23 -0.23,-0.23l-0.59 0c-0.1,0 -0.23,0.13 -0.23,0.23zm0 -1.84l0 0.59c0,0.1 0.13,0.23 0.23,0.23l0.59 0c0.1,0 0.23,-0.13 0.23,-0.23l0 -0.59c0,-0.1 -0.13,-0.23 -0.23,-0.23l-0.59 0c-0.1,0 -0.23,0.13 -0.23,0.23zm1.58 2.4l5.11 0 0 -0.53 -5.11 0 0 0.53zm0 -1.84l5.11 0 0 -0.53 -5.11 0 0 0.53z"/></svg>`
    ,Card:`<svg class="HOV PT" viewBox="0 0  9.9 6.88"><path d="M0.54 5.39l0 -3.86c0,-0.55 0.36,-0.94 0.74,-0.94l7.22 0c0.45,0 0.79,0.34 0.79,0.79l0 4.16c0,0.17 -0.16,0.45 -0.26,0.53 -0.12,0.1 -0.37,0.21 -0.58,0.21l-7.07 0c-0.48,0 -0.84,-0.42 -0.84,-0.89zm0.78 -3.39c0.11,0.11 0.26,0.3 0.57,0.3l6.01 0c0.91,0 0.9,-0.59 -0.1,-0.59l-5.72 0c-0.49,0 -0.59,0.13 -0.76,0.3zm3.97 3.73l2.97 0c0.5,0 0.53,-0.59 0.05,-0.59l-3.12 0c-0.32,0 -0.42,0.59 0.1,0.59zm-0.4 -1.58c0.06,0.11 0.13,0.3 0.3,0.3l3.12 0c0.47,0 0.47,-0.59 -0.05,-0.59l-2.97 0c-0.26,0 -0.31,0.13 -0.4,0.3zm-3.76 -0.64l0 1.98c0,0.19 0.24,0.25 0.45,0.25l1.93 0c0.54,0 0.4,-0.54 0.4,-1.43 0,-0.25 -0.59,-0.49 -0.59,0.2l0 0.64 -1.63 0 0 -1.29c0.67,0 1.43,0.13 1.43,-0.3 0,-0.43 -0.96,-0.3 -1.53,-0.3 -0.2,0 -0.45,0.05 -0.45,0.25zm8.03 -3.34c-0.36,-0.2 -1.16,-0.17 -1.63,-0.17l-6.11 0c-0.78,0 -1.43,0.66 -1.43,1.29l0 4.3c0,0.42 0.3,0.79 0.56,0.98 0.31,0.23 0.71,0.31 1.22,0.31l6.33 0c1.06,0 1.78,-0.46 1.78,-1.58l0 -3.02 0 0c0.01,-0.74 0.03,-1.69 -0.73,-2.11z"/></svg>`
    ,Grid:`<svg class="HOV PT" viewBox="0 0 165.77 165.78"><path d="M71.95 71.95l0 -71.8c-78.71,0 -71.8,-6.9 -71.8,71.8l71.8 0zm21.87 -71.8l0 71.8 71.8 0c0,-78.75 6.93,-71.8 -71.8,-71.8zm0 93.67l0 71.8c78.73,0 71.8,6.93 71.8,-71.8l-71.8 0zm-21.87 71.8l0 -71.8 -71.8 0c0,78.71 -6.9,71.8 71.8,71.8z"/></svg>`
    ,Gris:`<svg class="HOV PT" viewBox="0 0 165.77 165.78"><path d="M71.95 71.95l0 -71.8c-78.71,0 -71.8,-6.9 -71.8,71.8l71.8 0zm21.87 -71.8l0 71.8 71.8 0c0,-78.75 6.93,-71.8 -71.8,-71.8zm0 93.67l0 71.8c78.73,0 71.8,6.93 71.8,-71.8l-71.8 0zm-21.87 71.8l0 -71.8 -71.8 0c0,78.71 -6.9,71.8 71.8,71.8z"/></svg>`
    ,Gemn:`<svg class="HOV PT" viewBox="0 0 192.32 192.32"><path d="M-0 96.16c70.01,-17.75 75.96,-31.07 96.16,-96.16 20.2,65.09 26.15,78.41 96.16,96.16 -70.01,17.75 -75.96,31.07 -96.16,96.16 -20.2,-65.09 -26.15,-78.41 -96.16,-96.16z"/></svg>`
    ,Blok:`<svg class="HOV PT" viewBox="0 0 200.69 203.34"><path d="M117.03 0l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.86 -9.87,9.86l-73.8 0c-5.43,0 -9.86,-4.44 -9.86,-9.86l0 -73.8c0,-5.43 4.44,-9.87 9.86,-9.87zm-107.16 0l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.86 -9.87,9.86l-73.8 0c-5.43,0 -9.87,-4.44 -9.87,-9.86l0 -73.8c0,-5.43 4.44,-9.87 9.87,-9.87zm107.16 109.81l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.87 -9.87,9.87l-73.8 0c-5.43,0 -9.86,-4.44 -9.86,-9.87l0 -73.8c0,-5.43 4.44,-9.87 9.86,-9.87zm-107.16 0l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.87 -9.87,9.87l-73.8 0c-5.43,0 -9.87,-4.44 -9.87,-9.87l0 -73.8c0,-5.43 4.44,-9.87 9.87,-9.87z"/></svg>`
    ,Alvn:`<svg class="HOV PT" viewBox="0 0 142.87 141.84"><path d="M83.27 0l52.57 0c3.87,0 7.03,3.03 7.03,6.74l0 75.96c0,3.71 -3.16,6.74 -7.03,6.74l-52.57 0c-3.87,0 -7.03,-3.03 -7.03,-6.74l0 -75.96c0,-3.71 3.16,-6.74 7.03,-6.74zm-78.97 0l58.02 0c2.37,0 4.3,1.94 4.3,4.3l0 32.19c0,2.37 -1.93,4.3 -4.3,4.3l-58.02 0c-2.37,0 -4.3,-1.94 -4.3,-4.3l0 -32.19c0,-2.37 1.94,-4.3 4.3,-4.3zm76.42 99.41l57.68 0c2.46,0 4.47,2.01 4.47,4.47l0 33.49c0,2.46 -2.01,4.47 -4.47,4.47l-57.68 0c-2.46,0 -4.48,-2.01 -4.48,-4.47l0 -33.49c0,-2.46 2.01,-4.47 4.48,-4.47zm-73.69 -49.03l52.57 0c3.87,0 7.03,3.16 7.03,7.03l0 77.42c0,3.86 -3.16,7.03 -7.03,7.03l-52.57 0c-3.87,0 -7.03,-3.16 -7.03,-7.03l0 -77.42c0,-3.86 3.16,-7.03 7.03,-7.03z"/></svg>`
    ,Past:`<svg class="HOV PT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`
    ,Coin:`<svg class="HOV PT" viewBox="0 0 397.77 408.68"><path d="M192.63 306.35c-20.61,0 -43.78,-9.88 -58.44,-21.22 -15.19,-11.75 -25.69,-24.69 -33.58,-43.43 -11.3,-26.82 -11.13,-59.36 0.83,-84.94 11.11,-23.77 26.46,-41.75 50.02,-53.54 29.71,-14.87 63.57,-14.35 93.43,0.88 9.22,4.7 21.84,14.13 29.11,21.35 52.14,51.78 35.87,136.63 -28.22,170.3 -18.19,9.56 -32.32,10.6 -53.14,10.6zm-11.95 -134.08c0,-11.22 15.01,-9.29 22.57,-9.29 4.01,0 35.85,20.08 35.85,-3.98 0,-10.03 -9.64,-14.24 -19.91,-17.27 -3.38,-1 -5,-1.22 -7.98,-2.65 0,-12.85 -0.34,-18.58 -13.28,-18.58 -11.16,0 -11.95,8.85 -11.95,19.91 -8.66,0.72 -15.38,6.5 -20.29,11.58 -5.02,5.19 -8.93,12.01 -8.93,21.61 0,26.02 27.54,32.8 47.06,40.57 30.66,12.21 10.71,26.79 -8.77,23.4 -15.68,-2.73 -18.7,-9.54 -26.34,-9.54 -6.69,0 -13.28,3.05 -13.28,11.95 0,15.12 23.47,17.85 30.54,21.24 0,11.06 0.79,19.91 11.95,19.91 13.01,0 13.28,-4.36 13.28,-19.91 8.58,-2 15.73,-5.07 21.6,-10.26 10.69,-9.44 10.27,-18.06 10.27,-29.56 0,-20.08 -31.15,-31.48 -46.64,-37 -5.31,-1.89 -15.77,-5.69 -15.77,-12.12zm-114.19 23.9c0,22.32 0.42,28.44 6.92,48.84 10.23,32.13 37.22,61.23 67.86,75.52 30.8,14.37 58,15.03 89.75,8.27 7.19,-1.53 18.11,-4.86 23.96,-7.91l19.98 -11.88c4.09,-2.7 5.26,-3.43 8.96,-6.98 11.57,-11.08 10.67,-7.62 22.9,-24.89 26.56,-37.52 32.92,-92.36 11.97,-134.09 -17.16,-34.18 -47.97,-61.25 -85.28,-71.39 -3.94,-1.07 -3.76,-1.4 -7.01,-2.29 -22.08,-6.04 -49.25,-3.16 -70.78,3.6 -50.1,15.72 -89.23,68.15 -89.23,123.19z"/></svg>`
    ,Okay:`<svg class="HOV PT" viewBox="0 0 397.77 408.68"><path d="M172.12 276.62c11.36,0 22.77,-16.13 29.23,-22.73l33.66 -34.48c9.52,-9.62 56.65,-52.86 56.65,-63.52 0,-9.42 -4.96,-15.88 -12.42,-18.23 -9.29,-2.93 -14.37,0.84 -20.19,6.92l-88.71 88.8c-8.18,-5.54 -36.21,-39.64 -42.82,-39.64 -12.85,0 -21.41,6.04 -21.41,19.82 0,6.92 36.97,41.76 45.94,50.91 5.64,5.74 9.52,12.16 20.08,12.16zm26.76 -222.98l0 0c82.88,0 150.69,67.81 150.69,150.69l0 0.01c0,82.88 -67.81,150.69 -150.69,150.69l-0 0c-82.88,0 -150.69,-67.81 -150.69,-150.69l0 -0.01c0,-82.88 67.81,-150.69 150.69,-150.69z"/></svg>`
    ,Dslk:`<svg class="HOV PT" viewBox="0 0 296.93 305.07"><path d="M116.88 186.98c-0.7,2.91 -3.65,8.46 -5.1,12.09 -6.97,17.48 -17.28,52.06 1.52,64.13 3.38,2.17 8.06,3.42 12.85,3.71 12.22,0.75 2.92,-27.93 10.46,-39.58 4,-6.19 11.15,-12.31 16.54,-17.19 8.47,-7.67 30.96,-24.54 31.98,-34.94 0.92,-9.39 0.08,-23.75 0.08,-33.67 0,-8.79 0.71,-62.78 -0.69,-66.84 -3.34,-9.72 -14.04,-8.1 -24.77,-8.2 -22.32,-0.21 -44.64,-0.48 -66.95,-0.73 -12.17,-0.14 -21.19,-1.84 -27.53,6.16 -5.68,7.17 -5.07,17.5 2.7,23.42 -14.86,3.15 -16.86,22.22 -7.12,29.33 -4.01,1.63 -5.14,1.8 -7.75,4.47 -1.9,1.94 -3.41,4.06 -4.3,7.43 -1.79,6.83 1.04,14.55 5.48,17l-2.69 1.43c-1.15,0.46 -1.53,0.66 -2.57,1.33 -12.56,8.11 -8.7,28.65 7.15,30.5 8.19,0.96 21.61,0.16 30.34,0.15 10.13,-0.01 20.25,-0.01 30.37,-0.01zm80.54 -106.6l0.03 87.98c0,5.39 -0.55,9.86 2.41,13.67 4.89,6.29 13.68,4.91 22.94,4.9l19.06 -0.01c15.16,-0.01 13.45,-13.03 13.46,-22.96l0.02 -83.09c0,-16.16 -12.72,-14.06 -24.23,-14.07l-20.04 -0.01c-8.67,-0.01 -13.66,4.99 -13.66,13.58z"/></svg>`
    ,Emal:`<svg class="HOV PT" viewBox="0 0 627.61 627.61"><path d="M-0 465.95l0 -304.3c0,-39.34 24.78,-68.47 58.96,-68.47l509.7 0c38,0 58.96,33.31 58.96,68.47l0 304.3c0,39.37 -24.71,68.47 -58.96,68.47l-509.7 0c-33.93,0 -58.96,-28.78 -58.96,-68.47zm58.96 19.02l509.7 0c11.67,0 9.54,-18.32 9.51,-30.43l-0 -285.28c-9.83,2.62 -214.6,167.33 -240.93,188.89 -16.85,13.79 -27.98,15.71 -45.82,0.87l-241.96 -189.76 -0 283.38c-0.02,12.49 -2.5,32.33 9.51,32.33zm254.85 -171.17l214.91 -171.17 -429.82 0 214.91 171.17z"/></svg>`
    ,Fone:`<svg class="HOV PT" viewBox="0 0 474.8 474.8"  ><path d="M28.43 180.27c66.63,129.59 146.34,205.31 275.48,271.13 72.42,36.12 103.05,33.26 151.94,-28.69 9.06,-11.48 16.5,-22.17 18,-36.97 0,-41 -34.15,-50.7 -66.71,-70.01 -5.06,-3 -9.32,-4.89 -14.17,-7.84l-41.92 -22.97c-22.22,-10.98 -46.43,-9.06 -59.06,15.13 -6.97,13.36 -3.36,26.6 -18.59,26.6 -16.33,-3.07 -52.91,-38.37 -66.57,-51.79 -12.36,-12.14 -57.15,-60.1 -58.77,-71.87 -1.81,-13.2 19.13,-16.09 29.55,-20.79 11.91,-6.58 19.31,-16.38 19.31,-32.83 0,-17.6 -11.15,-32.88 -18.31,-44.25 -12.68,-20.12 -36.78,-70.5 -44.08,-81.06 -35.91,-47.45 -69.14,-15.01 -102.88,14.36 -51.06,44.44 -28.57,92.44 -3.22,141.85z"/></svg>`
    ,Lcal:`<svg class="HOV PT" viewBox="0 0 542.74 542.74"><path d="M244.32 271.28c-26.77,-8.29 -48.95,-28.65 -58.92,-54.88 -2.96,-7.79 -2.26,-1.43 -3.99,-13.75 -4.95,-35.26 1.02,-61.6 27.01,-87.35 22.44,-21.03 50.42,-27.91 80.68,-23.23 43.48,6.72 73.14,46.22 73.91,88.92 0.78,43.47 -21.17,76.39 -63.76,89.52 -18.8,5.8 -36.03,5.98 -54.93,0.77zm-65.91 137.63l32.05 54.6c3.84,6.4 6.86,11.92 10.67,18.21 5.79,9.56 26.6,47.19 33.13,53.52 5.37,5.21 12.09,8.41 19.96,7.26 16,-2.33 20.76,-15.8 28.75,-29.04 3.84,-6.35 7.02,-11.85 10.66,-18.22l74.94 -127.26c20.7,-34.76 57.47,-94.79 67.04,-132.65 33.54,-132.66 -83.39,-256.72 -218.29,-232.22 -60.75,11.92 -106.66,48.41 -135.65,102.63 -29.33,58.16 -25.97,117.13 3.44,174.29 22.62,43.96 47.93,86.45 73.28,128.87z"/></svg>`
    ,Carr:`<svg class="HOV PT" viewBox="0 0 376.77 376.79"><path d="M263.52 309.36c0,-25.93 39.39,-27.87 39.39,1.23 0,23.07 -39.39,24.82 -39.39,-1.23zm-103.75 -20.2c16.34,0 27.08,20.54 13.73,33.93 -11.94,11.98 -33.25,3.97 -33.5,-14.02 -0.15,-11.06 9.06,-19.92 19.77,-19.92zm-158.05 -255.93c0,6.83 3.12,12.85 9.02,15.85 5.59,2.84 8.78,1.88 14.86,1.88l24.85 -0.24c3.16,-0.01 2.38,-2.48 5.35,11.64l17.44 75.17c5.68,22.38 12.15,52.03 17.44,75.17 5.1,22.32 8.91,58.48 34.37,58.48 -2.27,3.39 -5.81,4.48 -11.24,15.35 -24,48.02 34.34,95.07 76.31,63.54 24.62,-18.49 28.87,-52.81 4.61,-78.4l53.52 0c-0.57,0.85 -0.48,0.45 -1.16,1.06 -32.3,30.66 -8.69,87.37 34.15,87.37 49.86,0 67.83,-55.35 40.31,-84.92l-3.13 -3.51c7.92,0 16.35,0.92 22,-1.89 15.37,-7.65 10.41,-32.35 -7.96,-32.35l-200.51 0c-0.03,-1.19 -4.65,-19.61 -5.17,-20.69 58.8,0 89.4,-2.59 148.15,-2.46 12.66,0.03 37.69,0.5 47.08,-5.37 8.57,-5.36 11.9,-14.79 15.46,-23.7 6.35,-16.26 26.57,-67.89 32.35,-85.38 6.72,-20.35 9.85,-32.94 -8.81,-46.8 -7.43,-4.89 -19.44,-5.27 -31.66,-5.27l-152.34 0.49c-27.45,0 -24.47,29.42 -7.54,33.65 5.56,1.39 148.44,0.09 169.97,0.09 -0.17,2.04 -35.55,93.63 -36.69,98.53 -66.91,0 -101.88,1.13 -168.83,1.72 -17.37,0.1 -14.41,2.28 -15.94,-4.74l-20.5 -91.57c-6.98,-29.53 -9.54,-69.48 -43.47,-69.46 -13.19,0.01 -16.02,0.25 -29.14,0.25 -11.5,0 -23.14,3.05 -23.14,16.5z"/></svg>`
    ,Laps:`<svg class="HOV PT" viewBox="0 0 293.58 365.77"><path d="M17.84 364.21c-9.18,5.15 -20.07,-3.22 -17.44,-13.41 5.24,-20.33 10.74,-40.74 15.75,-61.1 0.8,-3.25 1.52,-12.1 5.83,-11.78 3.1,0.23 8.83,5.89 11.81,8.29l43.12 34.51c10.42,7.94 1.85,9.27 -11.72,16.9l-47.35 26.58zm205.82 -349.39c12.78,-16.59 36.81,-19.74 53.4,-6.96l1.7 1.3c16.59,12.78 19.74,36.81 6.96,53.4l-18 23.4c-2.89,3.74 -8.26,4.44 -12,1.56l-48.51 -37.33c-3.74,-2.89 -4.44,-8.26 -1.56,-12l18 -23.4 0 0.04zm-45.22 54.79c4.04,-5.22 11.55,-6.22 16.78,-2.18l45.7 35.18c5.22,4.04 6.22,11.55 2.18,16.78l-137.08 178.14c-8.88,11.6 -7.44,11.61 -18.3,2.8 -14.26,-11.55 -28.59,-23.34 -43.05,-34.61 -2.73,-2.12 -9.23,-5.68 -9.08,-9.23 0.13,-2.99 5.25,-8.08 7.29,-10.68l105.23 -136.76 30.34 -39.43z"/></svg>`
    ,'Set>':`<svg viewBox="0 0 0.36 0.56"><path d="M0 0.48c0.02,0.02 0.06,0.07 0.08,0.08l0.28 -0.28 -0.28 -0.28 -0.08 0.08 0.2 0.2 -0.2 0.2z"/></svg>`
    ,'Set<':`<svg viewBox="0 0 0.36 0.56"><path d="M0.35 0.48c-0.02,0.02 -0.06,0.07 -0.08,0.08l-0.28 -0.28 0.28 -0.28 0.08 0.08 -0.2 0.2 0.2 0.2z"/></svg>`
    ,Soli:`<svg viewBox="0 0 598.03 659.63"><path d="M473.98 558.37c-0.03,18.81 -0.03,30.81 0.03,35.99 0.12,10.24 -6.31,14.46 -15.85,14.41 0,0 -35.03,-0.36 -35.03,0.38 0.03,21.14 0.04,33.3 0.02,36.5 -0.04,7.56 -5.17,13.99 -11.48,13.97 -143.15,0 -275.27,0 -396.33,0 -11.52,0 -15.32,-4.99 -15.32,-16.39 0.02,-262.73 0.02,-437.61 -0.01,-524.63 0,-12 3.87,-17.05 15.86,-16.78 0,0 34.96,0.68 34.96,-0.36 0.13,-57.19 -7.55,-50.43 50.38,-50.64 1.83,0 -1.06,-38.68 1.79,-43.68 3.58,-6.28 7.03,-7.14 15.15,-7.14 32.85,0.02 163.18,0.02 390.98,0.01 11.44,0 15.82,4.73 15.82,16.07 -0.03,145.61 -0.03,220.25 0.04,223.94 0.07,4.11 -0.29,6.96 -1.08,8.54 -3.2,6.41 -10.6,9.59 -17.26,6.37 -38.36,-18.52 -84.59,-11.76 -115.8,16.77 -65.44,59.77 -33.67,167.86 53.58,182.25 60.43,9.96 117.85,-35.83 121.86,-96.22 0.12,-1.73 0.47,-11.31 1.45,-13.22 5.89,-11.6 25.34,-10.54 24.56,9.1 -3.11,78.29 -67.34,111.09 -67.34,111.15 -0.04,44 -0.03,68.53 0.03,73.58 0.18,14.05 -2.84,19.65 -17.07,19.48 -0.69,0 -11.81,-0.01 -33.36,-0.02 -0.32,0 -0.57,0.26 -0.57,0.57l0 0zm-383.93 -24.16l223.46 0c16.54,0 16.54,25.67 0,25.67l-223.46 0c-16.54,0 -16.54,-25.67 0,-25.67l0 0zm-0.01 -78.81l223.46 0c16.54,0 16.54,25.66 0,25.66l-223.46 0c-16.54,0 -16.54,-25.66 0,-25.66l0 0zm0.03 -78.93l203.49 0c16.57,0 16.57,25.72 0,25.72l-203.49 0c-16.57,0 -16.57,-25.72 0,-25.72l0 0zm216.2 -65.8c0,7.03 -5.7,12.73 -12.73,12.73l-203.43 0c-16.61,0 -16.61,-25.77 0,-25.77l203.43 0c7.26,0 12.74,5.89 12.73,13.05zm-126.12 10.16c3.85,0.95 -0.03,-1.41 -0.03,-0.03 0,0.02 0.01,0.03 0.03,0.03zm282.67 43.6l0.51 0.05c34.11,-31.61 71.9,-66.64 113.35,-105.1 9.6,-8.9 25.14,1.5 20.49,14.48 -0.6,1.66 -2.76,4.22 -6.47,7.66 -20.93,19.34 -60.05,55.6 -117.36,108.78 -9.29,8.63 -16.76,9.84 -24.26,-1.01l-48.98 -67.15c-8.53,-11.55 5.24,-25.74 16.73,-19.03 4.59,2.68 27.33,35.81 45.98,61.33zm-372.78 -145.58l223.5 0c16.52,0 16.52,25.63 0,25.63l-223.5 0c-16.52,0 -16.52,-25.63 0,-25.63l0 0zm408.99 5.31l0.28 -197.95c0,-0.31 -0.24,-0.55 -0.55,-0.55 -30.71,0 -371.28,-0.2 -371.28,0.27 0,2.21 -0.2,24.88 0.24,24.88 11.89,0.02 120.28,0.03 325.18,0.01 12.59,0 21.09,0.57 21.07,15.5 0,0 -0.31,153.12 0.25,153.17 10.65,1.01 15.77,2.67 24.8,4.67zm-51.2 -147.53l-370.89 0c-0.62,0 -0.72,25.19 0.04,25.19 142.85,0 252.77,-0.01 329.77,-0.01 10.98,0 16.68,4.41 16.4,15.77 0,0 -0.33,106.74 0.29,106.74 0.03,0 0.07,0 0.09,-0.01 8.03,-2.42 16.16,-4.01 24.37,-4.75l0.44 -0.48 0 -141.95c0,-0.28 -0.23,-0.5 -0.51,-0.5l0 0zm-421.92 557.33c30.76,0 371.47,0.24 371.47,-0.31 0,-14.42 0.37,-168.95 -0.3,-169.34 -89.28,-51.2 -88.91,-178.49 0.09,-228.81 0.55,-0.32 0.16,-108 0.01,-108 -30.73,0 -371.51,-0.2 -371.51,0.27 0,41.79 -0.18,506.2 0.24,506.2l0 0zm422.14 -50.97c0.23,0 0.72,-102.09 0.06,-102.21 -2.21,-0.43 -24.98,-5.35 -24.99,-4.6 -0.06,8.99 -0.18,106.81 0.29,106.81l24.63 0zm51.01 -50.87c0.29,0 0.6,-56.4 -0.16,-56.25 -2.25,0.47 -24.94,4.79 -24.94,5.22 -0.03,4.39 -0.12,51.07 0.38,51.07l24.73 -0.04z"/></svg>`
    ,Andm:`<svg viewBox="0 0 781.83 782.04"><path d="M151.66 351.77l0 -0.87c-75.57,-44.34 -112.88,-140.09 -116.51,-224.23 -0.08,-2.04 -34.9,6.16 -34.86,-23.64 0,0 -0.7,-81.8 0.75,-86.9 2.66,-9.3 11.07,-15.85 20.99,-15.86 0,0 412.04,-0.9 418.25,0.6 8.48,2.06 14.48,8.88 16.14,17.74 1.41,7.56 -0.11,89.72 -0.13,89.79 -6.47,24.7 -34.13,15.16 -34.28,17.92 -4.99,85.88 -40.15,177.39 -116.32,224.35l0 0.68c19.21,11.47 36.03,25.94 50.47,43.38 1.26,1.5 52.14,-53.08 58.19,-56.08 7.51,-3.71 16.26,-3.29 23.28,1.37 5.55,3.67 23.99,24.9 25.55,24.26 1.62,-0.67 11.69,-4.22 11.69,-5.55 0.01,-15.31 -1.03,-29.51 0.68,-36.07 2.58,-9.88 11.02,-16.32 21.4,-16.47 8.21,-0.11 38.97,-0.14 92.29,-0.07 13.55,0.02 24.05,8.27 24.07,22.62 0.01,5.34 -0.64,30.4 0.63,30.91 1.5,0.61 11.23,5.16 12,4.4 4.37,-4.35 11.41,-11.39 21.12,-21.12 7.27,-7.32 18.42,-8.96 27.43,-3.81 5.89,3.35 35.68,34.69 67.91,66.85 7.16,7.14 10.66,12.46 9.31,22.75 -1.62,12.34 -29.03,31.67 -27.96,34.21 0.62,1.48 4.31,11.64 5.34,11.67 3.38,0.11 31.91,-0.54 36.48,0.78 10.19,2.94 16.12,11.46 16.08,22.09 0,0 0.66,93.93 -0.63,99.12 -2.35,9.52 -10.63,16.41 -20.62,16.58 -10.31,0.18 -20.72,0.2 -31.23,0.08 -1.37,0.01 -5.89,12.09 -5.46,12.54 2.21,2.21 9.04,9.03 20.47,20.45 9.56,9.54 10.24,23.47 0.93,32.78 -33.27,33.31 -55.27,55.34 -66.01,66.08 -10.9,10.88 -24.76,7.89 -35.04,-2.98 -0.19,-0.2 -6.34,-6.35 -18.43,-18.43 -0.57,-0.57 -12.44,4.29 -12.44,5.44 0,0.87 0.01,9.85 0.04,26.96 0.01,11.17 -3.62,20.5 -14.51,24.42 -6.78,2.43 -99.21,1.24 -100.52,1.24 -13.74,0.04 -23.36,-8.71 -23.43,-22.87 -0.04,-8.48 0.59,-30.09 -0.5,-30.54 -1.3,-0.54 -11.47,-5.12 -11.99,-4.62 -9.31,9.28 -20.14,21.81 -26.28,25.3 -7.37,4.19 -16.46,4.09 -23.54,-0.87 -6.02,-4.22 -43.35,-42.77 -51.05,-50.52 -0.75,-0.76 -1.81,-1.21 -2.92,-1.22 -82.18,0.05 -194.29,0.05 -336.33,0.01 -9.75,-0.01 -18.76,-6.85 -21.14,-16.22 -2.07,-8.18 -0.4,-91.85 -0.21,-92.69 5.22,-23.15 34.45,-15.38 34.57,-17.46 5.03,-80.89 42.84,-176.33 116.28,-218.29zm492.7 192.28c0,55.37 -44.9,100.26 -100.26,100.26 -55.37,0 -100.27,-44.89 -100.27,-100.26 0,-55.37 44.9,-100.27 100.27,-100.27 55.36,0 100.26,44.9 100.26,100.27zm-43.41 -0.16c0,-31.4 -25.46,-56.87 -56.86,-56.87 -31.39,0 -56.86,25.47 -56.86,56.86 0,31.4 25.47,56.86 56.86,56.86 31.4,0 56.86,-25.46 56.86,-56.86l0 0.01zm-187.45 -499.81c0,-0.29 -0.23,-0.52 -0.52,-0.52l-368.87 0c-0.29,0 -0.52,0.23 -0.52,0.52l0 37.97c0,0.28 0.23,0.51 0.52,0.51l368.87 0c0.29,0 0.52,-0.23 0.52,-0.51l0 -37.97zm-184.94 285.02c48.79,0 87.92,-33.87 112.33,-74.02 23.28,-38.3 35.38,-84.18 37.54,-128.74 0.02,-0.34 -299.79,-0.8 -299.73,-0.01 2.15,44.57 14.25,90.44 37.53,128.74 24.41,40.16 63.55,74.03 112.32,74.03zm177.99 352.27c10.89,10.9 17.91,18.7 18.74,17.88 14.27,-14.2 25.31,-30.61 43.71,-20.92 34.45,18.14 49.76,10.73 49.15,40.69 0,0 -1.14,19.75 0.78,19.75l50.18 -0.1c1.66,0 -0.42,-27.18 2.25,-33.66 6.14,-14.94 22.63,-13.09 45.95,-25.67 19.79,-10.68 29.23,3.88 45.2,20l1.05 0 35.57 -35.57c1.16,-1.16 -13.58,-14.73 -13.58,-14.73 -9.83,-9.68 -13.32,-19.57 -6.36,-31.87 17.38,-30.73 7.5,-47.63 40.65,-47.34 7.33,0.06 18.89,0.88 18.89,-0.64l-0.1 -50.48c0,-1.14 -27.86,0.27 -33.41,-2.03 -15.73,-6.51 -13.12,-22.15 -24.28,-42.87 -12.28,-22.78 -1.9,-27.98 18.57,-48.43 0.94,-0.94 -7.65,-8.63 -17.83,-18.82 -10.18,-10.2 -17.87,-18.8 -18.8,-17.86 -20.56,20.55 -25.74,30.79 -48.46,18.52 -26.72,-14.45 -45.39,-6.43 -44.34,-40.64 0,0 0.81,-17.1 -0.5,-17.1l-50.47 -0.17c-1.76,0 0.43,28.13 -2.18,33.87 -7.23,15.88 -23.79,13.15 -45.87,25.62 -19.56,11.05 -30.07,-4.42 -45.51,-19.99l-1.07 0c-3.46,3.46 -35.83,34.98 -35.83,36.05 0,0.66 17.71,18.27 17.92,18.47 7.04,7.38 7.62,17.35 2.25,27.3 -15.54,28.72 -9.58,47.86 -38.29,47.47 0,0 -21.09,-0.86 -21.1,0.66l-0.16 50.18c0,2.23 27.11,-0.5 33.72,2.33 7.93,3.39 11.51,8.97 14.07,17.84 9.14,31.75 27.93,38.28 3.18,61.93 0,0 -12.53,11.34 -11.58,12.36 0.74,0.8 6.69,6.8 17.88,18zm-326.73 -110.93l225.57 0c2.09,-0.02 0.53,-73.1 1.02,-76.22 1.49,-9.45 7.18,-16.22 16.07,-18.7 2.61,-0.73 36.87,-0.43 37.17,-1.17 9.45,-22.87 3.09,-4.3 -12.15,-17.53 -5.28,-4.58 -17.29,-29.89 -41.47,-51.65 -29.15,-26.23 -68.22,-39.22 -106.82,-27.61 -77.78,23.38 -114.58,118.05 -120.07,192.16l0.67 0.72zm279.91 43.17c-0.29,-0.71 -289.14,0.25 -315.59,0.24 -0.31,0 -0.56,0.25 -0.56,0.56l0.06 37.8c0,0.31 0.26,0.56 0.56,0.56 25.1,0 293.73,0.57 294.44,-0.17 2.46,-2.56 26.21,-26.73 25.87,-27.53l-4.79 -11.47z"/></svg>`
    ,Hist:`<svg viewBox="0 0 203.18 203.31"><path d="M-0 35.58c0,-4.78 1.58,-8.91 6.23,-10.91 6.31,-2.72 13.62,1.09 14.56,8.07 0.26,1.94 0.36,3.79 0.36,6.03l0.2 0.07c16.93,-21.42 42.07,-35.51 69.48,-38.42 4.23,-0.45 15.4,-0.54 18.76,-0.25 37.53,3.22 69.9,26.19 85.05,60.7 14.25,32.47 10.45,70.05 -9.86,99.05 -10.54,15.05 -24.36,26.5 -41.45,34.35 -11.51,5.28 -20.74,-9.57 -11.34,-17.49 0.67,-0.56 1.88,-1.24 3.64,-2.06 18.47,-8.49 33.02,-24.14 40.62,-42.76 10.24,-25.08 6.88,-53.93 -8.14,-75.98 -7.64,-11.22 -19.96,-21.81 -31.43,-26.99 -6.14,-2.77 -11.83,-5.04 -16.7,-5.91 -1.99,-0.36 -3.88,-0.96 -6.14,-1.23 -5.54,-0.66 -11.2,-1.37 -16.6,-0.84 -1.81,0.18 -3.91,0.2 -5.95,0.5 -16.86,2.48 -30.69,8.34 -43.35,19.69 -4.83,4.33 -5.26,5.11 -9,9.33l0.13 0.11c14.95,-2.41 17.66,19.13 3.05,20.79 -0.91,0.1 -10.2,1.24 -27.88,3.43 -7.16,0.89 -12.2,-4.08 -12.62,-11.04 -0.5,-8.26 -0.95,-16.42 -1.35,-24.47 -0.06,-1.26 -0.15,-2.51 -0.27,-3.76zm100.92 146.9c3.29,0.01 6.47,-0.29 9.66,-0.5 5.86,-0.38 11.04,4.06 11.21,10 0.15,5.3 -3.26,9.7 -8.75,10.77 -3.94,0.77 -20.41,0.71 -24.35,-0.07 -5.48,-1.09 -8.87,-5.52 -8.69,-10.82 0.2,-5.94 5.41,-10.36 11.27,-9.94 3.18,0.23 6.37,0.55 9.66,0.55zm-51.15 -18.86c1.97,1.67 4.32,3.45 7.04,5.34 10.79,7.48 2.51,22.78 -9.06,18.81 -4.42,-1.51 -19.26,-14.1 -21.48,-18.21 -5.81,-10.77 7.93,-21.43 17.07,-12.02 2.31,2.38 4.45,4.4 6.42,6.07zm-49.77 -54.69c0,-15.1 19.75,-14.97 20.97,-1.54 0.37,4.12 0.96,8.01 1.77,11.68 1.17,5.32 3.6,9.69 0.65,14.66 -4.51,7.61 -16.22,6.89 -19.14,-2.52 -2.65,-8.51 -3.15,-13.72 -4.25,-22.29zm104.53 -1.51c0,0.14 0.08,0.26 0.21,0.32 14.46,6.36 23.9,10.51 28.31,12.45 13.59,5.98 4.77,24.84 -7.93,19.41 -1.99,-0.85 -13.55,-5.92 -34.67,-15.21 -5.75,-2.53 -7.01,-6.44 -6.95,-12.09 0.03,-3.34 0.04,-19.26 0.01,-47.75 -0.01,-15.07 21.06,-15.18 21.03,0 -0.02,14.43 -0.03,28.72 -0.01,42.86z"/></svg>`
    ,Mdds:`<svg viewBox="0 0 83.46 83.46"><path d="M18.42 68.63l1.14 0 0 2.77c0,2.81 4.89,2.81 4.89,0l0 -2.77 4.89 0 0 2.77c0,2.81 4.89,2.81 4.89,0l0 -2.77 4.89 0 0 2.77c0,2.81 4.89,2.81 4.89,0l0 -2.77 5.05 0 0 2.77c0,2.81 4.89,2.81 4.89,0l0 -2.77 4.89 0 0 2.77c0,2.81 4.89,2.81 4.89,0l0 -2.77 5.05 0 0 2.77c0,2.81 4.89,2.81 4.89,0l0 -2.77 4.89 0 0 9.94 -70.09 0 4.85 -5.1c0.61,-0.63 4.62,-4.85 5.1,-4.85zm24.45 -24.45l21.03 0 0 9.78 -30.97 0 7.29 -7.38c0.45,-0.45 2.1,-2.4 2.65,-2.4zm25.96 6.23l-0.04 -6.23 6.19 0 -6.15 6.23zm-39.49 -0.04l0 -30.64 9.78 0 0 20.7c0,0.56 -6.35,6.59 -7.21,7.46 -0.69,0.69 -1.85,2.01 -2.57,2.49zm39.45 -31.79c0,-0.56 6.41,-6.67 7.3,-7.54 0.88,-0.87 1.48,-1.89 2.48,-2.57l0 30.81 -9.78 0 0 -20.7zm-24.78 1.14l19.89 0 0 19.56 -19.89 0 0 -19.56zm-4.89 -11.25l0 6.36 -6.19 0c0.53,-0.79 2.26,-2.35 3.06,-3.14 0.61,-0.61 0.94,-0.93 1.48,-1.61 0.41,-0.51 1.14,-1.26 1.65,-1.61zm25.92 6.36l-21.03 0 0 -9.94 30.97 0 -7.29 7.54c-0.45,0.45 -2.1,2.4 -2.65,2.4zm-40.59 2.12l0 39.77c0,1 1.12,2.12 2.12,2.12l40.1 0c1.18,0 3.64,-2.91 4.52,-3.79l10.51 -10.51c0.6,-0.6 1.75,-1.44 1.75,-2.49l0 -39.94c0,-1 -1.12,-2.12 -2.12,-2.12l-40.1 0c-1.03,0 -1.82,1.09 -2.4,1.67l-7.42 7.42c-1.78,2.03 -3.31,3.47 -5.22,5.38 -0.6,0.6 -1.75,1.44 -1.75,2.49zm-14.67 -4.89c0,3.28 2.42,2.77 4.89,2.77l0 4.89 -2.77 0c-2.81,0 -2.81,4.89 0,4.89l2.77 0 0 4.89 -2.77 0c-2.81,0 -2.81,4.89 0,4.89l2.77 0 0 4.89 -2.77 0c-2.81,0 -2.81,4.89 0,4.89l2.77 0 0 4.89 -2.77 0c-2.81,0 -2.81,4.89 0,4.89l2.77 0 0 4.89 -2.77 0c-2.81,0 -2.81,4.89 0,4.89l2.77 0c0,2.04 0.04,1.35 -2.32,3.71 -0.88,0.88 -1.64,1.64 -2.53,2.53l-4.93 5.01 0 -70.09 9.78 0 0 5.05 -2.77 0c-1,0 -2.12,1.12 -2.12,2.12zm-9.78 -9.94l0 79.22c0,1 1.12,2.12 2.12,2.12l79.22 0c1,0 2.12,-1.12 2.12,-2.12l0 -15.49c0,-1 -1.12,-2.12 -2.12,-2.12l-61.78 0 0 -61.62c0,-1 -1.12,-2.12 -2.12,-2.12l-15.32 0c-1,0 -2.12,1.12 -2.12,2.12z"/></svg>`
    ,PDFs:`<svg class="HOV PT" viewBox="0 0 285.19 348.99"><path d="M108.73 268.26l-14.32 -0.65 0 -61.86c13.13,0 37.99,-4.93 49.41,10.49 8.84,11.93 7.07,36.54 -6.54,45.4 -7.05,4.59 -17.08,6.62 -28.54,6.62zm-55.34 -52.09l0 18.23c2.4,0.2 1.86,0.65 5.21,0.65 16.09,0 17.05,-20.18 0.65,-20.18 -2.02,0 -4.53,0.67 -5.86,1.3zm54.69 1.3l0 38.42c0,2.53 1.67,1.95 5.86,1.95 12.51,0 20.84,-8.44 20.84,-19.53l0 -5.21c0,-9.74 -7.84,-17.58 -17.58,-17.58 -6.36,0 -9.12,-0.88 -9.12,1.95zm-47.53 28l-7.16 0 0 22.14 -13.67 0 0 -59.9c0,-3.95 14.14,-2.51 17.49,-2.7 7.69,-0.45 16.77,0.72 22.1,6.09 11.66,11.76 4.67,34.37 -18.75,34.37zm112.64 -27.35l0 13.02 22.14 0 0 11.07 -22.14 0 0 25.39 -13.67 0 0 -62.51 37.76 0 0 11.07 -22.14 0c-1.5,0 -1.95,0.45 -1.95,1.95zm-130.87 -182.96c0,-4.02 4.54,-8.68 7.26,-10.32 4.44,-2.68 44.46,-1.4 51.34,-1.4 6.54,0 10.96,-0.69 16.92,-0.66l69.67 0c0,12.5 -1.38,48.44 1.95,57.95 4.39,12.54 16.36,16.92 30.61,16.92 14.43,0 26.62,-0.65 41.02,-0.65l0 131.52c-0,7.84 0.65,13.44 0.65,21.49 0,8.82 0.93,59.48 -0.75,65.66 -1.41,5.2 -5.6,9.87 -12.27,9.87l-194.03 0c-3.44,0 -6.2,-1.78 -8.1,-3.62 -6.19,-5.96 -4.27,-14.47 -4.27,-26.34l178.4 0c7.86,0 14.98,-7.21 14.98,-17.58l0 -87.25c0,-8.55 -6.15,-16.28 -14.32,-16.28l-179.06 0 0 -139.34zm-23.44 0l0 139.34c-5.47,0 -10.99,-0.09 -15.1,5.08 -2.49,3.13 -3.78,7.07 -3.78,12.5l0 85.3c0,10.36 6.14,18.23 14.98,18.23l3.91 0c0,17.48 -2.09,29.58 10.9,42.49 6.31,6.27 14.48,10.9 24.26,10.9l195.33 0c10.76,0 21.28,-6.23 26.14,-12.27 6.75,-8.4 9.67,-14.48 9.67,-29.4l0 -218.12c0,-2.26 -8.67,-9.65 -10.58,-11.56l-33.53 -33.53c-7.54,-7.54 -14.6,-14.6 -22.14,-22.14 -3.85,-3.85 -7.22,-7.22 -11.07,-11.07 -1.94,-1.94 -9.61,-10.91 -11.88,-10.91l-141.94 0c-9.77,0 -17.95,4.63 -24.26,10.9 -5.21,5.17 -10.9,14.17 -10.9,24.26z"/></svg>`
    ,Prnt:`<svg class="HOV PT" viewBox="0 0 505.79 505.79"><path d="M158.48 271.44c0,-19.9 8.45,-44.57 20.48,-58.76 16.45,-19.41 41.25,-35.65 68.03,-35.65 19.38,0 29.79,0.56 47.77,9.55 15.07,7.53 21.44,14.34 31.26,25.23 4.1,4.55 10.68,15.85 13.1,21.46 13.02,30.14 9.91,63.58 -7.82,90.46 -3.19,4.84 -6.6,8.68 -10.37,13.23l-12.28 10.48c-27.22,20.42 -65.46,24.67 -96.23,9.15 -7.37,-3.72 -14.86,-7.98 -20.86,-13.7 -2.44,-2.33 -4.12,-2.95 -6.33,-5.47 -1.25,-1.42 -1.16,-1.59 -2.19,-2.87 -10.63,-13.22 -17.78,-22.92 -21.99,-42.07 -1.15,-5.21 -2.58,-15.08 -2.58,-21.03zm39.62 -4.22c0,19.35 3.32,30.74 16.64,44.06 33.07,33.07 92.95,9.1 92.95,-37.31 0,-17.54 -3.86,-29.5 -16.23,-41.94 -16.62,-16.71 -40.44,-20.84 -61.9,-10.89 -16.9,7.83 -31.46,27.65 -31.46,46.09zm-46.36 238.56c23.32,0 28.51,-45.52 -4.22,-45.52l-102 0 0 -102c0,-23.88 -26.01,-28.83 -38.15,-17.92 -3.08,2.77 -7.37,7.15 -7.37,12.86l0 133.19c0,9.41 9.98,19.39 19.39,19.39l132.35 0zm182.93 -21.92c0,9.26 8.5,21.92 19.39,21.92l132.35 0c9.41,0 19.39,-9.98 19.39,-19.39l0 -133.19c0,-10.92 -15.89,-23.37 -32.32,-16.3 -8.71,3.75 -13.2,10.76 -13.2,21.36l0 102 -102 0c-15.17,0 -23.6,10.78 -23.6,23.6zm23.6 -438.35l102 0 0 102c0,7.56 2.04,12.91 6.08,16.68 15.92,14.89 39.44,2.39 39.44,-11.63l0 -133.19c0,-9.41 -9.98,-19.39 -19.39,-19.39l-132.35 0c-23.25,0 -28.64,45.52 4.21,45.52zm-358.27 -26.13l0 133.19c0,5.71 4.29,10.09 7.37,12.86 12.38,11.12 38.15,5.65 38.15,-17.92l0 -102 102 0c32.23,0 28.4,-45.52 4.22,-45.52l-132.35 0c-9.41,0 -19.39,9.98 -19.39,19.39zm175.34 139.93l-32.03 0c0,-22.46 1.96,-22.76 -26.13,-22.76 -15.67,0 -11.8,12.85 -11.8,27.82 -11.05,7.4 -17.7,16.98 -17.7,35.4l0 151.74c0,12.44 3.06,21.3 9.06,28.03 5.32,5.97 14.63,12.43 25.5,12.43l261.32 0c18.7,0 34.56,-17.87 34.56,-36.25l0 -155.95c0,-8.7 -1.81,-17.36 -5.07,-22.74 -8.93,-14.71 -21.51,-17.72 -37.92,-17.72l-41.38 0.07c-13.16,0.14 1.29,-8.09 -14.5,-27.65 -9.37,-11.6 -22.5,-17.95 -38.53,-17.95l-55.64 0c-15.28,0 -25.5,5.64 -34.22,12.99 -15.43,13 -10.56,32.53 -15.51,32.53z"/></svg>`
    ,Copy:`<svg class="HOV PT" viewBox="0 0 496.06 601.64"><path d="M349.08 559.83c-86.2,-0.01 -172.5,-0.71 -258.69,0.15 -18.81,0.19 -31.52,-1.1 -42.7,-18.34 -3.9,-6.01 -5.19,-11.1 -5.74,-18.15l0 -359.88c0,-18.44 17.84,-36.34 36.34,-36.34l198.11 0c0,40.51 -5.78,73.47 30.22,95.21 17.51,10.57 48.89,7.95 76.46,7.95 0.31,3.67 1.17,4.16 1.17,8.21l0 276.65c0,25.44 -17.04,44.55 -35.17,44.55zm-267.27 -302.44c0,12.92 11.35,24.62 24.62,24.62l120.74 0c34.21,0 34.21,-48.06 0,-48.06l-120.74 0c-14.42,0 -24.62,13.47 -24.62,23.44zm23.44 126.6l215.7 0c28.8,0 29.2,-46.89 0,-46.89l-216.87 0c-28.17,0 -29.44,46.89 1.17,46.89zm-23.44 78.54c0,6.23 4.54,14.69 8,17.79 4.29,3.84 11.04,6.83 18.96,6.83l207.49 0c35.66,0 35.35,-48.06 1.17,-48.06l-211.01 0c-14.04,0 -24.62,12.77 -24.62,23.44zm263.07 138.27c19.33,-0.26 32.41,-5.04 47.98,-16.77 5.23,-3.94 9.3,-7.76 13.54,-12.73 5.73,-7 9.42,-13.86 12.88,-22.17 4.33,-11.37 4.83,-18.45 4.83,-33.85 10.72,-2.5 21.48,-4.67 30.02,-9.84 46.75,-29.7 41.96,-65.13 41.67,-114.18 -0.06,-10.6 -0.14,-21.19 -0.14,-31.79 0.11,-86.58 0.35,-173.16 -0.02,-259.73l-0.01 -2.14c-0.16,-37.19 -5.31,-66.77 -40.69,-86.41 -25.98,-14.42 -57.57,-10.8 -86.17,-10.73 -76.95,-0.09 -153.9,-0.18 -230.85,-0.15 -36.52,0.94 -68.17,21.96 -78.39,57.8l39.95 0.09c6.02,-0.33 5.5,-1.39 9,-5.07 13.39,-12.87 21.43,-11.18 38.82,-11.62 23.76,-0.6 47.55,-0.28 71.32,-0.27 49.75,-0.01 99.62,0.67 149.33,0.45 22.28,-0.28 57.17,-6.56 74.47,10.39 5.44,5.33 10.49,12.66 11.19,20.39 1.79,19.83 1.38,44.51 1.47,64.59 0.23,48.85 -0.45,97.62 -0.49,146.44l0 0.84c0.07,25.56 2.77,150.23 -1.94,164.3 -4.57,11.49 -15.77,23.24 -28.53,24.43l0 -216.87c0,-50.29 -3.55,-49.85 -42.49,-88.8 -14.74,-14.74 -28.63,-28.63 -43.37,-43.37 -15.24,-15.24 -26.19,-29.96 -50.56,-36.19 -14.26,-3.64 -147.08,-1.62 -173.05,-1.62 -35.8,0 -51.81,-2.38 -75.11,11.64 -48.99,29.48 -38.6,81.46 -38.6,134.89l0 262.59c0.13,41.27 2.48,76.38 43.9,97.1 24.23,12.12 64.34,8.74 91.62,8.78 22.26,0.03 44.51,-0.01 66.77,0.05l2.14 0.01c46.51,0.14 93.01,0.12 139.52,-0.48z"/></svg>`
}

const InptSVG = `type="file" accept=".svg" multiple onchange="SVG_FILES=[...this.files].filter(f=>f.type==='image/svg+xml')"`
const SynChk=(Eu   )=>{const C=$('input',Eu);C.checked = !C.checked} // isso é uma Gambiarra q precisa ser Removida (ela não precisava a conteceer se eu conseguisse usar label ao invés de div, mas usando label dispara 2 vezes) ai preferir assim, mas div não dar o evento de check, então tive que fazer manualmente
const Tm_th     =(e,arr)=>Inn(e,arr.map(a=>`<th>${a}</th>`).join(''))
const Tm_td     =(e,arr)=>Inn(e,arr.map(a=>`<td>${a}</td>`).join(''))
const Tm_Opt    =(arr,Stg=null)=>arr.map((a,i)=>`<option value="${a}" ${i===0?'disabled':''} ${Stg===a?'selected':i===0?'selected':''}>${a}</option>`).join('')
const Tm_OptFnt =(e,arr)=>Inn(e,arr.map(a=>`<option style="font-family:${a}" value="${a}">${a}</option>`).join(''))
const load_Opts =(e,arr)=>Inn(e,arr.map(a=>`<option value="${a}">${a}</option>`).join(''))
const SrcSVG    =e=>`data:image/svg+xml,${encodeURIComponent(e)}`
const Tm_Interup=(Eu,v1,v2   )=>{Eu.classList.add("Interup","Rltv","Bt","PT");Eu.addEventListener("click",()=>TOV(Eu)   );Inn(Eu,`<a>${v1}</a><a>${v2}</a><i></i>`)}
const Tm_Check  =(Eu,Stg,nome)=>{Eu.classList.add("Chek","Ct")               ;Eu.addEventListener("click",()=>SynChk(Eu));Inn(Eu,`<input class="NONE" type="checkbox"><a class="Ct">${Stg}</a>${nome ? `<p>${nome}</p>` : ''}`)}
const Tm_Switch =(e,l=[],tg,p,px)=>{
    e.className+=" Switch Rltv Ct PT"
    e.innerHTML=`<style>${l.map((_,i)=>`#opt_${p}_${i}:checked~i{transform:translateX(${i*100}%)}#opt_${p}_${i}:checked~label[for="opt_${p}_${i}"]{color:#fff}`).join("")}</style>
    ${l.map((_,i)=>`<input type=radio name=${p} class="NONE" id=opt_${p}_${i} ${!i?"checked":""}
    onchange="this.closest('.Switch')._tg.style.transform='translateX(-${i*100}%)'">`).join("")}
    ${l.map((t,i)=>`<label style="width:${px}" for=opt_${p}_${i}>${t}</label>`).join("")}
    <i style="width:calc(100%/${l.length})"></i>`
    e._tg=tg
}
function MyAlert(msg){
    if(!document.querySelector('#alertCSS')){
        const css = `.MyAlert{position:fixed;bottom:20px;right:20px;font-size:14px;opacity:0;transform:translateY(20px);transition:all 0.4s ease;z-index:99999}.MyAlert.Atv{opacity:1;transform:translateY(0)}`
        const style = document.createElement('style')
        style.id = 'alertCSS'
        style.textContent = css
        document.head.appendChild(style)
    }
    const e = document.createElement('div')
    e.className = 'MyAlert'
    e.textContent = msg
    document.body.appendChild(e)
    requestAnimationFrame(()=>ATV(e))
    setTimeout(()=>{DTV(e);e.addEventListener('transitionend',()=>e.remove())},2000)
}

function SelectFiles(Inpt,Call){if(Inpt.files.length > 0 && typeof Call === "function"){Call(Inpt)}} // usar isso no InputFiles abaixo (Garante que tudo entrou bem antes de Continuar)
let VarDropImg = {} // uma Váriavel Global q talvez possa ficar dentro do PreScript Destinada a Receber os Files pra serem usados Depois
function PrepDrop(Eu,nome,Call=null){
    Inn(Eu,'<a>Adicionar Imagem</a><input type="file" accept="image/*" class="NONE">')
    const f=$('input',Eu),d=$('a',Eu)
    const Import=F=>{if (!F) return
        const ext  = F.name.split('.').pop()
        const Nome = `${nome}.${ext}`
        Inn(d,`<img Name="${Nome}" src="${URL.createObjectURL(F)}">`)
        VarDropImg[Nome]=F
    }
    Eu.onclick    =()=> f.click(),f.onchange=e=>Import(e.target.files[0]),
    Eu.ondragover =e=>(Prvn2(e),Add(Eu,'hover')),
    Eu.ondragleave=_=> Rmv(Eu,'hover'),
    Eu.ondrop     =e=>(Prvn2(e),Rmv(Eu,'hover'),Import(e.dataTransfer.files[0]))
}

function Calendario(i,c){
    const M=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    let D=new Date(),ini=null,fim=null,drag=false

    document.onmouseup=()=>drag=false

    const C={}
    C.i=i // 🔥 guarda o input correto

    const R=()=>{
        let a=D.getFullYear(),m=D.getMonth(),p=new Date(a,m,1).getDay(),u=new Date(a,m+1,0).getDate(),h=new Date();h.setHours(0,0,0,0)

        let H=`<div class="w100 Bt">
                <button onclick="this.closest('.calendar').C.h()">Hoje</button>
                <button onclick="this.closest('.calendar').C.l()">Limpar</button>
            </div>
            <div class="w100 Bt">
                <button onclick="this.closest('.calendar').C.m(-1)">◀</button>
                <span>${M[m]} ${a}</span>
                <button onclick="this.closest('.calendar').C.m(1)">▶</button>
            </div>
            <table><tr class="NONO"><td>D</td><td>S</td><td>T</td><td>Q</td><td>Q</td><td>S</td><td>S</td></tr><tr>`

        let d=1

        for(let x=0;x<42;x++){
            if(x<p||d>u) H+="<td></td>"
            else{
                let dt=new Date(a,m,d);dt.setHours(0,0,0,0)
                let cls=[]
                if(+dt==+h) cls.push("Tag_DESTK")
                if(dt<h) cls.push("Tag_Off")
                let w=dt.getDay(); if(w==0||w==6) cls.push("Tag_destk")

                if(ini&&!fim&&+dt==+ini) cls.push("Tag_Atv")
                if(ini&&fim){
                    if(+dt==+ini||+dt==+fim) cls.push("Tag_Atv")
                    if(dt>ini&&dt<fim) cls.push("Tag_Range")
                }

                H+=`<td class="${cls.join(" ")}"
                onmousedown="this.closest('.calendar').C.d(${a},${m},${d})"
                onmouseover="this.closest('.calendar').C.o(${a},${m},${d})"
                onclick="this.closest('.calendar').C.c(${a},${m},${d})">${d}</td>`
                d++
            }
            if((x+1)%7==0) H+="</tr><tr>"
        }

        c.innerHTML=H+"</tr></table>"
        c.C=C // 🔥 instancia ligada ao DOM
    }
    C.m=n=>{D.setMonth(D.getMonth()+n);R()}
    C.d=(a,m,d)=>{let dt=new Date(a,m,d);dt.setHours(0,0,0,0);ini=dt;fim=null;drag=true;R()}
    C.o=(a,m,d)=>{if(!drag)return;let dt=new Date(a,m,d);dt.setHours(0,0,0,0);fim=dt<ini?ini:dt;if(dt<ini) ini=dt;let f=x=>String(x).padStart(2,"0")
        if(fim && +ini==+fim){C.i.value = `${f(ini.getDate())}/${f(ini.getMonth()+1)}/${ini.getFullYear()}`
        }else if(fim){C.i.value = `${f(ini.getDate())}/${f(ini.getMonth()+1)}/${ini.getFullYear()} - ${f(fim.getDate())}/${f(fim.getMonth()+1)}/${fim.getFullYear()}`}R()}
    C.c=(a,m,d)=>{if(drag){drag=false; return};let dt=new Date(a,m,d);dt.setHours(0,0,0,0);ini=dt;fim=null;let f=x=>String(x).padStart(2,"0");C.i.value=`${f(d)}/${f(m+1)}/${a}`;P(a,m+1,d);R()}
    C.h=()=>{let t=new Date();ini=t;fim=null;C.c(t.getFullYear(),t.getMonth(),t.getDate())}
    C.l=()=>{C.i.value="";ini=fim=null;c.classList.add("none")}
    const P=(a,m,d,a2,m2,d2)=>{if(a2){LOG("intervalo")}else{let iso=a+"-"+String(m).padStart(2,"0")+"-"+String(d).padStart(2,"0");LOG("buscar:",iso)}}
    R()
}

// Criar Modal
// MODAL________________________________________________
function FocoFilho(Pai,Filho){Array.from(Pai.children).forEach(e=>{None(e)});Show([Pai,Filho]);SairModal(Pai)} /*Manter isso aqui só pelo App da Infinity até trocar Tudo*/
function ShowModal(Pai,Filho){Array.from(Pai.children).forEach(e=>{None(e)});Show([Pai,Filho]);SairModal(Pai)}
function SairModal(Fundo){document.addEventListener('keyup',e=>{if(e.key==='Escape'){None(Fundo)}});Fundo.addEventListener('click',e=>{if(e.target===Fundo){None(Fundo)}})}
function ShowBrother(e,pai){var Fi = Filh(pai) ; var x = e===0?0:IdxDe(e);Fi.forEach(e=>None(e)) ; if(x<Fi.length-1){Show(Fi[x+1])}else{Show(Fi[0])}}

function MODAL(DOM){document.body.insertAdjacentHTML("beforeend", `<div class="FModal Ct" onclick="this.remove()"><div class="Rd Rltv" onclick="event.stopPropagation()"><div class="XX Ct" onclick="XModal(this)">X</div>${DOM}</div></div>`)}
function XModal(Eu){Eu.closest('.FModal').remove()}


// isso é pra Esperar a função terminar pra poder dar o Alert
const ShowTime2=(e,sec)=>{Show(e);requestAnimationFrame(()=>{Add($(e),"show")});setTimeout(()=>{Rmv($(e),"show");setTimeout(()=>{None(e)},400)}, sec*1000)}


const Seguro=v=>(isFinite(v) && !Number.isNaN(v)) ? v : 0  // Provavelmente oq eu Faço aqui já tem em Num() talvez n o Infinity mas é só adicionar lá
const MSRX = stg => Number(stg.replace('ms','').trim())    // isso também só Converte em Numero, eu Poderia testar isso usando Num e provavelmente esse ms, poderia trocar pra remover todas as letras, isso tbm removeria R$ depois eu vejo lá




// Pra analizar_______________________________________________________________________________________________________
  function Delay(sec){return new Promise(r => setTimeout(r, sec*1000))} //NEXBEE
  async function Dellay(Sec,Call){await new Promise(r=>setTimeout(r, Sec* 1000));Call()} //NEXBEE
  function ResizeArea(e){e.style.height = e.scrollHeight + 'px';e.style.width = e.scrollWidth + 'px'} //GABARITO
  function InptsVazio(e){$$(e).forEach(e=>{if(e.value.trim()===""){Add(e,'Error') ; return true}else{Rmv(e,'Error') ; return false}})} //GABARITO
  function CssFont(e,Stg){$(e).style.fontFamily=Stg} //GABARITO
  const Bkg = (e,bg,txt,rd) =>{(e.style.backgroundColor = bg, txt && (e.style.color = txt), rd && (e.style.borderColor = rd))}
  const ArrtoOBJ=(arr,col)=>{return arr.reduce((acc, el) => {acc[el[col]] = el;return acc;}, {})}
  const ArrObj_OrdnCol=(Obj,Ordn)=>{const K = Object.keys(Obj[0]) ; const x = Ordn.map(col=>K.indexOf(col)) ; return [Ordn,...Obj.map(obj => x.map(i => obj[K[i]]))]}
  const Sib     =e=>$(e,Pai(event.target))
  const RxExt   =e=>e.split(".").pop().toLowerCase() // pegar a Extensão do nome de um arquivo tipo .webp
  const Includ=(e,arr)=>arr.some(v=>e.includes(v)) // como usar Includ(e,['BPrint','Grafit'])
  const todosIguais = arr => arr.every(v => v === arr[0])
  const sum=arr=>arr.reduce((acc,el)=>acc+el,0)
  const NAN=e=>isNaN(e) ? 0 : e
  const RmvLinByID=(arr,id)=>{const x = arr.findIndex(e => e.Id === id);if (x !== -1) arr.splice(x, 1)}

// evita erro de XSS
function XSS(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;")}

function baixarJSON(dados, nomeArquivo){ // baixa arrays e objetos e converte em JSONs
  const json = JSON.stringify(dados,null,2)
  const blob = new Blob([json],{type:'application/json'})
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nomeArquivo
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}


const InptImg = cb => {
    const i = document.createElement('input');
    i.type = 'file'; i.accept = 'image/*';
    i.onchange = e => {
        const f = e.target.files[0];
        if (f) {
            const r = new FileReader();
            r.onload = () => cb(r.result);
            r.readAsDataURL(f);
        }
    };
    i.click();
};



const getArr  =v=>Array.isArray(v) ? v : []
const ArrToObj=(arr,keys)=>Object.fromEntries(keys.map((k,i)=>[k, arr[i]]))
const NUMM    =e=>parseFloat(e).toFixed(2)
const isJSON  =e=>typeof e=="string" && e.length > 1 && (e[0]=="{"||e[0]=="[")
