/**
 * *feni Section JS
 */ 

const donateNoakhali = document
  .getElementById("donate-noakhali-button")
  .addEventListener("click", function () {
    const inputNoakhali = parseFloat(
      document.getElementById("input-noakhali").value
    );
    const balance = parseFloat(
        document.getElementById("main-balance").innerText
      );
    if (isNaN(inputNoakhali) || inputNoakhali <0 ){
        alert("Enter valid donation amount");
        document.getElementById("input-noakhali").value = "";
      }
     else if(inputNoakhali>balance){
        alert('Donation amount more than Total Balance');
        document.getElementById("input-noakhali").value = "";
    }
    else {
      const totalBalance = balance - inputNoakhali;
      document.getElementById("main-balance").innerText = totalBalance;

      // Show total donation amount to Noakhali
      const noakhaliBalance = parseFloat(
        document.getElementById("noakhali-balance").innerText
      );
      const noakhaliBalanceTotal = noakhaliBalance + inputNoakhali;
      document.getElementById("noakhali-balance").innerText =
        noakhaliBalanceTotal;
      // Show Donation to History Section
      const addToHistory = document.getElementById("history-container");
      const createDiv = document.createElement("div");
      createDiv.classList.add(
        "border",
        "rounded-2xl",
        "mb-8",
        "p-8",
        "mx-4",
        "lg:mx-0"
      );
      createDiv.innerHTML += `
 <p><span class="font-bold">${inputNoakhali}</span> Taka is donated for famine-2024 at Noakhali, Bangladesh.</p>
 <p> Date: ${new Date().toLocaleString()}</p>
`;
      const inserttBefore = addToHistory.firstElementChild;
      addToHistory.insertBefore(createDiv, inserttBefore);
      document.getElementById("noakhali-modal").showModal();
      document.getElementById("input-noakhali").value = "";
    }  
  });


/**
 * Feni Section JS
 */   

const donateFeni = document
  .getElementById("donate-feni-button")
  .addEventListener("click", function () {
    const inputFeni = parseFloat(
      document.getElementById("input-feni").value
    );
    const balance = parseFloat(
        document.getElementById("main-balance").innerText
      );
    if (isNaN(inputFeni) || inputFeni <0 ){
        alert("Enter valid donation amount");
        document.getElementById("input-feni").value = "";
      }
     else if(inputFeni>balance){
        alert('Donation amount more than Total Balance');
        document.getElementById("input-feni").value = "";
    }
    else {
      const totalBalance = balance - inputFeni;
      document.getElementById("main-balance").innerText = totalBalance;

      // Show total donation amount to Feni
      const feniBalance = parseFloat(
        document.getElementById("feni-balance").innerText
      );
      const feniBalanceTotal = feniBalance + inputFeni;
      document.getElementById("feni-balance").innerText =
        feniBalanceTotal;
      // Show Donation to History Section
      const addToHistory = document.getElementById("history-container");
      const createDiv = document.createElement("div");
      createDiv.classList.add(
        "border",
        "rounded-2xl",
        "mb-8",
        "p-8",
        "mx-4",
        "lg:mx-0"
      );
      createDiv.innerHTML += `
 <p><span class="font-bold">${inputFeni}</span> Taka is donated for famine-2024 at Feni, Bangladesh.</p>
 <p> Date: ${new Date().toLocaleString()}</p>
`;
      const inserttBefore = addToHistory.firstElementChild;
      addToHistory.insertBefore(createDiv, inserttBefore);
      document.getElementById("feni-modal").showModal();
      document.getElementById("input-feni").value = "";
    }  
  });


  
// Quota JS
const donateQuota = document
  .getElementById('donate-quota-button')
  .addEventListener("click", function () {
    const inputQuota = parseFloat(
      document.getElementById("input-quota").value
    )
    ;
    const balance = parseFloat(
        document.getElementById("main-balance").innerText
      );
      console.log("Input Quota:", inputQuota);


    if (isNaN(inputQuota) || inputQuota <0 ){
        alert("Enter valid donation amount");
        document.getElementById("input-quota").value = "";
      }
     else if(inputQuota>balance){
        alert('Donation amount more than Total Balance');
        document.getElementById("input-quota").value = "";
    }
    else {
      const totalBalance = balance - inputQuota;
      document.getElementById("main-balance").innerText = totalBalance;

      // Show total donation amount to Quota Movement Injured
      const quotaBalance = parseFloat(
        document.getElementById("quota-balance").innerText
      );
      const quotaBalanceTotal = quotaBalance + inputQuota;
      document.getElementById("quota-balance").innerText =
        quotaBalanceTotal;
      // Show Donation to History Section
      const addToHistory = document.getElementById("history-container");
      const createDiv = document.createElement("div");
      createDiv.classList.add(
        "border",
        "rounded-2xl",
        "mb-8",
        "p-8",
        "mx-4",
        "lg:mx-0"
      );
      createDiv.innerHTML += `
 <p><span class="font-bold">${inputQuota}</span> Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
 <p> Date: ${new Date().toLocaleString()}</p>
`;
      const inserttBefore = addToHistory.firstElementChild;
      addToHistory.insertBefore(createDiv, inserttBefore);
      document.getElementById("quota-modal").showModal();
      document.getElementById("input-quota").value = "";
    }  
  });
