/*
* 1 - reducer take the action(what happened)
* 2 - copy of current state
* */

function posts(state = [], action)
{
    switch(action.type)
    {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i), //before update
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) // after update
            ];
        default :
            return state;
    }
}

export default posts;