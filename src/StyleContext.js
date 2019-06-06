/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const StyleContextKey = Symbol.for('isomorphic-style-loader/StyleContext');

if (!global[StyleContextKey]) {
  global[StyleContextKey] = React.createContext({
    insertCss: null,
  });
}

export default global[StyleContextKey];
