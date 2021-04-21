import ContainerUI from '../../compontents/Count'

import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, asyncAction } from '../../redux/count_action'

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (number: number) => {
            dispatch(createIncrementAction(number))
        },
        deNumber: (number: number) => {
            dispatch(createDecrementAction(number))
        },
        asyncNumber: (number: number, time) => {
             dispatch(asyncAction(number, time))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerUI)