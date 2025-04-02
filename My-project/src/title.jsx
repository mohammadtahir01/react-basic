import './title.css'
import Price from './price.jsx'

export default function Title({title,idx}){
    let discription = ["Tahir","Rahul","Aman"]
    let price = ["299","499","599"]
    let price2 = ["199","399","499"]
    return (
        <div id="border">
        <h3>{title}</h3>
        <p>{discription[idx]}</p>
        <Price oldprice={price[idx]} newprice={price2[idx]}/>
        </div>

    )
}