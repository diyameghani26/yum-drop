

import { createContext, useEffect, useState,} from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // LOAD USER FROM LOCAL STORAGE

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });

  // SAVE USER TO LOCAL STORAGE

useEffect(() => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
  }
}, [user]);

  // LOGIN

  const login = (email, password) => {

    if (email && password) {

      const userData = {
        email,
      };

      setUser(userData);

    } else {

      console.log("Enter valid details");

    }
  };

  // LOGOUT

  const logout = () => {

    setUser(null);

    localStorage.removeItem("user");

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );
};

export default AuthProvider;