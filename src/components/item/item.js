import React, { Component } from 'react'

class Item extends Component {
    onDiscardClick = (e) => {
        e.preventDefault()
        const { id, onDeleteItem } = this.props
        onDeleteItem({ id })
    }

    render() {
        const { item } = this.props
        return <li><button onClick={this.onDiscardClick}>Discard</button> {item.item} {item.reason} </li>
    }

}

export default Item