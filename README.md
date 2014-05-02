# A [Yeoman](http://yeoman.io) Generator for Ignite UI

## What is Ignite UI?
![Ignite UI](http://igniteui.com/images/headerIcon.PNG "Ignite UI")
[Ignite UI](http://igniteui.com/) is an advanced HTML5+ toolset that helps you create stunning, modern Web apps. Building on jQuery and jQuery UI, it primarily consists of feature rich, high-performing UI controls/widgets such as all kinds of charts, data visualization maps, (hierarchical, editable) data grids, pivot grids, enhanced editors (combo box, masked editors, HTML editor, date picker, to name a few), flexible data source connectors, and a whole lot more.  Too many to list here--check out [the site](http://igniteui.com/) for more info and to [download](https://igniteui.com/download).

Ignite UI is not just another library created in someone's free time. It is commercial-ready, extremely well-tested, tuned for top performance, designed for good UX, and backed by a thriving 20+-year-old UI software company, [Infragistics](http://www.infragistics.com/).

## About this Generator
This is a very basic initial release, but the hope is you'll submit issues with what is important to you to add. Or hey, you know, this is open source, so feel free to submit pull requests with improvements, though you may want to discuss your ideas first in issues. :)

Because Ignite UI is a licensed product, we reference the public/free _trial_ release in the script references. You will want to replace that with your own licensed. I am trying to think of a good way to generate with licensed scripts. If you have ideas for that, please share.

### What You Get
As of today, all it will do is generate an HTML page in the current directory based on the Ignite UI boilerplate _with a chart and grid sample built in_. This is meant to quickly give you something to modify/build from, or you can just delete it.

This is not a project generator. Ignite UI is not an application framework; it can be used with the popular application frameworks, such as Angular, Ember, Backbone, etc. So I recommend using `yo <yourappframework>` first, then you can use `yo igniteui` to generate a page in your app that uses Ignite UI.

We could theoretically expand to let you pick a popular base framework first, but I'd like to see how important that is to people.


## Getting Started
To use, you have to first install [Yeoman](http://yeoman.io). I highly recommend this tool. You can use it to scaffold your apps and save yourself a lot of trouble.  If you don't have it installed yet, run:

```
$ npm install -g yo
```

### Installing the Ignite UI Generator

Just run:
```
$ npm install -g generator-igniteui
```

### Using the Ignite UI Generator
In the directory that you want to create your page, run: 
```
$ yo igniteui
```

Your new page should look something like this:
![What You Should See](http://raw.github.com/IgniteUI/generator-igniteui/master/what-you-should-see.png)

The generated code is decorated with comments to help you tweak it for your purposes.

That's it!  Hope it helps! 

### Suggestions/Issues
If you have suggestions, please [submit issues here](https://github.com/igniteui/generator-igniteui/issues).

