import { getRoomie } from "../utils/roomies";

const roomieComponent = roomies => {
  let roomiesArticles = '';

  roomies.forEach((roomie, index) => {
    let dataRoomie = getRoomie(roomie);

    let map = {
      0: 'left-0',
      1: '-left-4',
      2: '-left-8',
      3: '-left-12',
    };

    let classes = `w-24 h-24 object-cover object-center rounded-full
    relative shadow border ` + map[index];
    
    roomiesArticles += `
      <img src="${ dataRoomie.image }" alt="${ dataRoomie.name }"
      loading="lazy" decoding="async" title="${ dataRoomie.name }"
      class="${ classes } border border-black hover:-translate-y-2 transition"/>
    `;
  })

  return roomiesArticles;
}

const bathComponent = (bath, isLeft) => {
  return isLeft 
    ? `
      <div>
        <h4 class="text-xl text-black dark:text-white mb-4">
          ${ bath.location }
        </h4>

        <img src="${ bath.gif }" alt="${ bath.location }" 
        loading="lazy" decoding="async"
        class="w-72 h-48 object-cover object-top rounded-lg shadow-md"/>
      </div>

      <div>
        <h5 class="text-lg text-black dark:text-white mb-4">
          Los que les toca este baño
        </h5>

        <div class="flex flex-row">
          ${ roomieComponent(bath.roomies) }
        </div>
      </div>
    `
    : `
      <div>
        <h5 class="text-lg text-black dark:text-white mb-4">
          Los que les toca este baño
        </h5>
        
        <div class="flex flex-row">
          ${ roomieComponent(bath.roomies) }
        </div>
      </div>

      <div class="order-first md:order-2">
        <h4 class="text-xl text-black dark:text-white mb-4">
          ${ bath.location }
        </h4>

        <img src="${ bath.gif }" alt="${ bath.location }" 
        loading="lazy" decoding="async"
        class="w-72 h-48 object-cover object-top rounded-lg shadow-md"/>
      </div>
    `;
}

export default bathComponent;
