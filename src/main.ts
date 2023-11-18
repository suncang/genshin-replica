import "@alphardex/aqua.css/dist/aqua.min.css";
import "./style.css";

import { adaptMobileDOM } from "kokomi.js";

import Experience from "./Experience/Experience";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
<div id="sketch"></div>
<div class="loader-screen fixed z-5 top-0 left-0 w-full h-full bg-white transition-opacity"
  style="transition-duration: 1.5s;">
  <div class="absolute hv-center">
    <div class="flex flex-col items-center space-y-6">
      <img src="./Genshin/Genshin.png" class="title block" style="width: 45vmin;" alt="" />
      <progress class="loader-progress progress-bar" value="0" max="100"></progress>
    </div>
  </div>
</div>
<div class="menu fixed z-4 top-0 left-0 w-full h-full select-none hidden">
  <div class="menu-content transition-opacity duration-1000">
    <div class="absolute" style="bottom: 16%;right: 4%;">
      <div class="flex flex-col items-center space-y-3">
        <div class="menu-btn btn-click-me" style="width: 7vmin;height: 7vmin;">
          <img src="./Genshin/ClickMe.png" class="w-full h-full block" alt="" />
        </div>
      </div>
    </div>

  </div>
</div>
<div class="enter fixed z-4 top-0 left-0 w-full h-full transition-opacity duration-500 select-none hidden">
  <div class="enter-bg absolute" style="bottom: 4vmin;left: 2%;width: 96%;">
    <div class="flex-center"
      style="height: 4.5vmin;background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.482) 50%, rgba(0, 0, 0, 0) 100%);">
      <img src="./Genshin/Entry.png" class="enter-entry block" style="height: 2.5vmin;" alt="" />
    </div>
  </div>
</div>
<div class="loading-element fixed z-4 top-0 left-0 w-full h-full bg-white select-none overflow-hidden hollow">
  <div class="absolute hv-center">
    <div class="loading-element-wrapper">
      <img src="./Genshin/Elements.png" class="loading-element-img" alt="" />
    </div>
  </div>
</div>
`;

const app = document.querySelector("#app")! as HTMLElement;

adaptMobileDOM(app);
window.addEventListener("resize", () => {
    adaptMobileDOM(app);
});

new Experience("#sketch");
