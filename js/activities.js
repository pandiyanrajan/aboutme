
var trainingAttended = {
	"title"  : "Attended training activites",
	"content" : [{
		"duration" : "July to Oct 2018",
		"name_of_the_program" : "Engineering Metrology",
		"organizing_institute_industry" : "NPTEL- AICTE",
		"participant_resource_person" : "Participant",
		"date" : "July to Oct 2018",
		"venue" : "KLNCE"
	},
	{
		"duration" : "1 day",
		"name_of_the_program" : "Outcome Based  education (OBE) – National Accreditation",
		"organizing_institute_industry" : "ISTE staff chapter- KLNCE",
		"participant_resource_person" : "Participant",
		"date" : "13.01.2018",
		"venue" : "KLNCE"
	},
	{
		"duration" : "2 days",
		"name_of_the_program" : "FDP in Ansys CFD",
		"organizing_institute_industry" : "Ansys software PVT. LTD",
		"participant_resource_person" : "Participant",
		"date" : "03.03.2017 & 04.03.2017",
		"venue" : "KLNCE"
	},
	{
		"duration" : "1 Week",
		"name_of_the_program" : "Design and analysis of mechanical system (DAMS)",
		"organizing_institute_industry" : "TEQIP Phase  II",
		"participant_resource_person" : "Participant",
		"date" : "19.12.2016 - 24.12.2016",
		"venue" : "National Institute of Technology, Tiruchirappalli"
	},
	{
		"duration" : "5 days",
		"name_of_the_program" : "Autodesk AUTOCAD",
		"organizing_institute_industry" : "ICTACT academy Madurai",
		"participant_resource_person" : "Participant",
		"date" : "13.06.2016 - 17.06.2016",
		"venue" : "KLNCE-CAD Lab"
	},
	{
		"duration" : "1 day",
		"name_of_the_program" : "Intellectual property rights and innovations",
		"organizing_institute_industry" : "KLNCE - Madurai",
		"participant_resource_person" : "Participant",
		"date" : "04.03.2016",
		"venue" : "QC-ARD KLNCE"
	},
	{
		"duration" : "1 day",
		"name_of_the_program" : "The essential traits of teaching methodologies",
		"organizing_institute_industry" : "KLNCE - Madurai",
		"participant_resource_person" : "Participant",
		"date" : "13.08.2015",
		"venue" : "IBM seminar hall – KLNCE"
	},
	{
		"duration" : "1 day",
		"name_of_the_program" : "The Essential Traits of Teaching Methodologies",
		"organizing_institute_industry" : "IBS Business School",
		"participant_resource_person" : "Participant",
		"date" : "28.07.2015",
		"venue" : "Hotel North Gate"
	},
	{
		"duration" : "20 days",
		"name_of_the_program" : "Modern teaching methodology in engineering and technology &ISO / NBA Formats",
		"organizing_institute_industry" : "Latha mathavan engineering college madurai",
		"participant_resource_person" : "Participant",
		"date" : "08.06.2012 - 27.06.2012",
		"venue" : "Latha mathavan engineering college - Madurai"
	}]
};

var trainingOrganized = {
	"title"  : "Organized training activites",
	"content" : [{
		"name_of_the_program" : "FDP \"Product Design Engineering\" ",
		"duration" : "26.04.2018  - 28.04.2018",
		"venue" : "--",
		"Sponsored_self_supported" : "Sponsored",
		"sponser_name" : "--",
		"sponser_agency" : "ICT ACADEMY"
	},
	{
		"name_of_the_program" : "Value added course on Autodesk Certified Professional : AutoCAD",
		"duration" : "05.06.2017 - 17.06.2017",
		"venue" : "--",
		"Sponsored_self_supported" : "Sponsored",
		"sponser_name" : "--",
		"sponser_agency" : "ICT ACADEMY"
	},
	{
		"name_of_the_program" : "Innovation, Technology and Knowledge Economy",
		"duration" : "17.03.2017 & 18.03.2017",
		"venue" : "--",
		"Sponsored_self_supported" : "Sponsored",
		"sponser_name" : "All India Seminar",
		"sponser_agency" : "IEI- TNSC Students"
	}]
};

