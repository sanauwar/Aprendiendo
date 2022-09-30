// const e2 = document.querySelector(".tile");
// var elements = document.getElementsByClassName('tile'); // get all elements




var table = document.querySelector('.tile')
var selectedCells = table.getElementsByClassName('selected')

table.addEventListener('click', function(e) {
    var td = e.target
    console.log('+++++++++++++', td)
    // if (td.tagName !== 'TD') {
    //   return
    // }
    
    // if (selectedCells.length) {
    //   selectedCells[0].className = ''    
    // }
  
    // td.className = 'selected'
  })

//parent = document.querySelector("#parent")
// console.log(parent.target)
// .addEventListener('click', function () {
//     alert('HI', this)
//     console.log('Yii', this)
// })


