import { Usuario } from "@/core/model/Usuario";
import { supabase } from "../../lib/supabaseClient";

export default class UsuarioRepositorio {
    static async listar(): Promise<Usuario[]> {
        const { data, error } = await supabase
            .from('Usuario') // Nome da tabela no Supabase
            .select('id, email, nome, senha'); // Seleciona os campos específicos

        if (error) {
            throw new Error(`Erro ao listar usuários: ${error.message}`);
        }

        return data as Usuario[];
    }

    static async salvar(usuario: Usuario): Promise<void> {
        const { error } = await supabase
            .from('Usuario') // Nome da tabela no Supabase
            .upsert([usuario]); // Upsert: insere ou atualiza

        if (error) {
            throw new Error(`Erro ao salvar usuário: ${error.message}`);
        }
    }

    static async obterTodos(): Promise<Usuario[]> {
        const { data, error } = await supabase
            .from('Usuario') // Nome da tabela no Supabase
            .select('id, email, nome, senha'); // Seleciona os campos específicos

        if (error) {
            throw new Error(`Erro ao obter todos os usuários: ${error.message}`);
        }

        return data as Usuario[];
    }

    static async obterPorId(id: string): Promise<Usuario | null> {
        const { data, error } = await supabase
            .from('Usuario') // Nome da tabela no Supabase
            .select('id, email, nome, senha') // Seleciona os campos específicos
            .eq('id', id)
            .single(); // Garante que retorna apenas um registro

        if (error) {
            throw new Error(`Erro ao obter usuário por ID: ${error.message}`);
        }

        return data as Usuario;
    }

    static async excluir(id: string): Promise<void> {
        const { error } = await supabase
            .from('Usuario') // Nome da tabela no Supabase
            .delete()
            .eq('id', id);

        if (error) {
            throw new Error(`Erro ao excluir usuário: ${error.message}`);
        }
    }
}
