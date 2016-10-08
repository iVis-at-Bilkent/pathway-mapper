# PathwayMapper

A web based pathway curation tool for interactive creation, editing, sharing cancer pathways. The tool provides collaborative creation of pathways using Google Real Time API. 

## Software

Used technologies: Cytoscape.js, Node.js, Backbone.js. 

A sample deployment can be found [here](http://tcga.patika.org).

To run the clone of the project in your computer, run 'sudo npm run-debug build', this launches the application on port 80 if it is not in use.

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

### Aligning Nodes

Alignment guidelines help us align nodes manually in a vertical or horizontal manner. Alternatively, one may select two or more nodes and align using View > Align Selected menu item. Alignment is performed with respect to the firstly selected node.

Before alignment:
![alt text](https://github.com/iVis-at-Bilkent/pathway-mapper/tree/master/public/assets/align-before.png "Before vertical center alignment of four nodes with respect to the firstly selected gene KRAS")

After alignment:
![alt text](https://github.com/iVis-at-Bilkent/pathway-mapper/tree/master/public/assets/align-after.png "After alignment")

### Performing Automatic Layout

At any point, the user may want to rearrange the layout of the pathway. By default, automatic layout is performed incrementally, starting with the current positions of nodes. If you'd rather perform a static layout from scratch, you may check the Incremental option under Layout > Layout Properties.

Before layout:
![alt text](https://github.com/iVis-at-Bilkent/pathway-mapper/tree/master/public/assets/layout-before.png "A pathway randomly laid out")

After layout:
![alt text](https://github.com/iVis-at-Bilkent/pathway-mapper/tree/master/public/assets/layout-after.png "The same pathway after automatic layout")

### Exporting To / Importing From A Text File

The user may persist the current pathway onto the disk and import it back later on. Pathway content is organized as follows in the text file:

### Viewing Experiment Data

At any point during pathway editing, the user may upload and view a related experimental data set from a text file.

The experiment data files are organized as follows:

## Team

  * [Istemi Bahceci](https://github.com/istemi-bahceci), [Ugur Dogrusoz](https://github.com/ugurdogrusoz) of [i-Vis at Bilkent University](http://www.cs.bilkent.edu.tr/~ivis) and Jianjiong Gao, Nikolaus Schultz of [Nikolaus Schultz lab at MSKCC](https://www.mskcc.org/research-areas/labs/nikolaus-schultz).
