export const headerLinks = [
	{
	  label: 'Home',
	  route: '/',
	},
	{
	  label: 'Create Event',
	  route: '/events/create',
	},
	{
	  label: 'Blog',
	  route: '/blog',
	},
	{
	  label: 'Support',
	  route: '/support',
	},
	{
	  label: 'My Profile',
	  route: '/profile',
	},
  ];
  
  
  export const eventDefaultValues = {
	title: '',
	description: '',
	location: '',
	imageUrl: '',
	startDateTime: new Date(),
	endDateTime: new Date(),
	categoryId: '',
	price: '',
	isFree: false,
	url: '',
  }