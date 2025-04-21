import "./gameList.css";

interface PlatformProp {
    platforms:Platform[]
}

const PlatformTags = (props:PlatformProp) => {

    const platforms = props.platforms.map(platform =>
        <div key={platform.platformId} className="platformTag">{platform.name}</div>
    )

    return (
        <>
            <div className="platformContainer">
                {platforms}
            </div>
        </>
    )
}

export default PlatformTags;