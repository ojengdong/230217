// 1.<div> 요소 만들기
let div = document.createElement('div');
// let button = document.createElement('button');

// 2.만든 요소의 클래스를 'alert'로 설정
div.className = "alert";

// 3.내용 채워넣기
div.innerHTML = "<strong>안녕하세요!</strong> 중요 메시지를 확인하셨습니다.";
div.style.color = "orange";
// button.innerHTML = "Clear";


document.body.append(div);
// document.body.append(button);

const button = document.createElement('button');
button.innerHTML = 'Clear';
button.onclick = function () {
    console.log('call')
    div.classList.toggle('alert');
}

document.body.append(button);

div.classList.toggle('alert');

// 동기 vs 비동기
//  setTimeout(() => div.remove(), 3000);

//  setInterval(() => console.log(new Date()), 2000);

localStorage.setItem('test', 100);

const value = localStorage.getItem('test');
console.log(value);

