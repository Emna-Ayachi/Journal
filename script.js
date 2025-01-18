const GreenColor=document.querySelector('.green');
const PurpleColor=document.querySelector('.purple');
const PeachColor=document.querySelector('.peach');
const Image=document.getElementById('image-preview'); 
GreenColor.addEventListener('click',()=>{
    Image.src = '8.jpg';
});
PurpleColor.addEventListener('click',()=>{
    Image.src = '6.jpg';
});
PeachColor.addEventListener('click',()=>{
    Image.src = '7.jpg';
});