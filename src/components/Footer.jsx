import Elipse from "./Elipse.jsx"

function Footer() {

    return (
        <footer>
            <Elipse
                width="500px"
                height="500px"
                top="-200px"
                left="-100px"
                backgroundColor="var(--color-wine-red)"
                zIndex="1"
            />

            <Elipse
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