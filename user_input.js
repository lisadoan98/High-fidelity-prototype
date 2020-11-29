var addDependantBtn = document.getElementById('add-dependant-btn');
var removeDependantBtn = document.getElementById('remove-dependant-btn');
var template = document.getElementById('dependant');
var dependants = document.getElementsByClassName('dependant');
var dependantsContainer = document.getElementById('dependants-container');
var dependantsNumber = 1;
localStorage.clear();

addDependantBtn.addEventListener('click', function() {
    dependantsNumber+= 1;

    var templateClone = template.cloneNode(true);
    templateClone.firstElementChild.textContent = "Dependant No." + dependantsNumber;

    dependantsContainer.insertBefore(templateClone, addDependantBtn)
});

removeDependantBtn.addEventListener('click', function() {
    if (dependantsNumber !== 1) {
        dependantsNumber-= 1;
        
        dependants[dependants.length - 1].remove()
    }
});

var dependantAgeSelectors = document.getElementsByClassName('dependant-menu');
var confirmButton = document.getElementById('user-input-confirm-btn');
var uncompletedWarning = document.getElementById('uncompleted-warning');

confirmButton.addEventListener('click', function() {
    var dependantAgeValues = [];

    for (var i = 0; i < dependantAgeSelectors.length; i++) {
        dependantAgeValues.push(dependantAgeSelectors[i].value);
    }

    if (dependantAgeValues.includes("Select age") === true) {
        uncompletedWarning.style.display = 'block';
    } else {
        sessionStorage.clear();

        for (var j = 0; j < dependantAgeValues.length; j++) {

            sessionStorage.setItem(j + 1, dependantAgeValues[j]);
        }
        localStorage.setItem("dependantsNumber", dependantsNumber);
        window.location.href = 'personalised_information.html';
    }
});