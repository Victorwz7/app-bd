import { Usuario } from "@/core/model/Usuario";
import InputTexto from "../shared/inputTexto";
import { useState } from "react";
import { toast } from "react-toastify";
// Adicionar importação do ícone de olho
import { FaEye, FaEyeSlash } from "react-icons/fa";

export interface FormularioUsuarioProps {
  usuario: Partial<Usuario>;
  onchange: (usuario: Partial<Usuario>) => void;
  onSalvar: () => void;
  onCancelar: () => void;
  excluir: () => void;
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
  const [emailValido, setEmailValido] = useState(true);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailValido(validarEmail(email));
    props.onchange?.({ ...props.usuario, email });
  };

  const handleSalvar = async () => {
    try {
      await props.onSalvar();
      // Remover a notificação duplicada
      // toast.success("Usuário salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar usuario:", error);
      toast.error("Erro ao salvar usuario.");
    }
  };

  const handleExcluir = async () => {
    try {
      await props.excluir();
      // Remover a notificação duplicada
      // toast.error("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuario:", error);
      toast.error("Erro ao excluir usuario.");
    }
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="flex flex-col gap-5">
      <InputTexto
        label="Nome"
        type="text"
        value={props.usuario.nome}
        onChange={(e) =>
          props.onchange?.({ ...props.usuario, nome: e.target.value })
        }
      />
      <InputTexto
        label="E-mail"
        type="email"
        value={props.usuario.email}
        onChange={handleEmailChange}
      />
      {!emailValido && <span className="text-red-500">E-mail inválido</span>}
      <div className="relative">
        <InputTexto
          label="Senha"
          type={mostrarSenha ? "text" : "password"}
          value={props.usuario.senha}
          onChange={(e) =>
            props.onchange?.({ ...props.usuario, senha: e.target.value })
          }
        />
        <button
          type="button"
          className="absolute right-2 top-2"
          onClick={toggleMostrarSenha}
        >
          {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            className="bg-blue-500 px-4 py-2 roudend-md hover:bg-blue-300"
            onClick={handleSalvar}
          >
            Salvar
          </button>
          <button
            className="bg-zinc-500 px-4 py-2 roudend-md hover:bg-zinc-300"
            onClick={props.onCancelar}
          >
            Cancelar
          </button>
        </div>
        <button
          className="bg-red-500 px-4 py-2 roudend-md hover:bg-red-299"
          onClick={handleExcluir}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
