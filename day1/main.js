window.addEventListener("DOMContentLoaded", () => {
  // window.addEventListener("keypress", (e) => {
  //   const drumKey = document.querySelector(`[data-key="${e.code}"]`);

  //   drumKey.classList.add("played");

  //   setTimeout(() => {
  //     drumKey.classList.remove("played");
  //   }, 200);
  // });

  window.addEventListener("keydown", (e) => {
    const drumKey = document.querySelector(`[data-key="${e.code}"]`);

    drumKey.classList.add("played");
  });

  window.addEventListener("keyup", (e) => {
    const drumKey = document.querySelector(`[data-key="${e.code}"]`);

    setTimeout(() => {
      drumKey.classList.remove("played");
    }, 200);
  });

  document.querySelectorAll("button.drum-keys").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.classList.add("played");

      setTimeout(() => {
        e.target.classList.remove("played");
      }, 200);

    });
  });
});
