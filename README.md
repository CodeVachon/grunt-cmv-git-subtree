# grunt-cmv-git-subtree

> A grunt task to work with git subtrees

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cmv-git-subtree --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cmv-git-subtree');
```

## The "cmv_git_subtree" task

### Overview
In your project's Gruntfile, add a section named `cmv_git_subtree` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    git_subtree_add: {
			subtree: {
				options: {
					source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
					branch: "master",
					target: "test-tree"
				}
			}
    },
		git_subtree_pull: {
			subtree: {
				options: {
					source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
					branch: "master",
					target: "test-tree"
				}
			}
		},
		git_subtree_push: {
			subtree: {
				options: {
					source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
					branch: "master",
					target: "test-tree"
				}
			}
		}
});
```

### Options

#### options.source
Type: `String`
Default value: ``

A string value that is used to represent the remote repository.

#### options.branch
Type: `String`
Default value: `master`

A string value that is used to represent the remote branch to pull from.

#### options.target
Type: `String`
Default value: ``

A string value that is used to represent the target local directory.

#### options.squash
Type: `Boolean`
Default value: `true`

A boolean value that is used to represent the option to squash the commits into one pull.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  git_subtree_add: {
    subtree: {
      options: {
        source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
        target: "test-tree"
      }
    }
  },
  git_subtree_pull: {
    subtree: {
      options: {
        source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
        target: "test-tree"
      }
    }
  },
  git_subtree_push: {
    subtree: {
      options: {
        source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
        target: "test-tree"
      }
    }
  }
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  git_subtree_add: {
    subtree: {
      options: {
        source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
        branch: "master",
        target: "test-tree"
      }
    }
  },
  git_subtree_pull: {
    subtree: {
      options: {
        source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
        branch: "master",
        target: "test-tree"
      }
    }
  },
  git_subtree_push: {
    subtree: {
      options: {
        source: "https://github.com/liaodrake/subtree-for-grunt-subtree-testing.git",
        branch: "master",
        target: "test-tree"
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
