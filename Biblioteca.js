// Funções de Ordens______________________________________________________
const FreqCount=Arry=>Arry.reduce((e,i)=>(e[i]=(e[i]||0)+1,e),{}) // Recebe [a,a,b,c,c,c,c] >  Retorna {a:2,b:1,c:4}
const FreqOrdem=obj=>Object.keys(obj).sort((a,b)=>obj[b]-obj[a])  // Recebe {a:2,b:1,c:4}   >  Retorna [c,a,b]
const Top_Mais=(m,t)=>[...m.filter(e=>t.includes(e)),...t.filter(e=>!m.includes(e))] // mantem os elementos em comum entre m e t colocando primeiro os elementos de m, seguidos pelos elementos ?nicos de t que n?o est?o em m. // primeiro argumento ? o array q tem na base de dados, o segundo s?o todos da tabela produtos
const OrdRndm=e=>e.sort(()=>Math.random()-0.5) // Randomiza a ordem de um Array
const OrdA_Z =e=>e.sort((a,b)=>a.localeCompare(b,'pt-BR')) // Dexia um array em Ordem Alfabetica
const OrdTop=(arry,Base)=>Top_Mais(FreqOrdem(FreqCount(Base)),arry) // Ordenar pela Fequência do Top mais Vendidos
const OrdProp=(arry,Type)=>ObjKey(arry).sort((a,b)=>arry[a][Type].localeCompare(arry[b][Type],'pt-BR')) // Ordenar pela Propriedade do Obj

// funções de Converter Valores

  function Unique(Arry,Key) {return        [...new Set(Arry.map(i=>i[Key]))]}
  function Unique2(Arry,idx){return Array.from(new Set(Arry.map(e=>e[idx])))}

  function Scroll(DivTop){window.scrollTo({top:DivTop,behavior:'smooth'})}

// Funções Templates
  const tmplt_VlrTtl=(Valor,Title)=>`<div><div>${Title}</div>${RS_HTML(Valor)}</div><div class="VlrM2 none">${Valor}</div>`
  const tmplt_Img = arry=>arry.map(e=>`<img src="./TabelaProdutos/${e}.png">`)
  const tmplt_Opt = (arry,disable)=>[`<option value="" disabled selected>Escolha um ${disable}</option>`,...arry.map(e=>`<option value="${e}">${e}</option>`)].join('')
  
  function TableHTMLall(e,on=''){return e.map(R=>`<tr>${R.map(C=>`<td ${on}>${C}</td>`).join('')}</tr>`).join('')}
  function TableHTMLfil(e,c,on=''){return e.map(R=>`<tr>${c.map(C=>`<td ${on}>${R[C]}</td>`).join('')}</tr>`).join('')}
  function Options(e){return e.map(E=>`<option value='${E}'>${E}</option>`).join("")}
  function ArryStg(e){return e.map(E=>`['${E.join("','")}']`).join('\n')}
  function InptTxt(e){return `<input type="text" placeholder="Nome do Cliente" onkeyup="TestSenha(event,'${e}',this)">`}
  function InptPss(e){return `<input type="password" placeholder="Insira a Senha" onkeyup="TestSenha(event,'${e}',this)">`}

// Funções Geradores
  let NewDate = new Date().toISOString().split('T')[0]
  function RG(){return ConvertData(new Date(Date.now() + -3 * 60 * 60 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, ''))}
  const NewHora =  new Date(Date.now() + -3 * 60 * 60 * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '')












// Fun??es Convert
  function TAble_to_Array(Stg){
    const ArryTable = []
    $All('tr',$(Stg)).forEach(R=>{
      const Linha = []
      $All("td",R).forEach(C=>{Linha.push(C.innerText)})
      ArryTable.push(Linha)})
    return ArryTable
  }



// Fun??es CSS
  function SetWidth(e,Mdd){e.style.width = Mdd+"px"}
  function SetHeigt(e,Mdd){e.style.height = Mdd+"px"}

  function Rad0(e){e.style.borderRadius = '100px 100px 100px 100px'}
  function RadB(e){e.style.borderRadius = '25px 25px 0px 0px'}
  function Red(e){e.style.color = 'red'}
  function Bak(e){e.style.color = 'black'}
  function MouseXY(event){return [event.clientX, event.clientY]}

