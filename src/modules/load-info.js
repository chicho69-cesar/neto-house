import kitchenTurns from "../components/kitchenTurns";
import { kitchenDates } from "./dates";

const loadoInfo = element => {
    let consultType = +element.classList[0];
    const mainContainer = document.querySelector('main');

    if (consultType === 1) {
        mainContainer.innerHTML = kitchenTurns(kitchenDates());
    } else {
        mainContainer.innerHTML = `
            <section class="col-start-1 col-end-3 w-full text-center py-8">
                <h1 class="text-3xl text-red-500">
                    Aún no se que onda con los baños 😥🤙
                </h1>
            </section>
        `;
    }
}

export default loadoInfo;