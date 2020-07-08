const initialState = {
    testNumber: 0,
};

export default function test(state = initialState, action) {
    switch(action.type) {
        case "TEST_STORE_PAYLOAD": {
            return {
                testNumber: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
