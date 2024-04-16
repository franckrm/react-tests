const Events = () =>{
    
    const handleMyEvent = (e) => {
        console.log(e);
    };

    const renderSomethinmg = (x) =>{
        if(x){
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Também posso renderizar isso</h1>
        }
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={()=>console.log("teste")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={()=>{
                    if(true){
                        console.log("Isso não deve existir");
                    }
                }}>Clique aqui por favor!</button>
            </div>
            {renderSomethinmg(false)}
        </div>
    )
};

export default Events;