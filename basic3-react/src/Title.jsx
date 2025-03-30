import './Title.css'

function Title({project, price}){
    let discount = price > 10000 ;
    // let sty = {backgroundColor: "yellow"}
    // let sty = {backgroundColor: price > 10000 ? "green" : ""}
    let sty = {backgroundColor: discount ? "green" : ""}
        return(
            <div id="title" style={sty}>
                <h4>{project}</h4>
                 <p>{price}</p>
                 {/* <p>{price > 10000 ? <p>Discount of 5%</p> : null}</p> */}
                 {/* <p>{price > 10000 ? <p>Discount of 5%</p> : <a href=''>No Discount</a>}</p> */}
                 {/* <p>{price > 10000 && <p>Discount of 5%</p>}</p> */}
                 <p>{discount && <p>Discount of 5%</p>}</p>
            </div>
        )
}
export default Title;

// this is the second normal way to apply the discount in the price component


// function Title({project, price}){
//     let discount = price > 10000 ? "5%" : "";
//         return(
//             <div id="title">
//                 <h4>{project}</h4>
//                  <p>{price}</p>
//                  <p>Discount of : {discount}</p>
//             </div>
//         )
// }
// export default Title;


// Basic way to apply the discount in the price component


// function Title({project, price}){
//     // let discount = 10000;
//     if(price >= 10000){
//         return(
//             <div id="title">
//                 <h4>{project}</h4>
//                  <p>{price}</p>
//                  <p>discount of : 5%</p>
//             </div>
//         )
//     }else{
//         return(
//             <div id="title">
//                 <h4>{project}</h4>
//                  <p>{price}</p>
//             </div>
//         )
//     }
    
// }
// export default Title;