const cards = [
    { tag:"Supériorité", title:"Joueur en plus", desc:"Ton équipe joue à 8 contre 7 pendant 2 minutes." },
    { tag:"Distance", title:"But à 3 points", desc:"Un but marqué depuis ton propre camp compte triple." },
    { tag:"Défense", title:"Gardien joker", desc:"Ton gardien peut sortir de sa surface comme un joueur de champ." },
    { tag:"Piège", title:"Pénalty immédiat", desc:"L'équipe adverse doit tirer un penalty dans les 30 secondes." },
    { tag:"Chaos", title:"Échange forcé", desc:"L'adversaire doit retirer son meilleur buteur du terrain pendant 1 minute." },
    { tag:"Vitesse", title:"Kick-off surprise", desc:"Ton équipe relance immédiatement après l'annonce, sans coup de sifflet." },
    { tag:"Blindage", title:"Zone protégée", desc:"Aucun but adverse ne compte depuis l'extérieur de la surface pendant 90 secondes." },
    { tag:"Doublé", title:"But en or", desc:"Le prochain but de ton équipe compte double sur le tableau de score." }
  ];

  const btn = document.getElementById('wildcardBtn');
  const display = document.getElementById('cardDisplay');

  btn.addEventListener('click', () => {
    const c = cards[Math.floor(Math.random() * cards.length)];
    display.innerHTML = `
      <span class="card-tag">${c.tag}</span>
      <div class="card-title">${c.title}</div>
      <p class="card-desc">${c.desc}</p>
    `;
    display.classList.remove('reveal');
    void display.offsetWidth;
    display.classList.add('reveal');
  });
