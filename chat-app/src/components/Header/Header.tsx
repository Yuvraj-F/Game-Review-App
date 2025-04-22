import "./header.css";

interface HeaderProp {
    title:string
}

const Header = (props:HeaderProp) => {

    const title = props.title

    return (
        <div className="headerStyle">
            {title.trim() === ""? "" : <h1>{title}</h1>}
        </div>
    )
}

export default Header;