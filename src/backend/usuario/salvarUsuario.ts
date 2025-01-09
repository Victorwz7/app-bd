'use server';

import { Usuario } from "@/core/model/Usuario";
import Id from "@/core/utils/id";
import UsuarioRepositorio from "./UsuarioRepositorio";

export default async function salvarUsuario(usuario: Partial<Usuario>){

    const novoUsuario ={
        ...usuario,
        id: usuario.id ?? Id.novo,
    }

    return UsuarioRepositorio.salvar(novoUsuario as Usuario)
}