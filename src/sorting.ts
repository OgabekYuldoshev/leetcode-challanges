type DateString = string; // Format: "DD.MM.YYYY HH:mm:ss"

function parseDateString(dateStr: DateString): Date {
	const [datePart, timePart] = dateStr.split(" ");
	const [day, month, year] = datePart.split(".");
	const [hours, minutes, seconds] = timePart.split(":");

	return new Date(
		Number.parseInt(year),
		Number.parseInt(month) - 1, // Months are 0-based in JavaScript
		Number.parseInt(day),
		Number.parseInt(hours),
		Number.parseInt(minutes),
		Number.parseInt(seconds),
	);
}

function sortDates(dates: DateString[]): DateString[] {
	return [...dates].sort((a, b) => {
		const dateA = parseDateString(a);
		const dateB = parseDateString(b);
		return dateB.getTime() - dateA.getTime();
	});
}

// Example usage:
const dates: DateString[] = [
	"01.11.2024 12:05:02",
	"01.11.2024 13:14:42",
	"31.10.2024 11:52:05",
];

const sortedDates = sortDates(dates);
console.log(sortedDates);
