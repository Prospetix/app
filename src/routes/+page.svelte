<script>
// @ts-nocheck

	import { scale,fly,slide,fade } from 'svelte/transition';
    import { feedStore } from '../stored'
    import Feeds from '../components/Feeds.svelte';
    import global from './global.css';
    import Button from '../components/Button.svelte';
	import Form from '../components/Form.svelte';
	
    let show = false
    
    
    function toggle() {
       return show = !show
       
        // console.log(show);
    }

    // @ts-ignore
    let deleteFeed =(ids)=>{
        console.log(ids);
        feedStore.update((state)=>{
            return state.filter((feed)=> feed.id !== ids)
        })
    }
    
</script>

<div class="container" out:slide={{duration:200}} in:fly={{y: -20, delay:500, duration:2000}}>

    <div class="top-sec">
        <h1>FEED TASK</h1>
        {#key show}
          <div in:fly={{y: -50}} class:change={show}>
            <Button toggle={toggle}>{!show ? 'add feed' : 'close'}</Button>
          </div>
        {/key}
    </div>

    {#if show}
      <div in:slide|local={{duration:1000}} out:slide|local={{duration:1000}}>
        <Form />
      </div>  
    {/if}
    
    {#if $feedStore.length < 1}
        <h1 class="nofeed" in:slide out:slide>no feed</h1>
    {:else}
        <Feeds>
            {#each $feedStore as feed (feed.id) }
            
                <div class="feed" in:scale={{duration:1000}} out:fly="{{y: 200, x:-100, duration: 1000}}">
                    <h1>{feed.name}</h1>
                    <h4>{feed.text}</h4>
                    <p>{feed.date}</p>
                    <button class="X" on:click={()=>deleteFeed(feed.id)}>X</button>
                </div>  
            {/each}
        </Feeds>
    {/if}

    <!-- <a class="about" href="/about">about</a> -->
</div>


<style>
    .container{
        width: 500px;
        height: max-content;
        border: 1px solid rgb(224, 213, 213);
        padding: 10px;
        padding-bottom: 20px;
        margin: auto;
        margin-top: 30px;
    }
    
    .nofeed{
        color: white;
    }
    .top-sec{
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }
    .top-sec h1{
        color: white;
    }
    .feed{
        background-color: rgb(219, 217, 217);
        border-radius: 20px;
        padding: 10px 15px;
        margin-top: 10px;
        position: relative;
    }
    .X{
        position: absolute;
        right: 10px;
        top: 10%;
        background-color: red;
        color: white;
        border: none;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 2px;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
    }
</style>