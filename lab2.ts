//Задание 1
function maxNegative(arr: number[]): any{
    const negativeNumbers = arr.filter(num => num < 0);

    if (negativeNumbers.length === 0) {
        return null;
    }

    const maxNegative = Math.max(...negativeNumbers);
    
    return maxNegative;
}

const numbers = [1, -3, 7, -2, -5, 4];
const result1 = maxNegative(numbers);
console.log(result1);

//Задание 2
function booleanMatrix(boolMatrix: boolean[][]): number[][] {
    return boolMatrix.map(row => row.map(value => (value ? 1 : 0))); 
}

const matrix: boolean[][] = [
    [true, false, false],
    [false, true, false],
    [true, true, false]
];

const integerMatrix = booleanMatrix(matrix);
console.log(integerMatrix);

//Задание 3
type MyTuple = [number, string, string];

function createTuple(num: number, str0: string, str1: string): MyTuple {
    return [num, str0, str1];
}

function concatStr(tuple: MyTuple): string {
    const [num, str0, str1] = tuple;
    return `${str1}: ${str0}`;
}

const myTuple = createTuple(12, "3 4", "5 6");
const result2 = concatStr(myTuple);

console.log(myTuple);
console.log(result2);

//Задание 4
enum AminoAcid {
    Glycine = "Глицин",
    Glutamine = "Глутамин",
    Alanine = "Аланин",
    Serine = "Серин",
    Valine = "Валин",
    Leucine = "Лейцин",
    Tyrosine = "Тирозин",
    Tryptophan = "Триптофан",
}

console.log(AminoAcid.Glycine); 

//Задание 5
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    name = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T) {
    console.log(`name: ${pet.name}`);
    console.log(`age: ${pet.age}`);
    console.log(`speak: ${pet.speak()}`);
}

const myDog = new Dog();
printPetInfo(myDog);

//Задание 6
interface AminoAcidInfo {
    type: AminoAcid;
    molecularWeight: number;
    properties: string[];
}

const glycine: AminoAcidInfo = {
    type: AminoAcid.Glycine,
    molecularWeight: 75.07,
    properties: ["Формула C2H5NO2", "Относится к классу производных карбоновых кислот"],
};

console.log(JSON.stringify(glycine, null, 2));