import Util from "./util";

export default class Responsavel {
    private readonly id: string;
    private nome: string
    private email: string
    private telefone: string

    constructor(nome: string, email: string, telefone: string) {
        this.id = Util.gerarUuid()
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }

    //getters e setters
    setNome(nome: string): void {
        this.nome = nome
    }

    setEmail(email: string): void {
        this.email = email
    }

    setTelefone(telefone: string): void {
        this.telefone = telefone
    }

    // Metodos
    getDetalhes(): string {
        return ` Nome: ${this.nome}` +
        `E-mail: ${this.email} ` +
        `Telefone: ${this.telefone}`
    }

    isExistResponsavel(nome: string, responsaveis: Responsavel[]): boolean {
        const exist = responsaveis.find(responsavel => responsavel.nome === nome)
        
        if (exist) {
            console.log(`\nResponsável já existe: ${nome}`)
            return true
        } else {
            return false
        }
    }
}