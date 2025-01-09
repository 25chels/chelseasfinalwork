import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Chelsea's midterm</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <style>
    body {
      background-color: white;
      color: black;
      font-family: Arial, sans-serif;
    }
    a{
      color: black;
      text-decoration:none
    }
    .newsletter-container {
      text-align: center;
      padding: 20px;
    }

    .newsletter-container h6 {
      font-size: 1rem;
      text-transform: uppercase;
      color: black;
      margin-bottom: 5px;
    }

    .line {
      border-top: 1px solid black;
      margin: 10px auto;
      width: 100%;
    }

    .subscribe-button {
      background: none;
      border: 1px solid black;
      color: black;
      padding: 6px 60px;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
      margin-top: 5px;
    }

    .subscribe-button:hover {
      background-color: royalblue;
      color: #111;
    }

    .icon-container {
      margin-top: 22px;
    }

    .icon-container img {
      width: 24px;
      height: 24px;
      margin: 0 5px;
      cursor: pointer;
    }
    .text-justify{
      text-align: justify;
    }
      @media (max-width: 768px) {
        .navbar-toggler-icon img {
          width: 24px;
          height: 24px;
        }

        .subscribe-button {
          padding: 6px 30px;
          width: 80%;
        }

        .line {
          width: 90%;
        }

        .icon-container img {
          width: 20px;
          height: 20px;
        }
      }

      @media (max-width: 576px) {
        .cen {
          padding-top: 30px;
        }

        h1, h2, h3 {
          font-size: 1.5rem;
        }
  </style>
</head>
<body>

  <div class="container-fluid">
    <!-- 搜索欄/漢堡 -->
    <div class="col pt-2">
      <form class="d-flex justify-content-sm-end me-3" role="search">
        <input class="form-control-sm" type="search" placeholder="Search" aria-label="Search">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mb-2 ms-2">
            <img src="list.svg" style="width:30px;height: 30px;background-color:;">
          </span>
        </button>
      </form>
    </div>

    <!-- Navbar 和主視覺-->
    <div class="row">
      <!-- 頁面導航欄 -->
      <div class="row p-3">
        <nav class="nav m-2">
          <a class="nav-link me-5" href="index.html" style="color: black;" title="home">HOME</a>
          <a class="nav-link me-5" href="gallery.html" style="color: black;" title="gallery">GALLERY</a>
          <a class="nav-link me-5" href="bolg.html" style="color: black;" title="bolg">BLOG</a>
          <a class="nav-link me-5" href="pages.html" style="color: black;" title="pages">PAGES</a>
          <a class="nav-link me-5" href="about.html" style="color: black;" title="about">ABOUT</a>
          <a class="nav-link" href="contact.html" style="color: black;" title="contact">CONTACT</a>
        </nav>
      </div>

      <!-- 主內容區塊 -->
      <div class="row pt-">
        <!-- Carousel 區域 -->
        <div class="col-md-9">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://cdn.shopify.com/s/files/1/0369/6522/0411/files/a16fd418-b113-4a17-890b-ed277c0197f8_600x600.jpg?v=1698914599" class="d-block w-100" alt="van gogh art">
              </div>
              <div class="carousel-item">
                <img src="https://www.theartist.me/wp-content/uploads/2021/05/the-scream-by-edvard-munch-a-critical-analysis.jpg" class="d-block w-100" alt="van gogh art">
              </div>
              <div class="carousel-item">
                <img src="https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/144F8/production/_101629138_p067kn4m.jpg" alt="van gogh art">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <!-- 右側 CHELSEA 區域和訂閱欄 -->
        <div class="col d-flex flex-column justify-content-between">
          <!-- CHELSEA 標題區 -->
          <div class="row mt-5 d-flex justify-content-center text-center">
            <div class="col mt-5">
              <h1>CHELSEA's</h1>
              <p>midterm work</p>
            </div>
          </div>

          <!-- 訂閱 Newsletter 區 -->
          <div class="newsletter-container">
            <div class="d-flex align-items-center justify-content-between">
              <h6 class="newsletter-title mt-4" style="font-size: 9px;">Join Our Newsletter</h6>
              <div class="icon-container d-flex ms-3">
                <img src="cloud-drizzle-fill.svg" alt="Star Icon" style="width:16px; height: 16px;">
                <img src="earbuds.svg" alt="Email Icon" style="width:16px; height: 16px;">
                <img src="globe-asia-australia.svg" alt="Globe Icon" style="width:16px; height: 16px;">
              </div>
            </div>
            <div class="line" style="width: 285px;"></div>
            <button class="subscribe-button">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--下半部網頁-->
  <div class="container-fluid pt-5 px-5 me-2 ms-2 ">
    <div class="row pt-4 ms-2"> 
      <h5>PRONE TO WANDER</h5>
    </div>
    <div class="row ms-2">
<!--文字區塊-->
      <div class="col mt-3 me-5">
        <div class="row me-1">
          <p class="text-justify">As an artist deeply immersed in the realm of modern art, I believe that the integration of technology has opened up a new dimension of creative possibilities. Technology isn’t merely a tool for creating; it’s a medium that reshapes how we conceive and interact with art. The digital world allows artists to push beyond traditional boundaries, making art more accessible, interactive, and immersive.</p>

          <p class="text-justify">For me, technology bridges the gap between the artist and the audience. It allows for real-time feedback, interaction, and even collaboration, creating a dynamic experience that was unimaginable a few decades ago. With tools like virtual reality, augmented reality, and AI, we can now craft environments where the viewer is not just an observer but an active participant. This shift redefines the role of the artist—not only as a creator but as a facilitator of experiences.</p>

          <p class="text-justify">Yet, there’s a balance to be struck. While technology enhances the reach and depth of art, it must not overshadow the essence of creativity and emotional expression. At the core, art is about connection, and while technology offers new forms of expression, it’s crucial to ensure that the message resonates beyond the medium itself.</p>

          <p class="text-justify">Technology isn’t merely a tool for creating; it’s a medium that reshapes how we conceive and interact with art. The digital world allows artists to push beyond traditional boundaries, making art more accessible, interactive, and immersive.</p>

          <p class="text-justify"> we can now craft environments where the viewer is not just an observer but an active participant. This shift redefines the role of the artist—not only as a creator but as a facilitator of experiences.</p>
        </div>
      </div>
  <!--圖片區塊-->
      <div class="col mt-3 me-4">
        <div class="row">
          <div class="col">
            <img src="https://images.theconversation.com/files/503848/original/file-20230110-12-4zs8j8.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip" alt="vangogh painting" style="width:290px;height: 290px;">
          </div>
          <div class="col">
            <img src="https://s.ciekawostkihistoryczne.pl/uploads/2022/11/Vincent_van_Gogh_-_Self_Portrait_with_Bandaged_Ear_and_Pipe-544x600.jpg" alt="vangogh painting" style="width:290px;height: 290px;">
          </div>
        </div>
        <div class="row mt-4 pt-2">
          <div class="col">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMtEHID4AY2DxlT3FqHJhnvtG8A1zxso8Og&s" alt="vangogh painting" style="width:290px;height: 290px;">
          </div>
          <div class="col">
            <img src="https://boszart.eu/wp-content/uploads/2017/04/2272-Vincent-Van-Gogh-Autoportret-w-slomkowym-kapeluszu-1887-600x733.jpg" alt="vangogh painting" style="width:290px;height: 290px;">
          </div>
        </div>
      </div>
    </div>
  </div>
<!--/第二個container-->
  <!-- Divider Line -->
      <div class="container-fluid d-flex justify-content-center mt-5">
      <h3>·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</h3>
    </div>
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="newsletter-container my-5">
            <h5 class="newsletter-title" style="color:black;">JOIN OUR NEWSLETTER</h5>
            <div class="d-flex justify-content-center icon-container">
              <img src="cloud-drizzle-fill.svg" alt="Icon 1">
              <img src="earbuds.svg" alt="Icon 2">
              <img src="globe-asia-australia.svg" alt="Icon 3">
            </div>
            <div class="line"></div>
            <button class="subscribe-button w-100 mt-3">Subscribe Now</button>
          </div>
        </div>

        <div class="col-md-6 my-5 ps-5">
          <div class="row text-justify ">
            <div class="col-6 col-sm-4">
              <p><a href="index.html" title="home page">HOME</a></p>
              <p><a href="gallery.html" title="gallery page">GALLERY</a></p>
              <p><a href="pages.html" title="pages page">PAGES</a></p>
              <p><a href="bolg.html" title="bolg page">BLOG</a></p>
            </div>
            <div class="col-6 col-sm-4">
              <p>ABOUT</p>
              <p>CONTACT</p>
            </div>
            <div class="col-6 col-sm-4">
              <p><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.facebook.com/%3Flocale%3Dzh_TW&ved=2ahUKEwiojNL0ytmJAxWxVPUHHTFeAsEQFnoECAwQAQ&usg=AOvVaw19HXlIbLzcmRznPdWtRnyE" target="_blank" title="facebook">FACEBOOK</a></p>
              <p><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://twitter.com/&ved=2ahUKEwicip66y9mJAxU1bvUHHavjBPoQFnoECAoQAQ&usg=AOvVaw3E5t7KtgJXt9Dhl_7jOHAI" target="_blank" title="twitter">TWITTER</a></p>
              <p><a href="https://www.instagram.com" target="_blank" title="instagram">INSTAGRAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>