function handleFileSelect(evt) {

    var file = evt.target.files;
    var f = file[0];

    if (!f.type.match('image.*')) {
        alert("Только изображения....");
    }

    var reader = new FileReader();

    reader.addEventListener("load", function () {
        evt.target.parentElement.querySelector('label').style.backgroundImage = "url(" + reader.result + ")";
        evt.target.parentElement.querySelector("label").innerHTML = "<p class='remove'>Изменить фото</p>";
        evt.target.parentElement.querySelector("label").appendChild(document.createElement('span')).classList.add("grad");
    }, false);

    reader.readAsDataURL(f);
}

document.querySelector('input#foto_self').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_1').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_2').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_3').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_4').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_5').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_6').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_7').addEventListener('change', handleFileSelect, false);
document.querySelector('input#inputproject_8').addEventListener('change', handleFileSelect, false);