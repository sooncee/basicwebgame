
var summry = document.createElement('h4');
summry.innerHTML='이 게임은 4자리 숫자를 맞추는 게임입니다<br/>ex)정답:1234 -> 입력값:1234는 정답<br/>'+
'정답이랑 동일한 숫자 그리고 동일한 위치는 스트라이크<br/>ex)정답:1234 -> 입력값: 1236은 123이 동일하므로 3스트라이크<br/>2'+
'정답이랑 동일한 숫자 그러나 위치가 다르면 볼<br/>ex)정답:5678 -> 입력값 1256은 2볼<br/> 숫자를 유추해서 정답을 맞추면 됩니다.'
document.body.append(summry);
var result = document.createElement('h1');
document.body.append(result);

var form = document.createElement('form');
document.body.append(form);

var baseInput = document.createElement('input');
baseInput.type="tel";
baseInput.maxLength="4";
baseInput.placeholder="4자리 숫자를 입력하세요";



form.append(baseInput);

var button = document.createElement('button');
button.textContent = "입력"
form.append(button);

var resultList = document.createElement('div')
resultList.classList.add('list');
document.body.append(resultList);

var numberList;
var numberResult;
var baseCount = 0;

// 초기화 답 생성
function init(){
    numberList = [1,2,3,4,5,6,7,8,9];
    numberResult = [];
    for(var i=0; i<4; i++){
        var raffle = numberList.splice(Math.floor(Math.random() * (numberList.length)),1)[0];
        numberResult.push(raffle);
    }
    baseCount = 0;
    resultList.innerHTML='';
    console.log(numberResult)

}

init();


document.addEventListener('submit',function callback(e){
    e.preventDefault(); // 새로고침방지
    
    var numberResultNumber = numberResult.join('') // 결과값 숫자
    var baseInputValue = baseInput.value // 입력값 숫자
    var baseInputValueArray = baseInputValue.split(''); // 입력값 배열 

    var baseStrike = 0, baseBall = 0
    
    
    // 기회
    if(baseCount > 8){
        console.log("종료")
        
        // resultList.innerHTML='';
        result.innerHTML='실패했습니다. 다시시작하십시오';
        init();
    }
    else if(baseInput.value.length ===4){
        baseCount = baseCount + 1;
        // 성공
        if(baseInputValue === numberResultNumber){
            result.textContent = numberResultNumber+ "정답입니다." +baseCount+"번만에 맞췄습니다." ;
            init();
        }
        // 실패
        else{
            //스트라이크
            for(var a=0; a < 4; a++){
                if(baseInputValue[a] === numberResultNumber[a]){
                    baseStrike +=1;
                    console.log("스트라이크")
                }
                else if(numberResult.indexOf(Number(baseInputValueArray[a])) > -1){
                    
                    baseBall += 1;
                    console.log("Ball")
                }
            }
            
            result.textContent = baseInputValue+ ": " + baseStrike +"스트라이크, " + baseBall + "볼 입니다." +  "남은기회:" +(10-baseCount)
            
            var p = document.createElement("p");
            resultList.append(baseInputValue+ ": " + baseStrike +"스트라이크, " + baseBall + "볼", p)
        }
    }
    baseInput.value = '';
    baseInput.focus();
});