// Fun??es Pressets
  function CrypPass(senha) {
    const Cryp = senha.split('').map((c,idx)=>{
      if(/[0-9]/.test(c)){let N=parseInt(c)
        N=N===9?0:N+(idx%2===1?4:1);return N.toString()}
      else if(/[A-Za-z]/.test(c)){
        let L=c.charCodeAt(0)+(idx%2===1?5:1)
        if(L>90&&L<97)L-=26
        else if(L>122)L-=26
        return String.fromCharCode(L)}else{return c}})
    var par = [] ; var imp = []
    Cryp.forEach((e,idx)=>{idx%2===0?par.push(e):imp.push(e)})
    const Par=par.reverse().flatMap(C=>[`3${C}$`,`r${C}-`,`3${C}&`])
    const Imp=imp.reverse().flatMap(C=>[`-${C}e`,`V${C}9`,`@${C}K`])
    return Par.concat(Imp).join('')
  }

  function pressKey(keyCode,data){
    const RecuperaDOM = document.querySelector(`#Grupo-Medidas input[data-tab="${data}"]`);
      RecuperaDOM.focus()

      const keydownEvent = new KeyboardEvent('keydown', { 'keyCode': keyCode });
      RecuperaDOM.dispatchEvent(keydownEvent);
      const keyupEvent = new KeyboardEvent('keyup', { 'keyCode': keyCode });
      RecuperaDOM.dispatchEvent(keyupEvent);

      RecuperaDOM.value += String.fromCharCode(keyCode)
      RecuperaDOM.dispatchEvent(new Event('input',{bubbles:true}))
  }

  function Copy(e,btn){
    var temp = document.createElement('textarea')
    temp.value = CopyPresset[e] ?? e.split('/').join('\n') // (Primeiro aceita o obj, segundo se for array)
    document.body.appendChild(temp)
    temp.select()
    document.execCommand('copy')
    document.body.removeChild(temp)
    btn.innerText = 'Texto copiado!'
  }
  function ScrolRoll(px) {
    let posicaoAtual = window.pageYOffset
    const destino = posicaoAtual + px
  
    function animarScroll() {
      if (posicaoAtual < destino) {
        window.scrollBy(0, 5)
        posicaoAtual += 5
        if (posicaoAtual >= destino) {
          window.scrollTo(0, destino)
          return;
        }
        requestAnimationFrame(animarScroll)
      }
    }
  
    animarScroll()
  }
  function PrmssInnr(Tag) {
    return new Promise(resolve => {
    const observer = new MutationObserver((m, observer) => {
      if (Tag.innerHTML !== '') {observer.disconnect();resolve()}})
    observer.observe(Tag,{childList: true, subtree: true})})
  }
  
  function TabIndx(e,next){return parseInt(e.getAttribute("data-Tab"))+next}
  function delay(ms){return new Promise(resolve => setTimeout(resolve, ms))}

  function Snap(Modal,inpt){
    inpt.style.position = 'relative'
    Modal.style.width = `${inpt.offsetWidth}px`
    Modal.style.top = `${inpt.offsetTop + inpt.offsetHeight}px`
    Modal.style.left = `${inpt.offsetLeft}px`
  }


  let onOff = 'off'
  function AtivaDescM2(on,off){Show(off) ; None(on) ; onOff = 'on' ; FilTable()}
  function DstivDescM2(off,on){Show(on) ; None(off) ; onOff = 'off' ; FilTable()}

  function TotalCress(Vlr,e,type){
    if(type==='Recorte'){return Math.round(e*(Vlr+Vlr*Crecent2(e)))}
    else{return Math.round(e*(Vlr+Vlr*Crecent(e)))}
  }

  function TrocaPose(Div,Idx){
    const e = $(Div)
    const pai = e.parentNode
    const Filhos = Array.from(pai.children)
     
    if (Filhos.indexOf(e) === Idx){ return}
    if (Filhos.indexOf(e)  <  Idx){ pai.insertBefore(e,Filhos[Idx+1])}
    else{pai.insertBefore(e,Filhos[Idx])}
  }


