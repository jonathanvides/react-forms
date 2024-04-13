import { useState } from "react";

const APIURL = "https://fsa-jwt-practice.herokuapp.com/signup";

export const SignUpForm = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(APIURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            });
            const result = await response.json();
            if (username.length >= 8) {
            setToken(result.token);
            console.log("result", result);
            } else {
                alert("Please make your username 8 characters minimum.")
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            {
                error && <p>{error}</p>
            }
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </>
    )

}