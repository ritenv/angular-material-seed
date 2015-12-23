(function(){
  'use strict';

  angular.module('menu')
         .service('menuService', ['$q', MenuService]);

  /**
   * Menu DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadMenu: Function}}
   * @constructor
   */
  function MenuService($q){
    var menuItems = [
      {
        title: 'About',
        href: '#',
        colorHex: '21909E'
      },
      {
        title: 'Schedule',
        href: '#',
        colorHex: 'A53434'
      },
      {
        title: 'Videos',
        href: '#',
        colorHex: '455A64'
      },
      {
        title: 'Onsite',
        href: '#',
        colorHex: '009688'
      },
      {
        title: 'Offsite',
        href: '#',
        colorHex: '455A64'
      }
    ];

    // Promise-based API
    return {
      loadMenu : function() {
        // Simulate async nature of real remote calls
        return $q.when(menuItems);
      }
    };
  }

})();
