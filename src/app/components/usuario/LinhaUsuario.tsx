import { Usuario } from "@/core/model/Usuario";

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex bg-zinc-900 p-4 rounded-md cursor-pointer" onClick={() => props.onClick?.(props.usuario)}>
            <div className="flex flex-col gap-2">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    );
}