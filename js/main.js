
// donateBtnNoakhali by passing ID as parameter
donateBtnNoakhali.addEventListener("click", () =>
  donateNow("balanceNoakhali", "donationAmountNoakhali", "myBalance")
);
// donateBtnFeni by passing ID as parameter
donateBtnFeni.addEventListener("click", () =>
  donateNow("balanceFeni", "donationAmountFeni", "myBalance")
);
// donateBtnMovement by passing ID as parameter
donateBtnMovement.addEventListener("click", () =>
  donateNow("balanceMovement", "donationAmountMovement", "myBalance")
);





// Donation and History buttons Toggle
const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");

donationBtn.addEventListener("click", () => {
  console.log("donationBtn clicked");
  toggleElements('donation', 'history');
});

historyBtn.addEventListener("click", () => {
  console.log("historyBtn clicked");
  toggleElements('history', 'donation');
});


