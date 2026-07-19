const menus = document.querySelectorAll(".plate-menu a, .song-menu a");

menus.forEach(button => {

  button.addEventListener("click", e => {

    e.preventDefault();

    const menu = button.parentElement;
    const buttons = menu.querySelectorAll("a");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    const isSong = menu.classList.contains("song-menu");

    const cards = isSong
      ? document.querySelectorAll(".song-card")
      : document.querySelectorAll(".plate-card");

    cards.forEach(card => {

      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});