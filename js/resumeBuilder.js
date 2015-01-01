// header code
var name = "Renee Stokes";
var role = "Front End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Renee Stokes",
	"role" : "Front End Web Developer",
	"contactInfo" : {
		"mobile": "0481-568-843",
		"email" : "stokesrenee@gmail.com",
		"github" : "stokesrenee",
		"twitter" : "@stokesrenee",
		"location" : "Perth, Australia"
	},
	"welcomeMessage" : "Welcome to my resume online!",
	"skills" : [
		"HTML", "CSS", "JavaScript"
		],
	"bioPic" : "images/" //need to add an image in here
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo.mobile);
$("#main").append(bio.contactInfo.email);
$("#main").append(bio.contactInfo.github);
$("#main").append(bio.contactInfo.twitter);
$("#main").append(bio.contactInfo.location);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
$("#main").append(bio.bioPic);

var education = {
	"universities": [
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
	}
	]
};

var work = {
	"employer" : "Endeavour College",
	"title" : "Campus Librarian",
	"location" : "Perth, Australia",
	"dates" : "2012 - 2015"
};














