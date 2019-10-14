<script>
 window.onscroll = function() {
    const button = document.querySelector("#btn-top");
    if (window.pageYOffset > 40) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  const toTop = () => {
    let interval = setInterval(func, 6);
    function func(e) {
      window.scrollBy(0, -1);
      if (window.pageYOffset === 0) {
        clearInterval(interval);
      }
    }
  };
</script>

<button
  id="btn-top"
  class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
  on:click={toTop}
  title="go up"
>
  <i class="material-icons" >swap_vert</i>
</button>

<style>
  
#btn-top {
  cursor: pointer;
  display: none;
  position: fixed;
  bottom: 20px;
  right: 40px;
  z-index: 99;
  background-color: #014029;
}

@media screen and (max-width: 580px) {
  #btn-top {
    width: 30px;
    min-width: 30px;
    height: 30px;
  }
  i {
    font-size: 16px;
  }
}
</style>