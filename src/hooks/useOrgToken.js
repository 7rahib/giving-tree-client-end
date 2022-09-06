import { useEffect, useState } from "react"

const useOrgToken = user => {
    const [orgToken, setOrgToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = {
            email: email,
            name: name
        };
        if (email) {
            fetch(`http://localhost:5000/organizations/${email}`, {
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
                    setOrgToken(accessToken);
                })
        }

    }, [user]);
    return [orgToken];
}

export default useOrgToken;