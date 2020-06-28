---
path: react-best-practice
date: 2020-06-28T19:19:49.713Z
title: Refactoring to best practise
description: Updated the gatsby lottes starter theme with best practice file structure
---
### Refactoring pull request

Today i updated the file-structure of my starter theme gatsby-lottes-starter.

In the new structure you will find in the `src/components` folder a `layout` folder including `footer`, `header` and base `layout` files. Every component now get his own subfolder with the component name and a scss file with the name style.

For example:

> old:\
> src/components/element/testimonials/testimonials.js\
> src/components/element/testimonials/testimonials.scss
>
> new:\
> src/components/testimonials/index.js\
> src/components/testimonials/style.scss

Therefore is need to update all pages to the new structure.

> import Testimonials from "../components/testimonials/"

I think this is a more readable format for the components.