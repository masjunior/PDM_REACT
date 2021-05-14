import React, { useState } from "react";
import Cabecalho from "./Cabecalho";
import Principal from "./Principal";
import Rodape from "./Rodape";

function App() {

  const [nomeUsuario, setNomeUsuario] = useState<string>('');

 
  return <>
    <Cabecalho texto={nomeUsuario}/>
    <Principal nome={nomeUsuario} aoAlterarNome={setNomeUsuario}/>
    <Rodape/>
  </>;
}

export default App;
