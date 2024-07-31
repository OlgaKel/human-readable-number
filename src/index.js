module.exports = function toReadable (number) {
    let tens;
    let nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    if (20 <= number) {
        tens = [
            '','',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety',
        ];
        const num = String(number).split('');
        if (num.length === 2)
            if (number % 10 == 0) {
                return tens[num[0]];
            } else {
                if (num[0] >= 2) {
                    return tens[num[0]] + ' ' + nums[num[1]];
                }
            }
        if (num.length === 3)
            if (number % 100 != 0) {
                if (number % 10 === 0)
                    if (num[1] != 2) {
                        if (num[1] != 3) {
                            if (num[1] >= 4) {
                                return nums[parseInt(num[0])] + ' hundred ' + tens[num[1]];
                            }
                        } else {
                            return nums[parseInt(num[0])] + ' hundred ' + tens[3];
                        }
                    } else {
                        return nums[parseInt(num[0])] + ' hundred ' + tens[2];
                    }
                if (num[1] == 0) {
                    return nums[parseInt(num[0])] + ' hundred ' + nums[num[2]];
                }
                if (num[1] == 1) {
                    if (num[2] == 0) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[10];
                    }
                    if (num[2] == 1) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[11];
                    }
                    if (num[2] == 2) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[12];
                    }
                    if (num[2] == 3) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[13];
                    }
                    if (num[2] == 4) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[14];
                    }
                    if (num[2] == 5) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[15];
                    }
                    if (num[2] == 6) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[16];
                    }
                    if (num[2] == 7) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[17];
                    }
                    if (num[2] == 8) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[18];
                    }
                    if (num[2] == 9) {
                        return nums[parseInt(num[0])] + ' hundred ' + nums[19];
                    }
                }
                if (num[1] >= 2) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[num[1]] + ' ' + nums[num[2]];
                }
            } else {
                return nums[parseInt(num[0])] + ' hundred';
            }
    } else {
        return nums[number];
    }
}
  

