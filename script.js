let slideWidth = 1110

let bannerSliderList = document.querySelectorAll('.banner_slide')

let banner_line = document.querySelector('.banner_slider')
let banner_btn_next = document.querySelector('.banner_right')
let banner_btn_prev = document.querySelector('.banner_left')

let banner_dotList = document.querySelectorAll('.banner_dot')
let banner_dot_color = 'rgba(255, 255, 255, .4)'
let banner_dot_active_color = 'rgba(255, 255, 255, 1)'

function changeSlide(dotList, sliderList, slider_line, btn_next, btn_prev, dot_color, dot_active_color) {
  let sliderCount = 0


  for (let i = 0; i < sliderList.length; i++) {
    dotList[i].addEventListener('click', () => {
      sliderCount = i
      setDot(i)
      slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
    })
  }
  // ------------------------------------------------------
  btn_prev.addEventListener('click', go_left)
  btn_next.addEventListener('click', go_right)
  // -----------------------------------------------------
  function go_right() {
    sliderCount++
    if (sliderCount >= sliderList.length) {
      sliderCount = 0
    }
    slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
    setDot(sliderCount)
  }
  // --------------------------------------------------
  function go_left() {
    sliderCount--
    if (sliderCount < 0) {
      sliderCount = sliderList.length - 1
    }
    slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
    setDot(sliderCount)
  }
  // -------------------------------------------------------
  function setDot(sliderCount) {
    for (let i = 0; i < sliderList.length; i++) {
      dotList[i].style.background = dot_color
    }
    dotList[sliderCount].style.background = dot_active_color
  }

}

changeSlide(banner_dotList, bannerSliderList, banner_line, banner_btn_next, banner_btn_prev, banner_dot_color, banner_dot_active_color)

// ==========================================clientSlider=============================

let clientsSliderList = document.querySelectorAll('.clients_slide')

let clients_line = document.querySelector('.clients_slider')
let clients_btn_next = document.querySelector('.clients_right')
let clients_btn_prev = document.querySelector('.clients_left')

let clients_dotList = document.querySelectorAll('.clients_dot')
let clients_dot_color = 'rgba(0, 95, 163, .4)'
let clients_dot_active_color = 'rgba(0, 95, 163, 1)'

changeSlide(clients_dotList, clientsSliderList, clients_line, clients_btn_next, clients_btn_prev, clients_dot_color, clients_dot_active_color)

// ===========================================feedbackSlider=============================

let feedbackSliderList = document.querySelectorAll('.feedback_slide')

let feedback_line = document.querySelector('.feedback_slider')
let feedback_btn_next = document.querySelector('.f_arrow_right')
let feedback_btn_prev = document.querySelector('.f_arrow_left')

let feedback_dotList = document.querySelectorAll('.feedback_dot')
let feedback_dot_color = 'rgba(0, 95, 163, .4)'
let feedback_dot_active_color = 'rgba(0, 95, 163, 1)'

changeSlide(feedback_dotList, feedbackSliderList, feedback_line, feedback_btn_next, feedback_btn_prev, feedback_dot_color, feedback_dot_active_color)