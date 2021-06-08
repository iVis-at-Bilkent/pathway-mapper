import autobind from "autobind-decorator";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { EModalType, IColorValueMap } from "../ui/react-pathway-mapper";

const addButtonImg = require("../images/add.svg");
const deleteButtonImg = require("../images/delete-simple.svg");

interface IValueColorObj {
  value: string;
  color: string;
}

interface IProfilesColorSchemeModalProps {
  show: boolean;
  handleClose: (modalId: EModalType) => void;
  colorValueMapping: IColorValueMap;
  handleColorMappingChange: (colorMapping: IColorValueMap) => void;
}

@observer
export default class ProfilesColorSchemeModal extends React.Component<
  IProfilesColorSchemeModalProps,
  {}
> {
  @observable
  colorMappings: IValueColorObj[];

  @observable
  showUniqueValuesWarningModal: boolean;

  constructor(props: IProfilesColorSchemeModalProps) {
    super(props);
    makeObservable(this);
    this.initColorMappings();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.show === false && this.props.show === true) {
      this.initColorMappings();
    }
  }

  initColorMappings() {
    this.colorMappings = Object.entries(this.props.colorValueMapping)
      .map(([value, color]) => {
        return {
          value: value,
          color: color,
        };
      })
      .sort((o1, o2) => {
        return Number(o1.value) - Number(o2.value);
      });
  }

  @action.bound
  handleColorChange(index: number, color: string) {
    this.colorMappings[index].color = color;
  }

  @action.bound
  handleValueChange(index: number, value: string) {
    this.colorMappings[index].value = value;
  }

  @action.bound
  addDefaultColorMapping() {
    this.colorMappings.push({ value: "0", color: "#ffffff" });
  }

  @action.bound
  removeColorMapping(index: number) {
    this.colorMappings.splice(index, 1);
  }

  @action.bound
  setDefaultColorMapping() {
    this.colorMappings = [
      { value: "-100", color: "#0000ff" },
      { value: "0", color: "#ffffff" },
      { value: "100", color: "#ff0000" },
    ];
  }

  @action.bound
  setShowUniqueValuesWarningModal(val: boolean) {
    this.showUniqueValuesWarningModal = val;
  }

  @autobind
  handleSaveColorScheme(): boolean {
    const mapping = {};
    this.colorMappings.forEach((pair) => {
      mapping[pair.value] = pair.color;
    });

    if (Object.keys(mapping).length < 2) {
      this.setShowUniqueValuesWarningModal(true);
      return false;
    } else {
      this.props.handleColorMappingChange(mapping);
      return true;
    }
  }

  @autobind
  close() {
    this.props.handleClose(EModalType.PROFILES_COLOR_SCHEME);
  }

  render() {
    const mappingElements = this.colorMappings.map((mapping, index) => (
      <Row style={{ padding: "10px" }}>
        <Col md={2}></Col>
        <Col md={3}>
          <input
            value={mapping.value}
            style={{ width: "50px" }}
            onChange={(event) => {
              const value = event.target.value;
              this.handleValueChange(index, value);
            }}
          ></input>
        </Col>
        <Col md={3}>
          <input
            type="color"
            value={mapping.color}
            onChange={(event) => {
              const color = event.target.value;
              this.handleColorChange(index, color);
            }}
          />
        </Col>
        <Col md={1}>
          <img
            src={deleteButtonImg}
            className={
              "icon-small " +
              (this.colorMappings.length > 2 ? "icon-enabled" : "icon-disabled")
            }
            title={"Remove"}
            onClick={() => {
              this.removeColorMapping(index);
            }}
          ></img>
        </Col>
        <Col md={2}></Col>
      </Row>
    ));

    return (
      <Modal
        show={this.props.show}
        onHide={() => {
          this.close();
        }}
        bsSize="small"
      >
        <Modal.Header closeButton>
          <Modal.Title>Study Data Overlay Color Scheme</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row
            style={{
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Col md={2}></Col>
            <Col md={3}>
              <label>Value</label>
            </Col>
            <Col md={3}>
              <label>Color</label>
            </Col>
            <Col md={3}></Col>
          </Row>
          <hr className="horizontal-rule"></hr>
          {mappingElements}
          <img
            src={addButtonImg}
            className="icon-small icon-enabled"
            onClick={this.addDefaultColorMapping}
            title={"Add New Value-Color Mapping"}
          ></img>

          <Modal
            show={this.showUniqueValuesWarningModal}
            onHide={() => this.setShowUniqueValuesWarningModal(false)}
            bsSize="small"
          >
            <Modal.Header closeButton>Warning</Modal.Header>
            <Modal.Body>
              <p>Please set at least two unique value-color mappings.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  this.setShowUniqueValuesWarningModal(false);
                }}
              >
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              this.close();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              this.setDefaultColorMapping();
            }}
          >
            Default
          </Button>
          <Button
            onClick={() => {
              const close = this.handleSaveColorScheme();
              if (close) {
                this.close();
              }
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
