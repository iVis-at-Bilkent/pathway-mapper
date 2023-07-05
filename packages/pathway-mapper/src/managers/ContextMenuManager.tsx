import { EModalType } from "../ui/react-pathway-mapper";
import EditorActionsManager from "./EditorActionsManager";

export default class ContextMenuManager {
  private cy: any;
  private editor: EditorActionsManager;
  private handleOpen: (modalId: EModalType) => void;
  private undoRedoManager: any;
  private isCollaborative: any;
  constructor(
    cy: any,
    editor: EditorActionsManager,
    handleOpen: (modalId: EModalType) => void,
    undoRedoManager: any,
    isCollaborative: boolean
  ) {
    this.cy = cy;
    this.editor = editor;
    this.handleOpen = handleOpen;
    this.undoRedoManager = undoRedoManager;
    this.isCollaborative = isCollaborative;
    this.init();
  }

  init() {
    const classRef = this;

    const ctxMenus = this.cy.scratch('cycontextmenus')
      ? this.cy.contextMenus('get')
      : this.cy.contextMenus();

    let menuItems = [
      {
        id: 'deleteSelected',
        content: 'Delete Selected',
        coreAsWell: true,
        onClickFunction: () => {
          const selectedEles = this.cy.elements(':selected');
          classRef.editor.removeElement(selectedEles);
        },
        disabled: false,
        hasTrailingDivider: false,
      },
      {
        id: 'hideSelected',
        content: 'Hide Selected',
        coreAsWell: true,
        onClickFunction: function() {
          classRef.editor.hideSelectedNodes();
        },
        disabled: false,
        hasTrailingDivider: false,
      },
      {
        id: 'loadFromCBioPortal',
        content: 'Load From cBioPortal...',
        coreAsWell: true,
        onClickFunction: () => {
          this.handleOpen(EModalType.STUDY);
        },
        disabled: false,
        hasTrailingDivider: false,
      },
      //Context menu items when clicking on nodes/compounds
      {
        id: 'remove',
        content: 'Delete',
        selector: 'node, edge',
        onClickFunction: function(event) {
          var ele = event.target;
          // The function to be executed on click
          var selectedElements = classRef.cy.nodes(':selected').union(ele);
          classRef.editor.removeElement(selectedElements);
        },
        disabled: false,
        hasTrailingDivider: false,
        coreAsWell: false,
      },
      {
        id: 'addSelected',
        content: 'Add Selected Into This',
        selector: 'node',
        onClickFunction: function(event) {
          var ele = event.target;
          var selectedNodes = classRef.cy.nodes(':selected');
          var containerType = ele.data('type');
          var validNodes = classRef.cy.collection();

          //Do nothing if node is GENE
          if (
            ele._private.data['type'] === 'GENE' ||
            selectedNodes.size() < 1
          ) {
            return;
          }
          //Prevent actions like adding root node to children & addition to itself
          else {
            var notValid = false;
            selectedNodes.forEach(function(tmpNode, i) {
              if (ele.id() == tmpNode.id()) {
                notValid = true;
                return false;
              }

              if (tmpNode.isParent()) {
                notValid = classRef.isChildren(tmpNode, ele);
                if (notValid) {
                  return false;
                }
              }

              return true;
            });

            if (notValid) {
              return;
            }
          }

          let childsToBeRemoved = [];
          selectedNodes.forEach(function(tmpNode1) {
            selectedNodes.forEach(function(tmpNode2) {
              if (classRef.isChildren(tmpNode1, tmpNode2)) {
                childsToBeRemoved.push(tmpNode2);
              }
            });
          });

          childsToBeRemoved.forEach(function(tmpNode) {
            tmpNode.unselect();
            selectedNodes = selectedNodes.filter(function(element) {
              return element != tmpNode;
            });
          });

          selectedNodes.forEach(function(tmpNode, i) {
            if (containerType == "FAMILY" || containerType == "COMPLEX") {
              if (
                tmpNode.data('type') != "COMPARTMENT" &&
                tmpNode.data('type') != "PROCESS"
              ) {
                validNodes = validNodes.add(tmpNode);
              }
            } else {
              validNodes = validNodes.add(tmpNode);
            }
          });

          var compId = ele.id();
          classRef.editor.changeParents(validNodes, compId);
          //Unselecting nodes to remove them from selectedNodeStack
          selectedNodes.unselect();
        },
        disabled: false,
        hasTrailingDivider: false,
        coreAsWell: false,
      },
      {
        id: 'removeSelected',
        content: 'Remove Selected From Parent',
        selector: 'node',
        onClickFunction: function(event) {
          const ele = event.target;
          const selectedNodes = classRef.cy.nodes(':selected');

          let notValid = false;
          selectedNodes.forEach(function(tmpNode, i) {
            if (tmpNode.isParent()) {
              notValid = classRef.isChildren(tmpNode, ele);
              if (notValid) {
                return false;
              }
            }

            return true;
          });

          if (notValid) {
            return;
          }

          classRef.editor.changeParents(selectedNodes, null);
          //Unselecting nodes to remove them from selectedNodeStack
          selectedNodes.unselect();
        },
        disabled: false,
        hasTrailingDivider: false,
        coreAsWell: false,
      },
      {
        id: 'performLayout',
        content: 'Perform Layout',
        coreAsWell: true,
        onClickFunction: () => {
          this.editor.performLayout();
        },
        disabled: false,
        hasTrailingDivider: false,
      },
    ];
    let nonCollabItems = [
      //Context menu items when clicking on blank space
      {
        id: 'undoAction',
        content: 'Undo',
        coreAsWell: true,
        onClickFunction: () => {
          this.undoRedoManager.undo();
        },
        disabled: false,
        hasTrailingDivider: false,
      },
      {
        id: 'redoAction',
        content: 'Redo',
        coreAsWell: true,
        onClickFunction: () => {
          this.undoRedoManager.redo();
        },
        disabled: false,
        hasTrailingDivider: false,
      },
    ];

    if (!this.isCollaborative) {
      menuItems = menuItems.concat(nonCollabItems);
    }
    ctxMenus.appendMenuItems(menuItems);
  }

  //TODO better move this to another class
  //Utility function to check whether query node is children of given node
  isChildren(node, queryNode) {
    var parent = queryNode.parent()[0];
    while (parent) {
      if (parent.id() == node.id()) {
        return true;
      }
      parent = parent.parent()[0];
    }
    return false;
  }
}
