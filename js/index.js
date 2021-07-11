const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}
function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al botón de pausa')
}
function handleBackward() {
    // $video.currentTime -= 10  version corta
    $video.currentTime = $video.currentTime - 10
    console.log('le diste click al botón de retroceder 10 segundos', $video.currentTime)
}
function handleForward() {
    $video.currentTime = $video.currentTime + 10
    console.log('le diste click al botón de adelantar 10 segundos', $video.currentTime)
}