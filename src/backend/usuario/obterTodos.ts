'use server';
import UsuarioRepositorio from "./UsuarioRepositorio";

export default async function obterTodos(){

    return UsuarioRepositorio.obterTodos()
}