<script>
	import Button from "./Button.svelte";
    import { feedStore } from "../stored";

    let text = '';
    let date = ''
    let num = 1
    let message = ''
    $: entry = ($feedStore.length - 3)+1
    let disable = true

    function check() {
        if (text.trim().length <= 5) {
        message = 'must be longer than 5 characters'
        disable=true
        }else{
            // @ts-ignore
            message = null
            disable = false
        }
        console.log(disable);
    }
    


    function submit() {
       num++
        let newFeed = {
            text,
            date,
            id: Math.random() * 1000, 
            name: 'new entry'+" "+ entry
        }
        text = ''
        disable=true

        // @ts-ignore
        feedStore.update((cureentFeeds)=>{
            return [newFeed, ...cureentFeeds]
        })
    }

</script>


<form on:submit={submit}>
    <div>
        <input on:input={check} type="text" bind:value={text} placeholder="write in your feed" >
        <button type="submit" disabled={disable}  class="{!disable ? 'dis' : ''}" >send</button>  
    </div>
    <div>
        <input class="check"  type="checkbox" name="" id="">
        <input bind:value={date} class="date" type="date" name="" id="">
    </div>
    {#if message}
         <p style="color:red; font-size: 1.1rem">{message}</p>
    {/if}
</form>

<style>
    /* .dis{
        background-color: grey;
    } */
    button:disabled{
        background-color: rgba(102, 92, 92, 0.466);
    }
    form{
        margin-top: 20px;
    }
    form div:nth-child(1){
        height: 50px;
        margin-bottom: 20px;
    }
    form div:nth-child(1) input{
        width: 340px;
        height: 50px;
        border-radius: 10px;
        outline: none;
        padding-left: 10px;
        border: none;
        font-size: 1.1rem;
    }
    form div:nth-child(2){
        width: 70%;
    }
    form div:nth-child(2) .date{
        height: 30px;
        border: none;
        padding: 10px;
    }
    button{
        background-color: rgb(0, 51, 128);
        border: none;
        outline: none;
        padding: 15px 15px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        font-weight: 600;
        font-size: 1.1rem;
    }
    
    form div{
        display: flex;
        justify-content: space-between;
    } 
</style>
