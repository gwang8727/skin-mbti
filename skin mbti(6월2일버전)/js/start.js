const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const explain = document.querySelector("#explain");
const endPoint = 20;
//endpoint 값 바꾸기//
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  //indexof 는 index 값 반환 MAth 최댓값 반환 ...은 전개 구문 선택한 배열 펼치게 함//
  return result;
}

function setexplain() {
  let point = calResult();
  const resultcontext = document.querySelector('.resultcontext');
  resultcontext.innerHTML = infoList[point].context;

  if (point >= 4 || point <= 11) {
    var explainImg = document.createElement('img');
    const imgDive = document.querySelector('#explainImg');
    var explainURL = 'img/ostrat' + '.png'
    explainImg.src = explainURL;
    explainImg.classList.add('img-fluid');
    imgDive.appendChild(explainImg);
  }
  else{
    var explainImg = document.createElement('img');
    const imgDive = document.querySelector('#explainImg');
    var explainURL = 'img/dstart' + '.png'
    explainImg.src = explainURL;
    explainImg.classList.add('img-fluid');
    imgDive.appendChild(explainImg);
  }
  var suncreamImg = document.createElement('img');
  const imgDivl = document.querySelector('#suncreamImg');
  var suncreamURL = 'img/suncream' + '.png'
  suncreamImg.src = suncreamURL;
  suncreamImg.classList.add('img-fluid');
  imgDivl.appendChild(suncreamImg);

  var ingredientImg = document.createElement('img');
  const imgDiva = document.querySelector('#ingredientImg');
  var ingredientURL = 'img/ingredient' + '.png'
  ingredientImg.src = ingredientURL;
  ingredientImg.classList.add('img-fluid');
  imgDiva.appendChild(ingredientImg);

  var hydroImg = document.createElement('img');
  const imgDivb = document.querySelector('#hydroImg');
  var hydroURL = 'img/hydro' + '.png'
  hydroImg.src = hydroURL;
  hydroImg.classList.add('img-fluid');
  imgDivb.appendChild(hydroImg);

  var warningImg = document.createElement('img');
  const imgDivc = document.querySelector('#warningImg');
  var warningURL = 'img/warning' + '.png'
  warningImg.src = warningURL;
  warningImg.classList.add('img-fluid');
  imgDivc.appendChild(warningImg);
}

function setResult() {
  let point = calResult();
  //point를 이용하여 result 값 저장
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;
  //아래 코드는 이미지 연결 코드//
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png'
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);
  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goexplain() {
  result.style.WebkitAnimation = "fadeOut 1s";
  result.style.animation = "fadeOut 1s";
  setTimeout(() => {
    explain.style.WebkitAnimation = "fadeIn 1s";
    explain.style.animation = "fadeIn 1s";
    setTimeout(() => {
      result.style.display = "none";
      explain.style.display = "block"
    }, 450)
  })
  setexplain();
}

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)
  })
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function() {
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";

    }

    setTimeout(() => {
      //qnalist에서 몇번째 질문인지 알아야하니까 qIdx 넣고 a에서 선택한 질문 idx 넣//
      var target = qnaList[qIdx].a[idx].type;
      //selet에 담긴 값은 data.js에 있는 answer 각각 a는  0,1,2 에 해당//
      for (var i = 0; i < target.length; i++) {
        select[target[i]] += 1;
      }
      //위 반복문을 지나 해당하는 타입에 value 값이 1씩 증가//

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  }, false);
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    //첫번째 질문에 대한 첫번째 대답
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
