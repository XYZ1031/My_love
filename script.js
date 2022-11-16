const toggle = document.querySelector('.lit')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('white')) {
        html.classList.remove('white')
       

    } else {
        html.classList.add('white')
    
        
    }
})

