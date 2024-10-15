
import Image from "next/image";
import image1 from"@/public/image1.png"
import image3 from"@/public/image3.jpg"
import image4 from "@/public/image4.jpg"
import image5 from "@/public/image5.jpg"

export default function AboutUs(){
  return(
    
<div>
<div className="section">
    <h1 style={{color:"black", fontSize:"60px",textAlign:"center",fontWeight:"600px",fontFamily:"fantasy",paddingTop:"20px" }}>“We're here to help you, <br />every step of the way”
    </h1>
   
   
    <p className="para" style={{fontSize:"25px", fontFamily:"TimesNewRoman",  textAlign:"center", marginRight:"40px",marginLeft:"40px",marginTop:"30px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quis in esse voluptatibus, aspernatur quia, voluptate ad itaque omnis facilis dolorum illo ea praesentium dolore incidunt quisquam reiciendis maiores tenetur?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque ex, repudiandae modi possimus veritatis officiis aut debitis, adipisci rerum corrupti, repellat consectetur omnis corporis a accusamus voluptate neque aliquid?
    </p>
    <a href="/services">
    <button className="btn">OUR SERVCES</button></a>
    <hr className="divider" />
  </div>
 

{/* <div className="parentContainer"> */}
{/* <h1 className="what">What We Do</h1> */}
 
  {/* card 1  */}
  {/* <div className="childContainer slide-bck-center">
    <div className="imageContainer">
    <Image className="blog-img" src={image3} alt="AI" ></Image>
    </div>
    <h2>Artificial Intelligence</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        
        <a href="/" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div> */}



{/* card 2

<div className="childContainer ">
    <div className="imageContainer">
    <Image className="blog-img" src={image4} alt="WEB 3" ></Image>
    </div>
    <h2>Web 3.0 and Metaverse</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div>


  {/* card 3 */}

  {/* <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image5} alt="CLOUD NATIVE"></Image>
    </div>
    <h2>Cloud Native </h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div> */}

  {/* card 4 */}
  {/* <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image6} alt="geonomics" ></Image>
    </div>
    <h2>Genomics</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div> */}

  {/* card 5 */}
  {/* <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image7} alt="network programmability" ></Image>
    </div>
    <h2>Network Programmability</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div> */}

  {/* card 6 */}
  {/* <div className="childContainer">
    <div className="imageContainer">
    <Image className="blog-img" src={image8} alt="ambient computing and IOT"></Image>
    </div>
    <h2>Ambient Computing</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        <a href="/" target="_blank">
        <button className="button">Read More</button>
        </a>
  </div> */} 


{/* </div> */}
<div className="section-1 " >
  <h1 style={{color:"black", fontSize:"50px",textAlign:"center" }}>Lorem Ipsum</h1>
  <p style={{color:"black", fontSize:"20px",textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Facere dolore quaerat dolorum  <br />rerum molestias debitis magni eos optio consequatur 
    alias impedit praesentium, explicabo <br /> sequi facilis sed sint, ut soluta neque.</p>
    <p style={{color:"black", fontSize:"20px",textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Facere dolore quaerat dolorum  <br />rerum molestias debitis magni eos optio consequatur 
    alias impedit praesentium, explicabo <br /> sequi facilis sed sint, ut soluta neque.</p>
 
    {/* <Image className="img" src={image} alt ="loading" width={560} height={40}></Image>
    <Image className="img1" src={image1} alt ="loading" width={580} height={20}></Image>
    
     */}
</div>
{/* <div className="images">
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
 */}

<div className="parent-container">
<h1 className="what-about">Services We Provide</h1>
 
  {/* card 1  */}
  <div className="child-container">
    <div className="image-container">
    <Image className="blog-img-about" src={image1} alt="Web Development" ></Image>
    </div>
    <h2> Web Development</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        
        {/* <a href="/" target="_blank">
        <button className="button">9/10</button> */}
        {/* </a> */}
  </div>



{/* card 2 */}

<div className="child-container ">
    <div className="image-container">
    <Image className="blog-img-about" src={image3 } alt="UI/UX Design" ></Image>
    </div>
    <h2>UI/UX Design</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        {/* <a href="/" target="_blank"> */}
        {/* <button className="button">7/10</button> */}
        {/* </a> */}
  </div>

{/* card 3 */}
  <div className="child-container ">
    <div className="image-container">
    <Image className="blog-img-about" src={image4} alt="Domain Hosting" ></Image>
    </div>
    <h2>Domain Hosting</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        {/* <a href="/" target="_blank"> */}
        {/* <button className="button">8/10</button> */}
        {/* </a> */}
  </div>

  {/* card 4 */}
  
  <div className="child-container ">
    <div className="image-container">
    <Image className="blog-img-about" src={image5} alt="IOT Computing"></Image>
    </div>
    <h2>IOT Computing</h2>
    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Distinctio deserunt voluptatem nihil suscipit saepe 
        dolore ducimus quam? Tenetur cumque explicabo voluptate 
        quam? Odio accusantium suscipit ab rem neque voluptatum?</p>
        {/* <a href="/" target="_blank"> */}
        {/* <button className="button">7.5/10</button> */}
        {/* </a> */}
  </div>



  </div>


</div>   


  );
}