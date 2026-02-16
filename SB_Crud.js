const OjKy   =Typ=>ObjKey(BS[Typ])
const ClrObj  =obj=>Object.fromEntries(ObjKey(obj).map(k=>[k,'']))
const NewID   =arr=>Math.max(...arr.map(o=>Num(o.Id)))+1
const Tm_R=(e,x,Typ,P=false)=>{const k=OjKy(Typ)[x] ; return `${Typ}-${e=='Foot'?e:e[isArr(e)?0:'Id']}-${k}-${CRYPP[BS[Typ][k][0]]}-${P?'Bj':'_'}-${ObjKey(Secund).includes(Typ)?'Sc':'_'}`}
const daClass =_R=>{const R = d_r(_R) ; const bs = BS[R.Ty][R.Cl][1] ; return (bs==true?'':bs).split('').map(e=>CRYCLS[e]).join(' ') || ''} // Aplica as Casses q estão no 'bs'
const _Bol=v=> v !== '_'
const _par=s=>(([Ty,Id,Cl,Tm,Bj,Sc]) => ({Ty,Id,Cl,Tm,Bj:_Bol(Bj),Sc:_Bol(Sc)}))(s.split('-'))
const d_r=e=>_par(typeof e == "string" ? e : e.dataset.r)
const d_p=e=>NoVazi(e.dataset.p) ? _par(e.dataset.p) : null
const RR=(r,p)=>$$(`td${(isArr(r)?r:[r]).map(k=>`[data-r*="${k}"]`).join('')}${p?(isArr(p)?p:[p]).map(k=>`[data-p*="${k}"]`).join(''):''}`)
const rr=(r,p)=> $(`td${(isArr(r)?r:[r]).map(k=>`[data-r*="${k}"]`).join('')}${p?(isArr(p)?p:[p]).map(k=>`[data-p*="${k}"]`).join(''):''}`)
const $r=(...arr)=>{const K=arr.filter(v=>v!=null&&v!=="").join('-') ; return K ? $(`[data-r="${K}"]`) : null} // da pra simplificar esta Limpeza
const Rx7=(...arr)=>`.P-P${(arr).map(k=>`[data-r*="${k}"]`).join('')}` // nem todos tem .P-P isso pode dar BO depois
const __tr=e=>e.closest('[class^="tr-"]')
const RmvExt=e=>e.replace(/\.[^/.]+$/,'')
const PrePos=(div,Clone,Ps)=>Ps == "<" ? After(div,Clone) : Befor(div,Clone)
/*Novos Libs*/
const SELE=(ev,Eu)=>{ev.preventDefault() ; Tog(Eu,'SEL')}
const ClnObjs=(obj,bs)=>CleanObj(Object.fromEntries(ObjEtr(obj).filter(([k])=>{const r = bs[k] ; return r && r[1] !== 'I' && r[0] !== 'X' && r[1] !== 'A'})))

const DarJJ = (M,T,R,C,V,Lv2Arr)=>{
    const Lv2 = Lv2Arr && (([pT,pR,pC]) => ({pT,pR,pC}))(Lv2Arr)
    const j = J[T], k = JJ[T]; if (!j || !k) return
    let o, jL, jjL, parent
    if (Lv2){
        parent = J[Lv2.pT]?.find(e => e.Id == Lv2.pR)
        if (!parent) return
        jL   = parent[Lv2.pC]?.find(e => e.Id == R)
        jjL  = JJ[Lv2.pT]?.[Lv2.pR]?.[Lv2.pC]?.find(e=>e.Id==R)
    } else o = j.find(e => e.Id == R)

    switch(M){
        case 'Add':{
            const n = typeof V=='object'?V:{Id:R,[C]:V}
            if(Lv2) { parent[Lv2.pC].push(n); if(!JJ[Lv2.pC]) JJ[Lv2.pC]={}; JJ[Lv2.pC][R]=n}
            else { j.push(n); k[R]=n}
            break;
        }
        case 'Edt':
            if(Lv2){if(jL)jL[C]=V ; if(jjL)jjL[C]=V}
            else { if(o) o[C]=V; if(k[R]) k[R][C]=V}
            break;
        case 'Del':
            if(Lv2) { const i=parent[Lv2.pC].findIndex(e=>e.Id==R); if(i>=0) parent[Lv2.pC].splice(i,1); if(JJ[Lv2.pC]) delete JJ[Lv2.pC][R]}
            else { const i=j.findIndex(e=>e.Id==R); if(i>=0) j.splice(i,1); delete k[R]}
    }
    const LOG1 = Lv2 ? jL : o
    const LOG2 = Lv2 ? jjL : k[R]
    const iguais = JSON.stringify(LOG1) === JSON.stringify(LOG2)
    //LOG(`Const Atualizadas! ${M}, ${iguais}`)
}

