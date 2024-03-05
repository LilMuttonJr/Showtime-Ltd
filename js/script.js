document.addEventListener('DOMContentLoaded', function() {
    var headline = document.getElementById('headline');
    var words = headline.textContent.split(' ');
    headline.textContent = '';
    words.forEach(function(word, index) {
        var wordSpan = document.createElement('span');
        wordSpan.textContent = word + (index === words.length - 1 ? '' : ' ');
        wordSpan.style.opacity = '0';
        wordSpan.style.animation = 'fadeIn 0.5s forwards';
        wordSpan.style.animationDelay = (0.5 + index * 0.2) + 's';
        headline.appendChild(wordSpan);
    });
});
var style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
