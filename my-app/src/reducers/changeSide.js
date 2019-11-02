import {type} from '../actions'

const initialState = {
        menuName:['Main']
};

export default (state = initialState, action) => {
        switch(action.type){
                case type.SWITCH_MENU:
                        return {
                                menuName: action.menuName
                        };
                default:
                        return state;
        }
}