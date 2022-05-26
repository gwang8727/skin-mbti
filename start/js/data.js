const qnaList = [
  {
    q: '세수를 한 뒤 보습제나 자외선 차단제를 사용하지 않으면 당신의 얼굴 피부는?',
    a: [
      { answer: 'A.매우 건조한 느낌이 들거나 갈라진다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.약간 건조한 느낌이 든다. ', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'C.윤기가 나며 보습제가 필요하다고 느낀 적이 없다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.탱탱한 느낌이다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'E.잘 모르겠다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
    ]
  },
  {
    q: '거울을 볼 때 얼굴에 핀 끝 크기 이상의 모공이 얼마나 많이 보이나요?',
    a: [
      { answer: 'A.없다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.이마, 코, 턱에만 약간 있다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'C.많다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.대단히 많다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'E.잘 모르겠다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
    ]
  },
  {
    q: '거품이 많이 발생하는 비누를 사용하면 당신의 얼굴 피부는 어떻게 되나요?',
    a: [
      { answer: 'A.건조한 느낌이거나갈라진다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'B.약간 건조한 느낌이 들지만, 갈라지지는 않는다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'C.정상적인 느낌이다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'D.기름이 흐르는 듯한 느낌이다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'E.비누나 폼클렌저를 사용하지 않는다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
    ]
  },
  {
    q: '평소에 보습제를 여러번 덧바르지 않으면 얼굴 피부가 당기는 느낌입니까?',
    a: [
       { answer: 'A.항상 그렇다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
       { answer: 'B.때때로 그렇다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
       { answer: 'C.거의 그렇지 않다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
       { answer: 'D.전혀 그렇지 않다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
    ]
  },
  {
    q: '얼굴에는 작은 여드름, 블랙헤드 또는 화이트헤드가 생기나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.거의 없다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'C.때때로 있다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.항상 있다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
    ]
  },

  {
    q: '얼굴의 이마와 코에 기름기는 어떤가요?',
    a: [
      { answer: 'A.전혀 기름지지 않다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.거의 기름지지 않다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'C.가끔 기름진다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.항상 기름진다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
    ]
  },
  {
    q: '보습제를 바르고 2~3시간 이후에 양 볼은 어떤가요?',
    a: [
      { answer: 'A.매우 거칠거나, 피부가 당기고 벗겨진다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.약간 윤기가 흐른다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'C.윤기가 흐르고 번들거린다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.약간 건조하거나 아무렇지 않다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
    ]
  },
  {
    q: '얼굴에 붉은 화농성(고름) 여드름이 발생한 경험이 있나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.거의 없다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'C.최소한 1개월에 1회 있다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.최소한 1주일에 1회 있다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
    ]
  },
  {
    q: '피부 화장품(클렌저, 보습제, 색조화장품 등)이 얼굴 피부에 여드름을 유발하거나 가려움증, 불은 발진, 따끔거리는 증상을 유발한 적 있나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.거의 없다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'C.자주 있다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.항상 있다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'E.얼굴에 화장품을 쓰지 않는다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
    ]
  },
  {
    q: '자외선 차단제를 바르면 피부가 가렵거나, 뜨겁거나 발진이 생긴 경험이 있나요?',
    a: [
      { answer: 'A.전혀 없다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'B.거의 없다.', type: ['ORPT', 'ORNT', 'ORNW', 'ORPW', 'DRPW', 'DRNW', 'DRPT', 'DRNT'] },
      { answer: 'C.자주 있다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'D.항상 있다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
      { answer: 'E.자외선 차단제를 바르지 않는다.', type: ['DSNT', 'DSPW', 'DSNW', 'DSPT', 'OSPT', 'OSPW', 'OSNW', 'OSNT'] },
    ]
  },
  {
    q: '본인이 생각하기에, 약간만 햇빛을 봐도 사람들이 햇볕에 탔냐고 물어보나요?',
    a: [
      { answer: 'A.전혀 아니다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'B.때때로 그렇다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'C.자주 그렇다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
      { answer: 'D.항상 그렇다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
      { answer: 'E.나는 항상 햇볕에 의해 탄 상태이다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
    ]
  },
  {
    q: '여드름 혹은 피부 속을 파고 들어간 모발에 의해 짙은 갈색이나 검은색 침착이 생긴 적 있나요?',
    a: [
      { answer: 'A.전혀 생기지 않는다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'B.때때로 생긴다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'C.자주 생긴다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
      { answer: 'D.항상 생긴다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
      { answer: 'E.여드름이나 피부속으로 파고 들어간 모발이 전혀 없다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
    ]
  },
   {
    q: '외상 후에 갈색(분홍색은 아님)의 상처 자국이 피부에 얼마나 오래 존재하나요?',
    a: [
      { answer: 'A.전혀 생기지 않는다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'B.1주일', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'C.수주', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
      { answer: 'D.수개월', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
      { answer: 'E.잘 모르겠다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
    ]
  },
   {
    q: '윗입술이나 두 뺨에 짙은 점이나 반점이 있나요? 혹은 과거에 제거한 경험이 있나요?',
    a: [
      { answer: 'A.없다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'B.잘 모르겠다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
      { answer: 'C.약간 알아볼 수 있을정도로 있었거나 현재 가지고 있다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
      { answer: 'D.잘 알아볼 수 있을정도로 있었거나 현재 가지고 있다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
    ]
  },
   {
    q: '여러 날 동안 연속해서 태양에 노출되면 어떤일이 일어났나요?',
    a: [
       { answer: 'A.햇볕에 타고 물집이 생겼으나, 피부색은 변하지 않는다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
       { answer: 'B.피부가 약간 짙어졌다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
       { answer: 'C.피부가 많이 짙어졌다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
       { answer: 'D.피부가 이미 짙어서, 더 짙어졌는지 구분하기 어렵다.', type: ['ORPT', 'ORPW', 'DSPW', 'DSPT', 'DRPW', 'DRPT', 'OSPT', 'OSPW'] },
       { answer: 'E.잘 모르겠다.', type: ['ORNT', 'ORNW', 'DSNT', 'DSNW', 'DRNW', 'OSNW', 'OSNT', 'DRNT'] },
    ]
  },
   {
    q: '얼굴에 주름이 있나요?',
    a: [
      { answer: 'A.없다. 웃거나 찡그리거나 눈썹을 치켜올릴 경우에도 없다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'B.웃거나 찡그리거나 눈썹을 치켜올릴때에 있다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'C.있다. 얼굴을 움직이거나 움직임이 없는 안정된 상태에서도 약간 있다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      { answer: 'D.웃거나 찡그리거나 눈썹을 치켜올리지 않아도 주름이 있다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
    ]
  },
  {
    q: '어머니의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      
    ]
  },
  {
    q: '아버지의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      
    ]
  },
  {
    q: '외할아버지의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      
    ]
  },
  {
    q: '친할아버지의 얼굴피부는 얼마나 나이들어 보이나요/보였나요?',
    a: [
      { answer: 'A.나이보다 5~10년 젊어보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'B.나이대로 보인다/보였다.', type: ['ORPT', 'ORNT', 'DSNT', 'DSPT', 'DRPT', 'DRNT', 'OSPT', 'OSNT'] },
      { answer: 'C.나이보다 5년더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      { answer: 'D.나이보다 5년이상 더 늙어보인다/보였다.', type: ['ORNW', 'ORPW', 'DSPW', 'DSNW', 'DRPW', 'DRNW', 'OSPW', 'OSNW'] },
      
    ]
  } 
]

const infoList = [
  {
    name: '<ORPT>',
    desc: ''
  },
  {
    name: '<ORNT>',
    desc: ''
  },
  {
    name: '<ORNW>',
    desc: ''
  },
  {
    name: '<ORPW>',
    desc: ''
  },
  {
    name: '<DSNT>',
    desc: ''
  },
  {
    name: '<DSPW>',
    desc: ''
  },
  {
    name: '<DSNW>',
    desc: ''
  },
  {
    name: '<DSPT>',
    desc: ''
  },
  {
    name: '<DRPW>',
    desc: ''
  },
  {
    name: '<DRNW>',
    desc: ''
  },
  {
    name: '<DRPT>',
    desc: ''
  },
  {
    name: '<DRNT>',
    desc: ''
  },
  {
    name: '<OSPT>',
    desc: ''
  },
  {
    name: '<OSPW>',
    desc: ''
  },
  {
    name: '<OSNW>',
    desc: ''
  },
  {
    name: '<OSNT>',
    desc: ''
  },
]
