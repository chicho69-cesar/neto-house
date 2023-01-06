import { kitchenDates } from "../modules/dates";

const getInfo = () => {
	const dateNow = new Date(Date.now());
	let day = dateNow.getDate(), 
		month = dateNow.getMonth(), 
		year = dateNow.getFullYear();

	const months = [
		'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
		'Julio', 'Agosto', 'Sept', 'Octubre', 'Nov', 'Dic'
	];

	let dateNowStr = '';

	dateNowStr = day < 10 ? `0${ day }` : `${ day }`;
	dateNowStr = `${ dateNowStr }/${ months[month] }`;
	dateNowStr = `${ dateNowStr }/${ year }`;

	for (let date of kitchenDates()) {
		if (date.day === dateNowStr || date.limitDay === dateNowStr) {
			return {
				title: 'El aseo de hoy le toca a',
				person: date.member,
				band: true
			};
		}
	}

	return {
		title: 'El aseo de hoy no le toca a',
		person: 'Nadie',
		band: false
	};
}

const modal = () => {
	let cleaner = getInfo();

	return `
		<div id="modal-component-container" class="fixed inset-0 hidden">
			<div class="modal-flex-container flex items-end justify-center 
			min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div class="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75"></div>
				
				<div class="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen"></div>

				<div class="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
				w-full mx-auto
				shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg" id="modal-container">
					<div class="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="modal-wrapper-flex sm:flex sm:items-start">
							<div class="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100
							sm:mx-0 sm:h-12 sm:w-12 text-3xl overflow-hidden">
								🥵
							</div>
							
							<div class="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
								<h3 class="text-3xl font-medium text-gray-900">El aseo de hoy</h3>
								
								<div class="modal-text mt-2">
									<p class="text-gray-600 text-lg">
										${ cleaner.title } 
										<span class="italic ${ cleaner.band ? 'text-gray-700' : 'text-red-700' } 
										text-xl font-medium">
											${ cleaner.person }
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button class="bg-red-700 text-gray-100 hover:bg-red-600
						mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 
						shadow-gray-500 transition-all hover:shadow-none
						font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto 
						sm:text-base" id="close-modal">
							Cerrar 🥺
						</button>
					</div>
				</div>
			</div>
		</div>
	`;
}

export default modal;