function playSound(newUrl){
    new Audio(newUrl).play();
}
function playPiano(){
    const getNode = document.querySelectorAll('.key');
    getNode.forEach((key, i) => {
        const newUrl = i < 10 ? 'keynode/key0' + i + '.mp3' : 'keynode/key' + i + '.mp3';
        key.addEventListener('click', () => {
            playSound(newUrl);
        });
    });
}
(()=>{
  playPiano();
})()