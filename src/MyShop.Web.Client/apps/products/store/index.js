import { combineReducers } from 'redux';
import Products from './products.store';

const ApplicationReducer = combineReducers({
    Products,
    User: (
        s = {
            name: '',
            login: '',
        },
    ) => s,
});

export default ApplicationReducer;
