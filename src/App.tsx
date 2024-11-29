import Interfaz from "./components/Interfaz/app"
import { useEffect, useState } from "react"
import AlertaEliminado from "./components/AlertaEliminado/app";
import InterfazEditar from "./components/InterfazEditar/app";
import InterfazAniadir from "./components/InterfazAniadir/app";
import AlertaCreado from "./components/AlertaCreado/app";
import AlertaEditado from "./components/AlertaEditado/app";
function App() {
  const [edited, setEdited] = useState<boolean>(false);
  const [create, setCreate] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  //Estados para las alertas
  const [deleted, setDeleted] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  

  useEffect(() => {
    if (deleted) {
      setTimeout(() => {
        setDeleted(false);
      }, 5500);
    }

    if (created) {
      setTimeout(() => {
        setCreated(false);
      }, 5500);
    }

    if (edit) {
      setTimeout(() => {
        setEdit(false);
      }, 5500);
    }
    
  }, [deleted, created, edit]);

  return (
    <>
        <main className="max-w-[100vw] min-h-[100vh] bg-oscuro flex justify-center items-center overflow-hidden relative">
          <Interfaz
          setDeleted={setDeleted}
          deleted={deleted}
          setEdited={setEdited}
          edited={edited}
          setId={setId}
          create={create}
          setCreate={setCreate}
          />

          {deleted && (
            <AlertaEliminado/>
          )}

          {created && (
            <AlertaCreado/>
          )}

          {edit && (
            <AlertaEditado/>
          )}

          {edited && (
            <InterfazEditar
            setEdited={setEdited}
            setEdit={setEdit}
            id={id}
            />
          )}

          {create && (
            <InterfazAniadir
            setNew={setCreate}
            setCreated={setCreated}
            />
          )}
        </main>
    </>
  )
}

export default App
