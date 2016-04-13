var fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: "inline",
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      dist: {
        files: [{
          expand: true,
          cwd: './libES2015/',
          src: ['**/*.js'],
          dest: './lib/'
        }, {
          expand: true,
          cwd: './docs/libES2015/',
          src: ['**/*.js'],
          dest: './docs/lib/'
        }]
      }
    },
    browserify: {
      dist: {
        options: {
          browserifyOptions: {
            // debug: true,
            standalone: 'example'
          }
        },
        src: ['./docs/index.js'],
        dest: './docs/example.js'
      }
    },
    bumpup: {
      file: 'package.json'
    },
    shell: {
      git: {
        command: [
          'git add . --all',
          'git commit -m "' + grunt.option('commit_message') + '"',
          'git push'
        ].join('&&')
      },
      npmEasyUI: {
        command: [
          'npm install easyui@latest --save'
        ].join('&&')
      },
      npm: {
        command: [
          'npm install'
        ].join('&&')
      }
    },
    watch: {
      files: [
        './docs/libES2015/**/*.js',
        './libES2015/**/*.js',
        './docs/index.js',
        './index.js'
      ],
      tasks: ['babel', 'bumpup', 'shell:npm', 'browserify']
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['shell:npmEasyUI', 'babel', 'bumpup', 'shell:npm', 'browserify']);
  grunt.registerTask('w', ['shell:npmEasyUI', 'babel', 'bumpup', 'shell:npm', 'browserify', 'watch']);
  grunt.registerTask('g', function() {
    var type = grunt.option('type') || 'patch';

    grunt.task.run('shell:npm');
    grunt.task.run('babel');
    grunt.task.run('browserify');
    grunt.task.run('bumpup:' + type);
    grunt.task.run('shell:git');
  });
};