function AnimaHeight(e,TargHeit,time,inOut){
  const StrtH = e.clientHeight
  const StrtT = performance.now()
  const update = timestamp=>{
    const elaps = timestamp-StrtT
    if (elaps<time) {
        let Value = 0
        if(inOut==='out'){Value = StrtH-(StrtH*(elaps/time))}
        else{Value = TargHeit*(elaps/time)}
      e.style.height = Value + 'px'
      requestAnimationFrame(update)
    } else {e.style.height = (inOut==='out'?0:TargHeit)+'px'}
  };requestAnimationFrame(update)
}

function ConvertData(dataString) {
  const data = new Date(dataString);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();
  const hora = data.getHours().toString().padStart(2, '0');
  const minutos = data.getMinutes().toString().padStart(2, '0');
  const segundos = data.getSeconds().toString().padStart(2, '0');
  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

function cvData(dataString) {
  const data = new Date(dataString);
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();
  return `${dia}/${mes}/${ano}`;
}

function InterCor(value) {
  value = Math.min(100, Math.max(0, value))

  const r = Math.floor((100 - value) * 255 / 100)
  const g = Math.floor((value) * 255 / 100)
  const b = 0

  return `rgb(${r}, ${g}, ${b})`
}

function BloqueaData(Stg){$All(Stg).forEach(i=>{i.min = new Date().toISOString().split('T')[0]})}

function RgbToHex(rgb){return`#${rgb.replace(/^rgb\(|\s+|\)$/g,'').split(',').map(x=>parseInt(x).toString(16).padStart(2,'0')).join('')}`}

function hojeInfo(inpt){ArryPag[2] = $(inpt).value = NewDate ; RequedInfo('2')} // tentar jogar isso pra a Biblioteca

//Novossssssss________________________________________________________________________________

function baixarImgSVG(img){
  const a = NewTag('a')
  a.href = isCnvs(img) ? img.toDataURL('image/png') : img.src
  a.download = isCnvs(img) ? 'Download_Cnvs.png' : 'Download_SVG.svg'
  document.body.appendChild(a) ; a.click() ; document.body.removeChild(a)
}
function Downloads(img,typ){
  const a = NewTag('a')
  a.href = isCnvs(img) ? img.toDataURL('image/png') : typ==='zip' ? URL.createObjectURL(img) : img.src
  a.download = isCnvs(img) ? 'Download_Cnvs.png' : typ==='zip' ? 'Download_ZIP.zip' : 'Download_SVG.svg'
  document.body.appendChild(a) ; a.click() ; document.body.removeChild(a)
}

//_________________________________

function Deslise(Slide,divs,Min,Max){
  Slide.addEventListener('input',()=>{
    divs.forEach((div)=>{  
      const SlidValue = div.src.match(/Frase|400x90|400x120/) ? Slide.value*0.6 : Slide.value*0.7
        const New = ((SlidValue-Slide.min)/(Slide.max-Slide.min))*(Max-Min)+Min
        div.style.width = `${(div.offsetWidth/div.offsetHeight)*New}px`
        div.style.height = `${New}px`
        div.style.margin = `${New/50}px`
    })
  })
}

const FetchZip=(e,rg,zip)=>new Promise((Rsv,Rjt)=>fetch(e.src).then(r=>r.blob()).then(b=>{zip.file(rg,b);Rsv()}))

function FetchSVG(url){
  return new Promise((rsv)=>{
    var xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.onload = ()=>rsv(xhr.responseText)
    xhr.onerror =()=>rsv(null)
    xhr.send()
  })
}
function Svg_To_Cvns(svgs){
  $All(svgs).forEach(svg=>{
    var cvns = NewTag('canvas')
    var ctx = cvns.getContext('2d')
    var img = new Image()
    img.src = svg.src
    img.onload=()=>{
      cvns.width  = parseFloat(getComputedStyle(svg).width)
      cvns.height = parseFloat(getComputedStyle(svg).height)
      ctx.drawImage(img,0,0,cvns.width,cvns.height)
      Pai(svg).insertBefore(cvns,svg)
      None(svg)
      cvns.onclick=()=>Tog(cvns,'Slctds')
    }
  })
}
function BaixarZip(Img,typ){
  const zip = new JSZip()
  const Arry=Img.map((e,x)=>FetchZip(e,`image_${x+1}.${typ}`,zip))
  Promise.all(Arry).then(()=>zip.generateAsync({type:'blob'})).then(b=>Downloads(b,'zip'))
}
