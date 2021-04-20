
import { INCREMENT, DECREMENT } from './constant';


let initState = 0
export default function countReducer(preState = initState, action) {

    const { data, type } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }

}
