const Ramos = [
    ['Alimentos e Bebidas','Comércio','Padaria'],
    ['Alimentos e Bebidas','Comércio','Depósito de Bebidas'],
    ['Alimentos e Bebidas','Comércio','Depósito de Água e Gás'],
    ['Alimentos e Bebidas','Comércio','Mercadinho'],
    ['Alimentos e Bebidas','Comércio','Frigorifico & Peixe'],
    ['Alimentos e Bebidas','Comércio','Frutas & Verduras'],
    ['Alimentos e Bebidas','Comércio','Empório'],
    ['Alimentos e Bebidas','Comércio','Ração'],
    ['Alimentos e Bebidas','Comércio/Serviço','Churrascaria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Restaurante'],
    ['Alimentos e Bebidas','Comércio/Serviço','Lanchonete'],
    ['Alimentos e Bebidas','Comércio/Serviço','Bar'],
    ['Alimentos e Bebidas','Comércio/Serviço','Bistrô & Café'],
    ['Alimentos e Bebidas','Comércio/Serviço','Buffet'],
    ['Alimentos e Bebidas','Comércio/Serviço','Sorveteria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Barraca Lanche'],
    ['Alimentos e Bebidas','Comércio/Serviço','Conveniência'],
    ['Alimentos e Bebidas','Comércio/Serviço','Açaíteria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Tapiocaria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Pizzaria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Temakeria'],
    ['Alimentos e Bebidas','Comércio/Serviço','Casa de Bolo'],
    ['Alimentos e Bebidas','Comércio/Serviço','Confeiteiro'],
    ['Alimentos e Bebidas','Fábrica','Fábrica de Sorvete'],
    ['Vendas e Objetos','Comércio','Arte e Antiguidades'],
    ['Vendas e Objetos','Comércio','Artigos Religiosos'],
    ['Vendas e Objetos','Comércio','Bebês e Cia'],
    ['Vendas e Objetos','Comércio','Brinquedos e Games'],
    ['Vendas e Objetos','Comércio','Casa e Decoração'],
    ['Vendas e Objetos','Comércio','Colecionáveis'],
    ['Vendas e Objetos','Comércio','Cosméticos e Perfumaria'],
    ['Vendas e Objetos','Comércio','Eletrodomésticos'],
    ['Vendas e Objetos','Comércio','Fotografia'],
    ['Vendas e Objetos','Comércio','Flores, Cestas e Presentes'],
    ['Vendas e Objetos','Comércio','Instrumentos Musicais'],
    ['Vendas e Objetos','Comércio','Joalheria'],
    ['Vendas e Objetos','Comércio','Livros'],
    ['Vendas e Objetos','Comércio','Funerários'],
    ['Vendas e Objetos','Comércio','Variedades'],
    ['Vendas e Objetos','Comércio','Gráfica'],
    ['Vendas e Objetos','Comércio','Papelaria e Escritório'],
    ['Vendas e Objetos','Comércio','Místicos'],
    ['Estétia e Moda','Comércio','Sapatos'],
    ['Estétia e Moda','Comércio','Roupas e Acessórios'],
    ['Estétia e Moda','Serviço','Salão Cabeleireiro'],
    ['Estétia e Moda','Serviço','Sobrancelha'],
    ['Estétia e Moda','Serviço','Unha em Gel'],
    ['Estétia e Moda','Serviço','Barbearia'],
    ['Estétia e Moda','Serviço','Tatuagem'],
    ['Estétia e Moda','Comércio','Sex Shop'],
    ['Técnologia','Comércio','Informática'],
    ['Técnologia','Serviço','Internet'],
    ['Técnologia','Comércio','Assesórios Celular'],
    ['Técnologia','Comércio/Serviço','Equipadora Som'],
    ['Técnologia','Comércio','Eletrônica'],
    ['Técnologia','Comércio/Serviço','Assistência Téc. PC'],
    ['Técnologia','Comércio/Serviço','Assistência Téc. Celular'],
    ['Técnologia','Serviço','Téc. Refrigeração'],
    ['Saúde e Medicamento','Serviço','Nutrição'],
    ['Saúde e Medicamento','Serviço','Pscicologia'],
    ['Saúde e Medicamento','Serviço','Laboratório e Exame'],
    ['Saúde e Medicamento','Serviço','Odontologia'],
    ['Saúde e Medicamento','Comércio','Farmácia'],
    ['Saúde e Medicamento','Comércio/Serviço','Vetrinário'],
    ['Construção e Ferramentas','Serviço','Serralharia'],
    ['Construção e Ferramentas','Serviço','Marcenaria'],
    ['Construção e Ferramentas','Comércio/Serviço','Gesso'],
    ['Construção e Ferramentas','Comércio','Armazém'],
    ['Construção e Ferramentas','Serviço','Pedreiro'],
    ['Construção e Ferramentas','Serviço','Engenharia'],
    ['Construção e Ferramentas','Serviço','Eletricista'],
    ['Construção e Ferramentas','Serviço','Encanação'],
    ['Serviços Pessoais','Serviço','Seguradora'],
    ['Serviços Pessoais','Serviço','Segurança'],
    ['Serviços Pessoais','Serviço','Transporte'],
    ['Serviços Pessoais','Serviço','Turismo'],
    ['Serviços Pessoais','Serviço','Motéis'],
    ['Serviços Pessoais','Serviço','Aluguel e Locações'],
    ['Instituições','Serviço','Associações'],
    ['Instituições','Serviço','Advocacia'],
    ['Instituições','Serviço','Cartórios'],
    ['Instituições','Serviço','Bibliotecas'],
    ['Instituições','Serviço','Casas Lotéricas'],
    ['Instituições','Serviço','Consórcios'],
    ['Instituições','Serviço','Cooperativas'],
    ['Instituições','Serviço','Emissoras de Rádio'],
    ['Instituições','Serviço','Emissoras de Televisão'],
    ['Instituições','Serviço','Instituições Religiosas'],
    ['Instituições','Serviço','Prefeitura'],
    ['Educação','Serviço','Escola'],
    ['Educação','Serviço','Curso'],
    ['Serviço','Serviço','Estacionamentos'],
    ['Serviço','Serviço','limpeza'],
    ['Serviço','Serviço','Ecologia'],
    ['Serviço','Serviço','Agricultura'],
    ['Serviço','Serviço','Festas & Eventos'],
    ['Serviço','Serviço','Mecânico'],
    ['Serviço','Serviço','Costureira'],
    ['Serviço','Serviço','Serviços Gráficos'],
    ['Serviço','Serviço','Pet Shop'],
  ]



