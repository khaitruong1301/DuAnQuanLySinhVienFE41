
//Tạo ra đối tượng chứa 3 thuộc tính cần thiết để giao tiếp với backend
var objectAjax = {
    url: '../data/DanhSachNguoiDung.json', //Đường dẫn đến file chứa dữ liệu hoặc api backend
    method: 'GET', //Giao thức backend cung cấp ứng với url
    responseType: 'json' //Định dạng dữ liệu trả về từ server
}
var renderTable = function (res) {
    console.log(res.data)
    var noiDungTable = '';
    for (var i = 0; i < res.data.length; i++) {
        //Sau mỗi lần lặp lấy ra 1 đối tượng người dùng
        var nguoiDung = res.data[i];
        //Từ đối tượng người dùng mình sẽ tạo ra thẻ tr tương ứng
        noiDungTable += `
            <tr>
                <td>${nguoiDung.TaiKhoan}</td>
                <td>${nguoiDung.MatKhau}</td>
                <td>${nguoiDung.HoTen}</td>
                <td>${nguoiDung.Email}</td>
                <td>${nguoiDung.SoDT}</td>
            </tr>
        `
    }
    //Dom đến table tbody chèn các thẻ tr vừa tạo vào
    document.getElementById('tblNguoiDung').innerHTML = noiDungTable;

}

var renderCard = function (res) {
    console.log(res.data)
    var noiDungTable = '';
    for (var i = 0; i < res.data.length; i++) {
        //Sau mỗi lần lặp lấy ra 1 đối tượng người dùng
        var nguoiDung = res.data[i];
        //Từ đối tượng người dùng mình sẽ tạo ra thẻ tr tương ứng
        noiDungTable += `
            <div class="card text-left">
            <img class="card-img-top" src="holder.js/100px180/" alt="">
            <div class="card-body">
            <h4 class="card-title">${nguoiDung.TaiKhoan}</h4>
            <p class="card-text">Body</p>
            </div>
        </div>
        `;
    }
    //Dom đến table tbody chèn các thẻ tr vừa tạo vào
    document.getElementById('tblNguoiDung').innerHTML = noiDungTable;
}
//Dùng thư viện để đọc file hoặc api từ backend
var promise = axios(objectAjax);
promise.then(renderCard).catch(function (error) {
    //Hàm xử lý khi request thất bại
    console.log(error)
});

console.log("hello fe 41")


