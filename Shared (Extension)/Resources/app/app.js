function handleNewTab() {
  browser.runtime.sendMessage({
    name: "open-new-tab",
    data: "https://duckduckgo.com",
  });
  return false;
}

function documentReady() {
  document.getElementById("new-tab").addEventListener("click", handleNewTab);
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", documentReady)
  : documentReady();
