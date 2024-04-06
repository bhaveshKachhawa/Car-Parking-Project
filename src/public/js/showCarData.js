async function fetchCarParkingData() {
    try {
        const response = await fetch('/getParkedCarsData');
        const data = await response.json();
        const carParkingTableBody = document.getElementById('carParkingTableBody');
        carParkingTableBody.innerHTML = '';
        if (data.length === 0) {
            const errorMessage = `
                <tr>
                    <td colspan="3">All slot is empty.</td>
                </tr>
            `;
            carParkingTableBody.insertAdjacentHTML('beforeend', errorMessage);
        } else {
            data.forEach((car, index) => {
                const indianDateTime = indianDateTimeF.format(new Date(data[index].entryDate));
                const [indianDate, indianTime] = indianDateTime.split(',');
                const row = `
                    <tr>
                        <td>${car.slotNumber}</td>
                        <td>${car.carNumber}</td>
                        <td>${car.color}</td>
                        <td>${indianDate} & ${indianTime}</td>
                    </tr>
                `;
                carParkingTableBody.insertAdjacentHTML('beforeend', row);
            });
        }
    } catch (error) {
        console.error('Error fetching car parking data:', error);
    }
}
document.getElementById('viewalldata').addEventListener('show.bs.modal', async function (event) {
    await fetchCarParkingData();
});