/* fill in the blanks to make the function work as expected */
function calculateDaysBetweenDates(startDate, endDate) {
    // code here
    return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    // code here
}

function calculateMonthsBetweenDates(startDate, endDate) {
    // code here
    return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24 * 30));
    // code here
}

function calculateDaysBetweenDates(begin, end) {
    // code here
    var startDate = new Date(begin);
    var endDate = new Date(end);
    return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    // code here
}

function showHongKongPublicHoliday() {
    // code here
    var holidays = [
        { name: 'New Year\'s Day', date: '1/1/2019' },
        { name: 'Lunar New Year\'s Day', date: '5/2/2019' },
        { name: 'Ching Ming Festival', date: '5/4/2019' },
        { name: 'Good Friday', date: '19/4/2019' },
        { name: 'The day following Good Friday', date: '20/4/2019' },
        { name: 'Easter Monday', date: '22/4/2019' },
        { name: 'Labour Day', date: '1/5/2019' },
        { name: 'Tuen Ng Festival', date: '7/6/2019' },
        { name: 'Hong Kong Special Administrative Region Establishment Day', date: '1/7/2019' },
        { name: 'The day following Chinese Mid-Autumn Festival', date: '14/9/2019' },
        { name: 'National Day', date: '1/10/2019' },
        { name: 'Chung Yeung Festival', date: '7/10/2019' },
        { name: 'Christmas Day', date: '25/12/2019' },
        { name: 'The first weekday after Christmas Day', date: '26/12/2019' }
    ];
    // code here
    console.log(holidays);
}