// ===== Typewriter ===== \\
const change = document.querySelector("#change");
const changeTypewriter = new Typewriter(change, {
  loop:true,
});
changeTypewriter.typeString('Game')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web')
    .pauseFor(2500)
    .deleteAll()
    .start();
// ===== Footer Jahr Auto-Update ===== \\
document.querySelector('.footer-right').textContent = `© ${new Date().getFullYear()} Dennis De Col | All rights reserved.`;