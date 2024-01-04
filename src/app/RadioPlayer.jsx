"use client";

import React, { useState, useRef, useEffect } from "react";

const RadioPlayer = ({ mixcloudData }) => {
  useEffect(() => {
    // mixcloudData should be passed as a prop from server-side data fetching
    if (mixcloudData) {
      const div = document.createElement("div");
      div.innerHTML = mixcloudData.html;
      document.getElementById("mixcloud-container").appendChild(div);
    }
  }, [mixcloudData]);

  return (
    <div>
      <h2>Radio Player</h2>
      <div id="mixcloud-container">
        {/* Mixcloud content will be embedded here */}
      </div>
    </div>
  );
};

export default RadioPlayer;
