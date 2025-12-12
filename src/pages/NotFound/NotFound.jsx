export default function NotFound() {
    return (
        <>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1 className="error-code py-4">404</h1>
                    <h2 className="error-message">Oops! Page Not Found</h2>
                    <p className="error-description">
                        Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <a href="/" className="home-link">
                        Go to Homepage
                    </a>
                </div>
            </div>
        </>
    )
}
