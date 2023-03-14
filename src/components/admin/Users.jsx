import React from 'react'
import me from '../../assests/meriphoto2.jpg'
const Users = () => {
    const arr=[1,2,3,4]
  return (
    <section className='tableClass'>
         <main>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((i)=>(
                        <tr key={i}>
                        <td>#13587456139</td>
                        <td>Anamika</td>
                        <td><img src={me} alt="user"/></td>
                        <td>Admin</td>
                        <td>
                            {"23-4-20"}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Users