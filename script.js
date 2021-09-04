const nexbt = document.querySelector('#next')
const prebt = document.querySelector('#prev')
const progress = document.querySelector('.progress')
const nums = document.querySelectorAll('.circle')
let progressWidth = 0;
nexbt.addEventListener('click', () => {
    progressWidth += 30;
    update()
})
prebt.addEventListener('click', () => {
    progressWidth -= 30;
    update()
})
function update() {
    progress.style.width = `${progressWidth}%`
    progressWidth >= 30 ? nums[1].classList.add('active') : nums[1].classList.remove('active')
    progressWidth >= 60 ? nums[2].classList.add('active') : nums[2].classList.remove('active')
    progressWidth >= 90 ? nums[3].classList.add('active') : nums[3].classList.remove('active')
    if (progressWidth === 0) prebt.disabled = true
    else if (progressWidth === 90) nexbt.disabled = true
    else 
    {
        prebt.disabled = false
        nexbt.disabled = false
    }
}