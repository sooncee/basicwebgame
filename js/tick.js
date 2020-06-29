var body = document.body;
var table = document.createElement('table');
var cols = [];
var rows = [];
var turn = 'X';
var win = false;
var ing = true;
var NOWTURN = document.createElement('p')
NOWTURN.textContent = turn+"차례입니다"
var colClick = function(e){
    console.log(e.target);
    
    var nowRow, nowCol

    nowRow = rows.indexOf(e.target.parentNode);
    nowCol = cols[nowRow].indexOf(e.target);
    console.log(nowRow,"줄",nowCol,"칸");

    if(cols[nowRow][nowCol].textContent !== ""){ // 칸에 체크 되어있는 경우
        console.log("빈칸이아닙니다");
        
    }
    else if(ing){ // 체크되어 있지 않은 경우
        
        console.log("빈칸");
        // 칸에 턴에 해당하는 부호 체크
        cols[nowRow][nowCol].textContent = turn;
        
        winner();

        // 턴 변경 
        if(turn === 'X'){
            turn = 'O';
            NOWTURN.textContent = turn+"차례입니다"
        }
        else if(turn === 'O'){
            turn = 'X';
            NOWTURN.textContent = turn+"차례입니다"
        }
        
    }

    test()
    // 승리여부 검사
    function winner(){
        
        console.log(turn)
        // 가로줄 검사
        if(
            cols[nowRow][0].textContent === turn && 
            cols[nowRow][1].textContent === turn &&
            cols[nowRow][2].textContent === turn)
            {
            win = true;
        }
        // 새로줄 검사
        else if(
            cols[0][nowCol].textContent === turn &&
            cols[1][nowCol].textContent === turn &&
            cols[2][nowCol].textContent === turn
            ){
                win = true;
            }

        // 대각선 검사
        else if(nowRow - nowCol === 0 || Math.abs(nowRow - nowCol) === 2)
        {
            console.log("대각선검사")
            if(
                cols[0][0].textContent === turn &&
                cols[1][1].textContent === turn &&
                cols[2][2].textContent === turn
                ){
                    win = true;
            }
            else if(
                cols[0][2].textContent === turn &&
                cols[1][1].textContent === turn &&
                cols[2][0].textContent === turn
                ){
                    win = true;
            }  
        }
        // 승리
        if(win){
            console.log(turn,"의 승리요")
            winBlock.textContent = turn+"의 승리입니다";
            document.body.append(winBlock)
            document.body.append(resetYN)
            ing = false;
            console.log(ing)
            
        }
    }
}

for(i=1; i<=3; i+=1){
    var row = document.createElement('tr');
    rows.push(row);
    cols.push([]);
    table.appendChild(row);
    for(j=1; j<=3; j+=1){
        var col= document.createElement('td');
        col.addEventListener('click',colClick)
        cols[i-1].push(col);
        row.appendChild(col);
    }
}

document.body.appendChild(table);
document.body.appendChild(NOWTURN);

console.log(rows, cols);
// 리셋 펑션
function reset() {
    for(var r=0; r<=2; r+=1){
        for(var e=0; e<=2; e+=1){
        cols[r][e].textContent = '';
        }
    }
    winBlock.remove();
    resetYN.remove();
    ing = true;
    win = false;
}

var winBlock = document.createElement('p');
var resetYN = document.createElement('button');
resetYN.textContent='리셋하기';

resetYN.addEventListener('click',reset)

// 게임진행유효성검사
function test(){
    
    var count = 0;
    console.log(count)
    var r, e = 0;
    
    for(var r=0; r<=2; r+=1){
        for(var e=0; e<=2; e+=1){ 
            // 내용이 없으면
            if(cols[r][e].textContent===''){
                
            }
            // 내용이 있으면
            else{
                count = count +1;
            }
        }
    }

    if(count === 9){
        console.log("게임종료")
        winBlock.textContent ="무승부 다시하세요";
        document.body.append(winBlock)
        document.body.append(resetYN)
    }
    console.log(count)
}


    var winL = window.location.href;
    window.location.href=winL+'#prod_detail_detail'
