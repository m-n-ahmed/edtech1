import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({ user_id: null, role_id: null, cont_id: null, attr_id: null });

    const setAuthInfo = ({ user_id, cont_id, attr_id, role_id }) => {
        setAuthState({ user_id, cont_id, attr_id, role_id });
    };

    return (
        <AuthContext.Provider value={{ ...authState, setAuthInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default useAuth;