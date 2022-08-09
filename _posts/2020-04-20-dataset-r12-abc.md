---
title: 'Datasets R12-A, B, C'
date: 2020-04-20
permalink: /posts/2020/04/datasets-r12-abc/
project_groupe: Plenoptic Cameras
tags:
  - plenoptic
  - datasets
---

Datasets for calibration of multi-focus plenoptic camera associated to our CVPR'20 paper! _See <https://github.com/comsee-research/plenoptic-datasets>_!

---
![banner-logo](/images/publications/banner-plenoptic.png)


Details
===============

### Download link

The datasets can be downloaded [here](https://plenoptic.ip.uca.fr/R12-ABC.tar.gz).

### Experimental setup

For all experiments we used a _Raytrix R12_ color 3D-light-field-camera, with a _MLA_ of F/2.4 aperture.
The camera is in Galilean _internal_ configuration.
The mounted lens is a _Nikon AF Nikkor F/1.8D_ with a `50 mm` focal length.
The _MLA_ organization is hexagonal row-aligned, and composed of `176 x 152` (width x height) micro-lenses with `I = 3` different types.
The sensor is a _Basler beA4000-62KC_ with a pixel size of `s = 0.0055 mm`.
The raw image resolution is `4080 x 3068`.

### Datasets

We introduce three new datasets for three different focus distance configurations `h`, namely :

- **R12-A** for `h = 450 mm`,
- **R12-B** for `h = 1000 mm`, 
- and **R12-C** for `h = inf`.

**Note** that when changing the focus setting, the main lens moves with respect to the block MLA-sensor.

Each dataset is composed of:

- white raw plenoptic images acquired at different apertures (`N in {4, 5.66, 8, 11.31, 16}`) using a light diffuser mounted on the main objective for pre-calibration step,
- free-hand calibration targets acquired at various poses (in distance and orientation), separated into two subsets, one for the calibration process (16 images) and the other for reprojection error evaluation (15 images),
- a white raw plenoptic image acquired in the same luminosity condition and with the same aperture as in the calibration targets acquisition for devignetting,
- and calibration targets acquired with a controlled translation motion for quantitative evaluation, along with the depth maps computed by the [Raytrix](https://raytrix.de/) software (_RxLive  v4.0.50.2_).

We use a `9 x 5` of `10 mm` side checkerboard for R12-A, 
a `8 x 5` of `20 mm` for R12-B,
and a `6 x 4` of `30 mm` for R12-C.

### Software

All images has been acquired using the free software _MultiCam Studio_ (v6.15.1.3573) of the company [Euresys](https://www.euresys.com/en/Homepage).
The shutter speed has been set to `5 ms`.
While taking white images for the pre-calibration step, the gain has been set to its maximum value.
For [Raytrix](https://raytrix.de/) data, we use their proprietary software _RxLive_ (v4.0.50.2) to calibrate the camera, and compute the depth maps used in the evaluation.

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

