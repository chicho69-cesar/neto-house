import modal from "./components/modal";

const index = () => {
	return `
		${ modal() }
	`;
}

export default index;