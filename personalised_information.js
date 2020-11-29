var dependantAges = {
    1: {
        title: "Infant (0 - 1)",
        name: "infant",
        info: "Dependants who are Infants (0 - 1) will not be able to converse and gather information for themselves. However, they will notice a significant change in routine or if you are highly stressed or anxious during this time (Emerging Minds, 2020). It is important as a responsible adult that you try to focus on your infant and their needs as well as your own mental health.",
    },
    2: {
        title: "Toddler (1 - 3)",
        name: "toddler",
        info: "Dependants who are in the Toddler (1 - 3) bracket are beginning to develop emotionally and will be feeling emotions such as frustration, anger, guilt and shame (Raising Children, 2020). Toddlers are also developing their thinking and are beginning to understand various concepts like opposites (Raising Children, 2020). Dependants at this age are able to follow simple instructions and this can be used when discussing COVID-19 with your Toddler.",
    },
    3: {
        title: "Preschooler (3 - 5)",
        name: "preschooler",
        info: "Dependants in the Preschool (3 - 5) bracket are learning their independence. Reading to your dependant and encouraging language skills through using full sentences are integral to this phase of development  (Centers for Disease Control and Prevention, 2020). A Preschooler will begin to question the world around them and may come to you with lots of questions about the current pandemic.",
    },
    4: {
        title: "Middle Childhood (6 - 11)",
        name: "middle childhood",
        info: "Dependants in Middle Childhood (6 - 11) are commonly exposed to many sources of information through interactions with the community and those around them. Those in middle childhood begin to have concern for others and think about the future (Centers for Disease Control and Prevention, 2020). Dependants of this age bracket may experience increased anxiety and stress during the pandemic. It is important that you are reassuring and answering their questions when discussing COVID-19 with your dependant.",
    },
    5: {
        title: "Young Teen (12 - 14)",
        name: "young teen",
        info: "Dependants in the Young Teen (12 - 14) bracket are experiencing physical, mental, emotional and social changes. These changes can affect their confidence and mood (Centers for Disease Control and Prevention, 2020). It is important that you are honest and direct with your dependent about various topics, but you also encourage them to make their own choices and decisions. Whilst discussing COVID-19, be respectful of their thoughts, concerns and emotions that may arise due to the pandemic.",
    },
    6: {
        title: "Teenager (15 - 17)",
        name: "teenager",
        info: "Dependants in the Teenager bracket (15 - 17) are more likely to judge the information they encounter themselves. Often, they will form their own opinion before talking to you. Dependants in this age bracket will spend more time with their friends rather than their responsible adult (Centers for Disease Control and Prevention, 2020). However, it is important that you talk with your teens and you develop solutions to problems together.",
    }
}

var personalisedContentContainer = document.getElementById('personalised-age-info');
var personalisedContent = [];

for (var i = 0; i < sessionStorage.length; i++) {
    if (!personalisedContent.includes(sessionStorage[i + 1])) {
        personalisedContent.push(sessionStorage[i + 1]);
    }
}

personalisedContent.sort();

var numberOfDependants = document.getElementById('number-of-dependants');
var dependantsAgeCateogory = document.getElementById('dependants-categories');

var dependantsAgeCateogoryText = [];

for (var j = 0; j < personalisedContent.length; j++) {
    if (personalisedContent.length > 1) {
        if (j + 2 === personalisedContent.length) {
            dependantsAgeCateogoryText.push(dependantAges[personalisedContent[j]].name);
            dependantsAgeCateogoryText.push(" and ");
        } else {
            if (j + 1 < personalisedContent.length) {
                dependantsAgeCateogoryText.push(dependantAges[personalisedContent[j]].name);
                dependantsAgeCateogoryText.push(", ");
            } else {
                dependantsAgeCateogoryText.push(dependantAges[personalisedContent[j]].name);
            }
        }
    } else {
        dependantsAgeCateogoryText.push(dependantAges[personalisedContent[j]].name);
    }

    var content = document.createElement('div');
    content.innerHTML = "<h3 class='personalised-dependant-age-title'>" + dependantAges[personalisedContent[j]].title + "</h3><p class='personalised-dependant-age-info'>" + dependantAges[personalisedContent[j]].info + "</p>";
    personalisedContentContainer.appendChild(content);
}

numberOfDependants.textContent =  localStorage.getItem("dependantsNumber") + " dependant/s"
dependantsAgeCateogory.textContent = dependantsAgeCateogoryText.join("");
