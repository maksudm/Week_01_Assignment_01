const appElement = document.getElementById("app")


const renderNav = () => {
    appElement.innerHTML += `
    <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
    `
};

const rendercontent = () => {
    appElement.innerHTML += `
  <br>
  <div class="text-bg-primary p-3">Primary with contrasting color</div>,
  <div class="text-bg-secondary p-3">Secondary with contrasting color</div>,
  <div class="text-bg-success p-3">Success with contrasting color</div>,
  <div class="text-bg-danger p-3">Danger with contrasting color</div>,
  <div class="text-bg-warning p-3">Warning with contrasting color</div>,
  <div class="text-bg-info p-3">Info with contrasting color</div>,
  <div class="text-bg-light p-3">Light with contrasting color</div>,
  
  `
};

const renderFoter = () => {
    appElement.innerHTML += `
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top bg-dark">
  <p class="col-md-4 mb-0 text-white">© 2022 Company, Inc</p>
  <ul class="nav col-md-4 justify-content-end">
    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
  </ul>
</footer>

`
};

export {
    renderNav,
    rendercontent,
    renderFoter
};

