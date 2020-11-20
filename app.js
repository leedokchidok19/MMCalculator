/*맨먼스 - 맨먼스 테이블, 계산*/
let table_tbody = document.querySelector('.description > tbody');
let add_btn = document.querySelector('#add_btn');
let tr_count = document.querySelector('#add_rows');
add_btn.addEventListener('click', function(event){
    table_tbody.innerHTML+=`<tr>
                                        <th>${tr_count.value}</th>
                                        <td><select id="g_${tr_count.value}" class="options"><option value="1">초급</option></select></td>
                                        <td><input id="p_${tr_count.value}" class="options" type="number" value="1"><span class="mm">M</span></td>
                                        <td><input id="m_${tr_count.value}" class="options" type="number" value="1"><span class="mm">M</span></td>
                                        <td><input id="r_${tr_count.value}" class="options" type="number"><span class="mm">M/M</span></td>
                                    </tr>`
});

let total = document.querySelector('#total');
    
let inputs = document.querySelectorAll('.options');
for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('blur', function(event){
        input_blur();
        console.log(`i is ${i}`);
    });
}

function input_blur(){
    let table_tbody = document.querySelectorAll('tbody > tr');
    let total_result = 0;
    for(let i =1; i <= table_tbody.length; i++){
        let grade = document.querySelector('#g_'+i);
        let people = document.querySelector('#p_'+i);
        let month = document.querySelector('#m_'+i);
        let result = document.querySelector('#r_'+i);

        result.value = grade.value * people.value * month.value;
        total_result += Number(result.value);
    }

    total.value = total_result;
}

//맨먼스 - 단가표 펼치기/접기
let toggle = document.querySelector('#toggle');
toggle.addEventListener('click', () => {
    let price = document.querySelector('#price');
    let toggle_p = document.querySelector('#toggle p');
    let triangle = document.querySelector('.triangle');
    let calculator = document.querySelector('.calculator')
    //toggle 기능 img
    let isprice = price.classList.toggle('d-none');
    if(isprice){
        toggle_p.textContent = '펼치기';
        triangle.style.transform = 'rotate(0deg)';
        calculator.classList.remove('d-none');
    }else{
        toggle_p.textContent = '접기';
        triangle.style.transform = 'rotate(180deg)';
        calculator.classList.add('d-none');
    }
});

//계산기 - 계산
const calculator_btn = document.querySelector('.calculator');
calculator_btn.addEventListener('click', () => {
    console.log('calculator');
    const calculator_div = document.querySelector('#calculator');
    calculator_div.classList.toggle('d-none');
});

const calculator_insert = document.querySelectorAll('.calculator_insert');
for(const c_insert of calculator_insert){
    c_insert.addEventListener('click', () => {
        console.log('insert');
        let click_value = c_insert.dataset.setValue;
        document.querySelector('#text_view').value = document.querySelector('#text_view').value + click_value;
    });
}//insert

const calculator_equal = document.querySelector('#calculator_equal');
calculator_equal.addEventListener('click', () => {
    console.log('equal');
    let text_view = document.form.textview.value;
    if(text_view) document.querySelector('#text_view').value =  eval(document.querySelector('#text_view').value);
});//equal

const calculator_clear = document.querySelector('#calculator_clear');
calculator_clear.addEventListener('click', () => {
    console.log('clear');
    document.querySelector('#text_view').value = '';
});//clear

const calculator_back = document.querySelector('#calculator_back');
calculator_back.addEventListener('click', () => {
    console.log('back');
    let text_view = document.querySelector('#text_view').value;
    document.querySelector('#text_view').value = text_view.substring(0, text_view.length-1);
});//back
//계산기 - 계산