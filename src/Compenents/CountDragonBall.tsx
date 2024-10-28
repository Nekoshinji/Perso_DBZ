import { useState } from "react"

function CountDragonBall(){
    const drabonBalls = [
        "../../Images/Dragon Ball/1_etoile.png",
        "../../Images/Dragon Ball/2_etoile.png",
        "../../Images/Dragon Ball/3_etoiles.png",
        "../../Images/Dragon Ball/4_etoiles.png",
        "../../Images/Dragon Ball/5_etoiles.png",
        "../../Images/Dragon Ball/6_etoiles.png",
        "../../Images/Dragon Ball/7_etoiles.png",
    ]
    const [countBalls, setCountBalls] = useState(0)

    return (
        <div id="collect-and-summon-shenron">
            <div id="collect-dragon-ball">
                <h2>Collectez les Dragon Ball</h2>
                <button id="dragon-ball-button" type="button" onClick={()=>{
                    if(countBalls < drabonBalls.length-1){
                        setCountBalls(countBalls + 1)
                    }
                }}>
                    <img id="dragon-ball" src={drabonBalls[countBalls]} alt="" />
                </button>
                
            </div>
            {countBalls === 6 && (
                    <div id="shenron-summon">
                        <h3>Shenron a été invoqué</h3>
                        <img id="shenron" src="../../Images/Dragon Ball/Shenron.png" alt="" />
                    </div>
                )}
        </div>
    )
}

export default CountDragonBall