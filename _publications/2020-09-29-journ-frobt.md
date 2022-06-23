---
layout: publication
title: Geometry Preserving Sampling Method Based on Spectral Decomposition for Large-Scale Environments
authors: M. Labussière, J. Laconte and F. Pomerleau
publication: Frontiers in Robotics and AI
year: 2020
doi: 10.3389/frobt.2020.572054
image: True
slides: True
type: article
project: lidar
idbib: Labussiere2020spdf
codesource: https://github.com/ethz-asl/libpointmatcher
dataset: https://projects.asl.ethz.ch/datasets/doku.php?id=laserregistration:laserregistration
file: https://doi.org/10.3389/frobt.2020.572054
collection: publications
permalink: /publication/2020-09-29-journ-frobt
date: 2020-09-29
---

> See also the post on <a href="https://norlab.ulaval.ca/publications/map-compression/">Norlab</a>!

<img class="publication-teaser" width="100%" src="/images/publications/map-compression_feature.jpg" alt="project teaser"/>

### Abstract
 
In the context of 3D mapping, larger and larger point clouds are acquired with lidar sensors. Although pleasing to the eye, dense maps are not necessarily tailored for practical applications. For instance, in a surface inspection scenario, keeping geometric information such as the edges of objects is essential to detect cracks, whereas very dense areas of very little information such as the ground could hinder the main goal of the application. Several strategies exist to address this problem by reducing the number of points. However, they tend to underperform with non-uniform density, large sensor noise, spurious measurements, and large-scale point clouds, which is the case in mobile robotics. This paper presents a novel sampling algorithm based on spectral decomposition analysis to derive local density measures for each geometric primitive. The proposed method, called Spectral Decomposition Filter (SpDF), identifies and preserves geometric information along the topology of point clouds and is able to scale to large environments with a non-uniform density. Finally, qualitative and quantitative experiments verify the feasibility of our method and present a large-scale evaluation of SpDF with other seven point cloud sampling algorithms, in the context of the 3D registration problem using the Iterative Closest Point (ICP) algorithm on real-world datasets. Results show that a compression ratio up to 97 % can be achieved when accepting a registration error within the range accuracy of the sensor, here for large scale environments of less than 2 cm.

{% if page.codesource != "" %} 
### Source code and Datasets

The code source associated to this publication has been made open source and is publicly available <a href="{{ page.codesource }}">here</a>, for reproducibility and broad accessibility.

{% if page.dataset != nil %}
All datasets acquired or used for this publication can be accessed and downloaded <a href="{{ page.dataset }}">here</a>!
{% endif %}

{% endif %}

### Citation 
```
@article{Labussiere2020spdf,
	title 	= {Geometry Preserving Sampling Method Based on Spectral Decomposition for Large-Scale Environments},
	author 	= {Labussi{\`{e}}re, Mathieu and Laconte, Johann and Pomerleau, Fran{\c{c}}ois},
	journal = {Frontiers in Robotics and AI},
	year 	= {2020},
	doi 	= {10.3389/frobt.2020.572054},
	number 	= {September},
	pages 	= {1--15},
	volume 	= {7},
	keywords = {3d mapping,icp,iterative closest point,large-scale environments,lidar,registration,sampling,sampling, spectral decomposition, large-scale envi,spectral decomposition,tensor voting}
}
```




