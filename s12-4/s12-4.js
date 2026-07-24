console.log("--- BÀI 1 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("Đã hoàn thành!");
    }
}

let temp = Number(prompt("Bài 2 - Nhập nhiệt độ hiện tại:"));
while (temp > 100 || temp < 20) {
    if (temp > 100) {
        temp = Number(prompt("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ:"));
    } else if (temp < 20) {
        temp = Number(prompt("Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ:"));
    }
}
alert("Nhiệt độ hợp lệ!");

let a = 0, b = 1;
let fiboStr = "20 số Fibonacci đầu tiên: ";

for (let i = 1; i <= 20; i++) {
    fiboStr += a + " ";
    let tempf = a + b;
    a = b;
    b = tempf;
}
console.log("--- BÀI 3 ---");
console.log(fiboStr);

let a4 = 0, b4 = 1;
while (true) {
    if (a4 % 5 === 0 && a4 !== 0) {
        console.log("--- BÀI 4 ---");
        console.log(`Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: ${a4}`);
        break;
    }
    let tempf = a4 + b4;
    a4 = b4;
    b4 = tempf;
}

let a5 = 0, b5 = 1, sum5 = 0;
for (let i = 1; i <= 20; i++) {
    sum5 += a5;
    let tempf = a5 + b5;
    a5 = b5;
    b5 = tempf;
}
console.log("--- BÀI 5 ---");
console.log(`Tổng 20 số Fibonacci đầu tiên = ${sum5}`);

let count6 = 0, sum6 = 0, num6 = 0;
while (count6 < 30) {
    if (num6 % 7 === 0) {
        sum6 += num6;
        count6++;
    }
    num6++;
}
console.log("--- BÀI 6 ---");
console.log(`Tổng 30 số chia hết cho 7 đầu tiên = ${sum6}`);

console.log("--- BÀI 7: FizzBuzz ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

