// //Old style

import { showMessage } from "./codesplittingdemoapp.js";

document.getElementById("button").addEventListener("click", () => {
  showMessage();
});

// async imports as of ES2020

// document.getElementById("button").addEventListener("click", async () => {
//   const { showMessage } = await import("./codesplittingdemoapp.js");
//   showMessage();
// });
