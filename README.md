# PathwayMapper

A web based pathway curation tool for interactive creation, editing, sharing cancer pathways. The tool provides collaborative creation of pathways using Google Real Time API. 

## Software

Used technologies: Cytoscape.js, Node.js, Backbone.js. 

A sample deployment can be found [here](http://tcga.patika.org).

To run the clone of the project in your computer, run
```
sudo npm run-debug build
```
this launches the application on port 80 if it is not in use.

PathwayMapper is distributed under [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.html).

### Adding Genes and Interactions

PathwayMapper allows creation of following node types:
- Gene
- Family: subset of genes grouped together under a parent compound node for analysis purposes
- Compartment: a cellular location for genes and interactions represented with a parent compound node
- Process

and following interaction types:
- Activates
- Inhibits
- Induces (transcriptional activation)
- Represses (transcriptional inhibition)
- Binds

To create a node, drag and drop it from the Node Palette. Similarly, to create an interaction, first select an interaction type from the Interaction Palette. Then, click on the green circle on top of the source node and drag it to the target node.

Below is a screenshot showing a sample pathway constructed with PathwayMapper:
<p align="center">
  <img src="public/assets/sample-pathway.png" width="400"/>
</p>

### Aligning Nodes

Alignment guidelines help us align nodes manually in a vertical or horizontal manner. Alternatively, one may select two or more nodes and align using View > Align Selected menu item. Alignment is performed with respect to the firstly selected node.

Before vertical center alignment of four nodes with respect to the firstly selected gene KRAS:
<p align="center">
  <img src="public/assets/align-before.png" width="400"/>
</p>

After alignment:
<p align="center">
  <img src="public/assets/align-after.png" width="400"/>
</p>

### Performing Automatic Layout

At any point, the user may want to rearrange the layout of the pathway. By default, automatic layout is performed incrementally, starting with the current positions of nodes. If you'd rather perform a static layout from scratch, you may check the Incremental option under Layout > Layout Properties.

A pathway randomly laid out:
<p align="center">
  <img src="public/assets/layout-before.png" width="400"/>
</p>

The same pathway after automatic layout:
<p align="center">
  <img src="public/assets/layout-after.png" width="400"/>
</p>

### Exporting To / Importing From A Text File

The user may persist the current pathway onto the disk and import it back later on. Pathway content is organized as follows in a tab-delimited text file:
```
--NODE_NAME	NODE_ID	NODE_TYPE	PARENT_ID	POSX	POSY--
PTEN	PTEN	GENE	-1	444	46	
PIK3CA	PIK3CA	GENE	-1	360	139	
...
--EDGE_ID	SOURCE	TARGET	EDGE_TYPE
PTEN-PIK3CA	PTEN	PIK3CA	INHIBITS
...
```

### Exporting As Image

The user may export the current pathway as an image in one of the following formats: JPG, PNG or SVG.

### Viewing Experiment Data

At any point during pathway editing, the user may upload and overlay an associated experimental data set from a text file.

The tab-delimited experiment data files are organized as follows, where after the gene name one or more data sets follow:
```
gene	lung	ovarian	breast
PTEN	-7	-20	10
PIK3CA	18	40	-50
...
```

Here positive value signify activation percentage and are shown with a white-red color scale, whereas negative values signify inactivation shown with a white-blue color scale. The experiment file may contain an arbitrary number of data sets, and its view can be customized through Alteration % > Data View Settings dialog.

Below is a screenshot showing sample experiment data overlaid on our sample data:
<p align="center">
  <img src="public/assets/sample-data.png" width="400"/>
</p>

## Team

  * [Istemi Bahceci](https://github.com/istemi-bahceci), [Ugur Dogrusoz](https://github.com/ugurdogrusoz) of [i-Vis at Bilkent University](http://www.cs.bilkent.edu.tr/~ivis) and Jianjiong Gao, Nikolaus Schultz of [Nikolaus Schultz lab at MSKCC](https://www.mskcc.org/research-areas/labs/nikolaus-schultz).
