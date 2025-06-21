const buttons = document.querySelectorAll(".tab-buttons");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tabs");
    buttons.forEach(btn => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");
    
    tabs.forEach(tab => tab.classList.remove("active"));

    // Add active class to the target tab
    document.getElementById(`tab-${target}`).classList.add("active");
  });
});