function loadAttended()
{
	var html = "";

	html += '<br>';
	html += '<h5 align="center">' + trainingAttended.title + '</h5>';
	html += "<hr class='col-3'>";
	html += '<div class="mx-4">';
	html += '<div id="attended" class="row row-cols-1 row-cols-md-2">';
	
	var content  = trainingAttended.content;
	for (var j = 0; j < content.length;j++) {
		
		html += '<div class="col mb-4">';
	    html += '<div class="shadow card h-100">';
	    html += '<div class="card-body">';
	    html += '<h6 class="card-title"> <strong>Name of the program : </strong>' + content[j].name_of_the_program + '</h6>';
	    html += '<h6 class="card-title"> <strong>Duration : </strong>' + content[j].duration + '</h6>';
	    html += '<h6 class="card-text"> <strong>Organizing institute / industry : </strong>' + content[j].organizing_institute_industry + '</h6>';
	    html += '<h6 class="card-text"> <strong>Participant / Resource person : </strong>' + content[j].participant_resource_person + '</h6>';
	    html += '<h6 class="card-text"> <strong>Date : </strong>' + content[j].date + '</h6>';
	    html += '<p class="card-text"> <strong>Venue : </strong>' + content[j].venue + '</p>';
	    html += '</div>';
	    html += '</div>';
	    html += '</div>';
	}

	html += '</div></div>';
	return html;
 }

function loadOrganized()
{
	var html = "";

	html += '<br>';
	html += '<h5 align="center">' + trainingOrganized.title + '</h5>';
	html += "<hr class='col-3'>";
	html += '<div class="mx-4">';
	html += '<div id="publicationCard" class="row row-cols-1 row-cols-md-2">';
	
	var content = trainingOrganized.content;
	for (var j = 0; j < content.length;j++) {
		
		html += '<div class="col mb-4">';
	    html += '<div class="shadow card h-100">';
	    html += '<div class="card-body">';
	    html += '<h6 class="card-title"> <strong>Name of the program : </strong>' + content[j].name_of_the_program + '</h6>';
	    html += '<h6 class="card-title"> <strong>Duration : </strong>' + content[j].duration + '</h6>';
	    html += '<h6 class="card-text"> <strong>Sponsored / Self supported : </strong>' + content[j].Sponsored_self_supported + '</h6>';
	    html += '<p class="card-text"> <strong>Venue : </strong>' + content[j].venue + '</p>';
	    html += '<p class="card-text"> <strong>Sponser name : </strong>' + content[j].sponser_name + '</p>';
	    html += '<p class="card-text"> <strong>Sponser agency : </strong>' + content[j].sponser_agency + '</p>';
	    html += '</div>';
	    html += '</div>';
	    html += '</div>';
	}

	html += '</div></div>';
	return html;
}


function loadTabs() {
	
	var html = '<br><nav align="center" class="nav nav-pills justify-content-center">';
  	html += '<div class="nav nav-tabs" id="nav-tab" role="tablist">';
    html += '<a class="nav-item nav-link active" id="nav-attended-tab" data-toggle="tab" href="#nav-attended" role="tab" aria-controls="nav-attended" aria-selected="true">Attended</a>';
    html += '<a class="nav-item nav-link" id="nav-organized-tab" data-toggle="tab" href="#nav-organized" role="tab" aria-controls="nav-organized" aria-selected="false">Organized</a>';
  	html += '</div>';
	html += '</nav>';
	html += '<div class="tab-content" id="nav-tabContent">';
  	html += '<div class="tab-pane fade show active" id="nav-attended" role="tabpanel" aria-labelledby="nav-attended-tab">...</div>';
  	html += '<div class="tab-pane fade" id="nav-organized" role="tabpanel" aria-labelledby="nav-organized-tab">...</div>';
	html += '</div>';

	return html;
}
$(document).ready(function(){
	$("#base").append(loadTabs());
	$("#nav-attended").html(loadAttended());
	$("#nav-organized").html(loadOrganized());
});
