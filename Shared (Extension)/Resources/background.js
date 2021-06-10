browser.runtime.onMessage.addListener(handleMessage);
browser.browserAction.onClicked.addListener(onBrowserActionClicked);

function handleMessage(message) {
  if (
    message &&
    message.name &&
    message.data &&
    message.name === "open-new-tab"
  ) {
    browser.tabs.create({ url: message.data });
  }
}

function onBrowserActionClicked() {
  const appPage = browser.extension.getURL("/app/app.html");

  browser.tabs.query({ url: appPage }).then((tabs) => {
    const welcomePageTab = tabs.find((tab) => tab.url === appPage);

    if (!welcomePageTab || welcomePageTab.id === undefined) {
      return browser.tabs.create({ url: appPage });
    }

    browser.tabs.update(welcomePageTab.id, { active: true }).then((tab) => {
      if (!tab || tab.id === undefined) return;

      return browser.tabs.reload(tab.id, {});
    });
  });
}
