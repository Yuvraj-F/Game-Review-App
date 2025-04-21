import "./header.css";
import "../SearchBar"
import SearchBar from "../SearchBar";

interface HeaderProp {
    title:string
}

const Header = (props:HeaderProp) => {

    const title = props.title

    return (
        <div className="headerStyle">
            <SearchBar />
            <h1>{title}</h1>
        </div>
    )
}

export default Header;