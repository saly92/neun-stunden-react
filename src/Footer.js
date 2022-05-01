export const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p>
                Copyright &copy; {today.getFullYear()}
            </p>
            <p>min 33.50</p>
        </footer>
    )
}