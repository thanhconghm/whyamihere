let width = 5;
let height = 10;
console.log(width * height);


let width2 = 125;
let height2 = 50;
console.log(width2 * height2);



function dtichHCN (width,height){
    return width * height;
}

let dt1 = dtichHCN(20,30);
console.log("dt1", dt1);

function test2(){
   console.log("hello");
   return "helloworld";
}

console.log(test2());



function add(a,b){
    return a+b
}

let result = add(5,3);
console.log(result);
console.log(add(5,3));

console.log(result / 8 + 2);


function tinh_tong(n){
    let result = 0;
    for(n; n>0; n--){
        result = result + n;
    }
    return result;
}

console.log("ket qua", tinh_tong(3));


function la_so_nguyen_to(num){
    let result = 0;
    for(num; num % 1; num % num){
        result = result + num
    }
    return result;
}

console.log(la_so_nguyen_to(3), "là số nguyên tố");



function so_giai_thua(n){
    for(n = 1; n++;){
        result = result + n
    }
    return result
}

console.log(so_giai_thua(5));





