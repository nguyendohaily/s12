let a = Number(prompt("Bài 1 - Nhập số a:"));
let b = Number(prompt("Bài 1 - Nhập số b:"));

if (b !== 0) {
    if (a % b === 0) {
        alert(`${a} chia hết cho ${b}`);
    } else {
        alert(`${a} KHÔNG chia hết cho ${b}`);
    }
} else {
    alert("Không thể chia cho 0!");
}

let age = Number(prompt("Bài 2 - Nhập tuổi học sinh:"));

if (age < 15) {
    alert("Học sinh KHÔNG đủ điều kiện vào học lớp 10.");
} else {
    alert("Học sinh ĐỦ điều kiện vào học lớp 10.");
}

let num = Number(prompt("Bài 3 - Nhập một số nguyên:"));

if (num > 0) {
    alert(`${num} lớn hơn 0`);
} else if (num < 0) {
    alert(`${num} nhỏ hơn 0`);
} else {
    alert("Số vừa nhập bằng 0");
}

let num1 = Number(prompt("Bài 4 - Nhập số thứ nhất:"));
let num2 = Number(prompt("Bài 4 - Nhập số thứ hai:"));
let num3 = Number(prompt("Bài 4 - Nhập số thứ ba:"));

let max = num1;

if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}

alert(`Giá trị lớn nhất trong 3 số là: ${max}`);

let diemKiemTra = Number(prompt("Bài 5 - Nhập điểm bài kiểm tra (hệ số 1):"));
let diemGiuaKy = Number(prompt("Bài 5 - Nhập điểm thi giữa kỳ (hệ số 2):"));
let diemCuoiKy = Number(prompt("Bài 5 - Nhập điểm thi cuối kỳ (hệ số 3):"));

let avg = (diemKiemTra + diemGiuaKy * 2 + diemCuoiKy * 3) / 6;

let hocLuc = "";
if (avg >= 9.0) {
    hocLuc = "Xuất Sắc";
} else if (avg >= 8.0) {
    hocLuc = "Giỏi";
} else if (avg >= 6.5) {
    hocLuc = "Khá";
} else if (avg >= 5.0) {
    hocLuc = "Trung Bình";
} else {
    hocLuc = "Yếu";
}

alert(`Điểm trung bình: ${avg.toFixed(1)} - Xếp loại: ${hocLuc}`);