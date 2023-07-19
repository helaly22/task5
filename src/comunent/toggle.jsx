import React, { useState } from "react";

export default function Toggle() {
  const [name, setName ] = useState(true);
  return (
    <>
      <button
      className={name?"btn btn-danger":"btn btn-info"}
        onClick={() => {
          setName(!name);
        }}
      >
        {name ? "show" : "hide"}
      </button>
      <br />
      <br />
      {name ? <b>Press the button</b>:<b>Hello</b>}
    </>
  );
}
