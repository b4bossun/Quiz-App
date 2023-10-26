const container = document.querySelector('.container')
container.style.fontFamily = 'trebuchet MS'
const babyNames = ['Olivia', 'Jude', 'Anabel', 'James', 'Comfort', 'Jerry', 'Kamsy', 'Princess', 'Olivia', 'Clinton', 'Obama', 'Mary', 'Vivian', 'Daniel', 'Mark', 'Precious']
function getNames(){
    const randomNames = Math.floor(Math.random() * babyNames.length)
    document.querySelector('.s2').textContent = babyNames[randomNames]
}