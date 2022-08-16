import container from "./components/container";
import header from "./components/header";

const index = () => {
    return `
        ${ header() } 
        ${ container() }
    `;
}

export default index;