async function fetchRemovedCars() {
    try {
        const response = await fetch('/getRemovedCarsData');
        const data = await response.json();
        const removedCarsTableBody = document.getElementById('removedCarsTableBody');
        removedCarsTableBody.innerHTML = '';
        if (data.length === 0) {
            const errorMessage = `
                <tr>
                    <td colspan="3">Data not found.</td>
                </tr>
            `;
            removedCarsTableBody.insertAdjacentHTML('beforeend', errorMessage);
        } else {
            data.forEach((car, index) => {
                const indianDateTime = indianDateTimeF.format(new Date(data[index].entryDate));
                const [indianDate, indianTime] = indianDateTime.split(',');
                const indianDateTimeExit = indianDateTimeF.format(new Date(data[index].exitDate));
                const [indDate, indTime] = indianDateTimeExit.split(',');
                const row = `
                    <tr>
                        <td>${car.slotNumber}</td>
                        <td>${car.carNumber}</td>
                        <td>${car.color}</td>
                        <td>${indianDate} & ${indianTime}</td>
                        <td>${indDate} & ${indTime}</td>    
                    </tr>
                `;
                removedCarsTableBody.insertAdjacentHTML('beforeend', row);
            });
        }
    } catch (error) {
        console.error('Error fetching car parking data:', error);
    }
}
document.getElementById('viewRemoveCars').addEventListener('show.bs.modal', async function (event) {
    await fetchRemovedCars();
});