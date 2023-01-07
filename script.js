const itens = document.querySelectorAll(".carousel-cards li")
const back = document.querySelector("#leftArrow")
const ahead = document.querySelector("#rightArrow")
const learnMore = document.querySelector(".learn-more")
const modal = document.querySelector("#modal")


var index = 0

function show(increse){
    index = index+ increse
    index = Math.min(Math.max(index,0), itens.length -1)
    itens[index].scrollIntoView({behavior: "smooth"});
}

back.addEventListener("click",()=>{
    show(-1)
})

ahead.addEventListener("click",()=>{
    show(+1)
})


learnMore.addEventListener("click",showModal)

function showModal(){
    let seccao = document.createElement("div")
    seccao.classList.add("modal-card")

    let titulo = document.createElement("h1")
    titulo.innerText = itens[index].querySelector("h2").textContent

    let texto = document.createElement("p")
    texto.innerHTML = `O câmbio de 6 marchas da ${titulo.textContent} oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!`

    let item = document.createElement("img")
        if(index == 0){
            item.src = "./assets/img-card-1.png"
        }
        else {
            item.src = "./assets/img-card-2.png"
        }
    
    

    let assinar = document.createElement("button")
    assinar.innerText = "Quero Assinar!"

    seccao.appendChild(titulo)

    seccao.appendChild(texto)

    seccao.appendChild(item)

    seccao.appendChild(btFecha())
    seccao.appendChild(assinar)

    modal.appendChild(seccao)
    modal.style.visibility = "visible"

}

function btFecha(){
    let botao = document.createElement("button")
    botao.innerText = "X"
    botao.style.fontSize = "30px"
    botao.addEventListener("click",()=>{
    let item = modal.querySelector("div")
    modal.removeChild(item)
    modal.style.visibility = "hidden"
    })
    return botao
}

