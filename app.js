// Get footer Year
const getYear = new Date().getFullYear();
const fullYear = `${getYear}`;
const getDate = document.getElementById("getDate");
getDate.innerHTML = fullYear;
