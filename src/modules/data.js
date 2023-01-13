export function roomies() {
	return [
		{
			id: 1,
			name: 'Jose Chicho Fit',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
		},
		{
			id: 2,
			name: 'Andy Jhonson',
			image: 'https://scontent.fgdl3-1.fna.fbcdn.net/v/t39.30808-6/295623579_3179403625650238_4642092054967034801_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3Z8pO4AdxY8AX-mH0O2&_nc_oc=AQkCrFRXv5bDNk8PK52CLgyX8Uq7OJTD9mjFc5utpIK4_PocsDqjiki_rkeNFpZ-L6g&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfCL_NuUt7U-dBWEEj9rox-TyOeDo96aDS5vm4Qxh-7t7A&oe=63C69C6A'
		},
		{
			id: 3,
			name: 'Adrian Falacioso',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
		},
		{
			id: 4,
			name: 'Cesar Me Duermo',
			image: 'https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.6435-9/121572456_1310822899263465_3679081955565007897_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7jNXkrdsjhYAX-BJ1kO&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfBeH3SxRfPNmS60NzJBtH5brpREnacghPnfsT-rLich0A&oe=63E85F41'
		},
		{
			id: 5,
			name: 'Sammy Orines',
			image: 'https://scontent.fgdl3-1.fna.fbcdn.net/v/t39.30808-6/319841532_495529272645357_6702246537933245683_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NaeDlV1e62UAX9e63E_&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfAtZBEtbcuAJ7pds6ivZA4rDOzhw16ki0mwPOStmQ81gA&oe=63C55784'
		},
		{
			id: 6,
			name: 'Luis Alcoholico',
			image: 'https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.6435-9/140362090_1323627364681862_8292445935582333163_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nALgkdMQXGsAX88vVaQ&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfCmXlsIwEg3NQvL-PqZnwf11BxSYs7Q6ZmRj8vQW8aSEg&oe=63E863D3'
		},
		{
			id: 7,
			name: 'Gabby Jueves',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
		},
		{
			id: 8,
			name: 'Diegoooooo',
			image: 'https://scontent.fgdl3-1.fna.fbcdn.net/v/t39.30808-6/279665627_1041088890157256_7386884349206519305_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hd0HKl-HrYgAX9l3Aaf&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfBpxD0ZZpQbxD8LtanuxVgEn9mQhJnCqzccElCctAN1Jg&oe=63C4F25E'
		},
		{
			id: 9,
			name: 'Pancho numero 1',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
		},
		{
			id: 10,
			name: 'Pancho numero 2',
			image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
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
			roomies: [ 1, 9, 10 ]
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
			roomies: [ 4, 6, 7 ]
		},
	];
}

