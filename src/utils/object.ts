export const objectIsEmpty = <T extends Object>(objectValue: T): boolean => {
	for (let i in objectValue) return false;

	return true;
};