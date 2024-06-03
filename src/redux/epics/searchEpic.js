import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchSearchSuccess, fetchSearchFailure } from '../actions/searchActions';

const GOOGLE_PLACES_API = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=YOUR_API_KEY&input=';

export const searchEpic = action$ =>
  action$.pipe(
    ofType('FETCH_SEARCH'),
    mergeMap(action =>
      ajax.getJSON(`${GOOGLE_PLACES_API}${action.payload}`).pipe(
        map(response => fetchSearchSuccess(response)),
        catchError(error => of(fetchSearchFailure(error)))
      )
    )
  );

export const rootEpic = searchEpic;