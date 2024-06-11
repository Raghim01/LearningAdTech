import { createIframeProcess } from "./renderWinningBids.js";

export const modifyFrame = (next, iframe) => {
  iframe.style.border = "2px solid red";
  next(iframe);
};

createIframeProcess.after(modifyFrame);
// export function addRedFrameToElement(iframe){
//     iframe.style.border = '2px solid red';
//     return iframe
// }
