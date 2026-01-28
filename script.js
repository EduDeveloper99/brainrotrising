const CLIENT_ID = "TU_CLIENT_ID";
document.getElementById("invite-btn").href = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot%20applications.commands&permissions=0`;
document.getElementById("invite-btn").target = "_blank";

// Lista de Brainrots
const brainrots = [
  { name: "NoobiniPizzanini", image: "https://cdn.discordapp.com/attachments/1463341874168201412/1464409833640956100/NOOB212121.webp", rank: "Común", income: "25💵", price: "50💵" },
  { name: "LiririLarila", image: "https://cdn.discordapp.com/attachments/1463341874168201412/1464409833640956100/NOOB212121.webp", rank: "Raro", income: "50💵", price: "100💵" },
  { name: "BrainrotGod", image: "https://cdn.discordapp.com/attachments/1463341874168201412/1464409833640956100/NOOB212121.webp", rank: "Legendario", income: "500💵", price: "1M💵" }
];

const brainrotsList = document.getElementById("brainrots-list");

brainrots.forEach(b => {
  const card = document.createElement("div");
  card.className = "brainrot-card";
  card.innerHTML = `
    <img src="${b.image}" alt="${b.name}">
    <h3>${b.name}</h3>
    <p>Rango: ${b.rank}</p>
    <p>Ganancia: ${b.income}</p>
    <p>Precio: ${b.price}</p>
  `;
  brainrotsList.appendChild(card);
});
