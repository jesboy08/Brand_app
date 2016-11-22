"use strict";

class App{
	constructor(){
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createMovie(){
	}

	deleteMovie(key){		
	}

	updateMovie(key){
	}
}

class Component extends App{
	constructor(){
		super();
	}
	brandList(){
		this.render(`

			<!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">Nike</a></li>
  <li><a href="#!">Adidas</a></li>
   <li><a href="#!">Fubo</a></li>
    <li><a href="#!">Adidas</a></li>
  <li class="divider"></li>
  <li><a href="#!">Bench/</a></li>
</ul>
<nav>

  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">Sanina</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Brand</a></li>
      <li><a href="badges.html">Create</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-button" href="#!" data-activates="dropdown1">List<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
</br>
<nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" required>
          <label for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  </br>
  </br>
  </br>
  </br>
<hr> 	
    <div class="carousel">
    
    <a class="carousel-item" href="#two!"><img src="img/bench.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="img/nike.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/fubu.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="img/adidas.jpg"></a>
  </div>
  <hr> 
	<br/>
	<br/>
	<hr>  
 <div class="card">
 <div class="card small">
    <!-- Card Content -->
  
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="img/bench.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Bench<i class="material-icons right">more_vert</i></span>
      <p><a href="#">See More!</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Bench<i class="material-icons right">close</i></span>
      <p>Description</p>
      <div class="fixed-action-btn toolbar">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">mode_edit</i>
    </a>
    <ul>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">insert_chart</i></a></li>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">format_quote</i></a></li>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">publish</i></a></li>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">attach_file</i></a></li>
    </ul>
  </div>
    </div>
  </div>
  </div>
<a class="waves-effect waves-light btn">button</a>
<a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
<a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
   <footer class="page-footer" align="middle">
          <div class="container" >
            
                <h5 class="white-text" >Footer Content</h5>

              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              </div>
          </div>

        </footer>

    

			`,document.getElementById("app"));
	}
}

let component = new Component();
component.brandList();
// component.movieCreate();