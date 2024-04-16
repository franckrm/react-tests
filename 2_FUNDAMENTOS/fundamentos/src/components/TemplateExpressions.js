const TemplateExpressions = () => {
        const name ="Francisco";
        const data = {
            age: 31,
            job: "Programer"
        }
        return(
            <div>
                <h1>Olá {name}, tudo bem?</h1>
                <p>Você atual como: {data.job}</p>
              
            </div>
        )
}

export default TemplateExpressions