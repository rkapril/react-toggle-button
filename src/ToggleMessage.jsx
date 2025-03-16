import { useState } from "react";

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "10px" }}>
      <button style={{ marginBottom: "10px" }} onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {/* Message is hidden but space is reserved */}
      <p style={{ visibility: show ? "visible" : "hidden", height: "20px" }}>
        Hello, welcome to React!
      </p>
    </div>
  );
}
