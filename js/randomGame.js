function verify() {
  const value = parseInt(document.getElementById("guessed").value, 10);
  console.dir(document.getElementById("guessed"));
  const getRandom = Math.floor(Math.random() * 10 + 1);
  const p = document.createElement("p");

  if (isNaN(value)) {
    p.innerHTML = "숫자를 입력해주세요.";
  } else if (value < 1 || value > 10) {
    p.innerHTML = "1과 10 사이의 숫자를 입력해주세요."
  } else if (value === getRandom) {
    p.innerHTML = "You win !!!";
  } else {
    p.innerHTML = `You lose. 정답은 ${getRandom}입니다. Please try again!`;
  }
  const pTag = document.querySelector('p');
  pTag.remove();
  document.body.append(p);
}