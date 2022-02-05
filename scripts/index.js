import { insertInformation } from "./information.js"
import { setupScrollAnimations } from './scrollAnimator.js'
import { startTypeWriter } from './typeWriter.js'

insertInformation()
startTypeWriter()
setupScrollAnimations()


// Add collapsing divs
const toggleDiv = (id) => {
    const div = document.getElementById(id);
    div.classList.toggle("show")
    console.log("shown")


    // Scroll Snap Behavior does not play nice with some of the collapsing divs (ie. makes the page jump around)
    // So here we want to get the elements that have scroll snap and disable them temporarily
    const snapping = document.getElementsByClassName('snap-y');
    for (elem in snapping) {
        elem.classList.toggle("snap-y")
    }
    // reenable snapping
    setTimeout(() => {
        for (elem in snapping) {
            elem.classList.toggle("snap-y")
        }
    }, 2500)
}

// Add listener for a collapsing div
const resumeButton = document.getElementById("show-resume-button");
resumeButton.onclick = () => {
    toggleDiv('resume-container')
}