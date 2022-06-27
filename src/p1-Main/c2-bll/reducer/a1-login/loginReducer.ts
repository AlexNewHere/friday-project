import {projectAPI} from 'p1-Main/c3-dal';
import {Dispatch} from 'redux';

export type ActionsType = ReturnType<typeof LoginAC>

type LoginType = {
    id: string
}
const initialState: LoginType = {
    id: ''
};

export const loginReducer = (state: LoginType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'LOGIN': {
            return state
        }
        default:
            return state
    }
}

export const LoginAC = () => {
    return {type: 'LOGIN', payload: {}} as const
}


export const thunkCreator = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        projectAPI.get()
            .then(res => {
                console.log(res)
                dispatch(LoginAC())
            })
    }
};




