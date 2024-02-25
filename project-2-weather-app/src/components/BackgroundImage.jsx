const BackgroundImage = ({
    url,
    alt = "background-image",
    className,
    children,
}) => {
    return (
        <div>
            <img src={url} alt={alt} className={className} />
            {children}
        </div>
    )
}

export default BackgroundImage;
