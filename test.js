
var gameArray = ['','','','','','','','','']
function getRandom(){
    let rand = Math.floor((Math.random()*9))
    return rand;
}
const setO = () => {
    var t1 = document.getElementById("t1")
    var t2 = document.getElementById("t2")
    var t3 = document.getElementById("t3")

    var m1 = document.getElementById("m1")
    var m2 = document.getElementById("m2")
    var m3 = document.getElementById("m3")

    var l1 = document.getElementById("l1")
    var l2 = document.getElementById("l2")
    var l3 = document.getElementById("l3")

    if(gameArray[0]==='O'){
        t1.style.color='maroon'
        t1.innerHTML =  'O'
        t1.disabled=true
    }
    if(gameArray[1]==='O'){
        t2.style.color='maroon'
        t2.innerHTML =  'O'
        t2.disabled=true
    }
    if(gameArray[2]==='O'){
        t3.style.color='maroon'
        t3.innerHTML =  'O'
        t3.disabled=true
    }

    if(gameArray[3]==='O'){
        m1.style.color='maroon'
        m1.innerHTML =  'O'
        m1.disabled=true
    }
    if(gameArray[4]==='O'){
        m2.style.color='maroon'
        m2.innerHTML =  'O'
        m2.disabled=true
    }
    if(gameArray[5]==='O'){
        m3.style.color='maroon'
        m3.innerHTML =  'O'
        m3.disabled=true
    }

    if(gameArray[6]==='O'){
        l1.style.color='maroon'
        l1.innerHTML =  'O'
        l1.disabled=true
    }
    if(gameArray[7]==='O'){
        l2.style.color='maroon'
        l2.innerHTML =  'O'
        l2.disabled=true
    }
    if(gameArray[8]==='O'){
        l3.style.color='maroon'
        l3.innerHTML =  'O'
        l3.disabled=true
    }
}
const comp = (exp) => {
    let loc
    let i = 0
    do{ 
        i = i + 1
        // Across
        // 1st line center = 'O'
        if(gameArray[0] === 'X' && gameArray[2] === 'X' && gameArray[1] === ''){
            gameArray[1] = exp
            break
        }
        
        // 2nd line center = 'O'
        else if(gameArray[3] === 'X' && gameArray[5] === 'X' && gameArray[4] === ''){
            gameArray[4] = exp
            break
        }

        // 3rd line center = 'O'
        else if(gameArray[6] === 'X' && gameArray[8] === 'X' && gameArray[7] === ''){
            gameArray[7] = exp
            break
        }

        // middle will  be 'O'
        else if(gameArray[0] === 'X' && gameArray[8] === 'X' && gameArray[4] === ''||
                gameArray[6] === 'X' && gameArray[2] === 'X' && gameArray[4] === ''){
                    gameArray[4] = exp
                    break
        }

        // (1,3) = 'O'
        else if(gameArray[0] === 'X' && gameArray[1] === 'X' && gameArray[2] === ''){
            gameArray[2] = exp
            break
        }

        // (2,3) = 'O'
        else if(gameArray[3] === 'X' && gameArray[4] === 'X' && gameArray[5] === ''){
            gameArray[5] = exp
            break
        }

        // (3,3) = 'O'
        else if(gameArray[6] === 'X' && gameArray[7] === 'X' && gameArray[8] === ''){
            gameArray[8] = exp
            break
        }

        // (1,1) =  'O'
        else if(gameArray[2] === 'X' && gameArray[1] === 'X' && gameArray[0] === ''){
            gameArray[0] = exp
            break
        }

        // (2,1) = 'O'
        else if(gameArray[5] === 'X' && gameArray[4] === 'X' && gameArray[3] === ''){
            gameArray[3]  = exp
            break
        }

        // (3,1) = 'O'
        else if(gameArray[8] === 'X' && gameArray[7] === 'X' && gameArray[6] === ''){
            gameArray[6] = exp
            break
        }

        // Top to bottom
        // 1st column mid will O
        else if(gameArray[0] === 'X' && gameArray[6] === 'X' && gameArray[3] === ''){
            gameArray[3] = exp
            break
        }

        // 2nd column mid will be O
        else if(gameArray[1] === 'X' && gameArray[7] === 'X' && gameArray[4] === ''){
            gameArray[4] = exp
            break
        }

        // 3rd column mid will be O
        else if(gameArray[2] === 'X' &&  gameArray[8] === 'X' && gameArray[5] === ''){
            gameArray[5] = exp
            break
        }

        // 1st column last will  be O
        else if(gameArray[0] === 'X' && gameArray[3] === 'X' && gameArray[6] === ''){
            gameArray[6] = exp
            break
        }

        // 2nd column last will O
        else if(gameArray[1] === 'X' && gameArray[4] === 'X' && gameArray[7] === ''){
            gameArray[7] = exp
            break
        }

        // 3rd column last will  O
        else if(gameArray[2] === 'X' &&  gameArray[5] === 'X' && gameArray[8] === ''){
            gameArray[8] = exp
            break
        }

        // 1st column first will O
        else if(gameArray[6] === 'X' && gameArray[3] === 'X' && gameArray[0] === ''){
            gameArray[0] = exp
            break
        }

        // 2nd column first  will be O
        else if(gameArray[7] === 'X' && gameArray[4] === 'X' && gameArray[1] === ''){
            gameArray[1] = exp
            break
        }

        // 3rd column first will be O
        else if(gameArray[8] === 'X' &&  gameArray[5] === 'X' && gameArray[2] === ''){
            gameArray[2] = exp
            break
        }

        // cross
        // ltr  last will O
        else if(gameArray[0] === 'X' && gameArray[4] === 'X' && gameArray[8] === ''){
            gameArray[8] = exp
            break
        }

        // ltr  first will be O
        else if(gameArray[8] === 'X' && gameArray[4] === 'X' && gameArray[0] === ''){
            gameArray[0] = exp
            break
        }

        // rtl last will be O
        else if(gameArray[2] === 'X' && gameArray[4] === 'X' && gameArray[6] === ''){
            gameArray[6] = exp
            break
        }

        // rtl first will be O
        else if(gameArray[6] === 'X' && gameArray[4] === 'X' && gameArray[2] === ''){
            gameArray[2] = exp
            break
        }

        // random
        else{
            loc = getRandom()
            if(gameArray[loc] ===''){
                gameArray[loc] = exp
                break;
            }
            else if(i===9){
            break;
            }
        }
        // else{
        //     console.log("1st element already done")
        //     break
        // }
        
    }while(gameArray[loc] !== '')
    setO()
}
const winner = () => {
    var msg = document.getElementById("msg");
    if(gameArray[0] === 'X' && gameArray[1] === 'X' && gameArray[2] === 'X' ||
    gameArray[3] === 'X' && gameArray[4] === 'X' && gameArray[5] === 'X' ||
    gameArray[6] === 'X' && gameArray[7] === 'X' && gameArray[8] === 'X' ||
    gameArray[0] === 'X' && gameArray[3] === 'X' && gameArray[6] === 'X' ||
    gameArray[1] === 'X' && gameArray[4] === 'X' && gameArray[7] === 'X' ||
    gameArray[2] === 'X' && gameArray[5] === 'X' && gameArray[8] === 'X' ||
    gameArray[0] === 'X' && gameArray[4] === 'X' && gameArray[8] === 'X' ||
    gameArray[2] === 'X' && gameArray[4] === 'X' && gameArray[6] === 'X' 
    ){
        document.getElementById("left").style.display='block'
        document.getElementById("right").style.display='block'
        document.getElementById("tic").disabled=true;
        document.getElementById("reload").style.display='block'
        msg.innerHTML = 'X won the game'
    }
    else if(gameArray[0] === 'O' && gameArray[1] === 'O' && gameArray[2] === 'O' ||
    gameArray[3] === 'O' && gameArray[4] === 'O' && gameArray[5] === 'O' ||
    gameArray[6] === 'O' && gameArray[7] === 'O' && gameArray[8] === 'O' ||
    gameArray[0] === 'O' && gameArray[3] === 'O' && gameArray[6] === 'O' ||
    gameArray[1] === 'O' && gameArray[4] === 'O' && gameArray[7] === 'O' ||
    gameArray[2] === 'O' && gameArray[5] === 'O' && gameArray[8] === 'O' ||
    gameArray[0] === 'O' && gameArray[4] === 'O' && gameArray[8] === 'O' ||
    gameArray[2] === 'O' && gameArray[4] === 'O' && gameArray[6] === 'O' 
    ){
        document.getElementById("left").style.display='block'
        document.getElementById("right").style.display='block'
        document.getElementById("tic").disabled=true;
        document.getElementById("reload").style.display='block'
        msg.innerHTML = 'O won the game'
    }
   
}
function top1(){
    var t1 = document.getElementById("t1")
    if(gameArray[0]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[0]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
        // console.log("hello"+gameArray[0])
    }
}
function top2(){
    var t1 = document.getElementById("t2")
    if(gameArray[1]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[1]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()       
        comp('O')
        winner()
    }
}
function top3(){
    var t1 = document.getElementById("t3")
    if(gameArray[2]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[2]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
    }
}
function mid1(){
    var t1 = document.getElementById("m1")
    if(gameArray[3]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[3]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
    }
}
function mid2(){
    var t1 = document.getElementById("m2")
    if(gameArray[4]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[4]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
    }
}
function mid3(){
    var t1 = document.getElementById("m3")
    if(gameArray[5]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[5]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
    }
}
function low1(){
    var t1 = document.getElementById("l1")
    if(gameArray[6]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[6]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
    }
}
function low2(){
    var t1 = document.getElementById("l2")
    if(gameArray[7]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[7]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
    }
}
function low3(){
    var t1 = document.getElementById("l3")
    if(gameArray[8]==='O'){
        t1.disabled=true
        winner()
    }
    else{
        t1.innerHTML='X'
        gameArray[8]='X'
        t1.style.color='red'
        t1.disabled=true
        winner()
        comp('O')
        winner()
    }
}
function refresh(){
    window.location.reload()
}