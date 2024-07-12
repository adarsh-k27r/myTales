import React, { useLayoutEffect } from "react";
import Panel from "../components/Panel";

function Stories() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="flex w-[100%] ">
        <Panel />
      </div>
    </>
  );
}

export default Stories;
