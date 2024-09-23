// Toggle Donation and History Button and change color by click
const historyContainer= document.getElementById('history-container');
const donationContainer= document.getElementById('donation-container');

const historyButton= document.getElementById('history-button').addEventListener('click', function(){
    donationContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');
    const historyBtnClass= document.getElementById('history-button');
    historyBtnClass.classList.add('bg-[#B4F461]');
    historyBtnClass.classList.remove('bg-white');
    const donationBtnClass= document.getElementById('donation-button');
    donationBtnClass.classList.add('bg-white');
    donationBtnClass.classList.remove('bg-[#B4F461]');
})
const donationButton= document.getElementById('donation-button').addEventListener('click', function(){
    donationContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden');
    const donationBtnClass= document.getElementById('donation-button');
    donationBtnClass.classList.remove('bg-white');
    donationBtnClass.classList.add('bg-[#B4F461]');
    const historyBtnClass= document.getElementById('history-button');
    historyBtnClass.classList.add('bg-white');
    historyBtnClass.classList.remove('bg-[#B4F461]');
})
