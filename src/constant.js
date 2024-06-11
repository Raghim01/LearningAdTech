export const div_1_sizes = [
  [300, 250],
  [300, 600],
];
export const div_2_sizes = [
  [728, 90],
  [970, 250],
];
export const PREBID_TIMEOUT = 1000;
export const FAILSAFE_TIMEOUT = 3000;

export const consoleElementStyle =
  "id: event-console; position: fixed; bottom: 0; left: 0; width: 100%; height: 50%; overflow-y: auto; background-color: white; border-top: 1px solid #ccc; z-index: 1000;";
export const closeConsoleButtonStyle =
  "align-self: top; height: 30px; width: 30px; color:white; background-color:black;";
export const tableStyle = "width: 100%; border-collapse: collapse;";
export const headerRowStyle = `
    <th style="border: 1px solid #ccc; padding: 5px;">Time</th>
    <th style="border: 1px solid #ccc; padding: 5px;">Placement</th>
    <th style="border: 1px solid #ccc; padding: 5px;">Event Type</th>
    <th style="border: 1px solid #ccc; padding: 5px;">Description</th>
    <th style="border: 1px solid #ccc; padding: 5px;">Arguments</th>
  `;
export const rowStyle = (log) => `
      <td style="border: 1px solid #ccc; padding: 5px;">${log.time}</td>
      <td style="border: 1px solid #ccc; padding: 5px;">${log.placement}</td>
      <td style="border: 1px solid #ccc; padding: 5px;">${log.eventType}</td>
      <td style="border: 1px solid #ccc; padding: 5px;">${log.description}</td>
      <td style="border: 1px solid #ccc; padding: 5px;">${log.arguments}</td>
    `;
