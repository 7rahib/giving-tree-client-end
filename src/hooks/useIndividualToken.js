import { useEffect, useState } from "react"

const useIndividualToken = user => {
    const [individualToken, setIndividualToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {
            email: email,
        };
        if (email) {
            fetch(`https://givingtree.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setIndividualToken(accessToken);
                })
        }

    }, [user]);
    return [individualToken];
}

export default useIndividualToken;