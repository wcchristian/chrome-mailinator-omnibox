// Analytics

// Listners
chrome.omnibox.onInputEntered.addListener(omniboxListener);

// Functions

function omniboxListener(mailboxName) {
    console.log("Chrome Mailinator Omnibox: Navigating to Mailinator")
    var baseMailinatorURL = "https://www.mailinator.com/v3/index.jsp?zone=public&query=";
    var newUrl = baseMailinatorURL + mailboxName;
    chrome.tabs.create({ url: newUrl });

}