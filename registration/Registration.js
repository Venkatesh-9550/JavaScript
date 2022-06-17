var form = document.getElementById("myform");

function getData(event) 
{
  
  event.preventDefault();


  var fname = document.myform.fname.value;
  var lname = document.myform.lname.value;
  var pass1 = document.myform.password1.value;
  var pass2 = document.myform.password2.value;
  var email = document.myform.email.value;
  var gen = document.myform.Gender.value;
  var interests = new Array();
  var checkboxes = document.getElementsByName("Interests");
  for (var box of checkboxes) 
  {
    if (box.checked) 
    {
      interests.push(box.value);
    }
  }

  var sub = document.myform.subscription.value;
  var msg = document.myform.message.value;

  var data = new Object();

  data.firstname = fname;
  data.lastname = lname;
  data.password1 = pass1;
  data.password2 = pass2;
  data.email = email;
  data.Gender = gen;
  data.interests = interests;
  data.subscription = sub;
  data.message = msg;

  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");

  if (fname == null || fname == "") 
  {
    alert("Please enter your FirstName");
  }
  else if (lname == null || lname == "") 
  {
    alert("Please enter your LastName");
  }
  else if (!email) 
  {
    alert("Please enter email Address");
  }
  else if (pass1.length < 6 || pass2.length < 6) 
  {
    alert("Password must be at least 6 characters long.");
  }
  else if (pass1 !== pass2) 
  {
    alert("Password does not match");
  }
  else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) 
  {
    alert("Please enter a valid email address")
  }

  else if (msg == null || msg == "") 
  {
    alert("please enter message");
  }

  console.log(data);

  
}

form.addEventListener("submit", getData);


