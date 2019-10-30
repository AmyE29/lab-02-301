'use strict';

$(document).ready(function(){
  $.get('data/page-1.json')
    .then(horns => {
      horns.forEach(data =>{
        let createImg =$('<img></img>');
        createImg.attr('src', `${data.image_url}`);
        $('#photo-template').append(createImg);
      });
      console.log(horns);
    });
});

// const theIMAGESOURCE = "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80";


// $('#photo-template').append(theIMAGESOURCE);


console.log('anything');
