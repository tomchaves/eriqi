# Speed Vault Video Gallery (Version: Square-Zero)
### The fast and lightwheight video gallery you've been looking for!

Optimized Performance &#10004;  
Lightwheight &#10004;  
Clean & Responsive Design &#10004;  
Free &#10004;  

## Video Player Support

- Youtube - Supported  
- Vimeo - Supported  
- Daily Motion - Supported  

Speed Vault Video Gallery is a lazy load **jQuery** (Javascript) based gallery to display your most favorite videos on a single place. It's ideal for video makers who want to showcase their work, or for enthusiasts who would like to share the most awesome and funniest videos width the world. SVVG is focused on speed delivery, lightweight code implementation on the DOM so your website can load faster even with big amounts of video players on a single page, and a clean and responsive design.

[Online demo](http://speedvault.pe.hu/)

![Image of Speed Vault Video Gallery](https://i.stack.imgur.com/ay4yK.jpg)

# Documentation
Using SVVG it's easy as creating an HTML list. The extra thing you have to do besides that, is calling both, a jQuery library such as [Google's jQuery library](https://developers.google.com/speed/libraries/) and the plugin itself on the `<head>` of your website. Here's an example with a list of all the supported video platforms of the plugin:

### Head
```
<head>
    <link rel="stylesheet" type="text/css" href="css/svvg-styles.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/speedvault.js"></script>
</head>
```

### HTML
```
<ul id="svList">
    <li class="svThumb ytVideo" data-videoID="yxbDwGMVZlU">Yak Films - EXQUISITE ZOMBIES "Stampede"</li>
    <li class="svThumb ytVideo" data-videoID="8gUDsPj33vE">Buraka Som Sistema - Vuvuzela (Carnaval)</li>
    <li class="svThumb vimeoVideo" data-videoID="21661244">WE TRUST - Time (Better not stop)</li>
    <li class="svThumb vimeoVideo" data-videoID="24195442">Carving the Mountains</li>
    <li class="svThumb dailyMVideo" data-videoID="xk8uvc">T.I. - Whatever You Like (HQ)</li>
    <li class="svThumb ytVideo" data-videoID="Ez6v6RsF_h0">Urban Mountain Bike Madness in Peru</li>
</ul>
```

The concept is simple, just add the class corresponding to your desired player in the `<li>` item (`ytVideo`, `vimeoVideo` or `dailyMVideo`) and the id of the video inside of the `data-videoID`. You can also add your customized title inside of the item as you see on the example above.

## Getting the ids from the videos:
You can get the id from a video by it's URL/link. Here's where: 

Youtube - https:// youtube. com/watch?v=**`8gUDsPj33vE`**  
Vimeo - https:// vimeo. com/**`24195442`**  
Daily Motion - http:// dailymotion .com/video/**`xk8uvc`**_t-i-whatever-you-like-hq_music  

## Browser Support

- Chrome - 56 (Tested & Working)  
- Firefox - 47; 50; 51 (Tested & Working)  
- IE - 11 (Tested & Working)  
- Edge - 14 (Tested & Working)  
- Others (Not Tested Yet)  
