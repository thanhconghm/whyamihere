   
    
    
    
    let array = [];
    let fruits = ["tao", "nho", "quyt"];


    let rauCu = ["su hao", "bap cai", "rau ngot", "ca rot"];




    let arrSpecial = ["spec1", "spec2", "spec3", "spec4"];

    console.log(arrSpecial);

    console.log(arrSpecial[2]);
    
    //while, dowhile, for

    //muon in ra tung phan tu 1
    for(let i = 0; i < 4; i++) {
        console.log(arrSpecial[i]);
    }

    let students = ["Cong", "Quang", "Phong", "Lam", "Duc"];

    //Phuong thuc them 1 phan tu vao cuoi cua mang

    //mang.push(phan tu)

    // students.push('Hung');
    //Muon them nhieu phan tu vao cuoi mang 

    // students.push('Quan', "Hai");

    students.splice(3, 0, "Nghia");

    console.log(students);

    let student2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    student2[4] = 15;
    console.log(student2);

    student2.splice(8, 1, 22);
    console.log(student2);

    let student3 = ["quang", "nghia", "cong", "lam"];


    console.log(student3.indexOf("cong"));




    let bangChuCai =["a", "b", "c", "d", "e", "f", "g"]

    bangChuCai.splice(1, 5);
    console.log(bangChuCai);




    let robber = {
        mu: "den",
        toc: "tim",
        khuonmat: {
            mat: "den",
            mui: "cao",
            mom: "to",
        },
        gioHang: ["nho", "quyt","tao", "hambuger"],
        dau: "tron",

        tuoi: 30,

        'cử chỉ': "lườm nguýt",
    }
    console.log(robber);


    console.log(robber.mu);

    console.log(robber['tuoi']);
    
    console.log(robber.khuonmat.mui);





    
    
    
    
    
    
   let hocSinh = [
        { ten: "An", tuoi: 15, lop: "10A1" },
        { ten: "Bình", tuoi: 16, lop: "11A2" },
        { ten: "Châu", tuoi: 15, lop: "10A1" }
    ] 



    let congViec = [
    {
        id: 1,
        tieuDe: "Học JavaScript",
        hoanThanh: false
    },
    {
        id: 2,
        tieuDe: "Làm bài tập về nhà",
        hoanThanh: true
    },
    {
        id: 3,
        tieuDe: "Đọc sách lập trình",
        hoanThanh: false
    }
];

// Hiển thị tất cả công việc
console.log("Danh sách công việc:");
congViec.forEach(cv => {
    console.log(`ID: ${cv.id} | Tiêu đề: ${cv.tieuDe} | Hoàn thành: ${cv.hoanThanh ? "Đã hoàn thành" : "Chưa hoàn thành"}`);
});

congViec.push({
    id: 4,
    tieuDe: "Tập thể dục",
    hoanThanh: false
});

function capNhatTrangThai(id) {
    let cv = congViec.find(item => item.id === id);
    if (cv) {
        cv.hoanThanh = !cv.hoanThanh;
    }
}
capNhatTrangThai(1); // đổi trạng thái của công việc có id = 1

function xoaCongViec(id) {
    congViec = congViec.filter(item => item.id !== id);
}
xoaCongViec(2); // xóa công việc có id = 2



// Mảng chứa danh sách người dùng
let users = [
    {
        id: 1,
        ten: "Nguyễn Văn A"
    },
    {
        id: 2,
        ten: "Trần Thị B"
    },
    {
        id: 3,
        ten: "Lê Văn C"
    }
];

// In ra danh sách người dùng
console.log("Danh sách người dùng:");
users.forEach(user => {
    console.log(`ID: ${user.id} | Tên: ${user.ten}`);
});

users.push({
    id: 4,
    ten: "Phạm Thị D"
});

function timUserTheoId(id) {
    return users.find(user => user.id === id);
}

function capNhatTenUser(id, tenMoi) {
    let user = users.find(u => u.id === id);
    if (user) {
        user.ten = tenMoi;
        console.log(`Đã cập nhật tên user có ID ${id} thành: ${tenMoi}`);
    } else {
        console.log(`Không tìm thấy user với ID ${id}`);
    }
}

// Gọi hàm để cập nhật tên user có ID 2
capNhatTenUser(2, "Trần Thị Bích");


let userTimThay = timUserTheoId(2);
console.log(userTimThay);  // { id: 2, ten: 'Trần Thị B' }
