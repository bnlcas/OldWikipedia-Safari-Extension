browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello")
        sendResponse({ farewell: "goodbye" });
});


/*
 function ammendWikipediaURL() {
 console.log("append", browser))
 let url = window.location.href;
 let oldVersionURL = "?useskin=vector"
 let targetSiteUrl = "wikipedia.org"
 if(url.includes(targetSiteUrl) && !url.includes(oldVersionURL))
 {
 let oldVersionUrl = url + oldVersionURL;
 console.log("redirected", browser)
 window.location.href = oldVersionUrl;
 
 //safari.extension.dispatchMessage('open', { url: oldVersionUrl });
 }
 }
 
 
 window.addEventListener("load", ammendWikipediaURL);
*/
 //console.log("Extension", browser)
 
