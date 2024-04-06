document.getElementById('slotsDataBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const colorForSlot = document.getElementById('colorForSlot').value;
        const response = await fetch(`/getCarSlotsByColor?colorForSlot=${colorForSlot}`);
        const data = await response.json();

        const carParkingTable = document.getElementById('slotsTable');
        carParkingTable.innerHTML = '';

        if (data.length === 0) {
            const errorMessage = `
                <tr>
                    <td colspan="3">No data found for the specified color.</td>
                </tr>
            `;
            carParkingTable.insertAdjacentHTML('beforeend', errorMessage);
        } else {
            data.forEach((car, index) => {
                const indianDateTime = indianDateTimeF.format(new Date(data[index].entryDate));
                const [indianDate, indianTime] = indianDateTime.split(',');
                const row = `
                    <tr>
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
