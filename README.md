# Chrome Mailinator Omnibox
Chrome Omnibox extension allows the user to open a mailinator inbox right from the address bar in chrome.

# Usage
## Omnibox
The intended usage of this is to use the chrome omnibox. Navigate to the chrome omnibox (address bar) by clicking on it
or pressing CMD+L or CTRL+L.

After typing mail and pressing the spacebar, type the name of any mailinator inbox you wish.

## Persistance
Every time you navigate to an inbox, the inbox name is stored to your chrome sync data. This means it will be available on every chrome installation you have
provided that sync is turned on. Otherwise the saved inboxes will save to the local storage of your chrome browser.

The extension will save the last 20 mailboxes accessed.

You can access your recent inboxes by clicking on the extension icon in the chrome toolbar.

# Development
## Build
To build the extension from deployment, run:
```sh
./build.sh
```

To clean the repository from build artifacts, run:
```
./clean.sh
```

## Versioning
When adding a new version, make sure to update manifest.json and build.sh with appropriate version numbers.