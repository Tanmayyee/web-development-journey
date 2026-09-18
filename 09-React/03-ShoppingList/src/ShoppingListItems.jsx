export default function ShoppingListItems({item,quantity,completed}){
    const styles={color:completed?"green":"red",textDecoration:completed?"line-through":"none"}
   return(
    <li style={styles}>
        {item}-{quantity}
        </li>
   )
}