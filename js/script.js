/*Search Container*/

$('.search-container').append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('#search-input').after('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');