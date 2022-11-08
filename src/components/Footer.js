
export default function Footer () {

    return (
        <div>
            <footer className="footer py-3 bg-dark text-center">
                <div className="container">
                    <span className="text-muted">Secrets App &copy; {new Date().getFullYear()}</span>
                </div>
            </footer>
        </div>
    )
};