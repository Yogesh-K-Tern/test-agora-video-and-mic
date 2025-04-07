"use client";
import { useJoin } from "agora-rtc-react";
import React, { useState } from "react";
import Preview from "./Preview";

function InterviewScreens() {
  const [appId, setAppId] = useState("c63f7aa562d0405f8b3854d864580e7a");
  const [channel, setChannel] = useState("test");
  const [token, setToken] = useState(
    "007eJxTYNCIDeYTtnmQGKLDpviTbaHT+oj7C7xOGcy3s3hbeOX+lUkKDMlmxmnmiYmmZkYpBiYGpmkWScYWpiYpFmYmphYGqeaJb3o+pzcEMjKwfWpkYIRCEJ+FoSS1uISBAQDExh62"
  );
  const [calling, setCalling] = useState(false);

  useJoin(
    { appid: appId, channel: channel, token: token ? token : null },
    calling
  );

  return <Preview />;
}

export default InterviewScreens;
