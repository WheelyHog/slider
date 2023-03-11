let slideWidth = 1110
sliderCount = 0

let banner_line = document.querySelector('.banner_slider')
let banner_btn_next = document.querySelector('.banner_right')
let banner_btn_prev = document.querySelector('.banner_left')

let banner_dotList = document.querySelectorAll('.banner_dot')

let banner_dot_color = 'rgba(255, 255, 255, .4)'
let banner_dot_active_color = 'rgba(255, 255, 255, 1)'


// changeSlide(banner_dotList, banner_line, banner_btn_next, banner_btn_prev, banner_dot_color, banner_dot_active_color)

function changeSlide(dotList, slider_line, btn_next, btn_prev, dot_color, dot_active_color) {
  for (let i = 0; i < 4; i++) {
    dotList[i].addEventListener('click', () => {
      sliderCount = i
      setDot(i)
      slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
    })
  }

  function go_right() {
    sliderCount++
    if (sliderCount >= 4) {
      sliderCount = 0
    }
    slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
    setDot(sliderCount)
  }

  btn_next.addEventListener('click', go_right)
  btn_prev.addEventListener('click', go_left)

  function go_left() {
    sliderCount--
    if (sliderCount < 0) {
      sliderCount = 3
    }
    slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
    setDot(sliderCount)
  }

  function setDot(sliderCount) {
    for (let i = 0; i < 4; i++) {
      dotList[i].style.background = dot_color
    }
    dotList[sliderCount].style.background = dot_active_color
  }
}

changeSlide(banner_dotList, banner_line, banner_btn_next, banner_btn_prev, banner_dot_color, banner_dot_active_color)   //bannerslider

// ===================================================================
let clientsSliderList = document.querySelectorAll('.clients_slide')

let clients_line = document.querySelector('.clients_slider')
let clients_btn_next = document.querySelector('.clients_right')
let clients_btn_prev = document.querySelector('.clients_left')

let clients_dotList = document.querySelectorAll('.clients_dot')
let clients_dot_color = 'rgba(0, 95, 163, .4)'
let clients_dot_active_color = 'rgba(0, 95, 163, 1)'

changeSlide(clients_dotList, clients_line, clients_btn_next, clients_btn_prev, clients_dot_color, clients_dot_active_color)