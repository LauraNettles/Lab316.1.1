//gives title to web site, NOT, web page
document.title = 'Dom manipulation';
//declaring the object "mainEl." mainEl is the primary content box.
const mainEl = document.querySelector('main');
//assigns color to the mainEl area
mainEl.style.backgroundColor = 'var(--main-bg)';

//create text and a visible object for page
const h1 = document.createElement('h1');
h1.textContent = 'Dom Manipulation';

//centers the text on the page
mainEl.classList.add('flex-ctr');

//adds the h1 object to the page (alternative to JavaScript)
mainEl.appendChild(h1);

//prints, outlines, to console
console.log(mainEl);

//declaring and creating a object for the navigation bar
const topMenuEl = document.getElementById('top-menu');
///gives color, height to the navigation bar
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.style.height = '100%';
// what is className and where did it come from?
topMenuEl.className = 'flex-around';
//prints, outlines, navigation bar in the console
console.log(topMenuEl);
//array, creating an array
const navMenuLinks = [
    //this is an object, with two properties (text and href)
    {text: 'about', href:'/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/order'},
    {text: 'account', href: '/account'},
]

//creating a for loop that will add the nav bar links to the navigation bar
for (let i = 0; i < navMenuLinks.length; i++){
    const a = document.createElement('a');
    //here, "anchoring," setting the hyperlink property "href" to the nav bar
    a.setAttribute('href', navMenuLinks[i].href);
    //give the link text
    a.textContent = navMenuLinks[i].text;
    topMenuEl.appendChild(a);}

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.