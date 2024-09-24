// Create new  history div after Every Donation
function createHistory(donationAmount, donationAmountID) {
  const historyContainer = document.getElementById("historyContainer");
  const donationTime = new Date();

  // Get donation Subject Name
  const parentDiv = document.getElementById(donationAmountID).parentElement;
  const h2Element = parentDiv.getElementsByTagName("h2")[1];
  const donatioName = h2Element.innerHTML;

  const historyDiv = document.createElement("div");
  historyDiv.innerHTML = `
    <div class="p-6 grid gap-2 border rounded-2xl">
      <h2 class="text-md font-bold">${donationAmount} Taka is Donated for <span class="text-primary-text bg-lime-100 rounded-lg"> ${donatioName} </span></h2>
      </h2>
      <p class="text-secondary-text">Date: ${donationTime}</p>
    </div>
  `;
  historyContainer.appendChild(historyDiv);
}



// Commmon Function for Show Modal
function showModal() {
  const modalTemplate = `
          <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box flex flex-col justify-center items-center gap-4">
                <h2 class="text-5xl font-extrabold">Congrates!</h2>
                <img src="./assets/coin.png" class="h-20  py-2" alt="Coin" />
                <p class="text-xl text-secondary-text">You Have Donated for Humankind</p>
                <p class="text-2xl font-bold">Succesfully</p>
                <div class="modal-action flex justify-center">
                    <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close Confirmation</button>
                    </form>
                </div>
            </div>
        </dialog>
        `;

  const dialogElement = document.createElement("div");
  dialogElement.innerHTML = modalTemplate;
  document.body.appendChild(dialogElement);

  dialogElement.querySelector("#my_modal_5").showModal();
}

// for Checking Amount data type


// Common function for Donate Button Click
function donateNow(currentBalanceID, donationAmountID, myBalanceID) {
  // extra check for donation amount
  if (isNaN(document.getElementById(donationAmountID).value)) {
    alert("Please enter only number");
    return;
  }

  const currentBalance = parseFloat(
    document.getElementById(currentBalanceID).innerText
  );
  const donationAmount = parseFloat(
    document.getElementById(donationAmountID).value
  );
  const myBalance = parseFloat(document.getElementById(myBalanceID).innerText);

  if (
    !isNaN(donationAmount) &&
    donationAmount > 0 &&
    donationAmount <= myBalance
  ) {
    const updatedCurrentBalance = currentBalance + donationAmount;
    const updatedMyBalance = myBalance - donationAmount;

    document.getElementById(currentBalanceID).innerText = updatedCurrentBalance;
    document.getElementById(donationAmountID).value = "";
    document.getElementById(myBalanceID).innerText = updatedMyBalance;
    // alert(`You Have Donated TK. ${donationAmount}`);
    showModal();
  } else {
    alert("Please enter a valid donation amount.");
    return;
  }
  // Create new history div after every donation
  createHistory(donationAmount, donationAmountID);
}




// Commmon FUnction for Toggleing donation and history
function toggleElements(showElementID, hideElementID) {
  const showElement = document.getElementById(showElementID);
  const hideElement = document.getElementById(hideElementID);

  showElement.classList.remove("hidden");
  hideElement.classList.add("hidden");
}

// Commmon FUnction for Toggleing Btn Color
function toggleBtnColor(showElementID, hideElementID) {
  const showElement = document.getElementById(showElementID);
  const hideElement = document.getElementById(hideElementID);

  showElement.classList.add("bg-btn-color");
  hideElement.classList.remove("bg-btn-color");
  
}

