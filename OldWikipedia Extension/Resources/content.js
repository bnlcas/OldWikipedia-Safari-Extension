

/*browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});*/

console.log("Extension")

/*
function ammendWikipediaURL() {
    console.log("append")
    let url = window.location.href;
    let oldVersionURL = "?useskin=vector"
    //let targetSiteUrl = 'wikipedia.org'
    //url.includes(targetSiteUrl) &&
    if( !url.includes(oldVersionURL))
    {
        let oldVersionUrl = url + oldVersionURL;
        console.log("redirected")
        window.location.href = oldVersionUrl;
        
        //safari.extension.dispatchMessage('open', { url: oldVersionUrl });
    }
}

safari.application.addEventListener("beforeNavigate", openHandler, true);
function openHandler(e) { console.log(e); }
 */
console.log("append")
let url = window.location.href;
let oldVersionURL = "?useskin=vector"
//let targetSiteUrl = 'wikipedia.org'
if(!url.includes(oldVersionURL))
{
    let oldVersionUrl = url + oldVersionURL;
    console.log(oldVersionUrl)
    window.location.href = oldVersionUrl;
    
    //safari.extension.dispatchMessage('open', { url: oldVersionUrl });
}

window.addEventListener("load", (e) => {
    console.log("append")
    let url = window.location.href;
    let oldVersionURL = "?useskin=vector"
    //let targetSiteUrl = 'wikipedia.org'
    if(!url.includes(oldVersionURL))
    {
        let oldVersionUrl = url + oldVersionURL;
        console.log(oldVersionUrl)
        window.location.href = oldVersionUrl;
        
        //safari.extension.dispatchMessage('open', { url: oldVersionUrl });
    }
})

