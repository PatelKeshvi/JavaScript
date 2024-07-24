document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    let spreadsheetData = JSON.parse(localStorage.getItem('spreadsheetData')) || [];
    spreadsheetData.push(userData);
    localStorage.setItem('spreadsheetData', JSON.stringify(spreadsheetData));

    window.location.href = '/JAVASCRIPT/Excel_Sheet/excel.html';

});