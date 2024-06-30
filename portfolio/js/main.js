document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("weather").addEventListener("click", function () {
    window.location.href = "https://www.windy.com";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("art");
  const image = document.getElementById("art-image");

  button.addEventListener("click", function () {
    if (image.requestFullscreen) {
      image.requestFullscreen();
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("github").addEventListener("click", function () {
    window.location.href = "https://www.github.com";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("game-title");
  const res = document.getElementById("game-result");

  function generatePoem() {
    let rand = Math.floor(Math.random() * 4);
    const plant = document.getElementById("plant").value.trim();
    const animal = document.getElementById("animal").value.trim();

    if (plant === "" || animal === "") {
      alert("Please enter both a plant and an animal.");
      return;
    }

    title.textContent = `The ${animal} and the ${plant}`;

    const poem1 = `
            In the garden of ${plant}, so green and fair,
            Lives a creature, ${animal} with a curious stare.
            Among the leaves and flowers, they play,
            Together they dance, throughout the day.

            The ${plant} provides a home so sweet,
            While the ${animal} makes it complete.
            In harmony, they live, a sight to see,
            A bond of nature, wild and free.
        `;
    const poem2 = `
        Among the ${plant}s, where fragrances swirl,
        A ${animal} flits, a dance in a whirl.
        Petals soft and hues so deep,
        ${animal}'s flight, a secret to keep.
        
        ${plant}s bloom, with beauty rare,
        ${animal} dances, without a care.
        Nature's stage, a mesmerizing sight,
        In this garden, love takes flight.
        `;
    const poem3 = `
Beneath the ${plant}s, tall and bright,
A ${animal} hums softly, in morning light.
Golden petals, a sunny glow,
${animal} collects nectar, to and fro.

${plant}s bloom, heads turned high,
${animal}'s buzz echoes, under the sky.
Nature's harmony, a sweet embrace,
In this garden, life finds its place.
`;
    const poem4 = `
By the ${plant}s, where waters flow,
A ${animal} leaps high, in joyful show.
${plant}s white, in pond serene,
${animal}'s croak echoes, in tranquil scene.

${plant}s bloom, in waters calm,
${animal} finds solace, with gentle charm.
Nature's balance, whispers of peace,
In this garden, worries cease.
`;

    let arr = [poem1, poem2, poem3, poem4];
    res.textContent = arr[rand];
  }

  // Make the function accessible globally
  window.generatePoem = generatePoem;
});

document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("game-title");
  const res = document.getElementById("game-result");
  const plant = document.getElementById("plant");
  const animal = document.getElementById("animal");

  function reset() {
    plant.textContent = "";
    animal.textContent = "";
    title.textContent = "";
    res.textContent = "";
  }
  window.reset = reset;
});
