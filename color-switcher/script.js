(function(){

    let colorField = document.querySelector('.color-field')
    let switcher = document.querySelector('.switcher')

    function colorChanger(){
        let red = Math.floor(Math.random() * 255 )
        let green = Math.floor(Math.random() * 255 )
        let blue = Math.floor(Math.random() * 255 )

        return `rgb(${red},${green},${blue})`
    }

    switcher.addEventListener('click',()=>{
        let color = colorChanger()
        document.body.style.background = color
        colorField.value = color
    })
})()