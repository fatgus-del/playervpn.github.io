const textElement = document.querySelector('.color-changing-text');
const text = textElement.textContent;
textElement.innerHTML = '';

text.split('').forEach((letter, index) => {
const span = document.createElement('span');
span.textContent = letter;
span.style.animationDelay = `${index * 0.1}s`;
textElement.appendChild(span);
});

const email = 'Opal.EphTv.Networks@outlook.com';
const subject = 'Game Request';
const body = 'I would like to request the following game:';
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

setTimeout(() => {
window.location.href = mailtoLink;
}, 4000);
