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

$('.sign-up-link').on('click', function() {
  typeformCallback.open();
});
