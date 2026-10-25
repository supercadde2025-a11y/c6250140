
        let guess = Number(prompt("Guess number: "))
        let attempts = 1
        while(guess !== 10){
            if(guess >= 10){
                console.log("Too high, try again")
            } else {
                console.log("Too low")
            }
            guess = Number(prompt("Guess again: "))
            attempts++;
        }
        console.log("Correct number")
        // console.log("Attempted " + attempts + " times")
        console.log(`Attempted ${attempts} times.`)