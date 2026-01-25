

function VAL(e){
    const td = e.tagName === 'TD' ? e : _td(e)
    const R = D_R(td) // se e for td entra 'e' se não for, faz o closeset('td') aqui dentro mesmo
    const val = 
              ['Edit','Fixo','Sugg','Soma','Bndj'].includes(R.Tm) ?     $('.P-P',td).textContent.trim()
            : ['Ssvg','Imgs','Link'              ].includes(R.Tm) ?  Nm($('.P-P',td)).trim()
            : ['Valr','Mdds','Auto','Sync'       ].includes(R.Tm) ? Num($('.P-P',td).textContent.trim())
            : R.Tm==='Data' ? $('input' ,td).value
            : R.Tm==='Inpt' ? $('input' ,td).value
            : R.Tm==='Slct' ? $('select',td).value
            : R.Tm==='Chek' ? $('input' ,td).checked
            : Is(td,'input')? td.value
            : R.Tm==='Lixo' ? '-'
            : null
    return val
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