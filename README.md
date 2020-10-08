Based on Twenty by [HTML5Up](html5up.net). This site is built with [Jekyll](https://jekyllrb.com/).

## Getting started

To the site and run it on a local server:

1. Install [Jekyll](https://jekyllrb.com/docs/). 
2. Clone this repository:

   ```shell script
   git clone https://github.com/BCDigSchol/antiphoner-site.git
   ```
3. Start the site:

   ```shell script
   cd antiphoner-site
   jekyll serve
   ```

The site should now be available at https://localhost:4000.

## Deploying

Build a deployable version of the site with the jekyll `build` command:

```shell script
jekyll build
```

The deployable HTML and asset files will be in the *_site* directory. Upload this
directory to the public site.

## Layouts

The *_layouts* directory contains the layout templates Jekyll uses to build the site. There are two templates:

* *default.html* – The main template which builds a page, including the `<head>`, header, and footer with a space for content. Only the home page uses this template directly.
* *pages.html* – The above template, with an embedded article. Most pages use this template.


## Includes

The *_includes* directory contains bits of HTML useful for building pages.

## Content

Content pages are written in regular HTML and saved in the main directory (e.g *index.html*, *analysis.html*, etc). The HTML file begins with [front matter](https://jekyllrb.com/docs/frontmatter/) enclosed by three-dash lines that holds metadata about the content page. The rest of the file is the HTML snipped to be included in the layout's `{{ content }}` block.

### Example

```html

---
layout: page
title: Introduction
permalink: /introduction/
---

<div class="content">
<p>Here's some content!</p>
</div>
```

## Assets

Directories that do not start with an underscore (*css*, *js*, etc) are included in the output and hold asset files. Use site-relative links to connect to assets (e.g. `/img/cover-image.jpg`).


## Styling

HTML5Up uses [SASS](http://sass-lang.com/) to build its stylesheets. SASS is a CSS pre-processor designed to keep CSS files simpler and more editable. The SASS files are denoted by the *.scss* extension.

Don't know SASS? Don't worry. All CSS is valid SASS, so you can add regular CSS to a SASS file without fear of breaking anything.

### File structure

#### The CSS directory

The *css* directory contains one SASS file, *main.scss*. This file loads the other SASS files needed to build the style from the *_sass* directory.

The easiest way to add new CSS or SASS is to append it to this file somewhere after the `@import` statements.

#### Style setting files

Some files in the *_sass* directory contain setting variables:

* *_colors.scss* contains background and foreground colors.
* *_sizes.scss* contains size values, including responsive breakpoints.
* *_var.scss* contains other setting variables (font settings, animation timings, etc).

Feel free to change these settings.

#### The build file

*_build.scss* contains the style rules HTML5Up set to create the page.

Try to avoid editing this file. You're better off overwriting the rules by adding new rules  the `main.scss` file.

#### Utility files

The *_sass/lib* directory contains utility SASS files:

* *_skel.scss* contains the base files for the [skel.io](http://skel.io/) responsive framework.
* *_mixins.scss* contains various utility functions.

It's not a good idea to mess with these files.