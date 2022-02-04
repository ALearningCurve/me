export const startTypeWriter = () => {
    let currChar = 0;
    let currPhrase = 0;
    let speed = 100;

    const phrases = [
        "fullstack engineer",
        "dog lover",
        "snowboarder",
        "foodie",
        "parcheesi lover",
        "science fiction devourer",
    ]

    const randomChar = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        return chars.charAt(Math.floor(Math.random() * chars.length))
    }
    const nextPhrase = () => {
        currPhrase = currPhrase >= phrases.length - 1 ? 0 : currPhrase + 1
        return currPhrase
    }

    const write = () => {
        let elem = document.getElementById("descriptors");
        // If we are not done with the phrase yet, then add the remaining letter
        if (currChar < phrases[currPhrase].length) {
            const rc = randomChar(); // Random character (RC)
            const pc = phrases[currPhrase].charAt(currChar); // Phrases curremt character (PC)
            const useRandom = Math.floor(Math.random() * 10) == 0;

            if (useRandom && rc != pc) {
                elem.innerHTML += rc;
                const deleteOne = () => {
                    elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - 1);
                    setTimeout(write, speed)
                }
                setTimeout(deleteOne, speed + 20)
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

    const backspace = () => {
        let elem = document.getElementById("descriptors");
        const curr = elem.innerHTML;
        elem.innerHTML = curr.substring(0, curr.length - 1);
        currChar--;
        if (currChar < 1) {
            currPhrase = nextPhrase();
            setTimeout(write, speed / 2);
        } else {
            setTimeout(backspace, speed / 2);
        }

    }
    setTimeout(write, 1500);
}