# Watermelon

A minimalistic [Hexo](http://hexo.io) theme for personal academic websites. Features a two-column layout and monospace fonts.

[Demo](https://shengchen.design)

![screenshot](https://user-images.githubusercontent.com/2175271/137625287-24a4ac77-fbc9-4c99-a4cd-90455d93d13c.png)

## Summary

- [General](#general)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Configuration](#configuration)
- [License](#license)

## General

- **Version** : 1.0
- **Compatibility** : Hexo 3 or later

## Features

- Fully responsive
- Multiple color schemes
- Multiple types of posts (blog posts, projects, publications, etc.)
- Simplicity

## Prerequisites

1. In order to use this theme you must have installed [hexo](https://hexo.io/docs/).

2. Create the `root` directory for the blog by initializing it with hexo:

    ```sh
    $ hexo init my-blog
    ```

3. Navigate into the new directory:

    ```sh
    $ cd my-blog
    ```

## Install

1. In the `root` directory:

    ```sh
    $ git clone https://github.com/shaunabanana/hexo-theme-watermelon.git themes/watermelon
    $ mv themes/watermelon/scaffolds/* ./scaffolds/
    ```

2. Change the `theme` property in the `_config.yml` file.

    ```yml
    # theme: landscape
    theme: watermelon
    ```
   
   See below for more information on how to customize this theme.

3. Create pages and articles with the `hexo new [layout] <title>` command.
   For example, to create a new blog post, run:
   
    ```sh
    $ hexo new blog "My post title"
    ```
   
   and add some interesting content in `source/_posts/hello-world.md`.

   For other things, you can use the following commands:

    ```sh
    $ hexo new paper "My paper title"
    $ hexo new project "Name of the project"
    $ hexo new news "My post title"
    ```


4. Run: `hexo generate` and `hexo server`

5. [Publish your blog](https://hexo.io/docs/one-command-deployment.html)!

## License

MIT