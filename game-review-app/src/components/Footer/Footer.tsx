import "./footer.css";

interface FooterProp {
    title:string
}

const Footer = (props:FooterProp) => {

    const title = props.title

    return (
        <div className="footerStyle">
            {title.trim() === ""? <br/> : <h1>{title}</h1>}
        </div>
    )
}

export default Footer;