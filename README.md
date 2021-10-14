# newsifier-resizer-image-func

# Installation

$ npm install newsifier-image-url-generator

# Usage


```const {  Resizer } = require('newsifier-image-url-generator');``` 

```let resizer = new Resizer("imgproxy","https://r.testifier.nl");``` 

```resizer.resize( "https://s3-newsifier.ams3.digitaloceanspaces.com/androidworld.newsifier.com/images/2020-10/DKoidc0T3T1KvYC2stChcX9zwmjKj1pgmg3hXzGBDQXM8RG_7JjgiuS0CLOh8DUa7asw512_k5KzyAq-5f9b228de7c68" , {"w":500,"h":200,"watermark":"Pro text"} );```

* `resize`  takes 2 params as the following
    * image_url : the origin url of the image - required.
    * render_options : object contains the rendering options - optional.
        * w : width - optional
        * h : height - optional
        * watermark : watermark text - optional


