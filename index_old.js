// Get references to the buttons and content blocks
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const buttons = [btn1, btn2];

const about = document.getElementById('about');
const education = document.getElementById('education');
const contents = [about, education];

function activateButton(btn)
{
    for(button of buttons) {
        button.classList.remove("active");
    }
    btn.classList.add("active");
}

function activateContent(cnt)
{
    for(content of contents) {
        content.classList.remove("active");
    }
    cnt.classList.add("active");
}

// Add click event listeners to the buttons
btn1.addEventListener('click', () => {
  activateContent(about);
  activateButton(btn1);
});

btn2.addEventListener('click', () => {
  activateContent(education);
  activateButton(btn2);
});
