import { expect, test } from 'vitest'

// Inferred Type Predicates
interface Bird {
    commonName: string;
    scientificName: string;
    sing(): void;
}

// Maps country names -> national bird.
// Not all nations have official birds (looking at you, Canada!)
declare const nationalBirds: Map<string, Bird>;

function makeNationalBirdCall(country: string) {
    const bird = nationalBirds.get(country);  // bird has a declared type of Bird | undefined
    if (bird) {
        bird.sing();  // bird has type Bird inside the if statement
    } else {
        // bird has type undefined here.
    }
}

function makeBirdCalls(countries: string[]) {
    // birds: Bird[]
    const birds = countries
        .map(country => nationalBirds.get(country))
        .filter(bird => bird !== undefined);

    for (const bird of birds) {
        bird.sing();  // will be ok only after ts5.5
    }
}

function makeBirdCallsWithCustomPredicate(countries: string[]) {
    // birds: Bird[]
    const birds = countries
        .map(country => nationalBirds.get(country))
        .filter(isBirdReal);

    for (const bird of birds) {
        bird.sing();  // will be ok every time
    }
}

// function isBirdReal(bird: Bird | undefined): bird is Bird
function isBirdReal(bird: Bird | undefined): bird is Bird {
    return bird !== undefined;
}

function nonNullable<S>(student: S): student is NonNullable<S> {
    return student !== null && student !== undefined
}

function getClassroomAverage(students: string[], allScores: Map<string, number>) {
    const studentScores = students
        .map(student => allScores.get(student))
        .filter(nonNullable);

    return studentScores.reduce((a, b) => a + b) / studentScores.length;
}

function f1(obj: Record<string, unknown>, key: string) {
    if (typeof obj[key] === "string") {
        // Now okay, previously was error
        obj[key].toUpperCase();
    }
}



test('sing bird', () => {
    expect(() => makeBirdCalls([])).not.toThrow();
})

test('sing bird', () => {
    expect(() => makeBirdCallsWithCustomPredicate([])).not.toThrow();
})


