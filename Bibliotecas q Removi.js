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


// Funções de Fetch
function FetchPOST(link,Conteudo,ALERT=null){
  fetch(link,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Conteudo)})
  .then(r=>{return r.text()}).then(m=>{ALERT?ALERT(m):null}).catch(rr=>{console.error('Erro no POST:',rr)})
}
function FetchGET(Link,CallBack){
  fetch(Link).then(r=>r.json()).then(dados=>{CallBack(dados)})
  .catch(err=>console.error('Erro no GET:',err))
}


//NEXBEE
function EscThis(){if(event.target===event.currentTarget){None(event.target)}} //NEXBEE
function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})} //NEXBEE
const RxgOnFun=e=>e?e.toString().match(/\{([^}]*)\}/)[1]:'' // serve pra pegar o texto da função 'myfunction(gg)' onclick, onkeyup e todos
const WinH = window.innerHeight //NEXBEE
const WinW = window.innerWidth //NEXBEE
const WHXY=(W,H,X,Y)=>`style="width:${W}px;height:${H}px;left:${X}px;top:${Y}px"` //NEXBEE
function Top_Lef(e,T,L){e.style.top=`${T}px`;e.style.left=`${L}px`}
const Requed=(Inpt)=>Inpt.name.trim()==='Rqued' && Inpt.value===''
const CriaKina=(W,H,S)=>`polygon(${S}px 0%, ${W-S}px 0%, ${W}px ${S}px, ${W}px ${H-S}px, ${W-S}px ${H}px, ${S}px ${H}px, 0% ${H-S}px, 0% ${S}px)`
function Read_Kina(){$$('.Kina').forEach(E=>{E.style.clipPath = CriaKina(E.offsetWidth,E.offsetHeight,Nm(E))})}
function Rfresh(){ console.log('Funções Atualizadas') ;Read_Kina()}


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


