import Card from "./classes/Card";
import prompt from "prompt-sync"

let option: number = 0;
let teclado = prompt();

try {
    while (option !== 9) {
        console.log("\n")
        console.log(`+========= MENU DE OPÇOES ==========+`)
        console.log("|1 - Cadastro de Responsável        |")
        console.log("|2 - Cadastro de Card               |")
        console.log("|3 -                                |")
        console.log("|4 -                                |")
        console.log("|9 - Sair                           |")
        console.log("+===================================+")
    
        option = +teclado("Digite uma opção: ")
    
        if( option === 1) {
            console.log(`\n+=== CADASTRO DE RESPONSÁVEIS ===+`)
            let nome: string = teclado("Digite o nome: ")
            let email: string = teclado("Digite o email: ")
            let telefone: string = teclado("Digite o telefone: ")
    
            console.log(`\nResponsável criado com sucesso: ${nome}, ${email}, ${telefone}`)
        }
        else if( option === 2) {
            let titulo: string = teclado("Digite o titulo: ")
            let descricao: string = teclado("Digite a descrição: ")
            let prioridadeInput: string = teclado("Digite a prioridade: ");
            let prioridade: "baixa" | "media" | "alta" | "urgente" | null = 
                ["baixa", "media", "alta", "urgente"].includes(prioridadeInput) ? prioridadeInput as "baixa" | "media" | "alta" | "urgente" : null;
            let responsavel: string | null = teclado("Digite o nome do responsavel: ")
    
            let card: Card = new Card(titulo, descricao, prioridade, responsavel)
            console.log(`Card criado com sucesso: ${card.getDetalhes()}`)
        }
        else if ( option === 9) {
            console.log("\nSaindo do programa...")
        }
        else {
            console.log("\nOpção inválida!!!")
        }
    }
} catch (error) {
    if (error instanceof Error) {
        console.log(`Erro: ${error.message}`);
    } else {
        console.log(`Erro desconhecido: ${error}`);
    }
}

