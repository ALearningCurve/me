import { insertInformation } from "./information.js"
import { setupScrollAnimations } from './scrollAnimator.js'
import { startTypeWriter } from './typeWriter.js'

insertInformation()
startTypeWriter()
setupScrollAnimations()


// Add collapsing divs
const toggleDivId = (id) => {
    tempDisableSnapping()

    const div = document.getElementById(id);
    div.classList.toggle("show");
}


// Add collapsing divs
const toggleDivClass = (cls) => {
    tempDisableSnapping()

    const divs = document.getElementsByClassName(cls);
    for (let i = 0; i < divs.length; i++) {
        const elem = divs[i];
        elem.classList.toggle("show");
    }
}


const tempDisableSnapping = () => {
    // Scroll Snap Behavior does not play nice with some of the collapsing divs (ie. makes the page jump around)
    // So here we want to get the elements that have scroll snap and disable them temporarily
    const snapping = document.getElementsByClassName('snap');

    for (let i = 0; i < snapping.length; i++) {
        const elem = snapping[i];
        elem.classList.remove("snap-y");
    }
    // reenable snapping
    setTimeout(() => {
        for (let i = 0; i < snapping.length; i++) {
            const elem = snapping[i];
            elem.classList.add("snap-y");
        }
    }, 2000)
}

// Add listener for a collapsing div
const resumeButton = document.getElementById("show-resume-button");
const projectsButton = document.getElementById("show-project-cards");

projectsButton.onclick = () => {
    toggleDivClass("toggle-cards")
    const span = document.getElementById("proj-btn-action-word")
    let word = span.innerHTML.trim().toLowerCase();
    word = word == "show" ? "Hide" : "Show"

    span.innerHTML = word + " ";
}

resumeButton.onclick = () => {
    toggleDivId('resume-container')
}