import { CreateResponsavelRepository } from "../repositories/CreateResponsavelRepository.ts";
import { DeleteResponsavelRepository } from "../repositories/DeleteResponsavelRepository";
import { ListResponsavelRepository } from "../repositories/ListResponsavelRepository";
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
        return ` \nNome: ${this.nome}` +
        `\nE-mail: ${this.email} ` +
        `\nTelefone: ${this.telefone}`
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

    async cadastrarResponsavel(nome: string, email: string, telefone: string): Promise<Responsavel> {
        try {
            if (!nome || !email || !telefone) {
                console.log('Preencha todos os campos')
                return new Responsavel('', '', '')
            }

            const createResponsavel = new CreateResponsavelRepository();

            const response = await createResponsavel.execute({ nome, email, telefone })
    
            const { nome: nomeResp, email: emailResp, telefone: telefoneResp } = response.data
    
            if (response.statusCode !== 200 && response.statusCode !== 201 ) {
                console.log('\nErro ao cadastrar responsável')
            }
            else {
                console.log(`\nResponsável cadastrado com sucesso: ${nomeResp}`)
            }
    
            const newResponsavel = new Responsavel(nomeResp, emailResp, telefoneResp);

            return newResponsavel;

        } 
        catch (error) {
            if (error instanceof Error) {
                console.log(`Erro: ${error.message}`);
            } else {
                console.log(`Erro desconhecido: ${error}`);
            }

            return new Responsavel('', '', '');
        }
    }

    async listarResponsaveis(): Promise<Responsavel[]> {
        try {
            const listResponsavelRepository = new ListResponsavelRepository();

            const response = await  listResponsavelRepository.execute();

            if (response.statusCode !== 200 && response.statusCode !== 201 ) {
                console.log('\nErro ao listar responsáveis')
            }
            else {
                console.log(`\nResponsáveis listados com sucesso`)
            }

            const responsaveis = response.data.map((responsavel: any) => {
                const { nome, email, telefone } = responsavel;
                return new Responsavel(nome, email, telefone);
            })

            return responsaveis;

        } 
        catch (error) {
            if (error instanceof Error) {
                console.log(`Erro: ${error.message}`);
            } else {
                console.log(`Erro desconhecido: ${error}`);
            }

            return [];
        }
    }

    async deletarResponsavel(email: string): Promise<void> {
        try {
            const deleteResponsavelRepository = new DeleteResponsavelRepository();

            const response = await deleteResponsavelRepository.execute(email);

            if (response.statusCode !== 200 && response.statusCode !== 201 ) {
                console.log('\nErro ao deletar responsável')
            }
            else {
                console.log(`\nResponsável deletado com sucesso`)
            }

        } catch (error) {
            if (error instanceof Error) {
                console.log(`Erro: ${error.message}`);
            } else {
                console.log(`Erro desconhecido: ${error}`);
            
            }
        }
    }
}