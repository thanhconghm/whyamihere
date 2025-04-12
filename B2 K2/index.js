//câu lệnh in ra phía màn hình console

// Khai báo một biến chuỗi
let myString = "Hello, world!";

// Nối chuỗi (concatenate)
let newString = myString + " How are you?"; 
console.log(newString);

// Cắt chuỗi (substring)
let substring = myString.substring(7, 12); 
console.log(substring); 

// Tìm độ dài của chuỗi (length)
let lengthOfString = myString.length;
console.log(lengthOfString); 


// Nhập chuỗi từ người dùng
let userInput = prompt("InputString:");

// Chuyển chuỗi thành chữ hoa
let upperCaseString = userInput.toUpperCase();

// In ra chuỗi đã được chuyển thành chữ hoa
console.log("Uppercase: " + upperCaseString);


// Khai báo biến chứa tên người dùng và tuổi
let Name = "Nguyễn Thành Công";  // Tên người dùng kiểu chuỗi (string)
let Age = 16;               // Tuổi kiểu số (number)

// In ra giá trị của các biến
console.log("Tên tôi là: " + Name);
console.log("Tôi " + Age + " tuổi");


// Nhập câu từ người dùng
let userSentence = prompt("InputSentence:");

// Đếm số ký tự trong câu
let sentenceLength = userSentence.length;

// In ra độ dài của câu
console.log("SentenceLength: " + sentenceLength);


// Khai báo biến city bằng từ khóa var
var city = "Hà Nội";

// Khai báo biến age bằng từ khóa let
let age = 25;

// In ra giá trị của các biến
console.log("Thành phố: " + city);
console.log("Tuổi: " + age);


// Khai báo biến Pi bằng từ khóa const
const Pi = 3.14;

// In ra giá trị của Pi
console.log("Giá trị của Pi là: " + Pi);


// Khai báo các biến với giá trị thích hợp

// temperature: nhiệt độ, giá trị có thể là một số
let temperature = 25.5;  

// greeting: lời chào, giá trị là một chuỗi
let greeting = "Hello, world!";  

// isjavascriptfun: biến kiểu boolean, xác định xem JavaScript có thú vị không
let isjavascriptfun = true;  

// nothing: biến kiểu null, đại diện cho "không có giá trị"
let nothing = null;  

// notDefined: biến chưa được khai báo, giá trị là undefined
let notDefined;  

// uniqueID: một giá trị duy nhất, có thể là một chuỗi
let uniqueID = "az093astz1";  

// Numbers: một mảng chứa các số
let Numbers = [1, 2, 3, 4, 5];  

// person: một đối tượng chứa thông tin về một người
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};  // đối tượng với thông tin về người


// Khai báo biến greeting
let greetings = "hello world!";

// Biến greetingUppercase: in hoa chuỗi greeting
let greetingUppercase = greetings.toUpperCase();  // Kết quả: "HELLO, WORLD!"

// Biến greetingReplaced: thay thế "hello" thành "good afternoon"
let greetingReplaced = greetings.replace("hello", "good afternoon");  // Kết quả: "good afternoon, world!"

// In ra các kết quả
console.log("Greeting in Uppercase: " + greetingUppercase);
console.log("Greeting after replacement: " + greetingReplaced);



