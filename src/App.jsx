import { useState } from 'react'
import './App.css'
import Drum from './Drum'
const audioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
}, {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
}, {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
}, {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
}, {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
}, {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
}, {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
}, {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
}, {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}
]
function App() {
  const [count, setCount] = useState(0)
  const playSound = (event) => {
      const x = audioClips.find((clip) => clip.keyTrigger == (event.key.toUpperCase()))
      if(!x) return
      document.getElementById(x.keyTrigger).play();
      console.log(x.id);
      document.getElementById("display").innerHTML = x.id;
  }
  return (
     <div className='flex flex-col justify-center items-center h-[100vh]'>
     <h1 className='text-[40px] p-4 font-bold text-[#475569]'>Drum - Machine</h1>
     <div className='container flex justify-center items-center p-4 bg-[#fdba74] rounded-md border-2 border-opacity-[70%] border-solid border-[#1f2937] w-[35%]'>
      <div id="drum-machine" className='drum-pad-elements grid grid-cols-3 gap-2' onKeyDown={playSound}>
           {audioClips.map((clip) => (
            <Drum audioClips={clip}/>
           ))}
      </div>
      <div id="display" className='text-[#404040] text-[20px] font-semibold border-2 border-solid border-[#374151] ms-6 w-[150px] h-[40px] bg-[#fcd34d] rounded-lg text-center p-1'></div>
      </div>
     </div>
  )
}

export default App
