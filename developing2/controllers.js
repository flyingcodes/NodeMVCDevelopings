var _mvc = require('mvc');

var controllers = {service: null};

class HomeController extends _mvc.Controller {
  indexAction(name, age, date){
	return this.content(name + ' of ' + (age * 10) + ' at ' + date + '. time: ' + new Date().toLocaleString());
  }
  errorAction(){
	  return this.novalue.nofunc();
  }
  showAction(name, age, date) {
	  return this.view({name, age, date});
  }
  viewAction(name, age, date) {
	  return this.view({name, age, date});
  }
}



controllers.homeController = HomeController;

_mvc.mapControllerRoute('/{controller}/{action}.html', {controller: 'home', action: 'index'});

_mvc.register(controllers);