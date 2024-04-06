document.getElementById('slotDataBtn').addEventListener('click', async (event) => {
    event.preventDefault();

    try {
        const carNumber = document.getElementById('carNumber').value;
        const response = await fetch(`/getCarSlotByRegNumber?carNumber=${carNumber}`);
        const data = await response.json();

        const carParkingTable = document.getElementById('slotTable');
        carParkingTable.innerHTML = '';

        if (data.length === 0) {
            const errorMessage = `
                <tr>
                    <td colspan="3">No data found.</td>
                </tr>
            `;
            carParkingTable.insertAdjacentHTML('beforeend', errorMessage);
        } else {
            data.forEach((car, index) => {
                const indianDateTime = indianDateTimeF.format(new Date(data[index].entryDate));
                const [indianDate, indianTime] = indianDateTime.split(',');
                const row = `
                    <tr>
                        <td>${car.carNumber}</td>
                        <td>${car.slotNumber}</td>
                        <td>${indianDate} & ${indianTime}</td>
                    </tr>
                `;
                carParkingTable.insertAdjacentHTML('beforeend', row);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
