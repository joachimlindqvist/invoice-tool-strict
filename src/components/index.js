import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import PartOne from './part-one';
import PartTwo from './part-two';
import Modal from './modal';

import { refreshCustomers } from '../reducers/customers/customers-actions';

export class Index extends React.Component {

    componentWillMount () {
        this.props.refreshCustomers();
    }

    render () {
        return (
            <div>
                <Header />
                <PartOne />
                <PartTwo />
                <Modal />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshCustomers: () => dispatch(refreshCustomers())
    }
}

export default connect(null, mapDispatchToProps)(Index);