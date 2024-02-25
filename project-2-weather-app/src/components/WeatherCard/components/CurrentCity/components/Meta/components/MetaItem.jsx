const MetaItem = ({
    url,
    alt,
    value,
    // className
}) => {
    return (
        <div className="text-center p-5">
            <div className="flex justify-center items-center">
                <img src={url} alt={alt} />
            </div>
            <span>{value}</span>
        </div>
    )
}

export default MetaItem;
