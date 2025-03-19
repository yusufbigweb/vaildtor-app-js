const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    const inputType = document.getElementById("inputType").value;
    const vaildPopSucess = document.querySelector('.sucess')
    const notVaildSucess = document.querySelector('.not-sucess')
    const btnReset = document.getElementById('btnReset')
    const validAge = 19;

    if (inputType == "") {
        alert("Enter your age");
    }

    if (validAge <= inputType) {
        // console.log("You are Eligible")
        vaildPopSucess.style.display = "block";
        notVaildSucess.style.display = "none"
    } else {
        // console.log("you are NOT Eligible")
        notVaildSucess.style.display = "block"
        vaildPopSucess.style.display = "none"
    }

    if (inputType == "") {
        vaildPopSucess.style.display = "none"
        notVaildSucess.style.display = "none"
    }

    btnReset.addEventListener('click', () => {
        location.reload()
    })

});