var lause = "Tässä     lauseessa     on     liikaa  onnaa välejä.";

function lauseenKorjaus() {
  lause = lause.replace(/\s+/g, " ");
  lause = lause.replace(/\bon\b/g, "oli");
  console.log(lause);
}

lauseenKorjaus();
