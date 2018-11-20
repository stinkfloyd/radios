import React, { Component } from 'react'

class AddItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: '',
            reason: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { item, reason } = this.state
        this.props.onAddItem({ item, reason })
    }

    onItemChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            item: e.target.value
        })
    }

    onReasonChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            reason: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Add an item!</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Item: </label>
                        <input value={this.state.item} onChange={this.onItemChange} />
                    </div>
                    <div>
                        <label>Reason: </label>
                        <input value={this.state.reason} onChange={this.onReasonChange} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div >
        )
    }
}

export default AddItem