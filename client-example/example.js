document.getElementById("onSend").onclick = function() {
    const textbox = document.getElementById("input-msg");
    const inputValue = textbox.value;
    
    // This array holds IP address of "safety EDS"
    const array = ["localhost:3000", "example2", "example3 ...."];
    
    if (array.includes(inputValue) == true){
        const url = inputValue + "/cat";
        $.ajax({
            type: "POST",
            url: url,
            data: { test: "test" }
        }).done(function( msg ) {
            if (msg = 'sample connection was successed!') {
                document.getElementById("result").innerHTML = "<p>[Safety EDS] Success</p>"
            }else{
                document.getElementById("result").innerHTML = "<p>[Safety EDS] Fail</p>"
            }
        })
    }
}