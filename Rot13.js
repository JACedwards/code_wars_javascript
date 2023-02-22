// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//pseudo:
//  find value for letter in dict1
//  add value for number from dict2 to string



function rot13(message){
    let output = ''
    let num = 0
    let char = ''

    let dict1 = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,
        'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,
        'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,
        'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,
        'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}
 

    let dict2 = {0 : 'Z', 1 : 'A', 2 : 'B', 3 : 'C', 4 : 'D', 5 : 'E',
            6 : 'F', 7 : 'G', 8 : 'H', 9 : 'I', 10 : 'J',
            11 : 'K', 12 : 'L', 13 : 'M', 14 : 'N', 15 : 'O',
            16 : 'P', 17 : 'Q', 18 : 'R', 19 : 'S', 20 : 'T',
            21 : 'U', 22 : 'V', 23 : 'W', 24 : 'X', 25 : 'Y'}

    for (let i = 0; i < message.length; i++){
        if (!message[i].match(/^[a-zA-Z]+$/)){
            output = `${output}${message[i]}`
        }
        else{
        
            num = dict1[message[i].toUpperCase()]
            if (num <= 12){
                char = dict2[num +13]
                if (message[i].match(/^[a-z]+$/)){
                output = `${output}${char.toLowerCase()}`
                }
                else{
                    output = `${output}${char}`
                }
            }
            else{
                char = dict2[(num-13)]
                if (message[i].match(/^[a-z]+$/)){
                    output = `${output}${char.toLowerCase()}`
                    }
                    else{
                        output = `${output}${char}`
                    }
            }
            
    }
  }
  return output
}


console.log(rot13('Test'))
                  // TRRXF SBE TRRXF







// # Python program to implement
// # ROT13 Caesar cipher
 
// '''This script uses dictionaries instead of 'chr()' & 'ord()' function'''
 
// # Dictionary to lookup the index of alphabets
// dict1 = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,
//         'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,
//         'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,
//         'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,
//         'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}
 
// # Dictionary to lookup alphabets
// # corresponding to the index after shift
// dict2 = {0 : 'Z', 1 : 'A', 2 : 'B', 3 : 'C', 4 : 'D', 5 : 'E',
//         6 : 'F', 7 : 'G', 8 : 'H', 9 : 'I', 10 : 'J',
//         11 : 'K', 12 : 'L', 13 : 'M', 14 : 'N', 15 : 'O',
//         16 : 'P', 17 : 'Q', 18 : 'R', 19 : 'S', 20 : 'T',
//         21 : 'U', 22 : 'V', 23 : 'W', 24 : 'X', 25 : 'Y'}
 
// # Function to encrypt the string
// # according to the shift provided
// def encrypt(message, shift):
//     cipher = ''
//     for letter in message:
//         # checking for space
//         if(letter != ' '):
//             # looks up the dictionary and
//             # adds the shift to the index
//             num = ( dict1[letter] + shift ) % 26
//             # looks up the second dictionary for
//             # the shifted alphabets and adds them
//             cipher += dict2[num]
//         else:
//             # adds space
//             cipher += ' '
 
//     return cipher
 
// # Function to decrypt the string
// # according to the shift provided
// def decrypt(message, shift):
//     decipher = ''
//     for letter in message:
//         # checks for space
//         if(letter != ' '):
//             # looks up the dictionary and
//             # subtracts the shift to the index
//             num = ( dict1[letter] - shift + 26) % 26
//             # looks up the second dictionary for the
//             # shifted alphabets and adds them
//             decipher += dict2[num]
//         else:
//             # adds space
//             decipher += ' '
 
//     return decipher
 
// # driver function to run the program
// def main():
//     # use 'upper()' function to convert any lowercase characters to uppercase
//     message = "GEEKS FOR GEEKS"
//     shift = 13
//     result = encrypt(message.upper(), shift)
//     print (result)
 
//     message = "TRRXF SBE TRRXF"
//     shift = 13
//     result = decrypt(message.upper(), shift)
//     print (result)
 
// # Executes the main function
// if __name__ == '__main__':
//     main()
// Output
// TRRXF SBE TRRXF
// GEEKS FOR GEEKS