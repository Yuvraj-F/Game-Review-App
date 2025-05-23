import "./gameList.css";

interface PlatformProp {
    platforms:Platform[]
}

const PlatformTagList = (props:PlatformProp) => {

    const platforms = props.platforms.map(platform =>
        <li key={platform.platformId} className="platformTag">{platform.name}</li>
    )

    return (
        <>
            <ul className="platformContainer">
                {platforms}
            </ul>
        </>
    )
}

export default PlatformTagList;