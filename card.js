
let arrcards = 
[card1 = {
    poster: "poster.png",
    type: "type.png",
    sale: "sale.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2",
    price: 50,
    percent: 10,
    currency: "руб.",
    promotion: true,
    rating:1.5,
    order:"order.png"},

card2 = {
    poster: "ferd.png",
    type: "type.png",
    sale: "sale.png",
    title1: "Фердинан",
    title2: "",
    price: 50,
    percent: 10,
    currency: "руб.",
    promotion: false,
    rating: 2.4,
    order:"order.png"},
card3 = {
    poster: "toy4.png",
    type: "type.png",
    sale: "sale.png",
    title1: "История",
    title2: " игрушек 4",
    price: 50,
    percent: 10,
    currency: "usd.",
    promotion: true,
    rating: 5,
    order:"order.png"}
];

for(i=0; i<arrcards.length;i++)
{
let card = "";

card = 
`<div class="card">
    <div class="poster">
      <img src="img/${arrcards[i].poster}"> 
      ${getSale (arrcards[i].promotion)}
      <img src="img/${arrcards[i].type}">
    </div>
    <div class="title">
      <div> ${arrcards[i].title1}</div>
      <div> ${arrcards[i].title2}</div>
    </div>
    <div class="price">
      <div>${arrcards[i].price}${arrcards[i].currency}</div>
      ${getPrice (arrcards[i].promotion)}
    </div>
    <div class="stars">
      <span class="material-icons">
      ${getStars(arrcards[i].rating)}
      </span>
   </div>
   <div class="order">
   <img src="img/${arrcards[i].order}" alt="">
   </div> 
</div>`;
cards.innerHTML += card;
}

function getPrice (promo)
{
    if (promo == true)
    {
    return `<div>${arrcards[i].price-(arrcards[i].price/arrcards[i].percent)}${arrcards[i].currency}</div>`;
    }
    return ``;
}

function getSale (promo)
{
    if (promo == true)
    {
    return `<img src="img/${arrcards[i].sale}">`;
    }
    return `<img src="img/${arrcards[i].sale}"  style="visibility: hidden;">`;
}
function getStars(star)
{   
let srtStar = "";
   if (star<0)
   {
    srtStar += "star_border star_border star_border star_border star_border "
   }
  else if(star%1 == 0 && star < 6 )
  {
    for(y=1;y<=star;y++)
    {  srtStar += "star "
    }
    for (y=1; y <= (5-star); y++)
    { srtStar += "star_border "
    }
  }
  else if (star%1 != 0 && Math.trunc(star)<=4)
  { for (y=1;y<=Math.trunc(star);y++)
    {srtStar += "star "
    }
    srtStar += "star_half "
    for (y=1; y <= (4-Math.trunc(star)); y++)
    { srtStar += "star_border "
    }
  }
  else{
    srtStar += "star star star star star  "
  }
  return srtStar;
}
