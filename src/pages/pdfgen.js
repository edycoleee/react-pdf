import React, { useEffect } from "react";
import QRCode from "easyqrcodejs";
import logo from "./bsrelogo.jpg";

function PdfGen() {
  const code = React.createRef();
  useEffect(() => {
    new QRCode(code.current, {
      text: "https://github.com/ushelp/EasyQRCodeJS",
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H
      dotScale: 1, // Must be greater than 0, less than or equal to 1\. default is 1
      // ====== Logo

      logo: logo, // Relative address, relative to `easy.qrcode.min.js`
      //logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",
      logoWidth: 50, // width. default is automatic width
      logoHeight: 50, // height. default is automatic height
      logoBackgroundColor: "#fffff", // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
      logoBackgroundTransparent: true, // Whether use transparent image, default is false
    });
  }, [code]);

  return <div ref={code}></div>;
}

export default PdfGen;
