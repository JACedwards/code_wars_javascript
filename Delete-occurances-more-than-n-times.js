// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//Pseudo:
//Create set of arr 
//nested loops:
//  for each number in set,
//   loop through original arr
//   counting how many times num has appeared
//  when reach n times, stop pushing that number to output.


function deleteNth(arr,n){
    
    let set = [...new Set(arr)];

    let unique_array = Array.from(set);
    // console.log(unique_array)
    let j = 0
    let output = []
    let count= 0
    let too_many = []
    let how_many = 0
    let number = 0
    for (let i = 0;i< unique_array.length; i++){
        how_many = (array, item) => {
            return array.filter((b) => b == item).length;
        }
        number = how_many(arr, unique_array[i] )
        if (number > n){
            too_many.push(unique_array[i])
        }
    }

    let k = 0 
    for (let j = 0; j < too_many.length; j++){
        console.log(j)
        for (let k = 0; k < arr.length; k++){
            console.log(k)
            if (too_many[j] == arr[k]){
                count +=1
                if (count <= n){
                    output.push(arr[k])
                }
                else{
                    continue
                }
            }
                
            else{
                output.push(arr[k])
            }

        }
        console.log(output)
        arr = output;
        output = []
        count = 0
           
    }
    return arr
}



// console.log(deleteNth([20,37,20,21],1)) //[20,37,21]
console.log(deleteNth([1,2,3,1,2,1,2,3],2)) //[1,2,3,1,2]

