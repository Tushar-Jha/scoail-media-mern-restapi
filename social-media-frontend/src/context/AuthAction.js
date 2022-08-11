export const LoginStart=(userCredentials)=>({
    type:"LOGIN_START"
})

export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
})

export const LoginSuccessReload=(user)=>({
    type:"LOGIN_SUCCESS_RELOAD",
    payload:user,
})

export const LoginFailure=(error)=>({
    type:"LOGIN_FAILURE",
    payload:error,
})

export const LogOut = () =>({
    type:"LOG_OUT",
})

export const Follow = (userId) =>({
    type:"FOLLOW",
    payload:userId
})

export const Unfollow = (userId) =>({
    type:"UNFOLLOW",
    payload:userId
})