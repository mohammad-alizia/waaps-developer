import "./index.css"
// import icon from './icon.png'
import { FaCoins } from 'react-icons/fa';




function Comp2() {
    return (
        

        <div className="comp2">
            <div className="header">
                <div className="race">Daily Race</div>
                <div className="secs">00:12:34</div>
            </div>
            <div className="center">
                <div className="total">Total Bounty</div>
                <div className="rank">Your rank</div>
            </div>
            <div className="footer">
            <div className="bountyNumber"> 
            <FaCoins className="icon"/>
                {/* <div className="hello">hello</div> */}    
                 100000
                 </div>
                <div className="bountyRank">1,021</div>
            </div>
        </div>
    
    
    );
}

export default Comp2;