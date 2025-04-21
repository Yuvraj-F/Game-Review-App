import "./gameList.css";

interface PlatformProp {
    platforms:Platform[]
}

const PlatformTagList = (props:PlatformProp) => {

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

export default PlatformTagList;