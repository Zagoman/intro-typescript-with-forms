import { Dog, Size } from "./types";

const dogNames = ["Rex", "Nina", "Mel", "Lili", "Bear", "Buddy", "Max", "Bella"]
const size:Size  = ["xsmall", "small", "medium", "large", "xlarge"];
const nicknames = ["Pit", "Biggie", "Fluf", "Fifo", "Rover", "Destruction"]
/*
    export type Dog = t 
    name: string;
    size: "xsmall" | "small" | "medium" | "large" | "xlarge";    
    age: number;
    isGoodBoy: boolean;
    nicknames: string[];
    */
export const createDogs = (amnt:number): Dog[] => {
    const dogs:Dog[] = [];
   for (let i = 0; i < amnt; i++) {
    let curr:Dog = {};
    curr.age = randomRange(24);
    curr.name = dogNames[randomRange(dogNames.length)]
    curr.size = size[randomRange(size.length)]
    curr.isGoodBoy = randomRange(2) === 0 ? true : false;
            
   } 
   return dogs
}

function randomRange(range:number):number {
    return Math.floor(Math.random() * range)
}
