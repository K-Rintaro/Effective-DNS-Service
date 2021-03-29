document.getElementById("onSend").onclick = function() {
    const textbox = document.getElementById("input-msg");
    const inputValue = textbox.value;
    
    // This array holds IP address of "safety EDS"
    const array = ["localhost:3000", "example2", "example3 ...."];
    
    if (array.includes(inputValue) == true){
        document.getElementById("result").innerHTML = `
        <p class="p-result">[Safety EDS] ${inputValue}</p>
        <div class="boxContainer">
        <div class="box">
        <span class="material-icons">
        check_circle_outline
        </span>
        </div>
        <div class="box">
        <p class="bold">Your EDS Server is certified by EDS Organization</p>
        </div>
        </div>
        `
    };

    if (array.includes(inputValue) == false){
        document.getElementById("result").innerHTML = `
        <p class="p-result">[Third-Party EDS] ${inputValue}</p>
        <div class="boxContainer">
        <div class="box">
        <span class="material-icons">
        feedback
        </span>
        </div>
        <div class="box">
        <p class="bold">Your EDS Server is not certified by EDS Organization</p>
        </div>
        </div>
        `
    };
}