import Procduct from "./Product.jsx";


function ProductTab(){
    // let feature1=[<li>"Hi-Tech"</li>, <li>"Durable"</li>, <li>"Reliable"</li>]
    let feature1=["Hi-Tech","Durable","Reliable"];
    return(
        <> 
        <Procduct Title="Phone" Price="30k" features={feature1}/>
        {/* <Procduct Title="Phone" Price="30k" features={["Hi-Tech","Durable","Reliable"]}/> */}
        <Procduct Title="Laptop" Price="40k"/>
        <Procduct Title="Pen" Price={25000}/>
        </>
    )
}

export default ProductTab;