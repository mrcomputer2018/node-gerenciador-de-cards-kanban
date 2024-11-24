import Card from "./classes/Card";
import prompt from "prompt-sync"

let option: number = 0;
let teclado: any = prompt();

while ( option !== 9) {
    console.log("\n")
    console.log(`+========= MENU DE OPÇOES ==========+`)
    console.log("|1 - Criar um card                  |")
    console.log("|2 - Listar um card                 |")
    console.log("|3 -                                |")
    console.log("|4 -                                |")
    console.log("|9 - Sair                           |")
    console.log("+===================================+")
    console.log("Digite uma opção: ")

    option = +teclado("Digite uma opção: ")

    if( option === 1) {
        let titulo: string = teclado("Digite o titulo: ")
        let descricao: string = teclado("Digite a descrição: ")
        let data: string = teclado("Digite a data: ")
        let status: "pendente" | "concluido" = teclado("Digite o status: ")
        let prioridade: "baixa" | "media" | "alta"| "urgente" | null = teclado("Digite a prioridade: ")
        let responsavel: string | null = teclado("Digite o nome do responsavel: ")

        let card: Card = new Card(titulo, descricao, data, status, prioridade, responsavel)
        console.log(`Card criado com sucesso: ${card.getDetalhes()}`)
    }
    else if ( option === 9) {
        console.log("\nSaindo do programa...")
    }
    else {
        console.log("\nOpção inválida!!!")
    }

}