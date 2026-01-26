const OjKy   =Typ=>ObjKey(BS[Typ])
const NoneCol=(Typ,col)=>Cgo[U?.cgo]?.[Typ]?.includes(col) ? `display:none` : '' // não é exatamente assim q eu quero usar ela Cgo tem q já vir Pronto
const ClrObj  =obj=>Object.fromEntries(ObjKey(obj).map(k=>[k,'']))
const NewID   =arr=>Math.max(...arr.map(o=>Num(o.Id)))+1

const _Bol=v=> v !== '_'
const _par=s=>(([Ty,Id,Cl,Tm,Bj,Sc]) => ({Ty,Id,Cl,Tm,Bj:_Bol(Bj),Sc:_Bol(Sc)}))(s.split('-'))
const d_r =e=>_par(typeof e == "string" ? e : _td(e).dataset.r)
const d_p =e=>_td(e).dataset.p === 'SemPai' ? null : _par(_td(e).dataset.p)
const RR=(r,p)=>$$(`td${(isArr(r)?r:[r]).map(k=>`[data-r*="${k}"]`).join('')}${p?(isArr(p)?p:[p]).map(k=>`[data-p*="${k}"]`).join(''):''}`)
const rr=(r,p)=> $(`td${(isArr(r)?r:[r]).map(k=>`[data-r*="${k}"]`).join('')}${p?(isArr(p)?p:[p]).map(k=>`[data-p*="${k}"]`).join(''):''}`)

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

function VAL(e){
    const td = e.tagName=='TD'?e:_td(e)
    const R = d_r(td)
    const val = 
              ['Edit','Fixo','Sugg','Soma','Bndj'].includes(R.Tm) ?     $('.P-P',td).textContent.trim()
            : ['Ssvg','Imgs','Link'              ].includes(R.Tm) ?  Nm($('.P-P',td)).trim()
            : ['Valr','Mdds','Auto','Sync'       ].includes(R.Tm) ? Num($('.P-P',td).textContent.trim())
            : ['Data','Inpt','Slct'              ].includes(R.Tm) ?     $('input,select',td).value
            : R.Tm==='Chek' ? $('input' ,td).checked
            : Is(td,'input')? td.value
            : R.Tm==='Lixo' ? '-'
            : null
    return val
}

const Tm_Tm = {
    Fixo:e=>`<p class="P-P Ct" name="${e}">${e}</p>`,
    Fixy:e=>`<div class="Rltv"><p class="P-P" onclick="ShowBndj(_td(this));RenderINFO(this)" name="${e}">${e}</p><div class="BndjTBL MySelect BNdj Abslt none Cl"><a>${SVG.Ponta}</a><table class="Bdj_INFO"></table></div></div>`,
    Auto:e=>`<p class="P-P Ct" name="${Num(e) }" onclick="CtrlSoma(this)">${e}</p>`,
    Sync:e=>`<p class="P-P Ct" name="${NUMM(e)}" onclick="CtrlSoma(this)">${e=='--'?'--':e==''?'':e==0?'--':RS(e)}</p>`, // a idéia seria receber aqui sempre um Numero
    Edit:e=>`<p class="P-P Ct" name="${e}" contenteditable="true" onkeydown="EntBlr(this)" onblur="Rmv(_td(this),'Foco');EditCell(this)" onfocus="Add(_td(this),'Foco')">${e}</p>`,
    Valr:e=>`<p class="P-P Ct" name="${e}" contenteditable="true" onkeydown="EntBlr(this)" onblur="Rmv(_td(this),'Foco');EditCell(this)" onfocus="Add(_td(this),'Foco');CurAll(this)" oninput="Mask.RS(this) ">${e?RS(e):'R$ -'}</p>`,
    Mdds:e=>`<p class="P-P Ct" name="${e}" contenteditable="true" onkeydown="EntBlr(this)" onblur="Rmv(_td(this),'Foco');EditCell(this)" onfocus="Add(_td(this),'Foco');CurAll(this)" oninput="Mask.Num(this)">${e?Cm(e):''    }</p>`,
    Data:e=>`<p class="P-P Ct" name="${YMD(e)}" onclick="TrcFih(this,$('input',Pai(this)))">${BrevData(DMY(e))}</p><input type="date" class="none" value="${YMD(e)}" onchange="EditCell(this)" onblur="TrcFih(this,$('p',Pai(this)))">`,
    Slct:(e,R)=>`<select class="P-P w100" name="${e}" onchange="EditCell(this)">${Tm_Opt(O[R.Col],e)}</select>`,
    Chek:e=>`<input  class="P-P" name="${e}" onchange="EditCell(this)" type="checkbox" ${Bool(e)?'checked':''}>`,
    Imgs:(e,R)=>`<img class="P-P" loading="lazy" name="${e?'True':'False'}" draggable="false" src="${SrcsIMG(e,R)}" onclick="AbrirImg('${e}',this,'${e?'':R.Col=='Arte'?'X':'Place'}','${R.Row}')">`,
    Ssvg:e=>`<p class="P-P Ct" name="${e}">${e}</p>`,
    Link:(e,R)=>`<div class="Rltv"><p class="P-P" onclick="ShowBndj(_td(this))" name="${e}">${e==''?'-':e}</p><div class="BndjSUG MySelect BNdj Abslt none Cl"><a>${SVG.Ponta}</a><input class="Stky" placeholder="${dbCol[R.Col]}" oninput="LinkSug(this,'${AA(R.Col)}')" onkeydown="KeyEntr(()=>TestRow(this,'${R.Col}'))"><span class="Sugg Cl"></span></div></div>`, // opções de "Apenas Troca" ou de "Adição"
    Lixo:e=>`<img class="PT" onclick="RmvROW(this)" name="${e}" src="./SVG/I_Lixo.webp"><i class="Abslt GrifFora"></i>`,
}

function Tm_Table(Typ,arry,Rpai=''){
    const IN = performance.now()
    const Retorno = arry.map(e=> e ? `<tr class="tr-${e[Primary[Typ]]}">${ObjOrdn(e,OjKy(Typ)).map((v,x)=>Tm_Td(v,e,x,Typ,Rpai)).join('')}</tr>` : '').join('')
    LOG(`⏱️🔴 Tm_table(${Typ}): ${MS(IN)}`)
    return Retorno
}


// SUPABASE
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

async function Sb_UPLOAD(SB,file,nome){
    let {error} = await SB.storage.from('uploads').upload(nome,file,{upsert:false})
    if  (error) {ERR("Erro no upload:", error.message) ; alert("Erro ao enviar: "+error.message)}
    else{LOG('✔️ Arquivo enviado!',nome)}
}