import { useEffect, useState } from "react";

const useAdmin = user => {
    const email = (user[0]?.email)

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        fetch(`https://givingtree.onrender.com/user/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [email])

    return [admin]
}

export default useAdmin;