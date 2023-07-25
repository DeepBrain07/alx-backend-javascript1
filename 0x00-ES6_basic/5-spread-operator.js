export default function concatArrays(array1, array2, string) {
    let myStr = [...array1, ...array2, ...string];
    return myStr;
}