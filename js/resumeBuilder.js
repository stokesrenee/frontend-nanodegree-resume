// header code
var name = "Renee Stokes";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Renee Stokes",
    "role" : "Front End Web Developer",
    "contactInfo" : {
        "mobile" : "0481568843",
        "email" : "stokesrenee@gmail.com",
        "github" : "stokesrenee",
        "twitter" : "@stokesrenee",
        "location" : "Perth, Australia"
    },
    "welcomeMessage" : "Welcome to my resume online!",
    "skills" : [
        "HTML", "CSS", "JavaScript"
    ],
    "bioPic" : "images/biopic.jpg"
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedTwitter);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedBioPic);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    }

var education = {
    "schools": [
        {
            "name" : "Murdoch University",
            "location" : "Perth, Australia",
            "degree" : "Bachelor of Arts",
            "majors" : [
                "Psychology", "Education"
            ],
            "dates" : "1998",
            "url" : "http://www.murdoch.edu.au"
        },
        {
            "name" : "Curtin University",
            "location" : "Perth, Australia",
            "degree" : "Graduate Diploma",
            "majors" : "Information Science",
            "dates" : "2012",
            "url" : "http://www.curtin.edu.au"
        }
    ],
    "onlineCourses": [
        {
            "title" : "Front End Developer NanoDegree",
            "courseProvider" : "Udacity",
            "dates" : 2015,
            "url" : "http://www.udacity.com"
        },
    ],
};

var formattedName = HTMLschoolName.replace("%data%", education.schools.name);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools.majors);
var formattedDates = HTMLschoolDates.replace("%data%", education.schools.dates);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedName);
$("#education").append(formattedLocation);
$("#education").append(formattedDegree);
$("#education").append(formattedMajors);
$("#education").append(formattedDates);

var work = {
    "jobs" : [
        {
        "employer" : "Endeavour College",
        "title" : "Campus Librarian",
        "location" : "Perth, Australia",
        "dates" : "2012 - 2015",
        "description" : "I am currently managing the Perth branch of the Endeavour College Library"
        },
    ],
};

function displayWork () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        }
}

displayWork ();
