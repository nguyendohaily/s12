let numbers = 20;
let count = 0;    
let N = 2;       

document.write(`<b>${numbers} số nguyên tố đầu tiên là:</b><br><br>`);

while (count < numbers) {
    let isPrime = true; 

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            isPrime = false; 
            break;
        }
    }

    if (isPrime) {
        document.write(`${N} `);
        count++;
    }

    N++; 
}