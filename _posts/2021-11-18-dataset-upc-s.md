---
title: 'Dataset UPC-S'
date: 2021-11-18
permalink: /posts/2021/11/dataset-upc-s/
project_groupe: Plenoptic Cameras
tags:
  - plenoptic
  - datasets
---

Simulated dataset for Lytro-like plenoptic camera configuration, i.e., unfocused plenoptic camera (UPC), associated to our IJCV'2022 paper! _See <https://github.com/comsee-research/plenoptic-datasets>_ 

---
![banner-logo](/images/publications/banner-plenoptic.png)


Details
===============

### Download link

The dataset can be downloaded [here](https://plenoptic.ip.uca.fr/UPC-S.tar.gz).

### Experimental setup

We used the _Lytro Illum_ intrinsic parameters reported in Table 4 of Bok et al. (2017) as baseline for the simulation, corresponding to a main lens of aperture `F/2` with a `9.9845 mm` focal length.
The camera is in unfocused _internal_ configuration (i.e., `f = d`).
The MLA organization is hexagonal row-aligned, and composed of `541 x 434` (width x height) micro-lenses of the same type (`I = 1`).
The raw image resolution is `7728 x 5368` pixel, with a pixel size of `s = 0.0014 mm` and with micro-image of radius `7.172` pixel. 

### Dataset

The dataset is correspond to the focus distance configuration `h = hyperfocal`.

The dataset is composed of:

- white raw plenoptic images simulated at different apertures (`N in {2, 4, 5.6}`) for pre-calibration step,
- free-hand calibration targets simulated at various poses (in distance and orientation), separated into two subsets, one for the calibration process and the other for reprojection error evaluation,
- and calibration targets with known translation along the z-axis for quantitative evaluation.

We use a `9 x 5` of `26.25 mm` side checkerboard.

### Software and setup

All images has been generated using the [libpleno] and our raytracing simulator [PRISM].


Applications
============

For instance, the datasets can be used with the following applications :
 * [COMPOTE] (Calibration Of Multi-focus PlenOpTic camEra), a collection of tools to pre-calibrate and calibrate (multifocus) plenoptic cameras.
 * [PRISM] (Plenoptic Raw Image Simulator), a collection of tools to generate and simulate raw images from (multifocus) plenoptic cameras.
 * [BLADE] (BLur Aware Depth Estimation with a plenoptic camera), a collection of tools to estimate depth map from raw images obtained by (multifocus) plenoptic cameras.

Based on the [libpleno], an open-source C++ computer-vision library for plenoptic cameras modeling and processing.


Citing
======

If you use our datasets, the [libpleno], the [COMPOTE] tools, the [PRISM] tools or the [BLADE] tools in an academic context, please cite the following publication:

	@inproceedings{labussiere2020blur,
	  title 	=	{Blur Aware Calibration of Multi-Focus Plenoptic Camera},
	  author	=	{Labussi{\`e}re, Mathieu and Teuli{\`e}re, C{\'e}line and Bernardin, Fr{\'e}d{\'e}ric and Ait-Aider, Omar},
	  booktitle	=	{Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
	  pages		=	{2545--2554},
	  year		=	{2020}
	
or 

	@article{labussiere2022calibration
	  title		=	{Leveraging blur information for plenoptic camera calibration},
	  author	=	{Labussi{\`{e}}re, Mathieu and Teuli{\`{e}}re, C{\'{e}}line and Bernardin, Fr{\'{e}}d{\'{e}}ric and Ait-Aider, Omar},
	  doi		=	{10.1007/s11263-022-01582-z},
	  journal	=	{International Journal of Computer Vision},
	  year		=	{2022},
	  month		=	{may},
	  number	=	{2012},
	  pages		=	{1--23}
	}


License
=======

This work is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/). Enjoy!

**Note**: _if download links are broken, don't hesitate to contact me!_

[Ubuntu]: http://www.ubuntu.com
[CMake]: http://www.cmake.org
[CMake documentation]: http://www.cmake.org/cmake/help/cmake2.6docs.html
[git]: http://git-scm.com
[Eigen]: http://eigen.tuxfamily.org
[libv]: http://gitlab.ip.uca.fr/libv/libv
[lma]: http://gitlab.ip.uca.fr/libv/lma
[OpenCV]: https://opencv.org/
[Doxygen]: http://www.stack.nl/~dimitri/doxygen/
[boost]: http://www.boost.org/
[libpleno]: https://github.com/comsee-research/libpleno
[COMPOTE]: https://github.com/comsee-research/compote
[BLADE]: https://github.com/comsee-research/blade
[PRISM]: https://github.com/comsee-research/prism

