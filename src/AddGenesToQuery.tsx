import React from 'react';
import autobind from 'autobind-decorator';
import { Button } from 'react-bootstrap';

interface IAddGenesToQueryProps{
    checkedGenes: string[];
    store: any;
}

export default class AddGenesToQuery extends React.Component<IAddGenesToQueryProps, {}> {

    public render() {

        const geneText = this.props.checkedGenes.length > 0 ? `(${this.props.checkedGenes.join(", ")})` : "(none checked)";
        return (
            <div style={{ marginBottom: 15 }}>
                    <Button style={{ marginBottom: 2 }} disabled={this.props.checkedGenes.length < 1} onClick={this.onAddGenes}
                            bsSize="xsmall">Add genes in the pathway to the query</Button>
            </div>
        );
    }

    @autobind
    private onAddGenes() {
        // add genes and go back to oncoprint tab
        /*
        (window as any).routingStore.updateRoute({
            // @ts-ignore
            [QueryParameter.GENE_LIST]: `${(window as any).routingStore.query[QueryParameter.GENE_LIST]}\n${this.props.checkedGenes.join(" ")}`
                        // @ts-ignore

        },                                       `results/${ResultsViewTab.ONCOPRINT}`);*/
    }
}