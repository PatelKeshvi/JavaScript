    const spreadsheetBody = document.getElementById('spreadsheet').querySelector('tbody');
    const numberOfRows = 50;

    for (let i = 0; i < numberOfRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.contentEditable = true;
            cell.addEventListener('blur', () => saveChanges(i, j, cell.textContent));
            row.append(cell);
        }
        spreadsheetBody.append(row);
    }

    const spreadsheetData = JSON.parse(localStorage.getItem('spreadsheetData')) || [];

    for (let i = 0; i < spreadsheetData.length; i++) {
        const row = spreadsheetBody.rows[i];
        const data = spreadsheetData[i];
        let cellIndex = 0;
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                const cell = row.cells[cellIndex];
                cell.textContent = data[key];
                cellIndex++;
            }
        }
    }

    function saveChanges(rowIndex, cellIndex, value) {
        let spreadsheetData = JSON.parse(localStorage.getItem('spreadsheetData')) || [];

        if (!spreadsheetData[rowIndex]) {
            spreadsheetData[rowIndex] = {};
        }

        const keys = ['firstName', 'lastName', 'email', 'age', 'mobile', 'birthDate', 'address', 'city', 'state', 'country'];
        const key = keys[cellIndex];

        spreadsheetData[rowIndex][key] = value;

        localStorage.setItem('spreadsheetData', JSON.stringify(spreadsheetData));
    }