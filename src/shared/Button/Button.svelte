<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;

    $: classes = `
        button
        ${type === 'primary' ? 'button--primary' : ''}
        ${type === 'secondary' ? 'button--secondary' : ''}
        ${flat ? 'button--flat' : ''}
        ${inverse ? 'button--inverse': ''}
    `
</script>

<button class={classes} on:click>
    <slot></slot>
</button>

<style lang="scss">
    @import './Button.scss';
</style>