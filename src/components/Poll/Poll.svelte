<script>
    import { tweened } from 'svelte/motion';

    import PollStore from 'stores/PollStore.js';
    import Card from 'shared/Card/Card.svelte';
    import Button from 'shared/Button/Button.svelte';

    // props
    export let poll;

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
    $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

    // tweened percentages
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
    // $: console.log($tweenedA, $tweenedB);

    const handleVote = (option, id) => {
        PollStore.update((state) => {
            const { polls } = state;
            const pollsCopy = [...polls];
            const upvotedPoll = pollsCopy.find((poll) => poll.id === id);

            if (option === 'a') {
                upvotedPoll.votesA++;
            }
            if (option === 'b') {
                upvotedPoll.votesB++;
            }

            return { ...state, polls };
        });
    };

    const handleDelete = (id) => {
        PollStore.update((state) => {
            return {
                ...state,
                polls: state.polls.filter((poll) => poll.id !== id),
            };
        });
    };
</script>

<Card>
    <div class="poll">
        <h3 class="poll__question">{poll.question}</h3>
        <p class="poll__votes">Total votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div
                class="answer__percent answer__percent--a"
                style="width: {$tweenedA}%"
            />
            <div class="answer__info">{poll.answerA} ({poll.votesA})</div>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div
                class="answer__percent answer__percent--b"
                style="width: {$tweenedB}%"
            />
            <div class="answer__info">{poll.answerB} ({poll.votesB})</div>
        </div>

        <div class="poll__delete">
            <Button flat on:click={() => handleDelete(poll.id)}>
                Delete Poll
            </Button>
        </div>
    </div>
</Card>

<style lang="scss">
    @import './Poll.scss';
</style>
