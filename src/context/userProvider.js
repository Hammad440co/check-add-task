"use client";
import React, { useEffect, useState } from 'react';
import UserContext from './userContext';
import { toast } from 'react-toastify';
import { currentUser } from '@/Services/userService';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        async function loadUser() {
            try {
                const logUser = await currentUser();
                setUser({ ...logUser });
            } catch (error) {
                console.log(error);
                toast.error("Error in loading current user");
                setUser(undefined);
            }
        }
        loadUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
