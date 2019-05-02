 /*API Fetch*/

fetch('https://randomuser.me/api/?results=12&nat=us&inc=picture,name,email,location,cell,dob')
.then(response => response.json())
.then(data => generateUserData(data))

let selectedCard ;


/*Search Container*/
$('.search-container').append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('#search-input').after('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');



/*Gallery*/
function generateUserData(data){
/*Loops over all the data and inserts it into 12 cards*/
    for (let i = 0; i< 12; i +=1){
        $('#gallery').append('<div class="card"></div>');
        $('.card:eq('+i+')').append('<div class="card-img-container"></div>');
        $('.card:eq('+i+')').append('<div class="card-info-container"></div>');
        $('.card-img-container:eq('+i+')').append(`<img class="card-img" src='${data.results[i].picture.large}' alt="profile picture">`);
        $('.card-info-container:eq('+i+')').append(`<h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>`)
        .append(`<p class="card-text">${data.results[i].email}</p>`)
        .append(`<p class="card-text cap">${data.results[i].location.city}</p>`);
        $('.card-info-container:eq('+i+')').append(`<p class='hidden-info'>${data.results[i].cell}</p>`)
        .append(`<p class='hidden-info'>${data.results[i].location.street}, ${data.results[i].location.state}, ${data.results[i].location.postcode}</p>`)
        .append(`<p class='hidden-info'>${data.results[i].dob.date}</p>`);          
     

    }
    /*Pulls the specific card's info out when clicked*/
    $('.card').click(function () {
        let selectedCard = $(this).index();
        cardInfo(selectedCard)
               });
       

   
}
/*Modal*/
   
  
//   $('#gallery').after('<div class="modal-container"></div>');
//   $('.modal-container').append('<div class="modal"></div>');
//   $('.modal').append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>');
//   $('.modal').append('<div class="modal-info-container"></div>');
//   /*Creates Prev and Next Buttons*/
//   $('.modal-container').append('<div class="modal-btn-container">');
//   $('.modal-btn-container').append('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>')
//   .append('<button type="button" id="modal-next" class="modal-next btn">Next</button>');
//   $('.modal-container').hide();
  

    /*Function to Populate the modal*/
            function cardInfo(selectedCard){
                const employeePic = $('.card').eq(selectedCard).find('.card-img').attr('src');
                let employeeName = $('.card').eq(selectedCard).find('#name').text(); //name
                const employeeEmail = $('.card').eq(selectedCard).find('.card-text').eq(0).text(); //email
                const employeeCity = $('.card').eq(selectedCard).find('.card-text.cap').text(); //location
                const employeeCell = $('.card').eq(selectedCard).find('.hidden-info').eq(0).text(); //cell
                const employeeAddress = $('.card').eq(selectedCard).find('.hidden-info').eq(1).text(); //address
                const dateLongVersion = new Date($('.card').eq(selectedCard).find('.hidden-info').eq(2).text()); //dob
                const month = dateLongVersion.getMonth() + 1;
                const date = dateLongVersion.getDate();
                const year = dateLongVersion.getFullYear().toString().slice(2);  
                console.log(selectedCard)

                /*Creates the Modal*/
                $('#gallery').after('<div class="modal-container"></div>');
                $('.modal-container').append('<div class="modal"></div>');
                $('.modal').append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>');
                $('.modal').append('<div class="modal-info-container"></div>');
                /*Creates Prev and Next Buttons*/
                $('.modal-container').append('<div class="modal-btn-container">');
                $('.modal-btn-container').append('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>')
                .append('<button type="button" id="modal-next" class="modal-next btn">Next</button>');
                $('.modal-container').hide();
/*Populates the Modal*/
        $('.modal-info-container').append(`<img class="modal-img" src="${employeePic}" alt="profile picture">`);
        $('.modal-img').after(`<h3 id="name" class="modal-name cap">${employeeName}</h3>`);
        $('.modal-name').after(`<p class="modal-text">${employeeEmail}</p>`);
        $('.modal-text').after(`<p class="modal-text cap">${employeeCity}</p>`);
        $('.modal-text.cap').after('<hr>');
        $('hr').after(`<p class="modal-text">Birthday: ${month}/${date}/${year}</p>`)
        .after(`<p class="modal-text cap">${employeeAddress}</p>`)
        .after(`<p class="modal-text cap">${employeeCell}</p>`);
        /*Modal pops up when card is clicked*/
        $('.modal-container').show();
        /*Modal goes away when 'x' is clicked*/  
        $('.modal-close-btn').click(function () {
            $('.modal-container').remove();
                                });
       

        $('.modal-prev').click(function(){
            $('.modal-container').remove();
            selectedCard =  selectedCard -1;
            if (selectedCard === -1){
                selectedCard = 11
                cardInfo(selectedCard)
            } else if (selectedCard === 12){
                selectedCard = 0
                cardInfo(selectedCard)
            } else{
            cardInfo(selectedCard)
            }
            
            
                        }); 

            $('.modal-next').click(function(){
                $('.modal-container').remove();
                selectedCard =  selectedCard +1;
                if (selectedCard === -1){
                    selectedCard = 11
                    cardInfo(selectedCard)
                } else if (selectedCard === 12){
                    selectedCard = 0
                    cardInfo(selectedCard)
                } else{
                cardInfo(selectedCard)
                }
                
                
                            }); 


    };

  

   

          

        
    
    
   
  




/*Exceeds Portion*/






