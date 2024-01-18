new AirDatepicker('.date-picker');

const selectButtonTour = $('.select-btn-tour');
const selectMenuTour = $('.select-menu-tour');
const selectItemsTour = $('.select-menu-item-tour');

selectButtonTour.on('click', (e) => {
  e.stopPropagation();
  selectButtonTour.toggleClass('active');
  selectMenuTour.toggleClass('active');

  selectMenuParticipant.removeClass('active');
  selectButtonParticipant.removeClass('active');
});

selectItemsTour.on('click', (e) => {
  e.stopPropagation();
  $('.select-btn-text-tour').html(e.target.innerText);
  selectMenuTour.removeClass('active');
  selectButtonTour.removeClass('active');
});

const selectButtonParticipant = $('.select-btn-participant');
const selectMenuParticipant = $('.select-menu-participant');
const selectItemsParticipant = $('.select-menu-item-participant');

selectButtonParticipant.on('click', (e) => {
  e.stopPropagation();
  selectButtonParticipant.toggleClass('active');
  selectMenuParticipant.toggleClass('active');

  selectMenuTour.removeClass('active');
  selectButtonTour.removeClass('active');
});

selectItemsParticipant.on('click', (e) => {
  e.stopPropagation();
  $('.select-btn-text-participant').html(e.target.innerText);
  selectMenuParticipant.removeClass('active');
  selectButtonParticipant.removeClass('active');
});

$(window).click(function () {
  selectMenuTour.removeClass('active');
  selectButtonTour.removeClass('active');

  selectMenuParticipant.removeClass('active');
  selectButtonParticipant.removeClass('active');
});

Fancybox.bind('[data-fancybox="video"]', {});

Fancybox.bind('[data-fancybox="gallery"]', {});

$('.menu_phone').on('click', () => {
  $('body').addClass('lock');
  $('.navigation').addClass('active');
});

$('.close_menu').on('click', () => {
  $('body').removeClass('lock');
  $('.navigation').removeClass('active');
});
