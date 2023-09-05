document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("voting-form");
  const canvas = document.getElementById("voting-results");
  const clearButton = document.getElementById("clear-results");

  const ctx = canvas.getContext("2d");

  let votingResults = JSON.parse(localStorage.getItem("votingResults")) || {
    "hesburger-votes": 0,
    "mcdonalds-votes": 0,
    "kungfuband-votes": 0,
    "rax-votes": 0,
    "peppino-votes": 0,
  };

  function updateVotingResults() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const selectedRestaurant = form.querySelector(
      "input[name=restaurant]:checked"
    );

    if (selectedRestaurant) {
      const restaurantId = selectedRestaurant.id;
      votingResults[restaurantId] += 1;
    }

    let barX = 10;
    const barWidth = 30;
    const maxVotes = Math.max(...Object.values(votingResults));
    const barSpacing = (canvas.width - 40) / Object.keys(votingResults).length;
    for (const restaurant in votingResults) {
      const votes = votingResults[restaurant];
      const barHeight = (votes / maxVotes) * 150;
      ctx.fillStyle = "#0074D9";
      ctx.fillRect(barX, canvas.height - barHeight, barWidth, barHeight);
      ctx.fillStyle = "#000000";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        restaurant.replace("-votes", ""),
        barX + barWidth / 2,
        canvas.height - barHeight - 10
      );

      barX += barSpacing;
    }
    localStorage.setItem("votingResults", JSON.stringify(votingResults));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    updateVotingResults();
  });

  clearButton.addEventListener("click", function () {
    votingResults = {
      "hesburger-votes": 0,
      "mcdonalds-votes": 0,
      "kungfuband-votes": 0,
      "rax-votes": 0,
      "peppino-votes": 0,
    };
    localStorage.removeItem("votingResults");
    location.reload();
  });

  updateVotingResults();
});
