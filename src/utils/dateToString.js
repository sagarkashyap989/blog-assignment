// src/utils.js
export function dateToString() {
    const currentDate = new Date(Date.now());

    // Format the date as {month, date, year}
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    console.log(formattedDate, 'levi')
    return formattedDate;
  }
  