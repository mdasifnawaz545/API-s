import UserContext from "./UserContext";
import React, { useState } from "react";

const UserContextProvider = (({ children }) => {
    let [user, setUser] = useState('');
    return(
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
    )
})

export default UserContextProvider;