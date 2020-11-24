<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tabs;
    export let activeTab;
</script>

<nav>
    <ul class="tabs">
        {#each tabs as tab}
            <li
                class="tab"
                class:tab--active={activeTab === tab}
                on:click={() => dispatch('tabChange', tab)}
            >
                {tab}
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    @import './Tabs.scss';
</style>
