// import H12 from './h1.jsx'
import AmazonCard from './amzoncard.jsx'
import Amazon from './amazon.jsx'
import AmazonPrice from './amazonprice.jsx'
import './ama.css'

function Ama(){
    return (
        <>
        <div id="amazon-style">
            <div>
           {/* <H12/> */}
           <AmazonCard/>
           <Amazon/>
           <AmazonPrice/>
           </div>
        </div>
        </>
    )
}

export default Ama