import { Dog, Size } from "./types";

const dogNames = ["Rex", "Clifford", "Nina", "Mel", "Lili", "Bear", "Buddy", "Max", "Bella", "Trofast", "Rudolf"]
const size: Size[] = ["xsmall", "small", "medium", "large", "xlarge"];
const nicknames = ["Pit", "Biggie", "Fluf", "Fifo", "Rover", "Destruction", "Fluffy"]
const MAX_AGE = 24;

export const generateDogs = (amnt: number): Dog[] => {
    const dogs: Dog[] = [];
    for (let i = 0; i < amnt; i++) {
        let curr: Dog = {
            age: randomRange(MAX_AGE),
            name: dogNames[randomRange(dogNames.length)],
            size: size[randomRange(size.length)],
            isFluffy: randomRange(2) === 0 ? true : false,
            nicknames: [nicknames[randomRange(nicknames.length)]]
        }
        dogs.push(curr);
    }
    return dogs
}

function randomRange(range: number): number {
    return Math.floor(Math.random() * range)
}
