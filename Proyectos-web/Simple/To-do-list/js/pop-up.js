function popUp() {
    document.getElementById("popUpContainer").style.display = "block";
}

function closePopUp() {
    document.getElementById("popUpContainer").style.display = "none";
}


function handleInput(input) {
    const label = input.previousElementSibling;

    if (input.value.trim() === '') {
        label.style.display = 'block';
    } else {
        label.style.display = 'none';
    }
}
