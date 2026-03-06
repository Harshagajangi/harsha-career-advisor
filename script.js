function careerResult() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;

  let result = "";

  if (q1 == "tech") result = "Best Career: Software Engineer / AI Engineer";
  else if (q2 == "medical") result = "Best Career: Doctor / Healthcare";
  else if (q3 == "defence") result = "Best Career: Defence Services";
  else result = "Best Career: Business / Management";

  document.getElementById("result").innerHTML = result;
}
