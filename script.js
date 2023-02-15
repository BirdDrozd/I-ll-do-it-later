let phrases = [
  { text: 'Send a funny gif to a friend', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'View discounts on airline tickets', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'Figuring out what rappers are singing about', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'Yuri Dud', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'Arrange the books on the shelf by color', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'Read about salaries in San Francisco', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'Read the news and be horrified in the comments', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'To get into a stream of sad songs and remember all the mistakes of youth', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'Watch the trailer of the series and the first season at the same time', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'Check unread messages in Telegram feeds', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];
function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
