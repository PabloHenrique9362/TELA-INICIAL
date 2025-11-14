    function toggleMode() {
        const html = document.documentElement
        html.classList.toggle('Light')
    
        const img = document.querySelector("#Profile img")

        if(html.classList.contains('Light')) {
            img.setAttribute('src', ' ./Images/avatar-light.png')
        } else {
            img.setAttribute('src', './Images/avatar.png')
        }
    }    