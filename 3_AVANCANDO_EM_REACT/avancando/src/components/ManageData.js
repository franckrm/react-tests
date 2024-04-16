import {useState} from "react";

const ManageData = () => {

  let someData = 10;
  const [number, setNumber] = useState(10);
  console.log(someData)
  console.log(number)
  return (
    <div>
        <div>Valor {someData}</div>
        <button onClick={()=>(someData = 15)}>Mudar variável</button>

        <div>Valor {number}</div>
        <button onClick={()=>(setNumber(25))}>Mudar variável</button>
    </div>
  )
}

export default ManageData
