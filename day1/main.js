window.addEventListener("DOMContentLoaded", () => {
  const KEYS_TO_LISTEN = [
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
  ];

  const keyPressHandle = (event) => {
    try {
      const drumKey = document.querySelector(
        `button[data-key="${event.code}"]`
      );

      const drumAudio = document.querySelector(
        `audio[data-key="${event.code}"]`
      );

      if (event.type === "keydown") {
        drumKey.classList.add("played");
        drumAudio.play();
      } else if (event.type === "keyup") {
        setTimeout(() => {
          drumKey.classList.remove("played");
        }, 200);
      }
    } catch (e) {
      throw TypeError(e);
    }
  };

  window.addEventListener("keydown", (event) => {
    if (KEYS_TO_LISTEN.includes(event.code)) keyPressHandle(event);
  });

  window.addEventListener("keyup", (event) => {
    if (KEYS_TO_LISTEN.includes(event.code)) keyPressHandle(event);
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
