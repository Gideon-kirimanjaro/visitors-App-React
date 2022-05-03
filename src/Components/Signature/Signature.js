import React, { useRef, useState } from "react";
import "./signature.css";
//import SignatureCanvas from "react-signature-canvas";
import SignaturePad from "react-signature-canvas";

const Signature = (props) => {
  const sigPad = useRef({});
  const passedData = props.passedData;
  console.log("The sig Pad", sigPad);

  return (
    <div id="pad">
      <h5>Sign here</h5>
      <SignaturePad
        borderColor="red"
        ref={sigPad}
        canvasProps={{ width: 200, height: 100, className: "sigCanvas" }}
        penColor="green"
        clearOnResize
      ></SignaturePad>
    </div>
  );
};
export default Signature;
