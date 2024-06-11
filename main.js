// import 'prebid.js/modules/adtelligentBidAdapter'
// import pbjs from 'prebid.js';

import "virtual:plugins";
import { div_1_sizes, div_2_sizes, PREBID_TIMEOUT } from "/src/constant.js";
import { adUnitsF } from "/src/adUnits.js";
import { renderWinningBids } from "/src/renderWinningBids.js";
import "./src/queue.js";
import { showConsole } from "./src/eventConsole.js";

// if(import.meta.env.VITE_ADD_RED_FRAME === '1'){
//      import('/src/debugHighlight.js')
// }
// pbjs.que.push(() => {
//   pbjs.addAdUnits(adUnitsF(div_1_sizes, div_2_sizes));
//   pbjs.requestBids({
//     bidsBackHandler: renderWinningBids,
//     timeout: PREBID_TIMEOUT,
//   });
// });

export function auctionForPlacement(elementId) {
  pbjs.que.push(() => {
    pbjs.addAdUnits(adUnitsF(elementId, div_1_sizes, div_2_sizes));
    pbjs.requestBids({
      bidsBackHandler: renderWinningBids,
      timeout: PREBID_TIMEOUT,
    });
  });
}

window.wrapper = window.wrapper || {};
wrapper.cmd = wrapper.cmd || [];
wrapper.auctionForPlacement = auctionForPlacement;
wrapper.showConsole = showConsole;

// pbjs.processQueue();
