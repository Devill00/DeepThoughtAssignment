import React from 'react'
import ReactPlayer from "react-player/youtube";

// https://www.youtube.com/embed/TiMRwri1xJ8
export default function Videocomponent({url}) {
  return (
    <div>
          <ReactPlayer
                    url={"https://www.youtube.com/embed/TiMRwri1xJ8"}
                    controls
                    width="100%"
                    height="291px"
                />
    </div>
  )
}
