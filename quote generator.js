<script src="javascript.js">

var quotes = [
    'Thank you for your kindness'
    'You are so kind to think of me'
    'I appreciate your interest'
    'Thank you for showing up'
    'Your words are meaningful'
    'I hear what you are saying'
    'I appreciate your time'
    'Thank you for sharing'
    'I care about you'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay).innerHTML*quotes[randomNumber];
}
</script>

