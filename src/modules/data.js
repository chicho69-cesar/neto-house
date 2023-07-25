export function roomies() {
	return [
		{
			id: 1,
			name: 'Jose',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
			color: 'red'
		},
		{
			id: 2,
			name: 'Andres',
			image: 'https://i.pinimg.com/564x/34/f9/07/34f9072d158d176d922d652975982a18.jpg',
			color: 'green'
		},
		{
			id: 3,
			name: 'Adrian',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
			color: 'blue'
		},
		{
			id: 4,
			name: 'Cesar',
			image: 'https://i.pinimg.com/736x/2c/4c/67/2c4c67f144c8ed1600be38d06d8d1765.jpg',
			color: 'purple'
		},
		{
			id: 5,
			name: 'Samuel',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
			color: 'Brown'
		},
		{
			id: 6,
			name: 'Luis Ernesto',
			image: 'https://i.pinimg.com/564x/44/bd/b5/44bdb5ea56d5309b9c4c73ec13e45035.jpg',
			color: 'SteelBlue'
		},
		{
			id: 7,
			name: 'Gabriel',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
			color: 'Maroon'
		},
		{
			id: 8,
			name: 'Diego',
			image: 'https://i.pinimg.com/564x/bd/9e/03/bd9e03f51010761ddd33bc866f0bc8e4.jpg',
			color: 'DarkTurquoise'
		},
		{
			id: 9,
			name: 'Osvaldo',
			image: 'https://i.pinimg.com/564x/87/b6/03/87b6030382041fe33d2131bb171a18d6.jpg',
			color: 'Indigo'
		},
		{
			id: 10,
			name: 'Pancho numero 1',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
			color: 'Blue'
		},
		{
			id: 11,
			name: 'Pancho numero 2',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
			color: 'Green'
		},
	];
}

export function months() {
	return [
		{
			id: 0,
			month: 'Enero'
		},
		{
			id: 1,
			month: 'Febrero'
		},
		{
			id: 2,
			month: 'Marzo'
		},
		{
			id: 3,
			month: 'Abril'
		},
		{
			id: 4,
			month: 'Mayo'
		},
		{
			id: 5,
			month: 'Junio'
		},
		{
			id: 6,
			month: 'Julio'
		},
		{
			id: 7,
			month: 'Agosto'
		},
		{
			id: 8,
			month: 'Septiembre'
		},
		{
			id: 9,
			month: 'Octubre'
		},
		{
			id: 10,
			month: 'Noviembre'
		},
		{
			id: 11,
			month: 'Diciembre'
		},
	];
}

export function baths() {
	return [
		{
			id: 1,
			location: 'Baño de arriba',
			gif: 'https://media.tenor.com/UqtmN0l28v0AAAAC/ba%C3%B1o-jabon.gif',
			roomies: [ 1, 10, 11 ]
		},
		{
			id: 2,
			location: 'Primer baño de abajo',
			gif: 'https://www.recreoviral.com/wp-content/uploads/2016/07/Trucos-para-limpiar-ba%C3%B1o-4.gif',
			roomies: [ 2, 3, 5, 8 ]
		},
		{
			id: 3,
			location: 'El baño de la esquina',
			gif: 'https://i.gifer.com/IroY.gif',
			roomies: [ 4, 6, 7, 9 ]
		},
	];
}

