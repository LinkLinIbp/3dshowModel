import style from "./styles/panelStyle.module.css"
export function Panel(props){
    return <div className={style.containerDiv}>
        <div className={style.insetDiv}>
            {props.children}
        </div>
        
    </div>
}