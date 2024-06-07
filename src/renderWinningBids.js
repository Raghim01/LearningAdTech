// export function renderWinningBids() {
//     const winningBids = pbjs.getHighestCpmBids();
//
//     if (!winningBids || winningBids.length === 0) {
//         console.warn("No winning bids found.");
//         return;
//     }
//
//     winningBids.forEach(function(bid) {
//         const adUnitCode = bid.adUnitCode;
//
//         if (!adUnitCode) {
//             console.warn("Bid does not have an adUnitCode.");
//             return;
//         }
//
//         const adContainer = document.getElementById(adUnitCode);
//         if (!adContainer) {
//             console.warn(`Ad container with ID ${adUnitCode} not found.`);
//             return;
//         }
//
//
//         console.log(`Rendering ad for ad unit code: ${adUnitCode}`);
//
//         pbjs.renderAd(document, adUnitCode);
//     });
// }




export function renderWinningBids() {
    const winningBids = pbjs.getHighestCpmBids();

    if (!winningBids || winningBids.length === 0) {
        console.warn("No winning bids found.");
        return;
    }
    winningBids.forEach((bid) => {
        const adUnitCode = bid.adUnitCode;

        if (!adUnitCode) {
            console.warn("Bid does not have an adUnitCode.");
            return;
        }

        const adContainer = document.getElementById(adUnitCode);
        if (!adContainer) {
            console.warn(`Ad container with ID ${adUnitCode} not found.`);
            return;
        }

        adContainer.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.width = bid.width + 'px';
        iframe.height = bid.height + 'px';
        iframe.style.overflow = 'hidden';
        iframe.style.border = '0';
        iframe.scrolling = 'no';

        if (!bid.ad) {
            console.warn(`No ad content found for ad unit code ${adUnitCode}.`);
            return;
        }
        iframe.srcdoc = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Ad</title>
            </head>
            <body>${bid.ad}</body>
            </html>
        `;
        adContainer.appendChild(iframe);
    });
}