export function kitchenDates() {
	return [
		{
			month: 0,
			dates: [
				{ day: 12, limit: 13, roomie: 4 },
			]
		},
		{
			month: 1,
			dates: [
				{ day: 1, limit: 2, roomie: 5 },
			]
		},
		{
			month: 2,
			dates: [
				{ day: 6, limit: 7, roomie: 1 },
				{ day: 8, limit: 9, roomie: 2 },
				{ day: 10, limit: 11, roomie: 3 },
				{ day: 13, limit: 14, roomie: 4 },
				{ day: 15, limit: 16, roomie: 5 },
				{ day: 17, limit: 18, roomie: 6 },
				{ day: 20, limit: 21, roomie: 7 },
				{ day: 22, limit: 23, roomie: 8 },
				{ day: 24, limit: 25, roomie: 9 },
				{ day: 27, limit: 28, roomie: 1 },
				{ day: 29, limit: 30, roomie: 2 },
				{ day: 31, limit: 1, roomie: 3 },
			]
		},
		{
			month: 3,
			dates: [
				{ day: 3, limit: 4, roomie: 4 },
				{ day: 5, limit: 6, roomie: 5 },
				{ day: 7, limit: 8, roomie: 6 },
				{ day: 10, limit: 11, roomie: 7 },
				{ day: 12, limit: 13, roomie: 8 },
				{ day: 14, limit: 15, roomie: 9 },
				{ day: 17, limit: 18, roomie: 1 },
				{ day: 19, limit: 20, roomie: 2 },
				{ day: 21, limit: 22, roomie: 3 },
				{ day: 24, limit: 25, roomie: 4 },
				{ day: 26, limit: 27, roomie: 5 },
				{ day: 28, limit: 29, roomie: 6 },
			]
		},
		{
			month: 4,
			dates: [
				{ day: 1, limit: 2, roomie: 7 },
				{ day: 3, limit: 4, roomie: 8 },
				{ day: 5, limit: 6, roomie: 9 },
				{ day: 8, limit: 9, roomie: 1 },
				{ day: 10, limit: 11, roomie: 2 },
				{ day: 12, limit: 13, roomie: 3 },
				{ day: 15, limit: 16, roomie: 4 },
				{ day: 17, limit: 18, roomie: 5 },
				{ day: 19, limit: 20, roomie: 6 },
				{ day: 22, limit: 23, roomie: 7 },
				{ day: 24, limit: 25, roomie: 8 },
				{ day: 26, limit: 27, roomie: 9 },
				{ day: 29, limit: 30, roomie: 1 },
				{ day: 31, limit: 1, roomie: 2 },
			]
		},
		{
			month: 5,
			dates: [
				{ day: 2, limit: 3, roomie: 3 },
				{ day: 5, limit: 6, roomie: 4 },
				{ day: 7, limit: 8, roomie: 5 },
				{ day: 9, limit: 10, roomie: 6 },
				{ day: 12, limit: 13, roomie: 7 },
				{ day: 14, limit: 15, roomie: 8 },
				{ day: 16, limit: 17, roomie: 9 },
				{ day: 19, limit: 20, roomie: 1 },
				{ day: 21, limit: 22, roomie: 2 },
				{ day: 23, limit: 24, roomie: 3 },
				{ day: 26, limit: 27, roomie: 4 },
				{ day: 28, limit: 29, roomie: 5 },
				{ day: 30, limit: 1, roomie: 6 },
			]
		},
		{
			month: 6,
			dates: [
				{ day: 31, limit: 1, roomie: 1 },
			]
		},
		{
			month: 7,
			dates: [
				{ day: 2, limit: 3, roomie: 2 },
				{ day: 4, limit: 5, roomie: 3 },
				{ day: 7, limit: 8, roomie: 4 },
				{ day: 9, limit: 10, roomie: 5 },
				{ day: 11, limit: 12, roomie: 6 },
				{ day: 14, limit: 15, roomie: 7 },
				{ day: 16, limit: 17, roomie: 8 },
				{ day: 18, limit: 19, roomie: 9 },
				{ day: 21, limit: 22, roomie: 1 },
				{ day: 23, limit: 24, roomie: 2 },
				{ day: 25, limit: 26, roomie: 3 },
				{ day: 28, limit: 29, roomie: 4 },
				{ day: 30, limit: 31, roomie: 5 },
			]
		},
		{
			month: 8,
			dates: [
				{ day: 1, limit: 2, roomie: 6 },
				{ day: 4, limit: 5, roomie: 7 },
				{ day: 6, limit: 7, roomie: 8 },
				{ day: 8, limit: 9, roomie: 9 },
				{ day: 11, limit: 12, roomie: 1 },
				{ day: 13, limit: 14, roomie: 2 },
				{ day: 15, limit: 16, roomie: 3 },
				{ day: 18, limit: 19, roomie: 4 },
				{ day: 20, limit: 21, roomie: 5 },
				{ day: 22, limit: 23, roomie: 6 },
				{ day: 25, limit: 26, roomie: 7 },
				{ day: 27, limit: 28, roomie: 8 },
				{ day: 29, limit: 30, roomie: 9 },
			]
		},
		{
			month: 9,
			dates: [
				{ day: 2, limit: 3, roomie: 1 },
				{ day: 4, limit: 5, roomie: 2 },
				{ day: 6, limit: 7, roomie: 3 },
				{ day: 9, limit: 10, roomie: 4 },
				{ day: 11, limit: 12, roomie: 5 },
				{ day: 13, limit: 14, roomie: 6 },
				{ day: 16, limit: 17, roomie: 7 },
				{ day: 18, limit: 19, roomie: 8 },
				{ day: 20, limit: 21, roomie: 9 },
				{ day: 23, limit: 24, roomie: 1 },
				{ day: 25, limit: 26, roomie: 2 },
				{ day: 27, limit: 28, roomie: 3 },
				{ day: 30, limit: 31, roomie: 4 },
			]
		},
		{
			month: 10,
			dates: [
				{ day: 1, limit: 2, roomie: 5 },
				{ day: 3, limit: 4, roomie: 6 },
				{ day: 6, limit: 7, roomie: 7 },
				{ day: 8, limit: 9, roomie: 8 },
				{ day: 10, limit: 11, roomie: 9 },
				{ day: 13, limit: 14, roomie: 1 },
				{ day: 15, limit: 16, roomie: 2 },
				{ day: 17, limit: 18, roomie: 3 },
				{ day: 20, limit: 21, roomie: 4 },
				{ day: 22, limit: 23, roomie: 5 },
				{ day: 24, limit: 25, roomie: 6 },
				{ day: 27, limit: 28, roomie: 7 },
				{ day: 29, limit: 30, roomie: 8 },
			]
		},
		{
			month: 11,
			dates: [
				{ day: 1, limit: 2, roomie: 9 },
				{ day: 4, limit: 5, roomie: 1 },
				{ day: 6, limit: 7, roomie: 2 },
				{ day: 8, limit: 9, roomie: 3 },
				{ day: 11, limit: 12, roomie: 4 },
				{ day: 13, limit: 14, roomie: 5 },
				{ day: 15, limit: 16, roomie: 6 },
				{ day: 18, limit: 19, roomie: 7 },
				{ day: 20, limit: 21, roomie: 8 },
				{ day: 22, limit: 23, roomie: 9 },
			]
		},
	];
}
