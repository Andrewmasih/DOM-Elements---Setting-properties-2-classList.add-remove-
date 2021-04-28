function lightTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");
}

function darkTheme ()  {
  el = document.getElementById ("mainDiv");
  el.classList.remove ("dark");
  el.classList.add ("light");

};

/* we perefer NOT to create inline styles,instead we prefer to add or remove classes, we can do this by using: 'classList.add' or 'classList.remove' method  */

/* in our example we give the user a choice of light or dark theme for viewing our content, we achieve these by 'adding' or 'removing' classes. */