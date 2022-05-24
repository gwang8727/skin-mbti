const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];

function calResult(){
  var pointArray = [
      {name : 'ORPT', value:0, key:0},
      {name : 'ORNT', value:0, key:1},
      {name : 'ORNW', value:0, key:2},
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
//endpoint 값 바꾸기//
const select = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function calResult(){
  var pointArray = [
      {name : 'ORPT', value:0, key:0},
      {name : 'ORNT', value:0, key:1},
      {name : 'ORNW', value:0, key:2},
      {name : 'ORPW', value:0, key:3},
      {name : 'DSNT', value:0, key:4},
      {name : 'DSPW', value:0, key:5},
      {name : 'DSNW', value:0, key:6},
      {name : 'DSPT', value:0, key:7},
      {name : 'DRPW', value:0, key:8},
      {name : 'DRNW', value:0, key:9},
      {name : 'DRPT', value:0, key:10},
      {name : 'DRNT', value:0, key:11},
      {name : 'OSPT', value:0, key:12},
      {name : 'OSPW', value:0, key:13},
      {name : 'OSNW', value:0, key:14},
      {name : 'OSNT', value:0, key:15},
  ]
  for(let i = 0; i<endPoint;i++){
    var target = qnaList[i].a[select[i]];
    //selet에 담긴 값은 data.js에 있는 answer 각각 a는  0,1,2 에 해당//
    for (var j = 0; j < target.type.length; j++) {
      //j는 data.js 파일의 type에 대해 반복문//
      for (var k = 0; k < pointArray.length; k++) {
        //포인트 어레이 배열과 type의 이름이 같으면 포인트 어레이의 value 값 증가하는데 가장 큰 값이 결과값이겠죠//
        if(target.type[j] === pointArray[k].name){
          pointArray[k].value +=1;
        }
      }
    }
  }
  var resultArray = pointArray.sort(function (a,b){
    if (a.value>b.value) {
      return -1;
    }
    if (a.value<b.value) {
      return 1;

    }
    return 0;
  })
  console.log(resultArray);
  let resultWorld = resultArray[0].key;
  return resultworld;
}
function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})

    console.log(select);
    calResult();

  }

function addAnswer(answerText,qIdx,idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";

    }

    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      //selet에 담긴 값은 data.js에 있는 answer 각각 a는  0,1,2 에 해당//
      for (var i = 0; i < target.length; i++){
        select[type[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  },false);
}
function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint)*(qIdx+1) +'%';
}

function begin(){
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
      {name : 'ORPW', value:0, key:3},
      {name : 'DSNT', value:0, key:4},
      {name : 'DSPW', value:0, key:5},
      {name : 'DSNW', value:0, key:6},
      {name : 'DSPT', value:0, key:7},
      {name : 'DRPW', value:0, key:8},
      {name : 'DRNW', value:0, key:9},
      {name : 'DRPT', value:0, key:10},
      {name : 'DRNT', value:0, key:11},
      {name : 'OSPT', value:0, key:12},
      {name : 'OSPW', value:0, key:13},
      {name : 'OSNW', value:0, key:14},
      {name : 'OSNT', value:0, key:15},
  ]
  for(let i = 0; i<endPoint;i++){
    var target = qnaList[i].a[select[i]];
    //selet에 담긴 값은 data.js에 있는 answer 각각 a는  0,1,2 에 해당//
    for (var j = 0; j < target.length; j++) {
      //j는 data.js 파일의 type에 대해 반복문//
      for (var k = 0; k < pointArray.length; k++) {
        if(target.type[j] === pointArray[k].name){
          pointArray[k].value +=1;
        }
      }
    }
  }
}
function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})

    console.log(select);
  }

function addAnswer(answerText,qIdx,idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";

    }

    setTimeout(() => {
      select[qIdx] = idx;
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  },false);
}
function goNext(qIdx){
  if(qIdx+1 === endPoint){
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint)*(qIdx+1) +'%';
}

function begin(){
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
