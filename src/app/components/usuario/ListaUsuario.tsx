import LinhaUsuario from "./LinhaUsuario";
import { Usuario } from "@/core/model/Usuario";

export interface ListaUsuarioProps {
    usuarios: Usuario[]
    onClick?: (usuario: Usuario) => void
}

export default function listaUsuario( props: ListaUsuarioProps) {
    return (
        <div className="flex flex-col gap-4">
            {props.usuarios.map((usuario: Usuario) => {
                return (<LinhaUsuario key={usuario.id} usuario={usuario} onClick={props.onClick}/>
            )
            })}
        </div>
    )
    
}