async function ImgLowQuality(src, mod = 'Low') {
    const CFG = {
        Low: { w: 35,  h: 17,  q: 0.3 },
        Med: { w: 300, h: 300, q: 0.7 },
        HD:  { w: null, h: null, q: 0.9 } // tamanho real
    };
    const cfg = CFG[mod] || CFG.Low;
    return new Promise(res => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const r = (cfg.w && cfg.h)
                ? Math.min(cfg.w / img.width, cfg.h / img.height, 1)
                : 1; // HD → escala real
            const canvas = document.createElement('canvas');
            canvas.width  = img.width  * r;
            canvas.height = img.height * r;
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            // sempre WebP
            res(canvas.toDataURL('image/webp', cfg.q));
        }
        img.onerror = () => res(null);
        img.src = src;
    });
}

function ReOpt(Sel,arr){ // arr = valores Disponiveis (precisa ser no DOM) (✔️ SB agora disponível)
    if(arr.length==1)         {EditCell(Sel,'Edt',arr[0],'Auto')} // Troca pra o Unico option, se Tiver
    if(!arr.includes(Nm(Sel))){EditCell(Sel,'Edt',""    ,'Auto')} // se o valor atual não Existir dar valor "Vazio"
    setTimeout(()=>{$$('option',Sel).forEach(o=>{Add_N(o);if(arr.includes(o.value)){Rmv_N(o)}})},500) // Ocultar os Options Ausentes
}

function VAL(e){
    const R = d_r(e)
    const val = 
              ['Edit','Fixo','Sugg','Soma','Bndj'].includes(R.Tm) ?     e.textContent.trim()
            : ['Ssvg','Imgs','Link'              ].includes(R.Tm) ?  Nm(e).trim()
            : ['Valr','Mdds','Auto','Sync'       ].includes(R.Tm) ? Num(e.textContent.trim())
            : ['Data','Inpt','Slct'              ].includes(R.Tm) ?     e.value
            : R.Tm==='Chek' ? e.checked
            : Is(e,'input') ? e.value
            : R.Tm==='Lixo' ? '-'
            : null
    return val
}

function DarVAL(e,V){
    const R = d_r(e)
    if(['Edit','Fixo'  ].includes(R.Tm)){Nm(e,V)       ; Inn(e,V)}
    if(['Slct'         ].includes(R.Tm)){Nm(e,V)       ; e.value = V}
    if(['Auto'         ].includes(R.Tm)){Nm(e,Num(V))  ; Inn(e,V)}
    if(['Mdds'         ].includes(R.Tm)){Nm(e,Num(V))  ; Inn(e,V?Cm(V):'')}
    if(['Valr','Sync'  ].includes(R.Tm)){Nm(e,V==''?'':Num(V)) ; Inn(e,V==''?'':RS(V))}
    if(['Data','Link','Ssvg','Imgs','Chek'].includes(R.Tm)){Inn(Pai(e),Tm_Tm[R.Tm](V,e.dataset.r,''))} // Parece q Sugg n existe mais
}

