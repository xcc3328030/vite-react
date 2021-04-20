

let initState = 0
export default function countReducer (preState = initState, action) {

    const { data, type } = action
    switch (type) {
        case 'add':
            return preState + data
        case 'deAdd':
            return preState - data
        case 'addIfOadd':
            return preState + data
        case 'addIfAsync':
            return preState + data
        default:
            return preState
    }

}
