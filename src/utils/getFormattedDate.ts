export const getFormattedDate = (date: string): string => {
	const fullDateArr = date.split(','); // format "dd.mm.yyyy, hh:mm:ss"
	const dateArr = fullDateArr[0].split('.');
	return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
}