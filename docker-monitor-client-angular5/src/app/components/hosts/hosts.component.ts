import {Component} from '@angular/core';
import {HostData} from '../../interfaces/host/host-data';
import {AppState} from '../../interfaces/state/app-state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ContainerActionData} from '../../interfaces/container/container-action-data';
import {ContainersActionsService} from '../../services/container/container-actions.service';
import {Router} from '@angular/router';
import {SelectedContainer} from '../../interfaces/container/selected-container';
import {SelectContainerService} from '../../services/container/select-container.service';
import {HostActionsService} from "../../services/host/host-actions.service";
import {addTag} from "../../interfaces/add-tag/add-tag";

@Component({
  selector: 'dm-hosts',
  templateUrl: 'hosts.component.html'
})
export class HostsComponent {
  hosts: Observable<HostData[]>;
  tags: Observable<string[]>;
  filterText: string;
  tagFilter: string[] = [];

  constructor(private containersActionService: ContainersActionsService,
              private selectContainerService: SelectContainerService,
              private hostActionsService: HostActionsService,
              private store: Store<AppState>,
              private router: Router) {
    this.hosts = this.store.select<HostData[]>((state: AppState) => state.hosts);
    this.tags = this.store.select<string[]>((state: AppState) => state.tags);
  }

  onContainerAction(containerActionData: ContainerActionData) {
    this.containersActionService.doAction(containerActionData.action,
      containerActionData.hostName, containerActionData.id);
  }

  selectContainer(containerToSelect: SelectedContainer) {
    this.router.navigate(['/selectedContainer', containerToSelect.hostName, containerToSelect.id]);
  }

  trackByHostName(index: number, host: HostData): string {
    return host ? host.name : undefined;
  }

  removeHostByName(hostName: string): void {
    this.hostActionsService.removeHost(hostName);
  }

  onFilterTextChanged(text: string) {
    this.filterText = text;
  }

  onFilterTagChanged(tags: string[]) {
    this.tagFilter = tags;
  }

  addNewTag(tag: addTag): void {
    this.hostActionsService.addTag(tag);
  }

}
