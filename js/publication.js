
var publicationContent = [{
	"title"  : "Conference",
	"content" : [{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	},
	{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	},
	{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	},
	{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	}]
},
{
	"title"  : "Conference",
	"content" : [{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	},
	{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	},
	{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	},
	{
		"national_international" : "National",
		"title_of_the_paper" : "Tribological behavior of aluminum matrix (aa6161), zro2 and c reinforced hybrid composite materials",
		"name_of_the_conference" : "National Conference on Recent Advances in Manufacturing, Design and Thermal Engineering (RAMDTE 2019)",
		"organizing_institute" : "Sri Ramakrishn a Institute of Technology, Coimbatore",
		"date" : "22.03.2019",
		"area_of_publication" : "Materials ",
		"co_authour" : "r.venkatesan radha krishnan p.muthu pandi m.pal muthu"
	}]
}];

function loadCard()
{
	var html = "";
	for (var i = 0; i < publicationContent.length;i++) {

		html += '<br>';
		html += '<h5 align="center">' + publicationContent[i].title + '</h5>';
		html += "<hr>";
		html += '<div class="mx-4">';
		html += '<div id="publicationCard" class="row row-cols-1 row-cols-md-3">';
		
		
		for (var j = 0; j < publicationContent[i].content.length;j++) {
			
			html += '<div class="col mb-4">';
		    html += '<div class="shadow card h-100">';
		    html += '<div class="card-body">';
		    html += '<h6 class="card-title"> <strong>National / International : </strong>' + publicationContent[i].content[j].national_international + '</h6>';
		    html += '<h6 class="card-title"> <strong>Date : </strong>' + publicationContent[i].content[j].date + '</h6>';
		    html += '<h6 class="card-title"> <strong>Title of the paper : </strong>' + publicationContent[i].content[j].title_of_the_paper + '</h6>';
		    html += '<h6 class="card-title"> <strong>Organizing institute : </strong>' + publicationContent[i].content[j].organizing_institute + '</h6>';
		    html += '<h6 class="card-title"> <strong>Area of publication : </strong>' + publicationContent[i].content[j].area_of_publication + '</h6>';
		    html += '<h6 class="card-title"> <strong>Co authour : </strong>' + publicationContent[i].content[j].co_authour + '</h6>';
		    html += '<p class="card-text"> <strong>Name of the conference : </strong>' + publicationContent[i].content[j].name_of_the_conference + '</p>';
		    html += '</div>';
		    html += '</div>';
		    html += '</div>';
		}

		html += '</div></div>';
	}
	return html;
}

$(document).ready(function(){
	$("#base").append(loadCard());
});
