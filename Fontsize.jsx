import React, { useState } from 'react'

function Fontsize() {
    const [fontsize,setFontsize]=useState(16);
    const Increasefont =() =>setFontsize(fontsize + 2);
    const Decreasefont =() =>setFontsize(fontsize - 2);

  return (
    <div>
        <p style={{ fontSize: `${fontsize}px` }}>Mintuu🧸</p>
        <button onClick={Increasefont}>➕</button>
        <button onClick={Decreasefont}>➖</button>
        <p>Current font size: {fontsize}px</p>
    </div>
  )
}

export default Fontsize