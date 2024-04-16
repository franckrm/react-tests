import MyComponent from "./MyComponent";

const FirstComponent = () =>{
   
    return(
        <div>
          {/*Algum comentário*/}
            <h1>Meu Primeiro Component</h1>
            <p className="test">Meu texto</p>
            <MyComponent/>
        </div>
    );
};


export default FirstComponent;