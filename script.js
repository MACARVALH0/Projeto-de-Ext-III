const hover_pieces = document.querySelectorAll(".livro-na-lista");
console.log(hover_pieces);

for(let piece of hover_pieces)
{
    piece.addEventListener("mouseenter", (e) => {toggleHoverView(piece, 1)});
    piece.addEventListener("mouseleave", (e) => {toggleHoverView(piece, 0)});
}



function toggleHoverView(el, mouse_in = 0)
{
    let div = el.firstElementChild;

    if(mouse_in)
    {
        div.style.backgroundColor = "rgba(10, 10, 10, 0.9)";
        div.querySelectorAll('p').forEach(item => {item.style.color = "rgb(250, 250, 250)";});
    }

    else
    {
        div.style.backgroundColor = "transparent";
        div.querySelectorAll('p').forEach(item => {item.style.color = "transparent";});
    }
}