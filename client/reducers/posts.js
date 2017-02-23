/*
* 1 - reducer take the action(what happened)
* 2 - copy of current state
* */

function posts(state = [], action)
{
    console.log(state, action);
    return state;
}

export default posts;