import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError} from "rxjs/operators";
import { Actions ,  Effect , ofType } from "@ngrx/effects";;
import * as blogActions from "../actions/blog.action";

@Injectable()
export class BlogEffect {
  constructor(
    private actions: Actions,
  ) {}
}