
var publicationContent = [{
	"title"  : "Conference",
	"content" : [{
		"national/international" : "",
		"title_of_the_paper" : "",
		"name_of_the_conference" : "",
		"organizing_institute" : "",
		"date" : "",
		"area_of_publication" : "",
		"co_authour" : ""
	}]
}];

function loadCard()
{
	var html = "";
	html += '<div class="col mb-4">';
    html += '<div class="shadow card h-100">';
    html += '<div class="card-body">';
    html += '<h5 class="card-title">Title</h5>';
    html += '<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
	return html;
}

$(document).ready(function(){
	$("#publicationCard").append(loadCard());
});
