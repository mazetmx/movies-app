import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WatchListService {
  private watchListIds: string[] = [];

  private key = "APP_DATA";

  getWatchListIds() {
    const data = localStorage.getItem(this.key);

    return data ? JSON.parse(data) : [];
  }

  addWatchListId(id: string) {
    const currentIds = this.getWatchListIds();
    const newIds = [...currentIds, id]
    localStorage.setItem(this.key, JSON.stringify(newIds));
  }

  removeWatchListId(id: string) {
    const currentIds = this.getWatchListIds();
    const newIds: string[] = currentIds.filter((n: string) => n !== id);
    localStorage.setItem(this.key, JSON.stringify(newIds));
  }

  contains(id: string) {
    return this.getWatchListIds().includes(id);
  }

  count() {
    return this.getWatchListIds().length;
  }
}
