const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const inputType = document.getElementById("inputType").value;
  const vaildPopSucess = document.querySelector(".sucess");
  const notVaildSucess = document.querySelector(".not-sucess");
  const btnReset = document.getElementById("btnReset");
  const validAge = 18;

  if (inputType == "") {
    alert("Enter your age");
    return;
  }

  const age = parseInt(inputType)

  if (age < 0 || age > 100) {
    alert("Please enter a valid age between 0 and 100.");
    return;
    // console.log("You are Eligible")
 
  }
  
  if(age > validAge){
    vaildPopSucess.style.display = "block";
    notVaildSucess.style.display = "none";
  }else {
    // console.log("you are NOT Eligible")
    notVaildSucess.style.display = "block";
    vaildPopSucess.style.display = "none";
  }

  if (inputType == "") {
    vaildPopSucess.style.display = "none";
    notVaildSucess.style.display = "none";
  }

  btnReset.addEventListener("click", () => {
    location.reload();
  });
});
