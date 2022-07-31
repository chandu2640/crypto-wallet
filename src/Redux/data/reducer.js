const inititalState = { data: null };
const fetchReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "FETCH_DATA": {
            return { ...state, data: action.payload };
        }
    }
    return state;
};
export default fetchReducer;
