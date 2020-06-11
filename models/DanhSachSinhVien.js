var DanhSachSinhVien = function(){
    this.dssv = [];


    this.xoaSinhVien = function(index){
        this.dssv.splice(index,1);
    }
    this.themSinhVien = function(sv) {
        this.dssv.push(sv);
    }
    this.capNhatSinhVien = function (maSV,sinhVien){
        console.log('chức năng cập nhật sinh viên!');
    }

    this.hienThiThongTinSinhVien = function () {
        console.log('Hien Thi Thong Tin SV');
    }
}