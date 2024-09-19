import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// hook that easily access authentication data
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("funchat")) || null);

    return <AuthContext.Provider value={{ authUser, setAuthUser }}> {children} </AuthContext.Provider>
}