// Analytics

// Listners
chrome.omnibox.onInputEntered.addListener(omniboxListener);

// Listeners
function omniboxListener(mailboxName) {
    console.log("Chrome Mailinator Omnibox: Navigating to Mailinator")
    let baseMailinatorURL = "https://www.mailinator.com/v3/index.jsp?zone=public&query=";
    let newUrl = baseMailinatorURL + mailboxName;
    chrome.tabs.create({ url: newUrl });
    persistMailbox(mailboxName);
}

// Functions
function persistMailbox(mailboxName) {
    console.log("Chrome Mailinator Omnibox: Persisting Mailbox");
    chrome.storage.sync.get('mailboxes', function(elem) {
        let mailboxes = elem.mailboxes;
        if(!mailboxes) {
            mailboxes = []
        }
        if(mailboxes.indexOf(mailboxName) === -1) {
             if(mailboxes.length >= 20) {
                mailboxes.shift()
            }
    
            mailboxes.push(mailboxName);
        }
        chrome.storage.sync.set({mailboxes: mailboxes}, function() {
            console.log("Chrome Tab Renamer: The Mailbox is stored.");
        })
    });
}
