const menu=document.querySelector('#menu'),links=document.querySelector('#links');
menu.onclick=()=>links.classList.toggle('open');
let count=0,total=0;
document.querySelectorAll('.add').forEach(b=>b.onclick=()=>{count++;total+=+b.dataset.price;document.querySelector('#count').textContent=count;document.querySelector('#total').textContent=total.toLocaleString('es-CO');alert(b.dataset.name+' fue agregado al carrito 🛒');});
document.querySelector('#form').onsubmit=e=>{e.preventDefault();document.querySelector('#msg').textContent='✅ Solicitud enviada correctamente. Te contactaremos pronto.';e.target.reset();};