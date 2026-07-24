document.write("<h3>Bài 1: Dãy Fibonacci</h3>");
let a = 0, b = 1;
for (let i = 1; i <= 20; i++) {
    document.write(a + " ");
    let temp = a + b;
    a = b;
    b = temp;
}
document.write("<hr>");

document.write("<h3>Bài 2: Tính giai thừa</h3>");
let num = Number(prompt("Bài 2 - Nhập một số nguyên dương:"));
let giaithua = 1;
for (let i = 1; i <= num; i++) {
    giaithua *= i;
}
document.write(`${num}! = ${giaithua}<hr>`);

document.write("<h3>Bài 3: In tam giác vuông</h3>");

document.write("<pre>");

document.write("Hình 1:\n");
for (let i = 1; i <= 5; i++) {
    document.write("*".repeat(i) + "\n");
}
document.write("\n");

document.write("Hình 2:\n");
for (let i = 5; i >= 1; i--) {
    document.write("*".repeat(i) + "\n");
}
document.write("\n");

document.write("Hình 3:\n");
for (let i = 1; i <= 5; i++) {
    document.write(" ".repeat(5 - i) + "*".repeat(i) + "\n");
}
document.write("\n")

document.write("Hình 4:\n");
for (let i = 5; i >= 1; i--) {
    document.write(" ".repeat(5 - i) + "*".repeat(i) + "\n");
}

document.write("</pre>");
document.write("<hr>");

document.write("<h3>Bài 4: In hình chữ nhật rỗng</h3>");
let width = 21, height = 7;

document.write("<pre>");
for (let i = 1; i <= height; i++) {
    if (i === 1 || i === height) {
        document.write("*".repeat(width) + "\n");
    } else {
        document.write("*" + " ".repeat(width - 2) + "*\n");
    }
}
document.write("</pre>");
document.write("<hr>");

document.write("<h3>Bài 5: Tính lãi ngân hàng</h3>");
let tienGoc = Number(prompt("Bài 5 - Nhập số tiền vay/gửi ban đầu (VNĐ):"));
let soThang = Number(prompt("Bài 5 - Nhập số tháng gửi/vay:"));
let laiSuat = Number(prompt("Bài 5 - Nhập lãi suất hàng tháng (%):")) / 100;

let tongTien = tienGoc;
for (let i = 1; i <= soThang; i++) {
    tongTien += tongTien * laiSuat; 
}

let tienLai = tongTien - tienGoc;

document.write(`Số tiền ban đầu: ${tienGoc.toLocaleString()} VNĐ<br>`);
document.write(`Số tháng: ${soThang} tháng<br>`);
document.write(`Lãi suất: ${laiSuat * 100}%/tháng<br>`);
document.write(`<b>Tổng tiền lãi nhận/trả: ${tienLai.toLocaleString('vi-VN', {maximumFractionDigits: 0})} VNĐ</b><br>`);
document.write(`<b>Tổng cả gốc lẫn lãi: ${tongTien.toLocaleString('vi-VN', {maximumFractionDigits: 0})} VNĐ</b>`);