import React from 'react';
import Item from '../item/item'

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map((item, idx) => <Item key={idx} item={item} />)}
        </ul>
    )
}

export default ItemList