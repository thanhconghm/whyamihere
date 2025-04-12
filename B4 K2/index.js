   
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