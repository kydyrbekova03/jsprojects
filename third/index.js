const quotes = [
    "Above all, don’t lie to yourself.",
    "All happy families are alike; each unhappy family is unhappy in its own way.",

    "Man will only become better when you make him see what he is like.",

    "Habit is given to us from above: it is a substitute for happiness.",

    "The only way to deal with this world is to become so absolutely free that your very existence is an act of rebellion.",

    "What would your good do if evil didn’t exist?",

    "Pain and suffering are always inevitable for a large intelligence and a deep heart.",

    "If everyone fought for their own convictions, there would be no war.",

    "The longer and more carefully we look at a funny story, the sadder it becomes.",

    "The less we show our love to a woman, the more she will like us.",

    "Life is a vexatious trap.",

    "Beauty will save the world.",

    "Everything passes away—suffering, pain, blood, hunger, pestilence.",

    "A person must live in goodness and truth, or he is worth nothing.",

    "Man is born to live, not to prepare for life.",

    "The trouble with you, Oblomov, is that you are lazy, not only physically, but also mentally.",

    "I say let the world go to hell, but I should always have my tea.",

    "I think it is all a matter of love: the more you love a memory, the stronger and stranger it becomes.",

    "Art always serves beauty, and beauty is the happiness of having forms in which to express thought and feeling.",

    "The line dividing good and evil cuts through the heart of every human being."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length)
        if(usedIndexes.has(randomIdx)) continue
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}