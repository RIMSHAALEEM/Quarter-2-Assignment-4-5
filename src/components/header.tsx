import Link from "next/link"
import logo from "../public/logo.png"
import Image from "next/image"

export default function Header(){
    return(
        <div>
            {/* <div className="lg">
               
            <Image className="logo" src={logo} alt="network programmability" width="10" height="30" ></Image>
            </div> */}
            <div className="nav-bar">
                {/* <h1>CODING:NINJA</h1> */}
                {/* <Image className="logo" src={logo} alt="network programmability"  ></Image> */}
    
                <ul className="nav-buttons">
                   <Link href={"/" } target="_top"><li>Home</li></Link> 
                    <Link href={"/about-us"} target="_top"><li>About</li></Link>
                   <Link href={"/" }target="_top"><li>Blog</li></Link> 
                    <Link href={"/services"} target="_top"><li>Services</li></Link>
                    <Link href={"/gallery"} target="_top"><li>Gallery</li></Link>
                    <Link href={"/contact-us"} target="_top"><li>Contact</li></Link>
                    <a href="/contact-us">
                    <button className="button-query">Ask Queries</button></a>
                   
                </ul>
                
                
            </div>
        </div>
    )
}