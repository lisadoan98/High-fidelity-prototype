var infantInfo = document.getElementById('tips-examples-infant');
var toddlerInfo = document.getElementById('tips-examples-toddler');
var preschoolerInfo = document.getElementById('tips-examples-preschooler');
var middleChildhoodInfo = document.getElementById('tips-examples-middle-childhood');
var youngTeenInfo = document.getElementById('tips-examples-young-teen');
var teenagerInfo = document.getElementById('tips-examples-teenager');

var dependantAgeInfo = [];

for (var i = 0; i < sessionStorage.length; i++) {
    dependantAgeInfo.push(sessionStorage[i + 1]);
}

for (var j = 0; j < dependantAgeInfo.length; j++) {
    switch(dependantAgeInfo[j]) {
        case "1": displayContent(infantInfo);
        break;
        case "2": displayContent(toddlerInfo);
        break;
        case "3": displayContent(preschoolerInfo);
        break;
        case "4": displayContent(middleChildhoodInfo);
        break;
        case "5": displayContent(youngTeenInfo);
        break;
        case "6": displayContent(teenagerInfo);
    }
}

function displayContent(dependantAge) {
    dependantAge.style.display = 'block';
}