const SrcsIMG=(src,R)=>src.includes('blob:') ? src : src ? `${BASE_URL}Low/${src.replace('.svg','.webp')}?v=${Date.now()}` : `./CrudSB/${R.Cl=='Arte'?'Upld':'Plce'}.webp`

const Tm_Tm = {
    Fixo:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }">${e}</p>`,
    Ssvg:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }">${e}</p>`,
    Edit:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }" contenteditable="true" onkeydown="EntBlr(this)" onblur="DTV(this);EditCell(this,'Edt')" oncontextmenu="SELE(event,this)" onfocus="ATV(this)">${e}</p>`,
    Valr:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }" contenteditable="true" onkeydown="EntBlr(this)" onblur="DTV(this);EditCell(this,'Edt')" oncontextmenu="SELE(event,this)" onfocus="ATV(this);CurAll(this)" oninput="Mask.RS(this) ">${e?RS(e):'R$ -'}</p>`,
    Mdds:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }" contenteditable="true" onkeydown="EntBlr(this)" onblur="DTV(this);EditCell(this,'Edt')" oncontextmenu="SELE(event,this)" onfocus="ATV(this);CurAll(this)" oninput="Mask.Num(this)">${e?Cm(e):''    }</p>`,
    Chek:(e,R,P)=>`<input  data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }" onchange="EditCell(this,'Edt')" type="checkbox" ${Bool(e)?'checked':''}>`,
    Slct:(e,R,P)=>`<select data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }" onchange="EditCell(this,'Edt')">${Tm_Opt(O[d_r(R).Cl],e)}</select>`,
    Data:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${ YMD(e)}" onclick="TrcFih(this,$('input',Pai(this)))">${BrevData(DMY(e))}</p><input type="date" data-R="${R}" data-P="${P}" class="none" value="${YMD(e)}" onchange="EditCell(this,'Edt')" onblur="TrcFih(this,$('p',Pai(this)))">`,
    Auto:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${ Num(e)}" onclick="CtrlSoma(this)">${e}</p>`,
    Sync:(e,R,P)=>`<p      data-R="${R}" data-P="${P}" class="P-P Ct" name="${NUMM(e)}" onclick="CtrlSoma(this)">${e=='--'?'--':e==''?'':e==0?'--':RS(e)}</p>`, // a idéia seria receber aqui sempre um Numero
    Lixo:(e,R,P)=>`<img    data-R="${R}" data-P="${P}" class="P-P Ct" onclick="${d_r(P).Tm =='Bndj'?`EditCell(this,'Del')`:'RmvROW(this)'}" name="${e}" src="./CrudSB/Lixo.webp"><i class="Abslt GrifFora"></i>`,
    Imgs:(e,R,P)=>`<img    data-R="${R}" data-P="${P}" class="P-P Ct" name="${e      }" loading="lazy" draggable="false" src="${SrcsIMG(e,d_r(R))}" onclick="AbrirImg(this,'${e}','${R}')">`,
    Link:(e,R,P)=>e!=''?Tm_Bndj(R,e) : `<div class="Rltv"><p class="P-P" data-R="${R}" data-P="${P}" onclick="ShowBndj(_td(this))" name="${e}">${e==''?'-':e}</p><div class="BndjSUG MySelect BNdj Abslt none Cl"><a>${SVG.Ponta}</a><input class="Stky" placeholder="${dbCol[d_r(R).Cl]}" oninput="LinkSug(this,'${AA(d_r(R).Cl)}')" onkeydown="KeyEntr(()=>NewLink(this,'${d_r(R).Cl}'))"><span class="Sugg Cl"></span></div></div>`, // opções de "Apenas Troca" ou de "Adição"
   Link2:(e,R,P)=>                                                                                                                                                                                                                  `<input class="Stky" placeholder="${dbCol[d_r(R).Cl]}" oninput="LinkSug(this,'${AA(d_r(R).Cl)}')" onkeydown="KeyEntr(()=>NewLink(this,'${d_r(R).Cl}'))"><span class="Sugg Cl"></span>`,             // Aqui é o de Troca (mas Fundir com a de Cima)
    Bndj:(e,R,P)=>Tm_Bndj(R,e),
    BjIn:(e,R,P)=>Tm_Bndj(R,e)
}

function Tm_Td(v,e,x,Typ,_P=''){
    const _R = Tm_R(e,x,Typ,_P)
    return `<td class="${daClass(_R)} Rltv">${Tm_Tm[d_r(_R).Tm](v,_R,_P)}</td>`
}

function Tm_Table(Typ,arry,Rpai=''){
    const IN = performance.now()
    const Retorno = arry.map(e=> e ? `<tr class="tr-${e[Primary[Typ]]}">${ObjOrdn(e,OjKy(Typ)).map((v,x)=>Tm_Td(v,e,x,Typ,Rpai)).join('')}</tr>` : '').join('')
    LOG(`⏱️🔴 Tm_table(${Typ}): ${MS(IN)}`)
    return Retorno
}

function SellFilesIMG(Inpt){ // Fazer isso Ficar imbutido dentro da Função do input Files
    const file = Inpt.files[0]
    $('img',Pai(Pai(Inpt))).src = URL.createObjectURL(file)
    $('span',Pai(Inpt)).textContent = file.name
}

function AbrirImg(img,Nome,R){
    const X   = Nome ? 'Plc' : 'Up'
    const _R  = d_r(R)
    const Pre = BS[_R.Ty][_R.Cl][2] ? `${BS[_R.Ty][_R.Cl][2]}` : '' // isso é pra Criar um Prefixo nas Imagens se tiver predefinido no BS
    const W   = img.naturalWidth > img.naturalHeight
    MODAL(`<div class="MdalIMG ${W ? 'Cl':'Ct'}">
                <img src="${BASE_URL}Img/${Nome}">
                <div class="casusa Cl ${W ? 'w100':'h100'}">
                    <span>Nome: ${Nome}</span> <div>Id: ${_R.Id}</div>
                    <input type="file" class="w80" onchange="SelectFiles(this,SellFilesIMG)" accept="image/*">
                    <button onclick="XModal(this);ImgUPP($('input',Pai(this)),'${Pre}${_R.Id}','${R}')">${Nome?'Trocar Imagem':'Enviar'}</button>
                </div>
            <div>`)
    if(X=='Up'){$('.MdalIMG input').click()}
}

function GambiarraAdd(div){Add(_tr(div),'Hoov') ; $$(':scope > td',_tr(div)).forEach(e=>Add(e,'Hoov'))} // HOROZOZA fazer de tudo pra tirar!

function ShowBndj(div,Typ){                                                // Função que exibe/oculta o painel .BNdj dentro da div recebida
    if(!document.contains(event.target)){LOG('não ta mais no DOM') ; return} // interrompe se o target não estiver mais no DOM
    if(['IMG','I','BUTTON'].includes(event.target.tagName)){return}
    if(event.target.closest('svg')){return}
    const e = $('.BNdj',div)                                      // Seleciona o elemento .BNdj dentro da div Passada
    if(event.target.closest('.BNdj')){return}                     // Se o clique for dentro do .BNdj, interrompe (não fecha nem altera)
    else{                                                         // Caso contrário (clique fora do conteúdo interno)
        e.style.zIndex = $$('.BNdj:not(.none)').length + 500      // Define o z-index dinamicamente com base na quantidade de painéis visíveis
        if(Tecla('ctrl')){
            Tog_N(e);GambiarraAdd(div)}                           // Se a tecla CTRL estiver pressionada, apenas alterna o estado (mostra/oculta)
        else{                                                     // Caso não esteja com CTRL
            $$('.BNdj:not(.none)').forEach(E=>{                   // Percorre todos os painéis .BNdj que estão visíveis
            //    if(E==e){return}else{Add_N(E)}                  // Fecha (adiciona .none) em todos, exceto o atual
            })
            Tog_N(e);GambiarraAdd(div);                           // Alterna visibilidade do painel atual (mostra se estava oculto, e vice-versa)
            Typ ? RFresh(Typ,_tr(div)) : null
        }
    }
    if(Tecla('ctrl')){return}                                     // Se CTRL estiver pressionado, interrompe (não aplica o fechamento automático)
    else if(e.contains(event.target)){return}                     // se o Click foi Interno
    else{ClickFora(div,()=>{Add_N(e)})}                           // Caso contrário (clique fora da div), ativa função para fechar o painel ao clicar fora
}


