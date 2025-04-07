"use client";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

import InterviewScreens from "../InterviewScreens";

function AgoraClient() {
  const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  return (
    <AgoraRTCProvider client={client}>
      <InterviewScreens />
    </AgoraRTCProvider>
  );
}

export default AgoraClient;
