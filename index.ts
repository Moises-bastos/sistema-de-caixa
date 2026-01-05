function gerenciamentoDeVendas() {
    let produtos: string[] = [];
    let precos: number[] = [];
    let quantidade:number=Number(prompt("Digite a quantidade de produtos que deseja cadastrar: ")!);
    for (let i=0; i<quantidade; i++){
        let produto:string=String(prompt('vá digitando o nome de cada produto e o preço correspondente: ')!);
        produtos.push(produto)
        let preco:number=Number(prompt('digite o preço')!);
        precos.push(preco);
    }
    let opcao:number;
    let totalVenda:number=0;
    do{
        opcao=Number(prompt(" O que deseja fazer agora?\n MENU:\n" +
        "1 - Listar produtos\n" +
        "2 - Registrar venda\n" +
        "3 - Mostrar total vendido\n" +
        "4 - Produto mais caro\n" +
        "5 - Remover produto\n" +
        "0 - Sair")!);
        switch(opcao){
            case 1:
                let texto:string = "produtos cadastrados:\n";
                for(let i=0; i<produtos.length; i++){
                    texto += `${i + 1} - ${produtos[i]} - R$ ${precos[i]!.toFixed(2)}\n`;

                }
                alert(texto);
                break;
            case 2:
                let produtoVendido:string=String(prompt("Digite o nome do produto vendido: ")!);
                let indice:number=produtos.indexOf(produtoVendido);
                if(indice!==-1){
                    totalVenda += precos[indice]!;
                    alert("venda registrada! Total vendido ate agora:R$" + totalVenda.toFixed(2));
                } else{
                    alert("Produto não encontrado!");
                }
                break;
            case 3:
                alert("total vendido ate agora: R$" + totalVenda.toFixed(2));
                break;
            case 4:
                if(produtos.length===0){
                    alert("Nenhum produto cadastrado!");
                }else{
                    let indiceMaiscaro:number=0;
                    for(let i=1; i<precos.length; i++){
                        if(precos[i]!>precos[indiceMaiscaro]!){
                            indiceMaiscaro=i;
                        }
                    }
                    alert("produto mais caro: " +produtos[indiceMaiscaro] + " - R$" + precos[indiceMaiscaro]!.toFixed(2));
                    
                }
                break;
            case 5:
                let produtoRemover:string=String(prompt("Digite o nome do produto que deseja remover: ")!);
                let indiceRemover:number=produtos.indexOf(produtoRemover);
                if(indiceRemover!=-1){
                    produtos.splice(indiceRemover, 1);
                    precos.splice(indiceRemover, 1);
                    alert("Produto removido com sucesso!");
                } else{
                    alert("produto não encontrado!");
                }
                break;
                
        }
    } while (opcao !== 0);
} gerenciamentoDeVendas();
