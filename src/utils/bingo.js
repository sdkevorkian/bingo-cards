export function generateBingoCard(){
    let newCard = {
        "B": [],
        "I": [],
        "N": [],
        "G": [],
        "O": []
    }

    Object.keys(newCard).forEach(key => {
        while (newCard[key].length < 5) {
            if(key==="N" && newCard[key].length === 2){
                newCard[key].push('free');
            }
            let newN = RNGgenerator(key);
            if(newCard[key].indexOf(newN) < 0) {
                newCard[key].push(newN)
            }
        }
    });
    return newCard;
}

function RNGgenerator(letter){
    let n = 0;
    switch(letter){
        case 'B':
            n = getRandomInt(1, 15);
            break;
        case 'I':
            n = getRandomInt(16, 30);
            break;
        case 'N':
            n = getRandomInt(31, 45);
            break;
        case 'G':
            n = getRandomInt(46,60);
            break;
        case 'O':
            n = getRandomInt(61, 75);
            break;
        default:
            n = 0;
    }
    return n;
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}