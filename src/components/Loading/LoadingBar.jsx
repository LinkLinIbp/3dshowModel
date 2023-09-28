import style from "./styles/loadingBarStyle.module.css"
export function LoadingBar(){
    return <div className={style.containerDiv}>
        <div className={style.loadingDiv}></div>
    </div>
}