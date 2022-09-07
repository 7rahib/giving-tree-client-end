import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useOrgToken = user => {
    const [orgToken, setOrgToken] = useState('');
    const orgUser = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {
            email: email
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
                    navigate('/OrgProfile');
                })
        }

    }, [user, orgUser, navigate]);
    return [orgToken];
}

export default useOrgToken;