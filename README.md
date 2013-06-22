#html5stripped#
=============

## This is a stripped down version of html5boilerplate. ##

I removed some things that I thought we're unnecessary, and added some npm and grunt magic.

Idea is that you run the [webappgen](https://github.com/tommica/webappgen) that creates the scss folder.

Grunt does expect you to have [sass](http://sass-lang.com/) installed.



Of course you can just download this one and run:

    rm package.json gruntfile.js && mkdir scss && printf "* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; *behavior: url(boxsizing.htc); }\n" >> "scss/style.scss"
