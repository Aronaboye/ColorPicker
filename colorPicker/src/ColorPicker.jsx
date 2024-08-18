import { useState } from "react"
import "./colorPicker.css"

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    const handleChange = (e) =>{
        setColor(e.target.value)
    }
  return (

    <div className="colorPickerContainer">
        <h1>Color Picker</h1>
        <div className="colorContainer" 
        style={{backgroundColor:color}}>
            couleur Sélectionnée: {color}
        </div>
        <label>Veuillez Selectionner une couleur</label>
        <input type="color" value={color} onChange={handleChange} />
    </div>
  )
}
export default ColorPicker