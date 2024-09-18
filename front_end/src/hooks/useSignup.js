import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signUp = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender })
        
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            })

            const data = await res.json();
            console.log(data);

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return { loading, signUp };
};

export default useSignup

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields');
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password do not match..!")
        return false
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters..!')
        return false
    }

    return true
}
