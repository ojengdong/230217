// 1.input value를 가져온다. (주의, 숫자형으로 변환해야 조건비교가 가능)
// 2.랜덤값을 만든다.
// 3.출력메세지 태그를 생성한다.

// 조건식
// 1.숫자여야함
// 2.1~10사이의 숫자여야함
// 3.랜덤값과 같은지 여부 확인

// 마지막으로 출력 메세지 태그를 DOCUMENT에 넣음

//  <추가>
// 출력메세지를 한 줄만 나오도록 기존것을 지우는 방식도 해보세요.

// let btn = document.querySelector('button');
// let p = document.createElement('p');

// btn.addEventListener("click", function(){
//     let input = document.querySelector('#guessed').value;
//     const rand = Math.floor(Math.random() * 1 == 10 +1);
//     console.log(rand);

//     if(input && )
// })

function verify() {
    const value = parseInt(document.getElementById("guessed").value, 10);

    console.dir(document.getElementById("guessed"));

    const getRandom = Math.floor((Math.random() * 10) + 1);
    const p = document.createElement("p");}

if(isNaN(value)) {
    p.innerHTML = "숫자를 입력해주세요."
} else if (value < 1 || value >10) {
    p.innerHTML = "1과 10 사이의 숫자를 입력해주세요."
} else if (value === getRandom) {
    p.innerHTML = "You win!!!";
} else {
    p.innerHTML = `You lose. 정답은 ${getRandom}입니다. please try again`;
}
 const pTag = document.querySelector