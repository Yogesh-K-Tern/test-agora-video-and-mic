"use client";
import {
  LocalUser,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
} from "agora-rtc-react";
import React, { useState } from "react";

function CamPreview() {
  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  usePublish([localMicrophoneTrack, localCameraTrack]);

  return (
    <LocalUser
      //   audioTrack={localMicrophoneTrack}
      cameraOn={cameraOn}
      micOn={micOn}
      videoTrack={localCameraTrack}
      style={{ width: "50%", height: 300 }}
    />
  );
}

export default CamPreview;
