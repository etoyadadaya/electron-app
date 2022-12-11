import { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

window.electron.ipcRenderer.once("ipc-example", (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
