import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from '../hooks/useFetch';
export const UserContext = createContext<UserContextType<any> | null>(null);

export type UserContextType<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
    
};


const USER_API_BASE_URL = "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users";

export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

 
    const fetchState = useFetch(USER_API_BASE_URL);

    return (
        <UserContext.Provider value={fetchState}>
             {children}
        </UserContext.Provider>
    )
}

export const useUser = <T,>(): UserContextType<T> => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context as UserContextType<T>;
  };