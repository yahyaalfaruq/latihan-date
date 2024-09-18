
const today = new Date();
const currentYear = today.getFullYear();
console.log(currentYear); // output: 2024


const now = new Date();
const isoDate = now.toISOString();
console.log(isoDate); // output: 2024-09-18T02:58:22.186z


const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[date.getMonth()];
console.log(monthName); //outpit: september


const startDate = new Date('2024-01-01');
const endDate = new Date('2024-12-31');
const difference = endDate.getTime() - startDate.getTime();
console.log(difference); //output: 31536000000


const date2 = new Date('2024-09-18');
const dayOfWeek = date.getDay();
console.log(dayOfWeek); //output: 3


const currentTime = new Date();
const hours = currentTime.getHours(); // Mendapatkan jam
const minutes = currentTime.getMinutes(); // Mendapatkan menit
const seconds = currentTime.getSeconds(); // Mendapatkan detik
console.log(`Current time: ${hours}:${minutes}:${seconds}`); //output: Current time: 10:5:28


const date3 = new Date();
const day = String(date.getDate()).padStart(2, '0'); // Mendapatkan tanggal
const month = String(date.getMonth() + 1).padStart(2, '0'); // Mendapatkan bulan
const year = date.getFullYear(); // Mendapatkan tahun
console.log(`${day}/${month}/${year}`); // output: 18/09/2024


const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const differenceInTime = end.getTime() - start.getTime();
const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Konversi dari milidetik ke hari
console.log(differenceInDays); // output: 


const today2 = new Date();
today.getDate(today.getDay() + 7); // Tambahkan 7 hari
console.log(today);