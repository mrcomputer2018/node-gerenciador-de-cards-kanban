import Util from "./util";

export default class Responsavel {
    private readonly id: string;
    private readonly nome: string
    private email: string
    private telefone: string

    constructor(nome: string, email: string, telefone: string) {
        this.id = Util.gerarUuid()
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }

    // Metodos
    getDetalhes(): string {
        return `${this.nome} - ${this.email} - ${this.telefone}`
    }
}