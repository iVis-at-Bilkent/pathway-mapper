import autobind from 'autobind-decorator'
import { observable } from 'mobx'
import EditorActionsManager from './EditorActionsManager'
import FileOperationsManager from './FileOperationsManager'
import { observer } from 'mobx-react'

export default class PathwayActions {
  @observable
  selectedPathway: string
  fileManager: FileOperationsManager
  editor: EditorActionsManager
  pathwayHandler: (pathwayName: string) => void

  constructor(pathwayHandler: (pathwayName: string) => void) {
    this.pathwayHandler = pathwayHandler
  }

  @autobind
  changePathway(pathwayName: string) {
    this.pathwayHandler(pathwayName)
  }

  @autobind
  newPathway() {
    this.fileManager.createNewPathway()
  }

  @autobind
  addNode(nodeType) {
    const nodeData = {
      type: nodeType.toUpperCase(),
      name: 'New ' + nodeType,
      w: '150',
      h: '52'
    }
    const posData = {
      x: this.editor.cy.height() / 2,
      y: this.editor.cy.width() / 2
    }

    this.editor.addNode(nodeData, posData)
  }

  @autobind
  saveAsPng() {
    this.fileManager.saveAsPNG()
  }

  @autobind
  editorHandler(editor, fileManager) {
    this.editor = editor
    this.fileManager = fileManager
  }

  @autobind
  loadSampleData() {
    const data =
      'gene\tlung\tovarian\tx\ty\n' +
      'PTEN\t-7\t-20\t10\t20\n' +
      'NF1\t-12\t-4\t30\t20\n' +
      'PIK3CA\t18\t40\t-50\t20\n' +
      'KRAS\t11\t-5\t0\t20\n' +
      'BRAF\t0\t-2\t0\t20\n' +
      'AKT1\t3\t30\t-10\t20\n' +
      'AKT2\t6\t-3\t20\t20\n' +
      'AKT3\t6\t-3\t20\t20\n' +
      '\n'
    this.editor.addGenomicData(data)
  }

  @autobind
  performLayout() {
    this.editor.performLayout()
  }
}
