"use client";

import React, { useState } from "react";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h2>Radio Player</h2>
      <iframe
        width="100%"
        height="60"
        src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fgifino%2Fdfg%2F"
      ></iframe>
    </div>
  );
};

export default RadioPlayer;
