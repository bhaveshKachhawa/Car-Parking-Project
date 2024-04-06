document.getElementById('fetchDataBtn').addEventListener('click', async (event) => {
    event.preventDefault();

    try {
        const color = document.getElementById('color').value;
        const response = await fetch(`/getSameColorCarsData?color=${color}`);
        const data = await response.json();

        const carParkingTable = document.getElementById('carParkingTable');
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
                        <td>${car.carNumber}</td>
                        <td>${car.color}</td>
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