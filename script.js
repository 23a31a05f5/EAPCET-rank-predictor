function predictRank() {
  const eamcetInput = document.getElementById("eamcet");
  const ipeInput = document.getElementById("ipe");
  const resultBox = document.getElementById("result");

  const eamcetScore = eamcetInput.value.trim();
  const ipeScore = ipeInput.value.trim();

  // Check for empty fields
  if (eamcetScore === "" || ipeScore === "") {
    resultBox.innerHTML = "⚠️ Please enter both EAPCET and IPE scores.";
    resultBox.style.color = "red";
    return;
  }

  const eamcet = parseFloat(eamcetScore);
  const ipe = parseFloat(ipeScore);

  // Validate score ranges
  if (
    isNaN(eamcet) || eamcet < 0 || eamcet > 160 ||
    isNaN(ipe) || ipe < 0 || ipe > 600
  ) {
    resultBox.innerHTML = "Invalid input. EAPCET (0–160), IPE (0–600)";
    resultBox.style.color = "red";
    return;
  }

  if (eamcet < 40) {
    resultBox.innerHTML = "You are not qualified. Minimum EAPCET marks: 40";
    resultBox.style.color = "red";
    return;
  }

  // Normalize scores
  const eamcetNormalized = (eamcet / 160) * 75;
  const ipeNormalized = (ipe / 600) * 25;
  const finalScore = eamcetNormalized + ipeNormalized;

  // Estimate rank based on final score
  let rank;
if (finalScore >= 94 && finalScore<=100) rank = "1 – 50";
else if (finalScore >= 91&& finalScore<=93.9) rank = "51 – 150";
else if (finalScore >= 87.5 && finalScore<=90.8) rank = "151 – 500";
else if (finalScore >= 84 && finalScore<=87.4) rank = "501 – 1,000";
else if (finalScore >= 80 && finalScore<=83.9) rank = "1,001 – 2,000";
else if (finalScore >= 76 && finalScore<=79.9) rank = "2,001 – 3,500";
else if (finalScore >= 72.5 && finalScore<=75.9) rank = "3,501 – 6,000";
else if (finalScore >= 69 && finalScore<=72.4) rank = "6,001 – 9,000";
else if (finalScore >= 65.5 && finalScore<=68.9) rank = "9,001 – 12,000";
else if (finalScore >= 62 && finalScore<=65.4) rank = "12,001 – 15,000";
else if (finalScore >= 58.5&& finalScore<=61.9) rank = "15,001 – 18,000";
else if (finalScore >= 55 && finalScore<=58.4) rank = "18,001 – 22,000";
else if (finalScore >= 51.5 && finalScore<=54.9) rank = "22,001 – 30,000";
else if (finalScore >= 48 && finalScore<=51.4) rank = "30,001 – 40,000";
else if (finalScore >= 44.5 && finalScore<=47.9) rank = "40,001 – 50,000";
else if (finalScore >= 41 && finalScore<=44.4) rank = "50,001 – 65,000";
else if (finalScore >= 37.5 && finalScore<=40.9) rank = "65,001 – 80,000";
else if (finalScore >= 34 && finalScore<=37.4) rank = "80,001 – 95,000";
else if (finalScore >= 30.5 && finalScore<=33.9) rank = "95,001 – 1,10,000";
else if (finalScore >= 27 && finalScore<=30.4) rank = "1,10,001 – 1,30,000";
else if (finalScore >= 23.5 && finalScore<=26.9) rank = "1,30,001 – 1,50,000";
else if (finalScore >= 20 && finalScore<=23.4) rank = "1,50,001 – 1,70,000";
else if (finalScore >= 16.5 && finalScore<=19.9) rank = "1,70,001 – 2,00,000";
else if (finalScore >= 13 && finalScore<=16.4) rank = "2,00,000+ (Qualified limit)";



  // Display result in clear format
  resultBox.style.whiteSpace = "pre-line"; // allows \n to break lines

  resultBox.innerHTML = `
 <strong>EAPCET Normalized Score:</strong> ${eamcetNormalized.toFixed(2)} 
 <strong>IPE Normalized Score:</strong> ${ipeNormalized.toFixed(2)} 
 <strong>Final Combined Score:</strong> ${finalScore.toFixed(2)} 
 <strong>Estimated Rank:</strong> ${rank}
  `;
}
