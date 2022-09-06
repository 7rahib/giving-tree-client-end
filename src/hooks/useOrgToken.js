import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useOrgToken = user => {
    const [orgToken, setOrgToken] = useState('');
    const orgUser = useAuthState(auth);

    useEffect(() => {
        const name = user?.user?.displayName;
        const email = user?.user?.email;
        console.log(email, orgUser[0]);
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

    }, [user, orgUser]);
    return [orgToken];
}

export default useOrgToken;