const myName = prompt('Please enter your name here');
const gender = prompt('Are you a MALE or FEMALE');
const age = Number(prompt('Please enter your age here'));
const storyTitle = prompt('Please enter your story title here');
let childDream = prompt('What has always been your dream?');
let turnOut = prompt('What happened?');

const myStory = function () {

    let story = `My name is ${myName}. I am a ${age}-year-old. The title of`
        story = story + ` my story is ${storyTitle}. As a child, I had`
        story = story + ` big dreams of ${childDream}. Life took unexpected`
        story = story + ` turns, and I found myself lost in a mundane`
        story = story + ` routine. Something ignited within me. ${turnOut},`
        story = story + ` and I embarked on an adventure of a lifetime.`
        story = story + ` From scaling mountains to befriending strangers, I `
        story = story + ` discovered the beauty of the unknown. Along the way,`
        story = story + ` I uncovered my true passionsand rekindled the spark`
        story = story + ` of my childhood dreams. This is the story of how I`
        story = story + ` found myself by letting go and chasing my wildest `
        story = story + ` dreams.`;

    alert(story);
}

myStory();
// console.log(document.querySelector('.title').textContent = storyTitle);