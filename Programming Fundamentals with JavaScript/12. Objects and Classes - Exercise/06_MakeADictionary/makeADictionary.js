function makeADictanery(data){
    let dataArr = [];
    let dataObj = {};
    for (let el = 0; el < data.length; el++){
        dataArr.push(JSON.parse(data[el]));
    }
    for (let i of dataArr){
        let currentKey = Object.keys(i).join('');
        dataObj[currentKey] = Object.values(i).join('');
    }
    let currentArrOfObj = Object.entries(dataObj).sort();
    for (let j of currentArrOfObj){
        let currentKey = j[0];
        let currentValue = j[1];
        console.log(`Term: ${currentKey} => Definition: ${currentValue}`)
    }    
}
makeADictanery([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )