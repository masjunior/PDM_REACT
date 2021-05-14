import { ChangeEvent, useState } from "react";


type CaixaTextoProps = {
    valorInicial: string, 
    aoAlterar: Function
}

function CaixaTexto({valorInicial,  aoAlterar }: CaixaTextoProps) {

    const [valor, setValor] = useState(valorInicial);

    return <>
    <input type="text" value={valor} onChange={(e : ChangeEvent<HTMLInputElement>) =>{
        setValor(e.target.value);
        if(aoAlterar){
            aoAlterar(e.target.value);
        }
    }}/>
    </>
    
}

export default CaixaTexto;