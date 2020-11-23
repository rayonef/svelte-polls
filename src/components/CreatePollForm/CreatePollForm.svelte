<script>
    import PollStore from 'stores/PollStore.js';
    import { createEventDispatcher } from 'svelte';
    import Button from 'shared/Button/Button.svelte';

    let dispatch = createEventDispatcher();

    let fields = {
        question: '',
        answerA: '',
        answerB: '',
    };
    let errors = {
        question: '',
        answerA: '',
        answerB: '',
    };
    let valid = false;

    const handleSubmit = () => {
        valid = true;
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = 'Question must be at least 5 chars long';
        } else {
            errors.question = '';
        }

        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = 'Answer A cannot be empty';
        } else {
            errors.answerA = '';
        }

        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = 'Answer B cannot be empty';
        } else {
            errors.answerB = '';
        }

        if (valid) {
            const poll = {
                ...fields,
                votesA: 0,
                votesB: 0,
                id: Math.random(),
            };

            // save poll to store
            PollStore.update((state) => {
                console.log(state);
                return { ...state, polls: [poll, ...state.polls] };
            });

            dispatch('addPoll');
        }
    };
</script>

<style lang="scss">
    @import './CreatePollForm.scss';
</style>

<form class="poll-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-field">
        <label for="question">Poll Question: </label>
        <input id="question" type="text" bind:value={fields.question} />
        {#if errors.question}<small class="error">{errors.question}</small>{/if}
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A: </label>
        <input id="answer-a" type="text" bind:value={fields.answerA} />
        {#if errors.answerA}<small class="error">{errors.answerA}</small>{/if}
    </div>
    <div class="form-field">
        <label for="Answer-b">Answer B: </label>
        <input id="Answer-b" type="text" bind:value={fields.answerB} />
        {#if errors.answerB}<small class="error">{errors.answerB}</small>{/if}
    </div>
    <Button type="secondary" flat>Add Poll</Button>
</form>
