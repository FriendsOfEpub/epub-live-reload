# epub-live-reload

The goal of this project is to bring live reload (or even hot reload) to the ebook world. 

## Exemple ##
![live exemple](http://cdn.makeagif.com/media/2-29-2016/2aHEZq.gif)

## Installation ##
`git clone git@github.com:FriendsOfEpub/epub-live-reload.git .`

` cd epub-live-reload`

`npm install`

## Usage ##
1/ Put your unzipped epub files in the epub folder

2/ `gulp init` : Inject the lib in the files by running `gulp init` (this task will add the needed JS files in all your xhtml documents) 

3/ Once this operation is completed, you can :

 - link your folder to the Readium Book Shelf for instance
 
 - Repackage your new files to an epub
 
4/ `gulp serve` : Will do all the work ;)

5/ Open your epub with Readium or iBooks, edit the files, save and enjoy 

## Supported Reading Systems  ##
|Reading System            |  Version 
|-------------------|------------------:
|Readium Viewer JS  |             0.23.0-alpha 
|iBooks OS X          |          1.4

## TODO ##

 - Add support for css changes 
 - Remove hard coded path
 - Add remote support (wifi on the same network)
 - Find a way to get readium files path
 - Use Reading System Object
 - Remove gulp dependency 
 - Rebuild epub3 after change
 - Add build task to remove the lib

