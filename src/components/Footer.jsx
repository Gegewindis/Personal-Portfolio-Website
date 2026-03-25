import Elips from "./Elips.jsx"

function Footer() {

    return (
        <footer>
            <Elips
                width="500px"
                height="500px"
                top="-200px"
                left="-100px"
                backgroundColor="var(--color-wine-red)"
                zIndex="1"
            />

            <Elips
                width="300px"
                height="300px"
                top="-180px"
                left="1700px"
                backgroundColor="var(--color-wine-red)"
                zIndex="1"
            />

            <p>&copy; 2026 George</p>
        </footer>
    );
}

export default Footer