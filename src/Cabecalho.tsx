
type CabecalhoProps = {
    texto : string
}

function Cabecalho({texto} : CabecalhoProps) {
    
    return <div style={{width:'100%', backgroundColor:'black', padding:'5px'}}>
            App v1.0
            <span style={{float: 'right',}}>{texto}</span>
        </div>

    
}

export default Cabecalho;