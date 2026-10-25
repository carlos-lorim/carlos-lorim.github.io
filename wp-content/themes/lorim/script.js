(function(){
var c=document.getElementById('clk');
function t(){var d=new Date();c.textContent=d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});}
if(c){t();setInterval(t,15000);}
var b=document.getElementById('bday');
if(b){var n=new Date(),y=n.getFullYear(),a=new Date(y,10,1),h=new Date(y,n.getMonth(),n.getDate());
if(h>a)a=new Date(y+1,10,1);var d=Math.round((a-h)/864e5);
b.textContent=d===0?'Hoje é meu aniversário!':'Faltam '+d+' dias para o meu aniversário (1/11).';}
})();
