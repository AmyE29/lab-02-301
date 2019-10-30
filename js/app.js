'use strict';

$(document).ready(function(){
  $.get('data/page-1.json')
    .then(horns => {
      horns.forEach(data =>{
        let createImg = $('<img></img>');
        createImg.attr('src', `${data.image_url}`);
        $('#photo-template').append(createImg);
      });

      $.get('data/page-1.json')
        .then(keyWords => {
          keyWords.forEach(data =>{
            let createKeyword = $('<option></option>');
            createKeyword.attr('value', `${data.keyword}`);
            createKeyword.text(`${data.keyword}`);
            $('select').append(createKeyword);
            console.log(horns);
          });
        });
    });
});


console.log('anything');
