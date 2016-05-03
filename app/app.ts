import {bootstrap} from "angular2/platform/browser";
import {Component, enableProdMode} from "angular2/core";
import {Navbar} from "./common/components/navbar";
import {Home} from "./home/components/home";
import {Services} from "./services/components/services";
import {ContactUs} from "./contactus/components/contact-us";
import {About} from "./about/components/about";

@Component({
    selector: 'app',
    directives: [Navbar, Home, Services, ContactUs, About],
    templateUrl: 'app.html'
})
class App{}

enableProdMode();
bootstrap(App);
