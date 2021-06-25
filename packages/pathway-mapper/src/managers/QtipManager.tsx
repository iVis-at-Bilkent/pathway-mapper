import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import EditorActionsManager from "./EditorActionsManager";
export default class QtipManager{
  private cy: any;
  private editor: any;
  constructor(cy: any, editor: EditorActionsManager)
  {
    this.cy = cy;
    this.editor = editor;
  }

  generateEdgeQtip(edge) {
    const self = this;
    const pubmedURL = 'https://www.ncbi.nlm.nih.gov/pubmed/';
    const pubmedData = edge.data('pubmedIDs');

    const wrapper = document.createElement('div');

    // header
    const header = document.createElement('div');
    header.classList.add('row', 'node-tooltip-header');
    header.innerHTML = "INTERACTION DETAILS";

    wrapper.append(header);

    // edge label input
    const textInputWrapper = document.createElement('div');
    textInputWrapper.classList.add('col-xs-6', 'inputCol');

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = edge.data('name');
    inputElement.classList.add('form-control');

    inputElement.addEventListener("change", function(event) {
      // @ts-ignore
      const value = event.target.value;
      self.editor.changeName(edge, value);
    });

    textInputWrapper.appendChild(inputElement);

    const edgeLabelRowElement = document.createElement('div');
    edgeLabelRowElement.classList.add('row', 'geneDetails');
    const colElement = document.createElement('div');
    colElement.classList.add('col-xs-6', 'qtipLabel');
    colElement.innerHTML = "Label:";

    edgeLabelRowElement.appendChild(colElement);
    edgeLabelRowElement.appendChild(textInputWrapper);

    wrapper.appendChild(edgeLabelRowElement);
    
    wrapper.appendChild(document.createElement('hr'));

    // pubmed id input
    const pubmedTextInputWrapper = document.createElement('div');
    pubmedTextInputWrapper.classList.add('col-xs-6', 'inputCol');

    const pubmedIdInputElement = document.createElement('input');
    pubmedIdInputElement.type = 'text';
    pubmedIdInputElement.classList.add('form-control');

    pubmedIdInputElement.addEventListener("change", function(event) {
      // @ts-ignore
      const value = event.target.value;
      const pubmedIdsToAdd = value.split(';');
      
      // @ts-ignore
      event.target.value = "";

      self.editor.addPubmedIDs(edge, pubmedIdsToAdd);

      const pubmedIds = edge.data("pubmedIDs")
      generatePubmedLinks(pubmedIds);
    });

    pubmedTextInputWrapper.appendChild(pubmedIdInputElement);

    const pubmedIdRowElement = document.createElement('div');
    pubmedIdRowElement.classList.add('row', 'geneDetails');
    const pubmedIdColElement = document.createElement('div');
    pubmedIdColElement.classList.add('col-xs-6', 'qtipLabel');
    pubmedIdColElement.innerHTML = "Add Pubmed ID(s):";

    pubmedIdRowElement.appendChild(pubmedIdColElement);
    pubmedIdRowElement.appendChild(pubmedTextInputWrapper);

    wrapper.appendChild(pubmedIdRowElement);

    if (pubmedData.length > 0) {
      generatePubmedLinks(pubmedData);
    }

    function generatePubmedLinks(argData) {
      if (document.getElementsByClassName("pubmedIDList").length > 0) {
        document.getElementsByClassName("pubmedIDList").item(0).remove();
      }
      const pubmedIdListWrapper = document.createElement('div');
      pubmedIdListWrapper.classList.add("pubmedIDList");

      pubmedIdListWrapper.appendChild(document.createElement('hr'));

      const pubmedIdLabel = document.createElement('label');
      pubmedIdLabel.classList.add("col-xs-12", "pubmedIDLabel");
      pubmedIdLabel.innerHTML = "Pubmed IDs";

      pubmedIdListWrapper.appendChild(pubmedIdLabel);

      for (var key in argData)
      {
        if(!argData.hasOwnProperty(key)){
          continue;
        }
        const pubmedId = argData[key];

        if (isNaN(pubmedId))
          continue;

        const pubmedIdListElement = document.createElement('div');

        const pubmedIdRemoveButton = document.createElement('i');
        pubmedIdRemoveButton.classList.add('fa', 'fa-times', 'qtipRemovePmedID');
        pubmedIdRemoveButton.setAttribute('aria-hidden', 'true');
        pubmedIdRemoveButton.setAttribute('pubmedId', pubmedId);

        pubmedIdRemoveButton.addEventListener("click", function(event) {
          (event.target as HTMLElement).parentElement.remove();
          const pubmedId = (event.target as HTMLElement).getAttribute('pubmedId');
          self.editor.removePubmedID(edge, [pubmedId]);
          const pubmedIds = edge.data('pubmedIDs');
          if (pubmedIds.length === 0) {
            document.getElementsByClassName("pubmedIDList").item(0).remove();
          }
        });
        
        const pubmedContent = document.createElement('div');
        const pubmedIdLabel = document.createElement('label');
        const pubmedIdLink = document.createElement('a');
        pubmedIdLink.setAttribute('target', '_blank');
        const pubmedLink = pubmedURL + pubmedId;
        pubmedIdLink.setAttribute('href', pubmedLink);
        pubmedIdLink.innerHTML = pubmedId.toString();

        pubmedIdLabel.appendChild(pubmedIdLink);
        pubmedContent.appendChild(pubmedIdLabel);
        pubmedContent.appendChild(pubmedIdRemoveButton);
        pubmedIdListElement.appendChild(pubmedContent);

        pubmedIdListWrapper.appendChild(pubmedIdListElement);
      }
      if (edge.data('pubmedIDs').length > 0) {
        wrapper.appendChild(pubmedIdListWrapper);
      }
    }

    wrapper.classList.add("tooltip-text-style");
    return wrapper;
  }

