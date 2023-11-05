// 사용자 프로필 이미지와 키워드 목록 요소 가져오기
const userProfileImage = document.getElementById('user-profile-image');
const userImagePaths = [
    '사용자1의 프로필 이미지 경로',
    '사용자2의 프로필 이미지 경로',
    // 여러 사용자의 이미지 경로를 추가합니다.
];


// 스타 잔액 업데이트
const starBalanceElement = document.getElementById("star_balance");
starBalanceElement.textContent = current; // current 값을 star_balance에 복사

// 스타 기부 수 초기화
const starDonationElement = document.getElementById("starDonation");
let starDonation = 0; // 사용자가 기부한 스타 수, 초기값은 0으로 설정

const keywordList = document.getElementById("keywordList");


// 입력된 키워드 가져오기
const keywordInput = document.getElementById("keyword");
const keyword = keywordInput.value;

// 입력 필드 초기화
keywordInput.value = "";

// 현재 키워드 목록 가져오기
const keywordList = document.getElementById("keywordList");
const keywords = keywordList.querySelectorAll("li");

// 목록에 추가된 키워드가 4개 미만인 경우에만 추가
if (keywords.length < 4) {
    // 새로운 키워드를 목록에 추가
    const listItem = document.createElement("li");
    listItem.textContent = keyword;

    // 삭제 버튼 추가
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
        // 삭제 버튼을 클릭할 때 해당 항목을 삭제합니다.
        listItem.remove();
    });

    listItem.appendChild(deleteButton);

    keywordList.appendChild(listItem);
}

// 스타 기부 수 업데이트
starDonation += 1; // 키워드가 추가될 때마다 1씩 증가 (예시로 1을 증가시킴)
starDonationElement.textContent = `총 ${starDonation} 스타 기부 달성`;
});
