/*Search Container*/

$('.search-container').append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('#search-input').after('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');

/*Gallery*/

$('#gallery').append('<div class="card"></div>');
$('.card').append('<div class="card-img-container"></div>');
$('.card-img-container').append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">');
$('.card').append('<div class="card-info-container"></div>');
$('.card-info-container').append('<h3 id="name" class="card-name cap">first last</h3>');
$('#name').after('<p class="card-text">email</p>');
$('.card-text').after('<p class="card-text cap">city, state</p>');

/*Modal*/

$('#gallery').after('<div class="modal-container"></div>');
$('.modal-container').append('<div class="modal"></div>');
$('.modal').append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>');
$('.modal').append('<div class="modal-info-container"></div>');
$('.modal-info-container').append('<img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">');
$('.modal-img').after('<h3 id="name" class="modal-name cap">name</h3>');
$('.modal-name').after('<p class="modal-text">email</p>');
$('.modal-text').after('<p class="modal-text cap">city</p>');
$('.modal-text.cap').after('<hr>');
$('hr').after('<p class="modal-text">Birthday: 10/21/2015</p>')
.after('<p class="modal-text">123 Portland Ave., Portland, OR 97204</p>')
.after('<p class="modal-text">(555) 555-5555</p>');

/*Exceeds Portion*/

$('.modal-container').after('<div class="modal-btn-container">');
$('.modal-btn-container').append('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>')
.append('<button type="button" id="modal-next" class="modal-next btn">Next</button>');