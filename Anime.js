<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
  anime({
    targets: '.feature',
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(100)
  });
</script>