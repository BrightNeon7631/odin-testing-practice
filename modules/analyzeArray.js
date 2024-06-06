export default function analyzeArray(array) {
    let avg  = (array.reduce((prev, cur) => prev + cur, 0)) / array.length;
    return { min: Math.min(...array), max: Math.max(...array), length: array.length, average: avg };
}