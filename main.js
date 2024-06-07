
// import 'prebid.js/modules/adtelligentBidAdapter'
// import pbjs from 'prebid.js';


import {div_1_sizes, div_2_sizes, PREBID_TIMEOUT} from "./src/constant.js";
import {adUnitsF} from "./src/adUnits.js";
import {renderWinningBids} from "./src/renderWinningBids.js";


pbjs.que.push(() => {
    pbjs.addAdUnits(adUnitsF(div_1_sizes, div_2_sizes));
    pbjs.requestBids({
        bidsBackHandler: renderWinningBids,
        timeout: PREBID_TIMEOUT
    });
});

pbjs.processQueue();