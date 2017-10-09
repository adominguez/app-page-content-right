(function () {
  'use strict';
  Polymer({

    is: 'app-page-content-right',

    properties: {
      githubAccount: {
        type: String,
        value: 'adominguez'
      },
      componentName: {
        type: String,
        observer: '_setComponentName'
      },
      bowerUrl: {
        type: String
      }
    },
    _setComponentName: function() {
      this.bowerUrl = this.githubAccount + '/' + this.componentName
    }
  });
}());
