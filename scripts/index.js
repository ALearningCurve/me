import { insertInformation } from "./information.js"
import { setupScrollAnimations } from './scrollAnimator.js'
import { startTypeWriter } from './typeWriter.js'

insertInformation()
startTypeWriter()
setupScrollAnimations()


// Add collapsing divs
const toggleDiv = (id) => {



    // Scroll Snap Behavior does not play nice with some of the collapsing divs (ie. makes the page jump around)
    // So here we want to get the elements that have scroll snap and disable them temporarily
    const snapping = document.getElementsByClassName('snap');
    console.log(snapping)
    for (let i = 0; i < snapping.length; i++) {
        const elem = snapping[i];
        elem.classList.remove("snap-y");
    }

    const div = document.getElementById(id);
    div.classList.toggle("show")

    // reenable snapping
    setTimeout(() => {
        for (let i = 0; i < snapping.length; i++) {
            console.log("hidden")
            const elem = snapping[i];
            elem.classList.add("snap-y");
        }
    }, 2000)
}

// Add listener for a collapsing div
const resumeButton = document.getElementById("show-resume-button");

resumeButton.onclick = () => {
    toggleDiv('resume-container')
}