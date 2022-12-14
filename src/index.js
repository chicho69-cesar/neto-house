import header from "./components/header";
import init from "./components/init";
import modal from "./components/modal";

const index = () => {
	return `
		<div class="w-4/5 mx-auto p-6">
			${ header() }
			${ init() }

			${ modal() }
		</div>
	`;
}

export default index;
