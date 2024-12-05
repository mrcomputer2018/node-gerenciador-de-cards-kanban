import { db } from "../util/db";

interface IResponsavel {
    nome: string;
    email: string;
    telefone: string;
}

export class CreateResponsavelRepository {
    async execute ({ nome, email, telefone }: IResponsavel) {
        
        const isExistEmail = await db.responsavel.findFirst({
            where: {
                email
            }
        })

        if (isExistEmail) {
            throw { statusCode: 400, message: 'Email já cadastrado' };
        }

        const responsavel = await db.responsavel.create({
            data: {
                nome,
                email,
                telefone
            }
        });

        return {
            statusCode: 201,
            data: responsavel
        };
    }
}