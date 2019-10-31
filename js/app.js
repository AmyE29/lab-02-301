/* eslint-disable no-undef */
'use strict';

$(document).ready(function() {
  $.get('data/page-1.json')
    .then( horns => {
      horns.forEach( data => {
        let createImg = $('<img></img>');
        createImg.attr('src', `${data.image_url}`);
        createImg.attr('value', `${data.keyword}`);
        $('#photo-template').append(createImg);
        let createKeyWord = $('<option></option>');
        createKeyWord.attr('value', `${data.keyword}`);
        createKeyWord.text(`${data.keyword}`);
        $('select').append(createKeyWord);
      });
      console.log(horns);
    });
});

$('select').on('change', function() {
  let selectedKeyWord = $(this).val();
  $('img').hide();
  $(`img[value=${selectedKeyWord}]`).show();
});

$.get('data/page-2.json')
  .then( horns => {
    horns.forEach( data => {
      let createImg = $('<img></img>');
      createImg.attr('src', `${data.image_url}`);
      createImg.attr('value2', `${data.keyword}`);
      $('#photo-template2').append(createImg);
      let createKeyWord = $('<option></option>');
      createKeyWord.attr('value2', `${data.keyword}`);
      createKeyWord.text(`${data.keyword}`);
      $('select').append(createKeyWord);
    });
    console.log(horns);
  });


$('select').on('change', function() {
  let selectedKeyWord = $(this).val();
  $('img').hide();
  $(`img[value=${selectedKeyWord}]`).show();
});
