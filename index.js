const telefone= 
{"Edma":"27 99735-0105",
"Emerson":"27 99829-9821",
"Nélio":"27 99841-2325",
"Vilma":"27 99929-2545",
"Eli":"27 99934-2310",
"Maria":"27 99700-5413",
"Vergínia":"27 99925-7436",
"Lidvina":"75 9714-8817",
"Pedro":"27 99694-5665",
"Leila":"27 99503-0078",
"Marconi":"Está com Deus",
"Nerli":"Está com Deus",
"Julio":"27 99630-5410",
"Wellington":"27 98814-6507",
"Michele":"27 99769-1173",
"Ivan":"85 9633-5284",
"Pâmela":"28 99996-0792",
"Lucas":"28 99996-0792",
"Mateus":"27 98151-6146",
"Lisandra":"27 99822-7434",
}

const pais = document.getElementsByClassName("geracao1");
for(let pessoa of pais)
{
    pessoa.addEventListener("click",clicou,false) 
    function clicou(e)
    {
        if (e.target.classList.contains('deceased'))
        {return}
        janela(e.target.innerHTML)
    }
}
const filhos = document.getElementsByClassName("geracao2");
for(let pessoa of filhos)
{
    pessoa.addEventListener("click",clicou,false) 
    function clicou(e)
    {
        if (e.target.classList.contains('deceased'))
        {return}
        janela(e.target.innerHTML)
    }
}

function janela(nome)
{
    nome = `Nome: ${nome}<br>Telefone: <a href=tel:${telefone[nome]}>${telefone[nome]}</a>`
    document.getElementById("fundo2").classList.remove('closed');
    console.log("oi");
    const janela = document.getElementById("janela");
    janela.classList.remove('closed');
    janela.getElementsByTagName("span")[0].innerHTML = nome;
}
function fecharJanela()
{
    document.getElementById("janela").classList.add('closed');
    document.getElementById("fundo2").classList.add('closed');
}
janela("potato");

