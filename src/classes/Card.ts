import Responsavel from './Responsavel';
import Util from './util'

export default class Card {
    private readonly id: string;
    private titulo: string
    private descricao: string
    private data: string
    private status: "pendente" | "concluido"
    private prioridade: "baixa" | "media" | "alta"| "urgente" | null
    private responsavel: Responsavel [] | null

    constructor(titulo: string, descricao: string, prioridade: "baixa" | "media" | "alta"| "urgente" | null, responsavel: string | null) {
        this.id = Util.gerarUuid()
        this.titulo = titulo
        this.descricao = descricao
        this.data = new Date().toISOString()
        this.status = 'pendente'
        this.prioridade = null
        this.responsavel = null
    }

    public getId(): string {
        return this.id
    }

    public getTitulo(): string {
        return this.titulo
    }

    public getDescricao(): string {
        return this.descricao
    }

    public setStatus(status: "pendente" | "concluido"): void {
        this.status = status
    }

    public setPrioridade(prioridade: "baixa" | "media" | "alta"| "urgente" | null): void {
        this.prioridade = prioridade
    }

    public setResponsavel(responsavel: Responsavel[] | null): void {
        this.responsavel = responsavel
    }

    // Metodos
    public getDetalhes(): string {      
        return `${this.titulo} - ${this.descricao} - ${this.data} - ${this.status} - ${this.prioridade} - ${this.responsavel}`
    }

}