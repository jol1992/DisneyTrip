const ListItem =({desc})=>{
    return(
        <li>
            <input type={'checkbox'}/>
            <p>{desc}</p>
        </li>
    )
}

export default ListItem