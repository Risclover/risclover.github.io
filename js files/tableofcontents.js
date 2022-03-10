const expandList1 = document.getElementById('expand-list1');
const expandList2 = document.getElementById('expand-list2');
const expandSublist1 = document.getElementById('expand-sublist1');
const expandSublist2 = document.getElementById('expand-sublist2');

const openList = document.querySelectorAll('.material-icons');
const open1 = document.querySelector('.open1');
const open2 = document.querySelector('.open2');
const open3 = document.querySelector('.open3');
const open4 = document.querySelector('.open4');

openList.forEach(btn => {
    btn.style.cursor = 'pointer';
})

open1.addEventListener('click', function() {
    if(expandList1.style.display === 'block') {
        expandList1.style.display = 'none';
        open1.textContent = 'expand_more';
    } else {
        expandList1.style.display = 'block';
        open1.textContent = 'expand_less';
    }
})

open2.addEventListener('click', function() {
    if(expandList2.style.display === 'block') {
        expandList2.style.display = 'none';
        open2.textContent = 'expand_more';
    } else {
        expandList2.style.display = 'block';
        open2.textContent = 'expand_less';
    }
})

open3.addEventListener('click', function() {
    if(expandSublist1.style.display === 'block') {
        expandSublist1.style.display = 'none';
        open3.textContent = 'expand_more';
    } else {
        expandSublist1.style.display = 'block';
        open3.textContent = 'expand_less';
    }
})

open4.addEventListener('click', function() {
    if(expandSublist2.style.display === 'block') {
        expandSublist2.style.display = 'none';
        open4.textContent = 'expand_more';
    } else {
        expandSublist2.style.display = 'block';
        open4.textContent = 'expand_less';
    }
})