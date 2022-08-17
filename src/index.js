import header from "./components/header";
import container from "./components/container";
import modal from "./components/modal";

const index = () => {
    return `
        ${ header() } 
        ${ container() } 
        ${ modal() }
    `;
}

export default index;