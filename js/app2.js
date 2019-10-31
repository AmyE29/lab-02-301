/* eslint-disable no-undef */
$(document).ready(function() {
  $.get('data/page-2.json')
    .then( horns => {
      horns.forEach( data => {
        let createImg = $('<img></img>');
        createImg.attr('src', `${data.image_url}`);
        createImg.attr('value2', `${data.keyword}`);
        $('#photo-template2').append(createImg);
        let createKeyWord2 = $('<option></option>');
        createKeyWord2.attr('value2', `${data.keyword}`);
        createKeyWord2.text(`${data.keyword}`);
        $('select').append(createKeyWord2);
        let createTitle = $('<h2></h2>');
        createTitle.attr(`${data.title}`);
        createTitle.text(`${data.title}`);
        $('#photo-template').append(createTitle);
        let createDesc = $('<p></p>');
        createDesc.attr(`${data.description}`);
        createDesc.text(`${data.description}`);
        $('#photo-template').append(createDesc);
      });
      console.log(horns);
    });
});
$('select').on('change', function() {
  let selectedKeyWord = $(this).val();
  $('img').hide();
  $(`img[value2=${selectedKeyWord}]`).show();
});
