// $.ajax({
//     url: 'https://randomuser.me/api/?results=12&inc=picture,name,email,location',
//     dataType: 'json',
//     success: function(data) {
//               console.log(data);
//                      }
//   });
 
/*API Fetch*/

  fetch('https://randomuser.me/api/?results=12&inc=picture,name,email,location')
  .then(response => response.json())
  .then(data => generateUserData(data))

  
    

  
    

/*Search Container*/

$('.search-container').append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('#search-input').after('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');

/*Gallery*/
function generateUserData(data){
    const nameFirst = data.results[0].name.first;
    const nameLast = data.results[0].name.last;
    const email = data.results[0].email;
    const city = data.results[0].location.city;
    const state = data.results[0].location.state;
    const image = data.results[0].picture.large;
    console.log(email);
    console.log(image);
for (let i = 0; i< 12; i +=1){
$('#gallery').append('<div class="card"></div>');
$('.card:eq('+i+')').append('<div class="card-img-container"></div>');
$('.card:eq('+i+')').append('<div class="card-info-container"></div>');
$('.card-img-container:eq('+i+')').append(`<img class="card-img" src='${data.results[i].picture.large}' alt="profile picture">`);
$('.card-info-container:eq('+i+')').append(`<h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>`)
.append(`<p class="card-text">${data.results[i].email}</p>`)
.append(`<p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>`);
}
}
/*Modal*/

// $('#gallery').after('<div class="modal-container"></div>');
// $('.modal-container').append('<div class="modal"></div>');
// $('.modal').append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>');
// $('.modal').append('<div class="modal-info-container"></div>');
// $('.modal-info-container').append('<img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">');
// $('.modal-img').after('<h3 id="name" class="modal-name cap">name</h3>');
// $('.modal-name').after('<p class="modal-text">email</p>');
// $('.modal-text').after('<p class="modal-text cap">city</p>');
// $('.modal-text.cap').after('<hr>');
// $('hr').after('<p class="modal-text">Birthday: 10/21/2015</p>')
// .after('<p class="modal-text">123 Portland Ave., Portland, OR 97204</p>')
// .after('<p class="modal-text">(555) 555-5555</p>');

/*Exceeds Portion*/

$('.modal-container').after('<div class="modal-btn-container">');
$('.modal-btn-container').append('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>')
.append('<button type="button" id="modal-next" class="modal-next btn">Next</button>');

