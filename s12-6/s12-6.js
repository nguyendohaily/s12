let userName = "";
let userAge = "";
let choice;

do {
    choice = Number(prompt(
        "--- MENU LỰA CHỌN ---\n" +
        "1. Nhập tên của người dùng\n" +
        "2. Nhập tuổi của người dùng\n" +
        "3. In tên và tuổi của người dùng\n" +
        "4. In bảng cửu chương của một số\n" +
        "5. Kiểm tra số nhập vào là số chẵn hay lẻ\n" +
        "6. Tính tổng các số từ 1 đến N\n" +
        "7. In các số trong một dãy\n" +
        "8. Kiểm tra số nhập vào có phải là số nguyên tố hay không\n" +
        "9. In chuỗi đảo ngược của một chuỗi\n" +
        "10. Thoát khỏi chương trình\n\n" +
        "Nhập lựa chọn của bạn (1-10):"
    ));

    switch (choice) {
        case 1:
            userName = prompt("Nhập tên của bạn:");
            alert(`Đã lưu tên: ${userName}`);
            break;

        case 2:
            userAge = prompt("Nhập tuổi của bạn:");
            alert(`Đã lưu tuổi: ${userAge}`);
            break;

        case 3:
            if (userName === "" && userAge === "") {
                alert("Bạn chưa nhập tên và tuổi!");
            } else {
                alert(`Tên: ${userName || "Chưa nhập"}\nTuổi: ${userAge || "Chưa nhập"}`);
            }
            break;

        case 4:
            let num4 = Number(prompt("Nhập vào một số để in bảng cửu chương:"));
            let result4 = `--- BẢNG CỬU CHƯƠNG ${num4} ---\n`;
            for (let i = 1; i <= 10; i++) {
                result4 += `${num4} x ${i} = ${num4 * i}\n`;
            }
            alert(result4);
            break;
        case 5:
            let num5 = Number(prompt("Nhập vào một số để kiểm tra chẵn/lẻ:"));
            if (num5 % 2 === 0) {
                alert(`${num5} là SỐ CHẴN.`);
            } else {
                alert(`${num5} là SỐ LẺ.`);
            }
            break;

        case 6:
            let N = Number(prompt("Nhập số N:"));
            let sum = 0;
            for (let i = 1; i <= N; i++) {
                sum += i;
            }
            alert(`Tổng các số từ 1 đến ${N} là: ${sum}`);
            break;

        case 7:
            let series = prompt("Nhập vào một dãy số (ví dụ: 1, 5, 8, 12 hoặc 1 2 3):");
            alert(`Dãy số bạn vừa nhập: ${series}`);
            break;
        
        case 8:
            let num8 = Number(prompt("Nhập vào một số để kiểm tra số nguyên tố:"));
            let isPrime = num8 >= 2;
            for (let i = 2; i <= Math.sqrt(num8); i++) {
                if (num8 % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                alert(`${num8} LÀ số nguyên tố.`);
            } else {
                alert(`${num8} KHÔNG PHẢI là số nguyên tố.`);
            }
            break;

        case 9:
            let str9 = prompt("Nhập vào một chuỗi:");
            let reversedStr = str9.split("").reverse().join("");
            alert(`Chuỗi đảo ngược: ${reversedStr}`);
            break;

        case 10:
            alert("Đã thoát khỏi chương trình. Tạm biệt!");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 10!");
    }

} while (choice !== 10);