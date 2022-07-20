---
layout: publication
title: Leveraging Blur Information for Plenoptic Camera Calibration
authors: M. Labussière, C. Teulière, F. Bernardin, and O. Ait-Aider
publication: International Journal of Computer Vision (IJCV)
year: 2022
doi: 10.1007/s11263-022-01582-z
image: True
slides: True
type: article
project: plenoptic
idbib: Labussiere2022calib
codesource: https://github.com/comsee-research/libpleno
dataset: https://github.com/comsee-research/plenoptic-datasets
file: https://doi.org/10.1007/s11263-022-01582-z
collection: publications
permalink: /publication/2022-05-04-journ-ijcv
date: 2022-05-04
---

<img class="publication-teaser" width="100%" src="/images/publications/overview-ijcv_feature.png" alt="project teaser"/>

### Abstract
 
This paper presents a novel calibration algorithm for plenoptic cameras, especially the multi-focus configuration, where several types of micro-lenses are used, using raw images only. Current calibration methods rely on simplified projection models, use features from reconstructed images, or require separated calibrations for each type of micro-lens. In the multi-focus configuration, the same part of a scene will demonstrate different amounts of blur according to the micro-lens focal length. Usually, only micro-images with the smallest amount of blur are used. In order to exploit all available data, we propose to explicitly model the defocus blur in a new camera model with the help of our newly introduced Blur Aware Plenoptic (BAP) feature. 

<center><img class="publication-image" width="50%" src="/images/publications/setup-ijcv_feature.png" alt="project image"/>
<div> The {Raytrix R12} multi-focus plenoptic camera used in our experimental setup (a), along with a raw image of a checkerboard calibration target (b). The image is composed of several micro-images with different amounts of blur, arranged in a hexagonal grid. In each micro-image, our BAP feature is illustrated by its center and its blur circle (c).<br>
</div>
</center>

<p>
<br>First, it is used in a pre-calibration step that retrieves initial camera parameters, and second, to express a new cost function to be minimized in our single optimization process. Third, it is exploited to calibrate the relative blur between micro-images. It links the geometric blur, i.e., the blur circle, to the physical blur, i.e., the point spread function. Finally, we use the resulting blur profile to characterize the camera's depth of field. Quantitative evaluations in controlled environment on real-world data demonstrate the effectiveness of our calibrations.
</p>

{% if page.codesource != "" %} 
### Source code and Datasets

The code source associated to this publication has been made open source and is publicly available <a href="{{ page.codesource }}">here</a>, for reproducibility and broad accessibility.

{% if page.dataset != nil %}
All datasets acquired or used for this publication can be accessed and downloaded <a href="{{ page.dataset }}">here</a>!
{% endif %}

{% endif %}

### Citation 
```
@article{Labussiere2022calib,
	title 	= {Leveraging Blur Information for Plenoptic Camera Calibration},
	author 	= {Labussi{\`{e}}re, Mathieu and Teuli{\`{e}}re, C{\'{e}}line and Bernardin, Fr{\'{e}}d{\'{e}}ric and Ait-Aider, Omar},
	journal = {International Journal of Computer Vision},
	year 	= {2022},
	doi 	= {10.1007/s11263-022-01582-z},
	isbn 	= {1126302201},
	issn 	= {0920-5691},
	keywords = {Blur circle,Calibration,Multi-focus,Plenoptic camera,Relative blur},
	month 	= {may},
	number 	= {2012},
	publisher = {Springer US},
	url 	= {https://doi.org/10.1007/s11263-022-01582-z}
}
```

