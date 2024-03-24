import React from 'react'
const Drum = (props) => {

  const playSound = (audioClips) => {
       const x = document.getElementById(audioClips.keyTrigger).play();
       document.getElementById("display").innerHTML = audioClips.id;
  } 
    
  return (
    <button className='drum-pad text-[#ef4444] bg-[#fcd34d] text-[25px] p-6 border-2 border-solid border-[#1f2937] rounded-lg' id={`drum-${props.audioClips.keyTrigger}`} onClick={() => playSound(props.audioClips)}>
        <audio className='clip' id={`${props.audioClips.keyTrigger}`} src={`${props.audioClips.url}`}></audio> 
        {props.audioClips.keyTrigger}
    </button>
  )
}

export default Drum