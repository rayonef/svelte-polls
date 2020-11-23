<script>
    // import { onDestroy } from 'svelte';
    import { fade, slide, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    import PollStore from 'stores/PollStore.js'
    import Poll from 'components/Poll/Poll.svelte';

    // let polls = [];

    // Another way to get data from store, this way needs unsubscribin to avoid memory leaks
    // const unsub = PollStore.subscribe(data => {
    //     polls = data.polls;
    // });

    // onDestroy(() => {
    //     unsub();
    // });
</script>

<div class="polls">
    {#each $PollStore.polls as poll (poll.id)}
        <div
            in:fade
            out:scale|local
            animate:flip={{ duration: 500 }}
        >
            <Poll {poll}/>
        </div>
    {/each}
</div>

<style lang="scss">
    @import './PollList.scss';
</style>