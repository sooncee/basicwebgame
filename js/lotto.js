// forEach
// map


var numList = Array(45)
    .fill()
    .map(
        function(elmt, index){
            return index + 1
        }
    );
console.log(numList)

var shuffle = [];
while(0 < numList.length){
    var move = numList.splice(Math.floor(Math.random() * numList.length), 1)[0];
    shuffle.push(move)
}
console.log(shuffle);
console.log(numList);

// 보너스 숫자
// 셔플길이 총 45
var bonus = shuffle[shuffle.length -1];

// 랜덤으로 추출된 숫자들에서 1번째에서 6번째 자리에 번호 추출
var winNumber = shuffle.slice(0,6);

// 정렬
winNumber.sort(
    function(prev,now){
        // ex 7, 3, 4, 5, 1, 2 ?
        // 1회 3 4 5 1 2 7
        // 2회 3 4 1 2 5 7
        // 3회 3 1 2 4 5 7
        // 4회 1 2 3 4 5 7

        
        // 7-3=4 ? 0보다크면 순서를 바꿈
        // 3-7=-4 ? 0보다작으면 순서를 안바꿈
        // prev-now 오름차순
        // now-prev 내림차순
        return prev-now;
});

console.log('당첨숫자들',winNumber,'보너스',bonus)

// 당첨 공 출력
var RESULT = document.querySelector('#result');

for (var i = 0; i < winNumber.length; i+=1){
    // setTimeout(function(){
        var ball = document.createElement('div');
        ball.textContent=winNumber[i];
        RESULT.appendChild(ball);
    // },500);
}

// 보너스 공 출력
var BONUSOUTPUT = document.getElementsByClassName('bonus')[0];
var bonusBall = document.createElement('div');

bonusBall.textContent = bonus;
BONUSOUTPUT.appendChild(bonusBall);
