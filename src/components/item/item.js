import React, { Component } from 'react'


// const Item = ({ item }) => <li> <button>Discard</button> {item.item} {item.reason}</li>

class Item extends Component {
    render() {
        const { item } = this.props
        return <li><button>Discard</button> {item.item} {item.reason} </li>
    }

}

export default Item