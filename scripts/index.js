import { insertInformation } from "./information.js"
import { setupScrollAnimations } from './scrollAnimator.js'
import { startTypeWriter } from './typeWriter.js'

insertInformation()
startTypeWriter()
setupScrollAnimations()


const toggleDiv = (id) => {
    const div = document.getElementById(id);
    div.classList.toggle("show")
    console.log("shown")
}


const resumeButton = document.getElementById("show-resume-button");
resumeButton.onclick = () => {
    toggleDiv('resume-container')
}