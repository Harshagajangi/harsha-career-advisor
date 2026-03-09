
const careers=[

{name:"Software Engineer",category:"tech"},
{name:"AI Engineer",category:"tech"},
{name:"Data Scientist",category:"tech"},
{name:"Cyber Security Analyst",category:"tech"},
{name:"Web Developer",category:"tech"},
{name:"Cloud Engineer",category:"tech"},

{name:"IAS Officer",category:"govt"},
{name:"IPS Officer",category:"govt"},
{name:"Bank PO",category:"govt"},
{name:"SSC Officer",category:"govt"},
{name:"Railway Officer",category:"govt"},

{name:"Army Officer",category:"defence"},
{name:"Navy Officer",category:"defence"},
{name:"Air Force Pilot",category:"defence"},
{name:"CDS Officer",category:"defence"},
{name:"Intelligence Officer",category:"defence"},

{name:"Entrepreneur",category:"business"},
{name:"Business Analyst",category:"business"},
{name:"Startup Founder",category:"business"},
{name:"Marketing Manager",category:"business"}

];



function loadCareers(){

let container=document.getElementById("careerList");

container.innerHTML="";

careers.forEach(career=>{

let card=document.createElement("div");

card.className="card";

card.innerHTML="<h3>"+career.name+"</h3><p>"+career.category+"</p>";

container.appendChild(card);

});

}

loadCareers();



function filterCareers(){

let filter=document.getElementById("careerFilter").value;

let container=document.getElementById("careerList");

container.innerHTML="";

careers.forEach(career=>{

if(filter==="all"||career.category===filter){

let card=document.createElement("div");

card.className="card";

card.innerHTML="<h3>"+career.name+"</h3><p>"+career.category+"</p>";

container.appendChild(card);

}

});

}



function recommendCareer(){

let interest=document.getElementById("interest").value;

let suggestion="";

if(interest==="tech")

suggestion="Recommended: Software Engineer / AI Engineer / Data Scientist";

else if(interest==="govt")

suggestion="Recommended: IAS / IPS / Banking / SSC";

else if(interest==="defence")

suggestion="Recommended: Army Officer / Navy Officer / Air Force Pilot";

else

suggestion="Recommended: Entrepreneur / Business Manager";

document.getElementById("aiResult").innerHTML=suggestion;

}



function downloadPDF(){

let text=document.getElementById("aiResult").innerText;

let blob=new Blob([text],{type:"application/pdf"});

let link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="career_report.pdf";

link.click();

}
