document.onreadystatechange = function () {

    if (document.readyState === "interactive") {

        button = document.querySelector("#button_top");

        button.onclick = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            console.log("test");
        };

        
    }

   
};