var fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          transform: [
            ['reactify'],
            ['babelify', {presets: ['es2015']}]
          ],
          browserifyOptions: {
            // debug: true,
            standalone: 'easyui-jsx'
          }
        },
        src: ['./index.js'],
        dest: 'dist/easyui-jsx.js'
      }
    },
    bumpup: {
      file: 'package.json'
    },
    shell: {
      git: {
        command: [
          'git add . --all',
          'git commit -m "' + grunt.option('git_commit_message') + '"',
          'git push'
        ].join('&&')
      },
      npm: {
        command: [
          // 'npm install easyui@latest --save'
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
        './lib/**/*.js',
        './docs/app.js',
        './index.js'
      ],
      tasks: 'browserify'
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['shell:npm', 'copy', 'browserify']);
  grunt.registerTask('w', ['shell:npm', 'copy', 'browserify', 'watch']);
  grunt.registerTask('g', function() {
    var bumpup_type = grunt.option('bumpup_type') || 'patch';

    grunt.task.run('shell:npm');
    grunt.task.run('copy');
    grunt.task.run('browserify');
    grunt.task.run('bumpup:' + bumpup_type);
    grunt.task.run('shell:git')
  });
};


