let text = document.querySelector(".main-text");
let textFont = document.querySelector(".font-family");
let textSize = document.querySelector(".font-size");
let textColor = document.querySelector(".text-color");

// TODO 2. Select text value and store it in a variable
let textEl = document.querySelector(".main-text");

// TODO 3. Select the value for the font-family and store it in a variable
let fontStyleEl = document.getElementById("font-style");

// TODO 4. Change the font-families value to change the text style
fontStyleEl.addEventListener("change", function () {
  let fontFamilyValue = fontStyleEl.value;

  if (fontFamilyValue === "open-sans") {
    text.style.fontFamily = "Open Sans";
  } else if (fontFamilyValue === "roboto") {
    text.style.fontFamily = "Roboto";
  } else if (fontFamilyValue === "diplomata") {
    text.style.fontFamily = "Diplomata";
  } else if (fontFamilyValue === "lora") {
    text.style.fontFamily = "Lora";
  } else if (fontFamilyValue === "google-sans") {
    text.style.fontFamily = "Google Sans";
  }
});

// Change text color
textColor.addEventListener("change", function () {
  let textColorValue = textColor.value;

  switch (textColorValue) {
    case "black":
      text.style.color = "#111827";
      break;
    case "blue":
      text.style.color = "#2563eb";
      break;
    case "red":
      text.style.color = "#dc2626";
      break;
    case "green":
      text.style.color = "#10b981";
      break;
    case "purple":
      text.style.color = "#8b5cf6";
      break;
  }
});

// Change font size
textSize.addEventListener("change", function () {
  let textSizeValue = textSize.value;

  switch (textSizeValue) {
    case "small":
      text.style.fontSize = "14px";
      break;
    case "medium":
      text.style.fontSize = "16px";
      break;
    case "large":
      text.style.fontSize = "24px";
      break;
    case "extra-large":
      text.style.fontSize = "36px";
      break;
  }
});

// Change font family
textFont.addEventListener("change", function () {
  let textFontValue = textFont.value;

  switch (textFontValue) {
    case "montserrat":
      text.style.fontFamily = "Montserrat";
      break;
    case "poppins":
      text.style.fontFamily = "Poppins";
      break;
    case "lato":
      text.style.fontFamily = "Lato";
      break;
    case "inter":
      text.style.fontFamily = "Inter";
      break;
    case "roboto":
      text.style.fontFamily = "Roboto";
      break;
  }
});
