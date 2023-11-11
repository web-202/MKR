function submitForm(){
    let form = document.getElementById("surveyForm");
    let elements = form.elements;
    let isValid = true;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type !== "button"){
            if (!elements[i].checkValidity()){
                elements[i].classList.add("error");
                isValid = false;
            } else {
                elements[i].classList.remove("error")
            }
        }
    }
    if (isValid){
        document.getElementById("demo").innerText = "Форма успішно відправлена!"
        document.getElementById("demo").style.color = "green";
        document.getElementById("demo").style.display = "block";
    } else {
        document.getElementById("demo").innerText = "Будь ласка, заповніть форму правильно.";
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.display = "block";
    }
}