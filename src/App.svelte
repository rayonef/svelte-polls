<script>
    import Header from 'components/Header/Header.svelte';
    import Footer from 'components/Footer/Footer.svelte';
    import PollList from 'components/PollList/PollList.svelte';
    import Tabs from 'shared/Tabs/Tabs.svelte';
    import CreatePollForm from 'components/CreatePollForm/CreatePollForm.svelte';

    // tabs
    let tabs = ['Current Polls', 'Add New Poll'];
    let activeTab = 'Current Polls';

    const handleTabChange = (e) => {
        activeTab = e.detail;
    };

    const handleAddPoll = () => {
        activeTab = 'Current Polls';
    };
</script>

<Header />
<main>
    <Tabs tabs={tabs} activeTab={activeTab} on:tabChange={handleTabChange} />
    {#if activeTab === 'Current Polls'}
        <PollList />
    {:else}
        <CreatePollForm on:addPoll={handleAddPoll} />
    {/if}
</main>
<Footer />

<style lang="scss">
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
