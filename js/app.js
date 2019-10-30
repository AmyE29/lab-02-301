/* eslint-disable no-undef */
'use strict';

$(document).ready(function () {
  $.get('data/page-1.json')
    .then(horns => {
      horns.forEach(data =>{
        let createImg = $('<img></img>');
        createImg.attr('src', `${data.image_url}`);
        $('#photo-template').append(createImg);

        $.get('data/page-1.json')
          .then(names => {
            names.forEach(data => {
              let createKeyWord = $('<option></option>');
              createKeyWord.attr('value', `${data.keyword}`);
              createKeyWord.text(`${data.keyword}`);
              $('select').append(createKeyWord);
            });
          });
      });
    });
});

$('select').on('change', function(){
  let selectedKeyWord = $(this).val();
$('img').hide();
$(`img [value= ${selectedKeyWord}]`).show();
});
