import React from "react";

function Content() {
  const handelNameChange = () => {
    const names = ["bob", "fred", "james"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      {" "}
      <p>Hello {handelNameChange()}</p>
    </main>
  );
}

export default Content;
