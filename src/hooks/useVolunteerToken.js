import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const useVolunteerToken = user => {
    const [volunteerToken, setVolunteerToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {
            email: email
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
                    navigate('/volunteerProfile');
                })
        }

    }, [user, navigate]);
    return [volunteerToken];
}

export default useVolunteerToken;