<h1 align="center">
  <img src="https://raw.githubusercontent.com/corollari/aws-color-region-navbar-extension/master/icon.png" width="64">
  <br>
  AWS Navbar Region Color Extension
  <br>
</h1>

<h4 align="center">An OSS version of the "AWS console regions color" extension, a browser extension that changes the color of the AWS navbar depending on the region</h4>

<p align="center">
<img src="https://raw.githubusercontent.com/corollari/aws-color-region-navbar-extension/master/screenshot.png">
</p>

# Install
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/aws-navbar-region-color/)
- [Chrome](https://chrome.google.com/webstore/detail/ofhcnghdbkacblncbjjpcdfmbknhckkb)

## Reasons for the fork
- Other extension is not open source
- Other extension was broken by an update on AWS' side
- Adds new regions that were missing
- Adds support for Firefox
- Uses a color picker instead of asking the user to input hex
- Other extension requires a permission that lets it access your whole browsing history, this one doesn't

I believe that by making it open source it'll be possible to verify that the code doesn't do anything wrong such as exfiltrate data and if there's any further breakage people will be able to fix it by either contributing or forking it into a new version.

## Philosophy
All the extension code is kept extremely simple in order to allow anyone to contribute easily, this means:
- Uses no transpilation tools, only basic HTML and Javascript
- Only include minimal number of files
- Keep code extremely simple

## Development
On Chrome:
1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the LOAD UNPACKED button and select the extension directory.
![load unpacked](https://developer.chrome.com/static/images/get_started/load_extension.png)

On Firefox:
1. Open the Debugging page by navigating to `about:debugging#/runtime/this-firefox`.
2. Click on the "Load Temporary Add-on..." button and select the extension directory.

## License
MIT

## Acknowledgements
Thanks to u/Geeno2 for coming up with the idea and building it.
