// soal 1
const today = new Date();
const currentYear = today.getFullYear();
console.log(currentYear); // output: 2024

// soal 2
const now = new Date();
const isoDate = now.toISOString();
console.log(isoDate); // output: 2024-09-18T02:58:22.186z

// soal 3
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[date.getMonth()];
console.log(monthName); //output: september

// soal 4
const startDate = new Date('2024-01-01');
const endDate = new Date('2024-12-31');
const difference = endDate.getTime() - startDate.getTime();
console.log(difference); //output: 31536000000

// soal 5
const date2 = new Date('2024-09-18');
const dayOfWeek = date2.getDay();
console.log(dayOfWeek); //output: 3

// soal 6
const currentTime = new Date();
const hours = currentTime.getHours(); // Mendapatkan jam
const minutes = currentTime.getMinutes(); // Mendapatkan menit
const seconds = currentTime.getSeconds(); // Mendapatkan detik
console.log(`Current time: ${hours}:${minutes}:${seconds}`); //output: Current time: 10:5:28

// soal 7
const date3 = new Date();
const day = String(date3.getDate()).padStart(2, '0'); // Mendapatkan tanggal
const month = String(date3.getMonth() + 1).padStart(2, '0'); // Mendapatkan bulan
const year = date3.getFullYear(); // Mendapatkan tahun
console.log(`${day}/${month}/${year}`); // output: 18/09/2024

// soal 8
const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const differenceInTime = end.getTime() - start.getTime();
const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Konversi dari milidetik ke hari
console.log(differenceInDays); // output: 365

// soal 9
const today2 = new Date();
today.setDate(today.getDate() + 7); // Tambahkan 7 hari
console.log(today); // output: 2024-09-25T03:23:20.703Z

// soal 10
const localTime = new Date();
const utcTime = localTime.toISOString(); // Mendapatkan waktu UTC
console.log(utcTime); // output: 2024-09-18To3:23:20.713Z
