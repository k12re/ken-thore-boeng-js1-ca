export function errorMsg(type = "error", error = "An error occured") {
  const html = `<div class="error ${type}">${error}</div>`;

  return html;
}
