"use client";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import { IconPlus, IconUser } from "@tabler/icons-react";
import useUsuarios from "@/app/data/hooks/useUsuarios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const { usuario, usuarios, salvarUsuario, excluir, alterarUsuario } = useUsuarios();

  const handleSalvarUsuario = async () => {
    try {
      await salvarUsuario();
      toast.success("Usuário salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      toast.error("Erro ao salvar usuário.");
    }
  };

  const handleExcluirUsuario = async () => {
    try {
      await excluir();
      toast.error("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      toast.error("Erro ao excluir usuário.");
    }
  };

  return (
    <Pagina className="flex flex-col gap-10">
      <ToastContainer />
      <Titulo
        icone={IconUser}
        principal="usuarios"
        segundario="Cadastro Usuarios"
      />

      {usuario ? (
        <FormularioUsuario
          usuario={usuario}
          onchange={alterarUsuario}
          onSalvar={handleSalvarUsuario}
          onCancelar={() => alterarUsuario(null)}
          excluir={handleExcluirUsuario}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 bg-blue-500 px-4 py-2 roudend-md hover:bg-blue-300"
              onClick={() => alterarUsuario({})}
            >
              <IconPlus />
              <span>Novo Usuário</span>
            </button>
          </div>
          <ListaUsuario usuarios={usuarios} onClick={alterarUsuario} />
        </>
      )}
    </Pagina>
  );
}
