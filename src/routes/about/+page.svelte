<script>
    import { fly,slide } from "svelte/transition";
</script>


<div in:slide={{duration: 2000}} out:fly>
    <h1>about us</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi fugit nostrum itaque fuga corrupti, ad possimus qui praesentium tempora exercitationem magni est ducimus inventore facere! Impedit illum eaque similique inventore!</p>
    <p>&copy; 2023</p>
    <a href="/">back home</a>
</div>

<style>
  
  div{
    color: white;
    padding: 20px;
    width: 100vw;
    height: 85vh;
    background-color: rgb(38, 90, 114);
  }
  p{
    margin-bottom: 20px;
  }
  a{
    font-weight: 600;
        font-size: 1.1rem;
        color: white;
        text-decoration: none;
        padding: 10px;
        margin-left: 40%;
        border-radius: 10px;
        background-color: rgb(0, 81, 128);
  }
</style>