// Your code goes here


document.getElementById('bus-image').addEventListener('mouseover', () => {

    document.getElementById('bus-image').style.transform = 'scale(1.5)';

}); // One

document.getElementById('bus-image').addEventListener('mouseout', () => {

    document.getElementById('bus-image').style.transform = 'scale(1)';

}); // Two

document.getElementById('bus-image').addEventListener('dblclick', () => {

    window.location = '/schedule-a-ride.html';

}); // Three

window.addEventListener('scroll', () => {

    document.getElementById('content-img-one').style.transform = 'rotate(10deg)';
    document.getElementById('content-img-two').style.transform = 'rotate(-10deg)';

}); // Four

window.addEventListener('resize', () => {

    document.getElementById('wrapper').style.background = 'blue';

}); // Five

window.addEventListener('keydown', (e) => {

    if (e.keyCode == 13)
        document.querySelector('body').style.opacity = '0';

}); // Six

window.addEventListener('keyup', (e) => {

    if (e.keyCode == 13)
        document.querySelector('body').style.opacity = '1';

}); // Seven

document.getElementById('header-text').addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
}); // Eight

document.getElementById('header-text').addEventListener('paste', (event) => {
    document.getElementById('header-text').innerHTML = event.clipboardData.getData('text');
    event.preventDefault();
}); // Nine

document.getElementById('header-text').addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString());
    document.getElementById('header-text').innerHTML = '';
    event.preventDefault();
}); // Ten

