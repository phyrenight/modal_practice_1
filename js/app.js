window.onload = function() {
    const button = document.getElementById("click_me");
    const modal = document.getElementById("modal_section");
    button.onclick = function(){
        modal.style.display = "block";
    }
    modal.onclick = function() {
        modal.style.display = "none";
    }
}