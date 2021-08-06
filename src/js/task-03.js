const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//----------------------------------------------------------------------
//1й способ
//----------------------------------------------------------------------

// const makeGallery = images.map(image => {
//   const { url, alt } = image
//   // console.log(url, alt);

//   const galleryListEl = document.createElement('li')
//   galleryListEl.classList.add('gallery-item')
//   // console.log(image.url);
//   galleryListEl.insertAdjacentHTML('afterbegin', `<img src ="${url}" alt ="${alt}" width ="320" height ="200">`)
//   // console.log(galleryListEl);
//   return galleryListEl
// })

// const galleryList = document.querySelector('#gallery')
// galleryList.classList.add('gallery')
// console.log(galleryList);
// galleryList.append(...makeGallery)

//----------------------------------------------------------------------
//2й способ
//----------------------------------------------------------------------

const galleryContainer = document.querySelector('#gallery');
console.log(galleryContainer);

const createGallery = images => {
galleryContainer.classList.add('gallery');
  const imageItemsList = (image) =>
    `<li><img src="${image.url}" alt="${image.alt}" width='310' height='210'></li>`;
 
  const listGallery = images.map(imageItemsList).join('')
    
galleryContainer.insertAdjacentHTML('beforeend', listGallery)
    
}

createGallery(images);

//----------------------------------------------------------------------
//3й способ
//----------------------------------------------------------------------

// const galleryList = document.querySelector('#gallery')
// console.log(galleryList);
// galleryList.classList.add('gallery')

// const createGallery = images.map(image => {
//   const { url, alt } = image;
//   galleryList.insertAdjacentHTML('beforeend', `<li><img src ="${url}" alt ="${alt}" width ="320" height ="200"></li>`)
  
// })
