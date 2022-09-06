import { useEffect, useState } from "react"

const useVolunteerToken = user => {
    const [volunteerToken, setVolunteerToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser = {
            email: email,
            name: name
        };
        if (email) {
            fetch(`http://localhost:5000/volunteers/${email}`, {
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
                    setVolunteerToken(accessToken);
                })
        }

    }, [user]);
    return [volunteerToken];
}

export default useVolunteerToken;