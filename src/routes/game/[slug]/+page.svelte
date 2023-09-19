<script lang="ts">
  interface PageLoadData {
    props: {
      gameId: string;
    };
  }

  export let data: PageLoadData;

  const { gameId } = data.props;
</script>

<div>
  <h2>Game Page</h2>
  <p>{gameId}</p>
</div>

<style lang="scss"></style>
