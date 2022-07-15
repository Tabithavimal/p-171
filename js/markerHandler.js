var toyNumber = null;

AFRAME.registerComponent("marker-handler",{
    init:async function(){
        if (toyNumber === null) {
            this.askToyNumber();
          }
      
          //Get the dishes collection
          var product = await this.getToy();


        this.el.addEventListener("markerFound",()=>{
            console.log("Marker found")
            var buttonDiv=document.getElementById("button-div")
            buttonDiv.style.display="flex"
            var ratingButton=document.getElementById("rating-button")
            var orderButton=document.getElementById("order-button")
            ratingButton.addEventListener("click",()=>{
                swal({
                    icon:"warning",
                    title:"Rate The Product",
                    text:"We would love to hear you rate this product",
                })

            })
            orderButton.addEventListener("click",()=>{
                swal({
                    icon:"https://i.imgur.com/4NZ6uLY.jpg",
                    title:"Order Summary",
                    text:"Work In Progress",

                })
            })

        })

        this.el.addEventListener("markerLost",()=>{
            console.log("marker lost")
            var buttonDiv=document.getElementById("button-div")
            buttonDiv.style.display="none"
            
        })
    }
})