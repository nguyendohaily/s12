let c = Number(prompt("Bài 1 - Nhập độ C:"));
let f = (c * 9) / 5 + 32;
alert(`${c}°C = ${f}°F`);

let m = Number(prompt("Bài 2 - Nhập số mét (m):"));
let ft = m * 3.2808;
alert(`${m}m = ${ft.toFixed(2)} feet`);

let aSquare = Number(prompt("Bài 3 - Nhập cạnh hình vuông a:"));
let sSquare = aSquare * aSquare;
alert(`Diện tích hình vuông: ${sSquare}`);

let aRect = Number(prompt("Bài 4 - Nhập chiều dài a:"));
let bRect = Number(prompt("Bài 4 - Nhập chiều rộng b:"));
let sRect = aRect * bRect;
alert(`Diện tích hình chữ nhật: ${sRect}`);

let aTri = Number(prompt("Bài 5 - Nhập cạnh kề a:"));
let bTri = Number(prompt("Bài 5 - Nhập cạnh kề b:"));
let sTri = (aTri * bTri) / 2;
alert(`Diện tích tam giác vuông: ${sTri}`);

let a1 = Number(prompt("Bài 6 (ax + b = 0) - Nhập a:"));
let b1 = Number(prompt("Bài 6 (ax + b = 0) - Nhập b:"));

if (a1 === 0) {
    if (b1 === 0) {
        alert("Phương trình có vô số nghiệm.");
    } else {
        alert("Phương trình vô nghiệm.");
    }
} else {
    let x = -b1 / a1;
    alert(`Phương trình có nghiệm x = ${x}`);
}

let a2 = Number(prompt("Bài 7 (ax² + bx + c = 0) - Nhập a:"));
let b2 = Number(prompt("Bài 7 (ax² + bx + c = 0) - Nhập b:"));
let c2 = Number(prompt("Bài 7 (ax² + bx + c = 0) - Nhập c:"));

if (a2 === 0) {
        alert(c2 === 0 ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.");
    } else {
        alert(`Phương trình có 1 nghiệm x = ${-c2 / b2}`);
    }
} else {
    let delta = b2 * b2 - 4 * a2 * c2;
    if (delta < 0) {
        alert("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        let x = -b2 / (2 * a2);
        alert(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
    } else {
        let x1 = (-b2 + Math.sqrt(delta)) / (2 * a2);
        let x2 = (-b2 - Math.sqrt(delta)) / (2 * a2);
        alert(`Phương trình có 2 nghiệm phân biệt:\nx1 = ${x1}\nx2 = ${x2}`);
    }
}

let ageInput = Number(prompt("Bài 8 - Nhập một số kiểm tra tuổi:"));

if (Number.isInteger(ageInput) && ageInput > 0 && ageInput < 120) {
    alert(`${ageInput} LÀ tuổi của một người.`);
} else {
    alert(`${ageInput} KHÔNG PHẢI là tuổi của một người.`);
}