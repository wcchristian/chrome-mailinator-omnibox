let linkContainer = document.getElementById("link-container");
const MAILINATOR_BASE_LINK = "https://www.mailinator.com/v3/index.jsp?zone=public&query=";
const LINK_TARGET = '_blank';

buildLinkList();

function buildLinkList() {
    chrome.storage.sync.get('mailboxes', function(elem) {
        if(elem.mailboxes) {
            console.log(elem.mailboxes)
            elem.mailboxes.forEach(function(e, idx) {
                let link = document.createElement('a')
                link.setAttribute('href', "https://www.mailinator.com/v3/index.jsp?zone=public&query="+e);
                link.setAttribute('target', '_blank');
                link.innerHTML = e + '@mailinator.com';
                linkContainer.appendChild(link);
                linkContainer.appendChild(document.createElement('br'));
            })
        }
    });
}

//TODO: Mask dupes
//TODO: Allow Entry from popup page