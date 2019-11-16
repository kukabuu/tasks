/*Дан массив чисел. Необходимо найти самое маленькое число, которое пропущено. 
Если в массиве отрицательных чисел пропущено отрицательно число, то нужно вернуть 1.
Если нет пропусков, то выводим следующее за наибольшим.*/

function findSmallestInteger(A) {
	A.sort((a, b) => a - b);
	let smallestInteger = 1;

	for (let i = 0; i < A.length; i++) {
		if (smallestInteger === A[i]) {
			smallestInteger++;
		}
	}
	return smallestInteger;
}

console.log(findSmallestInteger([1, 3, 6, 4, 1, 2]));
console.log(findSmallestInteger([1, 2, 3]));
console.log(findSmallestInteger([-1, -3]));
