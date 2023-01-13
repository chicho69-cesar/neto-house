import bath from "./components/bath";
import buttonModal from "./components/button-modal";
import header from "./components/header";
import init from "./components/init";
import kitchen from "./components/kitchen";
import modal from "./components/modal";

const index = () => {
	return `
		<div class="w-4/5 mx-auto p-6">
			${ header() }
			${ init() }
			${ bath() }
			${ kitchen() }

			${ buttonModal() }
			${ modal() }
		</div>
	`;
}

export default index;
