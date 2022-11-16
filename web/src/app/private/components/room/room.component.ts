import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DiagramComponent,
  IExportOptions,
  PaletteModel,
  PrintAndExportService,
  SymbolPreviewModel,
} from '@syncfusion/ej2-angular-diagrams';
import { UserI } from 'src/app/models/user.interface';
import { ConnectionService } from '../../services/connection-service/connection.service';
import { DiagramService } from '../../services/diagram-service/diagram.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [PrintAndExportService],
})
export class RoomComponent {
  participants: UserI[] = [];
  nameRoom: string = '';
  dataRoom: object = {};
  room: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private diagramService: DiagramService,
    private connectionService: ConnectionService
  ) {
    this.room = this.activatedRoute.snapshot.params['id'];
    this.connectionService.joinRoom(this.room);
    this.connectionService.outEvent.subscribe((res) => {
      this.diagram.loadDiagram(res);
    });
    this.dataRoom = this.router.getCurrentNavigation().extras.state;
    this.participants = this.dataRoom['users'];
    this.nameRoom = this.dataRoom['name'];
  }

  @ViewChild('diagram', { static: false })
  public diagram?: DiagramComponent;

  public symbolPreviewSettings: SymbolPreviewModel =
    this.diagramService.symbolPreviewSettings();

  public symbolPalette: PaletteModel[] = this.diagramService.symbolPalette();

  public sendToServer(e: any) {
    if (
      e.state === 'Completed' ||
      e.state == 'Changed' ||
      e.element instanceof DiagramComponent
    ) {
      this.connectionService.emitEvent(this.diagram.saveDiagram());
      this.diagram?.loadDiagram(this.diagram?.saveDiagram());
    }
  }

  public exportDiagram(_: any): void {
    let exportOptions: IExportOptions = {};
    exportOptions.mode = 'Download';
    exportOptions.format = 'PNG';
    exportOptions.fileName = this.nameRoom;
    this.diagram.exportDiagram(exportOptions);
  }
}
