import { snapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";
const Custombutton = ({type, title, handleClick, customStyles }) => {
const snap = snapshot(state)
    const generateStyle = type => {
        if (type ==="filled") {
            return{
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        }else if (type === "outline"){
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
              }
        }
    }
    return (
        <button className={`px-2 py-1.5 flex-1 rounded ${customStyles}`} onClick={handleClick} style={generateStyle(type)}>
            {title}
        </button>
    );
};

export default Custombutton;