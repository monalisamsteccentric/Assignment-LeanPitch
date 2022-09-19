const listing = document.getElementsByClassName('listing')
const upcoming = document.getElementById('upcoming')
const past = document.getElementById('past')
const wupcoming = document.getElementById('wupcoming')
const wpast = document.getElementById('wpast')
const oupcoming = document.getElementById('oupcoming')
const opast = document.getElementById('opast')

Array.from(listing).forEach(element => {
    element.addEventListener('mouseover', () => {
        let classID = element.innerText.split(' ').join('')
        document.getElementsByClassName(`${classID}`)[0].style.display = 'block'

    })
});

Array.from(listing).forEach(element => {
    element.addEventListener('mouseout', () => {
        let classID = element.innerText.split(' ').join('')
        document.getElementsByClassName(`${classID}`)[0].style.display = 'none'

    })
});

upcoming.addEventListener('mouseover', ()=>{
    upcoming.style.backgroundColor = 'white'
    upcoming.style.color = 'black'
    
})

upcoming.addEventListener('mouseout', ()=>{
    upcoming.style.backgroundColor = 'black'
    upcoming.style.color = 'white'
    
})

past.addEventListener('mouseover', ()=>{
    past.style.backgroundColor = 'white'
    past.style.color = 'black'
    
})

past.addEventListener('mouseout', ()=>{
    past.style.backgroundColor = 'black'
    past.style.color = 'white'
    
})

wupcoming.addEventListener('mouseover', ()=>{
    wupcoming.style.backgroundColor = 'black'
    wupcoming.style.color = 'white'
    
})

wupcoming.addEventListener('mouseout', ()=>{
    wupcoming.style.backgroundColor = 'white'
    wupcoming.style.color = 'black'
    
})

wpast.addEventListener('mouseover', ()=>{
    wpast.style.backgroundColor = 'black'
    wpast.style.color = 'white'
    
})

wpast.addEventListener('mouseout', ()=>{
    wpast.style.backgroundColor = 'white'
    wpast.style.color = 'black'
    
})

oupcoming.addEventListener('mouseover', ()=>{
    oupcoming.style.backgroundColor = 'black'
    oupcoming.style.color = 'white'
    
})

oupcoming.addEventListener('mouseout', ()=>{
    oupcoming.style.backgroundColor = 'white'
    oupcoming.style.color = 'black'
    
})

opast.addEventListener('mouseover', ()=>{
    opast.style.backgroundColor = 'black'
    opast.style.color = 'white'
    
})

opast.addEventListener('mouseout', ()=>{
    opast.style.backgroundColor = 'white'
    opast.style.color = 'black'
    
})