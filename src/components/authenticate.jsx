import { useState } from "react"

const APIURL = "https://fsa-jwt-practice.herokuapp.com/authenticate";

export const Authenticate = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState({});
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(APIURL, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                }
            });
            const result = await response.json();
            setSuccessMessage(result.message);
            setUsername(result.data.username);
            console.log("result", result);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Authenticate!</h2>
            {successMessage && username && <p>{successMessage} Welcome, {username}!</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}