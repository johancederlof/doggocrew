$("head").append(
  '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">'
);
setTimeout(function () {
  $("head").append(`
    <style>
        #cookies {
            background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
        }
        
        #cookies .cookie-locations {
            color: white;
        }
        
        #cookies .cookie-locations .lat,
        #cookies .cookie-locations .lng{
            font-weight: 600;
        }
        
        #cookies .cta {
            margin-top: 0;
            margin-left: 3rem;
        }
        
        #cookies .cookie-text{
            color: white;
            font-size: 18px;
        }
        
        #cookies .learn-more {
            text-decoration: none;
            margin-top: 8px
        }
        
        #cookies .learn-more:hover {
            text-decoration: none;
            color: blue;
            margin-top: 8px
        }
    </style>
  `);

  $("body").prepend(`
<section id="cookies">
<div class="d-flex justify-content-center container">
  <div class="row">
      <div class="d-flex flex-row justify-content-between align-items-center p-3">
          <div class="d-flex flex-row align-items-center cookie-text">
              <div class="ml-2 mr-2">
                <p class="cookie-locations">Your location requires us to ask about cookies!
                  <span class="lng"></span>
                  <span class="lat"></span>
                </p>
                <span>We use cookeis to make this site woff. Do you want one?<br></span></div>
              <button id="cookiesokay" class="cta" type="button">Okay</button></div>
          </div>
    </div>
</div>
</section>`);

  $("#cookiesokay").click(() => {
    $("#cookies").css("display", "none");
  });
}, 2000);
