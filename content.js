const consoleStyle = `background-color: #1DA1F2; color: white; font-size: 20px;`;
let hiddenCount = 0;
console.log(`%cTWITTER AD BLOCKING EXTENSION`, consoleStyle);

window.addEventListener ("load", pageDoneLoading, false);

function pageDoneLoading (evt) {
    setInterval(() =>{
        [...(document.querySelectorAll("[data-testid='placementTracking']"))]
        .forEach((item) => {
            const child = item.children[0];
            if(child.hasAttribute("data-testid")){
                if(child.getAttribute('data-testid') !== "videoPlayer") {
                    item.style.display = "none";
                    console.log(`%cITEM HIDDEN: ${++hiddenCount}`, consoleStyle);
                }
            }
        });
    }, 1000);
}





