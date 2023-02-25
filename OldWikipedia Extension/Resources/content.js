


let url = window.location.href;
let oldVersionURL = "?useskin=vector"
//let targetSiteUrl = 'wikipedia.org'
if(!url.includes(oldVersionURL))
{
    let oldVersionUrl = url + oldVersionURL;
    console.log(oldVersionUrl)
    window.location.href = oldVersionUrl;
}

window.addEventListener("load", (e) => {
    let url = window.location.href;
    let oldVersionURL = "?useskin=vector"
    //let targetSiteUrl = 'wikipedia.org'
    if(!url.includes(oldVersionURL))
    {
        let oldVersionUrl = url + oldVersionURL;
        console.log(oldVersionUrl)
        window.location.href = oldVersionUrl;        
    }
})

