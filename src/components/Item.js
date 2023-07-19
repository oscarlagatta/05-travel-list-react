export default function Item({item, onDeleteItem, onToggleItem}) {
    const {description, packed, quantity} = item;
    return (
        <li>
            <input type="checkbox" value={packed} onChange={() => onToggleItem(item.id)}/>
            <span style={packed ? {textDecoration: 'line-through'} : {}}>
                 {quantity} {description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>

        </li>
    )
}
