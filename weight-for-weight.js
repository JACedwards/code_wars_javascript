// #still some errors on this one:  run test to keep working (missing 123):  https://www.codewars.com/kata/55c6126177c9441a570000cc/train/python 

// #Pandas, 2-key sort: https://stackoverflow.com/questions/17141558/how-to-sort-a-dataframe-in-python-pandas-by-two-or-more-columns


// # My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// # I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// # For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// # Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// # Example:
// # "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// # "100 180 90 56 65 74 68 86 99"
// # When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// # 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// # All numbers in the list are positive numbers and the list can be empty.

// # Notes
// # it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// # For C: The result is freed.

// #Pseudo:
// # split string by spaces (may be more than one)
// # loop through list of strings:
// #    splitting each
// #    appending int version of each digit to list
// #    sum list
// #    add string version of original as key to integer version of the summed version.
// # (going to have to deal with the "same" weight alphabetical thing eventually)


function orderWeight(strng) {
    strng = strng.split(' ');
    console.log(strng);
    
    // #strng     #['56', '65', '74', '100', '99', '68', '86', '180', '90']
    
    let sums =[];
    let sum = 0

    
    for (let i = 0; i < strng.length; i++) {
        for (let j = 0; j < strng[i].length; j++) {
            sum += parseInt(strng[i][j]);
            }
            sums.push(sum)
            sum = 0
        }

    console.log(sums);
    // sums = [
    //     11, 11, 11, 1, 18,
    //     14, 14,  9, 9
    //   ]

    let ints = []

    
    for (let k = 0; k < strng.length; k++) {
        ints.push(parseInt(strng[k]))
    }
    console.log(ints);
    // ints = [
    //     56, 65, 74, 100,
    //     99, 68, 86, 180,
    //     90
    //   ]

    let nums = {1:'one', 10:'ten', 11: 'eleven', 12: 'tw', 13: 'th', 14:'fo', 15:'fi', 16: 'si', 17:'se', 18:'ei', 19:'ni', 2: 'tw', 3: 'th', 4 : 'fo', 5 : 'fi', 6 : 'si', 7:'se', 8:'ei', 9:'ni'}

    let alphas = []
    let alpha = ''
    let n = ''

    for (let l = 0; l < strng.length; l++){

            if (strng[l] == '10') {
                alpha = nums[10];
                console.log(alpha)
            }
            else if (strng[l] == '11') {
                alpha = nums[11];
                console.log(alpha)
            }
            else if (strng[l] == '12') {
                alpha = nums[12];
                console.log(alpha)
            }
            else if (strng[l] == '13') {
                alpha = nums[13];
                console.log(alpha)
            }
            else if (strng[l] == '14') {
                alpha = nums[14];
                console.log(alpha)
            }
            else if (strng[l] == '15') {
                alpha = nums[15];
                console.log(alpha)
            }
            else if (strng[l] == '16') {
                alpha = nums[16];
                console.log(alpha)
            }
            else if (strng[l] == '17') {
                alpha = nums[17];
                console.log(alpha)
            }
            else if (strng[l] == '18') {
                alpha = nums[18];
                console.log(alpha)
            }
            else if (strng[l] == '19') {
                alpha = nums[19];
                console.log(alpha)
            }
            else {
                n = strng[l][0]
                alpha = nums[parseInt(n)];
            }

            alphas.push(alpha)
            alpha = []
    }
    console.log(alphas)
    //alphas = [
            // 'fi',  'si',  'se',
            // 'one', 'ni',  'si',
            // 'ei',  'one', 'ni'
            // ]

    let lst_o_lsts = []

    lst_o_lsts.push(strng);
    lst_o_lsts.push(ints);
    lst_o_lsts.push(alphas)
    lst_o_lsts.push(sums);
    console.log(lst_o_lsts);

    //<> ready to convert array of arrays to js equivalent of d3 perhaps use this:  https://d3js.org/ 
   
}
   


//     lst_o_lsts = []

//     for i in range(len(ints)):
//         sub_lst = []
//         sub_lst.append(strng[i])
//         sub_lst.append(ints[i])
//         sub_lst.append(alphas[i])
//         sub_lst.append(sums[i])
//         lst_o_lsts.append(sub_lst)
//         sub_lst = []

//     print(lst_o_lsts)

//     #lst_o_lsts:
//     #[['2000', 2000, 'tw', 2], ['10003', 10003, 'one', 4], ['1234000', 1234000, 'one', 10], ['44444444', 44444444, 'fo', 32], ['9999', 9999, 'ni', 36], ['11', 11, 'eleven', 2], ['11', 11, 'eleven', 2], ['22', 22, 'tw', 4]]

//     df = pd.DataFrame(lst_o_lsts, columns = ['str', 'ints', 'alphas', 'sums'])
    
//     df_srt = df.sort_values(by=['sums', 'alphas'])
 

//     col_list = df_srt["str"].values.tolist()

//     output = ' '.join(col_list)

//     return output



    
  

// print(order_weight("2000 10003 1234000 44444444 9999 11 11 22 123"))
// #"11 11 2000 10003 22 ***123*** 1234000 44444444 9999"
console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
// # "100 180 90 56 65 74 68 86 99"

//         # test.assert_equals(order_weight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
