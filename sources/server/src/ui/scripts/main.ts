/*
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * RequireJS configuration and angular bootstrapping
 *
 * All third-party JavaScript libraries should be referenced here,
 * other than RequireJS itself.
 */

/// <reference path="../../../typedefs/requirejs/require.d.ts" />
/// <reference path="../../../typedefs/angularjs/angular.d.ts" />


require.config({
  paths: {
    // TODO(bryantd): Update the requirejs typedefs to support a list of paths 
    // to enable fallback locations
    // TODO(bryantd): Add local fallbacks if no licensing issues
    angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min'
  },
  shim: {
    angular: {exports: 'angular'}
  }
});

require(['angular', 'app'], (angular) => {
  angular.bootstrap(document, ['app']);
});