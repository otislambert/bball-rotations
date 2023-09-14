<div class="header">
  <a class="plainLink" href="/">
    <h1>NBA Rotations</h1>
  </a>
  <div class="links">
    <!-- TODO: add about page -->
    <a href="/about">About</a>
    <a href="https://github.com/otislambert/bball-rotations" target="_blank"
      >Github</a
    >
  </div>
</div>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 2px solid black;

    h1 {
      margin: 0;
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 1em;

    a {
      font-weight: 600;
      color: black;
      transition: 200ms ease-in-out;
    }
    a:hover {
      color: orange;
    }
  }
</style>
