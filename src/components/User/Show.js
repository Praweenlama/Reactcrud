import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const Show = () => {

    const { id } = useParams();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    useEffect(() => {
        const postdata = async () => {
            const user = await axios.get(`http://localhost:3333/users/${id}`).catch((error) => {
                console.log("Something wrong");
            })

            setname(user.data.name);
            setemail(user.data.email);
            setpass(user.data.password)
        }
        postdata();
    }, [id])

    return (
        <>
            User {id} Data
            <table>
                <tbody>
                    <tr>Name:
                        <td>{name}</td> 
                    </tr>
                    <tr>Email: 
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
