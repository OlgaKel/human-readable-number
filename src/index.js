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
        tens = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        };
        const num = String(number).split('');
        if (num.length === 2)
            if (number % 10 == 0) {
                return tens[number];
            } else {
                if (num[0] == 2) {
                    return 'twenty' + ' ' + nums[num[1]];
                }
                if (num[0] == 3) {
                    return 'thirty' + ' ' + nums[num[1]];
                }
                if (num[0] == 4) {
                    return 'forty' + ' ' + nums[num[1]];
                }
                if (num[0] == 5) {
                    return 'fifty' + ' ' + nums[num[1]];
                }
                if (num[0] == 6) {
                    return 'sixty' + ' ' + nums[num[1]];
                }
                if (num[0] == 7) {
                    return 'seventy' + ' ' + nums[num[1]];
                }
                if (num[0] == 8) {
                    return 'eighty' + ' ' + nums[num[1]];
                }
                if (num[0] == 9) {
                    return 'ninety' + ' ' + nums[num[1]];
                }
            }
        if (num.length === 3)
            if (number % 100 != 0) {
                if (number % 10 === 0)
                    if (num[1] != 2) {
                        if (num[1] != 3) {
                            if (num[1] == 4) {
                                return nums[parseInt(num[0])] + ' hundred ' + tens[40];
                            }
                            if (num[1] == 5) {
                                return nums[parseInt(num[0])] + ' hundred ' + tens[50];
                            }
                            if (num[1] == 6) {
                                return nums[parseInt(num[0])] + ' hundred ' + tens[60];
                            }
                            if (num[1] == 7) {
                                return nums[parseInt(num[0])] + ' hundred ' + tens[70];
                            }
                            if (num[1] == 8) {
                                return nums[parseInt(num[0])] + ' hundred ' + tens[80];
                            }
                            if (num[1] == 9) {
                                return nums[parseInt(num[0])] + ' hundred ' + tens[90];
                            }
                        } else {
                            return nums[parseInt(num[0])] + ' hundred ' + tens[30];
                        }
                    } else {
                        return nums[parseInt(num[0])] + ' hundred ' + tens[20];
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
                if (num[1] == 2) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[20] + ' ' + nums[num[2]];
                }
                if (num[1] == 3) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[30] + ' ' + nums[num[2]];
                }
                if (num[1] == 4) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[40] + ' ' + nums[num[2]];
                }
                if (num[1] == 5) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[50] + ' ' + nums[num[2]];
                }
                if (num[1] == 6) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[60] + ' ' + nums[num[2]];
                }
                if (num[1] == 7) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[70] + ' ' + nums[num[2]];
                }
                if (num[1] == 8) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[80] + ' ' + nums[num[2]];
                }
                if (num[1] == 9) {
                    return nums[parseInt(num[0])] + ' hundred ' + tens[90] + ' ' + nums[num[2]];
                }
            } else {
                return nums[parseInt(num[0])] + ' hundred';
            }
    } else {
        return nums[number];
    }
}
  

