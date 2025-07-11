const phrases = {
    signs:['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    luck:['good luck', 'bad luck', 'ok luck'],
    goodNews:['You will find a new opportunity today.', 'A friend will bring you good news.', 'You will receive a compliment that makes your day.'],
    badNews:['You might face a minor setback today.', 'A misunderstanding could lead to some frustration.', 'You may lose something important.'],
    okNews:['You will have a normal day with no surprises.', 'You might hear some neutral news from a colleague.', 'A routine task will go smoothly.'],

    get randomSign() {
        return this.signs[Math.floor(Math.random() * this.signs.length)];
    },
    get randomLuck() {
        return this.luck[Math.floor(Math.random() * this.luck.length)];
    },
    get randomGoodNews() {
        return this.goodNews[Math.floor(Math.random() * this.goodNews.length)];
    },
    get randomBadNews() {
        return this.badNews[Math.floor(Math.random() * this.badNews.length)];
    },
    get randomOkNews() {
        return this.okNews[Math.floor(Math.random() * this.okNews.length)];
    },
}



function generateMessage() {
    const sign = phrases.randomSign;
    const luck = phrases.randomLuck;
    let news = '';
    let message = '';

    if( luck === 'good luck') {
        news = phrases.randomGoodNews;
        message = `Your sign is ${sign}. Today, you can expect ${luck}. Also, ${news}`;
        console.log(message);
    }else if (luck === 'bad luck') {
        news = phrases.randomBadNews;
        message = `Your sign is ${sign}. Today, you can expect ${luck}. Also, ${news}`;
        console.log(message);
    } else {
        news = phrases.randomOkNews;
        message = `Your sign is ${sign}. Today, you can expect ${luck}. Also, ${news}`;
        console.log(message);
    }

    
    
    
}

generateMessage();