const express = require("express");
const  mongoose  = require("mongoose");
const bodyParser = require("body-parser");
const insert = require('./insert');
const update = require('./update',);
const { deleteEmployee } = require("./delete");
const del = require('./delete',);
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.wfrwbfw.mongodb.net/QuanLyNhaHang")

.then(() => {console.log("Ket the DB thanh cong")})
.catch(() => {console.log("Ket noi toi DB khong thanh cong")})
// Nhan Vien
app.get('/danh-sach-nhan-vien', insert.showEmployeeList);
app.get('/them-nhan-vien', insert.showAddEmployeePage);
app.post('/them-nhan-vien', insert.addNewEmployee);

app.get('/sua-nhan-vien/:id', update.showUpdateEmployeePage);
app.post('/sua-nhan-vien/:id', update.updateEmployee);

app.delete('/danh-sach-nhan-vien/:id', del.deleteEmployee);
// Menu
app.get('/danh-sach-thuc-don', insert.showMenuList);
app.get('/them-thuc-don', insert.showAddDishPage);
app.post('/them-thuc-don', insert.addNewDish);

app.get('/sua-thuc-don/:id', update.showUpdateDishPage);
app.post('/sua-thuc-don/:id', update.updateDish);
app.delete('/danh-sach-thuc-don/:id', del.deleteMenu);
// khach hang
app.get('/danh-sach-khach-hang', insert.showCustomerList);
app.get('/them-khach-hang', insert.showAddCustomerPage);
app.post('/them-khach-hang', insert.addNewCustomer);

app.get('/sua-khach-hang/:id', update.showUpdateCustomerPage);
app.post('/sua-khach-hang/:id', update.updateCustomer)

app.delete('/danh-sach-khach-hang/:id', del.deleteCustomer);

app.get('/', (req, res) => {
    res.render('trang-chu');
});

app.get("*", (req, res) =>{
    return res.send("Khong tim thay trang 404")
});
app.listen(5000, () =>{
    console.log("Sever chay tren cong 500");
    console.log("Ban co the truy cap: http://localhost:5000/");
})


