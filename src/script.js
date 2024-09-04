const members = [
  {
    id: 1,
    name: "Bill Mahoney",
    role: "Product Owner",
  },
  {
    id: 2,
    name: "Saba Cabrera",
    role: "Art Director",
  },
  {
    id: 3,
    name: "Shae Le",
    role: "Tech Lead",
  },
  {
    id: 4,
    name: "Skylah Lu",
    role: "UX Designer",
  },
  {
    id: 5,
    name: "Griff Richards",
    role: "Developer",
  },
  {
    id: 6,
    name: "Stan John",
    role: "Developer",
  },
];

const $cardsContainer = document.querySelector(".cards-container");
$cardsContainer.innerHTML = "";

members.forEach((member) => {
  $cardsContainer.innerHTML += `
    <div class="member-card">
      <section class="photo-and-role">
        <img src="./assets/photo_${member.id}.png" alt="${member.name}">
        <p class="role">${member.role.toUpperCase()}</p>
      </section>
      <footer class="card-footer">
        <h4 class="name">${member.name}</h4>
      </footer>
    </div>
  `;
});
