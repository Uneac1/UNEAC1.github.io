var posts=["2025/05/27/Pages/","2025/05/27/Test/","2025/05/27/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };