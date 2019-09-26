import * as typeform from '@typeform/embed';

export const popup = typeform.makePopup(
	'https://ducompsoc.typeform.com/to/bMrpxS',
	{
		mode: 'drawer_right',
		hideHeaders: true,
		hideFooter: true,
		onSubmit: () => {
			console.log('Typeform successfully submitted');
		},
	},
);
