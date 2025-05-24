import {Logout} from "../logout"
import {Link} from 'react-router-dom';
import "./header.css";

interface HeaderProp {
    showError: (msg:string) => void
}

const Header = (props:HeaderProp) => {

    const showError = props.showError

    return (
        <>
            <div className="headerStyle">
                <div>
                    <Link to="/search" className="linkStyle">Search</Link>
                    <Logout showError={showError}/>
                </div>

            </div>
            <div className="lineSeparator"></div>
        </>

    )
}

export default Header;