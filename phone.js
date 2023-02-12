
    


//selectors
const name=document.getElementById('person_name');
const number=document.getElementById('person_phone');
const button=document.getElementById('plus');
const persons=document.getElementById('persons');
const selectbox=document.getElementById('type');

const table=document.createElement('table');
    table.classList.add('table');
    const tr=document.createElement('tr');
    const th1=document.createElement('th');
    const th2=document.createElement('th');
    const th3=document.createElement('th');
    th1.innerText="نام و نام خانوادگی";
    th2.innerText="شماره تماس";
    th3.innerText="نوع شماره تماس";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);
    persons.appendChild(table);




//event listeners
button.addEventListener('click',additem);


//functions
function additem(event){
    event.preventDefault();
    const tr=document.createElement('tr');
    const td1=document.createElement('td');
    const td2=document.createElement('td');
    const td3=document.createElement('td');
    td1.innerText=name.value;
    td2.innerText=number.value;
    td3.innerText=selectbox.options[selectbox.selectedIndex].value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
    
}




  
