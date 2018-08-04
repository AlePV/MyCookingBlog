// Store the USER.UID in redux store --> to keep track of whether the user is or is not logged in

export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.uid
            };
        
        case "LOGOUT":
            return {};

        default:
            return state;
    }
};

// Handles two things: 
// --> One for logging in
// --> One for logging out