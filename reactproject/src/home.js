import { useState, useEffect } from 'react';
import './home.css'

function HomeComponent() {


    const [users, setUsers]= useState([]);


    useEffect(()=>{
        fetch("http://localhost:3000/data")
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data);
        })
        .catch((err)=>console.log("Error fetching data ;", err))
    },[])

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
               {users.map(user=>(
                <tr>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
          ))}
            </tbody>
        </table>
    );
}

export default HomeComponent;