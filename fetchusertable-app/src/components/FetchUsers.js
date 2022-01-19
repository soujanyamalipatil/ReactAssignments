import React, { useEffect, useState } from 'react'


function FetchUsers() {
    const [posts, setposts] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users ').then((res => res.json()))
            .then(data => {
                setposts(data)
                console.log(data);
            }).catch(e => {
                console.log(e)

            })
    }, [])
    return (
        <div>
            <h2>Users Table</h2>
            {/* Posts:{posts.length} */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((p, index) => {
                        return <Tr key={index} posts={p} />

                    })}
                </tbody>
            </table>
        </div>
    )
}


const Tr = ({ posts }) => {
    return (
        <tr>
            <td>{posts.id}</td>
            <td>{posts.name}</td>
            <td>{posts.username}</td>
            <td>{posts.email}</td>
            <td>street: {posts.address.street}<br />
                suite: {posts.address.suite}<br />
                city: {posts.address.city}<br />
                zipcode: {posts.address.zipcode}<br />
                lat: {posts.address.geo.lat}<br />
                lng: {posts.address.geo.lng}</td>
            <td>{posts.phone}</td>
            <td>{posts.website}</td>
            <td>name: {posts.company.name}<br />
                catchPhrase: {posts.company.catchPhrase}<br />
                bs: {posts.company.bs}</td>


        </tr>
    )
}
export default FetchUsers