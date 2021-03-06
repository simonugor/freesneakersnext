import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <Link href="/"><button className="button">Homepage</button></Link>
            <Link href="about"><button className="button">About Us</button></Link>
            <a href="/"><button className="button">Homepage</button></a>
            <a href="/about"><button className="button">About Us</button></a>

            <Link href="blog"><a className="a-tag">Blog</a></Link>

            <style jsx>{`
                
                .button {
                    background-color: white;
                    margin-right: 2vw;
                    padding: none;
                    outline: none;
                    border: 2px solid black;
                    border-radius: 5px;
                }

                .a-tag {
                    background-color: white;
                    margin-right: 2vw;
                    padding: none;
                    outline: none;
                    border: 2px solid black;
                    border-radius: 5px;
                    text-decoration: none;
                    color: black;
                    font-size: 2vh;
                }
                
            `}</style>
        </div>
    )
}

export default Navbar