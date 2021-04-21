import ContainerUI from '../../compontents/Count'

import { connect } from 'react-redux'
import { increment, decrement, asyncAction } from '../../redux/count_action'

const mapStateToProps = state =>  ({ count: state})


// const mapDispatchToProps = (dispatch) => {
//     return {
//         addNumber: (number: number) => {
//             dispatch(increment(number))
//         },
//         deNumber: (number: number) => {
//             dispatch(decrement(number))
//         },
//         asyncNumber: (number: number, time) => {
//              dispatch(asyncAction(number, time))
//         },
//     }
// }

export default connect(mapStateToProps, {
    addNumber: increment,
    deNumber: decrement,
    asyncNumber: asyncAction,
})(ContainerUI)