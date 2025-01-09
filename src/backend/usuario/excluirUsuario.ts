'use server';

import UsuarioRepositorio from "./UsuarioRepositorio";

export default async function excluirUsuario(id: string){

    return UsuarioRepositorio.excluir(id)
}