// criar uma Função Geral, que serve tanto pra Edit ImgUpload, para delete, para várias coisas ela faz o seguinte abaixo
// ela Localiza todos os seus relacionados nessesários e gera um objeto, ent ela vai localizar
// Eu, Pai, T-T Pai, fora o d_r(R) inteiro, mas tbm vai Rerornar Minha tr, a tr do Pai, qual td é o Pai dela
// retornará várias coisas em um unico Obj dai é só acessalo pelo nome do Obj


//===========================CRUD===========================

const getRG=df=>{                    // ⭐_ _ _ _ (Da Pra Melhorar)
    const pc = GetPC() ; const Ag = AGORA().split(' ')
    return [{'Rg':df.Id,'Data':Ag[0],'Hora':Ag[1],'User':Inn($('#LgNome')),'PC':pc.PC,'Navgd':pc.Navgd}]
}

async function ImgUPP(Inpt,Nome,R){  // ⭐⭐⭐⭐_ (ver se ta funcionando Bonitinho com SVG)
    const Eximg = ["jpg","jpeg","png","gif","webp","svg"]
    const _R  = d_r(R)
    const f   = Inpt.files[0]                          // Pega o único arquivo
    const Ext = RxExt(f.name)                          // Pega a Extensão do Arquivo
    const src = URL.createObjectURL(f)                 // src temporário
    const PP  = $(`table ${Rx7(`${_R.Id}-${_R.Cl}`)}`) // tem que ser o ID e depois a Coluna
    const Pay = _td(Pai(_td(PP)))                      // encontrar o td pai se ele for dentro da Bndj
    const T_T = Pay ? Pai($('.T-T',Pay)) : null        // Localiza o T-T se existir
    J.IMGS[Nome] = f.name
    if(_R.Bj && T_T){T_T.innerHTML += `<img loading="lazy" onclick="AbrirImg('${d_r(PP).Id}',this)" src="${src}">`}
    if(Eximg.includes(Ext)){
        EditCell(PP,'Edt',`${Nome}.${Ext}`)
        DarVAL(PP,src)
        Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'Low')).then(r=>r.blob()),`Low/${Nome}.webp`,true)
        Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'Med')).then(r=>r.blob()),`Med/${Nome}.webp`,true)
        if(Ext=='svg'){Sb_UPLOAD(supaBASE,f,`Img/${Nome}.svg` ,true)
        }else{Sb_UPLOAD(supaBASE,await fetch(await ImgLowQuality(src,'HD' )).then(r=>r.blob()),`Img/${Nome}.webp`,true)}
    }else{LOG('não é nem Img nem Svg é um arquivo!')}
}

function NewLink(Ipt,col){          // ⭐⭐⭐_ _ Perguntar antes se quer Adicionar Nova Linha
    if(confirm(`Tem Certeza que quer salvar: ${Ipt.value} em ${col}?`)){
        LOG('pra que estew IF?',Nm(Ipt))
        if(Nm(Ipt)){return Nm(Ipt)}else{
            const df = AddROW(AA(col),'<',{[col]:Ipt.value})
            Linkar(Ipt,df.Id) // só tem 2 formas de linkar ou pelo Input ou pelo LinkSugg
        }
    }
}

