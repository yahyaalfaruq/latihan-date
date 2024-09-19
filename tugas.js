const startTime = new Date().getTime();

for (let i = 0; i < 10000; i++) {
  console.log("Hello Santri");
}

const lastTime = new Date().getTime();
const milisecond = startTime - lastTime;
console.log(milisecond);

const now = new Date(); // waktu sekarang

const soloTime = new Date("2024-09-19T07:00:00"); // waktu di Solo WIB
const utcTime = new Date(soloTime.getTime() + 7 * 60 * 60 * 1000); // konversi ke UTC
const witTime = new Date(utcTime.getTime() + 2 * 60 * 60 * 1000); // konversi ke WIT

const options = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Jayapura",
};
const formattedTime = witTime.toLocaleString("id-ID", options);
console.log(`Jadwal Meet Online: ${formattedTime} WIT`);

const expired24Hours = new Date(
  now.getTime() + 24 * 60 * 60 * 1000
).toISOString();
const expired1Month = new Date(
  now.getFullYear(),
  now.getMonth() + 1,
  now.getDate()
).toISOString();
const expired3Months = new Date(
  now.getFullYear(),
  now.getMonth() + 3,
  now.getDate()
).toISOString();
const expired1Year = new Date(
  now.getFullYear() + 1,
  now.getMonth(),
  now.getDate()
).toISOString();

console.log(`Expired 24 jam: ${expired24Hours}`);
console.log(`Expired 1 bulan: ${expired1Month}`);
console.log(`Expired 3 bulan: ${expired3Months}`);
console.log(`Expired 1 tahun: ${expired1Year}`);

const santri = [
  {
    name: "gaza",
    nilai: 90,
    waktu_pengumpulan: "2024-09-15T08:00:00Z",
    deadline: "2024-09-13T08:00:00Z",
  },
  {
    name: "gifari",
    nilai: 85,
    waktu_pengumpulan: "2024-09-13T07:00:00Z",
    deadline: "2024-09-13T08:00:00Z",
  },
  {
    name: "afiq",
    nilai: 78,
    waktu_pengumpulan: "2024-09-14T09:00:00Z",
    deadline: "2024-09-13T08:00:00Z",
  },
  {
    name: "akrom",
    nilai: 88,
    waktu_pengumpulan: "2024-09-12T10:00:00Z",
    deadline: "2024-09-13T08:00:00Z",
  },
  {
    name: "fazle",
    nilai: 70,
    waktu_pengumpulan: "2024-09-16T11:00:00Z",
    deadline: "2024-09-13T08:00:00Z",
  },
  {
    name: "john",
    nilai: 82,
    waktu_pengumpulan: "2024-09-13T08:00:00Z",
    deadline: "2024-09-13T08:00:00Z",
  },
  {
    name: "hafiz",
    nilai: 75,
    waktu_pengumpulan: "2024-09-14T08:30:00Z",
    deadline: "2024-09-13T08:00:00Z",
  },
];

const expiredSantri = santri
  .filter((s) => new Date(s.waktu_pengumpulan) > new Date(s.deadline))
  .map((s) => s.name);
console.log(expiredSantri); // akan menampilkan nama yang expired

const firstSubmitted = santri
  .sort((a, b) => new Date(a.waktu_pengumpulan) - new Date(b.waktu_pengumpulan))
  .map((s) => [s.name, s.waktu_pengumpulan]);
console.log(firstSubmitted); // menampilkan array [nama, waktu_pengumpulan]

const lastSubmitted = santri
  .sort((a, b) => new Date(b.waktu_pengumpulan) - new Date(a.waktu_pengumpulan))
  .map((s) => [s.name, s.waktu_pengumpulan]);
console.log(lastSubmitted); // menampilkan array [nama, waktu_pengumpulan]

const finalScores = santri.map((s) => {
  if (new Date(s.waktu_pengumpulan) <= new Date(s.deadline)) {
    s.nilai = Math.min(s.nilai + 10, 100); // menambahkan 10 dengan maksimum 100
  }
  return { name: s.name, nilai_akhir: s.nilai };
});
console.log(finalScores); // menampilkan array [nama, nilai_akhir]
