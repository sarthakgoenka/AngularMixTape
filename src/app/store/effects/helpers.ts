// import { Params } from "@angular/router/src/shared";
import { Filters } from "../models/filters.model";
import {RouterNavigationAction} from "@ngrx/router-store";

export function createFilters(p): Filters {
  return {
    limit: parseInt(p['limit'], 10) || 6
  };
}

export function firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}

export function secondSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.children[0].firstChild;
}

export function allSegments(r: RouterNavigationAction) {
  let routerPath = r.payload.routerState.root.firstChild.routeConfig.path;
  r.payload.routerState.root.children.forEach(p => {
    routerPath += p.firstChild.routeConfig.path;
  });
  console.log('Path string', routerPath);
  return routerPath;
}

export function filterAllSegments(r: RouterNavigationAction, segment) {
  let routerPath = r.payload.routerState.root.firstChild.routeConfig.path;
  r.payload.routerState.root.children.forEach(p => {
    if (p.firstChild.routeConfig.path) {
      routerPath += '/' + p.firstChild.routeConfig.path;
    }
  });
  return routerPath === segment;
}
