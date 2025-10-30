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