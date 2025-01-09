import { Usuario } from "@/core/model/Usuario";
import { prisma } from "@/lib/prisma";

export default class RepositorioUsuario {
    static async listar(){
        return prisma.usuario.findMany();
    }

    static async salvar(usuario: Usuario): Promise<Usuario>{
        return prisma.usuario.upsert({
            where: {id: usuario.id},
            update: usuario,
            create: usuario
        });
    }

    static async obterTodos(): Promise<Usuario[]>{
        return await prisma.usuario.findMany();
    }

    static async obterPorId(id: string): Promise<Usuario | null>{
        const usuario = await prisma.usuario.findUnique({
            where: {id}
        });
        return usuario as Usuario
    }

    static async excluir (id: string): Promise<void>{
        await prisma.usuario.delete({
            where: {id}
        });
    }
}