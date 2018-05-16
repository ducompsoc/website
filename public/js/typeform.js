var typeformCallback = typeformEmbed.makePopup(
  'https://ducompsoc.typeform.com/to/bMrpxS',
  {
    mode: 'drawer_right',
    hideHeaders: true,
    hideFooter: true,
    onSubmit: function () {
      console.log('Typeform successfully submitted')
    }
  }
);


console.log($('.sign-up-link')[0]);
console.log(typeformEmbed);

$('.sign-up-link').on('click', function() {
  typeformCallback.open();
});
