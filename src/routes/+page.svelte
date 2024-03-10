<script>
// Define the links and images for your social icons
const socialLinks = [
    { href: 'https://youtube.com/@naughtywasp', img: '/youtube.png'}, 
    { href: 'https://tiktok.com', img: '/tik-tok.png'}, 
    { href: 'https://www.instagram.com/naughtywasp', img: '/instagram.png'} 
];
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
<img src="/Logo.png" alt="Logo" class="w-64 h-auto mb-4"> <!-- Adjust the width as needed -->
<h1 class="text-center text-xl mb-6 font-purisa">We're cooking up some great games!</h1>
<p class="text-center mb-6 font-purisa">Follow us on socials to stay up to date</p>
<div class="flex justify-around items-center w-1/2 mb-6 mt-3 bg-gray-500 bg-opacity-20 rounded-lg">
    {#each socialLinks as {href, img}}
    <a href={href} target="_blank" class="w-12 h-12 mt-3 mb-3"> <!-- Adjust the width and height as needed -->
        <img src={img} alt="Social Icon" class="w-full h-auto">
    </a>
    {/each}
</div>
</div>

<footer class="w-full text-left text-white text-sm p-4 absolute bottom-0 bg-transparent font-purisa">
Naughty Wasp Ltd. Copyright 2024.
</footer>