const CopyPresset = {
    Pix:`
  Chave: 81987265401
  Nome: Alan Ferreira da Silva`
}

function Crecent(MM2){
  /*Crescente:*/ var M = MM2
    var D = {Min:0.06,Med:0.25,Max:1.00}
    var V = {Min:1.70,Med:0.70,Max:0.00}
      var crecent = M> D.Med? M>=D.Max? V.Max:
      M< D.Med? V.Med: V.Med-((V.Med-V.Max)*((M-0.001)/D.Max)):
      M<=D.Min? V.Min: V.Min-((V.Min-V.Med)*((M-0.001)/D.Med))

  return crecent
}

function Crecent2(MM2){
  /*Crescente:*/ var M = MM2
    var D = {Min:0.05,Med:0.20,Max:0.50}
    var V = {Min:2.10,Med:0.70,Max:0.00}
      var crecent = M> D.Med? M>=D.Max? V.Max:
      M< D.Med? V.Med: V.Med-((V.Med-V.Max)*((M-0.001)/D.Max)):
      M<=D.Min? V.Min: V.Min-((V.Min-V.Med)*((M-0.001)/D.Med))

  return crecent
}

const User={
  '34$r4-34&-7eV79@7K':['(Baby)','Baby Massia','Img/Perfil_Baby.png'],
  '32$r2-32&-6eV69@6K':['(Alan)','Allan MacLovin','Img/Perfil_Allan.png'],
  '31$r1-31&-4eV49@4K':['(Lisa)','Lisa Caramelo','Img/Perfil_Lisa.png'],
  '36$r6-36&-9eV99@9K':['(Segu)','Segunda Hippie','Img/Perfil_Segunda.png']
}

function CrypPass(senha){
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