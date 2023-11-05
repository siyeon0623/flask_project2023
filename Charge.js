var star = 0;
var current = 0;

document.getElementById("current").innerHTML = current;

function updateChargeAmount(amount) {
    star = star + amount;
    document.getElementById("charge_amount").innerHTML = star;
}

function click_star_btn() {
    alert(star + " 스타 충전 완료!");
    current = current + star; // charge_amount를 current에 누적
    document.getElementById("current").innerHTML = current;
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
    updateChargeAmount(1000);
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
    updateChargeAmount(2000);
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
    updateChargeAmount(5000);
});

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
    updateChargeAmount(10000);
});

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
    updateChargeAmount(20000);
});

const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function () {
    updateChargeAmount(30000);
});

const starButton = document.getElementById("star_btn");
starButton.addEventListener("click", click_star_btn);

// 초기화 버튼 처리
const resetButton = document.querySelector('input[type="reset"]');
resetButton.addEventListener('click', function () {
    star = 0;
    document.getElementById("charge_amount").innerHTML = star;
});

// 스타 잔액 업데이트
const starBalanceElement = document.getElementById("star_balance");
starBalanceElement.textContent = current; // current 값을 star_balance에 복사