document.getElementById('getRegisterNumber').addEventListener('hidden.bs.modal', function () {
    document.getElementById('carParkingTable').innerHTML = '';
    document.getElementById('colorByRegisterForm').reset();
});
document.getElementById('getSlotNumber').addEventListener('hidden.bs.modal', function () {
    document.getElementById('slotTable').innerHTML = '';
    document.getElementById('slotNumberByRegisterForm').reset();
});
document.getElementById('getSlotsNumber').addEventListener('hidden.bs.modal', function () {
    document.getElementById('slotsTable').innerHTML = '';
    document.getElementById('slotNumbersByCarColorForm').reset();
});