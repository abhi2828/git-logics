// logic for anagram program with its time complexity. (for large strings)

const findAnagram = (str1, str2) => {

    if (str1.length === str2.length) {
        const newStr1 = strToArr(str1);
        const newStr2 = strToArr(str2);
        function strToArr(str) {
            let strArr = []
            for (let i = 0; i < str.length; i++) {
                strArr[strArr.length] = str[i];
            }
            return sorting(strArr)
        }

        function sorting(strArr) {
            let newStr = ''

            // let strArr = []
            for (let i = 0; i < strArr.length - 1; i++) {
                if (strArr[i] > strArr[i + 1]) {
                    [strArr[i], strArr[i + 1]] = [strArr[i + 1], strArr[i]]
                    i = -1
                }

            }
            for (let i = 0; i < strArr.length; i++) {
                newStr += strArr[i]
            }
            return newStr
        }

        if (newStr1.toLocaleLowerCase() === newStr2.toLocaleLowerCase()) {
            return 'it is anagram'
        }
        else {
            return 'it is not anagram'
        }
    } else {
        return 'it is not anagram'
    }
}

console.log('result', findAnagram('abhay', 'bhaa5y'))



