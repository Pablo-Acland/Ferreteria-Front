import ListarClientes from "./components/pages/ListarClientes";
import AgregarCliente from "./components/pages/AgregarCliente";
function App() {
  console.log("hola App")
  return (
    <div>
      <div>
        <AgregarCliente/>
        <ListarClientes/>
      </div>
      
    </div>
  );
}

export default App;
