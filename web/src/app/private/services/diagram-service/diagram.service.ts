import { Injectable } from '@angular/core';
import { ConnectorModel, NodeModel, PaletteModel, SymbolPreviewModel } from '@syncfusion/ej2-angular-diagrams';

@Injectable({
  providedIn: 'root',
})
export class DiagramService {
  constructor() {}

  public symbolPreviewSettings(): SymbolPreviewModel {
    return {
      height: 75,
      width: 75,
      offset: {
        x: 0.5,
        y: 0.5,
      },
    };
  }

  public symbolPalette(): PaletteModel[] {
    return [
      { id: 'shapes', symbols: this.getFlowShapes(), title: 'Formas de Flujo' },
      { id: 'connectors', symbols: this.getConnectors(), title: 'Conectores' },
      { id: 'texts', symbols: this.getTexts(), title: 'Textos' },
    ];
  }

  public getFlowShapes(): NodeModel[] {
    let flowShapes: NodeModel[] = [
      { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
      { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
      { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
      { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
      { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
      { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
      { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
      { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
      { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
      {
        id: 'PreDefinedProcess',
        shape: { type: 'Flow', shape: 'PreDefinedProcess' },
      },
      { id: 'PaperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
      { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
      {
        id: 'Person',
        shape: {
          type: 'Path',
          data: 'M491.1,425.8c0,26.5-8.5,47.8-24.7,63.1s-37.5,23-64,23H110.5c-27.3,0-48.6-7.7-64.9-23 c-16.2-15.4-24.7-36.7-24.7-63.1c0-11.9,0-23,0.9-34.1c0.9-11.1,2.6-23,4.3-36.7s5.1-24.7,8.5-35.8c3.4-11.1,8.5-22.2,14.5-32.4 c6-10.2,12.8-19.6,20.5-27.3c7.7-7.7,17.1-13.7,28.2-17.9s23.9-6.8,37.5-6.8c1.7,0,6.8,2.6,13.7,6.8s15.4,10.2,24.7,16.2 c9.4,6,21.3,11.1,35.8,16.2c14.5,5.1,29.9,6.8,44.4,6.8c14.5,0,29.9-2.6,44.4-6.8c14.5-5.1,26.5-10.2,35.8-16.2 c9.4-6,17.9-11.1,24.7-16.2c6.8-5.1,11.9-6.8,13.7-6.8c13.7,0,25.6,2.6,37.5,6.8s20.5,10.2,28.2,17.9c7.7,7.7,14.5,16.2,20.5,27.3 c6,11.1,11.1,21.3,14.5,32.4c3.4,11.1,6.8,23,8.5,35.8c1.7,12.8,4.3,24.7,4.3,36.7S491.1,413.9,491.1,425.8z M384.4,128 c0,35-12.8,65.7-37.5,90.5c-24.7,24.7-55.5,37.5-90.5,37.5s-65.7-12.8-90.5-37.5S128.4,163,128.4,128s12.8-65.7,37.5-90.5 S221.4,0,256.4,0s65.7,12.8,90.5,37.5C371.6,62.3,384.4,93,384.4,128z',
        },
      },
    ];
    return flowShapes;
  }

  public getConnectors(): ConnectorModel[] {
    let connectors: ConnectorModel[] = [
      {
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link3',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link4',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link5',
        type: 'Bezier',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link6',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        sourceDecorator: { shape: 'Arrow' },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link7',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link8',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link9',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'Arrow' },
      },
      {
        id: 'Link10',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link11',
        type: 'Bezier',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 7' },
        targetDecorator: { shape: 'None' },
      },
      {
        id: 'Link12',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeDashArray: '10 8' },
        sourceDecorator: { shape: 'Arrow' },
        targetDecorator: { shape: 'Arrow' },
      },
    ];
    return connectors;
  }

  public getTexts(): NodeModel[] {
    let texts: NodeModel[] = [
      {
        id: 'Text1',
        shape: {
          type: 'Text',
          content: 'Texto',
        },
        style: {
          strokeColor: 'transparent',
          fill: 'none',
          color: 'black',
          textAlign: 'Center',
        },
      },
      {
        id: 'Text2',
        shape: {
          type: 'Text',
          content: 'Texto',
        },
        style: {
          strokeColor: 'none',
          fill: 'none',
          color: 'black',
          textAlign: 'Left',
        },
      },
      {
        id: 'Text3',
        shape: {
          type: 'Text',
          content: 'Texto',
        },
        style: {
          strokeColor: 'none',
          fill: 'none',
          color: 'black',
          textAlign: 'Right',
        },
      },
    ];
    return texts;
  }
}
