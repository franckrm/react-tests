import {useState} from 'react'

const ListRender = () => {
    
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 41848, name: "João", age: 28},
        {id: 1, name: "Pedro", age: 44},
    ]);

    return (
        <div>
            <ul>
                {list.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user)=>{
                    return <li key={user.id}>{user.name} - {user.age}</li>
                })}
            </ul>
        </div>
    )
}

export default ListRender
