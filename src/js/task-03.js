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

// function rendalList() {
//   const markup = books.map(({title}) => {
//     return  `<li>
//       <p>${title}</p>
//       <button type="button">Edit</button>
//       <button type="button">Delete</button>
//       </li>`
      
//   }).join('')
//   bookListRef.insertAdjacentHTML("afterbegin", markup)
// }


const galleryRef = document.querySelector('ul');


function galleryList() {
  const markup = images.map(({url, alt}) =>{
    return `
    <li><img src="${url}" alt="${alt}" width="150px" height="100vpx"></a></li>
    
    `
  }).join('')
  galleryRef.insertAdjacentHTML("afterbegin", markup)
}
galleryList(images)

