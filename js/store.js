import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";


export default function configureStore(initialState) {

    // мы здесь настроили middleware, которое будет получать экшены до того, как их получит редьюсер
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(rootReducer);
}