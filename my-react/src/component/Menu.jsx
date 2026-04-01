const Menu = ({className}) =>{
    return (
        <nav>
            <ul className={className ?? ''}>
                <li>
                    <a href="" style={{color: "#f00"}}>Home</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
                <li>
                    <a href="">Privacy Policy</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;