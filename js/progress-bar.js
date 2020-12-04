var progressFills = document.querySelectorAll(".progress-bar__fill");
var progressValues = document.querySelectorAll(".progress-bar__value");

setTimeout(() => {
  progressFills.forEach(function (progressFillEl) {
    progressFillEl.style.width = progressFillEl.getAttribute("data-fill") + "%";
    progressFillEl.style.opacity = "100%";
  });
  progressValues.forEach(function (progressValue) {
    progressValue.style.opacity = "100%";
  });
}, 400);
