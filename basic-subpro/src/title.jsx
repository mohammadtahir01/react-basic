import './allbox.css'
import Price from './price.jsx'

function Title({title,idx}){
    let discription = [
        "800 DPI",
        "Intutive Touch Surface",
        "Design for ipad pro",
        "Wireless mouse 2.4gh"];
    let discription1 = [
        "5 programmable buttons",
        "Design for ipad mobile",
        "intutive Touch Surface",
        "Optical Oriention"];    
    let oldPrices = [
        "12,495",
        "11,900",
        "15,99",
        "599"];
    let newPrices = [
        "8,999",
        "91,99",
        "899",
        "278"];        
    return(
        <div id='title'>
            <h4>{title}</h4>
            <p>{discription[idx]}</p>
            <p>{discription1[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Title