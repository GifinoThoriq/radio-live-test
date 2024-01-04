import React from "react";
import RadioPlayer from "./RadioPlayer";

const getMix = async () => {
  const mixcloudUrl = "https://www.mixcloud.com/gifino/testshow/";
  const response = await fetch(
    `https://www.mixcloud.com/oembed/?url=${encodeURIComponent(
      mixcloudUrl
    )}&format=json`
  );
  const mixcloudData = await response.json();
  return mixcloudData;
};

export default async function Home() {
  const mixCloud = await getMix();

  return (
    <main>
      Radio Playground
      <RadioPlayer mixcloudData={mixCloud} />
    </main>
  );
}
