function switchOn() {
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switchStatus").textContent="switch on"
    document.getElementById("switchOff").style.backgroundColor="#e12d39"
    document.getElementById("switchOn").style.backgroundColor ="#cbd2d9"

}
function switchOff() {
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchStatus").textContent="switch off"
    document.getElementById("switchOn").style.backgroundColor ="#22c55e"
    document.getElementById("switchOff").style.backgroundColor ="#cbd2d9"
}