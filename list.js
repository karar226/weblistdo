const mybtn =document.getElementById('b1')

const str=document.getElementById("str")

const lisd= document.getElementById('lisd')

function ins(){

const tex = str.value

if(tex !=="")
{
    const sp =document.createElement('li')

    sp.textContent=tex;

    const col=document.createElement('button')

col.innerHTML='full '

col.style.backgroundColor='green'

col.style.borderRadius='30%'

    col.onclick =()=> {
 sp.style.color='green';
    }

    

const del=document.createElement('button')

del.innerHTML='delete';

del.style.backgroundColor='red';

del.onclick=()=>{

    sp.remove()
}

 lisd.append(sp)

      sp.append(col)

             sp.append(del)

    str.value="";
}

}

mybtn.addEventListener('click', ins)
