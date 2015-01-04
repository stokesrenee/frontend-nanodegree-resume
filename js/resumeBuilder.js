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
    "school": [
        {
            "name" : "Inspire Education",
            "location" : "Perth, Australia",
            "degree" : "Certificate IV in Training and Assessment",
            "dates" : "2014",
            "url" : "http://www.inspireeducation.net.au"
        },
        {
            "name" : "Curtin University",
            "location" : "Perth, Australia",
            "degree" : "Graduate Diploma",
            "majors" : "Information Science",
            "dates" : "2011-2012",
            "url" : "http://www.curtin.edu.au"
        },
        {
            "name" : "Wellington College of Education",
            "location" : "Wellington, New Zealand",
            "degree" : "Graduate Diploma",
            "majors" : "Teaching (Primary)",
            "dates" : "2003",
            "url" : "http://www.victoria.ac.nz/education"
        },
        {
            "name" : "Murdoch University",
            "location" : "Perth, Australia",
            "degree" : "Bachelor of Arts",
            "majors" : [
                "Psychology", " Education"
            ],
            "dates" : "1995-1998",
            "url" : "http://www.murdoch.edu.au"
        }
    ],
    "onlineCourses": [
        {
            "title" : "Front End Developer NanoDegree",
            "school" : "Udacity",
            "dates" : 2015,
            "url" : "http://www.udacity.com"
        },
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/cs101"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/ud304"
        },
        {
            "title": "Version Control with Git and GitHub",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/ud775"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/ud804"
        }
    ]
};

function displayEducation () {
    for (school in education.school) {
        $("#education").append(HTMLschoolStart);

var formattedName = HTMLschoolName.replace("%data%", education.school[school].name);
var formattedDates = HTMLschoolDates.replace("%data%", education.school[school].dates);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[school].location);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[school].degree);
var formattedMajors = HTMLschoolMajor.replace("%data%", education.school[school].majors);


$(".education-entry:last").append(formattedName + formattedDegree);
$(".education-entry:last").append(formattedDates);
$(".education-entry:last").append(formattedLocation);
$(".education-entry:last").append(formattedMajors);
    }
}

displayEducation ();

function displayOnlineCourses () {
	for (course in education.onlineCourses) {

var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

$(".education-entry:last").append(formattedTitle + formattedSchool);
$(".education-entry:last").append(formattedDates);
$(".education-entry:last").append(formattedURL);
$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
    }
}

	displayOnlineCourses ();

var work = {
    "jobs" : [
        {
            "employer" : "Endeavour College",
            "title" : "Campus Librarian",
            "location" : "Perth, Australia",
            "dates" : "2012 - 2015",
            "description" : "I am currently managing the Perth branch of the Endeavour College Library."
        },
        {
            "employer" : "Westbooks Library Services",
            "title" : "Cataloguer",
            "location" : "Perth, Australia",
            "dates" : "2011 - 2015",
            "description" : "Creating catalogue records for resources acquired by the State Library of Western Australia."
        },
        {
            "employer" : "Suzuka Language School",
            "title" : "English Teacher",
            "location" : "Suzuka, Japan",
            "dates" : "2008 - 2011",
            "description" : "Teaching Japanese students of all ages to speak, read and write English."
        },
        {
            "employer" : "Perth International Business College",
            "title" : "English Teacher",
            "location" : "Perth, Australia",
            "dates" : "2007 - 2008",
            "description" : "Teaching international students of all ages to speak, read and write English so that they can pass an exam to enter an Australian university."
        },
        {
            "employer" : "Theresiunum Catholic College",
            "title" : "English Teacher",
            "location" : "Eisenstadt, Austria",
            "dates" : "2005 - 2007",
            "description" : "Teaching Austrian highschool students to speak, read and write English so that they can pass an exam to enter university."
        },
        {
            "employer" : "Wellington Council",
            "title" : "Swimming Teacher",
            "location" : "Wellington, New Zealand",
            "dates" : "2003",
            "description" : "During my studies, I coached children in the skills of swimming."
        }
    ]
};

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);

    }
	return locationArray;
}

console.log(locationizer(work));

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


$("#main").append(internationalizeButton);
var inName = function(_name) {
    var splitName = _name.split(" ");
    var firstName = splitName[0][0].toUpperCase() + splitName[0].slice(1);
    var lastName = splitName[1].toUpperCase();
    var internationalName = firstName + " " + lastName;
    return internationalName;
};


