const likes = document.querySelectorAll('.like');
const watches = document.querySelectorAll('.watch');
const shares = document.querySelectorAll('.share');

likes.forEach(like => {like.addEventListener('click', () => {
    like.classList.add('clicked');
    });
});
likes.forEach(like => {like.addEventListener('animationend', () => {
    like.classList.remove('clicked');
    });
});

// watches.addEventListener('click', function() {
//   watch.classList.add('clicked');
// });
// watch.addEventListener('animationend', function() {
//   watch.classList.remove('clicked');
// });

// shares.addEventListener('click', function() {
//   share.classList.add('clicked');
// });
// share.addEventListener('animationend', function() {
//   share.classList.remove('clicked');
// });