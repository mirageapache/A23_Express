const navlist = document.querySelector('.navlist')

navlist.addEventListener('click', event => {
  event.preventDefault()
  if(event.target.classList.value !== 'navitem'){
    return
  }
  const items = document.querySelectorAll('.navitem')
  items.forEach(item => item.classList.remove('actived'))
  event.target.classList.add('actived');
})