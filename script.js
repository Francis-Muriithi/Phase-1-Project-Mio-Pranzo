
    // Load Content for the Menu from API
    fetch ('https://tao-foods.p.rapidapi.com/dishes').then((data)=>{
        // console.log(data);
        return data.json();
    }).then((completedata)=>{
        // console.log(completedata);    
        //checks if data is successfully fetched
    
        let data1 = "";
        completedata.map((values)=>{
            data1+=`<div class="menu">
                <h2 class="title">${values.title}</h2>
                <img src=${values.img} alt="img" class="images">
                <p class="description">${values.desc}</p>
                <p class="category">${values.category}</p>
                <p class="price">KSh ${values.price}</p>
            </div>`
            document.getElementById("menu").innerHTML = data1;
        })
    
    }).catch((err)=>{
        console.log(err);
    
    })
    
        //Add Event Listener to the button on form
        const form= document.getElementById('form')
        form.addEventListener('submit', function(e){
        e.preventDefault();
        let orderName = document.getElementById('order').value
        console.log(orderName)
        let phoneNumber= document.getElementById('phone').value
        console.log(phoneNumber)
        let customerName = document.getElementById('name').value
        console.log(customerName)
        let address = document.getElementById('address').value
        console.log(address)
        let email = document.getElementById('email').value
        console.log(email)
    })
    
    // Add a glider to the slide section on the testimonial section, including the Dots. 
    //Glider idea acquired from a Youtube-video and operationalized here. Check also two additional files linked, glider.min.js and glider.min.css. 
    new Glider(document.querySelector(".testimonial"),{
        slidesToShow: 1,
        dots:".dots",
        arrows:{
            prev:".slider-prev",
            next:".slider-next",
        },
    })
    
    //Add a placeOrder button below the contact form with an alert notifying the user that their order has been received and further communication will be made through the phone number provided. 
    function placeOrder() {
    alert("Your Order has been Successfully Placed. You will receive an SMS Notification with details. Thank you for being a loyal diner with Mio Pranzo!!")
    }