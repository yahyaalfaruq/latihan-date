const startTime = new Date().getTime();

for (let i = 0; i < 10000; i++) {
    console.log("Hello Santri");
}

const lastTime = new Date().getTime();
const milisecond = startTime - lastTime;
console.log(milisecond);
