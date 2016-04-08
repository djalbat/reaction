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
        }]
      }
    },
    browserify: {
      dist: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: 'reaction'
          }
        },
        src: ['./index.js'],
        dest: 'dist/reaction.js'
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
      npm: {
        command: [
          'npm install easyui@latest --save'
        ].join('&&')
      }
    },
    copy: {
      main: {
        files: [
          {src: './node_modules/easyui/dist/easyui.js', dest: './docs/lib/easyui.js'}
        ]
      }
    },
    watch: {
      files: [
        './libES2015/**/*.js',
        './index.js'
      ],
      tasks: ['babel', 'browserify']
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);

  grunt.registerTask('b', ['shell:npm', 'copy', 'babel', 'browserify']);
  grunt.registerTask('w', ['shell:npm', 'copy', 'babel', 'browserify', 'watch']);
  grunt.registerTask('g', function() {
    var type = grunt.option('type') || 'patch';

    grunt.task.run('shell:npm');
    grunt.task.run('copy');
    grunt.task.run('babel');
    grunt.task.run('browserify');
    grunt.task.run('bumpup:' + type);
    grunt.task.run('shell:git');
  });
};
