
let isBlack = false;
let backgroundElementIds = ["myBanner", "bannerTitle","leftTab"]
let textElements = ["bannerTitle", "tabText"]; 
let borderElements = ["dividerTab", "topDivider"];
let primaryColor = "grey"
let primaryDarkModeColor = "black"
let secondaryColor= "black"
let secondaryDarkModeColor= "white"
function setDarkMode(){
    let tempPrimaryColor= isBlack ? primaryColor : primaryDarkModeColor
    let tempSecondaryColor = isBlack ? secondaryColor : secondaryDarkModeColor
    for (let id of backgroundElementIds){
        let element = document.getElementById(id)
        element.style.backgroundColor= tempPrimaryColor
        element.style.color= tempSecondaryColor
    }
    for (let id of textElements){
        let element = document.getElementById(id)
        element.style.color= tempSecondaryColor
    }
    for (let id of borderElements){
        let element = document.getElementById(id)
        element.style.borderColor= tempSecondaryColor
    }
    isBlack = !isBlack; 
}
    var isClicked = true;
    var isClickedColor = "white";
    var isNotClickedColor = "black";
    document.addEventListener("click", function (event) {
    var clickedElement = event.target;
    console.log(clickedElement);
        console.log("Clicked element tag name:", clickedElement.tagName);
        clickedElement.style.color = isClicked ? isClickedColor : isNotClickedColor;
        isClicked = !isClicked;
    });
const darkModeButton= document.getElementById("darkModeButton")
darkModeButton.addEventListener("click",setDarkMode)


