let number = 4;
let number2 = -1;

let result = "hello world" + 4;
console.log(result);

let result2 = "hello" * 4;
console.log(result2);

let result3 = 4 * 4;
console.log(result3);

let result4 = 4 / 0;
console.log(result4);

let result5 = -4 / 0;
console.log(result5);

let result6 = 12 % 5;
console.log(result6);

let arrayRandom = [1,2,3,4,5,6,7,8,9,10];


let Chan = arrayRandom.filter((item) =>{
    return item % 2 == 0
})
let le =arrayRandom.filter((item) =>{
    return item % 2 == 0
})
let Numbers1 = 123
let Numbers2 = 456
let cong = Numbers1 + Numbers2;
let tru = Numbers1 - Numbers2;
let nhan = Numbers1 * Numbers2;
let chia = Numbers1 / Numbers2;
let chiaLayDu = Numbers1 % Numbers2;
console.log(cong, tru, nhan, chia, chiaLayDu);


// Tạo mảng số nguyên
let mang = [1, 2, 3, 4, 5];

// Duyệt qua mảng bằng vòng lặp for
for (let i = 0; i < mang.length; i++) {
    if (mang[i] % 2 === 0) {
        console.log(mang[i] + " là số chẵn");
    } else {
        console.log(mang[i] + " là số lẻ");
    }
}

for (let i = 0; i < mang.length; i++) {
    if (mang[i] > nguong) {
        dem++;
    }
}

// In kết quả ra console
console.log("Số lượng phần tử lớn hơn " + nguong + " là: " + dem);



let n = 5;

for (let i = 1; i <= n; i++) {
    let dong = '';
    for (let j = 1; j <= i; j++) {
        dong += j + ' ';
    }
    console.log(dong.trim());
}

let input = "abc";

// Tạo chuỗi đối xứng: nối input với phần đảo ngược của input (trừ ký tự cuối)
let reversed = input.slice(0, -1).split('').reverse().join('');
let output = input + reversed;

console.log("Chuỗi đối xứng là:", output);



