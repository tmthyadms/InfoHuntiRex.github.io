function groupCheck() {
  var select_group = document.getElementById("select-group");
  var group = select_group.options[select_group.selectedIndex].text;

  if (select_group.selectedIndex === 0)
    return false
  else
    return true
}

function q1Check() {
  var q1 = document.getElementById("q1-r4");

  if (q1.checked)
    return true;
  else
    return false;
}
function q2Check() {
  var q2_c1 = document.getElementById("q2-c1");
  var q2_c2 = document.getElementById("q2-c2");

  if (q2_c1.checked && q2_c2.checked)
    return true;
  else
    return false;
}

function q3Check() {
  var q3_c1 = document.getElementById("q3-c1");
  var q3_c4 = document.getElementById("q3-c4");

  if (q3_c1.checked && q3_c4.checked)
    return true;
  else
    return false;
}

function q4Check() { 
  var q4 = document.getElementById("q4-r4");

  if (q4.checked)
    return true;
  else
    return false;
}

function q5Check() {
  var q5 = document.getElementById("q5-r1");

  if (q5.checked)
    return true;
  else
    return false;
}

function q6Check() {
  var q6 = document.getElementById("q6-r1");
  
  if (q6.checked)
    return true;
  else
    return false;
}

function q7Check() {
  var q7 = document.getElementById("q7-r1");

  if (q7.checked)
    return true;
  else
    return false;
}

function q8Check() {
  var select_q8 = document.getElementById("q8");
  var q8 = select_q8.options[select_q8.selectedIndex].value;

  if (q8 === "ans")
    return true;
  else
    return false;
}

function q9Check() {
  var q9 = document.getElementById("q9-r2");

  if (q9.checked)
    return true;
  else
    return false;
}

function q10Check() {
  var q10_c2 = document.getElementById("q10-c2");
  var q10_c4 = document.getElementById("q10-c4");

  if (q10_c2.checked && q10_c4.checked)
    return true;
  else
    return false;
}

function listWrong() {
  var wrongQues = "";

  if (!q1Check())
    wrongQues += "Q1 ";

  if (!q2Check())
    wrongQues += "Q2 ";

  if (!q3Check())
    wrongQues += "Q3 ";

  if (!q4Check())
    wrongQues += "Q4 ";

  if (!q5Check())
    wrongQues += "Q5 ";

  if (!q6Check())
    wrongQues += "Q6 ";

  if (!q7Check())
    wrongQues += "Q7 ";

  if (!q8Check())
    wrongQues += "Q8 ";

  if (!q9Check())
    wrongQues += "Q9 ";

  if (!q10Check())
    wrongQues += "Q10 ";

  return wrongQues;
}

function groupMessage(group) {
  var message = "";

  if (group === "Group 1")
    message = "1";
  else if (group === "Group 2")
    message = "2";
  else if (group === "Group 3")
    message = "3";
  else if (group === "Group 4")
    message = "4";
  else if (group === "Group 5")
    message = "5";
  else if (group === "Group 6")
    message = "6";

  return message;
}

var form = document.getElementById("frm");
var div_modal = document.getElementById("div-modal");
var i_passed = document.getElementById("i-passed");
var i_failed = document.getElementById("i-failed");
var head_status = document.getElementById("head-status");
var par_desc = document.getElementById("par-desc");
var btn_okay = document.getElementById("btn-okay");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  div_modal.style.display = "block";

  if (groupCheck() && q1Check() && q2Check() && q3Check() && q4Check() && q5Check() && q6Check() && q7Check() && q8Check() && q9Check() && q10Check()) {
    var select_group = document.getElementById("select-group");
    var group = select_group.options[select_group.selectedIndex].text;

    i_passed.style.display = "block";
    head_status.innerHTML = "Congratulations!";
    par_desc.innerHTML = 
      group +
      ", you may proceed to " +
      "the booth with the title of Office Management System (OMS) for Optometric Pratice.";
      // groupMessage(group) + ".";
  } else {
    i_failed.style.display = "block";
    head_status.innerHTML = "Unfortunate!";
    par_desc.innerHTML = 
      "Below are the wrong attempts: <br>" + 
      listWrong();
  }
});

btn_okay.addEventListener("click", () => {
  // window.location.reload();
  window.location.href = window.location.href.split('#')[0];
});
