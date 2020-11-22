---
path: update-dependencies
date: 2020-11-22T19:30:49.713Z
title: Dependencies updates on lottes.dev
description: Struggeling with dependencies
---
### Dependencies updates

I tried to update my site dependencies and struggeld with some gatsby.

First i update Gatsby and React to the latesed version. So far so good... No problems from here.

But here comes the first issues: `netlify-cms` has many unmet peer dependencies. This is not a issue for the build but it fills the logs und doesn't help do debug.

But the hardesed issue was `gatsby-plugin-prefetch-google-fonts`. At the moment a build with these dependencie is noch possible. `Error: ENOENT: no such file or directory, stat '.cache/google-fonts//fonts'`

Way to solve it: remove the dependencies and switched functionality to 
> gatsby-plugin-webfonts