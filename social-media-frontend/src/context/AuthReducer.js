const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            localStorage.setItem("userkey", JSON.stringify(action.payload));
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            };
        case "LOGIN_SUCCESS_RELOAD":
            console.log('loginsuccessreload');
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOG_OUT":
            localStorage.removeItem("userkey");
            return {
                user: null,
                isFetching: false,
                error: false
            }
        case "FOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    following: [...state.user.following, action.payload]
                }
            }
        case "UNFOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    following: state.user.following.filter((f)=>{
                        return f!==action.payload;
                    })
                }
            }
        default:
            return state;
    }
}

export default AuthReducer;