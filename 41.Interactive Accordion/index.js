const buttons = document.querySelectorAll(".tab-buttons");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tabs");

    buttons.forEach(btn => {
      btn.classList.remove("active");
      btn.querySelector("img").classList.remove("rotate");
    });

  
    button.classList.add("active");
    button.querySelector("img").classList.add("rotate");

    tabs.forEach(tab => tab.classList.remove("active"));

    document.getElementById(`tab-${target}`).classList.add("active");
  });
});
