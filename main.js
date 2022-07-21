/**
 * todo: Build-in.
 * *alert("huycuong23");
 * *confirm("Nguyen Huy Cuong ?");
 * *prompt("Nguyen Huy Cuong ?");
 * *console.log('huycuongdzai');
 * *seTimeout(function(){ }, 2000);
 * *setInterval(function(){ }, 2000);
 */
/**
 * todo: nhận giá trị fasle khi bằng 1 trong các giá trị sau.
 * * fasle, 0, "", NaN, Null, undefined.
 * * kiểm tra kiểu bằng type of
 */
/**
 * todo: LÀM VIỆC VỚI CHUỖI
 * todo: var myString = "Hoc JS tai F8!";
 * * Keyword: Javascript string methods
 * * 1. Length ( xem chuỗi có bao nhiêu kí tự )
 * *  console.log (myString.length);
 * * 2. Find index ( tìm kí tự nằm ở vị trí nào )
 * *  console. log(myString.index0f('JS'));
 * * 3 cut string (cắt ngẫu nhiên nhiều hoặc 1 kí tự trong chuỗi)
 * *  console.log(myString.slice(0, 3));3
 * * 4 Replace (thay thế bằng ký tự khác)
 * * console.log(myString.replace("JS", "JAVASCRIPT"));
 * * console.log(myString.replace(/JS/g, "JAVASCRIPT")); (chính quy nếu nhiều chữ JS sẽ được thay thế hết)
 * * 5. Convert to upper case (viết hoa all)
 * * console.log (myString.toUpperCase());
 * * 6. Convert to lower case (viết thường all)
 * * console.log (myString.toLowerCase());
 * * 7. Trim (xóa bỏ khoảng trắng ở hai đầu nếu bị nhập thừa)
 * * console. log (myString.trim());
 * * 8. Split (chuyển chuỗi thành kiểu array)
 * * var languages = 'Javascript';
 * * console. log(languages.split(''));
 * * 9. Get a character by index (lấy kí tự bằng vị trí)
 * * const myString = "huy cuong";
 * * console. log(myString2.charAt[1]]); of
 * * console. log(myString2[1]]);
 */
const list = document.querySelectorAll("span");
var index = 0;
setInterval(() => {
  list.forEach((e) => {
    e.classList.remove("change-properties");
  });
  list[index].classList.add("change-properties");
  index++;
  if (index == list.length) {
    index = 0;
  }
}, 200);
setInterval(function () {
  var event = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.querySelector("#time").innerHTML = event.toLocaleDateString(undefined, options);
  document.querySelector("#time").innerHTML = event.toLocaleTimeString(undefined, options);
}, 1000);
// Làm bài tại đây \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Làm bài \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var courseApi = "http://localhost:3000/courses";
fetch(courseApi).then(function (respoin) {
  return respoin.json();
}) 
.then(function(course) {
  console.log(course);
})
