

class Ceaser {
    constructor(shift) {
        this.shift = shift
    }

    encode(str) {
        let ans = ''

        const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


        for (let i = 0; i < str.length; i++) {
            if (upper.includes(str[i])) {
                let index = upper.indexOf(str[i])
                let shiftedletter = (index + this.shift) % 26
                ans += upper[shiftedletter]

            } else if (lower.includes(str[i])) {
                let index = lower.indexOf(str[i])
                let shiftedletter = (index + this.shift) % 26
                ans += upper[shiftedletter]
            }
        }
        console.log(ans)
        return ans
    }

    decode(str) {
        let ans = ''

        const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


        for (let i = 0; i < str.length; i++) {
            if (upper.includes(str[i])) {
                let index = upper.indexOf(str[i])
                let shiftedletter = (index - this.shift)
                let len = (shiftedletter + 26) % 26

                ans += upper[len]

            } else if (lower.includes(str[i])) {
                let index = lower.indexOf(str[i])
                let shiftedletter = (index - this.shift)
                console.log(shiftedletter)
                let len = (shiftedletter + 26) % 26
                ans += upper[len]

            } else {
                ans += str[i]
            }
        }
        console.log(ans)
        return ans
    }
}

let ins = new Ceaser(5)

ins.encode('Codewars')
ins.decode('BFKKQJX')