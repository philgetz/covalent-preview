module.exports = {
  extends: ['tslint:recommended', 'tslint-sonarts', 'tslint-angular', 'tslint-config-prettier'],
  rules: {
    'array-type': [true, 'array'],
    'ban-types': {
      options: [
        ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
        ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
        ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
        ['String', 'Avoid using the `String` type. Did you mean `string`?'],
        ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?'],
      ],
    },
    'cognitive-complexity': false,
    'deprecation': false,
    'max-classes-per-file': false,
    'max-union-size': false,
    'member-ordering': {
      options: {
        order: [
          'private-static-field',
          'protected-static-field',
          'public-static-field',
          'private-instance-field',
          'protected-instance-field',
          'public-instance-field',
          'constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
        ],
      },
    },
    'no-angle-bracket-type-assertion': false,
    'no-any': false,
    'no-arg': true,
    'no-big-function': false,
    'no-bitwise': true,
    'no-collapsible-if': true,
    'no-conditional-assignment': true,
    'no-console': [
      true,
      'assert',
      'count',
      'debug',
      'dir',
      'dirxml',
      'error',
      'group',
      'groupCollapsed',
      'groupEnd',
      'info',
      'log',
      'profile',
      'profileEnd',
      'table',
      'time',
      'timeEnd',
      'timeStamp',
      'trace',
      'warn',
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-default-export': true,
    'no-duplicate-string': false,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-empty-interface': false,
    'no-eval': true,
    'no-floating-promises': false,
    'no-hardcoded-credentials': [true, 'password', 'secret', 'token'],
    'no-identical-functions': false,
    'no-inferrable-types': [false, 'ignore-params', 'ignore-properties'],
    'no-inputs-metadata-property': false,
    'no-internal-module': true,
    'no-invalid-this': true,
    'no-magic-numbers': false,
    'no-namespace': true,
    'no-non-null-assertion': true,
    'no-null-keyword': true,
    'no-require-imports': true,
    'only-arrow-functions': false,
    'ordered-imports': {
      options: {
        'import-sources-order': 'any',
        'module-source-path': 'full',
        'named-imports-order': 'any',
      },
    },
    'prefer-for-of': true,
    'switch-default': true,
    'typedef': [
      true,
      'call-signature',
      'parameter',
      'arrow-parameter',
      'property-declaration',
      'variable-declaration',
      'member-variable-declaration',
    ],
    'use-type-alias': false,
    'variable-name': {
      options: ['ban-keywords', 'check-format', 'allow-leading-underscore'],
    },
  },
};