// 
// OPÇÃO de remover cliente caso n tenha ainda, Link Cliente removido
// Opção de Unir Clinetes diretamente pela tabela de Pedidos
//

function Linkar(Eu,val){          // ⭐⭐⭐⭐_  (Faz o Básico)
    const td = _td(Eu)
    const PP = $('.P-P',td)
    const _R = PP.dataset.r
    EditCell(PP,'Edt',val)
    Inn(td,Tm_Bndj(_R,`${val}`))
}

function AddROW(Typ,Ps,obj={},SB){   // ⭐⭐⭐⭐_ (Adicionar um OBJ se tiver!)
    const df = Deff[Typ]                 // Cria um Default Baseado na bndj
       df.Id = NewID(J[Typ])             // Atribuindo Novo Id++
    if('Rg' in df){df.Rg = getRG(df)}    // Atribuindo o Rg se Existir
    ObjKey(obj).forEach(k=>df[k]=obj[k]) // Atribuindo oq vem no Objeto dos argumento!
    /*Obj*/ DarJJ('Add',Typ,df.Id,null,df)
    /*Sub*/ if(!SB){Sb_CREATE(supaBASE,Typ,CleanObj(df))}
    /*DOM*/ PrePos($(`#H_${Typ} > tbody`),Tm_Table(Typ,[df]),Ps)
    if(SB){LOG('Linha Adicionada pelo SB')}
    return df // isso é bom pq que precisa de dados daqui pode usar por Fora
}

function RmvROW(Eu,SB){              // ⭐⭐⭐⭐_
    const R   = d_r(Eu) ; if(!R) return
    const Img = $$(Rx7('-Imgs-'),__tr(Eu)).map(e=>Nm(e))
    /*OBJ*/     DarJJ('Del',R.Ty,R.Id)
    /*OBJ-IMG*/ Img.forEach(e=>delete J['IMGS'][RmvExt(e)])
    /*SUB*/     if(!SB){Sb_DELETE(supaBASE,R.Ty,R.Id)}
    /*SUB-IMG*/ if(!SB){Img.forEach(e=>Sb_DELIMG(supaBASE,e))}
    /*DOM*/     $$(Rx7(`${R.Ty}-${R.Id}-${R.Cl}`)).forEach(td=>{__tr(td).remove() ; if(SB){LOG('Deletado pelo SupaBase')}})
}

function MesclaRow(Typ,bs){          // ⭐⭐⭐⭐_ (Ficar usando apenas com CLNT até ver se ta TUDO OK mesmo, pra Evoluir pra outras Tabelas)
    const SEL = $$(`#H_${Typ} tbody .SEL`) // pega todas as Células Selecionadas
    const Fim = SEL.at(-1)                 // pega Ultimo Item do Array
    const _Rf = d_r(Fim)                   // pega o _R do Ultimo
    let    Jn = ObjValToArr(ClnObjs(JJ[Typ][_Rf.Id],bs)) // criar o Def
    SEL.forEach(p=>{                       // pra cada Célula
        const _R = d_r(p)                  // pega o _R de cada um
        if(p!==Fim){                                                           // se for Diferente da Ultima
            const Ids_PDDS = ContCLNT[_R.Id]?.List||[]                         // Pega a Lista de Pedidos
            Ids_PDDS.forEach(ID=>{Sb_EDIT(supaBASE,'PDDS',ID,Aa(Typ),_Rf.Id)}) // Editar PDDS
            ObjEtr(ClnObjs(JJ[Typ][_R.Id],bs)).forEach(([k,v])=>Jn[k].push(v)) // Concatena as Informações
            RmvROW(p)                                                          // remove a Linha
        }else{ObjEtr(Jn).forEach(([k,v])=>{Sb_EDIT(supaBASE,'CLNT',_Rf.Id,k,UniqSplit(v).join(' || '))})} // Editar o Ultimo
    })
}



// ===========================SUPABASE===========================

