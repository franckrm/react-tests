const Challenge = ()=>{

    let n1 = 1
    let n2 = 2

    return (
        <div>
            <h1>A soma é {n1+n2}</h1>
            <button onClick={()=>console.log(n1+n2)}>Exibir soma no console</button>
        </div>
    )
}

export default Challenge