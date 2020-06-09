var DanhSachSinhVien = function(){
    this.dssv = [];


    this.xoaSinhVien = function(index){
        this.dssv.splice(index,1);
    }
}