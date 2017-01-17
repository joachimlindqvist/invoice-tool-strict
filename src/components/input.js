import React from 'react';

export default class Input extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            value: nextProps.value
        });
    }

    _onChange (e) {
        this.setState({
            value: e.target.value
        });
        
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    _onBlur (e) {
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    render () {
        return <input value={this.state.value} onChange={this._onChange.bind(this)} onBlur={this._onBlur.bind(this)} />
    }
}