export function kitchenDates() {
	return [
		{
			month: 0,
			dates: [
				{ day: 12, limit: 13, roomie: 4 },
				{ day: 23, limit: 24, roomie: 1 },
				{ day: 25, limit: 26, roomie: 2 },
				{ day: 27, limit: 28, roomie: 3 },
				{ day: 30, limit: 31, roomie: 4 },
			]
		},
		{
			month: 1,
			dates: [
				{ day: 1, limit: 2, roomie: 5 },
				{ day: 3, limit: 4, roomie: 6 },
				{ day: 6, limit: 7, roomie: 7 },
				{ day: 8, limit: 9, roomie: 8 },
				{ day: 10, limit: 11, roomie: 1 },
				{ day: 13, limit: 14, roomie: 2 },
				{ day: 15, limit: 16, roomie: 3 },
				{ day: 17, limit: 18, roomie: 4 },
				{ day: 20, limit: 21, roomie: 5 },
				{ day: 22, limit: 23, roomie: 6 },
				{ day: 24, limit: 25, roomie: 7 },
				{ day: 27, limit: 28, roomie: 8 },
			]
		},
		{
			month: 2,
			dates: [
				{ day: 1, limit: 2, roomie: 1 },
				{ day: 3, limit: 4, roomie: 2 },
				{ day: 6, limit: 7, roomie: 3 },
				{ day: 8, limit: 9, roomie: 4 },
				{ day: 10, limit: 11, roomie: 5 },
				{ day: 13, limit: 14, roomie: 6 },
				{ day: 15, limit: 16, roomie: 7 },
				{ day: 17, limit: 18, roomie: 8 },
				{ day: 20, limit: 21, roomie: 1 },
				{ day: 22, limit: 23, roomie: 2 },
				{ day: 24, limit: 25, roomie: 3 },
				{ day: 27, limit: 28, roomie: 4 },
				{ day: 29, limit: 30, roomie: 5 },
				{ day: 31, limit: 1, roomie: 6 },
			]
		},
		{
			month: 3,
			dates: [
				{ day: 3, limit: 4, roomie: 7 },
				{ day: 5, limit: 6, roomie: 8 },
				{ day: 7, limit: 8, roomie: 1 },
				{ day: 10, limit: 11, roomie: 2 },
				{ day: 12, limit: 13, roomie: 3 },
				{ day: 14, limit: 15, roomie: 4 },
				{ day: 17, limit: 18, roomie: 5 },
				{ day: 19, limit: 20, roomie: 6 },
				{ day: 21, limit: 22, roomie: 7 },
				{ day: 24, limit: 25, roomie: 8 },
				{ day: 26, limit: 27, roomie: 1 },
				{ day: 28, limit: 29, roomie: 2 },
			]
		},
		{
			month: 4,
			dates: [
				{ day: 1, limit: 2, roomie: 3 },
				{ day: 3, limit: 4, roomie: 4 },
				{ day: 5, limit: 6, roomie: 5 },
				{ day: 8, limit: 9, roomie: 6 },
				{ day: 10, limit: 11, roomie: 7 },
				{ day: 12, limit: 13, roomie: 8 },
				{ day: 15, limit: 16, roomie: 1 },
				{ day: 17, limit: 18, roomie: 2 },
				{ day: 19, limit: 20, roomie: 3 },
				{ day: 22, limit: 23, roomie: 4 },
				{ day: 24, limit: 25, roomie: 5 },
				{ day: 26, limit: 27, roomie: 6 },
				{ day: 29, limit: 30, roomie: 7 },
				{ day: 31, limit: 1, roomie: 8 },
			]
		},
		{
			month: 5,
			dates: [
				{ day: 2, limit: 3, roomie: 1 },
				{ day: 5, limit: 6, roomie: 2 },
				{ day: 7, limit: 8, roomie: 3 },
				{ day: 9, limit: 10, roomie: 4 },
				{ day: 12, limit: 13, roomie: 5 },
				{ day: 14, limit: 15, roomie: 6 },
				{ day: 16, limit: 17, roomie: 7 },
				{ day: 19, limit: 20, roomie: 8 },
				{ day: 21, limit: 22, roomie: 1 },
				{ day: 23, limit: 24, roomie: 2 },
				{ day: 26, limit: 27, roomie: 3 },
				{ day: 28, limit: 29, roomie: 4 },
				{ day: 30, limit: 1, roomie: 5 },
			]
		},
		{
			month: 6,
			dates: [
				{ day: 3, limit: 4, roomie: 9 },
			]
		},
		{
			month: 7,
			dates: [
				{ day: 2, limit: 3, roomie: 9 },
			]
		},
		{
			month: 8,
			dates: [
				{ day: 1, limit: 2, roomie: 9 },
			]
		},
		{
			month: 9,
			dates: [
				{ day: 2, limit: 3, roomie: 9 },
			]
		},
		{
			month: 10,
			dates: [
				{ day: 1, limit: 2, roomie: 9 },
			]
		},
		{
			month: 11,
			dates: [
				{ day: 1, limit: 2, roomie: 9 },
			]
		},
	];
}
