/**
 * Created by istemi on 27.09.2016.
 */

export default class GraphUtilities {
    
    
    static createGraphHierarchy(nodes)
    {
        //Some arrays and maps for creating graph hierarchy
        var tree = [];
        var mappedArr = {};

        // First map the nodes of the array to an object -> create a hash table.
        for (var i = 0, len = nodes.length; i < len; i++)
        {
            var arrElem = nodes[i];
            mappedArr[arrElem.id()] = arrElem;
            mappedArr[arrElem.id()].childNodes = [];
        }

        for (var id in mappedArr)
        {
            var mappedElem = mappedArr[id];

            // If the element is not at the root level, add it to its parent array of children.
            if (mappedElem.parent().length > 0)
            {
                mappedArr[mappedElem.parent().id()].childNodes.push(mappedElem);
            }
            // If the element is at the root level, add it to first level elements array.
            else
            {
                tree.push(mappedElem);
            }
        }
        return tree;
    };

    /*
     * Creates graph hierarchy from given flat list of nodes list, nodes list is assumed to have parent-child
     * relationship by a field 'parent' which represents to the id of the parent node This function is specific
     * for the needs of TCGA Pathway Curation Tool 04/07/2016
     *
     * @param nodes {array}: flat list of nodes of a graph
     * @return {array}: Tree representation in array, entries are root level nodes. node.children gives children nodes
     * of each node in the returned array.
     * a node in corresponding level.
     *
     * */
    static createGraphHierarchyRealTime(nodes)
    {
        //Some arrays and maps for creating graph hierarchy
        var tree = [];
        var mappedArr = {};

        // First map the nodes of the array to an object -> create a hash table.
        for (var i = 0, len = nodes.length; i < len; i++)
        {
            var arrElem = nodes[i];
            mappedArr[arrElem.data.id] = arrElem;
            mappedArr[arrElem.data.id].children = [];
        }
        for (var id in mappedArr)
        {
            var mappedElem = mappedArr[id];

            // If the element is not at the root level, add it to its parent array of children.
            if (mappedElem.data.parent != -1)
            {
                mappedArr[mappedElem.data.parent].children.push(mappedElem);
            }
            // If the element is at the root level, add it to first level elements array.
            else
            {
                tree.push(mappedElem);
            }
        }
        return tree;
    };
}