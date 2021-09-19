$(document).ready(function(){ 

      // hiển thị mẫu thông báo có chưa input để người dùng nhập vào
      // sau đó lấy giá trị người dùng nhập bỏ vào 1 mảng rồi tách mảng đó ra từng phần tử rồi lưu vào mảng khác
      // nêu như số thứ nhất (đứng trước dấu -) > số thứ 2 thì in lỗi
      var rng = prompt('Enter the range');
      var res = rng.split("-");
      if (res.length != 2) {
      alert("invalid range please input acroding to the format : *-* ");
      return;
      }
       first = parseInt(res[0]);
      second = parseInt(res[1]);
      if (first > second) {
      alert("invalid range the fist number cant be bigger the the second ");
      return;
      }
      //rồi lấy 2 số đó tích hợp vào đây
      str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
      for (i = first; i <= second; i++) {
      str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
      }
      //xuat ra man hinh
      document.write(str);
  });

  function findLMV() {
      //lấy input của user id t1 cho vào vòng lặp nếu tìm được các giá trị u, e, o, a, i trong mảng tại vị trí
      // thứ i + 1 thì xuất ra màn hình vị trí của nguyên âm
      var str = document.getElementById('t1').value
      for (i = 0; i < str.length; i++) {
      if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
      || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
      return ("Left most vowel of " + str + " is at location " + (i + 1));
      }
      return ("No vowels found for string " + str);
  }

  function reverse(num) {
      rnum = 0;
      temp = num;
      // Nếu giá trị được truyền vào hàm điều kiện mà là chữ hay dấu gì đó sẽ báo lỗi
      if (isNaN(num)) {
      return "invalid number";
      }
      // tiến hành đảo số của giá trị truyền vào
      while (num != 0) {
      rnum *= 10;
      rnum += num % 10;
      num -= num % 10;
      num = Math.floor(num / 10);
      }
      return "Reverse of num " + temp + " is " + rnum;
  }

  function f(d) {
      // xoa man hinh ket qua nếu d truyền vào = với giá trị c
      if (d == 'c') {
      document.getElementById('res').value = "";
      return;
      }

      res = document.getElementById('res').value;
      if (res == 0 && d == 0)
      return;
      //nếu user nhập vào dấu thì sẽ lấy số đầu tiên lưu vào 1 biến cho nhập giá trị thứ 2
      if (d == '+' || d == '-' || d == '*' || d == '/') {
      opr = d;
      num = parseFloat(res);
      document.getElementById('res').value = d;
      return;
      }
      //nếu user ấn = lấy biến num ở trên để tính toán với bien num1 
      if (d == '=') {
      num1 = parseFloat(res);
      switch (opr) {
      case '+': ans = num + num1; break;
      case '-': ans = num - num1; break;
      case '*': ans = num * num1; break;
      case '/': ans = parseInt(num / num1); break;
      }
      // xuất kết quả ra màn hình
      document.getElementById('res').value = ans;
      return;
      }
      // trả về giá trị của biến nghịch đảo lên code html
      if (d == '--') {
      document.getElementById('res').value *= -1;
      return;
      }
      if (!isNaN(document.getElementById('res').value))
      document.getElementById('res').value += d;
      else
      document.getElementById('res').value = d;
}

// Chức năng này là tất cả về chuyển đổi thanh điều hướng, nó được hiển thị khi cửa sổ dưới 580px
$(function () {
  menu = $("nav ul");
  $("#toggle-btn").on("click", function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 580 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function (e) {
    var w = $(window).width();
    if (w < 580) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

// Hàm này dành cho nút màu vàng trong index.html, nó chỉ thực hiện 1 công việc gọi tên Lớp là "có thể thu gọn" 
//và đặt nó trong arr và một vòng lặp
// và vòng lặp 2 điều đơn giản:
// Nếu nhấn 1 lần "nội dung" sẽ hiển thị trên màn hình
// Lần nhấn thứ hai thì ngược lại
$(function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
