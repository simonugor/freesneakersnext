import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <Link href="/"><button className="button">Homepage</button></Link>
            <Link href="about"><button className="button">About Us</button></Link>

            <style jsx>{`
                
                .button {
                    background-color: white;
                    margin-right: 2vw;
                    padding: none;
                    outline: none;
                    border: 2px solid black;
                    border-radius: 5px;
                }
                
            `}</style>
        </div>
    )
}

export default Navbar