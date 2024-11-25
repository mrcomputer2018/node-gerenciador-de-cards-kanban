import "reflect-metadata"
import Card from "./classes/Card";
import prompt from "prompt-sync"
import Responsavel from "./classes/Responsavel";

let option: number = 0;
let continuar: string = 's';
let teclado = prompt();

let nome: string = ''
let email: string = ''
let telefone: string = ''
let responsaveis: Responsavel[] = []
const responsavel: Responsavel = new Responsavel(nome, email, telefone)
let cards: Card[] = []

try {
    while (option !== 9 || continuar === 's') {
        console.log("\n")
        console.log(`+========= MENU DE OPÇOES ==========+`)
        console.log("|1 - Cadastro de Responsável        |")
        console.log("|2 - Cadastro de Card               |")
        console.log("|3 - Listar Responsaveis            |")
        console.log("|4 - Listar Cards                   |")
        console.log("|9 - Sair                           |")
        console.log("+===================================+")
    
        option = +teclado("Digite uma opção: ")
    
        if( option === 1) {
            console.log(`\n+=== CADASTRO DE RESPONSÁVEIS ===+`)
            let nome: string = teclado("Digite o nome: ")
            let email: string = teclado("Digite o email: ")
            let telefone: string = teclado("Digite o telefone: ")

            // verifica se o responsavel já existe
            if (responsavel.isExistResponsavel(nome, [responsavel])) {
                break
            }

            responsavel.setNome(nome)
            responsavel.setEmail(email)
            responsavel.setTelefone(telefone)

            responsaveis.push(responsavel)

            console.log(`\nResponsável criado com sucesso: ${nome}, ${email}, ${telefone}`)
        }
        else if( option === 2) {
            let titulo: string = teclado("Digite o titulo: ")
            let descricao: string = teclado("Digite a descrição: ")
            let prioridadeInput: string = teclado("Digite a prioridade: ");
            let prioridade: "baixa" | "media" | "alta" | "urgente" | null = 
                ["baixa", "media", "alta", "urgente"].includes(prioridadeInput) ? prioridadeInput as "baixa" | "media" | "alta" | "urgente" : null;
            let responsavel: string | null = teclado("Digite o nome do responsavel: ")
    
            const card: Card = new Card(titulo, descricao, prioridade, responsavel)
            console.log(`Card criado com sucesso: ${card.getDetalhes()}`)
        }
        else if( option === 3) {
            console.log(`\n+=== LISTA DE RESPONSÁVEIS ===+`)
            responsaveis.forEach(responsavel => {
                console.log(responsavel.getDetalhes())
            })
        }
        else if( option === 4) {
            console.log(`\n+=== LISTA DE CARDS ===+`)
            cards.forEach(card => {
                console.log(card.getDetalhes())
            })
        }
        else if ( option === 9) {
            console.log("\nSaindo do programa...")
            continuar = 'n'
            break
        }
        else {
            console.log("\nOpção inválida!!!")
        }

        continuar = teclado("Deseja continuar? (s/n): ")
    }
} catch (error) {
    if (error instanceof Error) {
        console.log(`Erro: ${error.message}`);
    } else {
        console.log(`Erro desconhecido: ${error}`);
    }
}

