document.onreadystatechange = function () {

    if (document.readyState === "interactive") {

        var tempScrollTop = $(window).scrollTop();
    console.log("Scroll from Top: " + tempScrollTop.toString());

        button = document.querySelector("#button_top");

        button.onclick = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        };

        window.onscroll = function() {

            if(document.documentElement.scrollTop === 0 || document.body.scrollTop === 0){

                button.style.visibility="hidden";
                
            }
            else{
                button.style.visibility="visible";
            }
        }

        
    }

   
};