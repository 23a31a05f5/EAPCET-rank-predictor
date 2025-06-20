function predictRank() {
    const eamcetScore = parseFloat(document.getElementById("eamcet").value);
    const ipeScore = parseFloat(document.getElementById("ipe").value);
    const resultBox = document.getElementById("result");
  
    if (
      isNaN(eamcetScore) || eamcetScore < 0 || eamcetScore > 160 ||
      isNaN(ipeScore) || ipeScore < 0 || ipeScore > 600
    ) {
      resultBox.innerText = "Please enter valid scores:\n- EAMCET: 0–160\n- IPE: 0–600";
      return;
    }
  
    if (eamcetScore < 40) {
      resultBox.innerHTML = `
        <strong style="color: red;">You are not qualified for AP EAPCET.</strong><br/>
        Minimum qualifying mark is <strong>40</strong> out of 160.
      `;
      return;
    }
  
    // Normalize scores to 100
    const eamcetNormalized = (eamcetScore / 160) * 75;
    const ipeNormalized = (ipeScore / 600) * 25;
    const finalScore = eamcetNormalized + ipeNormalized;
  
    // Estimate rank based on final score
    let rank;
    if (finalScore >= 95) rank = "1 – 100";
    else if (finalScore >= 90) rank = "101 – 500";
    else if (finalScore >= 80) rank = "501 – 2000";
    else if (finalScore >= 70) rank = "2001 – 10000";
    else if (finalScore >= 60) rank = "10001 – 25000";
    else if (finalScore >= 50) rank = "25001 – 50000";
    else if (finalScore >= 40) rank = "50001 – 100000";
    else rank = "100000+ (Consider management or lower-tier options)";
  
    resultBox.innerHTML = `
      <strong>Final Normalized Score:</strong> ${finalScore.toFixed(2)} / 100<br/>
      <strong>Estimated Rank:</strong> ${rank}
    `;
  }
  