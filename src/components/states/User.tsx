import { useState } from 'react'
type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null) //Initially null later can be of type AuthUser
    //TODO: const [user, setUser] = useState<AuthUser>({} as AuthUser) // Type Assertion means it should be of type AuthUser but can be its empty version
   //TODO: so we can go to user.email or user.name without optional chaining 

    const handleLogin = () => {
        setUser({
            name:"Chetan",
            email:"tchetan03@gmail.com"
        })
    }
    const handleLogout = () => {setUser(null)}


    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

