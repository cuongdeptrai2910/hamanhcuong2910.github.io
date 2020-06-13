var input = document.querySelector('.messagebox-input-text');
var send = document.querySelector('.messagebox-input-send');
var contents = document.querySelector('.messagebox-contents');
var todoList = [];
    send.addEventListener('click',()=>{
        var value = input.value;
        if(value != ''){
            todoList.push(value);
            let changeSpan = todoList.map((x)=>{
                return '<span class="messagebox-contents-text">' + x + '<i class="messagebox-contents-text-icon far fa-smile"></i></span>';
            });
            render(changeSpan);
            input.value = '';
        }
    });
function render(changeSpan){
    contents.innerHTML = changeSpan.join('');
}
let keyDown = (event)=>{
    if(event.keyCode === 13){
        var value = input.value;
        if(value != ''){
            todoList.push(value);
            let changeSpan = todoList.map((x)=>{
                return '<span class="messagebox-contents-text">'
                 + x + 
                '<label for="checkicons" class="messagebox-contents-text-icon far fa-smile"></label>'+
                '<input type="checkbox" hidden id="checkicons">'+
                '<div class="messagebox-contents-text-icons">'+
                '<i class="messagebox-contents-text-icons-icon fas fa-heart"></i>'+
                '<i class="messagebox-contents-text-icons-icon fas fa-thumbs-up"></i>'+
                '<i class="messagebox-contents-text-icons-icon fas fa-thumbs-down"></i>'+
                '</div>'+'</span>';
            });
            render(changeSpan);
            input.value = '';
        }
    }
}
window.addEventListener('keydown',keyDown)
var icons = document.querySelectorAll('.messagebox-input-icons-icon-child');
var iconColor = document.querySelectorAll('.messagebox-input-icons-icon-circalcolor');
var headder = document.querySelector('.messagebox-head');
var headderText = document.querySelector('.messagebox-head-title');
var iconFather = document.querySelector('.messagebox-input-icons');
iconColor.forEach((x)=>{
    x.addEventListener('click',function changeColor(){
        let colors = x.style.background;
        let changeString = colors.toString();
        var changeSpancolor = todoList.map((x)=>{
            return '<span style= "background:'+changeString+' ;"class="messagebox-contents-text">' + x + '<i class="messagebox-contents-text-icon far fa-smile"></i></span>';
        });
        headder.style.background = changeString;
        headderText.style.color = '#fff';
        render(changeSpancolor);
        iconFather.style.color = changeString;
        removeEventListener('keydown',keyDown);
        let keyDowns = (event)=>{
            if(event.keyCode === 13){
                var value = input.value;
                var headderColor = headder.style.background;
                if(value != ''){
                    todoList.push(value);
                    let changeSpancolor = todoList.map((x)=>{
                        return '<span style= "background:'+headderColor+' ;"class="messagebox-contents-text">' + x + '<i class="messagebox-contents-text-icon far fa-smile"></i></span>';
                    });
                    render(changeSpancolor);
                    input.value = '';
                }
            }
        }
        window.addEventListener('keydown',keyDowns); 
    })
});