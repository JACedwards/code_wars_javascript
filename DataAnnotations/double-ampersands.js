// let data = {"ISREQUIRED": 1, 'NAME': 'TransferReceivePurpose '}

// // First solution
// required_1 = (data.ISREQUIRED === 1) && 
//            (data.NAME === "TransferReceivePurpose " || 
//             data.NAME === "TrueReceiverIntendedUseOfMGIServices")
//            ? true : false;
// console.log('solution 1', required_1)

// //Second solution
// let validNames = ["TransferReceivePurpose ", "TrueReceiverIntendedUseOfMGIServices"];
// required_2 = (data.ISREQUIRED === 1) && validNames.includes(data.NAME); 
// console.log('solution 2', required_2);

// //Third solution
// validNames = ["TransferReceivePurpose ", "TrueReceiverIntendedUseOfMGIServices"];
// required_3 = (data.ISREQUIRED === 1) && validNames.includes(data.NAME); 
// console.log('solution 3', required_3);



//Respose B

let data = {"ISREQUIRED": 1, 'NAME': 'TransferReceivePurpose '};
required = data.ISREQUIRED === 1 && (data.NAME === "TransferReceivePurpose " || data.NAME === "TrueReceiverIntendedUseOfMGIServices") ? true : false;
console.log('Response B: ', required);
