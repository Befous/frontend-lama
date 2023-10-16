class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand home" href="https://befous.github.io/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link tombol" href="https://befous.github.io/gis1/">Tugas Minggu 1<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
              <a class="nav-link tombol" href="https://befous.github.io/gis2/">Tugas Minggu 2<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link tombol" href="https://befous.github.io/gis3/">Tugas Minggu 3<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link tombol" href="https://befous.github.io/gis4/">Tugas Minggu 4<span class="sr-only">(current)</span></a>
            </li>
        </ul>
        <input type="text" name="" id="myInput" placeholder="Search..."></input>
      </div>
    </nav>
    <br><br><br>
        `
    }
}

customElements.define(`my-header`, MyHeader)