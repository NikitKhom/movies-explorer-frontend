function PreLoader({ message, isOnPage }) {
    return (
        <h2 className={`preloader ${isOnPage ? 'preloader_active' : ''}`}>{message}</h2>
    )
}

export default PreLoader;