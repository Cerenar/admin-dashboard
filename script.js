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

watches.forEach(watch => {watch.addEventListener('click', () => {
    watch.classList.add('clicked');
    });
});
watches.forEach(watch => {watch.addEventListener('animationend', () => {
    watch.classList.remove('clicked');
    });
});

shares.forEach(share => {share.addEventListener('click', () => {
    share.classList.add('clicked');
    });
});
shares.forEach(share => {share.addEventListener('animationend', () => {
    share.classList.remove('clicked');
    });
});