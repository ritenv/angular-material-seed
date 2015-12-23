(function(){

  angular
       .module('menu')
       .controller('MenuController', [
          'menuService', '$timeout', '$mdInkRipple', '$log', '$q',
          MenuController
       ]);

  /**
   * Menu Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function MenuController( menuService, $timeout, $mdInkRipple, $log, $q) {
    var self = this;

    self.menuItems        = [ ];
    self.setActiveMenu  = setActiveMenu;

    // Load all menu items

    menuService
          .loadMenu()
          .then( function( menuItems ) {
            self.menuItems    = [].concat(menuItems);

            $mdInkRipple.attach(self, angular.element(document.getElementById('header-toolbar')), {
              center: false,
              dimBackground: false
            });

            setActiveMenu(menuItems[0]);
          });

    // *********************************
    // Internal methods
    // *********************************

    function setActiveMenu(menuItem, colorHex) {
      self.selected = menuItem;
      self.headerColor = menuItem.colorHex;
    }
  }

})();