async function SB_Get(SB,Typs){

    const IN = performance.now()

    function normalizeObj(obj,Colet={}){
        for (const k in obj) {
            let v = obj[k] ?? ""
            if (isJSON(v)) {try { v = JSON.parse(v) } catch {}}
            if (Array.isArray(v)){(Colet[k] ??= []).push(...v)}
            obj[k] = v
        };return obj
    }

    async function getIMG(Typ){
        const {data,error} = await SB.storage.from("uploads").list("Img",{limit:1000})
        if (error) {ERR("Erro ao listar:", error.message);return []}
        J[Typ] = data.reduce((o,e)=>(o[e.name.split('.')[0]]=e.name,o),{}) ; LOG(`🖼️ IMGS`)
    }

    async function gett(Typ){ // isso apenas traz os dados e Joga na Const!
        let todas = [], lim = 1000, ofs = 0, data
        do{({data}=await SB.from(Typ).select('*').order('Id',{ascending:true}).range(ofs,ofs+lim-1))
            if (!data) return ERR('Erro ao carregar dados')
            todas.push(...data) ; ofs+=lim
        }while(data.length===lim)
        
        const Colet = {}
        J[Typ]=todas.map(e=>normalizeObj(e,Colet))
        for(const col in Colet){J[AA(col)] = Colet[col] ; JJ[AA(col)] = ArrtoOBJ(Colet[col],Primary[AA(col)])}
        JJ[Typ] = ArrtoOBJ(J[Typ],Primary[Typ])
        LOG(`✔️ ${Typ}`)
    }

    await Promise.all(Typs.map(Typ=>Typ=='IMGS'?getIMG(Typ):gett(Typ))) // Tabelas Disponíveis no SB! (Promisse espera terminar pra poder dar o Log)

        LOG(`✅ SB Carregado: ${MS(IN)}`)
    MyAlert(`✅ SB Carregado: ${MS(IN)}`)
    
    PosGET()
}

async function Sb_DELETE(SB,Typ,id){
    const {error} = await SB.from(Typ).delete().eq("Id",id)
    if(error){ERR("Erro ao excluir:",error)}else{LOG(`SB_DELETE(${Typ},${id})`) ; MyAlert(`SB_DELETE(${Typ},${id})`)}
}

async function Sb_CREATE(SB,Typ,row){
    LOG(row)
    let baseId = Number(row.Id) || 0
    let tentativas = 0
    while (true) {
        const Id = baseId + tentativas
        const { error } = await SB.from(Typ).insert([{...row,Id}])
        if (!error) {LOG("Linha criada:",Id) ; return Id}
        if (error.code !== "23505") {ERR("Erro:", error) ; return null}
        tentativas++}
}

async function Sb_EDIT(SB,Typ,id,col,Val){
    try {const {error} = await SB.from(Typ).update({[col]:Val}).eq('Id',id)
        if (error){ERR('Erro ao atualizar:',error)}
        else  {    LOG(`💾✏️ SB_EDIT(${id},${Val})`) ; MyAlert(`"${Val}" Editado no SB! (${Typ},${id},${col})`)}
    } catch (err){ ERR('Erro:',err)  ; MyAlert('Erro ao atualizar serviço')}
}

async function Sb_UPLOAD(SB,file,nome,Upst){ // Upst true e false Permitir ou n Subistituir Img
    let {error} = await SB.storage.from('uploads').upload(nome,file,{upsert:Upst}) 
    if  (error) {ERR("Erro no upload:", error.message) ; alert("Erro ao enviar: "+error.message)}
    else{LOG('✔️ Arquivo enviado!',nome)}
}

async function Sb_DELIMG(SB,nome){
    const paths = ['Img','Med','Low'].map(p=>`${p}/${nome}`)
    let {error} = await SB.storage.from('uploads').remove(paths)
    if  (error) {ERR("Erro ao excluir:",error.message) ; alert("Erro ao excluir: "+error.message)}
    else {LOG('🗑️ Arquivos excluído! Img,Med,Low',nome)}
}