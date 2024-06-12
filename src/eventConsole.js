import {
  closeConsoleButtonStyle,
  consoleElementStyle,
  headerRowStyle,
  rowStyle,
  tableStyle,
} from "./constant";

const eventLogs = [];

export function logEvent(eventType, args) {
  const eventLog = {
    time: new Date(),
    placement: args.adUnitCode || args.adUnitCodes || "N/A",
    eventType,
    description: eventType,
    arguments: JSON.stringify({
      bidderCode: args.bidderCode || "N/A",
      statusMessage: args.statusMessage || "N/A",
      adId: args.adId || "N/A",
      requestId: args.requestId || "N/A",
      transactionId: args.transactionId || "N/A",
      adUnitId: args.adUnitId || "N/A",
      mediaType: args.mediaType || "N/A",
    }),
    // args: JSON.stringify(args),
  };
  if (eventLog.placement !== "N/A") {
    eventLogs.push(eventLog);
  }
  renderConsole();
}

export function renderConsole() {
  let consoleElement = document.getElementById("event-console");

  if (!consoleElement) {
    consoleElement = document.createElement("div");
    consoleElement.style = consoleElementStyle;
    document.body.appendChild(consoleElement);
  }

  const closeConsoleButton = document.createElement("button");
  closeConsoleButton.style = closeConsoleButtonStyle;
  closeConsoleButton.innerText = "X";
  closeConsoleButton.onclick = () => {
    consoleElement.style.display = "none";
  };

  const table = document.createElement("table");
  table.style = tableStyle;

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = headerRowStyle;

  table.appendChild(headerRow);

  eventLogs.forEach((log, index) => {
    const row = document.createElement("tr");
    row.style.backgroundColor = index % 2 === 0 ? "white" : "#f9f9f9";

    row.innerHTML = rowStyle(log);

    table.appendChild(row);
  });

  consoleElement.innerHTML = "";
  consoleElement.appendChild(closeConsoleButton);
  consoleElement.appendChild(table);
}

window.pbjs.que.push(()=>{
  pbjs.onEvent("auctionInit", (args) =>{
    logEvent("auctionInit", args)
  });
  pbjs.onEvent("auctionEnd", (args) => logEvent("auctionEnd", args));
  pbjs.onEvent("bidWon", (args) => logEvent("bidWon", args));
})


export function showConsole() {
  renderConsole();
}
