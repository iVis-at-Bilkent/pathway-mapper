import _ from "lodash";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  Form,
  FormControl,
  InputGroup,
  Modal
} from "react-bootstrap";
import EditorActionsManager from "../managers/EditorActionsManager";
import { EModalType } from "../ui/react-pathway-mapper";
import PathwayActions from "../utils/PathwayActions";

interface ILayoutPropertiesProps {
  show: boolean;
  handleClose: (modelId: EModalType) => void;
  pathwayActions: PathwayActions;
}

export interface ILayoutProperties {
  name: string;
  animationDuration: number;
  animationEasing: string;
  nodeRepulsion: number;
  idealEdgeLength: number;
  edgeElasticity: number;
  nestingFactor: number;
  gravity: number;
  numIter: number;
  gravityRangeCompound: number;
  gravityCompound: number;
  gravityRange: number;
  tilingPaddingVertical: number;
  tilingPaddingHorizontal: number;
  initialEnergyOnIncremental: number;
  tile: boolean;
  animate: boolean;
  randomize: boolean;
}

@observer
export default class LayoutProperties extends React.Component<
  ILayoutPropertiesProps
> {
  static layoutProperties: ILayoutProperties;

  @observable
  internalLayoutProperties: ILayoutProperties;

  constructor(props: ILayoutPropertiesProps) {
    super(props);
    makeObservable(this);
    this.internalLayoutProperties = _.clone(
      EditorActionsManager.defaultLayoutProperties
    );
    LayoutProperties.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties);
  }

  @action.bound
  updateInternalLayoutProperty(property: string, val: boolean | number) {
    this.internalLayoutProperties[property] = val;
  }

  render() {

    return (
      <Modal
        id="layoutPropertiesDiv"
        show={this.props.show}
        onEnter={() => {
          this.internalLayoutProperties = _.clone(LayoutProperties.layoutProperties);
        }}
        onHide={() => {
          this.internalLayoutProperties = _.clone(LayoutProperties.layoutProperties);
          this.props.handleClose(EModalType.LAYOUT);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Layout Properties</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="layoutPropsForm" className="leftText">
          <Form>
            <InputGroup>
              <Col className="control-label" sm={6}>
                Node Repulsion:
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.nodeRepulsion.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("nodeRepulsion", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Ideal Edge Length:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.idealEdgeLength.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("idealEdgeLength", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Edge Elasticity:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.edgeElasticity.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("edgeElasticity", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Nesting Factor:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.nestingFactor.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("nestingFactor", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Gravity:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.gravity.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("gravity", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Gravity Range:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.gravityRange.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("gravityRange", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Compound Gravity:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.gravityCompound.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("gravityCompound", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Compound Gravity Range:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={
                    this.internalLayoutProperties.gravityRangeCompound.toString()
                  }
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("gravityRangeCompound", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Number of Iterations:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={this.internalLayoutProperties.numIter.toString()}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("numIter", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Tiling Vertical Padding:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={
                    this.internalLayoutProperties.tilingPaddingVertical.toString()
                  }
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("tilingPaddingVertical", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Tiling Horizontal Padding:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={
                    this.internalLayoutProperties.tilingPaddingHorizontal.toString()
                  }
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("tilingPaddingHorizontal", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Tile Disconnected:</ControlLabel>
              </Col>

              <Col sm={6}>
                <Checkbox
                  className="layProps"
                  checked={this.internalLayoutProperties.tile}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("tile", !this.internalLayoutProperties.tile);
                  }}
                ></Checkbox>
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="control-label" sm={6}>
                Animate:
              </Col>

              <Col sm={6}>
                <Checkbox
                  className="layProps"
                  checked={this.internalLayoutProperties.animate}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("animate",!this.internalLayoutProperties.animate);
                  }}
                ></Checkbox>
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Incremental:</ControlLabel>
              </Col>

              <Col sm={6}>
                <Checkbox
                  className="layProps"
                  checked={!this.internalLayoutProperties.randomize}
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("randomize", !this.internalLayoutProperties.randomize);
                  }}
                ></Checkbox>
              </Col>
            </InputGroup>
            <InputGroup>
              <Col className="rightAlignText" sm={6}>
                <ControlLabel>Incremental Cooling Factor:</ControlLabel>
              </Col>

              <Col sm={6}>
                <FormControl
                  type="number"
                  value={
                    this.internalLayoutProperties
                      .initialEnergyOnIncremental.toString()
                  }
                  onChange={(e: any) => {
                    this.updateInternalLayoutProperty("initialEnergyOnIncremental", Number(e.target.value));
                  }}
                />
              </Col>
            </InputGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              LayoutProperties.layoutProperties = _.clone(this.internalLayoutProperties);
              this.props.pathwayActions.setLayoutProperties(
                LayoutProperties.layoutProperties
              );
              this.props.handleClose(EModalType.LAYOUT);
            }}
          >
            Save
          </Button>

          <Button
            onClick={() => {
              this.internalLayoutProperties = _.clone(
                EditorActionsManager.defaultLayoutProperties
              );
              LayoutProperties.layoutProperties = _.clone(this.internalLayoutProperties);
              this.props.pathwayActions.setLayoutProperties(
                this.internalLayoutProperties
              );
            }}
          >
            Default
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
