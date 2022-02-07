/**
 * Creates a type writer effect for a given element (current the sub-header element on the first section)
 */
export const startTypeWriter = () => {
    // The current character in the current phrase currently being typed/removed
    let currChar = 0;
    // The index of the current phrase in the phrases list
    let currPhrase = 0;
    // The delay between each character added
    let speed = 100;

    // Phrases to write out
    const phrases = [
        "fullstack engineer",
        "dog lover",
        "snowboarder",
        "foodie",
        "parcheesi lover",
        "science fiction reader",
        "roboticist",
    ]

    /**
     * @returns a random lower case character or number
     */
    const randomChar = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        return chars.charAt(Math.floor(Math.random() * chars.length))
    }

    /** Returns the index of the next phrase in the phrases list */
    const nextPhrase = () => {
        currPhrase = currPhrase >= phrases.length - 1 ? 0 : currPhrase + 1
        return currPhrase
    }

    /**
     * Writes out the next characters in current phrase until phrase is complete, then call backspace().
     * Will randomly make a "mistake" and fix it instead of writng the next character sometimes
     */
    const write = () => {
        let elem = document.getElementById("descriptors");
        // If we are not done with the phrase yet, then add the remaining letter
        if (currChar < phrases[currPhrase].length) {
            const rc = randomChar(); // Random character (RC)
            const pc = phrases[currPhrase].charAt(currChar); // Phrase's curremt character (PC)
            const useRandom = Math.floor(Math.random() * 10) == 0; // 1/10 chance of making a "mistake"

            // make the "mistake" and then fix it
            if (useRandom && rc != pc) {
                elem.innerHTML += rc;
                const deleteOne = () => {
                    elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - 1);
                    setTimeout(write, speed)
                }
                setTimeout(deleteOne, speed + 20)
                    // just add the next character in the phrase
            } else {
                currChar++;
                elem.innerHTML += pc;
                setTimeout(write, speed);
            }
        }
        // Remove the characters from the current phrase in the html
        // Once they have all been written
        else {
            setTimeout(backspace, 1500);
        }
    }

    /**
     * Removes current characters in element one-by-by until no more characters from previous phrase. 
     * Updates current phrase and calls write() when no more characters from previous phrase
     */
    const backspace = () => {
        let elem = document.getElementById("descriptors");
        const curr = elem.innerHTML;
        elem.innerHTML = curr.substring(0, curr.length - 1);
        currChar--;
        // if this conidtion is met, then there are no more charcters to remove
        if (currChar < 1) {
            currPhrase = nextPhrase();
            setTimeout(write, speed / 2);
            // otherwise keep on removing characters until nothing is left
        } else {
            setTimeout(backspace, speed / 2);
        }

    }

    // Starting writing the first word
    setTimeout(write, 1500);
}