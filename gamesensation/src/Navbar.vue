<template>
<div class="navbar-cus-wrapper">
    <nav>
    <div class="nav-wrapper container">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Apex</a></li>
        <li><a href="badges.html">PUBG</a></li>
        <li><a href="collapsible.html">About</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">Apex</a></li>
    <li><a href="badges.html">PUBG</a></li>
    <li><a href="collapsible.html">About</a></li>
  </ul>
</div>
</template>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


export default {
    name: 'Search',
    data(){

    }
}
</script>

<style>

</style>