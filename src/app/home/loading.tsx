import React from "react";

interface Props {
  message?: string;
}

// const containerStyle = {
//   minWidth: "100vw",
//   minHeight: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

function Loading({ message }: Props) {
  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen">
      <div className="flex flex-col gap-4">
        <img className="loader" src="/assets/tern-black-logo.svg" />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Loading;
