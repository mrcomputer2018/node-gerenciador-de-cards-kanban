import { db } from "../util/db";

export class ListResponsavelRepository {
    async execute() {
        const responsaveis  = await db.responsavel.findMany()

        if (!responsaveis) {
            console.log('Nenhum responsável encontrado')
            return {
                statusCode: 404,
                data: []
            }
        }

        return {
            statusCode: 200,
            data: responsaveis
        }
    }
}