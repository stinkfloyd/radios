import React from 'react';
import Item from '../item/item'

const ItemList = ({ items, onDeleteItem }) => {
    return (
        <ul>
            {items.map((item, idx) => <Item key={idx} item={item} id={item.id} onDeleteItem={onDeleteItem} />)}
        </ul>
    )
}

export default ItemList