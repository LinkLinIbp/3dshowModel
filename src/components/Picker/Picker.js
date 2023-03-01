import { HexColorPicker } from "react-colorful"
import { useSnapshot } from "valtio"
import state from "../../state"

export const Picker = () => {
  const snap = useSnapshot(state);

   const  changeColor = (color)=>{
    state.items[snap.current] = color
   }
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker
        className='picker'
        color={snap.items[snap.current]}
        onChange={changeColor}
      />
      <h4>{snap.current}</h4>
    </div>
  );
};
