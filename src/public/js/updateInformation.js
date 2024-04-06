async function updateInformation() {
    try {
        const responce = await fetch('/getCarAndSlotCount');
        const data = await responce.json();
        document.getElementById('availableSlots').innerText = `Available Slots - ${data.slotCount}`;
        document.getElementById('bookedSlots').innerText = `Booked Slots - ${data.carCount}`;
    } catch (err) { console.log(err) };
}
updateInformation();