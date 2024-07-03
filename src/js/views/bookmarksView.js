import View from './View';
import PreviewView from './PreviewView';
class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');

    _message = '';
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

    _generateMarkup() {

        return this._data
            .map(bookmark => PreviewView.render(bookmark, false))
            .join('');

    }



}
export default new BookmarksView();