const pages=['home','versions','mods','settings'];const titles={home:'С возвращением',versions:'Версии игры',mods:'Управление модами',settings:'Настройки'};
document.querySelector('.bottom small').textContent='JK Launcher v1.1.4 GLOBAL';
document.title='JK Launcher GLOBAL 1.1.4';
const versions=[['1.21.4','Современная версия'],['1.21.1','Современная версия'],['1.20.1','Популярна для модов'],['1.19.4','Поддержка модификаций'],['1.18.2','Популярна для сборок'],['1.16.5','Большой выбор модов'],['1.12.2','Классические модпаки'],['1.8.9','PvP-сборки'],['1.7.10','Старые модпаки']];
const toast=document.getElementById('toast');let timer;function notify(s){toast.textContent=s;toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),3000)}
function go(p){pages.forEach(x=>document.getElementById(x).classList.toggle('show',x===p));document.querySelectorAll('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===p));document.getElementById('heading').textContent=titles[p]}
document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>go(b.dataset.page));
let selected='1.21.4';const grid=document.getElementById('versionGrid');function choose(v){selected=v;document.getElementById('version').value=v;document.querySelectorAll('.version-card').forEach(c=>c.classList.toggle('selected',c.dataset.v===v));notify('Выбрана версия '+v+'. Игровой движок ещё не подключён.')}
versions.forEach(([v,d])=>{let b=document.createElement('button');b.className='version-card'+(v===selected?' selected':'');b.dataset.v=v;b.innerHTML='<b>Minecraft '+v+'</b><small>'+d+'</small>';b.onclick=()=>choose(v);grid.appendChild(b)});
document.getElementById('version').onchange=e=>choose(e.target.value);
function ram(v){document.getElementById('ram').textContent=v+' ГБ';document.getElementById('ram2').textContent=v+' ГБ';document.getElementById('ramSlider').value=v;document.getElementById('ramSlider2').value=v}
document.getElementById('ramSlider').oninput=e=>ram(e.target.value);document.getElementById('ramSlider2').oninput=e=>ram(e.target.value);
document.getElementById('loader').onchange=e=>notify('Выбран '+e.target.value+' — установщик загрузчика ещё не подключён');
document.getElementById('play').onclick=()=>notify('Запуск недоступен: сначала нужно реализовать установку Minecraft и безопасную авторизацию.');
