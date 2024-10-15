import Image from "next/image"
import image3 from"@/public/image3.jpg"
import image4 from "@/public/image4.jpg"
import image5 from "@/public/image5.jpg"
import image6 from "@/public/image6.jpg"
import image7 from "@/public/image7.jpg"
import image8 from "@/public/image8.jpg"
export default function Gallery(){
    return(
    <div>
        <h1 className="gallery-h1" style={{paddingTop:"120px",marginBottom:"50px",textAlign:"center",color:"black",fontWeight:"400"}}>This is the Gallery</h1>
        <div className="images">
<div className="img-container">
  <Image className="imgs" src={image3} alt="AI" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image4} alt="WEB 3" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image5} alt="CLOUD NATIVE"></Image>
  </div>
</div>

<div className="images">
<div className="img-container">
  <Image className="imgs" src={image6} alt="geonomics" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image7} alt="network programmability" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image8} alt="ambient computing and IOT"></Image>
  </div>
</div>




<div className="images">
<div className="img-container">
  <Image className="imgs" src={image3} alt="AI" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image4} alt="WEB 3" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image5} alt="CLOUD NATIVE"></Image>
  </div>
</div>



<div className="images">
<div className="img-container">
  <Image className="imgs" src={image6} alt="geonomics" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image7} alt="network programmability" ></Image>
  </div>
  <div className="img-container">
  <Image className="imgs" src={image8} alt="ambient computing and IOT"></Image>
  </div>
</div>
    </div>
      
    )
}