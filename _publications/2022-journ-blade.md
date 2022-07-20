---
layout: publication
title: Blur aware depth estimation with a plenoptic camera
authors: M. Labussière, C. Teulière, F. Bernardin, and O. Ait-Aider
publication: submitted, revised and under review
year: 2022
image: True
slides: True
type: preprint
project: plenoptic
idbib: Labussiere2022depth
codesource: https://github.com/comsee-research/blade
dataset: https://github.com/comsee-research/plenoptic-datasets
collection: publications
permalink: /publication/2022-journ-blade
date: 2022-06-01
---

<img class="publication-teaser" width="100%" src="/images/publications/overview-blade_feature.png" alt="project teaser"/>

### Abstract

While a traditional camera only captures one point of view of a scene, a plenoptic or light-field camera, is able to capture spatial and angular information in a single snapshot, enabling depth estimation from a single acquisition.
In this paper, we present a new metric depth estimation algorithm using only raw images from a plenoptic camera.
The proposed approach is especially suited for the multi-focus configuration where several micro-lenses with different focal lengths are used.
The main goal of our blur aware depth estimation (BLADE) approach is to improve disparity estimation for defocus stereo images by integrating both correspondence and defocus cues.
We thus leverage blur information where it was previously considered as a drawback.
We explicitly derive the inverse of our projection model including the defocus blur.
We then propose to include a depth scaling step as well as a method to calibrate it to achieve precise and accurate depth estimates.
Our results show that introducing defocus cues improves the depth estimation.
We demonstrate the effectiveness of our framework and depth scaling calibration on relative depth estimation setup and on real-world 3D complex scenes with ground truths acquired with a 3D lidar scanner. 

### Setup

<center>
<img class="publication-image" width="60%" src="/images/publications/setup-blade_feature.png" alt="project image"/><br>
</center>

<br>For our experiments we used a _Raytrix R12_ color 3D-light-field-camera, with a MLA of F/2.4 aperture.
The camera is in Galilean internal configuration.
The mounted lens is a _Nikon AF Nikkor F/1.8D_ with a `50 mm` focal length.
The MLA organization is hexagonal row-aligned, and composed of `176 x 152` (width x height) micro-lenses with `I = 3` different types.
The sensor is a _Basler beA4000-62KC_ with a pixel size of `s = 0.0055 mm`.
The raw image resolution is `4080 x 3068 pixel`.

All images have been acquired using the _MultiCamStudio_ free software (v6.15.1.3573) of the [Euresys](https://www.euresys.com/en/Homepage) company.
We set the shutter speed to `5 ms`.

**3D scenes setup.** We use a 3D lidar scanner, a _Leica ScanStation P20 (LP20)_, that allows us to capture a color point cloud with high precision that can be used as ground truth data. 
The _LP20_ is configured with no HDR and with a resolution of 1.6 mm @ 10 m.


### Results

Snapshot view of the colored point cloud, along with the ground truth central sub-aperture depth map (CSAD) for each scene of the dataset _R12-ELP20_.
CSAD, mask and quality map representing the absolute difference (AD) error are illustrated for the coarse and refined variations of our framework. 
		
<center>
<img class="publication-image" width="100%" src="/images/publications/csai-blade.png" alt="project image"/><br>
</center>

<br>Finally, our results show that introducing defocus cue improves the depth estimation.
We demonstrated the effectiveness of our depth scaling calibration on relative depth estimation setup and on real-world 3D complex scenes with ground truths acquired with a 3D lidar scanner.
With our method, we obtained a median relative depth error ranging from 1.27 to 4.75 \% of the distance. 
In our experiments it corresponds to a median error of less than 19 mm, for distances ranging from 400 to 1500 mm.

{% if page.codesource != "" %} 
### Source code and Datasets

The code source associated to this publication has been made open source and is publicly available <a href="{{ page.codesource }}">here</a>, for reproducibility and broad accessibility.

{% if page.dataset != nil %}
All datasets acquired or used for this publication can be accessed and downloaded <a href="{{ page.dataset }}">here</a>!
{% endif %}

{% endif %}
