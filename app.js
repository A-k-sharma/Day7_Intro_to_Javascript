var si=function(){
{
	var a=prompt("Enter amount");
	var r=prompt("Enter rate");
	var t=prompt("Enter time");
	var si=((a*r*t)/100);
	alert("Simple Intrest="+si);
	

	//<button onclick="si">CHECK PALINDROME</button>
	//<button onclick="si">AREA OF CIRCLE</button>
}};
var palin=function() {
  'use strict';
  var str= prompt("Please enter string");
  var splitstring = str.split("");
  var reversearray = splitstring.reverse();
  var joinarray = reversearray.join("");
  if (str==joinarray)
  {
  	alert("It is a Palindrome");
  }
  else
  {
  	alert("Not a Palindrome");
  }
};
var area=function()
{
  var radius=prompt("Please enter radius");
  var area=(3.14*radius*radius);
  alert("Area="+area);
};



var empl=function()
{
	var em=
	[
		{
			Name:"Ashu",
			Age:"18",
			Salary:"100000",
			Dob:"20/10/1998"
		}
	]


	var i=0;
	var o=confirm("Want to enter data");

	while(o)
	{
		em[i].Name=prompt("Name");
		em[i].Age=prompt("Age");
		em[i].Salary=prompt("Salary");
		em[i].Dob=prompt("Dob");
		i=i+1;
		o=confirm("Want to enter data");
	}
	var j;
	for(j=0;j<i;j++ ){
		if(em[j].Salary>5000)
		{
			console.log("Name:"+em[j].Name,"Age:"+em[j].Age,"Salary:"+em[j].Salary,"Dob:"+em[j].Dob);
		}
	}
	for(j=0;j<i;j++)
	{
		if((em[j].Salary<1000) && (em[j].Age>20))
		{
			em[j].Salary=em[j].Salary+(0.05*em[j].Salary);
		}
	}
	console.log(em);

	var old=0;
	var young=0;

	for(j=0;j<i;j++)
	{
		if(em[j].Age>35)
		{
			old=old+1;
		}
		else if((em[j].Age!=0)&&(em[j].Age<35))
		{
			young=young+1;
		}

	}
	console.log("old="+old,"young="+young);
}



var obj = function()
{
	function copy(src) 
	{
	  return Object.assign({}, src);
	}
	var source = {a:prompt(" First_name"), b:prompt("Last_name")};
	var target = copy(source);
	console.log(target); 
	source.a = 'hlo';
	console.log(source);
	console.log(target); 


} 

