document.addEventListener("DOMContentLoaded", function () {
  const poundsInput = document.getElementById("pounds");
  const kgValue = document.getElementById("kgValue");

  poundsInput.addEventListener("input", convertWeight);

  function convertWeight() {
    const pounds = parseFloat(poundsInput.value);

    if (isNaN(pounds)) {
      kgValue.textContent = "0.00";
      return;
    }

    const kilograms = pounds * 0.45359237;

    kgValue.textContent = kilograms.toFixed(2);
  }

  poundsInput.focus();
});
