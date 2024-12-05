import { db } from "../util/db";

export class DeleteResponsavelRepository {
    async execute( email: string) {
        
        const responsavel = await db.responsavel.findFirst({
            where: {
               email
            }
        })

        if (!responsavel) {
            throw { statusCode: 404, message: 'Responsável não encontrado' };
        }

        await db.responsavel.delete({
            where: {
                email
            }
        });

        return {
            statusCode: 200,
            message: 'Responsável deletado com sucesso'
        };
    }
}