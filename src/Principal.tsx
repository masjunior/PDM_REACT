import CaixaTexto from "./CaixaTexto";

type PrincipalProps = {
    nome: string, 
    aoAlterarNome: Function
}

function Principal({nome, aoAlterarNome} : PrincipalProps) {

    return <>
    <h1>Seja bem vindo(a)!</h1>
    <p>Preencha os seguintes dados: </p>
    <CaixaTexto valorInicial={nome} aoAlterar={aoAlterarNome}/>
    <br/>
    </>
    
}

export default Principal;