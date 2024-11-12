// set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// 문서내 모든 버튼을 btns로 선언한다.
// 모든 버튼을 선택하고 각각 이벤트를 준다.
// 

// forEach로 모든 버튼을 찾고
btns.forEach(function (btn) {
    // addEventListener로 클릭기능을 만들고 => 함수 e를 실행한다.
    btn.addEventListener('click',function(e){
        //styles함수는 현재타겟과 클래스리스트를 불러온다고 선언한다.
        const styles = e.currentTarget.classList
        //(조건문)styles에 decrease class가 있으면 count를 --한다.
        if(styles.contains('decrease')){
            count--; 
        }
        //위 조건 불충족시 styles에 incease class가 있으면 count를 ++한다.
        else if(styles.contains('increase')){
            count++;
        }else{
            //위조건문 불충족시 count를 0으로한다.
            count = 0;
        }
        ////////////////스타일///////////////////
        if(count > 0){
            value.style.color = 'green';
            // count > 0일 때 value의 color를 green으로,
        }
        if(count < 0){
            value.style.color ='red';
            // count < 0일 때 value의 color를 red로,
        }
        if(count === 0){
            value.style.color = 'black';
            // count === 0일 때 value의 color를 black으로,
        }   
        value.textContent = count;
        // value의 textContent를 count로 할당한다.
    });
});