  generateNodeQtip(node) {
    const self = this;

    const header = document.createElement('div');
    header.classList.add('row', 'node-tooltip-header');
    header.innerHTML = node.data('type').toUpperCase() + " DETAILS";

    const textInputWrapper = document.createElement('div');
    textInputWrapper.classList.add('col-xs-8', 'inputCol');

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = node.data('name');
    inputElement.classList.add('form-control');

    inputElement.addEventListener("change", function(event) {
      // @ts-ignore
      const value = event.target.value;
      self.editor.changeName(node, value);
    });

    textInputWrapper.appendChild(inputElement);

    const wrapper = document.createElement('div');
    const rowElement = document.createElement('div');
    rowElement.classList.add('row', 'geneDetails');
    const colElement = document.createElement('div');
    colElement.classList.add('col-xs-4', 'qtipLabel');
    colElement.innerHTML = "Name:";

    rowElement.appendChild(colElement);
    rowElement.appendChild(textInputWrapper);

    wrapper.append(header);
    wrapper.append(rowElement);

    if (node.data('type') === "GENE") {
      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('row', 'centerText', 'geneDetails');
      
      const button = document.createElement('button');
      button.type = 'button';
      button.classList.add('btn', 'btn-default');
      button.innerHTML = "My Cancer Genome";
      button.addEventListener("click", function (event) {
        event.preventDefault();
        const name = node.data('name');
        window.open("https://www.mycancergenome.org/content/gene/" + name);
      })

      buttonWrapper.append(button);
      wrapper.append(buttonWrapper)
    }

    wrapper.classList.add("tooltip-text-style");
    return wrapper;
  }

  addQtipToElements(eles)
  {
    const self = this;
    eles.forEach(function(ele)
    {
      let ref = ele.popperRef();
      let dummyDomEle = document.createElement('div');
      document.body.appendChild(dummyDomEle);
      let tip = tippy(dummyDomEle, { // tippy props:
        getReferenceClientRect: ref.getBoundingClientRect, // https://atomiks.github.io/tippyjs/v6/all-props/#getreferenceclientrect
        trigger: 'manual', // mandatory, we cause the tippy to show programmatically.
        placement: 'bottom',
        interactive: true,
        theme: 'pathwaymapper',
        // your own custom props
        // content prop can be used when the target is a single element https://atomiks.github.io/tippyjs/v6/constructor/#prop
        content: () => {
           let content = ele.isNode() ? 
                        self.generateNodeQtip(ele) :
                        self.generateEdgeQtip(ele);
     
           return content;
        },
        onHidden(instance) {
          instance.destroy();
          dummyDomEle.remove();
        }
      });
      
      self.cy.one("pan zoom", function() {
        if (dummyDomEle && dummyDomEle["_tippy"]) {
          tip.hide();
        }
      });

      ele.one("showqtipevent", function()  {
        tip.show();
      });
    });
  }


  //Utility Functions
  capitalizeFirstLetter(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


}
