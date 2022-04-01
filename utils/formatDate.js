export const formatDate = (date) => {
    const longMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const isoDate = new Date(date);
    const day = isoDate.getDate();
    const month = longMonths[isoDate.getMonth()];
    const year = isoDate.getFullYear();
    const fullDate = `${day}-${month}-${year}`;
    return fullDate;
};