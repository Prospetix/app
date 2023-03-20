<script>
    export let toggle
    
    let toggles = toggle

    // function men() {
    //     toggles = !toggles
    // }

    // console.log(toggles);
</script>

<button on:click={toggles}>
    <slot></slot>
</button>




<style>
    button{
        background-color: green;
        border: none;
        outline: none;
        padding: 15px 15px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        font-weight: 600;
        font-size: 1.1rem;
    }
    .change{
        background-color: red;
    }
</style>