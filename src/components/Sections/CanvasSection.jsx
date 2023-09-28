import { useCallback, useContext, useEffect, useState } from "react";
import { RenderCanvas } from "../Canvases/RenderCanvas"
import { LoadingBar } from "../Loading/LoadingBar"
import style from "./styles/canvasSectionStyle.module.css"
import { IllustrationPanel, Panel } from "../Panels/Panel";
import { CanvasContext, CanvasProvider } from "../../contexts/Canvas/CanvasContext";

export function CanvasSection (){

    const [isLoading, setIsLoading] = useState(true);
    const [selectedpinPointIndex, setSelectedPinPointIndex] = useState();
    // useEffect(()=>{
    //     console.log("!!!selectedpinPointIndex", selectedpinPointIndex)
    // }, [selectedpinPointIndex])
    
    // const handlePinPointSelected = useCallback(()=>{

    // }, [])
    const { pinPointIndex, selectPinPointIndex, clearPinPointIndex} = useContext(CanvasContext);
    return (
        <div className={style.containerDiv}>
            {isLoading &&(
                <div className={style.loadingDiv}>
                    <LoadingBar/>
                </div>)
            }
            
            <div className={style.canvasDiv}>
                <RenderCanvas onLoaded={()=>setIsLoading(false)}/>
            </div>
            
            
            {!isLoading &&  pinPointIndex!==undefined && <div className={style.illustrationDiv} onClick={()=>{
                console.log("!!!click")
                clearPinPointIndex()}}>
                <Panel>
                    <h2>{pinPointIndex}</h2>
                    <p>Laborum ea culpa in id.Sit voluptate reprehenderit nisi sint. Anim mollit culpa veniam excepteur elit cupidatat Lorem ea incididunt sit ipsum. Commodo adipisicing officia deserunt incididunt amet. </p>
                </Panel>
            </div>
            }
        </div>
    );
}