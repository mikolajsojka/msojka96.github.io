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

            if(document.documentElement.scrollTop || document.body.scrollTop ){
                button.style.visibility="visible";
            }
            else{
                button.style.visibility="hidden";
            }

        }

            initMap = function() {
            
            var rewa = {lat: 54.630823, lng: 18.4793296};

            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 10, center: rewa});

            var marker = new google.maps.Marker({position: rewa, map: map});
          }


    }   
};