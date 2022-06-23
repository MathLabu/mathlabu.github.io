---
layout: publication
title: Leveraging blur information in plenoptic cameras - Application to calibration and metric depth estimation
authors: Mathieu Labussière
publication: PhD Thesis, Université Clermont-Auvergne, Institut Pascal
year: 2022
image: True
slides: True
type: thesis
project: plenoptic
idbib: Labussiere2021thesis
file: https://tel.archives-ouvertes.fr/tel-03554252
collection: publications
permalink: /publication/2021-12-13-thesis-phd
date: 2021-12-13
---

Under the supervision of:
* [Omar Ait Aider](https://comsee.ispr-ip.fr/members/omar-ait-aider/) (McF HDR, UCA),
* [Frédéric Bernardin](https://www.cerema.fr/fr/innovation-recherche/recherche/equipes/membre/frederic-bernardin) (Chercheur, Cerema),
* [Céline Teulière](https://comsee.ispr-ip.fr/members/celine-teuliere/) (McF, UCA).

Publicly defended in front of the jury composed of:
* Pascal Vasseur (PU, UPJV)
* Christophe Cudel (PU, UHA)
* Cédric Demonceaux (PU, UBFC)
* Peter Sturm (DR, INRIA)
* Pauline Trouvé-Peloux (IR, ONERA)

**Funded by:** 
_Région AURA et l’Union Européenne (FEDER) à travers le projet MMII du CPER 2015-2020 Challenge MMaSyF._

## Abstract
 
<i><b>Leveraging blur information in plenoptic cameras: Application to calibration and metric depth estimation</b></i><br>

This thesis investigates the use of a vision sens or called a plenoptic camera for computer vision in robotics applications. 
To achieve this goal we place ourselves upstream of applications, and focus on its modelization to enable robust depth estimation. 
Plenoptic or light-field cameras are passive imaging systems able to capture both spatial and angular information about a scene in a single exposure. 
These systems are usually built upon a micro-lenses array (MLA) placed between a main lens and a sensor. 
Their design enables depth estimation from a single acquisition.
The key contributions of this work lie in answering the questions _"How can we link world space information to the image space information?"_ and more importantly, _"How can we link image space information to world space information?"_. 
We address the first problem through the prism of calibration, by proposing a new camera model and a methodology to retrieve the intrinsic parameters of this model. 
We leverage blur information where it was previously considered as a drawback by explicitly modeling the defocus blur. 
We address the second one as the problematic of depth estimation, by proposing a metric depth estimation framework working directly with raw plenoptic images.
It takes into account both correspondence and defocus cues.
Our model generalizes to various configurations, including the multi-focus plenoptic camera (both in Galilean and Keplerian configuration), as well as to the single-focusand unfocused plenoptic camera. 
Our method gives accurate and precise depth estimates (a median relative error ranging from 1.27% to 4.75% of the distance). 
It outperforms state-of-the-art methods. 
Having a new complete camera model and enabling robust metric depth estimationfrom raw images only, opens the door to many new applications. 
It is a first step towards practical use of plenoptic cameras in computer vision applications. 

## Résumé

<i><b>Exploitation de l'information de flou dans les caméras plénoptiques : Application à l'étalonnage et à l'estimation métrique de profondeur</b></i><br>

Cette thèse propose d'étudier l'utilisation d'un capteur de vision appelé caméra plénoptique pour de la vision par ordinateur dans des applications robotiques. Plus précisément, pour atteindre cet objectif, nous nous plaçons en amont du côté applicatif, et nous nous concentrons sur sa modélisation pour permettre une estimation de profondeur robuste. Les caméras plénoptiques ou à champ de lumière sont des systèmes d'imagerie passifs capables de capturer les informations spatiales et angulaires d'une scène en une seule exposition. Ces systèmes sont généralement constitués d'une matrice de micro-lentilles (MLA) placée entre un objectif principal et un capteur. Leur conception permet l'estimation de la profondeur à partir d'une seule acquisition. Les contributions clés de ce travail résident dans la réponse à la question _"Comment peut-on relier l'information de l'espace monde à celle de l'espace image?"_ et surtout, _"Comment peut-on relier l'information de l'espace image à celle de l'espace monde ?"_. Nous abordons la première par le prisme de l'étalonnage, en proposant un nouveau modèle de caméra et une méthodologie pour récupérer les paramètres intrinsèques de ce modèle. Nous exploitons l'information sur le flou de défocalisation là où il était auparavant considéré comme un inconvénient, en le modélisant explicitement. Nous abordons la deuxième problématique comme celle de l'estimation de profondeur, en proposant une méthode métrique d'estimation de profondeur fonctionnant directement avec des images brutes plénoptiques. Elle prend en compte à la fois les indices de correspondance et de défocalisation. Notre modèle se généralise à diverses configurations, y compris la caméra plénoptique multi-focales (en configuration galiléenne et keplérienne), ainsi qu'à la caméra plénoptique monofocale et non focalisée. Avec notre méthode, nous obtenons des estimations de profondeur répétables et exactes (de l'ordre de 1.27% à 4.75% de la distance à l'objet). Elle surpasse les résultats de l'état-de-l'art. Le fait de disposer d'un nouveau modèle complet de caméra et de permettre une estimation métrique robuste de la profondeur à partir d'images brutes uniquement ouvre la voie à de nombreuses nouvelles applications. Il s'agit d'un premier pas vers l'utilisation concrète de caméras plénoptiques dans les applications de vision par ordinateur.

### Citation 
```
@phdthesis{labussiere2021thesis
  TITLE 	= {Leveraging blur information in plenoptic cameras: Application to calibration and metric depth estimation},
  AUTHOR 	= {Labussi{\`e}re, Mathieu},
  URL 		= {https://hal.archives-ouvertes.fr/tel-03554252},
  SCHOOL 	= {Universit{\'e} Clermont Auvergne},
  YEAR 		= {2021},
  MONTH 	= Dec,
  KEYWORDS = {Plenoptic camera ; multi-focus ; calibration ; depth estimation ; relative defocus blur ; Cam{\'e}ra pl{\'e}noptique ; multi-focalis{\'e}e ; {\'e}talonnage ; estimation de profondeur ; flou relatif de d{\'e}focalisation},
  TYPE 		= {Theses},
  PDF 		= {https://hal.archives-ouvertes.fr/tel-03554252/file/LABUSSIERE_Mathieu_manuscrit.pdf},
  HAL_ID 	= {tel-03554252},
  HAL_VERSION = {v1},
}
```

