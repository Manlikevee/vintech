import { createContext,  useEffect, useState, useContext} from "react";

const UserData = createContext();


const  Veecontext = ({ children }) => {
    return (
        <UserData.Provider value={{ amt: '$ 500,000' }}>
            {children}
        </UserData.Provider>
    );

}

export { Veecontext, UserData };