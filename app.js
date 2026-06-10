let product = [
  {
    id: "1",
    btn: "Технологии",
    info: "Al для бизнеса: внедрение и перспективы",
    img: "https://static.cnews.ru/img/news/2023/06/29/robot_700.jpg",
  },
  {
    id: "2",
    btn: "Кредиты",
    info: "Рекомендации при оформлении кредита",
    img: "https://cdn.setka.ru/01939a9e-9edc-4c7f-af43-1f28dba99b3d_original",
  },
  {
    id: "3",
    btn: "Инвестиции",
    info: "Курс Начинающий инвестор",
    img: "https://media.licdn.com/dms/image/v2/D4E12AQGNb0rr13EWPQ/article-cover_image-shrink_720_1280/B4EZfmDyt_HgAI-/0/1751911444342?e=2147483647&v=beta&t=ALl7SdGY1rXTb6vM4jr35k5za6lSoPri9lO5k5l7b6w",
  },
];

function Halima() {
  let cards = document.querySelector(".cards");
  let card = product.map((e) => {
    return `
    <div class="card relative rounded-[30px]">
          <div class="img-box h-[436px]">
            <img class="w-full h-full rounded-[30px] object-cover" src=${e.img} alt="" />
          </div>
          <div class="text-box absolute top-[24px] left-[24px]">
            <button class="bg-[#fff] text-black px-[24px] py-[8px] rounded-[20px]">${e.btn}</button>
            <h4 class=" text-[25px] text-white max-w-[345px] m-auto">${e.info}</h4>
          </div>
        </div>
    `;
  });
  cards.innerHTML = card.join("");
}
Halima();
